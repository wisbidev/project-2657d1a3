# Story: Team Section

**Module:** `landing`
**Plan item:** Team Section (item #3)
**Requirements:** LANDING-004

---

## User Story

> *As a* Visitor, *I want to* see the team members with their names, roles, and bios, *so that* I can know who I would be working with.

---

## Scope

### In scope

- A section titled "Our Team" containing a responsive grid of member cards
- 4 team member cards, each with:
  - Circular avatar (gradient background showing the member's first initial as fallback)
  - Full name
  - Role/title (styled in primary brand colour)
  - Short bio description
- Responsive grid: 4 columns on desktop (≥1024px), 2 on tablet (768–1023px), 1 on mobile (<768px)
- Hover effect: card lifts (translateY -6px + shadow-lg), avatar scales up 1.08×
- Avatar image fallback: if an avatar `<img>` fails to load or no image URL is provided, display the initial-based gradient circle as the fallback
- Hardcoded team data in the markup (no API, no backend)

### Out of scope

- Dynamic team management (CMS, admin panel, API) — not planned for v1
- Social media links per member — those belong in the Footer section
- Skill tags, progress bars, or detailed member profiles — the card shows name, role, and bio only
- Member detail page or modal — no click-through from cards
- Real photographs or image uploads — placeholders are used; real data can be swapped in later
- Sorting or filtering of team members

---

## UI Scope

This story covers the **Team section** of the one-page landing design. It is a self-contained section:

- **Default state**: 4 cards in a grid, each with avatar (initial) + name + role + bio
- **Hover state** (desktop only): card lifts, avatar scales up
- **Image-fallback state**: if an avatar image is attempted but fails, the gradient initial circle remains visible
- **Responsive states**: grid reflows from 4 → 2 → 1 columns at the defined breakpoints

The section uses the `.fade-in` animation class from the design system (scroll-triggered, plays once), which is already implemented by a shared `IntersectionObserver` utility.

No separate UI screens or navigable pages exist — this section is part of the single-page layout.

---

## Acceptance Criteria

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Page is loaded, Team section visible | Visitor views the grid | Exactly 4 team member cards are displayed, each with an avatar, name, role, and bio |
| AC-2 | Viewport ≥ 1024px | Team grid renders | Cards are arranged in 4 columns |
| AC-3 | 768px ≤ viewport < 1024px | Team grid renders | Cards are arranged in 2 columns |
| AC-4 | Viewport < 768px | Team grid renders | Cards are arranged in 1 column |
| AC-5 | Visitor hovers over a team card (desktop) | Card receives hover | Card lifts (translateY -6px, increased shadow); avatar scales to 1.08× |
| AC-6 | An avatar image URL is invalid or missing | Image fails to load | Fallback gradient circle with the member's first initial is displayed; no broken image icon |
| AC-7 | Team section scrolls into view | Section enters viewport (IntersectionObserver threshold 0.15) | Section fades in with translateY animation — plays once, does not replay on re-scroll |
| AC-8 | Visitor has `prefers-reduced-motion: reduce` set | Page loads and section scrolls in | Fade-in animation is skipped; hover effects are instant (no transition); avatar hover scale is disabled |

### Failure, boundary, and edge cases

| Case | Condition | Expected behaviour |
|---|---|---|
| Long bio text | Bio exceeds the typical length | Text wraps within the card; card height adjusts naturally; no overflow |
| Very short bio | Bio is 1–2 words | Layout remains intact; card is slightly shorter but visually consistent |
| Empty name or role | Data is missing | The field is rendered empty; card layout is preserved |
| First initial unrenderable | Name is empty | Avatar shows a generic fallback icon (e.g. "👤") or a question mark |
| All 4 same initials | Multiple members share the same first letter | Each avatar shows the same initial letter; no conflict — acceptable for placeholder data |
| Touch device (no hover) | User taps a card on mobile/tablet | No hover effect applies; card is static (no persistent hover state on touch) |
| Rapid resize | Viewport changes from desktop to mobile width | Grid reflows immediately without visual glitches; CSS media query handles the change |

---

## Dependencies

- **Design system tokens** must be available: `--primary`, `--accent`, `--shadow`, `--shadow-lg`, `--text-muted`, `--bg-card`, `--radius` — committed in `design/design-system.md` (available as CSS custom properties)
- **Fade-in animation utility** (`.fade-in` class + `IntersectionObserver` JS) — shared across sections; must exist before or concurrently with this story
- **No backend dependency** — team data is hardcoded HTML

---

## Team Data (Placeholder)

| Name | Role | Bio |
|---|---|---|
| Alice Nguyen | AI Engineer | Building intelligent agents that learn and adapt. |
| Bob Tran | Full-stack Developer | Crafting seamless user experiences from front to back. |
| Carol Le | Product Manager | Turning ideas into shipped products with clear vision. |
| Dave Pham | Automation Specialist | Automating workflows so teams can focus on what matters. |

Avatars use the gradient initial circle (no `<img>` tags) for v1. If real photos are added later, an `<img>` tag is inserted inside the `.avatar` container and the initial text becomes an `alt` fallback.
