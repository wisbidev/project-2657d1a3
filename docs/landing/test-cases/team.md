# Test Cases — Team Section

Module: `landing`
Function: Team member grid (LANDING-004)
Risk level: **Low** — purely presentational section with hardcoded data, no user interaction beyond viewing. The main risk is layout breakage at responsive breakpoints.

---

## Team section (LANDING-004)

### TC-TEAM-001: Section displays heading "Our Team"

| Field | Value |
|---|---|
| **Requirement** | LANDING-004 Behaviour (point 1) |
| **Given** | The page is fully loaded and the Team section is in the viewport |
| **When** | The Visitor views the section heading |
| **Then** | A heading with the text "Our Team" is visible at the top of the section |

---

### TC-TEAM-002: All team member cards display avatar, name, role, and bio

| Field | Value |
|---|---|
| **Requirement** | LANDING-004 AC-1 |
| **Given** | The page is fully loaded and the Team section is in the viewport |
| **When** | The Visitor views the team member grid |
| **Then** | Exactly 4 team member cards are displayed; each card contains (a) a circular avatar image, (b) the member's name, (c) their role/title, and (d) a short bio description |

---

### TC-TEAM-003: Desktop viewport — 4-column grid

| Field | Value |
|---|---|
| **Requirement** | LANDING-004 AC-2 |
| **Given** | The viewport width is at least 1024px |
| **When** | The Team grid renders |
| **Then** | The team member cards are arranged in 4 columns (4 cards in a single row on desktop) |

---

### TC-TEAM-004: Tablet viewport — 2-column grid

| Field | Value |
|---|---|
| **Requirement** | LANDING-004 AC-3 |
| **Given** | The viewport width is between 768px (inclusive) and 1024px (exclusive) |
| **When** | The Team grid renders |
| **Then** | The team member cards are arranged in 2 columns (2 rows of 2 cards) |

---

### TC-TEAM-005: Mobile viewport — 1-column grid

| Field | Value |
|---|---|
| **Requirement** | LANDING-004 AC-4 |
| **Given** | The viewport width is less than 768px |
| **When** | The Team grid renders |
| **Then** | The team member cards are arranged in 1 column (4 rows of 1 card) |

---

### TC-TEAM-006: Avatar image fails to load — placeholder is shown

| Field | Value |
|---|---|
| **Requirement** | LANDING-004 AC-5 |
| **Given** | A team member card's avatar image URL is broken or the image fails to load |
| **When** | The browser attempts to render the avatar |
| **Then** | A fallback placeholder (initials, generic icon, or default avatar) is displayed instead of a broken image icon |

---

### TC-TEAM-007: Long bio text wraps within the card

| Field | Value |
|---|---|
| **Requirement** | LANDING-004 Failure/boundary — overflow |
| **Given** | A team member's bio text is longer than the card width |
| **When** | The card renders |
| **Then** | The bio text wraps to the next line within the card boundaries; the card height adjusts to accommodate the content; no text is clipped or overflows horizontally |

---

### TC-TEAM-008: Avatar is displayed as a circular image

| Field | Value |
|---|---|
| **Requirement** | LANDING-004 Behaviour (point 2) |
| **Given** | The page is fully loaded and the Team section is in the viewport |
| **When** | The Visitor views a team member card |
| **Then** | The avatar image is styled as a circle (border-radius: 50% or equivalent) |

---

## Verification checklist

- [ ] Every SRS acceptance criterion for LANDING-004 has at least one case
- [ ] Every case states setup (Given), action (When), and observable expected result (Then)
- [ ] Requirement traceability is recorded (Requirement column)
- [ ] Happy paths only — no error/edge cases beyond the explicit requirements
- [ ] Cases are written before implementation exists
