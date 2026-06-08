const heroImage = "assets/images/joasility-bridge-hero-web.jpg";
const journeyImages = {
  localWalks: "assets/images/mountain-island-lake-local-walks.jpg",
  weekendEscapes: "assets/images/weekend-escapes-valley-village.jpg",
  adventure: "assets/images/travel-adventures-historic-town.jpg",
  natureWildlife: "assets/images/nature-wildlife-raven.jpg",
};

const huntersvilleWildlifeWalk = {
  title: "Wildlife on a Local Walk in Huntersville",
  location: "Huntersville, NC",
  description:
    "A quiet local walk in Huntersville turned into a small wildlife encounter — a snake, a turtle, a spider, and a few unexpected moments in everyday nature.",
  image: "https://img.youtube.com/vi/AGTCQ5xCtGM/hqdefault.jpg",
  cardUrl: "wildlife-local-walk-huntersville.html",
  videoUrl: "https://www.youtube.com/shorts/AGTCQ5xCtGM",
  videoActionUrl: "wildlife-local-walk-huntersville.html",
  tags: ["Local Walk", "Wildlife", "Huntersville", "Nature Notes"],
  dateLabel: "May 2026",
  date: "2026-05-01",
};

const journeyCategoriesData = [
  {
    title: "Local Walks",
    description: "Quiet local walks, parks, lakes, and nearby nature discoveries.",
    image: journeyImages.localWalks,
    videoUrl: "",
    archiveUrl: "local-walks.html",
    tags: ["Local Walks", "Parks", "Lakes", "Everyday Nature"],
    items: [
      huntersvilleWildlifeWalk,
    ],
  },
  {
    title: "Weekend Escapes",
    description: "One-day and multi-day trips, mountain weekends, scenic drives and short adventures.",
    image: journeyImages.weekendEscapes,
    videoUrl: "https://www.youtube.com/",
    archiveUrl: "weekend-escapes.html",
    tags: ["Mountain Weekends", "Day Trips", "Hiking", "Getaways"],
    items: [
      {
        title: "Morrow Mountain State Park",
        location: "Morrow Mountain State Park, NC",
        description:
          "A quiet weekend walk shaped by forest paths, loose stones, and the small reset that happens when the body starts moving.",
        image: "https://img.youtube.com/vi/iCBdxmkMMhc/hqdefault.jpg",
        pageUrl: "morrow-mountain-state-park.html",
        cardUrl: "morrow-mountain-state-park.html?view=video",
        pageActionUrl: "morrow-mountain-state-park.html?view=journey",
        videoUrl: "https://www.youtube.com/shorts/iCBdxmkMMhc",
        videoActionUrl: "morrow-mountain-state-park.html?view=video",
        pageActionLabel: "Read the Journey",
        videoActionLabel: "Watch Video",
        cardAriaLabel: "Open Morrow Mountain State Park journey",
        tags: ["Weekend Escape", "Morrow Mountain", "North Carolina", "Trail Walk"],
        dateLabel: "June 2026",
        date: "2026-06-01",
      },
      {
        title: "Błatnia, Beskid Śląski",
        location: "Błatnia, Poland",
        description: "A short travel video from a peaceful mountain escape in Beskid Śląski.",
        image: "https://img.youtube.com/vi/WbWlNZ4yfks/hqdefault.jpg",
        pageUrl: "blatnia-beskid-slaski.html",
        cardUrl: "blatnia-beskid-slaski.html?view=video",
        pageActionUrl: "blatnia-beskid-slaski.html?view=journey",
        videoUrl: "https://www.youtube.com/shorts/WbWlNZ4yfks",
        videoActionUrl: "blatnia-beskid-slaski.html?view=video",
        pageActionLabel: "Read the Journey",
        videoActionLabel: "Watch Video",
        cardAriaLabel: "Open Błatnia, Beskid Śląski journey",
        tags: ["Weekend Escape", "Beskid Śląski", "Poland", "Short Video"],
        dateLabel: "June 2009",
        date: "2009-06-01",
      },
    ],
  },
  {
    title: "Adventure",
    description: "Long-distance journeys, bigger expeditions, and travel stories gathered farther from home.",
    image: journeyImages.adventure,
    videoUrl: "",
    archiveUrl: "adventure.html",
    tags: ["Long-Distance Travel", "Expeditions", "Travel Journal", "Stories"],
    items: [],
  },
];

