# Story: Footer & Final Polish

## User Story

As a **Visitor**, I want to see a polished footer with contact info and social links, and have sections animate smoothly into view as I scroll, so that the page feels complete, engaging, and credible.

## In Scope

1. **Footer section** — team name/logo, clickable email link, social media icon links (GitHub, LinkedIn, etc.)
2. Social links open in a new tab with `rel="noopener noreferrer"`
3. Animated beating heart emoji (`.heart`) in the copyright line
4. **Scroll-triggered fade-in animations** — every section (Services, Team, Contact, Footer) fades in + translates upward when it scrolls into the viewport via `IntersectionObserver`
5. Animation fires **once per session** (no re-trigger on scroll-back)
6. All animations respect `prefers-reduced-motion: reduce` — static fallback
7. Fully responsive at every breakpoint (320px+)
8. Progressive enhancement — content is visible without JS; scroll-animations simply don't play

## Out of Scope

- Server-side form processing or mailto: trigger — handled by the Contact & CTA story
- Backend, database, or API — project shape is `static`
- Additional animation types beyond fade-in + translateY (e.g. parallax, stagger)
- Re-triggering animations on every scroll (intentional one-shot behaviour)
- Active nav highlight on scroll — covered by the Hero & Navigation story (LANDING-008)

## UI Scope

This story touches two aspects of the approved design (`design/index.html`):

| Area | What changes |
|---|---|
| **Footer** | Social links row (40px circle icons, `#e5e7eb` background, hover → `--primary` + lift), copyright line with animated `.heart` (`#ef4444`, 1.5s pulse animation), email link |
| **Scroll animations** | Every section element gets `.fade-in` class (initial `opacity: 0`, `translateY(30px)`) → `.visible` class (`opacity: 1`, `translateY(0)`, 700ms ease transition) via `IntersectionObserver` (threshold 0.15, fire once) |

## Acceptance Criteria

### Footer (LANDING-006)

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Page is loaded, footer visible | Visitor views the footer | Team name, clickable email link, and social icon links are displayed |
| AC-2 | Visitor clicks a social icon link | Link opens | New tab opens with correct URL; link has `rel="noopener noreferrer"` |
| AC-3 | Visitor hovers over a social icon | Hover triggers | Icon background changes to `var(--primary)`, color to `#fff`, lifts by `translateY(-2px)` |
| AC-4 | Visitor has `prefers-reduced-motion: reduce` | Footer loads | Heart emoji is static — no pulse animation plays |
| AC-5 | Social link URL is empty or `#` | Footer renders | Link element is rendered but disabled (no `href`) or the icon is hidden |

### Scroll Animations (LANDING-007)

| # | Given | When | Then |
|---|---|---|---|
| AC-6 | Page loads at top | Visitor scrolls down | Services, Team, Contact, and Footer sections animate in (fade + translate upward) as each enters the viewport |
| AC-7 | Visitor scrolls past a section, then scrolls back up | Section re-enters viewport | Animation does **not** replay — content is already visible |
| AC-8 | `prefers-reduced-motion: reduce` is set | Visitor scrolls | All scroll animations are disabled; sections appear immediately without transition |
| AC-9 | JavaScript is disabled | Page loads | All sections are fully visible immediately — no broken initial hidden state |

## Dependencies

| Dependency | Type | Status |
|---|---|---|
| All preceding sections (Hero, Services, Team, Contact) must exist in the DOM | DOM structure | Items 1–4 must be implemented first or concurrently |
| Design tokens from `design/design-system.md` (footer tokens, `.fade-in` component, motion tokens) | Design | Committed via PR #2 |

## Questions

No blocking questions. All design decisions are covered by the SRS and design system.
