# ETHICS-PB-URL-BIND-1 — Live Capture Worksheet

The Pressbook is currently private. Use this sheet when capturing live routes from the authenticated Pressbooks view or after publication.

For each chapter:

1. Copy the exact browser URL for the chapter.
2. For each heading listed in the manifest, inspect or copy the actual heading fragment.
3. Enter the exact fragment and full URL in the JSON manifest.
4. Change the route status to `VERIFIED`.
5. Set `return_to_chapter.verified_url` to the captured chapter URL and status to `VERIFIED`.
6. Run the regression before any SUPER targeted-reading link is activated.

Do not construct heading fragments by lowercasing or hyphenating the visible heading text.
