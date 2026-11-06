# Redesign QA inventory

## Functional and visual coverage

- Desktop hero: real food photography, readable headline, visible immediate purchase CTA, no artificial loader.
- Mobile at 390x844 and 360x800; narrow 320px and tablet 768px: header purchase action, menu, content bounds, food framing, footer.
- Header: open/close menu, Escape focus return, outside click, anchor click, desktop resize.
- Lines: all three visual identities; mouse/touch selection; arrow/Home/End keyboard navigation; one visible panel.
- Products: six catalog records, category filters, empty response, touch/keyboard scroll, previous/next buttons, safe external links, image failure fallback.
- Motion: initial reveal, one in-transition state, scroll reveals, native scroll, reduced-motion at load and after preference change.
- Gallery, phone preview, history, all branches, closing and footer: separate viewport screenshots and readable text.
- Commerce: store URL, phone numbers, Maps/WhatsApp destinations; no checkout writes, no login and no new trackers.
- Video: opens on request, no eager video transfer, play/pause, does not obstruct navigation.
- SEO: title, canonical, Open Graph, valid local-business JSON-LD, sitemap, robots and /hub 404.
- Quality gates: lint, production build, node unit tests, console errors, broken images, horizontal overflow, automated accessibility and mobile Lighthouse if available.

## Exploratory and failure cases

- Disable JavaScript: hero, purchase links, navigation and content remain usable.
- Simulate unavailable catalog, malformed data, inactive/deleted product, forbidden image host.
- Reduced motion must never leave content hidden. User can browse without waiting for animations.
- Product filter after scrolling to the end resets the shelf to the beginning.
- Menu opened in mobile then viewport enlarged: no invisible focusable navigation overlay.

## Evidence

Local screenshots/reports live in `.codex-artifacts/redesign-qa/` and are not publication assets.
Results and unresolved constraints are recorded in `docs/redesign-handoff.md` after validation.
