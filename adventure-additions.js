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
    "A family road trip from Poland through Germany to Southern France — Pont d'Arc, Nîmes, Avignon, camping fields, and small moments along the way.",
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

function addSouthernFranceStyles() {
  if (document.getElementById("southern-france-styles")) return;
  const style = document.createElement("style");
  style.id = "southern-france-styles";
  style.textContent = `
    .sf-story { display: grid; gap: clamp(26px, 5vw, 52px); }
    .sf-photo { margin: 0; overflow: hidden; border-radius: var(--radius); background: var(--sand-soft); box-shadow: var(--shadow); }
    .sf-photo img { display: block; width: 100%; height: 100%; object-fit: cover; }
    .sf-wide img { aspect-ratio: 16 / 8; }
    .sf-row { display: grid; grid-template-columns: minmax(240px, 0.95fr) minmax(0, 1.05fr); gap: clamp(22px, 4vw, 44px); align-items: center; }
    .sf-row.reverse { grid-template-columns: minmax(0, 1.05fr) minmax(240px, 0.95fr); }
    .sf-copy { display: grid; gap: 14px; padding: clamp(22px, 4vw, 38px); background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius); }
    .sf-copy h3 { margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(1.55rem, 2.4vw, 2.25rem); font-weight: 500; line-height: 1.12; color: var(--ink); }
    .sf-copy p { margin: 0; color: var(--muted); font-size: 1.04rem; line-height: 1.78; }
    .sf-note { max-width: 760px; margin-inline: auto; padding: clamp(22px, 4vw, 36px); background: rgba(229, 210, 175, 0.22); border-radius: var(--radius); }
    .sf-note p { margin: 0; color: var(--muted); font-size: 1.06rem; line-height: 1.78; }
    .sf-note p + p { margin-top: 14px; }
    @media (max-width: 760px) { .sf-row, .sf-row.reverse { grid-template-columns: 1fr; } .sf-wide img, .sf-photo img { aspect-ratio: 4 / 3; } }
  `;
  document.head.append(style);
}

function renderSouthernFranceDetail() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("story") !== "southern-france") return;

  const main = document.querySelector("main.archive-page");
  if (!main) return;

  addSouthernFranceStyles();
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
    <div class="journey-video-embed"><iframe src="https://www.youtube.com/embed/YS4r-pkGBzQ" title="Southern France YouTube Short" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;

  const readPanel = document.createElement("section");
  readPanel.className = "section journey-section journey-view-panel";
  readPanel.dataset.journeyViewPanel = "read-the-journey";
  readPanel.hidden = true;
  readPanel.innerHTML = `
    <div class="section-heading"><p class="eyebrow">Read the Journey</p><h2>A summer road trip, remembered in small pieces.</h2><p>Not a guidebook version of Southern France, but the version that stayed with me: campsites, long drives, children, old stones, hot streets, and small pauses along the way.</p></div>
    <div class="sf-story">
      <div class="sf-row"><figure class="sf-photo"><img src="assets/images/Pont d'Arc.JPG" alt="Pont d'Arc natural arch over the Ardèche River." /></figure><article class="sf-copy"><h3>Pont d'Arc</h3><p>In 2014, we packed the car in Poland and drove south through Germany toward France. It was not a light version of travel: two children, ages ten and three, camping gear, and a stroller that still had to come with us almost everywhere.</p><p>Pont d'Arc felt like the wild part of the trip. The arch was impressive, but what stayed with me was the river, the cliffs, and the feeling that after many hours on the road we had reached a different rhythm.</p></article></div>
      <div class="sf-row reverse"><article class="sf-copy"><h3>Nîmes</h3><p>Nîmes gave us shade, stone terraces, green paths, and the kind of pauses that happen naturally when you travel with children.</p><p>You stop for water, for snacks, for tired legs, and sometimes those stops become the part you remember best.</p></article><figure class="sf-photo"><img src="assets/images/ogród.jpg" alt="Shaded garden terrace in Nîmes." /></figure></div>
      <div class="sf-row"><figure class="sf-photo"><img src="assets/images/uliczka.JPG" alt="Busy street with cafés in Southern France." /></figure><article class="sf-copy"><h3>Between cafés and stroller wheels</h3><p>Southern French streets have their own pace. Cafés spill into narrow spaces, people sit close together, and the city feels less like a checklist and more like something you slowly pass through.</p><p>With a stroller, you notice different things: shade, curbs, small squares, and where everyone else has decided to stop for a while.</p></article></div>
      <div class="sf-row reverse"><article class="sf-copy"><h3>Avignon</h3><p>Avignon is known for its papal history, but what I remember most is not only the Palace of the Popes.</p><p>The city felt alive with artists, street performers, small markets, cafés, and people gathering in public squares. The history was there, but the present was just as visible.</p></article><figure class="sf-photo"><img src="assets/images/Palais des Papes.JPG" alt="The Palais des Papes in Avignon." /></figure></div>
      <figure class="sf-photo sf-wide"><img src="assets/images/widok na plac.JPG" alt="View over a square in Avignon." /></figure>
      <article class="sf-note"><p>From above, Avignon looked historic and theatrical at the same time: old walls and rooftops, but also umbrellas, conversations, movement, and daily life happening below.</p></article>
      <figure class="sf-photo sf-wide"><img src="assets/images/panorama rzeki.JPG" alt="Panoramic view of the Rhône River near Avignon." /></figure>
      <article class="sf-note"><p>Looking back, this trip was not about seeing everything perfectly. It was about driving, camping, carrying bags, pushing the stroller over old stones, and discovering that family travel is rarely smooth — but often memorable because of that.</p><p><strong>Life in Motion.</strong></p></article>
    </div>`;

  const back = document.createElement("section");
  back.className = "section detail-back-row";
  back.innerHTML = `<a class="text-link" href="adventure.html">&larr; Back to Adventure Archive</a>`;

  main.append(hero, videoPanel, readPanel, back);

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