const natureData = [
  huntersvilleWildlifeWalk,
  {
    title: "More Than Just a Hike | Morrow Mountain State Park",
    location: "Morrow Mountain State Park, NC",
    description:
      "A few unexpected encounters along the trail at Morrow Mountain State Park. Sometimes the smallest creatures make a hike memorable.",
    image: "https://img.youtube.com/vi/mzGhnCftS4k/hqdefault.jpg",
    cardUrl: "more-than-just-a-hike-morrow-mountain.html",
    videoUrl: "https://www.youtube.com/shorts/mzGhnCftS4k",
    videoActionUrl: "more-than-just-a-hike-morrow-mountain.html",
    tags: ["Morrow Mountain", "North Carolina", "Wildlife", "Hiking", "Joasility"],
    dateLabel: "June 2026",
    date: "2026-06-01",
  },
];

const movementData = [
  {
    title: "Morning Mobility Flow",
    description:
      "A short movement session focused on mobility, balance, and keeping the body moving through everyday life.",
    image: "https://img.youtube.com/vi/ro2uybn-WdQ/hqdefault.jpg",
    cardUrl: "morning-mobility-flow.html",
    videoUrl: "https://www.youtube.com/shorts/ro2uybn-WdQ",
    videoActionUrl: "morning-mobility-flow.html",
    category: "Movement",
    tags: ["Mobility", "Movement", "Active Living", "Everyday Motion"],
    dateLabel: "May 2026",
    date: "2026-05-01",
  },
];

const recipesData = [
  {
    title: "Turkey Spaghetti",
    description:
      "A simple, comforting turkey spaghetti made with ground turkey, tomato sauce, garlic, onion, basil, and parmesan. Easy enough for an everyday family dinner, but still balanced and protein-rich.",
    image: "https://img.youtube.com/vi/rQ7e0wvlTPY/hqdefault.jpg",
    pageUrl: "turkey-spaghetti.html?view=recipe",
    cardUrl: "turkey-spaghetti.html?view=recipe",
    pageActionUrl: "turkey-spaghetti.html?view=recipe",
    videoUrl: "https://www.youtube.com/shorts/rQ7e0wvlTPY",
    videoActionUrl: "turkey-spaghetti.html?view=video",
    imageLinksToVideo: true,
    category: "Nutrition",
    tags: ["Everyday Recipes", "Turkey", "Protein-rich", "Family Dinner"],
    dateLabel: "May 2026",
    date: "2026-05-01",
  },
];

const reflectionsData = [
  {
    title: "Why Joasility?",
    description:
      "A personal note about travel journals, movement, food, imperfect creation, and why these gathered moments matter.",
    image: "assets/images/why-joasility-exists.jpg",
    pageUrl: "why-joasility-exists.html",
    category: "Reflections",
    readingTime: "4 min read",
    tags: ["Reflection", "Travel Journal", "Life in Motion"],
    dateLabel: "June 2026",
    date: "2026-06-01",
  },
];

const homepageCategoryData = {
  nature: {
    title: "Nature Notes",
    description: "Small discoveries from walks, trails, and travels.",
    image: journeyImages.natureWildlife,
    archiveUrl: "nature-wildlife.html",
    tags: ["Birds", "Wildlife", "Plants", "Nature Notes"],
  },
  movement: {
    title: "Movement",
    description: "Yoga, mobility, fitness, senior-friendly movement, and everyday activity for life in motion.",
    image: "assets/images/movement-cycling.jpg",
    archiveUrl: "movement.html",
    tags: ["Yoga", "Mobility", "Fitness", "Everyday Activity"],
  },
  nutrition: {
    title: "Nutrition",
    description: "Simple food, practical meals, homemade recipes, and trail-friendly ideas.",
    image: "assets/images/nutrition-breakfast-upright.jpg",
    archiveUrl: "nutrition.html",
    tags: ["Simple Food", "Recipes", "Quick Meals", "Homemade"],
  },
  reflections: {
    title: "Reflections",
    description: "Thoughts, lessons, and stories gathered along the way.",
    image: "assets/images/reflections-green-man.webp",
    archiveUrl: "reflections.html",
    actionLabel: "View All",
    tags: ["Reflection", "Travel Notes", "Nature Notes", "Life in Motion"],
  },
};

const archiveCollections = {
  "nature-wildlife": natureData,
  movement: movementData,
  nutrition: recipesData,
  reflections: reflectionsData,
};

const youtubePlaylistsData = [
  {
    title: "Travel",
    url: "https://www.youtube.com/@Joasility/playlists",
    thumbnail: journeyImages.adventure,
  },
  {
    title: "Movement",
    url: "https://www.youtube.com/@Joasility/playlists",
    thumbnail: homepageCategoryData.movement.image,
  },
  {
    title: "Nature & Wildlife",
    url: "https://www.youtube.com/@Joasility/playlists",
    thumbnail: homepageCategoryData.nature.image,
  },
  {
    title: "Nutrition",
    url: "https://www.youtube.com/@Joasility/playlists",
    thumbnail: homepageCategoryData.nutrition.image,
  },
];

