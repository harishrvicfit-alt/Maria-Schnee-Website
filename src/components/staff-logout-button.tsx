"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function StaffLogoutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function logout() {
    setPending(true);
    await fetch("/api/mitarbeiter/logout", { method: "POST" }).catch(() => null);
    router.replace("/mitarbeiterportal");
    router.refresh();
  }

  return (
    <Button type="button" variant="outline" className="h-10 rounded-xl" onClick={logout} disabled={pending}>
      <LogOut className="size-4" />
      Abmelden
    </Button>
  );
}
