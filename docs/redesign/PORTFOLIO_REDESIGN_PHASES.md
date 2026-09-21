# Portfolio Redesign Roadmap

## Purpose

Redesign the current single-page portfolio into a fast, credible, project-first website for senior software engineering opportunities. The new experience should make Neelesh's enterprise work for UAE government and financial organizations the primary proof of capability.

The recommended visual direction is **Technical Editorial**: strong typography, disciplined spacing, restrained motion, clear engineering evidence, and a small number of distinctive interactive details.

## Confirmed decisions

- Primary role: Senior Full Stack Developer.
- Target markets: UAE, India, and international remote roles.
- Project scope: include all documented enterprise projects.
- Project media: use sanitized placeholders until approved screenshots are supplied.
- Theme: balanced light and dark system.
- Lab tools: upgrade the analyzer and assistant; use a grounded model path with a transparent local fallback.
- Contact: display email, professional profiles, and both phone numbers.
- Delivery: implement every phase sequentially on a separate local branch.
- Publishing: do not push to Git or deploy to Vercel without a later explicit request.

## Implementation status — 16 September 2026

- Complete: positioning, target markets, information architecture, design system, responsive home page, all eight case-study routes, lab route, local analyzer upgrade, grounded assistant API path, metadata routes, accessibility foundations, and production build validation.
- Pending user assets: approved project screenshots, final project metrics, and confirmed certification wording.
- Pending external configuration: `OPENAI_API_KEY` and `OPENAI_MODEL` for live model responses.
- Pending device QA: manual review in current desktop and mobile browsers before any requested release.

## Primary outcomes

- Communicate role, seniority, location, and strongest experience within the first screen.
- Turn selected projects into substantial case studies with context, responsibility, technical decisions, and outcomes.
- Make the site easy for recruiters to scan and useful for engineering managers who want deeper evidence.
- Preserve the strongest current features: centralized content, résumé download, theme support, and responsive foundations.
- Reduce decorative effects that compete with the work or add continuous rendering cost.
- Meet accessibility, SEO, responsive-design, and performance expectations for a modern 2026 portfolio.

## Target audience

1. Engineering managers hiring senior frontend or full-stack engineers.
2. Technical recruiters in the UAE and international remote markets.
3. Potential consulting clients and professional contacts.
4. Developers reviewing technical decisions and implementation quality.

## Proposed website structure

- `/` — Home, selected work, experience, capabilities, about, and contact.
- `/work/[slug]` — Reusable project case-study pages.
- `/lab` — Job Fit Analyzer and portfolio assistant experiments.
- `/resume` or PDF download — Optional web résumé plus existing downloadable PDF.

---

## Phase 0 — Confirm positioning and content permissions

### Goal

Lock the message, target roles, and information that can be shared publicly before designing screens.

### Work

- Choose the primary positioning:
  - Recommended: **Senior Software Engineer / Full Stack Engineer**.
  - Supporting specialization: product frontend, enterprise platforms, and applied AI.
- Define the preferred employment market: Dubai/UAE, international remote, or both.
- Confirm the current availability statement and the date it was last updated.
- Verify exact names and statuses of AWS and Davra certifications.
- Review every government and financial project for confidentiality restrictions.
- Identify which screenshots, brand names, metrics, workflows, and architecture details can be published.
- Decide whether public phone numbers should remain on the site.

### Deliverables

- Approved one-sentence positioning statement.
- Confirmed target roles and employment locations.
- Public/private content matrix for all projects.
- Verified professional facts and credentials.

### Definition of done

- No unverified claim or restricted client information is needed by later phases.
- The primary audience and desired hiring action are unambiguous.

---

## Phase 1 — Build the content and evidence inventory

### Goal

Convert résumé-style descriptions into evidence that supports senior-level engineering claims.

### Work

- Select three flagship case studies:
  1. Oyoon — Dubai Police.
  2. SmartKhateeb — AWQAF.
  3. ADNOC NOC Portal or ADCB MPOS, based on available proof.
