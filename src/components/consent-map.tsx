"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  COOKIE_CHOICE_CHANGED_EVENT,
  type CookieChoice,
  getStoredCookieChoice,
  saveCookieChoice,
} from "@/lib/cookie-consent";

export function ConsentMap() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(getStoredCookieChoice() === "all");
    const updateConsent = (event: Event) => {
      setLoaded((event as CustomEvent<CookieChoice>).detail === "all");
    };
    window.addEventListener(COOKIE_CHOICE_CHANGED_EVENT, updateConsent);
    return () =>
      window.removeEventListener(COOKIE_CHOICE_CHANGED_EVENT, updateConsent);
  }, []);
  if (loaded)
    return (
      <iframe
        title="Standort Maria Schnee in Waldkraiburg"
        src="https://www.google.com/maps?q=Berliner%20Stra%C3%9Fe%2033a%2C%2084478%20Waldkraiburg&output=embed"
        className="h-[430px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  return (
    <div className="soft-grid grid h-[430px] place-items-center bg-sky-50 p-6 text-center">
      <div className="max-w-md">
        <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-white text-primary shadow-sm">
          <MapPin />
        </div>
        <h3 className="mt-5 text-xl font-bold">Google Maps anzeigen</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Die Karte ist zunächst deaktiviert. Erst mit Ihrer ausdrücklichen
          Einwilligung wird eine Verbindung zu Google hergestellt und es können
          Daten, insbesondere Ihre IP-Adresse, übertragen werden.
        </p>
        <Button
          onClick={() => saveCookieChoice("all")}
          className="mt-6 rounded-full"
        >
          Google Maps erlauben und laden
        </Button>
        <p className="mt-4 text-xs leading-5 text-muted-foreground">
          Ihre Einwilligung können Sie jederzeit über „Cookie-Einstellungen“ im
          Seitenfuß widerrufen.
        </p>
      </div>
    </div>
  );
}
