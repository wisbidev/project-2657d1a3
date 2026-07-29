# Test Cases — Services Section

Module: `landing`
Requirement: LANDING-003 — Services grid
Risk level: **Low** — static content, no data mutation, no API dependency.

---

## Test Cases

### TC‑SERV‑001 — Four service cards are rendered

| Field | Value |
|---|---|
| **Scenario** | Services section displays exactly 4 cards with icon, title, and description |
| **Given** | The page is loaded and the Services section is in the viewport |
| **When** | The visitor views the grid |
| **Then** | Exactly 4 service cards are visible; each card contains an icon (emoji or SVG), a title, and a short description |
| **Traceability** | LANDING-003 / AC-1 |

---

### TC‑SERV‑002 — Desktop layout: 4 columns (viewport ≥ 1024px)

| Field | Value |
|---|---|
| **Scenario** | Services grid shows 4 columns on desktop |
| **Given** | The page is loaded with viewport width ≥ 1024px |
| **When** | The Services grid renders |
| **Then** | The 4 cards are arranged in a single row of 4 equal-width columns |
| **Traceability** | LANDING-003 / AC-2 |

---

### TC‑SERV‑003 — Tablet layout: 2 columns (768px ≤ viewport < 1024px)

| Field | Value |
|---|---|
| **Scenario** | Services grid shows 2 columns on tablet |
| **Given** | The page is loaded with viewport width between 768px and 1023px |
| **When** | The Services grid renders |
| **Then** | The 4 cards are arranged in 2 rows of 2 columns each |
| **Traceability** | LANDING-003 / AC-3 |

---

### TC‑SERV‑004 — Mobile layout: 1 column (viewport < 768px)

| Field | Value |
|---|---|
| **Scenario** | Services grid shows 1 column on mobile |
| **Given** | The page is loaded with viewport width < 768px |
| **When** | The Services grid renders |
| **Then** | The 4 cards are arranged in a single column (4 rows of 1 card each) |
| **Traceability** | LANDING-003 / AC-4 |

---

### TC‑SERV‑005 — Card hover effect (shadow lift + translateY)

| Field | Value |
|---|---|
| **Scenario** | Card visually lifts on hover |
| **Given** | The Services section is visible and all cards are in their default (unhovered) state |
| **When** | The visitor hovers the cursor over any service card |
| **Then** | The card lifts visually: box-shadow increases and the card translates slightly upward (e.g. `translateY(-4px)`); the transition is smooth |
| **Traceability** | LANDING-003 / AC-5 |

---

### TC‑SERV‑006 — Content overflow: long title or description wraps inside the card

| Field | Value |
|---|---|
| **Scenario** | Long text wraps without breaking the grid layout |
| **Given** | A service card has a title or description longer than the card's default width |
| **When** | The card renders |
| **Then** | Text wraps within the card boundaries; the card's height grows to accommodate the content; neighbouring cards remain aligned at the top |
| **Traceability** | LANDING-003 / Failure — Content overflow |

---

### TC‑SERV‑007 — Reduced motion disables hover transition

| Field | Value |
|---|---|
| **Scenario** | Hover effect is instant when `prefers-reduced-motion: reduce` is set |
| **Given** | The visitor has `prefers-reduced-motion: reduce` set in their OS/browser |
| **When** | The visitor hovers over a service card |
| **Then** | The card lifts (shadow + translateY) without a transition animation — the change is instant |
| **Traceability** | LANDING-003 / Failure — Reduced motion |

---

## Summary

| Case ID | Type | Requirement |
|---|---|---|
| TC‑SERV‑001 | Happy path — content | LANDING-003 / AC-1 |
| TC‑SERV‑002 | Happy path — responsive | LANDING-003 / AC-2 |
| TC‑SERV‑003 | Happy path — responsive | LANDING-003 / AC-3 |
| TC‑SERV‑004 | Happy path — responsive | LANDING-003 / AC-4 |
| TC‑SERV‑005 | Happy path — interaction | LANDING-003 / AC-5 |
| TC‑SERV‑006 | Boundary — overflow | LANDING-003 / Failure table |
| TC‑SERV‑007 | Boundary — reduced motion | LANDING-003 / Failure table |

All 5 SRS acceptance criteria for LANDING-003 are covered (TC‑SERV‑001 through TC‑SERV‑005). The 2 explicitly documented failure/boundary cases from the SRS are also covered (TC‑SERV‑006, TC‑SERV‑007).