- For each case study, document:
  - Business or operational problem.
  - Users and scale.
  - Neelesh's exact role and ownership.
  - Constraints such as RBAC, SSO, auditability, RTL, accessibility, security, or integrations.
  - Important engineering decisions and tradeoffs.
  - Measurable or safely stated outcomes.
  - Technology stack.
  - Approved visuals or a requirement for sanitized mockups.
- Rewrite the remaining projects as compact supporting-work entries.
- Replace skill percentages with capability statements tied to project evidence.
- Rewrite the hero around the strongest differentiator.

### Recommended hero copy

**Headline:** Senior Software Engineer building secure digital platforms for the UAE.

**Supporting text:** 8+ years delivering government, financial, and enterprise products with Next.js, TypeScript, PHP, and AWS.

**Primary actions:** View selected work, Download résumé, Contact me.

### Deliverables

- Final home-page content outline.
- Three complete case-study content documents.
- Supporting project summaries.
- Evidence-based capability list.
- Approved hero, about, and contact copy.

### Definition of done

- Every major capability has supporting project evidence.
- Each flagship project explains more than its technology stack.
- Confidential projects can be presented without inventing metrics or exposing protected material.

---

## Phase 2 — Establish the visual design system

### Goal

Create a recognizable visual language that feels technical, mature, and current without overwhelming the content.

### Direction

- Use a technical-editorial layout with large typography and structured project storytelling.
- Use neutral surfaces with one controlled accent color.
- Prefer composition, typography, diagrams, and project imagery over glass effects.
- Preserve dark and light themes, treating both as first-class designs.

### Proposed tokens

- Light background: warm off-white.
- Dark background: graphite near-black.
- Primary text: ink black / soft white.
- Accent: electric cobalt or lime; select one during visual exploration.
- Interface font: Geist Sans or an equivalent locally served sans serif.
- Technical labels: Geist Mono or an equivalent locally served monospace.
- Radius: approximately 12px for interactive surfaces.
- Layout: 12-column desktop, 6-column tablet, and 4-column mobile grid.
- Motion duration: 150–400ms for state changes and reveals.

### Component foundations

- Typography scale.
- Container and page grid.
- Header and accessible mobile navigation.
- Buttons and text links.
- Project cards and project metadata.
- Capability tags.
- Case-study content blocks.
- Architecture and metric panels.
- Contact panel and footer.
- Light/dark theme controls.

### Deliverables

- Design tokens and component states.
- Desktop and mobile home-page wireframes.
- Desktop and mobile case-study wireframes.
- High-fidelity hero, project preview, and case-study prototype.

### Definition of done

- The first viewport communicates name, role, seniority, location, and primary action.
- Project work is visually stronger than decorative effects.
- Components have hover, focus, active, disabled, dark, light, and responsive states where applicable.

---

## Phase 3 — Prepare the application architecture

### Goal

Create a maintainable foundation for the redesign before building all sections.

### Work

- Keep Next.js App Router and server-rendered content.
- Introduce typed profile, project, experience, capability, and case-study models.
- Split content into focused data modules while retaining a single source of truth.
- Add the `/work/[slug]` and `/lab` routes.
- Establish design tokens in a small global layer.
- Use component-scoped styles or an agreed utility approach for new components.
- Avoid extending the legacy animation-heavy global stylesheet.
- Create reusable layout, project, case-study, navigation, and contact components.
- Keep client components limited to theme, navigation, and purposeful interactions.
- Plan framework dependency upgrades as a separate change from the visual conversion when practical.

### Remove or replace

- Remove the persistent Three.js starfield.
- Replace the hero orb with project imagery, an architecture visual, or a lightweight technical motif.
- Remove the pointer spotlight.
- Remove global DOM queries and tilt effects applied to every card.
- Replace experience dialogs with readable inline content or project links.
- Replace the disappearing mobile navigation with an accessible menu.

### Deliverables

- New route structure.
- Typed content schema.
- New design-token layer.
- Reusable page and section shells.
- Responsive header and footer.

### Definition of done

