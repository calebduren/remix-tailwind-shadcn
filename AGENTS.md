# Repository instructions

## Agent workflow

- Carry requests for action through implementation and relevant verification. Use context to resolve routine choices; state consequential assumptions and proceed with reversible work.
- Ask only for missing information that materially changes the outcome or for an action lacking authorization. Reuse prior authorization, prepare a concrete result before an approval gate, and continue independent work while waiting.
- Explicit user instructions take precedence over skill guidelines, subject to system and developer constraints. Apply skills only within their scope. If a skill blocks progress, link its exact `SKILL.md`, quote the rule, and explain why it applies.
- Keep the original goal across follow-ups; incorporate corrections and answer side questions without abandoning unfinished work.
- Default to one agent. Delegate only when requested or an applicable instruction calls for it; use bounded, independent scopes and review the results.
- Match verification to the changed behavior and risk. Complete required checks; avoid redundant tests for trivial edits. After checks pass, repeat only for new changes, failures, or unresolved concerns. Report what actually ran.
- Lead with the outcome in concise, plain prose. Include relevant evidence and limitations; avoid boilerplate and unnecessary headings.
- Preserve unrelated edits and project safeguards. Keep model defaults, deployment targets, credentials, and external actions within the requested scope.

Based on [OpenAI model guidance](https://developers.openai.com/api/docs/guides/latest-model?model=gpt-6-astra), reviewed 2026-09-07.

## Browser policy

- Prefer Chrome through `chrome:control-chrome` for navigation, interaction, screenshots, authenticated sessions, and browser verification. The Codex in-app browser through `browser:control-in-app-browser` is also permitted, especially for smoke tests.
- Never use Aside or the `aside-browser` skill.

## Project context

Inspect `package.json`, the lockfile, and existing source conventions before changing code. Available script names: `dev`, `lint`, `typecheck`, `build`. Read each script before running it; this list is not a mandatory checklist.
