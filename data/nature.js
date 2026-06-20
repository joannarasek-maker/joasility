// Centralized Nature & Wildlife archive data.
// Safe migration branch only.

const natureArchiveData = [
  {
    title: "A Bike Ride at Cowans Ford Wildlife Refuge",
    location: "Cowans Ford Wildlife Refuge, NC",
    description: "This peaceful ride takes us through forest trails, wetlands, and scenic views along Lake Norman. A reminder that some of the best outdoor adventures can be found close to home.",
    image: "https://img.youtube.com/vi/VRagX7O4s1Q/hqdefault.jpg",
    pageUrl: "cowans-ford-wildlife-refuge-bike-ride.html?source=nature",
    cardUrl: "cowans-ford-wildlife-refuge-bike-ride.html?view=journey&source=nature",
    pageActionUrl: "cowans-ford-wildlife-refuge-bike-ride.html?view=journey&source=nature",
    videoUrl: "https://www.youtube.com/shorts/VRagX7O4s1Q",
    videoActionUrl: "cowans-ford-wildlife-refuge-bike-ride.html?view=video&source=nature",
    pageActionLabel: "Read the Journey",
    videoActionLabel: "Watch Video",
    cardAriaLabel: "Open A Bike Ride at Cowans Ford Wildlife Refuge journey",
    tags: ["Local Walk", "Bike Ride", "Cowans Ford", "Lake Norman"],
    dateLabel: "June 2026",
    date: "2026-06-15"
  },
  {
    title: "More Than Just a Hike | Morrow Mountain State Park",
    location: "Morrow Mountain State Park, NC",
    description: "A few unexpected encounters along the trail at Morrow Mountain State Park. Sometimes the smallest creatures make a hike memorable.",
    image: "https://img.youtube.com/vi/mzGhnCftS4k/hqdefault.jpg",
    cardUrl: "more-than-just-a-hike-morrow-mountain.html",
    videoUrl: "https://www.youtube.com/shorts/mzGhnCftS4k",
    videoActionUrl: "more-than-just-a-hike-morrow-mountain.html",
    tags: ["Morrow Mountain", "North Carolina", "Wildlife", "Hiking", "Joasility"],
    dateLabel: "June 2026",
    date: "2026-06-01"
  },
  {
    title: "Wildlife on a Local Walk in Huntersville",
    location: "Huntersville, NC",
    description: "A quiet local walk in Huntersville turned into a small wildlife encounter — a snake, a turtle, a spider, and a few unexpected moments in everyday nature.",
    image: "https://img.youtube.com/vi/AGTCQ5xCtGM/hqdefault.jpg",
    cardUrl: "wildlife-local-walk-huntersville.html?source=nature",
    videoUrl: "https://www.youtube.com/shorts/AGTCQ5xCtGM",
    videoActionUrl: "wildlife-local-walk-huntersville.html?source=nature",
    tags: ["Local Walk", "Wildlife", "Huntersville", "Nature Notes"],
    dateLabel: "May 2026",
    date: "2026-05-01"
  }
];

if (typeof archiveCollections !== "undefined") {
  archiveCollections["nature-wildlife"] = natureArchiveData;
}

if (document.getElementById("category-archive") && typeof renderCategoryArchive === "function") {
  renderCategoryArchive();
}