- The new shell works without the legacy visual effects.
- Keyboard users can operate the full navigation.
- Content can be changed without editing presentation components.

---

## Phase 4 — Build the redesigned home page

### Goal

Deliver the complete recruiter-friendly overview experience.

### Section order

1. Header with Work, Experience, About, Lab, résumé, theme, and contact actions.
2. Hero with positioning, proof summary, and primary actions.
3. Credibility strip: e& enterprise, Dubai, 8+ years, regulated platforms, RTL/i18n.
4. Three selected case studies.
5. Compact professional experience.
6. Evidence-based capabilities.
7. Short personal/about section.
8. Strong contact panel.
9. Minimal footer.

### Interaction rules

- Use subtle entrance motion only where it improves hierarchy.
- Do not hide essential content until JavaScript runs.
- Do not autoplay continuous decorative animations.
- Respect `prefers-reduced-motion` in CSS and JavaScript.
- Keep all primary actions usable with keyboard and touch.

### Deliverables

- Complete responsive home page.
- Designed empty/fallback states for unavailable project imagery.
- Working résumé, email, LinkedIn, and GitHub actions.

### Definition of done

- A visitor can understand the profile and reach a flagship case study in a few seconds.
- Mobile layout has no clipped text, hidden navigation, or inaccessible controls.
- The site remains understandable with animation disabled.

---

## Phase 5 — Build project case studies

### Goal

Show engineering judgment and ownership, not only project names and technology lists.

### Standard case-study structure

1. Project title, organization/sector, role, period, and stack.
2. Concise outcome statement.
3. Problem and operating context.
4. Responsibilities and ownership.
5. Constraints and requirements.
6. System or frontend architecture.
7. Key engineering decisions and tradeoffs.
8. Selected interface or workflow visuals.
9. Outcome, scale, and lessons.
10. Next/previous project navigation and contact action.

### Visual policy

- Use approved screenshots when available.
- Create sanitized mockups when real interfaces are confidential.
- Label conceptual reconstructions clearly.
- Do not use client logos or claims without permission.
- Provide useful alternative text for every meaningful visual.

### Deliverables

- Reusable case-study template.
- Three flagship case-study pages.
- Responsive screenshots or technical diagrams.
- Project-specific metadata and social images.

### Definition of done

- Each case study distinguishes personal contribution from team output.
- Each page demonstrates at least one meaningful technical decision.
- Claims are defensible in an interview.

---

## Phase 6 — Reposition experimental features

### Goal

Keep useful interactive experiments without allowing them to distract from professional evidence.

### Job Fit Analyzer

- Move it to `/lab`.
- Describe it accurately as local keyword matching unless its implementation changes.
- Explain input handling, matching logic, limitations, and privacy behavior.
- Present it as a code/product experiment with a link to implementation details where appropriate.

### Portfolio assistant

Choose one of these paths:

1. **Recommended initial path:** rename it to “Portfolio Guide” and clearly describe it as a guided local knowledge interface.
2. Implement a real grounded AI assistant using approved portfolio content, citations, input safeguards, usage limits, and a fallback when the model is unavailable.
3. Remove it if it does not provide stronger evidence than the case studies.

### Deliverables

- `/lab` landing page.
- Accurate descriptions and limitations for each experiment.
- Clear separation between production experience and personal experiments.

### Definition of done

- No feature is represented as AI when it is deterministic keyword matching.
- Experimental features do not block or interrupt the primary portfolio journey.

---

## Phase 7 — SEO, accessibility, performance, and trust

### Goal

Make the redesigned site production-ready and demonstrate professional engineering quality.

### SEO and sharing

- Add canonical URLs, complete title templates, and descriptions.
- Add favicon and application icons.
- Add Open Graph and social-card images for home and project routes.
- Add sitemap and robots metadata routes.
- Add appropriate Person structured data and professional profile links.
- Ensure headings and internal links represent a clear document structure.

### Accessibility