function newestItems(items, limit = 2) {
  return [...items]
    .sort((a, b) => new Date(`${b.date || "1900-01-01"}T12:00:00`) - new Date(`${a.date || "1900-01-01"}T12:00:00`))
    .slice(0, limit);
}

function formatDate(dateString) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(new Date(`${dateString}T12:00:00`));
}

function tagsTemplate(tags = []) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function metadataTemplate(item) {
  const label = item.location || item.category || "";
  const date = item.dateLabel || (item.date ? formatDate(item.date) : "");
  return [label, date].filter(Boolean).join(" · ");
}

function cardTemplate(item) {
  const metadata = metadataTemplate(item);
  const pageHref = item.pageActionUrl || item.pageUrl || "";
  const videoHref = item.videoActionUrl || item.videoUrl || "";
  const cardHref = item.cardUrl || item.pageUrl || videoHref;
  const cardTarget = cardHref === videoHref && !item.videoActionUrl ? ` target="_blank" rel="noopener noreferrer"` : "";
  const cardLabel = item.cardAriaLabel || (item.pageUrl ? `Open ${item.title}` : `Watch ${item.title}`);
  const pageAction = pageHref
    ? `<a class="video-link" href="${pageHref}">${item.pageActionLabel || "View Recipe"}</a>`
    : "";
  const videoAction = videoHref
    ? `<a class="video-link" href="${videoHref}"${item.videoActionUrl ? "" : ` target="_blank" rel="noopener noreferrer"`}>${item.videoActionLabel || "Watch Video"}</a>`
    : "";
  const action =
    pageAction && videoAction
      ? `<div class="card-actions">${pageAction}${videoAction}</div>`
      : pageAction || videoAction;
  const cardOpen = cardHref
    ? `<a class="card-cover-link" href="${cardHref}"${cardTarget} aria-label="${cardLabel}"></a>`
    : "";
  const shouldLinkImageToVideo = videoHref && (!pageHref || item.imageLinksToVideo);
  const imageHref = shouldLinkImageToVideo ? videoHref : cardHref;
  const imageTarget = shouldLinkImageToVideo && !item.videoActionUrl ? ` target="_blank" rel="noopener noreferrer"` : cardTarget;
  const image = imageHref
    ? `<a class="card-image-link" href="${imageHref}"${imageTarget} aria-label="${cardLabel}"><img src="${item.image}" alt="${item.title}" loading="lazy">${videoHref ? `<span class="play-badge" aria-hidden="true"></span>` : ""}</a>`
    : videoHref
    ? `<img src="${item.image}" alt="${item.title}" loading="lazy"><span class="play-badge" aria-hidden="true"></span>`
    : `<img src="${item.image}" alt="${item.title}" loading="lazy">`;

  return `
    <article class="content-card">
      ${cardOpen}
      <div class="card-image">
        ${image}
      </div>
      <div class="card-body">
        <div class="meta">${metadata}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        ${action}
        <div class="tag-list">${tagsTemplate(item.tags)}</div>
      </div>
    </article>
  `;
}

function journeyCategoryTemplate(category) {
  const className = category.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const archiveUrl = category.archiveUrl || "#journeys";

  return `
    <article class="journey-category ${className}">
      <a class="card-cover-link" href="${archiveUrl}" aria-label="View all ${category.title}"></a>
      <div class="category-lead">
        <a class="category-lead-link" href="${archiveUrl}" aria-label="View all ${category.title}">
          <img src="${category.image}" alt="${category.title}" loading="lazy">
        </a>
      </div>
      <div class="category-lead-copy">
        <h3>${category.title}</h3>
        <p>${category.description}</p>
      </div>
      <div class="category-footer">
        <div class="tag-list">${tagsTemplate(category.tags)}</div>
        <a class="category-all-link" href="${archiveUrl}">View all &rarr;</a>
      </div>
    </article>
  `;
}

function renderCategoryArchive() {
  const target = document.getElementById("category-archive");
  if (!target) return;

  const categorySlug = document.body?.dataset?.category;
  const archiveSlug = document.body?.dataset?.archive;
  const category = journeyCategoriesData.find((item) => (
    item.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") === categorySlug
  ));
  const archiveItems = category ? category.items : archiveCollections[archiveSlug];

  if (!archiveItems) return;

  const template = archiveSlug === "reflections" ? reflectionTemplate : cardTemplate;
  target.innerHTML = newestItems(archiveItems, archiveItems.length)
    .map(template)
    .join("");
}

