---
title: "Features"
description: "Canvas family trees, interactive charts, maps, evidence tracking, fictional universes, and 17+ report types. Charted Roots feature overview."
showTableOfContents: true
---

Charted Roots is a genealogy and worldbuilding plugin for Obsidian. Your data lives in plain-text markdown notes; the plugin adds family-tree visualization, evidence tracking, geographic mapping, reports, and worldbuilding tools on top of what Obsidian already does well.

{{< youtube id="GnOHrG_nVvY" >}}

*~14-minute chaptered walkthrough. Jump to a chapter using the YouTube chapter markers, or use the links below.*

- [Importing Data (0:10)](https://www.youtube.com/watch?v=GnOHrG_nVvY&t=10s)
- [Person Notes & Dynamic Blocks (1:11)](https://www.youtube.com/watch?v=GnOHrG_nVvY&t=71s)
- [Interactive Family Chart (1:45)](https://www.youtube.com/watch?v=GnOHrG_nVvY&t=105s)
- [Maps & Journey Mode (3:35)](https://www.youtube.com/watch?v=GnOHrG_nVvY&t=215s)
- [Calendar View (4:49)](https://www.youtube.com/watch?v=GnOHrG_nVvY&t=289s)
- [Creating a Family (5:55)](https://www.youtube.com/watch?v=GnOHrG_nVvY&t=355s)
- [Evidence & Sources (6:47)](https://www.youtube.com/watch?v=GnOHrG_nVvY&t=407s)
- [Reports & Book Builder (7:43)](https://www.youtube.com/watch?v=GnOHrG_nVvY&t=463s)
- [Statistics Dashboard (8:43)](https://www.youtube.com/watch?v=GnOHrG_nVvY&t=523s)
- [Place Lookup (9:20)](https://www.youtube.com/watch?v=GnOHrG_nVvY&t=560s)
- [Bases Integration (10:06)](https://www.youtube.com/watch?v=GnOHrG_nVvY&t=606s)
- [World-Building (10:52)](https://www.youtube.com/watch?v=GnOHrG_nVvY&t=652s)

---

## Canvas tree generation

Generate family tree visualizations directly on Obsidian Canvas using layout algorithms tuned for genealogy data.

<figure>
  <img src="/img/cr-canvas-tree-multi-generational.png" alt="Royal European lineage rendered as a multi-generational Charted Roots canvas tree showing several centuries of descent.">
</figure>

- Automated genealogical layout with no overlapping nodes
- Multiple tree types: ancestor, descendant, and full family trees with configurable generation limits
- Layout algorithms: Standard, Compact (50% tighter spacing), Timeline (chronological), Hourglass (focused lineage)
- Interactive preview with pan, zoom, and exploration before generation
- Export to PNG, SVG, and PDF
- Multi-family detection for disconnected family groups
- Regenerate canvases with updated data via right-click context menu

<video autoplay muted loop playsinline preload="metadata" src="/img/cr-canvas-tree-generation.webm" aria-label="Generating a family tree on Obsidian Canvas: select root, click Generate, layout animates"></video>

<div class="cr-grid-2">
  <figure>
    <img src="/img/cr-canvas-tree-standard.png" alt="Canvas tree in Standard layout — Anderson family rendered with default spacing.">
    <figcaption>Standard</figcaption>
  </figure>
  <figure>
    <img src="/img/cr-canvas-tree-compact.png" alt="Canvas tree in Compact layout — same Anderson family with 50% tighter spacing.">
    <figcaption>Compact</figcaption>
  </figure>
  <figure>
    <img src="/img/cr-canvas-tree-timeline.png" alt="Canvas tree in Timeline layout — Anderson family arranged chronologically.">
    <figcaption>Timeline</figcaption>
  </figure>
  <figure>
    <img src="/img/cr-canvas-tree-hourglass.png" alt="Canvas tree in Hourglass layout — Anderson family centered on a focal generation.">
    <figcaption>Hourglass</figcaption>
  </figure>
</div>

[Read more: Visual Trees →](https://github.com/banisterious/obsidian-charted-roots/wiki/Visual-Trees)

---

## Workspace views

Dockable views that live alongside your notes in the Obsidian [workspace](https://obsidian.md/help/workspace). Each one is a tab you can pin, split, or move to a sidebar like any other Obsidian view.

### Interactive Family Chart View

A persistent visualization panel for real-time exploration and editing.

<figure>
  <img src="/img/cr-family-chart-live.png" alt="Charted Roots Interactive Family Chart View showing the Anderson family with William Anderson selected. Person Details panel open on the right showing first name, last name, alt name, dates, places, sex, collection, spouses, and children.">
</figure>

- Click a card to open a Person Details panel with inline field editing
- Bidirectional sync: chart edits update frontmatter, file changes refresh the chart
- Card styles: rectangle with avatars, circle, compact
- Multiple color schemes: gender, generation, collection, monochrome
- Split name mode (given / surname on separate lines)
- Kinship labels showing genealogical relationships relative to the rooted person
- **Highlight Groups**: spotlight patterns on the tree by dimming cards that don't match a filter and glowing cards that do (e.g., bloodline vs. married-in vs. foster)
- **Custom Relationships Overlay**: render non-family connections (mentor, rival, sire, liege) as styled overlay lines on top of the biological tree, with per-type toggles
- High-quality export to PNG, SVG, PDF, or ODT with customizable filenames

<div class="cr-grid-2">
  <figure>
    <img src="/img/cr-family-chart-gender.png" alt="Family Chart view of the Anderson family with default gender coloring — teal cards for male persons, pink for female.">
    <figcaption>Default gender coloring</figcaption>
  </figure>
  <figure>
    <img src="/img/cr-family-chart-theme-earth-tones.png" alt="Same Anderson family chart with the Earth tones theme preset applied — green cards for male, red for female, replacing the default teal and pink palette.">
    <figcaption>Earth tones theme preset</figcaption>
  </figure>
</div>

<video autoplay muted loop playsinline preload="metadata" src="/img/cr-family-chart-relationship-edit.webm" aria-label="Editing a relationship on the Family Chart View, with the chart updating in real time"></video>

<figure>
  <img src="/img/cr-family-chart-highlight-groups.png" alt="Family Chart view with two Highlight Groups active. Cards not matching either filter are dimmed; matching cards glow in their group's accent color.">
  <figcaption>Two highlight groups active</figcaption>
</figure>

<video autoplay muted loop playsinline preload="metadata" src="/img/cr-family-chart-highlight-groups.webm" aria-label="Adding highlight groups on the Family Chart View; matching cards light up in colored outlines while non-matching cards dim, revealing categories of people across the tree"></video>

[Read more: Family Chart View →](https://github.com/banisterious/obsidian-charted-roots/wiki/Family-Chart-View)

### Geographic features

Interactive mapping powered by Leaflet.js, with support for both real-world coordinates and fictional worlds.

**Interactive Map View:**

- Color-coded markers (green for birth, red for death)
- Marker clustering for dense data
- Heat maps and time-slider animation across decades
- Mini-map overview
- Layer toggles for events, places, and child maps
- Marker popups show ages and full `from – to` date ranges, with proper era handling for fictional calendars (BBY descending, BBY-to-ABY crossings)

<video autoplay muted loop playsinline preload="metadata" src="/img/cr-interactive-map-time.webm" aria-label="Scrubbing the time-slider across decades on the interactive map, with markers appearing and disappearing"></video>

**Journey Mode:**

- Isolate a single person's movements across their life as ordered waypoints
- Animated step-through playback with prev / play / next controls and variable speed (0.25× to 2.5×)
- Rich waypoint popups with event type, date, place, age at event, duration at location, and description
- Family-journey overlay with color-coded paths for parents, spouses, and children
- Inline placeholder when a person doesn't have at least 2 places with valid coordinates, naming the person and what's needed

<video autoplay muted loop playsinline preload="metadata" src="/img/cr-interactive-map-journey.webm" aria-label="Stepping through a person's life journey on the map, with waypoints animating in chronological order"></video>

**Custom Image Maps:**

- Pixel or geographic coordinate systems for fictional worlds
- 4-step map creation wizard with live preview
- Draggable place markers with automatic persistence
- Linked-map drill-down navigation with breadcrumbs (parent-child map hierarchies)
- Child map markers on parent maps, with on-map region editing (draggable rectangle that saves `parent_region_x/y/w/h` back to frontmatter)
- Journey paths build correctly for pixel-coord places, so person journeys work across image-based maps the same way they do across geographic maps

**Location Tools:**

- Geocoding lookup via Nominatim (OpenStreetMap)
- Place-based filtering for tree generation by birth, death, or marriage location
- Migration visualizations with D3 network and arc diagrams

[Read more: Geographic Features →](https://github.com/banisterious/obsidian-charted-roots/wiki/Geographic-Features)

### Calendar View

A monthly calendar workspace view showing significant dates across the vault.

- Color-coded event dots per day (blue for birth, red for death, yellow for marriage)
- Text labels toggle showing person names inside day cells
- Month dropdown and year input for instant navigation
- Day click detail panel with events, person names, type, year, years-ago, and place
- Imprecise dates section for entries with a month but no day
- Filters by event type and by living / deceased status
- Right-click a day to create an event pre-filled with that date
- Keyboard navigation: arrow keys for month, T for today
- State persistence across reloads (month, year, filters, label toggle)
- Entry points from the command palette, Control Center dashboard tile, Events tab, and person / event context menus

[Read more: Calendar View →](https://github.com/banisterious/obsidian-charted-roots/wiki/Calendar-View)

### Entity Profile View

A dockable profile panel that auto-syncs to the active note and displays related data for any entity type (Person, Place, Event, Source, Organization) in collapsible sections.

- Auto-syncs with a 150ms debounce as you switch notes
- Identity header with entity type badge, avatar, key metadata, and pin toggle
- Collapsible sections per entity type: Relationships, Events, Sources, Media, Data Quality for persons; Events at location, Sources, Media, Map preview for places; Participants, Sources, Media for events; Referenced Facts, Media for sources; Members, Events, Sources, Media for organizations
- Inline editing on all identity-header fields (text, number, select)
- Pin / unpin to freeze on a specific entity; multiple instances for side-by-side comparison
- Breadcrumb navigation for in-place entity traversal
- State persistence across sessions (pinned entity, section states, breadcrumbs)
- Lazy rendering and keyboard navigation on section headers (WAI-ARIA accordion)
- Embedded Leaflet map preview for place profiles
- Children block labels stepchildren and adopted children with their specific category, falling back to "Child" only when neither marker applies

[Read more: Entity Profile View →](https://github.com/banisterious/obsidian-charted-roots/wiki/Entity-Profile-View)

### Statistics Dashboard

A dockable view surfacing vault-wide analytics. See [Statistics and reports](#statistics-and-reports) below for the full list of what the dashboard shows, how drill-downs work, and how the numbers feed into reports.

[Read more: Statistics and Reports →](https://github.com/banisterious/obsidian-charted-roots/wiki/Statistics-And-Reports)

---

## Dynamic content blocks

Live-rendered blocks that show computed data inside entity notes when viewed in reading mode.

- **Timeline block**: chronologically ordered events for a person or family, with configurable layout modes (chronological, grouped by personal / family / context, personal-first) and customizable formatting. Spouse death events appear on surviving spouses' timelines by default, and stepchildren's births stay on biological-parent timelines without bleeding into stepparent timelines.
- **Relationships block**: family connections as clickable links with optional family-events inclusion
- **Media block**: photos and PDFs attached to the note, with first-page PDF thumbnail previews and image-crop regions for face thumbnails
- **Sources block**: sources referenced by the entity, grouped with citation metadata and quality badges
- **Transfers block**: transfer events (migration, relocation, emigration) with date and place
- **Members block**: organization membership with roles and date ranges
- **Universe-entity blocks**: tables of people, places, events, and organizations scoped to a universe, with sorting and limits
- **Universe-map thumbnails**: clickable thumbnail grid for custom maps in a universe
- **Research-specific blocks**: research timeline, negative findings, extractions

All blocks auto-refresh when vault data changes.

[Read more: Dynamic Note Content →](https://github.com/banisterious/obsidian-charted-roots/wiki/Dynamic-Note-Content)

---

## Data entry and management

Tools for creating, organizing, and maintaining the data in your vault.

### Family Creation Wizard

- 5-step workflow for creating interconnected family groups (parents, children, marriage) in one pass
- Automatic bidirectional linking across all members

### Staging Workflow

- Staging Manager for batch-promoting imported or clipped notes
- Batch cards with file previews and per-entity actions
- Duplicate detection before promotion

### Bidirectional Sync

- Automatic reciprocal relationship maintenance (add A → B, B → A written on save)
- Dual storage: wikilinks for readability, `cr_id` references for tracking that survives note renames
- Person-delete cleanup: when a person note is removed, their cr_id is automatically removed from referencing notes' `*_id` arrays (parents, spouses, children, step-, adoptive-, and indexed-spouse slots, plus user-aliased equivalents)

### Data Quality Tools

- Quality scores across 15+ issue types
- Smart duplicate detection using fuzzy name matching and date proximity
- Merge wizard with field-level conflict resolution and automatic relationship reconciliation
- Batch normalization for dates and other format issues
- 14-step post-import cleanup wizard covering dates, genders, relationships, places, sources, and property migrations

<video autoplay muted loop playsinline preload="metadata" src="/img/cr-merge-wizard-conflict-res.webm" aria-label="Resolving field conflicts in the duplicate-merge wizard"></video>

### Schema Validation

- User-defined schemas with required properties
- Type validation and custom rules
- Targeted schema validation: run validation against only the notes matching a specific schema, via right-click context menu

### Collections

- User-defined groupings across persons and places
- Membership badges rendered contextually (e.g., "5 people, 3 places" for mixed collections)
- Visible across Edit Person dropdowns, the Create Place modal, and the Control Center Collections tab
- Collections can be defined from either entity side and surface consistently

### Property and Value Aliases

- Property aliases map custom property names to canonical Charted Roots properties (e.g., `born` vs. `birth` vs. `birthDate`)
- Value aliases map custom values to canonical Charted Roots values (e.g., "male" / "m" / "M" all normalize)

[Read more: Data Management →](https://github.com/banisterious/obsidian-charted-roots/wiki/Data-Management)

---

## Relationships and lineage

Tools for computing, visualizing, and customizing how people connect.

### Relationship Calculator

- Find connections between any two people using proper genealogical terminology (e.g., "2nd cousin once removed")
- Multiple-relationship mode for people who are related through more than one path
- Relationship history with timestamps and one-click undo

### Custom Relationships

- 25 built-in non-family relationship types across legal, religious, professional, social, feudal, and DNA categories (godparent, guardian, mentor, apprentice, ally, rival, witness, etc.) — plus full support for defining your own (sire, nemesis, sworn rival, or anything else your story needs)
- Symmetric types (`neighbor`, `ally`, `companion`) auto-propagate to both people; asymmetric pairs (`mentor` → `disciple`, `godparent` → `godchild`) maintain a clear directionality
- Colored canvas edges and family-chart overlay rendering per type
- Overlay arcs paint on top of family links by default; layering flips when stacks reach 3+ to keep dense areas readable

### Step and Adoptive Parents

- Dedicated fields with distinct line styles on canvas trees (dotted for adoptive, dashed for step)
- Adoptive siblings render in the relationships dynamic block
- Step-parent relationships persist round-trip through the Edit Person modal

### Lineage Tracking

- Patrilineal, matrilineal, or all-descendants lineage assignment
- Bulk assign / clear via command palette

### Reference Numbering

- Four numbering systems: Ahnentafel, d'Aboville, Henry, and Generation
- Applied in reports and optionally as frontmatter properties

### Inheritance and Succession

- `inherited_from` and `successor` properties for tracking title, estate, and office succession across generations

[Read more: Relationship Tools →](https://github.com/banisterious/obsidian-charted-roots/wiki/Relationship-Tools)

---

## Evidence and sources

Structured tools for Genealogical Proof Standard research and evidence-based claims. Sources are first-class notes with their own entity type, classification, hierarchy, and citation metadata.

### Source Management

- Source notes as first-class entities with structured genealogical metadata
- Fact-level source attribution via `sourced_*` properties on person / place / event notes
- **Mills-aligned classification** (from *Evidence Explained*) with three optional axes:
  - Source type: original, derivative, authored narrative
  - Information type: primary, secondary, undetermined
  - Evidence type: direct, indirect, negative

### Source Hierarchies

- `source_parent` and `source_parent_id` properties for modeling multi-document record groups
- Examples: probate packets with multiple documents, census pages in a schedule, multi-volume works
- Profile view sections for parent source, child documents, related documents, and a collapsible source tree
- Filter the Sources tab by "has parent," "no parent," or children of a specific source

### Citations

- Citation as a first-class entity with page references (`citation_page`) and quality assessments (`citation_quality`)
- Full GEDCOM roundtrip (PAGE / QUAY sub-tags)
- Bidirectional sync between citation notes and `sourced_*` fields on entities
- Citation generator supporting Chicago, *Evidence Explained*, MLA, and Turabian formats
- Citation notes section in Entity Profile View grouped by source with fact labels, page references, and color-coded quality badges

### Research workflow

GPS-aligned research entity types for multi-phase research cases:

- `research_project`: hub for a research case
- `research_report`: living document analyzing a specific research question
- `individual_research_note` (IRN): synthesis between reports and person notes
- `research_journal`: daily or session tracking across projects
- `research_log_entry`: individual log entries as queryable notes

Supporting tools:

- Project statuses: open, in-progress, on-hold, completed
- Report statuses: draft, review, final, published
- Proof summary notes for documenting reasoning chains
- Research level property (0–6 scale based on GPS methodology)
- Research gaps report with priority ranking
- Source conflict detection and tracking
- Canvas research indicators showing source counts, coverage percentage, and conflict warnings

### Web Clipper integration

Purpose-built Obsidian Web Clipper templates for the genealogical web. Clipped pages land as source notes with citation metadata already populated.

- **Find a Grave Person**: CSS and AI-assisted variants for memorial pages
- **FamilySearch Source**: CSS and AI-assisted variants for indexed records and browse-only collections
- **Wikipedia Biography**: AI-assisted variant for structured biographical extraction
- **Wikidata Place**: AI-assisted variant for place entities with coordinates
- Works with the standard Obsidian Web Clipper plugin (no custom browser extension)

<video autoplay muted loop playsinline preload="metadata" src="/img/cr-web-clipper-to-bio.webm" aria-label="Clipping a Wikipedia biography page with the Web Clipper extension; the resulting source note appears in the Obsidian Staging folder"></video>

### Person Roles in Sources

- `person_roles` on source notes for first-class informant / enumerator / clerk / author modeling
- Reverse-linked to person notes for "Sources where this person is listed as an informant" queries

### Media and Citations

- Source media gallery with search, filtering, and lightbox viewer
- Historical context overlay and age annotations on timelines
- Customizable timeline display templates with `{year}`, `{title}`, `{place}`, `{age}` placeholders

[Read more: Evidence and Sources →](https://github.com/banisterious/obsidian-charted-roots/wiki/Evidence-And-Sources)

---

## DNA tracking

Opt-in support for genetic genealogists, off by default. When enabled, person notes can be flagged as a DNA Match and tracked with genetic-specific metadata.

- Master toggle in Settings → Advanced → DNA tracking
- DNA Match person type selectable during creation
- Tracked properties: shared cM, testing company, kit ID, match type, endogamy flag, notes
- Match types: BKM (Best Known Match), BMM (Best Mystery Match), confirmed, unconfirmed
- `dna_match` relationship type with automatic bidirectional linking (A → B creates B → A)
- DNA badge in the person picker showing a flask icon and shared cM value

Scope is intentionally narrow: track key matches rather than full chromosome analysis. Specialized tools like DNAPainter or Genetic Affairs handle chromosome-level work better, and Charted Roots is designed to live alongside them.

---

## World Building

Tools designed for worldbuilders, novelists, and RPG creators who document fictional universes alongside (or instead of) real genealogy.

### Universe Notes

- First-class entity type for organizing a fictional world
- Metadata, linked calendars, maps, and validation schemas
- Universe wizard step 2 offers a three-way calendar picker (None, Built-in, Custom), with slug-match preselection so a "Star Wars" universe auto-selects Galactic Standard, "Middle-earth" auto-selects Middle-earth Calendar, and so on. The Edit Universe modal exposes the same Calendar field, and the Universes tab shows the linked default calendar as a sub-line under entity counts.
- Auto-generated dynamic content blocks for every entity scoped to the universe:
  - `charted-roots-universe-people`: tables of characters
  - `charted-roots-universe-places`: tables of locations with place types
  - `charted-roots-universe-events`: tables of events with type badges
  - `charted-roots-universe-organizations`: tables of guilds, houses, factions
  - `charted-roots-universe-maps`: clickable thumbnail grid for custom maps

### Fictional Date Systems

- Custom calendars and era systems defined in settings
- Built-in support for Middle-earth (TA / SA), Westeros, and Star Wars (BBY / ABY)
- Calendarium integration for calendars defined in the Calendarium plugin
- Date parsing and display respects the active universe's calendar

### Custom Image Maps

See [Geographic features](#geographic-features) above. Maps support pixel-coordinate systems ideal for fictional worlds, linked-map drill-down for multi-scale worldbuilding, and child-map region editing.

### Organizations

Track non-genealogical hierarchies like noble houses, guilds, corporations, military units, and religious orders. Works for fictional settings and for real-world genealogy (fraternal orders, employers, religious communities).

- Organization notes as a first-class entity type
- Member management with roles and date ranges
- Structured role lists: define valid roles and their display order per organization
- Role picker autocomplete in membership modals
- Members dynamic block on organization notes with three-level role ordering fallback
- Organization membership statistics in the Statistics Dashboard

[Read more: Universe Notes →](https://github.com/banisterious/obsidian-charted-roots/wiki/Universe-Notes)

---

## Import and export

Full multi-format support for genealogical data exchange.

### GEDCOM 5.5.1

Comprehensive round-trip import and export with UUID preservation.

- Name components: NPFX (prefix), NSFX (suffix), SPFX (surname prefix), NICK (nickname)
- Person attributes: TITL (title), RELI (religion), NATI (nationality), DSCR (description), IDNO (ID number), PROP (property), CAST (caste), NCHI (number of children), NMR (number of marriages), SSN
- Burial: date and place imported to person frontmatter
- Death cause: imported to `death_cause`
- Age at event: AGE sub-tag stored on event notes and re-exported
- Date ranges: both BET / AND and FROM / TO parsed and exported
- Family events (MARR, DIV, MARB, MARC, MARL, MARS, DIVF) exported on FAM records
- Citation metadata: PAGE and QUAY sub-tags preserve citation details across roundtrip
- PEDI tag parsing for step and adoptive parents
- Validation and privacy protection on export

### GEDCOM X

- JSON format with FamilySearch compatibility
- Lineage type parsing

### Gramps XML

- Import and export for Gramps genealogy software
- `.gpkg` package imports with bundled media extraction

### CSV and TSV

- Spreadsheet workflows with auto-detected column mapping

### Excalidraw Export

- Export canvases for manual annotation or hand-drawn styling

### Privacy

- Privacy-aware exports with optional anonymization of living persons
- Full entity export for people, events, sources, places, and custom relationships

[Read more: Import / Export →](https://github.com/banisterious/obsidian-charted-roots/wiki/Import-Export)

---

## Statistics and reports

Analytics, compiled reports, and the book builder for sharing research.

### Statistics Dashboard

The dashboard (a dockable workspace view) surfaces vault-wide metrics and analytics.

- Entity counts and completeness metrics
- Gender distribution and date ranges
- Top Lists: surnames, locations, occupations, sources (each with drill-down)
- Longevity analysis, family size patterns, marriage patterns, migration flows, timeline density
- Citation statistics: coverage percentage, quality distribution, most cited sources
- Research statistics: entity counts and status breakdowns across projects, reports, IRNs, journals, and log entries
- Organization membership statistics

### Data Quality Analysis

- Severity-coded alerts across issue types
- Drill-down lists for issue resolution

### Report Types (17+)

Export as PDF, ODT, or Markdown:

- Pedigree charts
- Descendant charts
- Hourglass charts
- Fan charts
- Family group sheets (with marriage data)
- Individual summaries
- Ahnentafel reports
- Gaps reports
- Register reports
- Source summaries (with citation page columns)
- Sources by role
- Timeline reports
- Place summaries
- Media inventories
- Universe overviews
- Collection overviews
- Research reports

### Book Builder

A book builder that compiles multiple reports, visual trees, and user-written vault notes into a single sequenced document.

- Chapter types: generated reports, visual trees, vault notes, section dividers
- Preset templates: Family history book, Research compilation, Blank
- 4-step wizard for metadata, chapter selection with drag-and-drop ordering, output configuration, and progress-tracked generation
- Saveable book definitions as `.book.json` files for re-generation as underlying data changes
- Consolidated bibliography deduplicating footnotes across chapters
- Auto-generated name index sorted by last name with alphabetical grouping
- Chapter numbering (numeric or Roman numeral)
- Output as PDF or ODT

[Read more: Statistics and Reports →](https://github.com/banisterious/obsidian-charted-roots/wiki/Statistics-And-Reports)

---

## Integration and compatibility

Designed to work with the Obsidian ecosystem and adjacent tools.

- **Obsidian Web Clipper plugin**: purpose-built templates for genealogical sources (see [Evidence and sources](#evidence-and-sources))
- **Calendarium plugin**: fictional date systems defined in Calendarium are read and usable in Charted Roots
- **Obsidian Bases**: ready-to-use Base templates for persons, places, events, sources, and universes
- **Style Settings plugin**: color customization via the standard Style Settings surface
- **Templater**: integration for template-driven note creation
- **Type customization**: full type managers for person types, event types, and organization types
- **Property aliases**: map custom property names (`born` to `birth` to `birthDate`)
- **Value aliases**: map custom property values
- **Context menu actions**: right-click operations across file explorer, canvas, and reading view
- **YAML-first data**: compatible with Dataview, Bases, and any plugin that reads Obsidian frontmatter

[Read more: Bases Integration →](https://github.com/banisterious/obsidian-charted-roots/wiki/Bases-Integration)
