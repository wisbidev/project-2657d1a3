# Test Cases — Hero & Navigation

Module: `landing`
Functions: Navigation bar (LANDING-001), Hero banner (LANDING-002), Active nav highlight on scroll (LANDING-008)
Risk level: **Medium** — the hero is the first impression of the page and the navigation is the primary way to explore it.

---

## Navigation bar (LANDING-001)

### TC-NAV-001: Click "Services" anchor scrolls to Services section

| Field | Value |
|---|---|
| **Requirement** | LANDING-001 AC-1 |
| **Given** | The page is fully loaded |
| **When** | The Visitor clicks the "Services" anchor link in the navigation bar |
| **Then** | The page scrolls smoothly to the Services section |

---

### TC-NAV-002: Mobile viewport shows hamburger icon, hides nav links

| Field | Value |
|---|---|
| **Requirement** | LANDING-001 AC-2 |
| **Given** | The viewport width is less than 768px |
| **When** | The page loads |
| **Then** | A hamburger menu icon is visible on the navigation bar, and the horizontal nav link list (Services, Team, Contact) is hidden |

---

### TC-NAV-003: Tap a link in the mobile drawer closes drawer and scrolls

| Field | Value |
|---|---|
| **Requirement** | LANDING-001 AC-3 |
| **Given** | The hamburger menu is open (slide-in drawer is visible) |
| **When** | The Visitor taps any anchor link inside the drawer |
| **Then** | The drawer closes, and the page scrolls smoothly to the corresponding section |

---

### TC-NAV-004: Nav link highlights as section enters viewport

| Field | Value |
|---|---|
| **Requirement** | LANDING-001 AC-4 |
| **Given** | The page has been scrolled past the Hero section |
| **When** | A new section (e.g. Services, Team, or Contact) enters the viewport |
| **Then** | The corresponding nav link becomes visually highlighted (active style applied) |

---

## Hero banner (LANDING-002)

### TC-HERO-001: Hero displays all content elements on load

| Field | Value |
|---|---|
| **Requirement** | LANDING-002 AC-1 |
| **Given** | The page is fully loaded |
| **When** | The Visitor views the hero section |
| **Then** | The following elements are all visible: (a) a gradient-styled headline using primary (`#4f46e5`) and accent (`#22d3ee`) colours, (b) a sub-headline describing the team, (c) animated decorative badges, (d) an "Our Services" CTA button, and (e) a "Contact Us" CTA button |

---

### TC-HERO-002: "Contact Us" CTA scrolls to Contact section

| Field | Value |
|---|---|
| **Requirement** | LANDING-002 AC-2 |
| **Given** | The page is fully loaded |
| **When** | The Visitor clicks the "Contact Us" CTA button |
| **Then** | The page scrolls smoothly to the Contact section |

---

### TC-HERO-003: "Our Services" CTA scrolls to Services section

| Field | Value |
|---|---|
| **Requirement** | LANDING-002 Behaviour (point 4: CTA buttons scroll to respective sections) |
| **Given** | The page is fully loaded |
| **When** | The Visitor clicks the "Our Services" CTA button |
| **Then** | The page scrolls smoothly to the Services section |

---

### TC-HERO-004: Badge animation plays without visual glitches

| Field | Value |
|---|---|
| **Requirement** | LANDING-002 AC-3 |
| **Given** | The page is fully loaded (no `prefers-reduced-motion`) |
| **When** | The badge animation plays |
| **Then** | The animation completes without visual glitches (no flickering, stuttering, or elements jumping out of place) |

---

## Active nav highlight on scroll (LANDING-008)

### TC-ACTIVE-001: Hero in view — logo/home link is active

| Field | Value |
|---|---|
| **Requirement** | LANDING-008 AC-1 |
| **Given** | The Hero section is fully in view (page is at the top) |
| **When** | The navigation bar renders |
| **Then** | The logo/home link (or equivalent) is visually active with the primary brand colour (`#4f46e5`); all other nav links are inactive |

---

### TC-ACTIVE-002: Services section in view — "Services" link is active

| Field | Value |
|---|---|
| **Requirement** | LANDING-008 AC-2 |
| **Given** | The page is scrolled so that the Services section enters the viewport |
| **When** | The navigation bar updates |
| **Then** | The "Services" nav link becomes visually active with the primary brand colour |

---

### TC-ACTIVE-003: Footer in view — "Contact" link is active (last section)

| Field | Value |
|---|---|
| **Requirement** | LANDING-008 AC-3 |
| **Given** | The Visitor scrolls past all sections to the Footer |
| **When** | The navigation bar updates |
| **Then** | The "Contact" nav link is visually active (as the last section) |

---

## Verification checklist

- [ ] Every SRS acceptance criterion for LANDING-001, LANDING-002, and LANDING-008 has at least one case
- [ ] Every case states setup (Given), action (When), and observable expected result (Then)
- [ ] Requirement traceability is recorded (Requirement column)
- [ ] Happy paths only — no error/edge cases beyond the explicit requirements
- [ ] Cases are written before implementation exists
