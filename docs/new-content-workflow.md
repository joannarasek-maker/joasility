# Joasility new content workflow

Use this workflow for every new Joasility post, journey, recipe, movement page, or reflection.

The goal is to keep the repository organized from now on, without breaking existing pages.

## 1. Choose the content type

Use one of these categories:

- Journey / Local Walk
- Journey / Weekend Escape
- Journey / Adventure
- Nature & Wildlife
- Movement
- Nutrition
- Reflection

## 2. Create a clean slug

Use lowercase English words with hyphens.

Good:

```text
cowans-ford-wildlife-refuge
southern-france-pont-darc-nimes-avignon
morning-mobility-flow
millet-breakfast-bowl
```

Avoid:

```text
spaces in file names
Polish characters in file names
uppercase names
special characters
apostrophes
```

## 3. Put images in the right folder

Future image locations:

```text
assets/images/journeys/story-slug/
assets/images/nature/story-slug/
assets/images/movement/story-slug/
assets/images/nutrition/story-slug/
assets/images/reflections/story-slug/
```

Example:

```text
assets/images/nature/cowans-ford-wildlife-refuge/cows.jpg
assets/images/nature/cowans-ford-wildlife-refuge/info-sign.jpg
assets/images/nature/cowans-ford-wildlife-refuge/rural-hill.jpg
```

## 4. Use consistent image naming

Recommended pattern:

```text
01-main-view.jpg
02-detail.jpg
03-trail.jpg
04-ending.jpg
```

Or descriptive names:

```text
pont-darc.jpg
garden-nimes.jpg
avignon-square.jpg
rhone-river.jpg
```

## 5. Put future pages in the right folder

Future page locations:

```text
pages/journeys/story-slug.html
pages/nature/story-slug.html
pages/movement/story-slug.html
pages/nutrition/story-slug.html
pages/reflections/story-slug.html
```

Existing root-level pages remain in place for now.

## 6. Add the card data once

The card should include:

```js
{
  title: "",
  location: "",
  description: "",
  image: "",
  pageUrl: "",
  cardUrl: "",
  pageActionUrl: "",
  videoUrl: "",
  videoActionUrl: "",
  pageActionLabel: "Read the Journey",
  videoActionLabel: "Watch Video",
  tags: [],
  dateLabel: "",
  date: "YYYY-MM-DD"
}
```

## 7. Verify these items before publishing

- The image path loads.
- The card appears in the correct category.
- The card buttons work.
- `Read the Journey` opens the page.
- `Watch Video` opens embedded video when applicable.
- Back link points to the correct archive.
- Mobile layout still looks good.
- No old category labels remain.

## 8. Do not duplicate content unnecessarily

A story can appear in more than one category, but it should point to one page when possible.

Example:

Cowans Ford can appear under both:

- Local Walks
- Nature & Wildlife

But both should point to the same detail page.

## 9. Preferred future process

1. Upload images to the organized folder.
2. Add or update one page.
3. Add or update one data entry.
4. Check the live page.
5. Only then continue with the next item.
