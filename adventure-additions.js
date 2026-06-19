const passauDanubeBikeTrip = {
  title: "A Family Cycling Trip Along the Danube",
  location: "Passau, Germany",
  description:
    "Photos from Passau's Old Town, St. Stephen's Cathedral, LEGOLAND Germany, and the bike paths that led us toward Vienna.",
  image: "https://img.youtube.com/vi/v1k96MK3G0A/hqdefault.jpg",
  pageUrl: "passau-germany-danube-bike-trip.html",
  cardUrl: "passau-germany-danube-bike-trip.html?view=video",
  pageActionUrl: "passau-germany-danube-bike-trip.html?view=journey",
  videoUrl: "https://www.youtube.com/shorts/v1k96MK3G0A",
  videoActionUrl: "passau-germany-danube-bike-trip.html?view=video",
  pageActionLabel: "Read the Journey",
  videoActionLabel: "Watch Video",
  cardAriaLabel: "Open A Family Cycling Trip Along the Danube journey",
  tags: ["Adventure", "Passau", "Germany", "Danube", "Family Cycling"],
  dateLabel: "July–August 2013",
  date: "2013-07-01",
};

const southernFranceJourney = {
  title: "Southern France | Nature, History & Hidden Gems",
  location: "Southern France",
  description:
    "A short travel memory from Pont d'Arc, Nîmes, and Avignon — natural beauty, old stone streets, gardens, and a few places worth remembering.",
  image: "https://img.youtube.com/vi/YS4r-pkGBzQ/hqdefault.jpg",
  pageUrl: "southern-france-pont-darc-nimes-avignon.html",
  cardUrl: "southern-france-pont-darc-nimes-avignon.html?view=video",
  pageActionUrl: "southern-france-pont-darc-nimes-avignon.html?view=journey",
  videoUrl: "https://www.youtube.com/shorts/YS4r-pkGBzQ",
  videoActionUrl: "southern-france-pont-darc-nimes-avignon.html?view=video",
  pageActionLabel: "Read the Journey",
  videoActionLabel: "Watch Video",
  cardAriaLabel: "Open Southern France journey",
  tags: ["Adventure", "Southern France", "Pont d'Arc", "Nîmes", "Avignon"],
  dateLabel: "July 2014",
  date: "2014-07-01",
};

if (typeof journeyCategoriesData !== "undefined") {
  const adventureCategory = journeyCategoriesData.find((item) => item.title === "Adventure");

  if (adventureCategory) {
    [southernFranceJourney, passauDanubeBikeTrip].reverse().forEach((journey) => {
      if (!adventureCategory.items.some((item) => item.videoUrl === journey.videoUrl)) {
        adventureCategory.items.unshift(journey);
      }
    });
    renderCategoryArchive();
  }
}
