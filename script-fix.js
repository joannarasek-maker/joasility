// Small post-render fixes for image paths and metadata separators.
const milletBreakfastBowlRecipe = {
  title: "Millet Breakfast Bowl",
  description:
    "A nourishing and satisfying breakfast made with millet, high-protein fat-free skyr, blueberries, walnuts, and dried cranberries. A simple breakfast that is both filling and nutrient-dense.",
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
  date: "2026-06-01",
};

metadataTemplate = function metadataTemplate(item) {
  const label = item.location || item.category || "";
  const date = item.dateLabel || (item.date ? formatDate(item.date) : "");
  return [label, date].filter(Boolean).join(" · ");
};

if (typeof homepageCategoryData !== "undefined" && homepageCategoryData.nutrition) {
  homepageCategoryData.nutrition.image = "assets/images/nutrition-breakfast-upright.jpg";
}

if (typeof recipesData !== "undefined") {
  const existingIndex = recipesData.findIndex((item) => item.title === "Millet Breakfast Bowl");
  if (existingIndex >= 0) {
    recipesData[existingIndex] = milletBreakfastBowlRecipe;
  } else {
    recipesData.unshift(milletBreakfastBowlRecipe);
  }
}

if (typeof archiveCollections !== "undefined") {
  archiveCollections.nutrition = recipesData;
}

if (
  typeof journeyCategoriesData !== "undefined" &&
  typeof natureData !== "undefined" &&
  Array.isArray(journeyCategoriesData) &&
  Array.isArray(natureData)
) {
  const localWalks = journeyCategoriesData.find((category) => category.title === "Local Walks");
  const cowansFordCard = localWalks?.items?.find(
    (item) => item.title === "A Bike Ride at Cowans Ford Wildlife Refuge"
  );

  if (cowansFordCard && !natureData.some((item) => item.title === cowansFordCard.title)) {
    natureData.unshift(cowansFordCard);
  }

  if (typeof archiveCollections !== "undefined") {
    archiveCollections["nature-wildlife"] = natureData;
  }
}

if (document.getElementById("nature-grid") && typeof renderCards === "function") {
  renderCards("nature-grid", newestItems(natureData, 3));
  const natureLinkTarget = document.getElementById("nature-all-link");
  if (natureLinkTarget) {
    natureLinkTarget.innerHTML = `<a class="category-all-link" href="nature-wildlife.html">View all Nature & Wildlife &rarr;</a>`;
  }
}

if (document.getElementById("recipes-grid") && typeof renderHomepageCategory === "function") {
  renderHomepageCategory("recipes-grid", homepageCategoryData.nutrition, "recipes-all-link");
}

if (document.getElementById("category-archive") && typeof renderCategoryArchive === "function") {
  renderCategoryArchive();
}
