---
title: "Features"
description: "Comprehensive feature overview of the Charted Roots plugin for Obsidian"
showTableOfContents: true
---

Charted Roots provides a complete genealogical toolkit within Obsidian. From basic family tree visualization to advanced evidence tracking and world-building tools, every feature is designed to work seamlessly with your existing vault.

---

## Canvas Tree Generation

Generate beautiful family tree visualizations directly on Obsidian Canvas.

- **Automated genealogical layout** using specialized algorithms with no overlapping nodes
- **Multiple tree types**: Ancestor trees, descendant trees, and full family trees with configurable generation limits
- **Layout algorithms**: Standard, Compact (50% tighter spacing), Timeline (chronological), Hourglass (focused lineage)
- **Interactive preview** with pan, zoom, and exploration before generation
- **Export options**: PNG, SVG, and PDF formats
- **Multi-family detection** for disconnected family groups
- **Regenerate canvases** with updated data via right-click context menu

---

## Interactive Family Chart View

A persistent visualization panel for real-time exploration and editing.

- **Direct relationship editing** within the chart with full undo/redo support
- **Bidirectional sync**: Chart edits update frontmatter; file changes refresh the chart
- **Multiple color schemes**: Gender-based, Generation-based, Collection-based, or Monochrome
- **High-quality export** to PNG, SVG, PDF, or ODT with customizable filenames

---

## Import & Export

Full multi-format support for genealogical data exchange.

### GEDCOM 5.5.1
- Full round-trip import/export with UUID preservation
- Validation and privacy protection
- PEDI tag parsing for step/adoptive parents

### GEDCOM X
- JSON format with FamilySearch compatibility
- Lineage type parsing

### Gramps XML
- Import/export for Gramps genealogy software
- `.gpkg` package imports with bundled media extraction

### CSV/TSV
- Spreadsheet workflows with auto-detected column mapping

### Excalidraw Export
- Export canvases for manual annotation and hand-drawn styling

### Privacy Features
- Privacy-aware exports with optional anonymization of living persons
- Full entity export for people, events, sources, places, and custom relationships

---

## Geographic Features

Interactive mapping powered by Leaflet.js.

### Interactive Map View
- Color-coded markers (green for birth, red for death)
- Marker clustering for dense data
- Migration path visualization
- Heat maps and time-slider animation
- Mini-map overview

### Custom Image Maps
- Support for fictional worlds with pixel or geographic coordinate systems
- 4-step map creation wizard
- Draggable place markers with automatic persistence
- Place marker context menu for editing and deletion

### Location Tools
- Geocoding lookup via Nominatim (OpenStreetMap)
- Place-based filtering for tree generation by birth/death/marriage locations
- Migration visualizations with D3-based network and arc diagrams

---

## Data Management

Robust tools to keep your genealogical data clean and consistent.

### Bidirectional Sync
- Automatic reciprocal relationship maintenance
- Dual storage: Wikilinks (readability) + `cr_id` references (robust tracking)

### Duplicate Detection & Merging
- Smart duplicate detection using fuzzy name matching and date proximity
- Merge wizard with field-level conflict resolution
- Automatic relationship reconciliation

### Staging Workflow
- Dedicated Staging Manager with batch cards and file previews
- Duplicate detection before promotion

### Data Quality Tools
- Quality scores with 15+ issue types
- Batch normalization
- 14-step post-import cleanup wizard covering dates, genders, relationships, places, sources, and property migrations

### Family Creation Wizard
- 5-step workflow for interconnected family groups
- Automatic bidirectional linking

### Schema Validation
- User-defined schemas with required properties
- Type validation and custom rules

---

## Evidence & Source Tracking

Professional genealogical research tools following the Genealogical Proof Standard.

### Source Management
- Structured genealogical metadata
- Source quality classification: Primary, Secondary, or Derivative
- Fact-level source tracking for specific life events

### Research Tools
- Proof summary notes for documenting reasoning chains
- Research level property (0-6 scale based on GPS methodology)
- Research gaps report with priority ranking
- Source conflict detection and tracking

### Media & Citations
- Source media gallery with search, filtering, and lightbox viewer
- Citation generator supporting Chicago, Evidence Explained, MLA, and Turabian formats
- Canvas research indicators showing source counts, coverage %, and conflict warnings

---

## Organization & Analysis

Powerful tools for organizing and analyzing genealogical data.

### Collections & Groups
- Auto-detected family groups
- User-defined collections

### Reference Numbering
- Ahnentafel, d'Aboville, Henry, and Generation systems

### Lineage Tracking
- Patrilineal, matrilineal, or all descendants

### Relationship Calculator
- Find connections with proper genealogical terms (e.g., "2nd cousin once removed")
- Relationship history with timestamps and one-click undo

### Custom Relationships
- Extended relationships beyond family: godparent, guardian, mentor, apprentice
- Colored canvas edges for relationship types

### Step & Adoptive Parents
- Dedicated fields with distinct line styles on canvas trees

---

## World Building

Tools designed for fiction writers and world-builders.

### Fictional Date Systems
- Custom calendars and eras
- Built-in support for Middle-earth, Westeros, Star Wars, or custom systems
- Calendarium integration

### Universe Notes
- First-class entities for organizing fictional worlds
- Metadata, linked calendars, maps, and validation schemas

### Organization Notes
- Track non-genealogical hierarchies
- Noble houses, guilds, corporations, military units, religious orders

### Events & Timelines
- Document life events with person/family/place timelines
- Visual exports with group/faction filtering

---

## Statistics & Reports

Comprehensive analytics and report generation.

### Statistics Dashboard
- Vault statistics and entity counts
- Completeness metrics
- Gender distribution and date ranges

### Data Quality Analysis
- Severity-coded alerts
- Drill-down lists for issue resolution

### Top Lists
- Surnames, locations, occupations, sources
- Drill-down functionality

### Extended Statistics
- Longevity analysis
- Family size patterns
- Marriage patterns
- Migration flows
- Timeline density

### Report Types (17+)
Export as PDF or ODT:

- Pedigree charts
- Descendant charts
- Hourglass charts
- Fan charts
- Family group sheets
- Individual summaries
- Ahnentafel reports
- Gaps reports
- Register reports
- Source summaries
- Timeline reports
- Place summaries
- Media inventories
- Universe overviews
- Collection overviews

---

## Integration & Compatibility

Designed to work with the Obsidian ecosystem.

- **Calendarium integration** for fictional date systems
- **Type customization** with full type managers
- **Property aliases** to map custom property names
- **Value aliases** for mapping custom property values
- **Obsidian Bases integration** with ready-to-use templates
- **Style Settings plugin support** for color customization
- **Context menu actions** for right-click operations
- **YAML-first data** compatible with Dataview, Bases, and other tools