function reflectionTemplate(item) {
  const readingTime = item.readingTime ? `<span>${item.readingTime}</span>` : "";
  const metaText = metadataTemplate(item);
  const meta = [metaText, readingTime].filter(Boolean).join(" · ");
  const image = item.image
    ? `<div class="reflection-card-image">${item.pageUrl ? `<a class="card-image-link" href="${item.pageUrl}" aria-label="Read ${item.title}"><img src="${item.image}" alt="${item.title}" loading="lazy"></a>` : `<img src="${item.image}" alt="${item.title}" loading="lazy">`}</div>`
    : "";
  const cardOpen = item.pageUrl
    ? `<a class="card-cover-link" href="${item.pageUrl}" aria-label="Read ${item.title}"></a>`
    : "";
  const action = item.pageUrl ? `<a class="video-link" href="${item.pageUrl}">Read reflection</a>` : "";

  return `
    <article class="reflection-card">
      ${cardOpen}
      ${image}
      <div class="reflection-card-content">
      <div class="reflection-meta">${meta}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${action}
      <div class="tag-list">${tagsTemplate(item.tags)}</div>
      </div>
    </article>
  `;
}

function renderCards(targetId, data, template = cardTemplate) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = data.map(template).join("");
}

function categoryGatewayTemplate(category) {
  const className = category.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return `
    <article class="content-card category-gateway-card ${className}">
      <a class="card-cover-link" href="${category.archiveUrl}" aria-label="View all ${category.title}"></a>
      <div class="card-image">
        <a class="card-image-link" href="${category.archiveUrl}" aria-label="View all ${category.title}">
          <img src="${category.image}" alt="${category.title}" loading="lazy">
        </a>
      </div>
      <div class="card-body">
        <h3>${category.title}</h3>
        <p>${category.description}</p>
        <div class="tag-list">${tagsTemplate(category.tags)}</div>
        <a class="category-all-link" href="${category.archiveUrl}">${category.actionLabel || "View all"} &rarr;</a>
      </div>
    </article>
  `;
}

function playlistCardTemplate(playlist) {
  const thumbnail = playlist.thumbnail
    ? `<img src="${playlist.thumbnail}" alt="${playlist.title} playlist thumbnail" loading="lazy">`
    : `<span class="playlist-fallback" aria-hidden="true">${playlist.title.charAt(0)}</span>`;

  return `
    <article class="playlist-card">
      <a
        class="card-cover-link"
        href="${playlist.url}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open ${playlist.title} playlist on YouTube"
      ></a>
      <div class="playlist-thumbnail">
        <a
          class="playlist-thumbnail-link"
          href="${playlist.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open ${playlist.title} playlist on YouTube"
        >
          ${thumbnail}
          <span class="play-badge" aria-hidden="true"></span>
        </a>
      </div>
      <div class="playlist-card-body">
        <p class="eyebrow">Playlist</p>
        <h3>${playlist.title}</h3>
        <a
          class="video-link"
          href="${playlist.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open ${playlist.title} playlist on YouTube"
        >View Playlist</a>
      </div>
    </article>
  `;
}

function renderHomepageCategory(targetId, category, linkTargetId) {
  renderCards(targetId, [category], categoryGatewayTemplate);
  const linkTarget = document.getElementById(linkTargetId);
  if (!linkTarget) return;
  linkTarget.innerHTML = "";
}

renderCards("journey-categories", journeyCategoriesData, journeyCategoryTemplate);
renderHomepageCategory("nature-grid", homepageCategoryData.nature, "nature-all-link");
renderHomepageCategory("movement-grid", homepageCategoryData.movement, "movement-all-link");
renderHomepageCategory("recipes-grid", homepageCategoryData.nutrition, "recipes-all-link");
renderHomepageCategory("reflections-list", homepageCategoryData.reflections, "reflections-all-link");
renderCards("youtube-playlists", youtubePlaylistsData, playlistCardTemplate);
renderCategoryArchive();

