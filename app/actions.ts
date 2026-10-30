"use server";

import { deliverInquiry } from "./lib/delivery";
import {
  candidateFields,
  clientFields,
  HONEYPOT_FIELD,
  readValues,
  validate,
  type FieldDef,
  type FormState,
} from "./lib/forms";

async function handle(
  fields: FieldDef[],
  data: FormData,
  build: (values: Record<string, string>) => Parameters<typeof deliverInquiry>[0],
): Promise<FormState> {
  // Treat a filled honeypot as a failed send rather than pretending it was delivered.
  if (data.get(HONEYPOT_FIELD)) return { status: "error", reason: "delivery" };

  const values = readValues(fields, data);
  const errors = validate(fields, values);
  if (Object.keys(errors).length > 0) return { status: "invalid", errors };

  const result = await deliverInquiry(build(values));
  return result.ok ? { status: "success" } : { status: "error", reason: result.reason };
}

export async function submitClientInquiry(_prev: FormState, data: FormData): Promise<FormState> {
  return handle(clientFields, data, (v) => ({
    subject: `Hiring inquiry: ${v.company}`,
    replyTo: v.email,
    lines: [
      ["Name", v.name],
      ["Email", v.email],
      ["Company", v.company],
      ["Hiring need", v.need],
      ["Role", v.role],
      ["Timing", v.timing],
      ["Phone", v.phone],
    ],
  }));
}

export async function submitCandidateIntroduction(_prev: FormState, data: FormData): Promise<FormState> {
  return handle(candidateFields, data, (v) => ({
    subject: `Candidate introduction: ${v.name}`,
    replyTo: v.email,
    lines: [
      ["Name", v.name],
      ["Email", v.email],
      ["Career interests", v.interests],
      ["LinkedIn", v.linkedin],
      ["Location preferences", v.location],
    ],
  }));
}
