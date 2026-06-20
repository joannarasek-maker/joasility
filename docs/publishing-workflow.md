# Joasility Publishing Workflow

This document describes the safe publishing process for adding new Joasility entries after the data structure migration.

## Core rule

A new entry should require only:

1. Creating one HTML detail page.
2. Adding one object to the correct `data/*.js` file.
3. Committing the change.
4. Pushing the change.

Do not edit `script.js` for normal publishing.

## Data files

Use the correct file for the section:

- Movement: `data/movement.js`
- Nutrition: `data/nutrition.js`
- Nature & Wildlife: `data/nature.js`
- Reflections: `data/reflections.js`
- Journeys: `data/journeys.js`

## Before making bigger changes

For larger structural or design changes, use this safety prompt first:

```text
Start from a fresh clean checkout of joannarasek-maker/joasility.
Do not use any previous workspace.
Before making changes, verify you can commit and push to GitHub.
If commit or push is not possible, stop immediately and say so.
```

For major changes, create a separate working branch before editing `main`.

## Adding a new Movement entry

1. Create a new HTML page, for example:

```text
my-new-movement-video.html
```

2. Add one new object at the top of `data/movement.js`:

```js
{
  title: "New Movement Title",
  description: "Short description of the movement video.",
  image: "https://img.youtube.com/vi/YOUTUBE_ID/hqdefault.jpg",
  cardUrl: "my-new-movement-video.html",
  videoUrl: "https://www.youtube.com/shorts/YOUTUBE_ID",
  videoActionUrl: "my-new-movement-video.html",
  category: "Movement",
  tags: ["Senior Fitness", "Movement", "Life in Motion"],
  dateLabel: "June 2026",
  date: "2026-06-20"
},
```

3. Commit and push.

## Adding a new Nutrition entry

1. Create a new HTML recipe or video page.
2. Add one object to `data/nutrition.js`.
3. Commit and push.

Use this general structure:

```js
{
  title: "Recipe Title",
  description: "Short recipe description.",
  image: "assets/images/example.jpg",
  pageUrl: "recipe-page.html?view=recipe",
  cardUrl: "recipe-page.html?view=recipe",
  pageActionUrl: "recipe-page.html?view=recipe",
  videoUrl: "https://www.youtube.com/shorts/YOUTUBE_ID",
  videoActionUrl: "recipe-page.html?view=video",
  imageLinksToVideo: true,
  category: "Nutrition",
  tags: ["Everyday Recipes", "Protein-rich"],
  dateLabel: "June 2026",
  date: "2026-06-20"
},
```

## Adding a new Nature & Wildlife entry

1. Create a new HTML page.
2. Add one object to `data/nature.js`.
3. Commit and push.

Use this general structure:

```js
{
  title: "Nature Entry Title",
  location: "Location",
  description: "Short nature or wildlife description.",
  image: "https://img.youtube.com/vi/YOUTUBE_ID/hqdefault.jpg",
  cardUrl: "nature-entry.html",
  videoUrl: "https://www.youtube.com/shorts/YOUTUBE_ID",
  videoActionUrl: "nature-entry.html",
  tags: ["Nature", "Wildlife"],
  dateLabel: "June 2026",
  date: "2026-06-20"
},
```

## Adding a new Reflection entry

1. Create a new HTML page.
2. Add one object to `data/reflections.js`.
3. Commit and push.

Use this general structure:

```js
{
  title: "Reflection Title",
  description: "Short reflection description.",
  image: "assets/images/example.jpg",
  pageUrl: "reflection-page.html",
  category: "Reflections",
  readingTime: "4 min read",
  tags: ["Reflection", "Life in Motion"],
  dateLabel: "June 2026",
  date: "2026-06-20"
},
```

## Adding a new Journey entry

Journey entries are organized inside `data/journeys.js` by category:

- Local Walks
- Weekend Escapes
- Adventure

Add the new object inside the correct category's `items` array.

Use this general structure:

```js
{
  title: "Journey Title",
  location: "Location",
  description: "Short journey description.",
  image: "https://img.youtube.com/vi/YOUTUBE_ID/hqdefault.jpg",
  pageUrl: "journey-page.html",
  cardUrl: "journey-page.html?view=video",
  pageActionUrl: "journey-page.html?view=journey",
  videoUrl: "https://www.youtube.com/shorts/YOUTUBE_ID",
  videoActionUrl: "journey-page.html?view=video",
  pageActionLabel: "Read the Journey",
  videoActionLabel: "Watch Video",
  cardAriaLabel: "Open Journey Title journey",
  tags: ["Journey", "Travel", "Life in Motion"],
  dateLabel: "June 2026",
  date: "2026-06-20"
},
```

## Do not edit for normal publishing

Avoid editing these files when adding normal new entries:

- `script.js`
- `script-fix.js`
- `adventure-additions.js`
- `styles.css`

Only edit them for structural, design, or special page behavior changes.

## Safety checklist before merging to main

Before merging any working branch into `main`, check:

- All expected cards are visible.
- Links open the correct detail pages.
- YouTube embeds or video links work.
- Back links return to the correct archive.
- No existing entry disappeared.
- No unrelated files were changed.

## Recovery rule

If a change is uncertain, do not merge it into `main`.

Keep `main` stable and use a working branch until the change has been checked.
