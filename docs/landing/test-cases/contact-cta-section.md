# Test Cases — Contact & CTA Section (LANDING-005)

**Module:** landing  
**Function:** Contact & CTA Section  
**Risk level:** Medium — form handles user input and triggers an external protocol (`mailto:`); validation bugs lose leads.

---

## TC-1: Contact form renders with all required fields and submit button

**Requirement traceability:** LANDING-005 (Behaviour 1)

**Given** The Contact section is visible on the page  
**When** The visitor views the form  
**Then** The form displays three fields — Name (text input), Email (email input), Message (textarea) — and a visible Submit button

---

## TC-2: Valid submission triggers loading state and mailto: link

**Requirement traceability:** LANDING-005 (Behaviour 4, 5)

**Given** The visitor has filled Name (e.g. "Alice"), Email (e.g. "alice@example.com"), and Message (e.g. "I'd like to discuss a project") with valid values  
**When** The visitor clicks Submit  
**Then** The Submit button shows a loading state (spinner or disabled text), and a `mailto:` link is triggered with the form data encoded in the body

---

## TC-3: Successful mailto: shows success confirmation

**Requirement traceability:** LANDING-005 (Behaviour 5)

**Given** The `mailto:` link was triggered successfully  
**When** The browser handles the mailto: protocol (opens the default email client)  
**Then** The form is replaced by a success message: "Thank you! We'll get back to you soon."

---

## TC-4: Empty submission shows inline errors on all three fields

**Requirement traceability:** LANDING-005 (Behaviour 3)

**Given** All three form fields — Name, Email, Message — are empty  
**When** The visitor clicks Submit  
**Then** An inline error message appears beneath each field, and no `mailto:` link is triggered

---

## TC-5: Partial fill — only Name filled — shows inline errors on Email and Message

**Requirement traceability:** LANDING-005 (Behaviour 3)

**Given** The visitor has filled Name with "Alice", but Email and Message are empty  
**When** The visitor clicks Submit  
**Then** An inline error appears beneath the Email field and beneath the Message field; no `mailto:` link is triggered

---

## TC-6: Invalid email format shows email-specific inline error

**Requirement traceability:** LANDING-005 (Behaviour 3, AC-3)

**Given** The visitor has filled Name ("Alice") and Message ("Hello"), but Email contains an invalid value such as "abc"  
**When** The visitor clicks Submit  
**Then** An inline error appears beneath the Email field with text "Please enter a valid email address"; no `mailto:` link is triggered

---

## TC-7: Name exceeding 100 characters is rejected

**Requirement traceability:** LANDING-005 (Boundary: Name > 100 characters)

**Given** The visitor has entered a Name longer than 100 characters, a valid Email, and a valid Message  
**When** The visitor clicks Submit  
**Then** An inline error appears beneath the Name field with text "Name must be under 100 characters"; no `mailto:` link is triggered

---

## TC-8: Message exceeding 2000 characters is rejected

**Requirement traceability:** LANDING-005 (Boundary: Message > 2000 characters)

**Given** The visitor has entered a valid Name, a valid Email, and a Message longer than 2000 characters  
**When** The visitor clicks Submit  
**Then** An inline error appears beneath the Message field with text "Message must be under 2000 characters"; no `mailto:` link is triggered

---

## TC-9: Name with only whitespace is treated as empty

**Requirement traceability:** LANDING-005 (Boundary: Name is empty / only whitespace)

**Given** The Name field contains only whitespace characters (e.g. "   "), Email and Message are valid  
**When** The visitor clicks Submit  
**Then** An inline error appears beneath the Name field with text "Name is required"; no `mailto:` link is triggered

---

## TC-10: Double-click on Submit is prevented during loading state

**Requirement traceability:** LANDING-005 (Boundary: Double submit)

**Given** All fields are valid and the visitor has clicked Submit once — the button is now in loading state (spinner / disabled)  
**When** The visitor clicks Submit a second time before the mailto: flow completes  
**Then** The second click is ignored; no duplicate `mailto:` link is triggered

---

## TC-11: mailto: failure shows error message with retry suggestion

**Requirement traceability:** LANDING-005 (Behaviour 6, AC-6)

**Given** The visitor has filled all fields with valid values and clicked Submit, but the browser blocks the mailto: popup or the protocol fails  
**When** The mailto: action does not complete successfully  
**Then** An error message is displayed with a suggestion to copy the team's email address manually

---

## TC-12: Form renders gracefully when JavaScript is disabled

**Requirement traceability:** LANDING-005 (Failure: JS disabled)

**Given** JavaScript is disabled in the browser  
**When** The page loads and the Contact section is viewed  
**Then** The form elements (Name, Email, Message, Submit button) render; submission falls back to the browser's native `mailto:` behaviour (no client-side validation)

---

## Verification checklist

- [ ] Every SRS acceptance criterion (AC-1 through AC-6) has at least one test case
- [ ] Every boundary/edge case listed in the SRS is covered (Name > 100, Message > 2000, whitespace-only, double submit, JS disabled)
- [ ] Each case states Given/When/Then with specific observable expected results
- [ ] Automated and manual coverage are separated (all cases here are automatable with Playwright/Cypress except TC-11 and TC-12 which require manual observation of mailto: behaviour and JS-disabled state)
- [ ] All 12 cases trace to explicit requirements in LANDING-005