document.addEventListener("click", (event) => {
  if (event.target.closest(".tag")) {
    event.preventDefault();
    event.stopPropagation();
  }
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const currentYear = new Date().getFullYear();

document.querySelectorAll("[data-current-year]").forEach((target) => {
  target.textContent = currentYear;
});

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const journeyViewButtons = document.querySelectorAll("[data-journey-view-button]");
const journeyViewPanels = document.querySelectorAll("[data-journey-view-panel]");

function setJourneyView(viewName) {
  journeyViewButtons.forEach((button) => {
    const isActive = button.dataset.journeyViewButton === viewName;
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("primary", isActive);
    button.classList.toggle("secondary", !isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  journeyViewPanels.forEach((panel) => {
    const isActive = panel.dataset.journeyViewPanel === viewName;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });
}

journeyViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setJourneyView(button.dataset.journeyViewButton);
  });
});

if (journeyViewButtons.length && journeyViewPanels.length) {
  const requestedJourneyView = new URLSearchParams(window.location.search).get("view");
  const initialJourneyView =
    requestedJourneyView === "journey" || requestedJourneyView === "recipe"
      ? "read-the-journey"
      : "watch-video";
  setJourneyView(initialJourneyView);
}const heroImage = "assets/joasility-bridge-hero-web.jpg";
const journeyImages = {
  localWalks: "assets/mountain-island-lake-local-walks.jpg",
  weekendEscapes: "assets/images/weekend-escapes-valley-village.jpg",
  adventure: "assets/images/travel-adventures-historic-town.jpg",
  natureWildlife: "assets/images/nature-wildlife-raven.jpg",
};

const huntersvilleWildlifeWalk = {
  title: "Wildlife on a Local Walk in Huntersville",
  location: "Huntersville, NC",
  description:
    "A quiet local walk in Huntersville turned into a small wildlife encounter — a snake, a turtle, a spider, and a few unexpected moments in everyday nature.",
  image: "https://img.youtube.com/vi/AGTCQ5xCtGM/hqdefault.jpg",
  cardUrl: "wildlife-local-walk-huntersville.html",
  videoUrl: "https://www.youtube.com/shorts/AGTCQ5xCtGM",
  videoActionUrl: "wildlife-local-walk-huntersville.html",
  tags: ["Local Walk", "Wildlife", "Huntersville", "Nature Notes"],
  dateLabel: "May 2026",
  date: "2026-05-01",
};

const journeyCategoriesData = [
  {
    title: "Local Walks",
    description: "Quiet local walks, parks, lakes, and nearby nature discoveries.",
    image: journeyImages.localWalks,
    videoUrl: "",
    archiveUrl: "local-walks.html",
    tags: ["Local Walks", "Parks", "Lakes", "Everyday Nature"],
    items: [
      huntersvilleWildlifeWalk,
    ],
  },
  {
    title: "Weekend Escapes",
    description: "One-day and multi-day trips, mountain weekends, scenic drives and short adventures.",
    image: journeyImages.weekendEscapes,
    videoUrl: "https://www.youtube.com/",
    archiveUrl: "weekend-escapes.html",
    tags: ["Mountain Weekends", "Day Trips", "Hiking", "Getaways"],
    items: [
      {
        title: "Morrow Mountain State Park",
        location: "Morrow Mountain State Park, NC",
        description:
          "A quiet weekend walk shaped by forest paths, loose stones, and the small reset that happens when the body starts moving.",
        image: "https://img.youtube.com/vi/iCBdxmkMMhc/hqdefault.jpg",
        pageUrl: "morrow-mountain-state-park.html",
        cardUrl: "morrow-mountain-state-park.html?view=video",
        pageActionUrl: "morrow-mountain-state-park.html?view=journey",
        videoUrl: "https://www.youtube.com/shorts/iCBdxmkMMhc",
        videoActionUrl: "morrow-mountain-state-park.html?view=video",
        pageActionLabel: "Read the Journey",
        videoActionLabel: "Watch Video",
        cardAriaLabel: "Open Morrow Mountain State Park journey",
        tags: ["Weekend Escape", "Morrow Mountain", "North Carolina", "Trail Walk"],
        dateLabel: "June 2026",
        date: "2026-06-01",
      },
      {
        title: "Błatnia, Beskid Śląski",
        location: "Błatnia, Poland",
        description: "A short travel video from a peaceful mountain escape in Beskid Śląski.",
        image: "https://img.youtube.com/vi/WbWlNZ4yfks/hqdefault.jpg",
        pageUrl: "blatnia-beskid-slaski.html",
        cardUrl: "blatnia-beskid-slaski.html?view=video",
        pageActionUrl: "blatnia-beskid-slaski.html?view=journey",
        videoUrl: "https://www.youtube.com/shorts/WbWlNZ4yfks",
        videoActionUrl: "blatnia-beskid-slaski.html?view=video",
        pageActionLabel: "Read the Journey",
        videoActionLabel: "Watch Video",
        cardAriaLabel: "Open Błatnia, Beskid Śląski journey",
        tags: ["Weekend Escape", "Beskid Śląski", "Poland", "Short Video"],
        dateLabel: "June 2009",
        date: "2009-06-01",
      },
    ],
  },
  {
    title: "Adventure",
    description: "Long-distance journeys, bigger expeditions, and travel stories gathered farther from home.",
    image: journeyImages.adventure,
    videoUrl: "",
    archiveUrl: "adventure.html",
    tags: ["Long-Distance Travel", "Expeditions", "Travel Journal", "Stories"],
    items: [],
  },
];

const natureData = [
  huntersvilleWildlifeWalk,
  {
    title: "More Than Just a Hike | Morrow Mountain State Park",
    location: "Morrow Mountain State Park, NC",
    description:
      "A few unexpected encounters along the trail at Morrow Mountain State Park. Sometimes the smallest creatures make a hike memorable.",
    image: "https://img.youtube.com/vi/mzGhnCftS4k/hqdefault.jpg",
    cardUrl: "more-than-just-a-hike-morrow-mountain.html",
    videoUrl: "https://www.youtube.com/shorts/mzGhnCftS4k",
    videoActionUrl: "more-than-just-a-hike-morrow-mountain.html",
    tags: ["Morrow Mountain", "North Carolina", "Wildlife", "Hiking", "Joasility"],
    dateLabel: "June 2026",
    date: "2026-06-01",
  },
];

const movementData = [
  {
    title: "Morning Mobility Flow",
    description:
      "A short movement session focused on mobility, balance, and keeping the body moving through everyday life.",
    image: "https://img.youtube.com/vi/ro2uybn-WdQ/hqdefault.jpg",
    cardUrl: "morning-mobility-flow.html",
    videoUrl: "https://www.youtube.com/shorts/ro2uybn-WdQ",
    videoActionUrl: "morning-mobility-flow.html",
    category: "Movement",
    tags: ["Mobility", "Movement", "Active Living", "Everyday Motion"],
    dateLabel: "May 2026",
    date: "2026-05-01",
  },
];

const recipesData = [
  {
    title: "Turkey Spaghetti",
    description:
      "A simple, comforting turkey spaghetti made with ground turkey, tomato sauce, garlic, onion, basil, and parmesan. Easy enough for an everyday family dinner, but still balanced and protein-rich.",
    image: "https://img.youtube.com/vi/rQ7e0wvlTPY/hqdefault.jpg",
    pageUrl: "turkey-spaghetti.html?view=recipe",
    cardUrl: "turkey-spaghetti.html?view=recipe",
    pageActionUrl: "turkey-spaghetti.html?view=recipe",
    videoUrl: "https://www.youtube.com/shorts/rQ7e0wvlTPY",
    videoActionUrl: "turkey-spaghetti.html?view=video",
    imageLinksToVideo: true,
    category: "Nutrition",
    tags: ["Everyday Recipes", "Turkey", "Protein-rich", "Family Dinner"],
    dateLabel: "May 2026",
    date: "2026-05-01",
  },
];

const reflectionsData = [
  {
    title: "Why Joasility?",
    description:
      "A personal note about travel journals, movement, food, imperfect creation, and why these gathered moments matter.",
    image: "assets/images/why-joasility-exists.jpg",
    pageUrl: "why-joasility-exists.html",
    category: "Reflections",
    readingTime: "4 min read",
    tags: ["Reflection", "Travel Journal", "Life in Motion"],
    dateLabel: "June 2026",
    date: "2026-06-01",
  },
];

const homepageCategoryData = {
  nature: {
    title: "Nature Notes",
    description: "Small discoveries from walks, trails, and travels.",
    image: journeyImages.natureWildlife,
    archiveUrl: "nature-wildlife.html",
    tags: ["Birds", "Wildlife", "Plants", "Nature Notes"],
  },
  movement: {
    title: "Movement",
    description: "Yoga, mobility, fitness, senior-friendly movement, and everyday activity for life in motion.",
    image: "assets/images/movement-cycling.jpg",
    archiveUrl: "movement.html",
    tags: ["Yoga", "Mobility", "Fitness", "Everyday Activity"],
  },
  nutrition: {
    title: "Nutrition",
    description: "Simple food, practical meals, homemade recipes, and trail-friendly ideas.",
    image: "assets/images/nutrition-breakfast-upright.jpg",
    archiveUrl: "nutrition.html",
    tags: ["Simple Food", "Recipes", "Quick Meals", "Homemade"],
  },
  reflections: {
    title: "Reflections",
    description: "Thoughts, lessons, and stories gathered along the way.",
    image: "assets/images/reflections-green-man.webp",
    archiveUrl: "reflections.html",
    actionLabel: "View All",
    tags: ["Reflection", "Travel Notes", "Nature Notes", "Life in Motion"],
  },
};

const archiveCollections = {
  "nature-wildlife": natureData,
  movement: movementData,
  nutrition: recipesData,
  reflections: reflectionsData,
};

const youtubePlaylistsData = [
  {
    title: "Travel",
    url: "https://www.youtube.com/@Joasility/playlists",
    thumbnail: journeyImages.adventure,
  },
  {
    title: "Movement",
    url: "https://www.youtube.com/@Joasility/playlists",
    thumbnail: homepageCategoryData.movement.image,
  },
  {
    title: "Nature & Wildlife",
    url: "https://www.youtube.com/@Joasility/playlists",
    thumbnail: homepageCategoryData.nature.image,
  },
  {
    title: "Nutrition",
    url: "https://www.youtube.com/@Joasility/playlists",
    thumbnail: homepageCategoryData.nutrition.image,
  },
];

function newestItems(items, limit = 2) {
  return [...items]
    .sort((a, b) => new Date(`${b.date || "1900-01-01"}T12:00:00`) - new Date(`${a.date || "1900-01-01"}T12:00:00`))
    .slice(0, limit);
}

function formatDate(dateString) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(new Date(`${dateString}T12:00:00`));
}