- Meet WCAG 2.2 AA expectations for relevant flows.
- Verify text and interactive-control contrast in both themes.
- Provide visible focus states and logical tab order.
- Add a skip link and semantic landmarks.
- Verify accessible names, expanded states, dialog behavior, and form feedback.
- Respect reduced-motion preferences in CSS and JavaScript.
- Test with keyboard navigation and at least one screen reader workflow.

### Performance

- Remove continuous decorative WebGL rendering from the core experience.
- Optimize and size project imagery with `next/image`.
- Serve fonts locally and limit weights.
- Keep below-the-fold media lazy-loaded.
- Minimize client-side JavaScript and avoid unnecessary dependencies.
- Use production builds and Lighthouse alongside real-browser checks.

### Targets

- Lighthouse categories at 90 or higher on representative mobile pages.
- Largest Contentful Paint at or below 2.5 seconds under the agreed test profile.
- Interaction to Next Paint at or below 200ms.
- Cumulative Layout Shift at or below 0.1.
- No serious automated accessibility violations.

### Definition of done

- Home and all flagship case studies pass the agreed quality checks.
- Metadata previews correctly on major social platforms.
- Primary navigation and contact journeys work without a mouse.

---

## Phase 8 — Final QA and launch

### Goal

Release the redesign safely with validated content, behavior, and analytics.

### Test matrix

- Viewports: 320px, 375px, 768px, 1024px, 1440px, and a wide desktop.
- Browsers: current Chrome, Safari, Firefox, and Edge.
- Themes: dark, light, and system preference.
- Preferences: standard and reduced motion.
- Input: mouse, keyboard, and touch.
- Routes: home, each case study, lab, résumé, and unknown route.

### Functional checks

- Header and mobile menu.
- Theme persistence without disruptive flashing.
- All project navigation.
- Résumé view/download.
- Email, LinkedIn, GitHub, and website links.
- Lab tools and their validation states.
- 404 behavior.
- Print behavior if the printable résumé remains supported.

### Launch tasks

- Review all copy and project permissions one final time.
- Run production build and automated checks.
- Capture a pre-launch performance baseline.
- Deploy to a preview environment.
- Complete desktop and mobile visual review.
- Deploy to production.
- Verify analytics, search indexing, metadata, and Core Web Vitals after launch.

### Definition of done

- No critical visual, functional, accessibility, or content issues remain.
- Production links and metadata have been verified.
- The previous production version can be restored if a release issue appears.

---

## Recommended implementation order

1. Phase 0: positioning and permissions.
2. Phase 1: content and evidence.
3. Phase 2: design system and prototype.
4. Phase 3: architecture and shared components.
5. Phase 4: home page.
6. Phase 5: case studies.
7. Phase 6: lab experiments.
8. Phase 7: quality work.
9. Phase 8: launch.

Phases 0 and 1 must come first because the design depends on available project evidence. Phase 6 may be postponed until after the core portfolio launches.

## Suggested release strategy

### Release 1 — Core portfolio

- Redesigned home page.
- Three case studies.
- Experience, capabilities, about, and contact.
- Responsive navigation, themes, résumé, SEO, and accessibility.

### Release 2 — Engineering lab

- Reworked Job Fit Analyzer.
- Portfolio Guide or a genuinely grounded AI assistant.
- Technical write-ups for experiments.

### Release 3 — Ongoing credibility

- Engineering articles or short technical notes.
- Additional case studies when publishable.
- Performance and accessibility reporting.
- Updated availability, résumé, and professional milestones.

## Research references

- [Webflow: 8 web design trends to watch in 2026](https://webflow.com/blog/web-design-trends-2026)
- [Webflow: Portfolio examples and best practices](https://webflow.com/blog/design-portfolio-examples)
- [Creative Bloq: Portfolio examples for 2026](https://www.creativebloq.com/portfolios/examples-712368)
- [W3C: Animation from interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
- [Next.js: Metadata and Open Graph images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Next.js: Production checklist](https://nextjs.org/docs/app/guides/production-checklist)

## Remaining content decisions

- Approved project screenshots and confidentiality boundaries.
- Verified outcome metrics that can be published.
- Exact certification names and current status.
- Final live model selection when API credentials are configured.
