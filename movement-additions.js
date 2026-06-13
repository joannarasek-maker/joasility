const aFewMinutesOfMovement = {
  title: "A Few Minutes of Movement",
  description:
    "A few moments from today's Senior Fitness class, filled with energy, strength, and determination. Life in Motion.",
  image: "https://img.youtube.com/vi/pY5B-mSJ2wE/hqdefault.jpg",
  cardUrl: "a-few-minutes-of-movement.html",
  videoUrl: "https://www.youtube.com/shorts/pY5B-mSJ2wE",
  videoActionUrl: "a-few-minutes-of-movement.html",
  category: "Movement",
  tags: ["Senior Fitness", "Strength", "Movement", "Life in Motion"],
  dateLabel: "June 2026",
  date: "2026-06-12",
};

if (typeof movementData !== "undefined") {
  const morningMobilityFlow = movementData.find((item) => item.videoUrl === "https://www.youtube.com/shorts/ro2uybn-WdQ");
  if (morningMobilityFlow) {
    morningMobilityFlow.image = "assets/images/morning-mobility-flow-custom-thumbnail.png";
  }

  if (!movementData.some((item) => item.videoUrl === aFewMinutesOfMovement.videoUrl)) {
    movementData.unshift(aFewMinutesOfMovement);
  }

  renderCategoryArchive();
}