function tagsTemplate(tags = []) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function metadataTemplate(item) {
  const label = item.location || item.category || "";
  const date = item.dateLabel || (item.date ? formatDate(item.date) : "");
  return [label, date].filter(Boolean).join(" · ");
}

function cardTemplate(item) {
  const metadata = metadataTemplate(item);
  const pageHref = item.pageActionUrl || item.pageUrl || "";
  const videoHref = item.videoActionUrl || item.videoUrl || "";
  const cardHref = item.cardUrl || item.pageUrl || videoHref;
  const cardTarget = cardHref === videoHref && !item.videoActionUrl ? ` target="_blank" rel="noopener noreferrer"` : "";
  const cardLabel = item.cardAriaLabel || (item.pageUrl ? `Open ${item.title}` : `Watch ${item.title}`);
  const pageAction = pageHref
    ? `<a class="video-link" href="${pageHref}">${item.pageActionLabel || "View Recipe"}</a>`
    : "";
  const videoAction = videoHref
    ? `<a class="video-link" href="${videoHref}"${item.videoActionUrl ? "" : ` target="_blank" rel="noopener noreferrer"`}>${item.videoActionLabel || "Watch Video"}</a>`
    : "";
  const action =
    pageAction && videoAction
      ? `<div class="card-actions">${pageAction}${videoAction}</div>`
      : pageAction || videoAction;
  const cardOpen = cardHref
    ? `<a class="card-cover-link" href="${cardHref}"${cardTarget} aria-label="${cardLabel}"></a>`
    : "";
  const shouldLinkImageToVideo = videoHref && (!pageHref || item.imageLinksToVideo);
  const imageHref = shouldLinkImageToVideo ? videoHref : cardHref;
  const imageTarget = shouldLinkImageToVideo && !item.videoActionUrl ? ` target="_blank" rel="noopener noreferrer"` : cardTarget;
  const image = imageHref
    ? `<a class="card-image-link" href="${imageHref}"${imageTarget} aria-label="${cardLabel}"><img src="${item.image}" alt="${item.title}" loading="lazy">${videoHref ? `<span class="play-badge" aria-hidden="true"></span>` : ""}</a>`
    : videoHref
    ? `<img src="${item.image}" alt="${item.title}" loading="lazy"><span class="play-badge" aria-hidden="true"></span>`
    : `<img src="${item.image}" alt="${item.title}" loading="lazy">`;

  return `
    <article class="content-card">
      ${cardOpen}
      <div class="card-image">
        ${image}
      </div>
      <div class="card-body">
        <div class="meta">${metadata}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        ${action}
        <div class="tag-list">${tagsTemplate(item.tags)}</div>
      </div>
    </article>
  `;
}

