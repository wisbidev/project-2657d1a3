# Story: Hero & Navigation

**Module:** `landing`
**Requirements:** LANDING-001 (Navigation bar), LANDING-002 (Hero banner), LANDING-008 (Active nav highlight on scroll)

---

## User Story

As a **Visitor**, I want to see a compelling hero section with a fixed navigation bar on load, so that I immediately understand who the team is and can jump to any section of the page.

---

## Scope

### In scope

- Fixed navigation bar with team logo (left) and anchor links — Services, Team, Contact — on the right
- Mobile responsive: hamburger icon at ≤768px, slide-in drawer on tap
- Active section highlighting as the visitor scrolls (IntersectionObserver-based)
- Hero banner with gradient headline, sub-headline, animated decorative badges, and two CTA buttons ("Our Services" → Services section, "Contact Us" → Contact section)
- Smooth scroll on all anchor link clicks
- `prefers-reduced-motion` support (disable animations, static fallback)
- No-JS progressive enhancement: anchor links degrade to standard `#` navigation; hero content remains visible
- Nav shadow appears after >20px scroll

### Out of scope

- Services, Team, Contact, and Footer sections — built in subsequent stories
- Contact form — part of the Contact & CTA Section story
- Backend, database, or API — the project shape is `static`
- Active nav link label for sections outside this story (they will be wired when those sections land)
- Social media links — part of the Footer story

---

## UI Scope

The story touches **two screens** from the approved design:

| Screen | States |
|---|---|
| **Navigation bar** (fixed top) | Default (no shadow, transparent-ish), scrolled (shadow), mobile collapsed (hamburger only), mobile open (drawer + overlay) |
| **Hero section** | Default (animations playing), reduced-motion (no animations, static content visible) |

These are the first two visual elements the Visitor sees on page load and they set the tone for the entire page.

---

## Acceptance Criteria

### Navigation bar (LANDING-001)

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Page is loaded | Visitor sees the top | Navigation bar is fixed to the top of the viewport |
| AC-2 | Page is loaded | Visitor inspects nav | Logo/name is on the left, anchor links (Services, Team, Contact) are on the right |
| AC-3 | Viewport ≥ 768px | Visitor clicks "Services" | Page scrolls smoothly to the Services section |
| AC-4 | Viewport < 768px | Page loads | Hamburger icon is visible; nav links are hidden |
| AC-5 | Mobile drawer is open | Visitor taps a link | Drawer closes; page scrolls to the section |
| AC-6 | Mobile drawer is open | Visitor taps overlay or presses Escape | Drawer closes; focus returns to hamburger button |
| AC-7 | Visitor scrolls > 20px down | Nav updates | Navigation bar gets `.scrolled` class with box-shadow |
| AC-8 | Page is scrolled back to top (< 20px) | Nav updates | Shadow is removed (back to default) |

### Hero banner (LANDING-002)

| # | Given | When | Then |
|---|---|---|---|
| AC-9 | Page is loaded | Visitor views hero | Headline, sub-headline, animated badges, and two CTA buttons are visible |
| AC-10 | Page is loaded | Visitor clicks "Contact Us" | Page scrolls smoothly to the Contact section |
| AC-11 | Page is loaded | Badge animation plays | Animation completes without visual glitches |
| AC-12 | Visitor has `prefers-reduced-motion: reduce` | Page loads | Badge and background animations are disabled; static content is fully visible |
| AC-13 | Slow connection / assets load progressively | Visitor views hero | Text content (headline, sub-headline) is visible before decorative elements finish loading |

### Active nav highlight on scroll (LANDING-008)

| # | Given | When | Then |
|---|---|---|---|
| AC-14 | Hero section is in view (top of page) | Nav renders | Logo link is visually active; other links are inactive |
| AC-15 | Visitor scrolls to Services section | Nav updates | "Services" link becomes active (primary colour, weight 600) |
| AC-16 | Visitor scrolls past all sections to Contact | Nav updates | "Contact" link becomes active |
| AC-17 | Boundary: two sections in view simultaneously | Visitor scrolls | The section occupying the majority of the viewport determines the active link |
| AC-18 | JavaScript fails to load | Visitor scrolls | No highlighting occurs; anchor links still work as standard `#` links |

### Cross-cutting

| # | Given | When | Then |
|---|---|---|---|
| AC-19 | Any interactive element is focused | Visitor tabs to it | A visible focus ring (4px, `:focus-visible`) is displayed |
| AC-20 | Visitor clicks any anchor link | CTA or nav link | Page scrolls with `scrollIntoView({ behavior: 'smooth' })` |

---

## Dependencies

- **Design system** — `design/design-system.md` contains all component tokens (nav, hero, buttons, badges, mobile drawer). Story depends on these being final.
- **No other stories required first** — Hero & Navigation is the first visual section and has no runtime dependencies on other sections existing (anchor links point to IDs that will exist when those sections are built).
- **No external services, accounts, or data** — all content is hardcoded in markup.

---

## Notes for Implementation

- Build order: navigation bar first (structure, mobile toggle, scroll shadow), then hero section (headline, badges, CTAs), then active highlight JS last (because it references section IDs from the full page).
- The approved design is at `http://localhost:8080/design/2657d1a3-7da4-4fff-a804-5be07b63e623`. Use the token values from `design/design-system.md` — do not guess colours or spacing.
- No blocking questions — all decisions are covered by the SRS and design system.
