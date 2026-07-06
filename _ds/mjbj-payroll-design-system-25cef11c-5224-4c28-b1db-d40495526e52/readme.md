# MJBJ Payroll — Design System

A complete design system for **MJBJ Payroll**, a data-dense payroll management web app for agricultural / farm operations in the Philippines. Admins run pay periods per farm, enter days worked and rates, compute gross/deductions/net, and finalize payslips.

The system is built on a **Bootstrap 5** foundation with a single sage-teal accent, a light-sidebar layout, and a distinctive shape-based payroll **status badge** system.

## Sources

- `uploads/mjbj-theme.css` — the locked Bootstrap 5 theme (all `:root` variables; the source of truth for every color, font, radius, and component override). Tokens here are re-expressed as framework-neutral custom properties under `tokens/`.
- `uploads/MJBJ_Payroll_Brand_Identity.pdf` — 2-page brand identity / visual summary (colors, status system, typography, locked decisions).

There is **no codebase or Figma file** — the theme CSS and the brand PDF are the complete ground truth. Product context (farm names, worker names, peso amounts, period structure) is inferred from the specimen content in those two files.

---

## Product context

- **One product:** the MJBJ Payroll web app (admin console). No marketing site, mobile app, or docs were provided.
- **Core objects:** Farms → Pay periods → Workers → Payslips. A period belongs to a farm and a month; it moves through Draft → Open → Finalized.
- **Users:** payroll administrators / bookkeepers. Dense tables, money columns, keyboard-friendly forms — not consumer-facing.
- **Rebrand model:** the original theme is variable-driven — `--app-name`, `--color-accent`, fonts, and layout all swap from `:root`. This system preserves that: change tokens, everything inherits.

---

## CONTENT FUNDAMENTALS

How MJBJ Payroll writes copy.

- **Tone:** plain, operational, administrative. It reads like accounting software — precise and quiet, never marketing-y or playful. No exclamation points.
- **Voice / person:** label-driven and impersonal. UI is nouns and short verb phrases ("Finalize period", "Mark paid", "New period"), not "you" or "we". Confirmations may address the admin's action neutrally ("Period finalized").
- **Casing:** **Sentence case** everywhere — buttons, page titles, menu items ("Pay periods", "Payroll register", "Finalize period"). The only uppercase is small meta/section labels with letter-spacing (nav group headers like "PAYROLL", "SETUP"; table column heads). Never title-case buttons or headings.
- **Numbers & money:** always tabular. Peso amounts use the `₱` symbol, thousands separators, and two decimals (`₱8,200.00`). Counts are plain integers. Money is right-aligned in tables.
- **Dates:** human, abbreviated — "May 2025", "May 1 – 31, 2025", "Apr 2025". Period labels are `<Month> <Year>`.
- **Names:** workers are listed **surname-first** ("Santos, Maria", "dela Cruz, Juan") as in a payroll register. Filipino names and farm labels ("Farm A", "Farm B") are the domain vocabulary.
- **Status language:** exactly three states — **Draft** (not started), **Open** (edits in progress), **Finalized** (locked). These words are fixed; don't invent synonyms ("Pending", "Complete").
- **Emoji:** never. Meaning is carried by Bootstrap Icons + the status geometry, not emoji.
- **Microcopy examples:** "3 workers have no rate set." · "Once finalized, all 14 payslips lock and can no longer be edited." · "No periods match this filter."

---

## VISUAL FOUNDATIONS