function journeyCategoryTemplate(category) {
  const className = category.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const archiveUrl = category.archiveUrl || "#journeys";

  return `
    <article class="journey-category ${className}">
      <a class="card-cover-link" href="${archiveUrl}" aria-label="View all ${category.title}"></a>
      <div class="category-lead">
        <a class="category-lead-link" href="${archiveUrl}" aria-label="View all ${category.title}">
          <img src="${category.image}" alt="${category.title}" loading="lazy">
        </a>
      </div>
      <div class="category-lead-copy">
        <h3>${category.title}</h3>
        <p>${category.description}</p>
      </div>
      <div class="category-footer">
        <div class="tag-list">${tagsTemplate(category.tags)}</div>
        <a class="category-all-link" href="${archiveUrl}">View all &rarr;</a>
      </div>
    </article>
  `;
}

function renderCategoryArchive() {
  const target = document.getElementById("category-archive");
  if (!target) return;

  const categorySlug = document.body?.dataset?.category;
  const archiveSlug = document.body?.dataset?.archive;
  const category = journeyCategoriesData.find((item) => (
    item.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") === categorySlug
  ));
  const archiveItems = category ? category.items : archiveCollections[archiveSlug];

  if (!archiveItems) return;

  const template = archiveSlug === "reflections" ? reflectionTemplate : cardTemplate;
  target.innerHTML = newestItems(archiveItems, archiveItems.length)
    .map(template)
    .join("");
}

