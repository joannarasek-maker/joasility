const aFewMinutesOfMovement = {
  title: "A Few Minutes of Movement",
  description:
    "Movement keeps us strong, capable, and ready for everyday adventures. A few moments from today's Senior Fitness class, filled with energy, strength, and determination. Life in Motion.",
  image: "assets/images/a-few-minutes-of-movement-thumbnail.svg",
  cardUrl: "a-few-minutes-of-movement.html",
  videoUrl: "https://www.youtube.com/shorts/pY5B-mSJ2wE",
  videoActionUrl: "a-few-minutes-of-movement.html",
  category: "Movement",
  tags: ["Senior Fitness", "Strength", "Movement", "Life in Motion"],
  dateLabel: "June 2026",
  date: "2026-06-12",
};

if (typeof movementData !== "undefined" && !movementData.some((item) => item.videoUrl === aFewMinutesOfMovement.videoUrl)) {
  movementData.unshift(aFewMinutesOfMovement);
  renderCategoryArchive();
}
