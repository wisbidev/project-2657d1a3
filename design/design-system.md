# Design System — Web Agent Team

Extracted from the approved `design/index.html` mockup. This document governs every UI change across all components. All tokens are CSS custom properties defined at `:root` unless a component specifies an override.

> **Deviation from general defaults**: Per project conventions, emoji are used as icon content (no icon library), and gradients are used as decorative background treatments (not just solid fills).

---

## 1. Design Tokens

### 1.1 Color Palette

| Token | Value | Usage | Contrast (WCAG AA) |
|---|---|---|---|
| `--primary` | `#4f46e5` | Brand color, buttons, links, active nav | Passes on white body text |
| `--primary-dark` | `#3730a3` | Button hover darkened state | — |
| `--accent` | `#22d3ee` | Accent / highlight, secondary gradient | ❌ Fails AA on white (decorative only) |
| `--bg-light` | `#f8f9fc` | Page background, hero gradient start | — |
| `--bg-card` | `#ffffff` | Card, form, nav, team section background | — |
| `--text` | `#1a1a2e` | Body text, headings | Passes on all backgrounds |
| `--text-muted` | `#6b7280` | Secondary text, nav inactive, descriptions | Passes AA at 16px |
| `--error` | `#ef4444` | Validation error border + text | Passes AA on white |
| `--success` | `#059669` | Success state checkmark + heading | Passes AA on white |
| `--border` | `#d1d5db` | Input default border | — |
| `--input-bg` | `#fafafa` | Input background fill | — |
| `--social-bg` | `#e5e7eb` | Social icon circle background | — |
| `--heart` | `#ef4444` | Footer heart icon | Decorative |

#### Gradient recipes

| Gradient | Stops | Usage |
|---|---|---|
| `hero-bg` | `#eef2ff` → `#f0fdfa` → `#e0f2fe` (135°) | Hero section background |
| `hero-text` | `var(--primary)` → `var(--accent)` → `var(--primary)` | Hero heading (animated, decoration only) |
| `icon-wrap` | `#eef2ff` → `#f0fdfa` (135°) | Service card icon background |
| `avatar` | `var(--primary)` → `var(--accent)` (135°) | Team avatar circle |
| `contact-bg` | `#eef2ff` → `#f0fdfa` (135°) | Contact section background |

### 1.2 Spacing Scale

Base unit: `4px`. Container padding uses the standard scale.

| Token / Rule | Value | Base unit |
|---|---|---|
| `--max-w` (container max-width) | `1100px` | — |
| Container padding (≥769px) | `0 24px` | 6× |
| Container padding (≤480px) | `0 16px` | 4× |
| Section vertical padding | `100px 0` | 25× |
| Section vertical (≤768px) | `70px 0` | 17.5× |
| Nav padding | `14px 0` | 3.5× |
| Nav links gap | `28px` | 7× |
| Hero padding desktop | `140px 0 100px` | 35× / 25× |
| Hero padding mobile | `120px 0 70px` | 30× / 17.5× |
| Card inner padding (services) | `36px 24px` | 9× / 6× |
| Card inner padding (team) | `36px 20px` | 9× / 5× |
| Form padding desktop | `44px` | 11× |
| Form padding mobile | `28px 20px` | 7× / 5× |
| Form group margin-bottom | `20px` | 5× |
| Input padding | `12px 16px` | 3× / 4× |
| Gap between sections within a group | `24px` | 6× |
| Gap in badge row | `24px` | 6× |
| Gap in team grid | `28px` | 7× |
| Badge padding | `6px 16px` | 1.5× / 4× |
| Section title bottom margin | `12px` | 3× |
| Section sub bottom margin | `52px` | 13× |
| Social link gap | `12px` | 3× |
| Footer top padding | `48px` | 12× |
| Footer bottom padding | `40px` | 10× |
| Icon wrap margin-bottom | `18px` | 4.5× |

### 1.3 Typography

#### Font stack

```
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
```

System-native sans-serif only. No custom fonts or @font-face.

#### Type ramp

