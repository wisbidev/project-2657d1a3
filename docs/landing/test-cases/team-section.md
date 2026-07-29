# Test Cases — Team Section

Module: `landing`
Requirement: LANDING-004 — Team member grid
Risk level: **Low** — static content, no data mutation, no API dependency, no form interaction.

---

## Test Cases

### TC-TEAM-001 — All team member cards display avatar, name, role, and bio

| Field | Value |
|---|---|
| **Scenario** | Team section displays all member cards with the required content |
| **Given** | The page is loaded and the Team section is in the viewport |
| **When** | The visitor views the team grid |
| **Then** | All team member cards are visible; each card contains a circular avatar image, the member's name, their role/title, and a short bio |
| **Traceability** | LANDING-004 / AC-1 |

---

### TC-TEAM-002 — Desktop layout: 4 columns (viewport ≥ 1024px)

| Field | Value |
|---|---|
| **Scenario** | Team grid shows 4 columns on desktop |
| **Given** | The page is loaded with viewport width ≥ 1024px |
| **When** | The Team grid renders |
| **Then** | The team member cards are arranged in a single row of 4 equal-width columns |
| **Traceability** | LANDING-004 / AC-2 |

---

### TC-TEAM-003 — Tablet layout: 2 columns (768px ≤ viewport < 1024px)

| Field | Value |
|---|---|
| **Scenario** | Team grid shows 2 columns on tablet |
| **Given** | The page is loaded with viewport width between 768px and 1023px |
| **When** | The Team grid renders |
| **Then** | The team member cards are arranged in 2 rows of 2 columns each |
| **Traceability** | LANDING-004 / AC-3 |

---

### TC-TEAM-004 — Mobile layout: 1 column (viewport < 768px)

| Field | Value |
|---|---|
| **Scenario** | Team grid shows 1 column on mobile |
| **Given** | The page is loaded with viewport width < 768px |
| **When** | The Team grid renders |
| **Then** | The team member cards are arranged in a single column |
| **Traceability** | LANDING-004 / AC-4 |

---

### TC-TEAM-005 — Avatar image fails to load — placeholder shown

| Field | Value |
|---|---|
| **Scenario** | Fallback placeholder is displayed when an avatar image is unavailable |
| **Given** | The page is loaded and the Team section is in the viewport; one or more avatar image URLs are broken, empty, or fail to load |
| **When** | The browser attempts to load the avatar image(s) |
| **Then** | A placeholder (initials-based or generic icon) is displayed in place of the broken image; no broken image icon appears |
| **Traceability** | LANDING-004 / AC-5 |

---

### TC-TEAM-006 — Bio overflow: long text wraps inside the card

| Field | Value |
|---|---|
| **Scenario** | Long bio text wraps without breaking the grid layout |
| **Given** | A team member card has a bio longer than the card's default width |
| **When** | The card renders |
| **Then** | The bio text wraps within the card boundaries; the card's height adjusts to accommodate the content; neighbouring cards remain aligned at the top |
| **Traceability** | LANDING-004 / Failure — Overflow |

---

## Summary

| Case ID | Type | Requirement |
|---|---|---|
| TC-TEAM-001 | Happy path — content | LANDING-004 / AC-1 |
| TC-TEAM-002 | Happy path — responsive | LANDING-004 / AC-2 |
| TC-TEAM-003 | Happy path — responsive | LANDING-004 / AC-3 |
| TC-TEAM-004 | Happy path — responsive | LANDING-004 / AC-4 |
| TC-TEAM-005 | Happy path — fallback | LANDING-004 / AC-5 |
| TC-TEAM-006 | Boundary — overflow | LANDING-004 / Failure table |

All 5 SRS acceptance criteria for LANDING-004 are covered (TC-TEAM-001 through TC-TEAM-005). The 1 explicitly documented failure/boundary case from the SRS is also covered (TC-TEAM-006).