- **Color & vibe:** a single muted **sage-teal** accent (`#3a8c6e`) on a cool-gray/white field. No second brand color, no gradients. The feel is calm, trustworthy, agricultural-but-clerical. Backgrounds are flat fills — **never** images, textures, or gradients. The accent appears only on CTAs, active nav, links, and active-row highlights; everything else is grayscale.
- **Layout:** "Pattern B" — light gray sidebar (`#f3f4f6`, 220px) · white content cards · gray page canvas. Fixed left sidebar, a 52px white topbar with breadcrumb + title + search + user, and a centered content column (max 1280px) with 24px gutters. Data-dense: tight spacing, small type.
- **Typography:** two families. **Plus Jakarta Sans** (600/700) for display — app name, page titles, section headers, stat figures. **IBM Plex Sans** (400/500/600) for everything UI — table data, nav, labels, badges, inputs. Money/counts use IBM Plex Sans with **tabular + lining numerals** (`tnum`/`lnum`). Base body is 14px; tables 13px; labels 12px; badges/meta 11px. Display titles get slight negative tracking.
- **Spacing:** 4px base unit, tight rhythm. Button padding 5/11px, card padding ~14/16px, nav items 6/8px. Page gutter 24px.
- **Corner radii:** small and consistent — buttons **5px**, cards **6px**, inputs 5px, small chips 4px. Pills (Finalized badge) are fully round (99px). Nothing is heavily rounded.
- **Borders:** hairline `1px solid #e0e4e8` on cards, inputs, table outer edges; even subtler `#f0f2f4` for in-table row separators. Borders do most of the separation work — this is a bordered, not a shadow-heavy, system.
- **Shadows:** deliberately subtle and functional, never decorative. `sm` = `0 1px 3px rgba(0,0,0,.06)` on cards; `0 2px 6px` on raised elements; `lg` = `0 12px 32px rgba(0,0,0,.14)` reserved for modals/toasts. No glows, no colored shadows.
- **Hover states:** accent buttons darken one step (`#3a8c6e → #2a6b52`); secondary/ghost get a faint gray or sage tint; table rows and nav items tint to `--color-accent-subtle` (`#edf7f3`). Hover is a **background/color** change, never a transform.
- **Press / active states:** accent elements darken a second step to `#1f5c47`. No shrink/scale. The active table row and active nav item show a **3px sage left bar** + subtle tinted fill + accent text — geometry-led, not just color.
- **Transparency & blur:** minimal. Used only for the modal scrim (`rgba(26,42,26,.38)`) and faint hover tints (`rgba(58,140,110,.07)`). No frosted glass / backdrop-blur.
- **Motion:** quick and restrained — 120–160ms ease on background/border/color. No bounces, no infinite/looping decorative animation. Switches and the modal slide/fade gently; that's the extent of it.
- **Cards:** white fill, 1px `#e0e4e8` border, 6px radius, `shadow-sm`. Optional header (display-font title + muted subtitle + right-aligned actions, divided by a subtle border) and a tinted footer. Set them flush (`padding={false}`) to host a table.
- **Imagery:** essentially none — this is a forms-and-tables product. The only "imagery" is initial-based avatars (sage-tinted) and the M lettermark. If photos were ever introduced they should be neutral/cool, but the brand currently uses none.

---

## ICONOGRAPHY

- **Set:** **Bootstrap Icons 1.11** — the natural pairing for the Bootstrap 5 base. Loaded from CDN (`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css`). The original theme/PDF specify icon *meanings* (check / clock / pencil for the status system) but ship no icon assets, so Bootstrap Icons is used as the closest, on-brand match. **(Substitution — flagged below.)**
- **Style:** outline / 1.5px-ish stroke by default, at 14–16px in dense UI. `*-fill` variants are reserved — chiefly the Finalized status check (`bi-check-circle-fill`) and toast leading icons.
- **Status icons (fixed):** Finalized → `bi-check-circle-fill`; Open → `bi-clock`; Draft → `bi-pencil`. These are part of the status system's meaning and must not be swapped.
- **Common app icons:** `bi-grid-1x2` (dashboard), `bi-calendar3` (periods), `bi-people` (workers), `bi-receipt` (payslips), `bi-cash-stack` (rates), `bi-table` (register), `bi-house` (farms), `bi-gear` (settings), `bi-funnel` (filter), `bi-download` (export), `bi-lock` (finalize), `bi-search`.
- **Emoji / unicode:** never used as icons. The peso sign `₱` is used as a literal currency glyph (not an icon).
- **Logo / mark:** an **M lettermark** in a rounded sage square (`assets/logo-mark.svg`) plus a horizontal wordmark lockup (`assets/logo-lockup.svg`). These are typographic marks rendered in Plus Jakarta Sans — see the caveat below.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (imports only). Consumers link this one file.
- `readme.md` — this document.
- `SKILL.md` — Agent-Skill manifest for downloadable use.

**`tokens/`** — CSS custom properties, each `@import`ed by `styles.css`
- `fonts.css` (Google Fonts import) · `colors.css` · `typography.css` · `spacing.css` · `effects.css` (radii/shadows/badge geometry/focus/motion) · `base.css` (resets + type roles)

**`components/`** — reusable React primitives (namespace `window.MJBJPayrollDesignSystem_25cef1`)
- `core/` — **Button**, **IconButton**, **Card**, **Avatar**
- `forms/` — **Input**, **Select**, **Checkbox**, **Switch**
- `feedback/` — **StatusBadge** (signature), **Toast**, **Dialog**
- `navigation/` — **SidebarNav**, **Tabs**, **Topbar**
- `data/` — **DataTable**, **MoneyCell**

**`ui_kits/payroll/`** — interactive recreation of the app
- `index.html` (entry) · `AppShell.jsx` · `DashboardScreen.jsx` · `PayPeriodsScreen.jsx` · `PayrollRegisterScreen.jsx` · `data.js`

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`assets/`** — `logo-mark.svg`, `logo-lockup.svg`.

---

## Caveats / substitutions

- **Fonts:** Plus Jakarta Sans and IBM Plex Sans are loaded from **Google Fonts** (as the original theme did via `@import`). No local font binaries were provided, so no `@font-face` files are bundled.
- **Icons:** Bootstrap Icons is a **substitution** — the source specifies icon meanings but ships no icon assets. If MJBJ has a preferred icon set, swap the CDN link and update the status icons.
- **Logo:** no logo file was provided. The `assets/logo-*.svg` lettermarks were reconstructed from the PDF's "M MJBJ Payroll" lockup using the brand display font. Replace with official artwork if it exists.
