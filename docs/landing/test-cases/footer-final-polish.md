# Test Cases — Footer & Final Polish

Module: `landing`
Functions: Footer (LANDING-006), Scroll animations (LANDING-007)
Risk level: **Low** — static content, no data mutation, no API dependency, purely visual and responsive.

---

## Footer (LANDING-006)

### TC‑FOOTER‑001 — Footer displays all elements

| Field | Value |
|---|---|
| **Scenario** | Footer section shows team name, email link, and social icons |
| **Given** | The page is loaded and the Footer section is in the viewport |
| **When** | The visitor views the footer |
| **Then** | The following elements are all visible: (a) the team name or logo, (b) a clickable contact email link, and (c) social media icon links (at minimum GitHub and LinkedIn) |
| **Traceability** | LANDING-006 / AC-1 |

---

### TC‑FOOTER‑002 — Social link opens in a new tab with `rel="noopener noreferrer"`

| Field | Value |
|---|---|
| **Scenario** | Clicking a social icon opens the correct URL in a new tab with security attributes |
| **Given** | The Footer section is visible with social media icon links |
| **When** | The visitor clicks any social media icon (e.g. GitHub) |
| **Then** | A new browser tab opens with the correct social platform URL, and the link element has `rel="noopener noreferrer"` and `target="_blank"` attributes |
| **Traceability** | LANDING-006 / AC-2 |

---

### TC‑FOOTER‑003 — Animated element is static when `prefers-reduced-motion: reduce` is set

| Field | Value |
|---|---|
| **Scenario** | The decorative animated element (e.g. beating heart) does not animate when reduced motion is preferred |
| **Given** | The visitor has `prefers-reduced-motion: reduce` set in their OS/browser settings |
| **When** | The Footer section loads |
| **Then** | The animated element (e.g. heart emoji) is displayed statically — no CSS animation, no JavaScript-driven animation plays on it |
| **Traceability** | LANDING-006 / AC-3 |

---

## Scroll animations (LANDING-007)

### TC‑SCROLL‑001 — Footer section animates in on scroll (fade + translate)

| Field | Value |
|---|---|
| **Scenario** | The Footer section fades in and translates upward when it scrolls into the viewport |
| **Given** | The page is loaded at the top (default `prefers-reduced-motion`) |
| **When** | The visitor scrolls down until the Footer section enters the viewport |
| **Then** | The Footer section animates in with a fade effect (opacity transition) and a small upward translate (e.g. `translateY(20px)` → `translateY(0)`); the animation is smooth and uses `transform` and `opacity` only |
| **Traceability** | LANDING-007 / AC-1 |

---

### TC‑SCROLL‑002 — Scroll animation plays only once per session

| Field | Value |
|---|---|
| **Scenario** | The animation does not replay when the section re-enters the viewport |
| **Given** | The Footer section has already animated into view (fade + translate completed) |
| **When** | The visitor scrolls back up past the Footer section, then scrolls down again so the Footer re-enters the viewport |
| **Then** | The animation does not replay — the Footer remains fully visible without re-triggering the fade/translate effect |
| **Traceability** | LANDING-007 / AC-2 |

---

### TC‑SCROLL‑003 — All scroll animations disabled when `prefers-reduced-motion: reduce` is set

| Field | Value |
|---|---|
| **Scenario** | Sections appear immediately without animation when reduced motion is preferred |
| **Given** | The visitor has `prefers-reduced-motion: reduce` set in their OS/browser settings |
| **When** | The visitor scrolls through the entire page |
| **Then** | All sections (Services, Team, Contact, Footer) appear immediately in the viewport with no fade or translate animation — content is fully visible as soon as each section enters the viewport |
| **Traceability** | LANDING-007 / AC-3 |

---

## Summary

| Case ID | Type | Requirement |
|---|---|---|
| TC‑FOOTER‑001 | Happy path — content | LANDING-006 / AC-1 |
| TC‑FOOTER‑002 | Happy path — interaction | LANDING-006 / AC-2 |
| TC‑FOOTER‑003 | Happy path — reduced motion | LANDING-006 / AC-3 |
| TC‑SCROLL‑001 | Happy path — interaction | LANDING-007 / AC-1 |
| TC‑SCROLL‑002 | Happy path — interaction | LANDING-007 / AC-2 |
| TC‑SCROLL‑003 | Happy path — reduced motion | LANDING-007 / AC-3 |

All 6 SRS acceptance criteria for LANDING-006 and LANDING-007 are covered (TC‑FOOTER‑001 through TC‑SCROLL‑003).
