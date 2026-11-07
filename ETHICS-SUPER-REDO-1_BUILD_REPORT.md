# ETHICS-SUPER-REDO-1 — Build Report

## Status

**PRODUCTION IMPLEMENTATION BUILT — STATIC/CONTRACT REGRESSION READY**

This build reconciles the twelve historical-ethics workbooks against the final Pressbooks production routing contract.

## Canonical routing source

`ETHICS-PB-URL-BIND-1_MANIFEST.json` is the sole source of Pressbooks chapter and targeted-reading routes.

The application fetches that manifest at runtime. If the routing manifest cannot be loaded, the workbook remains usable but Pressbooks links fail closed rather than falling back to guessed URLs.

## Chapter-by-chapter repair

All twelve workbooks now receive a common manifest-governed reading panel containing:

- the chapter's 3–4 targeted-reading labels;
- the verified Pressbooks chapter destination for each target;
- the pedagogical purpose of each target;
- a whole-chapter return control.

Total targeted-reading routes: **45**.

Pressbooks does not expose stable section fragments for these headings, so production behavior is deliberately **verified chapter URL + exact section label**, never an invented anchor.

## Continuity preserved

The existing Tool names, four authored moves, chapter-specific Output Card fields, claim ceilings, Tool Record, READY/REOPEN semantics, snapshots, Journey view, and journal firewall are retained.

Old `ETHICS_SUPER_1_12CH_V2` browser state is migrated into the new `ETHICS_SUPER_REDO_1_12CH_V3` storage key on first load.

## Existing Pressbooks links preserved

Existing book links that still point to `ETHICS-SUPER-FINAL-1.html#chapter=...` are preserved through a compatibility redirect that carries the hash into `ETHICS-SUPER-REDO-1.html`.

This avoids reopening the private Pressbook simply to rewrite workbook URLs.

## PFLAB reconciliation

The governed Chapter 12 gate now launches:

`https://bobphil.github.io/ethics-power-flourishing-lab/ETHICS-PFLAB-2.html`

The exported handoff reports:

- `source_build: ETHICS-SUPER-REDO-1`
- `content_version: ETHICS-PB-PROD-3`
- `handoff_schema: ETHICS-PFLAB-HANDOFF-1`

## Deployment gate

Static/contract acceptance is implemented in `ETHICS-SUPER-REDO-1_ACCEPTANCE.mjs`.

Final course-ready certification still requires a human browser journey after GitHub Pages deploy:

1. open at least one old Pressbooks/SUPER link and confirm redirect + hash continuity;
2. open targeted readings in representative chapters;
3. save/reload a draft and confirm persistence;
4. confirm migration of existing FINAL-1 browser work if present;
5. export/reimport recovery;
6. take CH12 through READY and launch PFLAB-2;
7. inspect narrow/mobile layout and keyboard focus.

**Pressbooks-ready ≠ SUPER-ready ≠ course-ready.**

## Browser acceptance ledger

Human browser validation has now confirmed:

- Legacy `ETHICS-SUPER-FINAL-1.html#chapter=CH04&view=workbook` redirect preserves the chapter/view hash — **PASS**
- REDO initializes with active JavaScript and local browser storage — **PASS**
- CH04 targeted-reading UX uses one Pressbooks chapter link plus exact section labels — **PASS**
- CH04 workbook draft persists across save + browser reload — **PASS**
- Reload preserves CH04 as the active chapter — **PASS**
- CH08 routing isolation shows its own Kant/Respect/Autonomy targets and correct Pressbooks chapter — **PASS**
- CH12 routing isolation shows its own Dependency/Capability targets and correct Pressbooks chapter — **PASS**

Still pending browser certification:

- recovery export/import — **PASS**;
- PFLAB lock behavior when fewer than 12 chapters are READY;
- PFLAB-2 launch when 12/12 are READY;
- narrow/mobile layout and keyboard-focus pass.

- Recovery export/import preserves saved workbook content, chapter status, and normal navigation — **PASS**
