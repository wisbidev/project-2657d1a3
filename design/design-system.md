# Design System — Web Agent Team

> Source of truth: the approved `index.html` (preview: from `update_design`).
> Every value below is extracted from it. Changing a value here without
> changing the approved design is a defect.

Last updated: 2025-07-11

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#f8f9fc` | Page background |
| `--color-surface` | `#ffffff` | Card, panel, contact form, mobile nav |
| `--color-surface-raised` | `#ffffff` | Contact form, mobile drawer |
| `--color-border` | `#d1d5db` | Input border |
| `--color-border-light` | `rgba(0,0,0,0.04)` | Nav divider, footer border |
| `--color-border-card` | `rgba(0,0,0,0.03)` | Service/team card border |
| `--color-text` | `#1a1a2e` | Body text, headings |
| `--color-text-muted` | `#6b7280` | Secondary text, captions, nav links resting |
| `--color-primary` | `#4f46e5` | Primary action background, focus ring, active link |
| `--color-primary-dark` | `#3730a3` | (defined in root, used implicitly via hover transforms) |
| `--color-primary-text` | `#ffffff` | Text on primary buttons |
| `--color-accent` | `#22d3ee` | Logo accent dot, hero gradient |
| `--color-success` | `#059669` | Success checkmark, success heading |
| `--color-danger` | `#ef4444` | Field error text, error border, heart icon |
| `--color-focus` | `#4f46e5` | Focus ring (same as primary) |
| `--color-nav-bg` | `rgba(255,255,255,0.88)` | Sticky nav background |
| `--color-badge-bg` | `rgba(255,255,255,0.6)` | Hero badge background |
| `--color-input-bg` | `#fafafa` | Form input/textarea background |
| `--color-social-bg` | `#e5e7eb` | Social icon circle background |
| `--color-overlay` | `rgba(0,0,0,0.3)` | Mobile menu overlay |
| `--color-hero-grad-1` | `#eef2ff` | Hero gradient start / icon-wrap gradient |
| `--color-hero-grad-2` | `#f0fdfa` | Hero gradient mid / icon-wrap gradient |
| `--color-hero-grad-3` | `#e0f2fe` | Hero gradient end |
| `--color-highlight` | `#818cf8` | Hero highlight text gradient |

#### Contrast audit

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` (#1a1a2e) | `--color-bg` (#f8f9fc) | 16.2:1 | AA, AAA |
| `--color-text` (#1a1a2e) | `--color-surface` (#ffffff) | 17.0:1 | AA, AAA |
| `--color-text-muted` (#6b7280) | `--color-bg` (#f8f9fc) | 4.59:1 | AA |
| `--color-text-muted` (#6b7280) | `--color-surface` (#ffffff) | 4.83:1 | AA |
| `--color-primary-text` (#ffffff) | `--color-primary` (#4f46e5) | 6.29:1 | AA, AAA |
| `--color-border` (#d1d5db) | `--color-surface` (#ffffff) | 1.47:1 | FAIL (UI < 3:1) |
| `--color-text-muted` (#6b7280) | `--color-badge-bg` (rgba(255,255,255,0.6) over #eef2ff) | ~4.3:1 (estimated) | AA |

### 1.2 Spacing

Base unit: `4px`. Every margin, padding, and gap in the product uses one of these.

| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-1-5` | `6px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-7` | `28px` |
| `--space-8` | `32px` |
| `--space-9` | `36px` |
| `--space-10` | `40px` |
| `--space-11` | `44px` |
| `--space-12` | `48px` |
| `--space-13` | `52px` |
| `--space-15` | `60px` |
| `--space-22` | `88px` |
| `--space-25` | `100px` |
| `--space-35` | `140px` |

### 1.3 Typography

Font families (loaded via system font stack — no external load required):

