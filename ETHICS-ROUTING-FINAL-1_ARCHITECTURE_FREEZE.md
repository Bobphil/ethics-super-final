# ETHICS-ROUTING-FINAL-1 — Architecture Freeze

**Status:** FROZEN BEFORE PRODUCTION BINDING

Canvas is the course orchestrator. Pressbooks, New Quizzes, SUPER, and the Personal Ethics Journal remain independent module items.

Required per-chapter sequence:

**READ → QUIZ → WORKBOOK → JOURNAL**

implemented as:

1. Pressbooks chapter — external reading item
2. Canvas New Quiz — native Canvas assessment
3. SUPER workbook — external deep link
4. Personal Ethics Journal — native Canvas assignment/item

The arrows describe **module order**, not hard-coded application-to-application routing.

## Prohibited coupling

- Pressbooks does not require Quiz or Journal URLs.
- SUPER does not require Quiz or Journal URLs.
- Canvas Quiz and Journal objects do not require Pressbooks URLs.
- HCC and SPC maintain native Canvas objects independently.

## Required dependency

Only SUPER → PFLAB is hard-wired:

**12/12 READY → SUPER PFLAB gate → PFLAB → ETHICS-PFLAB-HANDOFF-1**

SUPER: https://bobphil.github.io/ethics-super-final/ETHICS-SUPER-FINAL-1.html

PFLAB: https://bobphil.github.io/ethics-power-flourishing-lab/ETHICS-PFLAB-INTEGRATION-1.html

Final Canvas gate item:
https://bobphil.github.io/ethics-super-final/ETHICS-SUPER-FINAL-1.html#chapter=CH12&view=pflab

Do not substitute a direct Canvas → PFLAB link for the SUPER gate.

**Module sequencing ≠ application coupling.**
