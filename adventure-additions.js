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
  date: "2014-07-01",
};

function renderSouthernFranceDetail() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("story") !== "southern-france") return;

  const main = document.querySelector("main.archive-page");
  if (!main) return;

  main.classList.add("journey-detail");
  main.textContent = "";

  const hero = document.createElement("section");
  hero.className = "section journey-detail-hero journey-detail-intro";
  hero.innerHTML = `
    <article class="journey-detail-copy">
      <p class="eyebrow">Adventure</p>
      <h1>Southern France</h1>
      <p>A family road trip from Poland through Germany to Southern France — with two children, a stroller, a tent, and a few places that stayed in memory long after the drive home.</p>
      <div class="recipe-badges" aria-label="Journey details"><span>Pont d'Arc</span><span>Nîmes</span><span>Avignon</span><span>July 2014</span></div>
      <div class="journey-actions journey-view-tabs" role="tablist" aria-label="Southern France journey views">
        <button class="button primary is-active" type="button" role="tab" data-journey-view-button="watch-video">Watch Video</button>
        <button class="button secondary" type="button" role="tab" data-journey-view-button="read-the-journey">Read the Journey</button>
      </div>
    </article>`;

  const videoPanel = document.createElement("section");
  videoPanel.className = "section journey-section journey-view-panel is-active";
  videoPanel.dataset.journeyViewPanel = "watch-video";
  videoPanel.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Watch Video</p>
      <h2>Nature, history, and hidden corners.</h2>
      <p>A quick photo journey through Southern France, from the natural arch of Pont d'Arc to the gardens of Nîmes and the historic streets of Avignon.</p>
    </div>
    <div class="journey-video-embed" id="southern-france-video"></div>`;

  const readPanel = document.createElement("section");
  readPanel.className = "section journey-section journey-view-panel";
  readPanel.dataset.journeyViewPanel = "read-the-journey";
  readPanel.hidden = true;
  readPanel.innerHTML = `
    <div class="section-heading"><p class="eyebrow">Read the Journey</p><h2>A summer road trip, remembered in small pieces.</h2></div>
    <div class="morrow-story">
      <figure class="morrow-story-hero"><img src="assets/images/Pont d'Arc.JPG" alt="Pont d'Arc natural arch over the Ardèche River in Southern France." /></figure>
      <div class="morrow-story-intro"><p>In 2014, we packed the car in Poland and drove south through Germany toward France. It was not a light version of travel: two children, ages ten and three, camping gear, and a stroller that still had to come with us almost everywhere.</p><p>Pont d'Arc felt like the wild part of the trip. The natural arch was impressive, but what stayed with me was the river, the cliffs, and the feeling that after many hours on the road we had reached a completely different rhythm.</p></div>
      <figure class="morrow-story-hero"><img src="assets/images/ogród.jpg" alt="Shaded garden terrace in Nîmes, France." /></figure>
      <article class="morrow-story-ending"><p>Nîmes gave us shade, stone terraces, green paths, and the kind of pauses that happen naturally when you travel with children. You stop for water, for snacks, for tired legs, and sometimes those stops become the part you remember best.</p></article>
      <div class="morrow-story-row"><figure class="morrow-story-photo morrow-story-photo-tall"><img src="assets/images/uliczka.JPG" alt="Busy sunlit street with cafés in Southern France." /></figure><article class="morrow-story-copy"><p>Southern French streets have their own pace. Cafés spill into narrow spaces, people sit close together, and the city feels less like a checklist and more like something you slowly pass through, stroller wheels and all.</p></article></div>
      <div class="morrow-story-row"><article class="morrow-story-copy"><p>Avignon is known for its papal history, but what I remember most is not only the Palace of the Popes. The city felt alive with artists, street performers, small markets, cafés, and people gathering in public squares.</p></article><figure class="morrow-story-photo"><img src="assets/images/Palais des Papes.JPG" alt="The Palais des Papes in Avignon, France." /></figure></div>
      <figure class="morrow-story-hero"><img src="assets/images/widok na plac.JPG" alt="View over a square in Avignon, France." /></figure>
      <article class="morrow-story-ending"><p>From above, Avignon looked historic and theatrical at the same time: old walls and rooftops, but also umbrellas, conversations, movement, and daily life happening below.</p></article>
      <figure class="morrow-story-hero"><img src="assets/images/panorama rzeki.JPG" alt="Panoramic view of the Rhône River near Avignon." /></figure>
      <article class="morrow-story-ending"><p>Looking back, this trip was not about seeing everything perfectly. It was about driving, camping, carrying bags, pushing the stroller over old stones, and discovering that family travel is rarely smooth — but often memorable because of that.</p><p><strong>Life in Motion.</strong></p></article>
    </div>`;

  const back = document.createElement("section");
  back.className = "section detail-back-row";
  back.innerHTML = `<a class="text-link" href="adventure.html">&larr; Back to Adventure Archive</a>`;

  main.append(hero, videoPanel, readPanel, back);

  const frame = document.createElement("iframe");
  frame.src = "https://www.youtube.com/embed/YS4r-pkGBzQ";
  frame.title = "Southern France YouTube Short";
  frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share";
  frame.allowFullscreen = true;
  document.getElementById("southern-france-video").append(frame);

  const buttons = main.querySelectorAll("[data-journey-view-button]");
  const panels = main.querySelectorAll("[data-journey-view-panel]");
  const setView = (viewName) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.journeyViewButton === viewName;
      button.classList.toggle("is-active", isActive);
      button.classList.toggle("primary", isActive);
      button.classList.toggle("secondary", !isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
    panels.forEach((panel) => {
      const isActive = panel.dataset.journeyViewPanel === viewName;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });
  };

  buttons.forEach((button) => button.addEventListener("click", () => setView(button.dataset.journeyViewButton)));
  setView(params.get("view") === "journey" ? "read-the-journey" : "watch-video");
}

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

renderSouthernFranceDetail();