- Body / Headings: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
- Mono: not used in the design

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-xs` | `0.82rem` (~13px) | 1.5 | 400 | Field error text |
| `--text-sm` | `0.9rem` (~14px) | 1.5 | 400 / 500 | Badge, role, footer, team-card body, hero-badge, label |
| `--text-base` | `1rem` (~16px) | 1.6 | 400 / 600 | Body, button labels |
| `--text-lg` | `1.1rem` (~18px) | 1.6 | 400 | Section subtitle |
| `--text-xl` | `1.15rem` (~18px) | 1.6 | 700 | Service card heading |
| `--text-2xl` | `1.3rem` (~21px) | 1.4 | 700 | Form success heading |
| `--text-3xl` | `1.4rem` (~22px) | 1.4 | 800 | Logo |
| `--text-4xl` | `2rem` (~32px) | 1.3 | 800 | Section title (h2) |
| `--text-5xl` | `3.4rem` (~54px) | 1.12 | 900 | Hero heading (h1) |

Heading levels used: h1 (hero), h2 (section title), h3 (card title). No levels skipped.

Weight usage:
- 900: Hero h1
- 800: Logo, section title
- 700: Avatar letter, form success h3
- 600: Button, active nav link, form label, social link
- 500: Nav link, role text
- 400 (default): Body, card description, footer text

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-sm` | `4px` | Focus outline |
| `--radius-md` | `8px` | Input, textarea |
| `--radius-lg` | `12px` | Card, contact form, icon-wrap |
| `--radius-xl` | `16px` | Icon-wrap container |
| `--radius-full` | `50px` / `9999px` | Button, badge, avatar, pill |
| `--border-width` | `1.5px` | Input border |
| `--border-width-thick` | `2px` | Outline button |
| `--shadow-sm` | `0 4px 24px rgba(0,0,0,0.06)` | Resting card |
| `--shadow-md` | `0 2px 20px rgba(0,0,0,0.06)` | Scrolled nav |
| `--shadow-lg` | `0 12px 40px rgba(0,0,0,0.1)` | Hover card, contact form |
| `--shadow-mobile` | `-4px 0 20px rgba(0,0,0,0.08)` | Mobile drawer |
| `--shadow-avatar` | `0 4px 14px rgba(79,70,229,0.2)` | Avatar resting |
| `--shadow-btn` | `0 8px 24px rgba(79,70,229,0.35)` | Button hover |
| `--duration-fast` | `200ms` | Hover, focus, color transitions |
| `--duration-base` | `300ms` | Card hover, menu slide, nav shadow |
| `--duration-slow` | `700ms` | Fade-in on scroll |
| `--duration-pop` | `400ms` | Success checkmark pop-in |
| `--easing-default` | `ease` | All transitions |
| `--easing-pop` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Success pop-in |
| `--easing-slide` | `ease` | Mobile menu slide |
| `--easing-linear` | `linear` | Spinner animation |

Motion respects `prefers-reduced-motion: reduce`: the design does not currently implement a `prefers-reduced-motion` override — state changes remain, movement should be removed via CSS media query in implementation.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `sm` | 0 | `100%` with 16px padding | 1 | 16px |
| `md` | 480px | `100%` with 24px padding | 1 | 24px |
| `lg` | 768px | `1100px` | 2–4 (auto-fit minmax) | 24px |
| `xl` | — | `1100px` | 4 (auto-fit minmax) | 28px |

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base content | `0` |
| Hero decorative blobs | `0` (pseudo-elements, behind container) |
| Hero container | `1` |
| Mobile overlay | `40` |
| Nav bar / mobile drawer | `50` |
| Menu button | `60` |

## 2. Components

### 2.1 Navigation Bar

**Purpose** — Sticky top navigation providing access to page sections and the primary CTA. Collapses to a slide-in drawer on mobile.

**Anatomy** — `[logo] [spacer] [nav links...] [CTA button] [hamburger (mobile only)]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default (top) | transparent bg, no shadow | At page top |
| Scrolled | `--color-nav-bg`, `--shadow-md` | After scrolling past 20px |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Desktop | ~62px (14px × 2 + content) | `14px 0` | `--text-sm` (links), `--text-3xl` (logo) |
| Mobile | ~60px | `14px 0` | `--text-lg` (links in drawer) |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Transparent-ish bg, no shadow | `--color-nav-bg`, no shadow |
| Scrolled | Opaque white bg, subtle shadow | `--color-nav-bg`, `--shadow-md`, `backdrop-filter: blur(14px)` |
| Link default | Muted text | `--color-text-muted` |
| Link hover | Primary color | `--color-primary`, `--duration-fast` |
| Link active (current section) | Primary color, bold | `--color-primary`, font-weight 600 |
| Mobile menu closed | Hamburger icon visible, drawer hidden | — |
| Mobile menu open | Drawer slides in from right, overlay appears, hamburger → X | `right: 0`, overlay `--color-overlay` |
| Escape key (mobile) | Closes drawer, returns focus to menu button | Keyboard event listener |

**Accessibility** — `aria-label="Mở menu"` on hamburger button. Mobile links close menu on click. Keyboard: Escape closes drawer. Focus outline via `:focus-visible`. Smooth scroll on anchor click.

### 2.2 Button — Primary

**Purpose** — Primary call-to-action. Used for "Bắt đầu dự án", "Gửi tin nhắn".

**Anatomy** — `[label]` or `[spinner (loading state)]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Primary (default) | `--color-primary` bg, white text | Main CTA |
| Full-width (form) | `width: 100%` | In contact form |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | ~48px | `14px 40px` | `--text-base`, weight 600 |
| Small (nav CTA) | ~38px | `10px 24px` | `--text-sm`, weight 600 |
| Full-width (form) | ~48px | `14px` | `--text-lg`, weight 600 |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Indigo bg, white text, pill shape | `--color-primary`, `--color-primary-text`, `--radius-full` |
| Hover | Lift 2px, stronger shadow | `transform: translateY(-2px)`, `--shadow-btn` |
| Focus (keyboard) | Visible focus ring | `--color-focus`, `outline: 3px solid`, `outline-offset: 2px` |
| Active / pressed | No lift | `transform: translateY(0)` |
| Disabled | 70% opacity, not-allowed cursor, no transform | `opacity: 0.7`, `cursor: not-allowed` |
| Loading | Label hidden, spinner visible | `.loading` class: `.btn-text` hidden, `.spinner` block |