| Level | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| h1 desktop | `3.4rem` | 900 (black) | 1.12 | Hero heading |
| h1 ≤768px | `2.2rem` | 900 | — | Hero heading (tablet) |
| h1 ≤480px | `1.8rem` | 900 | — | Hero heading (phone) |
| section-title | `2rem` | 800 (extrabold) | — | Section heading |
| section-title mobile | `1.6rem` | 800 | — | Section heading (mobile) |
| logo | `1.4rem` | 800 | — | Top-left branding |
| success h3 | `1.3rem` | 700 (bold) | — | Form success heading |
| hero p | `1.2rem` | 400 | 1.6 | Hero subtext |
| section-sub | `1.1rem` | 400 | — | Section description |
| service card h3 | `1.15rem` | 700 | — | Service title |
| team h3 | `1.1rem` | 700 | — | Team member name |
| nav link mobile | `1.1rem` | 500 | — | Mobile nav links |
| submit btn | `1.05rem` | 600 | — | Form submit |
| base | `1rem` | 400 | 1.6 | Body, buttons, inputs, labels |
| nav link | `0.95rem` | 500 | — | Desktop nav, service card p |
| team role | `0.9rem` | 500 | — | Role text, footer, badge text |
| field error | `0.82rem` | 400 | — | Validation error message |

### 1.4 Border Radius

| Token / Rule | Value | Usage |
|---|---|---|
| `--radius` | `12px` | Card, form container, team card |
| Pill | `50px` | Primary/outline buttons, badges |
| Icon wrap | `16px` | Service icon background |
| Input | `8px` | Form inputs, textarea |
| Focus outline | `4px` | `:focus-visible` ring |
| Menu lines | `2px` | Hamburger lines |
| Avatar / Social | `50%` | Team avatar, social link circles |

### 1.5 Shadows

| Token / Rule | Value | Usage |
|---|---|---|
| `--shadow` | `0 4px 24px rgba(0,0,0,0.06)` | Default card shadow |
| `--shadow-lg` | `0 12px 40px rgba(0,0,0,0.10)` | Hover state, form container |
| Avatar | `0 4px 14px rgba(79,70,229,0.20)` | Team avatar |
| Button hover | `0 8px 24px rgba(79,70,229,0.35)` | Primary button hover |
| Nav (scrolled) | `0 2px 20px rgba(0,0,0,0.06)` | Nav after scroll |
| Mobile drawer | `-4px 0 20px rgba(0,0,0,0.08)` | Mobile nav panel |

### 1.6 Motion

| Token / Rule | Timing | Easing | Usage |
|---|---|---|---|
| Hover (quick) | `200ms` | `ease` | Nav links, buttons, social icons |
| Hover (card lift) | `300ms` | `ease` | Service/team card transforms |
| Fade-in scroll | `700ms` | `ease` | Section entry animation |
| Mobile drawer | `350ms` | `ease` | Slide-in/out nav panel |
| Spinner | `600ms` | `linear infinite` | Submit loading spinner |
| Gradient shift | `6s` | `ease-in-out infinite alternate` | Hero heading |
| Heart pulse | `1.5s` | `ease infinite` | Footer heart |
| Floating orb | `8s` / `10s` | `ease-in-out infinite alternate` | Hero decorative orbs |
| Success pop-in | `400ms` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Success checkmark |

### 1.7 Layout Breakpoints

| Breakpoint | Target | Changes |
|---|---|---|
| `≤768px` | Tablet / mobile | Grid → single column; full-width cards; fixed nav → drawer menu; smaller h1/section-title |
| `≤480px` | Small phone | Smaller h1; badge column layout; tighter container padding |

---

## 2. Reusable Components

### 2.1 Navigation (`<nav id="navbar">`)

**Structure**: Fixed top bar, 14px padding, `rgba(255,255,255,0.88)` background with `backdrop-filter: blur(14px)`, 1px bottom border `rgba(0,0,0,0.04)`.

| State | Behaviour |
|---|---|
| Default | Transparent no-shadow background |
| After scroll >20px | Adds `.scrolled` class → `box-shadow: 0 2px 20px rgba(0,0,0,0.06)` |
| Nav link default | `color: var(--text-muted)`, weight 500 |
| Nav link hover | `color: var(--primary)` |
| Nav link active | `color: var(--primary)`, weight 600, class `.active` set via JS on scroll |
| Mobile nav (≤768px) | Hidden off-screen right (`right: -280px`), slides in via `.open` → `right: 0`; backdrop overlay appears |
| Mobile nav links | Font size `1.1rem`, stacked vertically, 20px gap |
| Escape key | Closes mobile nav, returns focus to menu button |

**JS**: Toggles `.open` on `#navLinks`, `#menuBtn`, `#mobileOverlay`; sets `document.body.style.overflow = 'hidden'` when open.

### 2.2 Logo (`.logo`)

- `<a>` tag linking to `#hero`
- Font size `1.4rem`, weight 800
- Text: `Web` in `var(--primary)`, `<span>Agent</span>` in `var(--accent)`
- No hover effect

### 2.3 Buttons

#### Primary Button (`.btn-primary`)

