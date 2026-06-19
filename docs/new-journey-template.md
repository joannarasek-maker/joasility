# New Journey template

Use this template for Local Walks, Weekend Escapes, and Adventure stories.

## Basic information

```text
Title:
Category: Local Walks / Weekend Escapes / Adventure
Location:
Date label:
Date: YYYY-MM-DD
YouTube Short URL:
Slug:
```

## Folder paths

```text
Page path:
pages/journeys/story-slug.html

Image folder:
assets/images/journeys/story-slug/
```

## Card data template

```js
{
  title: "",
  location: "",
  description: "",
  image: "assets/images/journeys/story-slug/01-main.jpg",
  pageUrl: "pages/journeys/story-slug.html?view=journey",
  cardUrl: "pages/journeys/story-slug.html?view=journey",
  pageActionUrl: "pages/journeys/story-slug.html?view=journey",
  videoUrl: "https://www.youtube.com/shorts/VIDEO_ID",
  videoActionUrl: "pages/journeys/story-slug.html?view=video",
  pageActionLabel: "Read the Journey",
  videoActionLabel: "Watch Video",
  cardAriaLabel: "Open story title journey",
  tags: ["Journey"],
  dateLabel: "Month Year",
  date: "YYYY-MM-DD"
}
```

## Story structure

```text
Intro
Photo 1 + short story section
Photo 2 + short story section
Photo 3 + short story section
Looking Back / Life in Motion ending
```

## Checklist

- Card image works.
- Read the Journey opens the page.
- Watch Video opens the embedded video view.
- Back link points to the correct archive.
- Category label is correct.
- Mobile view is readable.
