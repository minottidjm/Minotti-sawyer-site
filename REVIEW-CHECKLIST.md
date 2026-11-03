# Pre-launch review checklist for Dan and Bill

Nothing below is published as a claim on the site until you confirm it. Items marked
**needs confirmation** already appear on the preview in neutral wording. Please confirm them or ask for edits.

## 1. Status of supplied materials

**Contact details: supplied and in place.**
- [x] Dan Minotti: dan@minottisawyer.com, mobile 704-414-0237, LinkedIn `/in/daniel-minotti-57905b3/`
- [x] Bill Sawyer: bill@minottisawyer.com, mobile 952-738-1531, LinkedIn `/in/sawyerbill/`
- [x] Shown with each profile (homepage and About), on the contact page, in the homepage "Talk with us directly" card, in the footer, and as two separate email options on `/candidates`.
- [x] `minottidjm@gmail.com` has been removed. The prepared-email fallback on both forms now addresses **dan@minottisawyer.com only**. Bill is not copied automatically.
- [x] The website domain and canonical URLs remain `www.minottisawyerassociates.com`. Email uses `minottisawyer.com`.

**Biographies and headshots: approved by Dan and Bill.**
Source: the partners' introduction presentation (slides 2, 6, 8, and 9). Neither the presentation nor its client-specific content was copied into the site.
- [x] **Dan's biography** (About page) and **short introduction** (homepage): approved. It covers 27 years of consulting experience; more than two decades at Accenture, including Managing Director and leadership of the Midwest Consumer Goods and Agribusiness practice; Technology Partner at EY; SAP and cloud transformations across business functions; and how that experience informs his assessment of leadership judgment and execution capability.
- [x] **Bill's biography** and **short introduction**: approved. It covers more than 25 years recruiting senior executives; Executive Talent Acquisition Leader at EY Consulting, recruiting Partner, Principal, and Managing Director roles; earlier leadership roles with Grant Thornton, Carlson Companies, and executive search firms; and how his corporate and search experience informs candidate engagement and leadership assessment.
- [x] **Titles:** both shown as "Co-Founder & Partner".
- [x] **Perspective labels:** "Business and transformation perspective" (Dan) and "Executive search and talent perspective" (Bill), adapted from slide 6.
- [x] **Headshots** (`public/partners/`): taken from the presentation's embedded images, with the slide frame and shadow cropped off, then saved as 720×720 squares with no metadata. Framing approved, and permission to publish both photos confirmed.
- [ ] Optional: replace them with higher-resolution originals (at least 800×800) if available. Bill's source photo is darker than Dan's.
- [x] Alt text: "Portrait of Dan Minotti" and "Portrait of Bill Sawyer".

**Deliberately left out** (from the presentation, for now):
- the placement count (approximately 100 SAP leader hires);
- program values ($150M+, $175M);
- the EY SAP practice revenue growth;
- team-size and user-count figures;
- the EY–Nottingham Spirk Innovation Center;
- the phrase "retained executive search firm specializing in technology and ERP transformation leadership", which no longer matches the three service models and four focus areas;
- the client named in the presentation, which does not appear anywhere on the site.

Keep these out for now (confirmed). Add any of them later only with verified wording.

**Still to supply**
- [ ] **Testimonials or search examples** (optional, deferred for now): for each, the exact text, the attribution wording, and written permission from the person or client quoted. The section stays hidden until then.
- [x] **Location:** "Minnesota" in the footer is confirmed.
- [ ] **Privacy notice:** the forms collect names, emails, and career information. A short privacy policy page is recommended before launch.

## 2. Form delivery: remaining launch steps

**Current behavior (no delivery configured):** both forms show **Prepare Email**. After validation,
this opens the visitor's own email app with a draft to `dan@minottisawyer.com` containing everything
they entered. The page states that nothing is sent until they press Send, and offers "Copy my
message" and the visible email address as alternatives. The site never contacts the server and
never claims a message was sent.

**After configuration:** the forms submit to the server and show success only after Resend accepts
the email.

Steps, each needing your approval (no AWS or DNS changes have been made):
- [ ] Create a Resend account and verify a sending domain, most likely `minottisawyer.com` (the business email domain). This adds DNS records (SPF/DKIM) at that domain's DNS provider. Check first that they will not conflict with your existing email records.
- [ ] Create a Resend API key with **sending access only**.
- [ ] Decide where inquiries should go (`INQUIRY_TO_EMAIL`, for example Dan only, or both partners comma-separated) and the sender (`INQUIRY_FROM_EMAIL`). This is a separate choice from the prepared-email fallback, which addresses Dan only.
- [ ] In Amplify, confirm the app runs on the **Web Compute (SSR)** platform.
- [ ] Add the three variables in Amplify for the chosen branch, and update the build settings so they are copied to `.env.production` at build time (proposed spec and safety notes in README).
- [ ] Prefer Amazon SES instead? Only `app/lib/delivery.ts` needs to change.

**Successful-delivery test (required before launch)**

*A. Local test (no deployment needed)*
1. Create `.env.local` (git-ignored) with the real key, `INQUIRY_TO_EMAIL` set to a test inbox you control, and the verified sender.
2. Run `npm run build && npm run start` and open http://localhost:3000/contact. The button should read "Discuss My Hiring Need", with no "Prepare Email" note.
3. Submit the client form with test data, including a line break and symbols (`& ? # é`) in the hiring need.
   Expect the "Thank you. Your message has been sent." message.