function reflectionTemplate(item) {
  const readingTime = item.readingTime ? `<span>${item.readingTime}</span>` : "";
  const metaText = metadataTemplate(item);
  const meta = [metaText, readingTime].filter(Boolean).join(" · ");
  const image = item.image
    ? `<div class="reflection-card-image">${item.pageUrl ? `<a class="card-image-link" href="${item.pageUrl}" aria-label="Read ${item.title}"><img src="${item.image}" alt="${item.title}" loading="lazy"></a>` : `<img src="${item.image}" alt="${item.title}" loading="lazy">`}</div>`
    : "";
  const cardOpen = item.pageUrl
    ? `<a class="card-cover-link" href="${item.pageUrl}" aria-label="Read ${item.title}"></a>`
    : "";
  const action = item.pageUrl ? `<a class="video-link" href="${item.pageUrl}">Read reflection</a>` : "";

  return `
    <article class="reflection-card">
      ${cardOpen}
      ${image}
      <div class="reflection-card-content">
      <div class="reflection-meta">${meta}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${action}
      <div class="tag-list">${tagsTemplate(item.tags)}</div>
      </div>
    </article>
  `;
}

function renderCards(targetId, data, template = cardTemplate) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = data.map(template).join("");
}

function categoryGatewayTemplate(category) {
  const className = category.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return `
    <article class="content-card category-gateway-card ${className}">
      <a class="card-cover-link" href="${category.archiveUrl}" aria-label="View all ${category.title}"></a>
      <div class="card-image">
        <a class="card-image-link" href="${category.archiveUrl}" aria-label="View all ${category.title}">
          <img src="${category.image}" alt="${category.title}" loading="lazy">
        </a>
      </div>
      <div class="card-body">
        <h3>${category.title}</h3>
        <p>${category.description}</p>
        <div class="tag-list">${tagsTemplate(category.tags)}</div>
        <a class="category-all-link" href="${category.archiveUrl}">${category.actionLabel || "View all"} &rarr;</a>
      </div>
    </article>
  `;
}

function playlistCardTemplate(playlist) {
  const thumbnail = playlist.thumbnail
    ? `<img src="${playlist.thumbnail}" alt="${playlist.title} playlist thumbnail" loading="lazy">`
    : `<span class="playlist-fallback" aria-hidden="true">${playlist.title.charAt(0)}</span>`;

  return `
    <article class="playlist-card">
      <a
        class="card-cover-link"
        href="${playlist.url}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open ${playlist.title} playlist on YouTube"
      ></a>
      <div class="playlist-thumbnail">
        <a
          class="playlist-thumbnail-link"
          href="${playlist.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open ${playlist.title} playlist on YouTube"
        >
          ${thumbnail}
          <span class="play-badge" aria-hidden="true"></span>
        </a>
      </div>
      <div class="playlist-card-body">
        <p class="eyebrow">Playlist</p>
        <h3>${playlist.title}</h3>
        <a
          class="video-link"
          href="${playlist.url}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open ${playlist.title} playlist on YouTube"
        >View Playlist</a>
      </div>
    </article>
  `;
}

function renderHomepageCategory(targetId, category, linkTargetId) {
  renderCards(targetId, [category], categoryGatewayTemplate);
  const linkTarget = document.getElementById(linkTargetId);
  if (!linkTarget) return;
  linkTarget.innerHTML = "";
}

renderCards("journey-categories", journeyCategoriesData, journeyCategoryTemplate);
renderHomepageCategory("nature-grid", homepageCategoryData.nature, "nature-all-link");
renderHomepageCategory("movement-grid", homepageCategoryData.movement, "movement-all-link");
renderHomepageCategory("recipes-grid", homepageCategoryData.nutrition, "recipes-all-link");
renderHomepageCategory("reflections-list", homepageCategoryData.reflections, "reflections-all-link");
renderCards("youtube-playlists", youtubePlaylistsData, playlistCardTemplate);
renderCategoryArchive();

document.addEventListener("click", (event) => {
  if (event.target.closest(".tag")) {
    event.preventDefault();
    event.stopPropagation();
  }
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const currentYear = new Date().getFullYear();

document.querySelectorAll("[data-current-year]").forEach((target) => {
  target.textContent = currentYear;
});

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const journeyViewButtons = document.querySelectorAll("[data-journey-view-button]");
const journeyViewPanels = document.querySelectorAll("[data-journey-view-panel]");

function setJourneyView(viewName) {
  journeyViewButtons.forEach((button) => {
    const isActive = button.dataset.journeyViewButton === viewName;
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("primary", isActive);
    button.classList.toggle("secondary", !isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  journeyViewPanels.forEach((panel) => {
    const isActive = panel.dataset.journeyViewPanel === viewName;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });
}

journeyViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setJourneyView(button.dataset.journeyViewButton);
  });
});

if (journeyViewButtons.length && journeyViewPanels.length) {
  const requestedJourneyView = new URLSearchParams(window.location.search).get("view");
  const initialJourneyView =
    requestedJourneyView === "journey" || requestedJourneyView === "recipe"
      ? "read-the-journey"
      : "watch-video";
  setJourneyView(initialJourneyView);
}