**Accessibility** — `role="button"` (native `<button>` or `<a>`), minimum hit target 44×44px. Loading state uses `aria-disabled` via `disabled` attribute.

### 2.3 Button — Outline

**Purpose** — Secondary action. Used for "Xem dịch vụ".

**Anatomy** — `[label]`

**Variants**: None (single variant).

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | ~48px | `14px 40px` | `--text-base`, weight 600 |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Transparent bg, indigo border, indigo text | `--color-primary` border (2px), `--color-primary` text |
| Hover | Fills with indigo, white text | `background: var(--color-primary)`, `color: #fff` |
| Focus (keyboard) | Visible focus ring | `--color-focus` |
| Active / pressed | (no explicit style — inherits hover) | — |

**Accessibility** — Same hit target and focus as primary button.

### 2.4 Hero Badge

**Purpose** — Highlighted feature label in the hero section.

**Anatomy** — `[icon (inline SVG)] [label]`

**Variants**: None.

**Sizes**: Fixed height ~32px (`padding: 6px 16px`), `--text-sm`.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Semi-transparent white bg, muted text | `--color-badge-bg`, `--color-text-muted`, `--radius-full` |
| Hover | (not interactive — no hover effect) | — |

**Accessibility** — Badges are `<span>` elements, non-interactive. Icons are inline SVGs with no `aria-label` (decorative).

### 2.5 Service Card

**Purpose** — Display a service offering with icon, title, and description in a grid.

**Anatomy** — `[icon-wrap with emoji] [heading h3] [description p]`

**Variants**: None (4 cards in auto-fit grid).

**Sizes**

| Size | Padding | Text tokens |
|---|---|---|
| Desktop | `36px 24px` | h3: `--text-xl`, p: `--text-sm` |
| Mobile (full-width) | same | same |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White card, `--shadow-sm`, `--radius-lg` | `--color-surface`, `--shadow-sm`, `--radius-lg` |
| Hover | Lift 6px, stronger shadow, icon rotates | `transform: translateY(-6px)`, `--shadow-lg`, icon `scale(1.1) rotate(-4deg)` |
| Focus (keyboard) | No focus style (card is `cursor: default`, non-interactive) | — |

**Accessibility** — Cards use `cursor: default` and are not focusable (informational only). The icon wrap uses emoji (see Known deviations).

### 2.6 Team Card

**Purpose** — Display a team member with avatar, name, role, and bio.

**Anatomy** — `[avatar (initials circle)] [name h3] [role] [bio p]`

**Variants**: None (4 cards in auto-fit grid).

**Sizes**

| Size | Padding | Text tokens |
|---|---|---|
| Desktop | `36px 20px` | h3: `--text-base`, role: `--text-sm` weight 500, p: `--text-sm` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White card, border, `--radius-lg` | `--color-surface`, `--color-border-card`, `--radius-lg` |
| Hover | Lift 6px, stronger shadow, avatar scales | `transform: translateY(-6px)`, `--shadow-lg`, avatar `scale(1.08)` |
| Focus (keyboard) | Not focusable (informational) | — |

**Accessibility** — Informational only, not interactive.

### 2.7 Avatar

**Purpose** — Circular initial-letter avatar for team members.

**Anatomy** — `[single initial letter]`

**Variants**: None (4 avatars, different initials).

**Sizes**: Fixed `88×88px`, font `1.8rem` weight 700.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Indigo-to-cyan gradient bg, white letter, soft shadow | `--color-primary` → `--color-accent` gradient, white text, `--shadow-avatar` |
| Hover (on parent card) | Scale to 108% | `transform: scale(1.08)` |
| Focus | Not focusable | — |

### 2.8 Form Input / Textarea

**Purpose** — Text input fields for the contact form.