4. Confirm the email arrives with all fields intact, the subject "Hiring inquiry: <company>", and that **Reply** addresses the submitter.
5. Repeat on `/candidates` with a LinkedIn URL. Expect the subject "Candidate introduction: <name>".
6. Change the key to an invalid value, restart, and submit again. Expect "Your message was not sent" with the prepared-email link, and no success message.
7. Check the terminal output: only a status line such as "Inquiry delivery failed with status 401", never submitted details.
8. Delete `.env.local` when finished, or keep it out of any shared folder.

*B. Amplify branch test (after you approve a non-production deployment)*
1. Repeat steps 3–6 on the Amplify preview URL.
2. In the Amplify or CloudWatch logs, confirm there is no submitted content and no secret values.
3. In the browser's developer tools, search the page's JavaScript files for `re_` and the recipient address. Expect no matches.

*C. After launch:* send one real inquiry through each form and confirm receipt.

## 3. Wording to confirm (needs confirmation)

**Services: confirmed.** The site now offers **Retained Search**, **Contingent Search**, and **Exclusive Search**, using the approved descriptions word for word, and states "For every engagement, scope, fees, and responsibilities are agreed before work begins."
- [x] Engaged Search and Embedded Talent Partnership have been removed from all public pages, cards, links, and metadata.
- [x] Old links still work: `/services#retained-executive-search` lands on Retained Search, and `/services#engaged-search` and `/services#embedded-talent-partnership` land at the top of the service list.
- [x] No fee percentages, exclusivity periods, guarantees, or payment deadlines appear anywhere.
- [x] "At a glance" points under each service: approved. They restate the approved descriptions and add nothing new.
- [x] Homepage card summaries: approved. Exclusive Search reads: "Minotti & Sawyer as your sole recruiting partner for an agreed period, with payment due upon a successful hire."

**How we work** (homepage and About)
- [ ] The five process steps: understand the business, define the role, reach the market, assess and present, support the decision.
- [ ] "You work directly with Dan and Bill… the same people who speak with candidates."
- [ ] "We keep our practice focused so that every client works directly with Dan and Bill." (About page)

**Candidate follow-up** (`/candidates`)
- [ ] "Dan and Bill read each introduction personally."
- [ ] "When your background and interests align with a current or upcoming search, we will contact you."
- [ ] "We keep your information confidential and use it only for search-related conversations with you."
- [ ] "Please do not attach or paste a résumé. If there is a fit, we will ask how you would like to share it."

**Client inquiry** (`/contact`)
- [ ] "Dan and Bill will review your note and follow up to arrange a conversation."
- [ ] "We use the information you share only to respond to your inquiry."

**Removed from the current site:** please tell us if any of these should return, with supporting detail.
- [ ] "Deep experience in private equity portfolio companies, industrial and manufacturing businesses, and founder-led growth companies" (old About page)
- [ ] "Especially well-suited to founder-led, investor-backed, and middle-market companies"
- [ ] The Insights placeholders (Minnesota Executive Hiring Outlook, U.S. Leadership Talent Market Report, Leadership Hiring Briefs)

## 4. Suggested role examples by focus area (not published)

These are **suggestions only**. They are not on the site and must not be presented as past placements.
Mark which ones represent roles you recruit for. Confirmed roles can be added as "Typical roles include…"

**Technology & Business Transformation**
- [ ] Chief Information Officer / Chief Technology Officer
- [ ] Chief Digital Officer / Chief Transformation Officer
- [ ] VP Enterprise Applications / ERP
- [ ] VP Program Management / Transformation Office lead
- [ ] VP Information Security / CISO

**Data, Analytics & AI**
- [ ] Chief Data Officer / Chief Data & Analytics Officer
- [ ] VP / Head of Data Science or AI
- [ ] Director of Data Engineering / Data Platform
- [ ] Director of Business Intelligence & Analytics
- [ ] Head of Data Governance

**Finance Leadership**
- [ ] Chief Financial Officer
- [ ] VP Finance / Divisional CFO
- [ ] Corporate Controller / Chief Accounting Officer
- [ ] VP / Director of FP&A
- [ ] Treasurer

**Supply Chain & Operations**
- [ ] Chief Operating Officer / Chief Supply Chain Officer
- [ ] VP Supply Chain / VP Operations
- [ ] VP Procurement / Strategic Sourcing
- [ ] VP / Director of Manufacturing or Plant Operations
- [ ] VP Logistics & Distribution

## 5. Housekeeping

- [ ] `public/oak-tree.png` carries a stock-image watermark ("KM Supplies") and is not used. Recommend deleting it.
- [ ] `public/logo.png` (the "MSA" mark) and `public/minotti-sawyer-logo.png` are not used. The site uses `minotti-sawyer-logo2.png`. Confirm which mark is current.
- [ ] The header now uses `public/minotti-sawyer-logo-cropped.png`, an exact crop of `minotti-sawyer-logo2.png` with the surrounding whitespace removed and no resizing or recoloring. For an even more legible header, a horizontal version of the logo (tree beside the name) from the original designer would work better than the stacked mark.
