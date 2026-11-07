# ETHICS-PB-URL-BIND-1

## Twelve-Chapter Live URL Capture, Pressbooks→SUPER Workbook Binding, SUPER→Pressbooks Targeted-Reading Return Routes, and Round-Trip Regression

### Final routing decision

Pressbooks does not expose a distinct browser URL when moving among the targeted sections within Chapter 1. We therefore do **not** manufacture or assume section fragments.

Targeted reading is implemented as:

**verified chapter URL + exact target section label**

For example:

**Open Chapter 1 — read the section “Ethical attention.”**

This preserves the instructional target without creating brittle or fictional anchors.

### Certified routing model

For every chapter:

**Pressbooks chapter → SUPER workbook → verified Pressbooks chapter + target heading label → SUPER workbook → full Pressbooks chapter**

Chapter 12 additionally preserves:

**CH12 SUPER → governed PFLAB gate → PFLAB**

Canvas continues to own Quiz and Personal Ethics Journal routing.

### Capture status

- 12/12 chapter URLs verified.
- 45/45 targeted-reading records mapped to verified chapter URLs.
- 45/45 targeted-reading heading labels preserved.
- Section anchors are optional and intentionally null.
- No active route claims a direct section fragment.

### Production firewalls

**Heading label ≠ direct anchor.**

**Verified chapter route + exact heading label = valid targeted-reading route.**

**Do not invent HTML fragments.**

### Relationship to ETHICS-SUPER-REDO-1

The SUPER redo should render each targeted reading as an active chapter link accompanied by the exact target section heading. It should not attempt to fabricate a fragment identifier.

**ONE BINDING MANIFEST → TWELVE WORKBOOKS → FORTY-FIVE TARGETED READINGS → VERIFIED ROUND TRIPS**
