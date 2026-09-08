"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TurnstileWidget } from "@/components/turnstile-widget";

const schema = z.object({
  username: z.string().trim().min(3, "Bitte geben Sie Ihren Benutzernamen ein."),
  password: z.string().min(8, "Bitte geben Sie Ihr Passwort ein."),
});

type FormValues = z.infer<typeof schema>;

export function StaffLoginForm() {
  const router = useRouter();
  const [turnstileToken, setTurnstileToken] = useState("");
  const [resetSignal, setResetSignal] = useState(0);
  const [serverError, setServerError] = useState("");
  const onTokenChange = useCallback((token: string) => setTurnstileToken(token), []);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setServerError("");
    if (!turnstileToken) {
      setServerError("Bitte schließen Sie die Sicherheitsprüfung ab.");
      return;
    }
    try {
      const response = await fetch("/api/mitarbeiter/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, turnstileToken }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Die Anmeldung ist fehlgeschlagen.");
      router.replace("/mitarbeiterportal/dokumente");
      router.refresh();
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "Die Anmeldung ist fehlgeschlagen.");
      setTurnstileToken("");
      setResetSignal((value) => value + 1);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="username">Benutzername</Label>
        <Input
          id="username"
          autoComplete="username"
          className="h-12 bg-white"
          aria-invalid={Boolean(errors.username)}
          {...register("username")}
        />
        {errors.username && <p className="text-sm text-destructive">{errors.username.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Passwort</Label>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          className="h-12 bg-white"
          aria-invalid={Boolean(errors.password)}
          {...register("password")}
        />
        {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
      </div>
      <TurnstileWidget
        action="mitarbeiter_login"
        onTokenChange={onTokenChange}
        resetSignal={resetSignal}
      />
      {serverError && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </p>
      )}
      <Button type="submit" size="lg" className="h-12 w-full rounded-xl" disabled={isSubmitting}>
        <LogIn className="size-4" />
        {isSubmitting ? "Anmeldung läuft …" : "Sicher anmelden"}
      </Button>
    </form>
  );
}
