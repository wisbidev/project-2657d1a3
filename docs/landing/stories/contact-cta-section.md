# Story: Contact & CTA Section

**Module:** `landing`
**Plan item:** Contact & CTA Section
**Implementing:** LANDING-005 (Contact form)

---

## User Story

> As a **Visitor**, I want to send a message to the team through a contact form, so that I can inquire about their services and expect a reply.

---

## In Scope

- A visually styled contact section with a section heading, descriptive subtext (CTA), and a 3-field form: Name, Email, Message.
- Client-side validation on form submit: required-field checks, email format validation, character limits (Name ≤ 100 chars, Message ≤ 2000 chars).
- Inline error messages below each invalid field with the correct error text.
- Loading state on the submit button (spinner replaces text, button disabled) during submission.
- `mailto:`-based form submission — on submit, encode form data into the email body and trigger the user's default mail client.
- Success state: the form is replaced by a confirmation message ("Thank you! We'll get back to you soon.").
- Error state: if the browser blocks the `mailto:` popup, show an error message with the team email address for manual copying.
- Double-submit prevention: while loading, the button is disabled.
- Graceful degradation: if JS is disabled, the raw `mailto:` fallback works with no client-side validation. The form elements still render.
- CTA subtext above the form encouraging the visitor to get in touch.
- Responsive layout: form container adapts padding on mobile per the design system tokens.
- Respects `prefers-reduced-motion` (loading spinner and success pop-in animation disabled).

## Out of Scope

- Server-side form processing (SMTP, API gateway, form service) — the project shape is `static` and deliberately omits this.
- Database or backend API — none exist; all validation is client-side.
- Email address configuration UI — the target email is hardcoded; changing it is a code change.
- File uploads, CAPTCHA, reCAPTCHA, or anti-spam measures — not required for v1.
- Multi-step forms, auto-reply, or confirmation email — not available without a backend.
- Contact section other than the form (e.g. map embed, phone number, address).

---

## UI Scope

The Contact section is the fifth and penultimate page section. It involves a single screen with **5 visual states**:

| State | Description |
|---|---|
| **Default (form)** | Section heading "Get In Touch", CTA subtext, 3 form fields (Name, Email, Message), and a full-width primary submit button. Rendered inside a white card with `--shadow-lg`. |
| **Validation error** | Same layout, but invalid fields show red border (`--error`), red focus ring, and an inline `.field-error` message beneath them. |
| **Loading** | Submit button text is hidden; a CSS spinner (`border: 2.5px solid rgba(255,255,255,0.3)` / `border-top-color: #fff`) is shown. Button has `cursor: not-allowed` and `opacity: 0.7`. |
| **Success** | Form fields and button are hidden. A green checkmark SVG with pop-in animation, heading "Thank you!", and a muted paragraph "We'll get back to you soon." are shown in their place. |
| **Error (mailto blocked)** | Same as success layout except: heading is "Something went wrong", paragraph is "Please email us directly at hello@webagent.team", and no animation plays. |

All states follow the design system tokens (section 2.7 — Contact Form, section 2.3 — Button Loading State, section 2.7 — Success State).

---

## Acceptance Criteria

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The Contact section is visible | Visitor views the section | A heading "Get In Touch", descriptive subtext, and a form with Name, Email, and Message fields plus a "Send Message" submit button are displayed |
| AC-2 | All fields are empty | Visitor clicks Submit | Inline error messages appear below each field: "Name is required", "Email is required", "Message is required". Nothing is submitted. |
| AC-3 | Name has valid text, Email and Message are empty | Visitor clicks Submit | Inline errors appear only on Email ("Email is required") and Message ("Message is required"). Name has no error. |
| AC-4 | Email has invalid format (e.g. "abc") | Visitor clicks Submit | Inline error "Please enter a valid email address" appears below the Email field. |
| AC-5 | Name exceeds 100 characters | Visitor clicks Submit | Inline error "Name must be under 100 characters" appears below the Name field. |
| AC-6 | Message exceeds 2000 characters | Visitor clicks Submit | Inline error "Message must be under 2000 characters" appears below the Message field. |
| AC-7 | All fields are valid | Visitor clicks Submit | Submit button shows a CSS spinner and text disappears; the button is disabled; `mailto:` link with form data in the body is triggered |
| AC-8 | `mailto:` opens the mail client successfully | The mail client opens | The form is replaced by a success message with a green checkmark, "Thank you!", and "We'll get back to you soon." |
| AC-9 | Browser blocks the `mailto:` popup | Submit is clicked | An error message replaces the form: "Something went wrong. Please email us directly at hello@webagent.team" |
| AC-10 | Visitor clicks Submit twice quickly | First click processing | Second click is ignored; the button remains in loading/disabled state |
| AC-11 | Form is in error or success state | Page is reloaded | Form returns to default state (fields cleared) |
| AC-12 | Viewport width ≤ 480px | Form renders | Form padding reduces to `28px 20px` per design system; inputs remain full-width |
| AC-13 | `prefers-reduced-motion: reduce` is set | Form submits successfully | Success checkmark appears instantly (no pop-in animation); spinner is static or hidden |

---

## Dependencies

- **None** — this story is self-contained within the `landing` module. It does not depend on any other plan item (Hero, Services, or Team). The Contact section is a standalone section that can be implemented and reviewed independently.

---

## Questions

No blocking questions. The SRS already specifies the default target email (`hello@webagent.team`) and all validation rules. The design system documents every component state. The story can proceed directly to test case writing.
