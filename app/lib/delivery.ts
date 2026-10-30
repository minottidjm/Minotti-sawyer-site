// Server-side email delivery for website inquiries. Only import from server code.
//
// Uses the Resend HTTP API (https://resend.com/docs/api-reference/emails/send-email)
// through fetch, so no extra dependency is needed. Configure with:
//   RESEND_API_KEY      API key (secret, never commit)
//   INQUIRY_TO_EMAIL    where inquiries are delivered (comma-separated for several)
//   INQUIRY_FROM_EMAIL  verified sender, e.g. "Website <inquiries@minottisawyerassociates.com>"
// If any value is missing, delivery reports "unconfigured" and the site shows the
// direct-email alternative instead of claiming success.

export type DeliveryResult = { ok: true } | { ok: false; reason: "unconfigured" | "delivery" };

export async function deliverInquiry({
  subject,
  replyTo,
  lines,
}: {
  subject: string;
  replyTo: string;
  lines: [label: string, value: string][];
}): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !from) return { ok: false, reason: "unconfigured" };

  const text = lines
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}:\n${value}`)
    .join("\n\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((address) => address.trim()),
        reply_to: replyTo,
        subject: subject.replace(/[\r\n]+/g, " ").slice(0, 200),
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      // Log the status only; never log submitted personal information.
      console.error(`Inquiry delivery failed with status ${response.status}`);
      return { ok: false, reason: "delivery" };
    }
    return { ok: true };
  } catch {
    console.error("Inquiry delivery failed: network error or timeout");
    return { ok: false, reason: "delivery" };
  }
}

export function isDeliveryConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.INQUIRY_TO_EMAIL && process.env.INQUIRY_FROM_EMAIL);
}