| Property | Value |
|---|---|
| Background | `var(--primary)` |
| Color | `#fff` |
| Padding | `14px 40px` |
| Border-radius | `50px` (pill) |
| Font | `1rem`, weight 600 |
| Cursor | `pointer` |
| Border | `none` |
| Transition | `transform .2s, box-shadow .2s` |

| State | Behaviour |
|---|---|
| Hover | `transform: translateY(-2px)` + `box-shadow: 0 8px 24px rgba(79,70,229,0.35)` |
| Active | `transform: translateY(0)` |
| Disabled | `opacity: 0.7`, `cursor: not-allowed`, no hover transform |
| Loading | Class `.loading` → hides `.btn-text`, shows `.spinner` |

**Inline variant** (nav CTA): `padding: 10px 24px; font-size: 0.9rem`.

#### Outline Button (`.btn-outline`)

| Property | Value |
|---|---|
| Background | `transparent` |
| Color | `var(--primary)` |
| Border | `2px solid var(--primary)` |
| Padding / Radius / Font | Same as primary |
| Transition | `background .2s, color .2s` |

| State | Behaviour |
|---|---|
| Hover | `background: var(--primary)`, `color: #fff` |
| Mobile (≤768px) | `margin-left: 0`, stacked below primary |

### 2.4 Hero Section (`#hero`)

- Full-width section, `140px 0 100px` padding (120px/70px mobile)
- Background gradient: `135deg, #eef2ff → #f0fdfa → #e0f2fe`
- Two decorative floating orbs via `::before` and `::after` pseudo-elements:
  - `::before`: 500px circle, radial gradient `rgba(79,70,229,0.08)`, top-right, `float 8s`
  - `::after`: 400px circle, radial gradient `rgba(34,211,238,0.08)`, bottom-left, `float 10s reverse`

#### Hero Heading (`h1`)

- `3.4rem` weight 900, `line-height: 1.12`
- Gradient text: `linear-gradient(135deg, var(--primary), var(--accent), var(--primary))` with `background-size: 200% 200%`
- Animated via `@keyframes gradient-shift` — shifts `background-position` between `0% 50%` and `100% 50%` over 6s
- `.highlight` span: gradient `var(--primary)` → `#818cf8`

#### Hero Badges (`.hero-badge`)

- Flex row, gap `24px`, wrapping on mobile
- Pill shape `50px` with `rgba(255,255,255,0.6)` background, `backdrop-filter: blur(4px)`
- `font-size: 0.9rem`, `color: var(--text-muted)`
- Inline SVG icon (16×16, `currentColor`) + text label

### 2.5 Service Card (`.service-card`)

| Property | Value |
|---|---|
| Background | `var(--bg-card)` |
| Padding | `36px 24px` |
| Border-radius | `var(--radius)` (12px) |
| Box-shadow | `var(--shadow)` |
| Border | `1px solid rgba(0,0,0,0.03)` |
| Text-align | `center` |
| Cursor | `default` |
| Transition | `transform .3s, box-shadow .3s` |

| State | Behaviour |
|---|---|
| Default | Static card |
| Hover | `transform: translateY(-6px)` + `box-shadow: var(--shadow-lg)` |

#### Icon Wrap (`.service-card .icon-wrap`)

- 60×60px, border-radius `16px`
- Gradient background: `#eef2ff → #f0fdfa` (135°)
- Center-flex with emoji at `1.6rem`
- On card hover: `transform: scale(1.1) rotate(-4deg)` (transition `.3s`)

### 2.6 Team Card (`.team-card`)

| Property | Value |
|---|---|
| Padding | `36px 20px` |
| Border-radius | `var(--radius)` |
| Border | `1px solid rgba(0,0,0,0.03)` |
| Text-align | `center` |
| Transition | `transform .3s, box-shadow .3s` |

| State | Behaviour |
|---|---|
| Default | No shadow |
| Hover | `transform: translateY(-6px)` + `box-shadow: var(--shadow-lg)` |

#### Avatar (`.avatar`)

- 88×88px circle (`border-radius: 50%`)
- Gradient: `var(--primary)` → `var(--accent)` (135°)
- Text: first initial, `#fff`, weight 700, `font-size: 1.8rem`
- Box-shadow: `0 4px 14px rgba(79,70,229,0.2)`
- On card hover: `transform: scale(1.08)` (transition `.3s`)

#### Meta

| Element | Style |
|---|---|
| `.team-card h3` (name) | `1.1rem`, weight 700 |
| `.role` | `0.9rem`, `var(--primary)`, weight 500, `4px 0 10px` margin |
| `.team-card p` (bio) | `0.9rem`, `var(--text-muted)`, `line-height: 1.5` |

### 2.7 Contact Form (`.contact-form`)

