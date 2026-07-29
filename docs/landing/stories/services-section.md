# Services Section

## User Story

*As a* Visitor, *I want to* see a grid of the services the web agent team offers, *so that* I can quickly understand their capabilities and decide if they match my needs.

## Scope

**In scope**

- A "Our Services" section with a heading, sub-description, and a responsive grid of 4 service cards
- Each card displays: an icon (emoji), a title, and a short description
- Card hover effect: lift (translateY + shadow increase)
- Icon wrap hover effect: scale + subtle rotation inside the card
- Responsive behaviour: 4 columns (≥1024px), 2 columns (768–1023px), 1 column (<768px)
- Scroll-triggered fade-in animation (reuses the project-wide `.fade-in` mechanism)
- Respects `prefers-reduced-motion` for all animations

**Out of scope**

- Clickable card links or CTAs inside cards — these are presentation-only; any "learn more" link is not part of this story
- Dynamic data loading — the 4 services are hardcoded in the markup
- Filtering, sorting, or pagination — there are exactly 4 cards, always shown
- Backend API or database — the project shape is `static`

## UI Scope

This story touches a single new section in the 1-page landing:

**Services section** — positioned directly below the Hero section. It consists of:

- A section heading: "Our Services" (uses `--section-title` token: 2rem, weight 800)
- A short paragraph describing what the team offers (uses `--section-sub` token: 1.1rem, muted text)
- A 4-card CSS grid with:
  - Each card following `.service-card` from the design system
  - Icon wrap at the top with emoji, gradient background, rounded corners
  - Title (`h3`, `1.15rem`, weight 700)
  - Description (`p`, `0.95rem`, muted text)
  - Hover state: entire card lifts 6px + shadow-lg, icon wrap scales 1.1× and rotates -4deg
- Section uses the `.fade-in` class to animate into view on scroll
- All hover animations respect `prefers-reduced-motion: reduce` (instant, no transition)

## Acceptance Criteria

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Page is loaded, Services section scrolled into view (or in viewport on load) | Visitor views the section | Section heading "Our Services", sub-description, and exactly 4 service cards are visible |
| AC-2 | Viewport width ≥ 1024px | Services grid renders | Cards are arranged in 4 equal-width columns |
| AC-3 | Viewport width 768–1023px | Services grid renders | Cards are arranged in 2 columns |
| AC-4 | Viewport width < 768px | Services grid renders | Cards are arranged in 1 column (full-width cards) |
| AC-5 | A service card is hovered | Hover state activates | Card translates up 6px and receives the larger shadow (`--shadow-lg`); icon wrap scales 1.1× and rotates -4deg |
| AC-6 | Service card hover state is active | Visitor moves cursor away | Card returns to default position/shadow, icon wrap returns to normal scale/rotation |
| AC-7 | `prefers-reduced-motion: reduce` is set | Services section renders | No fade-in, no hover transition — cards appear and respond instantly |
| AC-8 | Section scrolls into view (first visit) | Observer triggers | `.fade-in` → `.visible` class applied, card fades in + translates up over 700ms |

## Dependencies

- **Hero & Navigation** (plan item 1) must be completed first — the Services section is the second section below Hero, and its scroll-anchor link in the nav depends on that nav existing
- The project-wide `.fade-in` CSS class and `IntersectionObserver` JS (implemented in item 1) must be in place for the scroll animation
- The approved design system (`design/design-system.md`) defines all tokens this story uses
