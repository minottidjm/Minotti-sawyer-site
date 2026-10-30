# Pre-launch review checklist for Dan and Bill

Nothing below is published as a claim on the site until you confirm it. Items marked
**needs confirmation** already appear on the preview in neutral wording. Please confirm them or ask for edits.

## 1. Materials to supply

The "Meet Dan and Bill" section (homepage and About page) and the testimonials section stay
**hidden** until these are supplied and approved. Nothing is shown in their place.

**To turn on "Meet Dan and Bill"** (`partners` in `app/lib/content.ts`), for each partner:
- [ ] Full name as it should appear (Dan Minotti? Bill Sawyer? Confirm spelling and any middle initial)
- [ ] Title (for example, "Partner" or "Managing Partner")
- [ ] Bio of 80–150 words, written or approved by that partner. Name only credentials, employers, and results you are comfortable having verified.
- [ ] Headshot: square JPG or PNG, at least 800×800 px, with a plain background and permission to publish. Include the photographer's credit if it is required.
- [ ] One-sentence description of the photo for screen readers (for example, "Dan Minotti, smiling, in a navy jacket")
- [ ] LinkedIn profile URL (public profile link)
- [ ] Each partner's written approval of the final text

**To turn on testimonials or search examples** (`testimonials`), for each item (optional):
- [ ] Exact quote or example text
- [ ] Attribution wording (for example, "CFO, private manufacturing company"), with or without a name
- [ ] Written permission from the person or client quoted
- [ ] For search examples: confirmation that the client permits a description, and which details may be shown

**Other materials**
- [ ] **Business email address for the website** (for example, an address @minottisawyerassociates.com). The site currently shows `minottidjm@gmail.com`, which was already published on the live site.
- [ ] **Bill's direct contact details**, if they should be listed.
- [ ] **Location:** the site says "Minnesota", and the phone number has a 704 (North Carolina) area code. Please confirm both are correct.
- [ ] **Privacy notice:** the forms collect names, emails, and career information. A short privacy policy page is recommended before launch.

## 2. Form delivery: remaining launch steps

**Current behavior (no delivery configured):** both forms show **Prepare Email**. After validation,
this opens the visitor's own email app with a draft to `minottidjm@gmail.com` containing everything
they entered. The page states that nothing is sent until they press Send, and offers "Copy my
message" and the visible email address as alternatives. The site never contacts the server and
never claims a message was sent.

**After configuration:** the forms submit to the server and show success only after Resend accepts
the email.

Steps, each needing your approval (no AWS or DNS changes have been made):
- [ ] Create a Resend account and verify `minottisawyerassociates.com` as a sending domain. This adds DNS records (SPF/DKIM) at your DNS provider.
- [ ] Create a Resend API key with **sending access only**.
- [ ] Decide where inquiries should go (`INQUIRY_TO_EMAIL`, comma-separated for both partners) and the sender (`INQUIRY_FROM_EMAIL`).
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

**Services** (`app/lib/content.ts`): please confirm each list reflects how you actually work.
- [ ] Retained: working sessions to define the role; market mapping and direct outreach; structured assessment; curated shortlist; support through offer and acceptance; partner involvement throughout.
- [ ] Engaged: role profile; targeted outreach; screening before candidates reach the client; regular updates.
- [ ] Embedded: hiring strategy; scorecards and interview process; sourcing and pipeline management; pipeline reviews. The page states that it is "not the placement of a fractional or interim executive."
- [ ] "Each engagement is agreed with you before work begins." (No fees or contract terms appear anywhere.)

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
