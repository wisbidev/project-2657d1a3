# Test Cases — Footer & Final Polish

Module: `landing`
Functions: Footer (LANDING-006), Scroll animations (LANDING-007)
Risk level: **Low** — purely presentational; no data is written or read, and failures affect polish rather than core functionality.

---

## Footer (LANDING-006)

### TC-FOOTER-001: Footer displays team name, email link, and social icons

| Field | Value |
|---|---|
| **Requirement** | LANDING-006 AC-1 |
| **Given** | The page is fully loaded and the Footer section is visible |
| **When** | The Visitor views the footer |
| **Then** | The footer displays: (a) the team name or logo, (b) a clickable contact email link, and (c) social media icon links (GitHub, LinkedIn, etc.) |

---

### TC-FOOTER-002: Social link opens in new tab with `rel="noopener noreferrer"`

| Field | Value |
|---|---|
| **Requirement** | LANDING-006 AC-2 |
| **Given** | The footer is visible with social media icon links |
| **When** | The Visitor clicks any social media link |
| **Then** | A new browser tab opens with the correct social profile URL, and the link element has `target="_blank"` and `rel="noopener noreferrer"` attributes |

---

### TC-FOOTER-003: Animated element is static when `prefers-reduced-motion` is set

| Field | Value |
|---|---|
| **Requirement** | LANDING-006 AC-3 |
| **Given** | The Visitor's system has `prefers-reduced-motion: reduce` enabled |
| **When** | The footer loads |
| **Then** | The animated element (e.g. beating heart emoji) is displayed in a static state with no animation |

---

## Scroll animations (LANDING-007)

### TC-SCROLL-001: Sections animate in with fade + translate on scroll

| Field | Value |
|---|---|
| **Requirement** | LANDING-007 AC-1 |
| **Given** | The page loads at the top; no `prefers-reduced-motion` is set |
| **When** | The Visitor scrolls down until the Services section enters the viewport |
| **Then** | The Services section animates in with a fade-in and a slight upward translation |

---

### TC-SCROLL-002: Animation does not replay on re-scroll

| Field | Value |
|---|---|
| **Requirement** | LANDING-007 AC-2 |
| **Given** | A section (e.g. Services) has already animated into view on first scroll |
| **When** | The Visitor scrolls back up past the section and then scrolls down again so the section re-enters the viewport |
| **Then** | The animation does not replay; the section remains fully visible |

---

### TC-SCROLL-003: Animations disabled when `prefers-reduced-motion` is set

| Field | Value |
|---|---|
| **Requirement** | LANDING-007 AC-3 |
| **Given** | The Visitor's system has `prefers-reduced-motion: reduce` enabled |
| **When** | The Visitor scrolls through the page |
| **Then** | No fade/translate animations play on any section; all sections appear immediately in their final visible state |

---

## Verification checklist

- [ ] Every SRS acceptance criterion for LANDING-006 and LANDING-007 has at least one case
- [ ] Every case states setup (Given), action (When), and observable expected result (Then)
- [ ] Requirement traceability is recorded (Requirement column)
- [ ] Happy paths only — no error/edge cases beyond the explicit requirements
- [ ] Cases are written before implementation exists
