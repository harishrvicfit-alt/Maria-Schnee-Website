"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConsentMap() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(localStorage.getItem("maria-schnee-cookie-choice") === "all");
    const updateConsent = (event: Event) => {
      setLoaded((event as CustomEvent<string>).detail === "all");
    };
    window.addEventListener(
      "maria-schnee-cookie-choice-changed",
      updateConsent,
    );
    return () =>
      window.removeEventListener(
        "maria-schnee-cookie-choice-changed",
        updateConsent,
      );
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
          Mit dem Laden der Karte stimmen Sie zu, dass Daten an Google
          übertragen werden können.
        </p>
        <Button onClick={() => setLoaded(true)} className="mt-6 rounded-full">
          Karte laden
        </Button>
      </div>
    </div>
  );
}
