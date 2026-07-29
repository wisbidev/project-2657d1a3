# SRS — Landing Page

Module: `landing`
Last updated: 2025-07-18
Design: [View the approved design](http://localhost:8080/design/2657d1a3-7da4-4fff-a804-5be07b63e623)
Design system: `design/design-system.md`

> One file per module, at `docs/{module}/SRS.md`. It covers only the functions
> that belong to this module. Never write `docs/SRS.md`.

---

## 1. Purpose

The landing page introduces the web agent team to prospective clients and partners. It conveys the team's identity, showcases its services and members, and provides a contact channel. Without this page there is no public-facing presence for the team — no discoverability, no credibility, and no inbound leads.

---

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Visitor | Any person browsing the page | View all content, navigate between sections, send a contact message via the form |

There is no authentication; every user is a Visitor.

---

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Hero & Navigation
- Services Section
- Team Section
- Contact & CTA Section
- Footer & Final Polish

**Out of scope** — name what a reader would reasonably expect here and say
where it lives instead.

- Server-side form processing (SMTP, API gateway) — deliberately not built in v1. The form uses `mailto:` or a form-submission service; the SRS specifies client-side validation only.
- Database, backend API, user accounts — the project shape is `static`; every requirement is purely client-side.
- Blog, case studies, portfolio detail pages — not planned; the landing page links to external social profiles for the team's work samples.

---

## 4. Functional requirements

### 4.1 Hero & Navigation

**Requirement LANDING-001 — Navigation bar**

*As a* Visitor, *I want to* see a fixed navigation bar at the top, *so that* I can jump to any section of the page or return to the top.

Behaviour:

1. The navigation bar is fixed to the top of the viewport on all pages/sections.
2. It displays the team logo/name on the left and anchor links (Services, Team, Contact) on the right.
3. Clicking an anchor link scrolls smoothly to the corresponding section.
4. On mobile (viewport < 768px), the nav links collapse into a hamburger menu that opens a slide-in drawer.
5. The active section's link is visually highlighted as the user scrolls.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Page is loaded | Visitor clicks "Services" anchor | Page scrolls smoothly to the Services section |
| AC-2 | Viewport width < 768px | Page loads | Hamburger icon is visible; nav links are hidden |
| AC-3 | Hamburger menu is open | Visitor taps a link | Drawer closes, page scrolls to the section |
| AC-4 | Page is scrolled past Hero | A new section enters the viewport | Corresponding nav link becomes highlighted |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Invalid state | JS fails to load | Anchor links still work as standard `#` links (progressive enhancement) |
| Boundary | Viewport exactly 768px | Desktop layout (horizontal nav) — breakpoint is inclusive of desktop |

**Data touched** — none; this function is pure markup and CSS.

---

**Requirement LANDING-002 — Hero banner**

*As a* Visitor, *I want to* see a prominent hero section on load, *so that* I immediately understand who the team is and what they do.

Behaviour:

1. The hero displays: a gradient-styled headline, a sub-headline describing the team, animated decorative badges, and two CTA buttons ("Our Services" and "Contact Us").
2. The headline uses the primary brand colour (`#4f46e5`) with gradient accent (`#22d3ee`).
3. The background transitions smoothly (subtle gradient or animation) on page load.
4. The CTA buttons scroll to the Services section and Contact section respectively.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Page is loaded | Visitor views the hero | Headline, sub-headline, badges, and two CTA buttons are visible |
| AC-2 | Page is loaded | Visitor clicks "Contact Us" | Page scrolls smoothly to the Contact section |
| AC-3 | Page is loaded | Badge animation plays | Animation completes without visual glitches |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Reduced motion | Visitor has `prefers-reduced-motion: reduce` | Badge and background animations are disabled; static content remains fully visible |
| Slow connection | Page assets load progressively | Hero content (text, CTAs) is visible before decorative elements finish loading |

**Data touched** — none.

---

### 4.2 Services Section

**Requirement LANDING-003 — Services grid**

*As a* Visitor, *I want to* see a grid of services the team offers, *so that* I can assess whether they match my needs.

Behaviour:

1. The section displays a heading ("Our Services") and a 4-card grid below it.
2. Each card contains: an icon (emoji / SVG), a title, and a short description.
3. Cards have a hover effect (shadow lift / scale transition).
4. The grid is responsive: 4 columns on desktop, 2 on tablet, 1 on mobile.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Page is loaded, Services section visible | Visitor views the grid | Exactly 4 service cards are displayed with icon, title, and description |
| AC-2 | Viewport ≥ 1024px | Services grid renders | Cards are arranged in 4 columns |
| AC-3 | 768px ≤ viewport < 1024px | Services grid renders | Cards are arranged in 2 columns |
| AC-4 | Viewport < 768px | Services grid renders | Cards are arranged in 1 column |
| AC-5 | Visitor hovers over a card | Card receives hover | Card visually lifts (box-shadow increase, slight translateY) |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Content overflow | Title or description is very long | Text wraps within the card; card height grows, layout remains aligned |
| Reduced motion | `prefers-reduced-motion: reduce` | Hover effect is instant (no transition) |

**Data touched** — none; services are hardcoded in the markup.

---

### 4.3 Team Section

**Requirement LANDING-004 — Team member grid**

*As a* Visitor, *I want to* see the team members with their roles, *so that* I know who I would be working with.

Behaviour:

1. The section displays a heading ("Our Team") and a grid of team member cards.
2. Each card contains: a circular avatar image, the member's name, their role/title, and a short bio.
3. The grid is responsive: 4 columns on desktop, 2 on tablet, 1 on mobile.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Page is loaded, Team section visible | Visitor views the grid | All team member cards are displayed with avatar, name, role, and bio |
| AC-2 | Viewport ≥ 1024px | Team grid renders | Cards are arranged in 4 columns |
| AC-3 | 768px ≤ viewport < 1024px | Team grid renders | Cards are arranged in 2 columns |
| AC-4 | Viewport < 768px | Team grid renders | Cards are arranged in 1 column |
| AC-5 | Avatar image fails to load | Image is unavailable | A placeholder avatar (initials or generic icon) is shown instead of a broken image |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Missing image | Avatar URL is broken or empty | Fallback placeholder is displayed |
| Overflow | Bio text is long | Text wraps within the card; card height adjusts |

**Data touched** — none; team data is hardcoded in the markup.

---

### 4.4 Contact & CTA Section

**Requirement LANDING-005 — Contact form**

*As a* Visitor, *I want to* send a message to the team through a form, *so that* I can inquire about their services.

Behaviour:

1. The form contains three fields: Name (text), Email (email), Message (textarea).
2. All fields are required. The Email field must match a valid email format.
3. Client-side validation runs on form submission:
   - If any required field is empty, an inline error message appears beneath that field.
   - If the email is malformed, an inline error message appears beneath the Email field.
4. While submitting, the submit button shows a loading state (spinner or disabled text) to prevent duplicate submissions.
5. On success, a confirmation message replaces the form (e.g. "Thank you! We'll get back to you soon.").
6. On failure (e.g. `mailto:` fallback error), an error state is displayed with a retry suggestion.
7. The form submits via `mailto:` with the form data encoded in the body (since no backend exists).

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | All fields are empty | Visitor clicks Submit | Inline errors appear on Name, Email, and Message fields; nothing is sent |
| AC-2 | Only Name is filled with valid text | Visitor clicks Submit | Inline error on Email and Message fields |
| AC-3 | Email has invalid format (e.g. "abc") | Visitor clicks Submit | Inline error below Email field with "Please enter a valid email address" |
| AC-4 | All fields are valid | Visitor clicks Submit | Button shows loading state; mailto: link is triggered |
| AC-5 | mailto: triggers successfully | Visitor sees result | Success message replaces the form |
| AC-6 | mailto: fails (browser blocks popup) | Visitor sees result | Error message shown with instruction to copy an email address manually |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Invalid input | Name is empty / only whitespace | Inline error "Name is required" |
| Boundary | Name exceeds 100 characters | Rejected with inline error "Name must be under 100 characters" |
| Boundary | Message exceeds 2000 characters | Rejected with inline error "Message must be under 2000 characters" |
| Double submit | Visitor clicks Submit twice quickly | Second click is ignored while loading state is active |
| JS disabled | Scripts do not load | Form elements render; submission falls back to browser's native `mailto:` behaviour with no client-side validation |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Name | text | yes | 1–100 characters, non-whitespace |
| Email | email | yes | Valid email format per HTML5 validation |
| Message | text | yes | 1–2000 characters |

---

### 4.5 Footer & Final Polish

**Requirement LANDING-006 — Footer**

*As a* Visitor, *I want to* see a footer with contact info and social links, *so that* I can find the team on other platforms.

Behaviour:

1. The footer displays: team name/logo, contact email link, social media icon links (GitHub, LinkedIn, etc.).
2. Social links open in a new tab with `rel="noopener noreferrer"`.
3. A small animated element (e.g. a beating heart emoji) adds a visual touch.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Page is loaded, Footer section visible | Visitor views footer | Team name, email link, and social icons are displayed |
| AC-2 | Visitor clicks a social link | Link opens | New tab opens with the correct URL; `noopener noreferrer` is set |
| AC-3 | Visitor with `prefers-reduced-motion: reduce` | Footer loads | Animated element is static (no animation) |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Social URL misconfigured | Link URL is empty or `#` | Link is rendered but disabled (no `href`) or the icon is hidden |
| Long team name | Name exceeds container width | Text truncates with ellipsis or wraps at a natural break |

**Data touched** — none.

---

**Requirement LANDING-007 — Scroll animations**

*As a* Visitor, *I want to* see sections fade/translate into view as I scroll, *so that* the page feels polished and engaging.

Behaviour:

1. Each section (Services, Team, Contact, Footer) fades in and translates upward slightly when it scrolls into the viewport.
2. The animation plays once per session (does not re-trigger on every scroll).
3. Respects `prefers-reduced-motion`.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Page loads at top | Visitor scrolls to Services | Services section animates in (fade + translate) |
| AC-2 | Visitor scrolls back up then down again | Section re-enters viewport | Animation does not replay |
| AC-3 | `prefers-reduced-motion: reduce` is set | Visitor scrolls | All animations are disabled; sections appear immediately |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| JS disabled | Scroll-trigger scripts fail | All content is visible immediately (no broken layout due to initial hidden state) |
| Rapid scroll | Visitor scrolls very fast | Sections are still visible at the end of scroll; any mid-animation state resolves cleanly |

**Data touched** — none.

---

**Requirement LANDING-008 — Active nav highlight on scroll**

*As a* Visitor, *I want to* see which section I am currently viewing reflected in the navigation bar, *so that* I can orient myself on the page.

Behaviour:

1. As the visitor scrolls, the nav link corresponding to the section currently in view is highlighted with the primary brand colour (`#4f46e5`).
2. The "Home/Logo" link is highlighted when the top of the page is scrolled to (Hero section in view).

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Hero section is fully in view | Nav renders | "Home" / logo link (or no link) is visually active; others are inactive |
| AC-2 | Services section enters viewport | Nav updates | "Services" link becomes active |
| AC-3 | Visitor scrolls past all sections to Footer | Nav updates | "Contact" link is active (last section) |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Two sections in view simultaneously | Viewport shows boundary between two sections | The section that occupies the majority of the viewport determines the active link |
| JS disabled | Intersection Observer unavailable | No highlighting occurs; nav links simply anchor-scroll |

**Data touched** — none.

---

## 5. Screens

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Navigation bar | Fixed top bar | LANDING-001, LANDING-008 | default (desktop), mobile (hamburger collapsed), mobile (drawer open) |
| Hero section | Hero area with gradient text + badges + CTAs | LANDING-002 | default, reduced-motion |
| Services section | 4-card grid below Hero | LANDING-003 | default, hovered, reduced-motion |
| Team section | 4-member grid below Services | LANDING-004 | default, image-fallback |
| Contact section | Form with validation | LANDING-005 | default (form), validation-error, loading, success, error, no-js |
| Footer | Bottom bar with social links | LANDING-006 | default, reduced-motion |

---

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | Page loads and becomes interactive within 3 seconds on a typical broadband connection; no layout shift (CLS < 0.1) |
| Accessibility | Keyboard-navigable, visible focus indicators on all interactive elements, colour contrast ≥ 4.5:1 for text, labelled form inputs |
| Responsive | Works at 320px viewport and up; no horizontal page scroll |
| Animations | All motion respects `prefers-reduced-motion`; animations use `transform` and `opacity` only (GPU-composited) |
| Compatibility | Works on latest 2 major versions of Chrome, Firefox, Safari, and Edge |
| No-dependency | The page is fully functional without JavaScript — anchor links, form (`mailto:`), and static content degrade gracefully |

---

## 7. Dependencies and assumptions

- **Depends on:** Nothing external — the page is self-contained HTML/CSS/JS.
- **Assumption:** The contact form uses `mailto:` as the submission mechanism because there is no backend. If the team later adds a server or form service, the form action will change but the validation and UX requirements remain the same.

| Open question | Proposed default | Who decides |
|---|---|---|
| Which email address should the contact form send to? | `hello@webagent.team` (placeholder) | Stakeholder |
| What 4 services should be displayed? | AI agents, custom automation, data integration, consulting | Stakeholder |
| What are the 4 team members' names, roles, and avatars? | Use placeholder avatars and sample names; replace with real data later | Stakeholder |

---

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Hero & Navigation | LANDING-001, LANDING-002, LANDING-008 | `docs/landing/test-cases/hero-navigation.md` |
| Services Section | LANDING-003 | `docs/landing/test-cases/services.md` |
| Team Section | LANDING-004 | `docs/landing/test-cases/team.md` |
| Contact & CTA Section | LANDING-005 | `docs/landing/test-cases/contact.md` |
| Footer & Final Polish | LANDING-006, LANDING-007 | `docs/landing/test-cases/footer.md` |
