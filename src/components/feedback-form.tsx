"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { EyeOff, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TurnstileWidget } from "@/components/turnstile-widget";

const schema = z
  .object({
    type: z.enum(["beschwerde", "anregung", "lob", "sonstiges"]),
    anonymous: z.boolean(),
    name: z.string().max(120).optional(),
    email: z
      .union([
        z.literal(""),
        z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
      ])
      .optional(),
    phone: z.string().max(80).optional(),
    subject: z
      .string()
      .min(3, "Bitte geben Sie einen kurzen Betreff ein.")
      .max(160),
    message: z
      .string()
      .min(20, "Bitte beschreiben Sie Ihr Anliegen in mindestens 20 Zeichen.")
      .max(5000),
    website: z.string().max(0).optional(),
    turnstileToken: z
      .string()
      .min(1, "Bitte führen Sie die Sicherheitsprüfung durch."),
    consent: z.boolean().refine(Boolean, {
      message: "Bitte bestätigen Sie den Datenschutzhinweis.",
    }),
  })
  .superRefine((data, context) => {
    if (!data.anonymous && (!data.name || data.name.trim().length < 2)) {
      context.addIssue({
        code: "custom",
        path: ["name"],
        message:
          "Bitte geben Sie Ihren Namen ein oder wählen Sie die anonyme Übermittlung.",
      });
    }
  });

type FormValues = z.infer<typeof schema>;

export function FeedbackForm() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      type: "anregung",
      anonymous: true,
      name: "",
      email: "",
      phone: "",
      website: "",
      turnstileToken: "",
      consent: false,
    },
  });

  const anonymous = watch("anonymous");
  const turnstileToken = watch("turnstileToken");
  const [turnstileReset, setTurnstileReset] = useState(0);
  const setTurnstileToken = useCallback(
    (token: string) =>
      setValue("turnstileToken", token, { shouldValidate: true }),
    [setValue],
  );

  const submit = async (data: FormValues) => {
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = (await response.json().catch(() => null)) as {
      message?: string;
    } | null;
    setTurnstileToken("");
    setTurnstileReset((value) => value + 1);
    if (!response.ok) {
      toast.error(
        result?.message ?? "Ihre Mitteilung konnte nicht gesendet werden.",
      );
      return;
    }
    toast.success(result?.message ?? "Vielen Dank für Ihre Rückmeldung.");
    reset();
  };

  return (
    <form
      id="feedbackformular"
      onSubmit={handleSubmit(submit)}
      className="space-y-6"
      noValidate
    >
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <Label htmlFor="feedback-website">Website</Label>
        <Input
          id="feedback-website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <Field
        label="Art der Rückmeldung *"
        id="feedback-type"
        error={errors.type?.message}
      >
        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                id="feedback-type"
                className="h-12 w-full bg-white"
              >
                <SelectValue placeholder="Bitte auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beschwerde">Beschwerde</SelectItem>
                <SelectItem value="anregung">Anregung</SelectItem>
                <SelectItem value="lob">Lob</SelectItem>
                <SelectItem value="sonstiges">Sonstige Rückmeldung</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </Field>

      <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-5">
        <div className="flex items-start gap-3">
          <Controller
            control={control}
            name="anonymous"
            render={({ field }) => (
              <Checkbox
                id="anonymous"
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
              />
            )}
          />
          <div>
            <Label
              htmlFor="anonymous"
              className="flex items-center gap-2 font-semibold"
            >
              <EyeOff className="size-4 text-sky-700" /> Anonym übermitteln
            </Label>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Bei anonymer Übermittlung werden Name, E-Mail-Adresse und
              Telefonnummer nicht mitgesendet.
            </p>
          </div>
        </div>
      </div>

      {!anonymous ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name *" id="feedback-name" error={errors.name?.message}>
            <Input
              id="feedback-name"
              autoComplete="name"
              className="h-12 bg-white"
              {...register("name")}
            />
          </Field>
          <Field
            label="E-Mail für eine Rückmeldung"
            id="feedback-email"
            error={errors.email?.message}
          >
            <Input
              id="feedback-email"
              type="email"
              autoComplete="email"
              className="h-12 bg-white"
              {...register("email")}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field
              label="Telefon (optional)"
              id="feedback-phone"
              error={errors.phone?.message}
            >
              <Input
                id="feedback-phone"
                type="tel"
                autoComplete="tel"
                className="h-12 bg-white"
                {...register("phone")}
              />
            </Field>
          </div>
        </div>
      ) : null}

      <Field
        label="Betreff *"
        id="feedback-subject"
        error={errors.subject?.message}
      >
        <Input
          id="feedback-subject"
          className="h-12 bg-white"
          {...register("subject")}
        />
      </Field>
      <Field
        label="Ihre Mitteilung *"
        id="feedback-message"
        error={errors.message?.message}
      >
        <Textarea
          id="feedback-message"
          rows={7}
          className="min-h-44 resize-y bg-white"
          {...register("message")}
        />
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <Controller
            control={control}
            name="consent"
            render={({ field }) => (
              <Checkbox
                id="feedback-consent"
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
              />
            )}
          />
          <Label
            htmlFor="feedback-consent"
            className="text-sm font-normal leading-6 text-muted-foreground"
          >
            Ich habe die Datenschutzhinweise gelesen. Mir ist bekannt, dass
            freiwillig im Nachrichtentext genannte personenbezogene Angaben zur
            Bearbeitung verarbeitet werden.
          </Label>
        </div>
        {errors.consent ? (
          <p className="mt-2 text-xs font-medium text-destructive">
            {errors.consent.message}
          </p>
        ) : null}
      </div>

      <div>
        <TurnstileWidget
          action="feedback"
          onTokenChange={setTurnstileToken}
          resetSignal={turnstileReset}
        />
        {errors.turnstileToken ? (
          <p className="mt-2 text-xs font-medium text-destructive">
            {errors.turnstileToken.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting || !turnstileToken}
        className="h-12 w-full rounded-full sm:w-auto"
      >
        {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
        {anonymous ? "Anonym senden" : "Rückmeldung senden"}
      </Button>
      <p className="text-xs leading-5 text-muted-foreground">
        Bitte übermitteln Sie keine medizinischen Notfalldaten. In akuten
        Notfällen wählen Sie 112.
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p className="text-xs font-medium text-destructive">{error}</p>
      ) : null}
    </div>
  );
}
