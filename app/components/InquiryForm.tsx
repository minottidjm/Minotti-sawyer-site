"use client";

import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import {
  HONEYPOT_FIELD,
  initialFormState,
  readValues,
  validate,
  type FieldDef,
  type FieldErrors,
  type FormState,
  type FormValues,
} from "../lib/forms";
import { site } from "../lib/site";

type Props = {
  formId: string;
  fields: FieldDef[];
  action: (prev: FormState, data: FormData) => Promise<FormState>;
  submitLabel: string;
  emailSubject: string;
  successTitle: string;
  successBody: string;
  // When false, the form never contacts the server: it prepares an email in the
  // visitor's own email app instead.
  deliveryConfigured: boolean;
};

const inputClass =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-base text-brand-navy placeholder:text-stone-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-1";

const buttonClass =
  "w-full rounded-full bg-brand-navy px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brand-navy-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy disabled:cursor-wait disabled:opacity-70 sm:w-auto";

export default function InquiryForm({
  formId,
  fields,
  action,
  submitLabel,
  emailSubject,
  successTitle,
  successBody,
  deliveryConfigured,
}: Props) {
  const [state, formAction, pending] = useActionState(action, initialFormState);
  // Client-side errors apply only to the server state they were computed against.
  const [clientCheck, setClientCheck] = useState<{ errors: FieldErrors; against: FormState } | null>(null);
  const [lastValues, setLastValues] = useState<FormValues>({});
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState<"idle" | "copied" | "failed">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  const errors: FieldErrors =
    clientCheck && clientCheck.against === state
      ? clientCheck.errors
      : state.status === "invalid"
        ? state.errors
        : {};

  useEffect(() => {
    if (state.status === "invalid") focusFirstError(state.errors);
    if (state.status === "success" || state.status === "error") messageRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(() => {
    if (prepared) messageRef.current?.focus();
  }, [prepared]);

  function focusFirstError(errs: FieldErrors) {
    const first = fields.find((f) => errs[f.name]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first.name}"]`)?.focus();
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    // Submit manually so React does not reset the fields after submission.
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = readValues(fields, data);
    setLastValues(values);
    setCopied("idle");
    const errs = validate(fields, values);
    setClientCheck({ errors: errs, against: state });
    if (Object.keys(errs).length > 0) {
      setPrepared(false);
      focusFirstError(errs);
      return;
    }
    if (!deliveryConfigured) {
      // Hand the message to the visitor's email app; nothing is sent from the site.
      setPrepared(true);
      window.location.href = buildMailto(emailSubject, fields, values);
      return;
    }
    startTransition(() => formAction(data));
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(`To: ${site.email}\nSubject: ${subjectFor(emailSubject, lastValues)}\n\n${bodyFor(fields, lastValues)}`);
      setCopied("copied");
    } catch {
      setCopied("failed");
    }
  }

  if (state.status === "success") {
    return (
      <div
        ref={messageRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-brand-olive/30 bg-brand-olive/10 p-6 focus:outline-none"
      >
        <h3 className="font-serif text-2xl text-brand-navy">{successTitle}</h3>
        <p className="mt-3 leading-7 text-stone-700">{successBody}</p>
      </div>
    );
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form
      ref={formRef}
      id={formId}
      // Without JavaScript, email mode falls back to the browser's own mailto handling.
      action={deliveryConfigured ? formAction : `mailto:${site.email}?subject=${encodeURIComponent(emailSubject)}`}
      method={deliveryConfigured ? undefined : "post"}
      encType={deliveryConfigured ? undefined : "text/plain"}
      onSubmit={onSubmit}
      noValidate
      className="space-y-6"
    >
      {!deliveryConfigured && (
        <div className="rounded-xl border border-brand-gold/50 bg-brand-cream p-4 text-sm leading-6 text-stone-800">
          <p className="font-semibold text-brand-navy">This form prepares an email for you to send.</p>
          <p className="mt-1">
            Online sending is not available yet. When you select <strong>Prepare Email</strong>, your
            email app opens a new message to {site.email} with your details filled in.{" "}
            <strong>Nothing is sent until you press Send in your email app.</strong>
          </p>
        </div>
      )}

      <p className="text-sm text-stone-600">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      {errorCount > 0 && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          Please correct {errorCount === 1 ? "the highlighted field" : `the ${errorCount} highlighted fields`}.
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `${formId}-${field.name}`;
          const error = errors[field.name];
          const describedBy = [field.hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;
          const common = {
            id,
            name: field.name,
            required: field.required,
            maxLength: field.maxLength,
            autoComplete: field.autoComplete,
            "aria-invalid": error ? true : undefined,
            "aria-describedby": describedBy,
            className: `${inputClass} ${error ? "border-red-500" : "border-stone-300"}`,
          };
          return (
            <div key={field.name} className={field.type === "textarea" ? "sm:col-span-2" : undefined}>
              <label htmlFor={id} className="block text-sm font-medium text-brand-navy">
                {field.label}
                {field.required ? (
                  <span aria-hidden="true" className="text-red-700"> *</span>
                ) : (
                  <span className="font-normal text-stone-500"> (optional)</span>
                )}
              </label>
              {field.hint && (
                <p id={`${id}-hint`} className="mt-1 text-sm text-stone-600">
                  {field.hint}
                </p>
              )}
              {field.type === "textarea" ? (
                <textarea rows={5} {...common} />
              ) : (
                <input type={field.type} {...common} />
              )}
              {error && (
                <p id={`${id}-error`} className="mt-2 text-sm text-red-700">
                  {error}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {deliveryConfigured && (
        // Hidden from people; catches automated submissions.
        <div aria-hidden="true" className="hidden">
          <label htmlFor={`${formId}-${HONEYPOT_FIELD}`}>Leave this field empty</label>
          <input id={`${formId}-${HONEYPOT_FIELD}`} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
        </div>
      )}

      {prepared && !deliveryConfigured && errorCount === 0 && (
        <div
          ref={messageRef}
          tabIndex={-1}
          role="status"
          className="rounded-xl border border-brand-gold/50 bg-brand-cream p-5 text-sm leading-6 text-stone-800 focus:outline-none"
        >
          <p className="font-semibold text-brand-navy">Your email app should now show a draft. It has not been sent.</p>
          <p className="mt-1">
            Please review the draft and press Send in your email app. If no draft appeared, copy your
            message and send it to{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand-navy underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <button
              type="button"
              onClick={copyMessage}
              className="rounded-full border-2 border-brand-navy px-4 py-2 font-semibold text-brand-navy hover:bg-brand-navy hover:text-white"
            >
              Copy my message
            </button>
            <span aria-live="polite">
              {copied === "copied" && "Copied. Paste it into a new email."}
              {copied === "failed" && "Copying is not available in this browser. Please copy the fields above."}
            </span>
          </div>
        </div>
      )}

      {state.status === "error" && (
        <div
          ref={messageRef}
          tabIndex={-1}
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-900 focus:outline-none"
        >
          <p className="font-semibold">Your message was not sent.</p>
          <p className="mt-1">
            Something went wrong while sending. Your details are still in the form. Please email us
            instead. The link below opens your email app with your message filled in, ready for you to send.
          </p>
          <a
            href={buildMailto(emailSubject, fields, lastValues)}
            className="mt-3 inline-block font-semibold text-brand-navy underline underline-offset-4"
          >
            Prepare an email to {site.email}
          </a>
        </div>
      )}

      <div className="space-y-3">
        <button type="submit" disabled={pending} className={buttonClass}>
          {deliveryConfigured ? (pending ? "Sending…" : submitLabel) : "Prepare Email"}
        </button>
        {!deliveryConfigured && (
          <p className="text-sm leading-6 text-stone-600">
            Opens your email app. You will need to press Send yourself. Or write to us directly at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand-navy underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

function subjectFor(subject: string, values: FormValues) {
  return values.name ? `${subject}: ${values.name}` : subject;
}

function bodyFor(fields: FieldDef[], values: FormValues) {
  return fields
    .filter((f) => values[f.name])
    .map((f) => `${f.label}:\n${values[f.name]}`)
    .join("\n\n");
}

function buildMailto(subject: string, fields: FieldDef[], values: FormValues) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subjectFor(subject, values))}&body=${encodeURIComponent(bodyFor(fields, values))}`;
}
