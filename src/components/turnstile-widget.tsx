"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";
import { ShieldCheck } from "lucide-react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: Record<string, unknown>,
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

export function TurnstileWidget({
  action,
  onTokenChange,
  resetSignal,
}: {
  action: string;
  onTokenChange: (token: string) => void;
  resetSignal: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const renderWidget = useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile) return;
    if (widgetIdRef.current) window.turnstile.remove(widgetIdRef.current);

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action,
      language: "de",
      theme: "light",
      size: "flexible",
      appearance: "always",
      "response-field": false,
      callback: (token?: string) => onTokenChange(token ?? ""),
      "expired-callback": () => onTokenChange(""),
      "error-callback": () => onTokenChange(""),
    });
  }, [action, onTokenChange, siteKey]);

  useEffect(() => {
    renderWidget();
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget, resetSignal]);

  return (
    <div className="space-y-2">
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderWidget}
      />
      <div
        ref={containerRef}
        className="min-h-[65px] w-full overflow-hidden rounded-xl"
        aria-label="Sicherheitsprüfung"
      />
      <p className="flex items-center gap-1.5 text-xs leading-5 text-muted-foreground">
        <ShieldCheck className="size-4 text-emerald-600" aria-hidden="true" />
        Diese Sicherheitsprüfung schützt das Formular vor Spam.
      </p>
    </div>
  );
}
