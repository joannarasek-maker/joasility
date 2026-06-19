# New Nature & Wildlife template

Use this template for nature observations, wildlife encounters, plants, birds, insects, reptiles, parks, and outdoor details.

## Basic information

```text
Title:
Location:
Date label:
Date: YYYY-MM-DD
YouTube Short URL:
Slug:
```

## Folder paths

```text
Page path:
pages/nature/story-slug.html

Image folder:
assets/images/nature/story-slug/
```

## Card data template

```js
{
  title: "",
  location: "",
  description: "",
  image: "assets/images/nature/story-slug/01-main.jpg",
  pageUrl: "pages/nature/story-slug.html?view=journey",
  cardUrl: "pages/nature/story-slug.html?view=journey",
  pageActionUrl: "pages/nature/story-slug.html?view=journey",
  videoUrl: "https://www.youtube.com/shorts/VIDEO_ID",
  videoActionUrl: "pages/nature/story-slug.html?view=video",
  pageActionLabel: "Read the Journey",
  videoActionLabel: "Watch Video",
  cardAriaLabel: "Open story title nature note",
  tags: ["Nature", "Wildlife"],
  dateLabel: "Month Year",
  date: "YYYY-MM-DD"
}
```

## Story structure

```text
Intro observation
What I noticed
Photo sections
Why it stayed with me
Life in Motion ending
```

## Checklist

- Card appears in Nature & Wildlife archive.
- Homepage still shows the main Nature & Wildlife gateway card unless intentionally changed.
- Back link points to Nature & Wildlife.
- If a story is also a Local Walk, do not duplicate the page; share the same detail page where possible.
