// Centralized Nutrition archive data.
// Safe migration branch only.

const nutritionArchiveData = [
  {
    title: "Millet Breakfast Bowl",
    description: "A nourishing and satisfying breakfast made with millet, high-protein fat-free skyr, blueberries, walnuts, and dried cranberries. A simple breakfast that is both filling and nutrient-dense.",
    image: "assets/images/20260611_074141.jpg",
    pageUrl: "millet-breakfast-bowl.html?view=recipe",
    cardUrl: "millet-breakfast-bowl.html?view=recipe",
    pageActionUrl: "millet-breakfast-bowl.html?view=recipe",
    videoUrl: "https://www.youtube.com/shorts/lqY4-Y1n-ko",
    videoActionUrl: "millet-breakfast-bowl.html?view=video",
    imageLinksToVideo: true,
    category: "Nutrition",
    tags: ["Everyday Recipes", "Millet", "Protein-rich", "Breakfast"],
    dateLabel: "June 2026",
    date: "2026-06-01"
  },
  {
    title: "Turkey Spaghetti",
    description: "A simple, comforting turkey spaghetti made with ground turkey, tomato sauce, garlic, onion, basil, and parmesan. Easy enough for an everyday family dinner, but still balanced and protein-rich.",
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
    date: "2026-05-01"
  }
];

if (typeof archiveCollections !== "undefined") {
  archiveCollections.nutrition = nutritionArchiveData;
}

if (document.getElementById("category-archive") && typeof renderCategoryArchive === "function") {
  renderCategoryArchive();
}
