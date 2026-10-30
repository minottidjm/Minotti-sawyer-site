// Shared form definitions and validation, used in the browser and re-run on the server.

export type FieldDef = {
  name: string;
  label: string;
  required: boolean;
  type: "text" | "email" | "tel" | "url" | "textarea";
  maxLength: number;
  autoComplete?: string;
  hint?: string;
  requiredMessage?: string;
};

export const clientFields: FieldDef[] = [
  { name: "name", label: "Name", required: true, type: "text", maxLength: 120, autoComplete: "name" },
  { name: "email", label: "Email", required: true, type: "email", maxLength: 200, autoComplete: "email" },
  { name: "company", label: "Company", required: true, type: "text", maxLength: 160, autoComplete: "organization" },
  {
    name: "need",
    label: "Brief description of your hiring need",
    required: true,
    type: "textarea",
    maxLength: 3000,
    requiredMessage: "Please briefly describe your hiring need.",
    hint: "A few sentences is plenty. Please do not include confidential candidate information.",
  },
  { name: "role", label: "Role or title", required: false, type: "text", maxLength: 160 },
  { name: "timing", label: "Timing", required: false, type: "text", maxLength: 160, hint: "For example, \"within the next quarter.\"" },
  { name: "phone", label: "Phone", required: false, type: "tel", maxLength: 40, autoComplete: "tel" },
];

export const candidateFields: FieldDef[] = [
  { name: "name", label: "Name", required: true, type: "text", maxLength: 120, autoComplete: "name" },
  { name: "email", label: "Email", required: true, type: "email", maxLength: 200, autoComplete: "email" },
  {
    name: "interests",
    label: "Career interests",
    required: true,
    type: "textarea",
    maxLength: 3000,
    requiredMessage: "Please share your career interests.",
    hint: "The kinds of roles, organizations, and challenges that interest you.",
  },
  {
    name: "linkedin",
    label: "LinkedIn profile URL",
    required: false,
    type: "url",
    maxLength: 300,
    autoComplete: "url",
    hint: "For example, https://www.linkedin.com/in/your-name",
  },
  { name: "location", label: "Location preferences", required: false, type: "text", maxLength: 200 },
];

export type FieldErrors = Record<string, string>;
export type FormValues = Record<string, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+().\-\s]{7,40}$/;

export function readValues(fields: FieldDef[], data: FormData): FormValues {
  const values: FormValues = {};
  for (const field of fields) {
    const raw = data.get(field.name);
    values[field.name] = typeof raw === "string" ? raw.trim() : "";
  }
  return values;
}

export function validate(fields: FieldDef[], values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  for (const field of fields) {
    const value = values[field.name] ?? "";
    const label = field.label.toLowerCase();
    if (!value) {
      if (field.required) errors[field.name] = field.requiredMessage ?? `Please enter your ${label}.`;
      continue;
    }
    if (value.length > field.maxLength) {
      errors[field.name] = `Please keep this under ${field.maxLength} characters.`;
    } else if (field.type === "email" && !EMAIL_RE.test(value)) {
      errors[field.name] = "Please enter a valid email address, like name@company.com.";
    } else if (field.type === "tel" && !PHONE_RE.test(value)) {
      errors[field.name] = "Please enter a valid phone number.";
    } else if (field.type === "url" && !isHttpUrl(value)) {
      errors[field.name] = "Please enter a full web address starting with https://.";
    }
  }
  return errors;
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export type FormState =
  | { status: "idle" }
  | { status: "invalid"; errors: FieldErrors }
  | { status: "success" }
  | { status: "error"; reason: "unconfigured" | "delivery" };

export const initialFormState: FormState = { status: "idle" };

// Hidden field that people never fill in; automated submissions often do.
export const HONEYPOT_FIELD = "website";
