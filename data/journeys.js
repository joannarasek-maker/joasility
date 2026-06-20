// Centralized Journeys archive data.
// Safe migration branch only.

const journeysArchiveData = [
  {
    title: "Local Walks",
    description: "Quiet local walks, parks, lakes, and nearby nature discoveries.",
    image: journeyImages.localWalks,
    videoUrl: "",
    archiveUrl: "local-walks.html",
    tags: ["Local Walks", "Parks", "Lakes", "Everyday Nature"],
    items: [
      {
        title: "A Bike Ride at Cowans Ford Wildlife Refuge",
        location: "Cowans Ford Wildlife Refuge, NC",
        description: "This peaceful ride takes us through forest trails, wetlands, and scenic views along Lake Norman. A reminder that some of the best outdoor adventures can be found close to home.",
        image: "https://img.youtube.com/vi/VRagX7O4s1Q/hqdefault.jpg",
        pageUrl: "cowans-ford-wildlife-refuge-bike-ride.html",
        cardUrl: "cowans-ford-wildlife-refuge-bike-ride.html?view=journey",
        pageActionUrl: "cowans-ford-wildlife-refuge-bike-ride.html?view=journey",
        videoUrl: "https://www.youtube.com/shorts/VRagX7O4s1Q",
        videoActionUrl: "cowans-ford-wildlife-refuge-bike-ride.html?view=video",
        pageActionLabel: "Read the Journey",
        videoActionLabel: "Watch Video",
        cardAriaLabel: "Open A Bike Ride at Cowans Ford Wildlife Refuge journey",
        tags: ["Local Walk", "Bike Ride", "Cowans Ford", "Lake Norman"],
        dateLabel: "June 2026",
        date: "2026-06-15"
      },
      {
        title: "Wildlife on a Local Walk in Huntersville",
        location: "Huntersville, NC",
        description: "A quiet local walk in Huntersville turned into a small wildlife encounter — a snake, a turtle, a spider, and a few unexpected moments in everyday nature.",
        image: "https://img.youtube.com/vi/AGTCQ5xCtGM/hqdefault.jpg",
        cardUrl: "wildlife-local-walk-huntersville.html",
        videoUrl: "https://www.youtube.com/shorts/AGTCQ5xCtGM",
        videoActionUrl: "wildlife-local-walk-huntersville.html",
        tags: ["Local Walk", "Wildlife", "Huntersville", "Nature Notes"],
        dateLabel: "May 2026",
        date: "2026-05-01"
      }
    ]
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
        description: "A quiet weekend walk shaped by forest paths, loose stones, and the small reset that happens when the body starts moving.",
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
        date: "2026-06-01"
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
        date: "2009-06-01"
      }
    ]
  },
  {
    title: "Adventure",
    description: "Long-distance journeys, bigger expeditions, and travel stories gathered farther from home.",
    image: journeyImages.adventure,
    videoUrl: "",
    archiveUrl: "adventure.html",
    tags: ["Long-Distance Travel", "Expeditions", "Travel Journal", "Stories"],
    items: [
      {
        title: "Southern France | Nature, History & Hidden Gems",
        location: "Southern France",
        description: "A family road trip from Poland through Germany to Southern France — Pont d'Arc, Nîmes, Avignon, camping fields, and small moments along the way.",
        image: "assets/images/Pont d'Arc.JPG",
        pageUrl: "adventure.html?story=southern-france&view=journey",
        cardUrl: "adventure.html?story=southern-france&view=video",
        pageActionUrl: "adventure.html?story=southern-france&view=journey",
        videoUrl: "https://www.youtube.com/shorts/YS4r-pkGBzQ",
        videoActionUrl: "adventure.html?story=southern-france&view=video",
        pageActionLabel: "Read the Journey",
        videoActionLabel: "Watch Video",
        cardAriaLabel: "Open Southern France journey",
        tags: ["Adventure", "Southern France", "Pont d'Arc", "Nîmes", "Avignon"],
        dateLabel: "July 2014",
        date: "2014-07-01"
      },
      {
        title: "A Family Cycling Trip Along the Danube",
        location: "Passau, Germany",
        description: "Photos from Passau's Old Town, St. Stephen's Cathedral, LEGOLAND Germany, and the bike paths that led us toward Vienna.",
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
        date: "2013-07-01"
      }
    ]
  }
];

if (typeof journeyCategoriesData !== "undefined") {
  journeyCategoriesData.splice(0, journeyCategoriesData.length, ...journeysArchiveData);
}

if (document.getElementById("category-archive") && typeof renderCategoryArchive === "function") {
  renderCategoryArchive();
}
