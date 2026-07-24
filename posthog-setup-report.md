# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the DevEvent Next.js App Router project. The following changes were made:

- **`instrumentation-client.ts`** (new): Initializes `posthog-js` client-side using the `instrumentation-client` convention supported in Next.js 15.3+. Includes exception autocapture, debug mode in development, and a loud dev-mode warning when the environment variable is missing.
- **`next.config.ts`** (updated): Added `/ingest` reverse proxy rewrites for EU PostHog endpoints (including `/static/` and `/array/` paths), and `skipTrailingSlashRedirect: true` to support PostHog's trailing-slash API requests.
- **`components/ExploreBtn.tsx`** (updated): Added `posthog.capture('explore_events_clicked')` in the button's click handler.
- **`components/EventCard.tsx`** (updated): Added `'use client'` directive and `posthog.capture('event_card_clicked', { event_slug, event_location, event_date })` in the Link's click handler.
- **`.env.local`** (new): Created with `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` values.

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the 'Explore Events' CTA button on the home page. | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks an event card to view its detail page. | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://eu.posthog.com/project/231544/dashboard/846166)
- [Explore Events button clicks (wizard)](https://eu.posthog.com/project/231544/insights/iBLUmZAj)
- [Event card clicks by event (wizard)](https://eu.posthog.com/project/231544/insights/wi6yeZHW)
- [CTA to event detail funnel (wizard)](https://eu.posthog.com/project/231544/insights/8ozXu6jr)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add the exact PostHog env var names (`NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, `NEXT_PUBLIC_POSTHOG_HOST`) to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
