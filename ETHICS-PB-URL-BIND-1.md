# ETHICS-PB-URL-BIND-1

## Twelve-Chapter Live URL and Section-Anchor Capture, Pressbooks→SUPER Workbook Binding, SUPER→Pressbooks Targeted-Reading Return Routes, and Round-Trip Regression

### Status

**ROUTING ARCHITECTURE BUILT / LIVE PRESSBOOKS CAPTURE PARTIALLY BLOCKED BY PRIVATE BOOK**

The Ethics Pressbook is assembled, but it remains private during production. The external build process therefore cannot truthfully certify Pressbooks' generated live chapter URLs or the HTML `id` values attached to section headings.

This build separates three states:

1. **candidate** — a predictable Pressbooks slug derived from the title;
2. **captured** — an actual URL or heading fragment observed in the live Pressbooks page;
3. **verified** — a captured route that has passed the round-trip regression.

Only **verified** routes may be exposed as active SUPER return or targeted-reading links.

## Routing model

For every chapter:

**Pressbooks chapter → SUPER workbook → targeted Pressbooks section → SUPER workbook → full Pressbooks chapter**

Canvas continues to own Quiz and Personal Ethics Journal routing.

Chapter 12 additionally preserves:

**CH12 SUPER → governed PFLAB gate → PFLAB**

## Already active

The Pressbooks chapter-end workbook links use the stable SUPER pattern:

`https://bobphil.github.io/ethics-super-final/ETHICS-SUPER-FINAL-1.html#chapter=CHxx&view=workbook`

Those links were tested successfully during the Pressbooks loading pass.

## Still requiring live capture

For Chapters 1–12:

- canonical live Pressbooks chapter URL;
- actual live heading fragment for every targeted reading;
- full-chapter return URL.

Candidate chapter slugs are stored only as capture aids.

## Production firewalls

**Candidate slug ≠ verified live URL.**

**Heading text ≠ verified HTML anchor.**

**Verified chapter URL ≠ verified section anchor.**

The SUPER redo must consume only `verified_url` values for active targeted-reading links.

## Transition A

Transition A is represented separately as a historical transition and possible supporting reading for the legitimacy sequence. It is not a thirteenth workbook.

## Relationship to ETHICS-SUPER-REDO-1

This manifest becomes the routing source of truth for the SUPER redo. The redo should not hand-code Pressbooks targets independently.

**ONE BINDING MANIFEST → TWELVE WORKBOOKS → VERIFIED ROUND TRIPS**
