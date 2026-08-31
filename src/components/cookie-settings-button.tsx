"use client";

import { Cookie } from "lucide-react";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("maria-schnee-open-cookie-settings"))
      }
      className="inline-flex items-center gap-1.5 hover:text-primary"
    >
      <Cookie className="size-3.5" />
      Cookie-Einstellungen
    </button>
  );
}
