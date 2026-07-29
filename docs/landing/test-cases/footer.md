# Test Cases — Footer & Final Polish

**Module:** landing
**Requirements:** LANDING-006 (Footer), LANDING-007 (Scroll animations)
**Risk level:** Low — static content with CSS animations and scroll-triggered JS; no data mutation, no API dependency.

---

## LANDING-006 — Footer

### TC‑FOOTER‑001 — Footer displays team name, email link, and social icons

**Requirement traceability:** LANDING-006 / AC-1

| Field | Value |
|---|---|
| **Scenario** | Footer shows all expected content elements |
| **Given** | The page is fully loaded and the Footer section is scrolled into view |
| **When** | The visitor views the footer |
| **Then** | The footer displays: (1) the team name or logo, (2) a clickable contact email link, and (3) social media icon links for at least GitHub and LinkedIn |

---

### TC‑FOOTER‑002 — Social links open in new tab with `noopener noreferrer`

**Requirement traceability:** LANDING-006 / AC-2

| Field | Value |
|---|---|
| **Scenario** | Social media link opens in a new secure tab |
| **Given** | The Footer section is visible with social media icon links |
| **When** | The visitor clicks any social media link |
| **Then** | A new browser tab opens with the correct social URL, and the anchor element has both `target="_blank"` and `rel="noopener noreferrer"` attributes |

---

### TC‑FOOTER‑003 — Animated element is static when `prefers-reduced-motion: reduce` is set

**Requirement traceability:** LANDING-006 / AC-3

| Field | Value |
|---|---|
| **Scenario** | Animated footer element respects reduced motion |
| **Given** | The visitor has `prefers-reduced-motion: reduce` set in their OS/browser settings, and the page is fully loaded |
| **When** | The Footer section is scrolled into view |
| **Then** | The animated decorative element (e.g. beating heart emoji) is displayed but does not animate — it remains static |

---

## LANDING-007 — Scroll Animations

### TC‑ANIM‑001 — Sections animate in (fade + translate) on first scroll

**Requirement traceability:** LANDING-007 / AC-1

| Field | Value |
|---|---|
| **Scenario** | Sections fade and translate upward when scrolled into view |
| **Given** | The visitor loads the page at the very top (Hero section) |
| **When** | The visitor scrolls down so that the Services section enters the viewport |
| **Then** | The Services section animates in with a fade-in and a slight upward translation; the animation is smooth and completes without visual glitches |

---

### TC‑ANIM‑002 — Animation plays only once per session

**Requirement traceability:** LANDING-007 / AC-2

| Field | Value |
|---|---|
| **Scenario** | Scroll animation does not re-trigger on subsequent scrolls |
| **Given** | The Services section has already been scrolled into view and its animation has played once |
| **When** | The visitor scrolls up past the section and then scrolls back down so that the section re-enters the viewport |
| **Then** | The animation does not replay — the section remains in its fully visible, post-animation state |

---

### TC‑ANIM‑003 — Animations disabled when `prefers-reduced-motion: reduce` is set

**Requirement traceability:** LANDING-007 / AC-3

| Field | Value |
|---|---|
| **Scenario** | All scroll animations are disabled with reduced-motion preference |
| **Given** | The visitor has `prefers-reduced-motion: reduce` enabled in their OS/browser settings |
| **When** | The visitor scrolls through the entire page |
| **Then** | Every section (Services, Team, Contact, Footer) appears immediately without any fade or translate animation — content is fully visible from the moment it enters the viewport |

---

## Summary

| Case ID | Type | Requirement |
|---|---|---|
| TC‑FOOTER‑001 | Happy path — content | LANDING-006 / AC-1 |
| TC‑FOOTER‑002 | Happy path — interaction | LANDING-006 / AC-2 |
| TC‑FOOTER‑003 | Boundary — reduced motion | LANDING-006 / AC-3 |
| TC‑ANIM‑001 | Happy path — scroll animation | LANDING-007 / AC-1 |
| TC‑ANIM‑002 | Happy path — once per session | LANDING-007 / AC-2 |
| TC‑ANIM‑003 | Boundary — reduced motion | LANDING-007 / AC-3 |

All 6 acceptance criteria (AC-1 through AC-3 for each of LANDING-006 and LANDING-007) are covered.
