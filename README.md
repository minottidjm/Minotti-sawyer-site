# Minotti & Sawyer Associates website

Next.js 16 (App Router) + Tailwind CSS 4. Deployed with AWS Amplify.

## Local development

```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint
npm run build && npm run start   # production preview
```

## Where things live

- `app/lib/site.ts`: contact details, site URL, and the shared page metadata helper
- `app/lib/content.ts`: services, focus areas, process steps, partner profiles and contact details, and testimonials. The testimonials section stays hidden while its list is empty.
- `public/partners/`: partner headshots (720×720, cropped from the partners' own materials)
- `app/lib/forms.ts`: form fields and validation, shared by the browser and the server
- `app/actions.ts`: server actions for the client inquiry (`/contact`) and candidate introduction (`/candidates`) forms
- `app/lib/delivery.ts`: email delivery for form submissions
- `REVIEW-CHECKLIST.md`: content and configuration the partners must confirm before launch

## Form delivery

Forms send email through the [Resend](https://resend.com) HTTP API. Set these server-side
environment variables (never commit them; `.env*` files are git-ignored):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (secret). Use a key limited to sending access. |
| `INQUIRY_TO_EMAIL` | Recipient address(es), comma-separated |
| `INQUIRY_FROM_EMAIL` | Verified sender, e.g. `Website <inquiries@minottisawyer.com>` |

The settings are checked on each request to `/contact` and `/candidates`:

- **All three set:** the forms submit to the server, and a success message appears only after
  Resend accepts the email. If sending fails, the visitor sees "Your message was not sent" with a
  prepared-email alternative.
- **Any missing:** the forms never contact the server. The button becomes **Prepare Email**, which
  opens the visitor's own email app with their details filled in and says plainly that nothing is
  sent until they press Send. A "Copy my message" button and the visible address are offered as
  alternatives.

Submitted content is never logged. Failures log only an HTTP status.

**Never** give these variables a `NEXT_PUBLIC_` prefix. That would embed them in browser JavaScript.
A build with canary values confirmed that the current code does not place them in client bundles,
server bundles, or prerendered HTML; they are read only at request time.

## Deploying on AWS Amplify (proposed, not yet applied)

Server actions need Amplify's server-side (SSR) hosting. In the Amplify console, confirm the
app's platform is **Web Compute** (`WEB_COMPUTE`), not static `WEB`, before relying on the forms.

Amplify does not pass console environment variables to the Next.js server at runtime. The
documented approach is to write the needed variables to `.env.production` during the build, so
`next start` can read them on the server. A proposed build spec:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        # Copy only these exact variables; never print them to the build log.
        - env | grep -E '^(RESEND_API_KEY|INQUIRY_TO_EMAIL|INQUIRY_FROM_EMAIL)=' >> .env.production
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - .next/cache/**/*
      - node_modules/**/*
```

Safety notes for this approach:

- The `grep` copies only the three named variables. Do not use `env >> .env.production`, `cat`,
  `echo`, or `set -x` on these values; any of those can expose them in build logs.
- `.env.production` is created inside the build and deployed only with the server bundle. It is
  never in `public/`, so it is not served to visitors, and `.gitignore` keeps it out of git.
  Do not add it to the `cache` paths.
- Values must not contain `#` or line breaks (dotenv parsing). The suggested values do not.
- Amplify console environment variables are visible to anyone with console access to the app.
  For stricter control, Amplify can read secrets from AWS Systems Manager Parameter Store. Check
  the current Amplify documentation for how those are exposed to the build before choosing.
- Rotate the Resend key if it is ever pasted into a chat, ticket, log, or commit.

Compare this against the build settings currently in the Amplify console before replacing them.
Adding an `amplify.yml` to the repo overrides the console build settings on the next deploy.
