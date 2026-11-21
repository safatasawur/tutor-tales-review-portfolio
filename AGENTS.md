<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- Reviews live only in `src/data/reviewsData.ts`, copied verbatim from Preply; never invent, rewrite or sync them live — the owner edits this file by hand.
- Homepage featured reviews come from `getFeaturedReviews()` (capped at three); don't hardcode review text in components.
- Site-wide constants (Preply/booking URL, subjects, exam badges) live in `src/data/siteData.ts` so copy changes stay in one place.
- Shared header, footer and page transition live in `src/routes/__root.tsx`; homepage sections are separate components in `src/components/home/`.
- External Preply links always open in a new tab via `ExternalPreplyButton` or `target="_blank" rel="noopener noreferrer"`.
- Motion uses the `motion` package under `<MotionConfig reducedMotion="user">`; keep animations subtle, no carousels.
