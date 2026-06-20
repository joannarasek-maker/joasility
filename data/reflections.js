// Centralized Reflections archive data.
// Safe migration branch only.

const reflectionsArchiveData = [
  {
    title: "Why Joasility?",
    description: "A personal note about travel journals, movement, food, imperfect creation, and why these gathered moments matter.",
    image: "assets/images/why-joasility-exists.jpg",
    pageUrl: "why-joasility-exists.html",
    category: "Reflections",
    readingTime: "4 min read",
    tags: ["Reflection", "Travel Journal", "Life in Motion"],
    dateLabel: "June 2026",
    date: "2026-06-01"
  }
];

if (typeof archiveCollections !== "undefined") {
  archiveCollections.reflections = reflectionsArchiveData;
}

if (document.getElementById("category-archive") && typeof renderCategoryArchive === "function") {
  renderCategoryArchive();
}