**Anatomy** — `[label] [input/textarea] [error message (conditional)]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Text | — | Name field |
| Email | `type="email"` | Email field |
| Textarea | `min-height: 120px`, `resize: vertical` | Message field |

**Sizes**: Padding `12px 16px`, `--text-base`, `--radius-md`.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Gray border, light gray bg | `--color-border`, `--color-input-bg` |
| Focus (keyboard) | Primary border, primary ring shadow | `border-color: var(--color-primary)`, `box-shadow: 0 0 0 3px rgba(79,70,229,0.1)`, `outline: none` |
| Error | Red border, red ring shadow on focus | `border-color: var(--color-danger)`, `box-shadow: 0 0 0 3px rgba(239,68,68,0.1)` |
| Disabled | (not used in design) | — |
| Placeholder | Muted text | Browser default (gray) |

**Accessibility** — Labels are explicitly associated via `for` attribute. Error messages are `<div>` elements with `.visible` class, linked visually below the field. Required fields use `required` attribute. Autocomplete attributes set.

### 2.9 Contact Form

**Purpose** — Collect user name, email, and message for inquiry.

**Anatomy** — `[form-group: name] [form-group: email] [form-group: message] [submit button] [success state]`

**Variants**: None.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | All fields empty, ready for input | — |
| Validation error | Fields with invalid input show red border + error message | `--color-danger` |
| Submitting / Loading | Button shows spinner, label hidden, button disabled | `.loading` class on button |
| Success | Form fields hidden, success checkmark + message shown | `.form-success.visible`, `--color-success` |
| Resubmission guard | Submit ignored if success state is visible | JS guard |

**Accessibility** — Form uses `novalidate` (custom JS validation). Error messages are visible/hidden via class toggle. Success state is announced via visible text.

### 2.10 Social Link

**Purpose** — Footer social media icon links.

**Anatomy** — `[single letter/symbol]`

**Variants**: Facebook (f), Twitter (𝕏), GitHub (G), LinkedIn (in).

**Sizes**: Fixed `40×40px`, `--radius-full`, `--text-sm` weight 600.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Gray circle, muted text | `--color-social-bg`, `--color-text-muted` |
| Hover | Indigo circle, white text, lift 2px | `--color-primary`, `--color-primary-text`, `transform: translateY(-2px)` |
| Focus (keyboard) | Visible focus ring | `--color-focus` |

**Accessibility** — Links have `aria-label` (e.g. "Facebook") and `title` attribute.

## 3. Content and formatting

- **Voice and tone**: Professional, friendly, confident. Vietnamese throughout.
- **Date, time, number, currency**: Footer copyright uses format "© 2025". No other formats used.
- **Capitalization**: All content is in Vietnamese with standard sentence casing. Buttons use title-style (e.g. "Bắt đầu dự án", "Gửi tin nhắn").
- **Empty-state pattern**: Not applicable — no data-driven lists.
- **Error-message pattern**: Error messages are specific to the validation failure:
  - Name empty: "Vui lòng nhập họ tên của bạn."
  - Email invalid: "Vui lòng nhập email hợp lệ."
  - Message too short: "Vui lòng nhập ít nhất 10 ký tự."

## 4. Known deviations

Places where the approved design does not follow its own rules or the anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Input border (#d1d5db) on white surface | Contrast ratio 1.47:1 — fails WCAG 3:1 minimum for UI components | The approved mockup uses this value | Consider darkening to #9ca3af (~3.01:1) or adding a darker border in implementation |
| Service card icons | Emoji used as icons (🎨, ⚡, 🔧, 🚀) instead of a consistent SVG icon set | The approved mockup uses emoji | Recorded per AI-defaults.md §7; swap for inline SVG icons at consistent stroke weight in implementation |
| Hero heading | Gradient text (`background-clip: text` with indigo–cyan gradient) — decorative gradient per AI-defaults.md §2 | Approved design uses animated gradient text for brand impact | Keep as-is; decorative gradient on hero heading is intentional for this landing page |
| Hero section background | Uses a 3-stop gradient decoration (`#eef2ff → #f0fdfa → #e0f2fe`) per AI-defaults.md §2 | Approved design uses gradient to create visual depth | Keep as-is; intentional for hero |
| Contact section background | Uses gradient decoration (`#eef2ff → #f0fdfa`) | Approved design | Keep as-is |
| Service icon-wrap background | Uses gradient (`#eef2ff → #f0fdfa`) | Approved design | Keep as-is |
| Avatar background | Uses gradient (`--color-primary → --color-accent`) | Approved design | Keep as-is |
| Nav padding `14px` | Value 14px is not in the spacing scale (not a multiple of 4) | Single occurrence | Either accept as one-off or adjust to `12px` or `16px` |
| `prefers-reduced-motion` | No CSS media query to disable animations for users who prefer reduced motion | The approved mockup does not include it | Add `@media (prefers-reduced-motion: reduce)` rule in implementation |
| Social link icons | Text letters (f, 𝕏, G, in) used instead of proper icon SVGs | Approved design uses text shorthands | Consider replacing with SVG icons for consistent rendering |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2025-07-11 | Initial design system extracted from approved index.html | #1 |
