# Joasility repository audit — stage 2

Status: initial audit only. No live website files were moved or deleted.

## What was checked

The following active files were inspected:

- `index.html`
- `script.js`
- `script-fix.js`
- `nature-wildlife.html`
- `cowans-ford-wildlife-refuge-bike-ride.html`
- visible root-level repository file list from GitHub screenshots and current repository view

## Active core files

These files are definitely active and should not be moved yet:

| File | Status | Notes |
|---|---|---|
| `index.html` | Active | Main homepage. Loads `styles.css`, `contact-compact.css`, `script.js`, and `script-fix.js`. |
| `styles.css` | Active | Main visual design. Do not change during cleanup unless specifically needed. |
| `contact-compact.css` | Active | Loaded by homepage. Keep for now. |
| `script.js` | Active | Main data and rendering logic. Contains journey, nature, movement, nutrition, reflection data and render functions. |
| `script-fix.js` | Active patch layer | Currently adds Millet Breakfast Bowl, fixes metadata separator, updates nutrition image, adds Cowans Ford to Nature archive, and restores homepage gateway cards. Keep active until data is consolidated into `script.js` or future `data/` files. |
| `CNAME` | Active | Needed for custom domain. Do not move. |
| `README.md` | Active documentation | Safe to keep in root. |

## Active homepage image dependencies

These are referenced directly by `index.html` or core JS and should be kept where they are until a controlled image migration is done:

| File | Referenced from | Status |
|---|---|---|
| `assets/images/joasility-bridge-hero-web.jpg` | `index.html`, `script.js` | Active |
| `assets/images/about-waterfall.jpg` | `index.html` | Active |
| `assets/images/mountain-island-lake-local-walks.jpg` | `script.js` | Active |
| `assets/images/weekend-escapes-valley-village.jpg` | `script.js` | Active |
| `assets/images/travel-adventures-historic-town.jpg` | `script.js` | Active |
| `assets/images/nature-wildlife-raven.jpg` | `script.js` | Active |
| `assets/images/nutrition-breakfast-upright.jpg` | `script-fix.js` | Active |
| `assets/images/IMG-20231007-WA0002.jpg` | `index.html` inline script | Active |
| `assets/images/sniadanie.png` | `index.html` inline script | Active |
| `assets/images/why-joasility-exists.jpg` | `script.js` | Active |
| `assets/images/20260611_074141.jpg` | `script-fix.js` | Active |

## Active page files found in data or current navigation

These page files are referenced by cards, archive pages, or direct navigation. Do not remove.

| Page | Status | Notes |
|---|---|---|
| `local-walks.html` | Active archive | Local Walks archive. |
| `weekend-escapes.html` | Active archive | Weekend Escapes archive. |
| `adventure.html` | Active archive/detail hybrid | Also renders Southern France detail through `adventure-additions.js`. |
| `nature-wildlife.html` | Active archive | Loads `script.js` and `script-fix.js`; needed for Cowans Ford card to appear in Nature archive. |
| `movement.html` | Active archive | Movement archive. |
| `nutrition.html` | Active archive | Nutrition archive. |
| `reflections.html` | Active archive | Reflections archive. |
| `cowans-ford-wildlife-refuge-bike-ride.html` | Active detail page | Used by Local Walks and Nature & Wildlife. |
| `wildlife-local-walk-huntersville.html` | Active detail page | Referenced from `script.js` nature/local walk data. |
| `more-than-just-a-hike-morrow-mountain.html` | Active detail page | Referenced from `script.js` nature data. |
| `morrow-mountain-state-park.html` | Active detail page | Referenced from Weekend Escapes. |
| `blatnia-beskid-slaski.html` | Active detail page | Referenced from Weekend Escapes. |
| `morning-mobility-flow.html` | Active detail page | Referenced from Movement. |
| `turkey-spaghetti.html` | Active detail page | Referenced from Nutrition. |
| `millet-breakfast-bowl.html` | Active detail page | Referenced from `script-fix.js`. |
| `why-joasility-exists.html` | Active detail page | Referenced from Reflections. |
| `passau-germany-danube-bike-trip.html` | Active detail page | Referenced from `adventure-additions.js`. |

## Active content patch files

| File | Status | Notes |
|---|---|---|
| `adventure-additions.js` | Active | Adds Passau and Southern France entries and renders Southern France detail. Keep for now. |
| `movement-additions.js` | Likely active | Needs confirmation from `movement.html`. Keep for now. |

## Files that look like possible duplicates or older versions

These are not safe to delete yet. They are only candidates for later review.

| File | Candidate reason | Action now |
|---|---|---|
| `joasility-bridge-hero.jpg` | Similar to `joasility-bridge-hero-web.jpg` and `joasility-bridge-hero-normalized.jpg`. | Keep; verify usage later. |
| `joasility-bridge-hero-normalized.jpg` | Similar hero image variant. | Keep; verify usage later. |
| `nutrition-breakfast.jpg` | Similar to nutrition breakfast variants. | Keep; verify usage later. |
| `nutrition-breakfast-card.jpg` | Similar to nutrition breakfast variants. | Keep; verify usage later. |
| `nutrition-breakfast-original.jpg` | Similar to nutrition breakfast variants. | Keep; verify usage later. |
| `millet-breakfast-bowl.html` and nutrition card data in `script-fix.js` | Active, but data should eventually move out of patch file. | Keep; consolidate later. |
| `script-fix.js` | Active but structurally a temporary patch file. | Keep now; later merge into organized data files. |

## Current structural issues

1. Root directory has too many content pages and images mixed together.
2. `script.js` contains both data and rendering logic.
3. `script-fix.js` is active and necessary, but it acts as a patch layer rather than a clean data source.
4. Some category-specific additions are in separate patch files, for example `adventure-additions.js`.
5. Some filenames include spaces, apostrophes, or Polish characters, which can cause path mistakes later.
6. Several image variants appear similar and should be reviewed before deleting anything.

## Safe recommendations for the next stage

### Do next

Create folder placeholders using README files only. This will not affect the website.

Suggested folders:

```text
data/
pages/
pages/journeys/
pages/nature/
pages/movement/
pages/nutrition/
pages/reflections/
assets/images/site/
assets/images/journeys/
assets/images/nature/
assets/images/movement/
assets/images/nutrition/
assets/images/reflections/
assets/thumbnails/
```

### Do not do yet

- Do not move existing HTML files yet.
- Do not delete duplicate-looking images yet.
- Do not split `script.js` yet.
- Do not remove `script-fix.js` yet.

## Verification status

No live files were modified during this audit stage, except this documentation file. The website should be unaffected.
