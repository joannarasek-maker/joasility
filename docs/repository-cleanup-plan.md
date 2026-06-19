# Joasility repository cleanup plan

Goal: organize the Joasility repository so it can grow safely to dozens of stories, photos, and videos without changing the visible website design or breaking existing links.

## Current situation

The site works, but many active HTML, CSS, JavaScript, and image files are stored directly in the repository root. This is manageable now, but it will become difficult when the site has more posts.

The current site should keep working during cleanup. The main branch should remain deployable after every step.

## Target structure

```text
/
├─ index.html
├─ CNAME
├─ README.md
├─ styles.css
├─ script.js
├─ script-fix.js
├─ data/
│  ├─ journeys.js
│  ├─ nature.js
│  ├─ movement.js
│  ├─ nutrition.js
│  └─ reflections.js
├─ pages/
│  ├─ journeys/
│  ├─ nature/
│  ├─ movement/
│  ├─ nutrition/
│  └─ reflections/
├─ assets/
│  ├─ images/
│  │  ├─ site/
│  │  ├─ journeys/
│  │  ├─ nature/
│  │  ├─ movement/
│  │  ├─ nutrition/
│  │  └─ reflections/
│  └─ thumbnails/
└─ docs/
   └─ repository-cleanup-plan.md
```

## Safety rules

1. Do not delete existing files at the beginning.
2. Do not move many files in one step.
3. After each step, verify the live site pages still load.
4. Keep old URLs working where possible.
5. Prefer adding organized copies first, then updating references, then removing duplicates only at the end.
6. Avoid spaces, special characters, and Polish characters in future file names.

Recommended naming style:

```text
lowercase-words-with-hyphens.jpg
lowercase-words-with-hyphens.html
```

## Step-by-step plan

### Step 1 — Documentation only

Add this cleanup plan to the repository. This does not affect the live website.

### Step 2 — Identify active files

Create an inventory of files currently used by:

- `index.html`
- `script.js`
- `script-fix.js`
- category pages
- detail pages
- CSS

Mark files as:

- active
- likely active but needs confirmation
- duplicate/old candidate
- safe to ignore for now

### Step 3 — Organize future uploads first

Before moving old files, start using clean folders for all new content:

```text
assets/images/nature/cowans-ford/
assets/images/journeys/southern-france/
assets/images/movement/
assets/images/nutrition/
assets/images/reflections/
```

### Step 4 — Split data from logic

Move content data out of the main `script.js` into category data files. Keep the rendering logic stable.

Possible files:

```text
data/journeys.js
data/nature.js
data/movement.js
data/nutrition.js
data/reflections.js
```

The first version should only copy data and load it before `script.js`, without redesigning the site.

### Step 5 — Organize pages gradually

Move future pages into grouped folders, for example:

```text
pages/nature/cowans-ford-wildlife-refuge-bike-ride.html
pages/journeys/southern-france.html
```

Old root-level URLs should remain available until redirects or compatibility links are added.

### Step 6 — Clean duplicates only after verification

Only after the site has been tested and all links are updated, remove files that are confirmed unused.

## Verification checklist after each step

Check these pages manually:

- Home page: `https://www.joasility.com/`
- Local Walks: `https://www.joasility.com/local-walks.html`
- Nature & Wildlife: `https://www.joasility.com/nature-wildlife.html`
- Cowans Ford page: `https://www.joasility.com/cowans-ford-wildlife-refuge-bike-ride.html`
- Adventure: `https://www.joasility.com/adventure.html`
- Southern France page: `https://www.joasility.com/adventure.html?story=southern-france&view=journey`
- Movement: `https://www.joasility.com/movement.html`
- Nutrition: `https://www.joasility.com/nutrition.html`
- Reflections: `https://www.joasility.com/reflections.html`

## Current recommended next action

Do not move files yet. First create a file inventory and identify active files. The live site should remain unchanged until the active/duplicate status is clear.