| Property | Value |
|---|---|
| Max-width | `520px`, centered (`margin: 0 auto`) |
| Background | `var(--bg-card)` |
| Padding | `44px` (→ `28px 20px` on mobile) |
| Border-radius | `var(--radius)` |
| Box-shadow | `var(--shadow-lg)` |

#### Input Fields (`input`, `textarea`)

| Property | Value |
|---|---|
| Width | `100%` |
| Padding | `12px 16px` |
| Border | `1.5px solid #d1d5db` |
| Border-radius | `8px` |
| Font | `1rem`, inherit |
| Background | `#fafafa` |
| Transition | `border-color .2s, box-shadow .2s` |

| State | Behaviour |
|---|---|
| Default | Border `#d1d5db` |
| Focus | `border-color: var(--primary)` + `box-shadow: 0 0 0 3px rgba(79,70,229,0.1)`; `outline: none` |
| Error | Class `.error` → `border-color: #ef4444` + focus ring `rgba(239,68,68,0.1)` |
| Disabled | N/A (no disabled input state in mockup) |

#### Label (`.contact-form label`)

| Property | Value |
|---|---|
| Display | `block` |
| Font | `0.9rem`, weight 600 |
| Margin-bottom | `6px` |

#### Field Error (`.field-error`)

| Property | Value |
|---|---|
| Color | `#ef4444` |
| Font | `0.82rem` |
| Display | `none` → `.visible` → `display: block` |
| Margin-top | `4px` |

#### Submit Button (in form context)

- Full width: `width: 100%`
- Same `.btn-primary` tokens

##### Loading State (`.btn-primary.loading`)

- `.btn-text` → `display: none`
- `.spinner` → `display: block` (20×20px, `border: 2.5px solid rgba(255,255,255,0.3)`, `border-top-color: #fff`, `border-radius: 50%`, `animation: spin .6s linear infinite`)

#### Success State (`.form-success`)

| Property | Value |
|---|---|
| Display | `none` → `.visible` → `display: block` |
| Text-align | `center` |
| Padding | `20px 0` |

- Checkmark SVG: 56×56px, stroke `#059669`, with `pop-in` animation
- `.form-success h3`: `1.3rem`, weight 700, color `#059669`
- `.form-success p`: `0.95rem`, `var(--text-muted)`

### 2.8 Footer

| Element | Style |
|---|---|
| `footer` | `padding: 48px 0 40px`, `border-top: 1px solid rgba(0,0,0,0.04)`, `text-align: center` |

#### Social Links (`.social-links`)

- Flex row, `justify-content: center`, gap `12px`
- Each link: 40×40px circle (`border-radius: 50%`), background `#e5e7eb`, center-flex, `color: var(--text-muted)`
- Hover: `background: var(--primary)`, `color: #fff`, `transform: translateY(-2px)` (transition `.2s`)

#### Copyright

- `color: var(--text-muted)`, `font-size: 0.9rem`
- `.heart` span: `color: #ef4444`, `display: inline-block`, `animation: pulse 1.5s ease infinite`

### 2.9 Fade-in Animation (`.fade-in`)

| Property | Value |
|---|---|
| Initial | `opacity: 0`, `transform: translateY(30px)` |
| Visible (class `.visible`) | `opacity: 1`, `transform: translateY(0)` |
| Transition | `opacity .7s ease, transform .7s ease` |
| Trigger | `IntersectionObserver` with `threshold: 0.15`, fires once per element |

### 2.10 Mobile Overlay (`.mobile-overlay`)

| Property | Value |
|---|---|
| Display | `none` → `.open` → `display: block` |
| Position | Fixed, `inset: 0` |
| Background | `rgba(0,0,0,0.3)` |
| Z-index | `40` |
| Click | Closes mobile nav |

---

## 3. Interaction Summary

| Interaction | Mechanism |
|---|---|
| Scroll → nav shadow | Adds `.scrolled` class via `scroll > 20px` listener |
| Scroll → active nav link | Compares `scrollY + 120` to section `offsetTop` |
| Scroll → fade-in | `IntersectionObserver`, threshold 0.15, fires once |
| Mobile menu toggle | `.open` class toggle via click / overlay / Escape key |
| Form validation HTML5 | Custom JS on submit: name (non-empty), email (regex), message (≥10 chars) |
| Form loading | Adds `.loading`, disables button, shows spinner, 1.8s simulated send |
| Form success | Hides `.form-group` and button, shows `.form-success` |
| Inline error clear | Removes `.error`/`.visible` on input event |
| Smooth scroll | `scrollIntoView({ behavior: 'smooth' })` on all `href^="#"` clicks |
| Keyboard nav | `:focus-visible` outline ring on all interactive elements |
