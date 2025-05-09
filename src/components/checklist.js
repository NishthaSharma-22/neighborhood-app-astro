const missions = [
  { id: "app", text: "used an astronomy app to identify stellar objects" },
  { id: "meteor-shower", text: "watched a meteor shower" },
  { id: "moon-phases", text: "track the Moon's phases" },
  { id: "orion", text: "spot orion's belt" },
  {
    id: "star-party",
    text: "attend al local star party or public observatory night",
  },
  { id: "iss", text: "track the ISS" },
  {
    id: "capture",
    text: "tried capturing moon with phone camera (and probably failed)",
  },
  { id: "space-docu", text: "read or watch space documentaries" },
  {
    id: "interstellar",
    text: "watch the interstellar (and cry your eyes out)",
  },
  { id: "calendar", text: "keep a calendar of astronomy events" },
  { id: "zooniverse", text: "join a citizen science/Zooniverse project" },
  { id: "saturn-rings", text: "wacthed Saturn's rings through a telescope" },
  { id: "eclipse", text: "watched a solar eclipse" },
  { id: "lunar-eclipse", text: "watched a lunar eclipse" },
  { id: "ufo", text: "mistook satellites in the night sky for UFOs or drones" },
  { id: "star-vs-planet", text: "mistook a planet for a star" },
  {
    id: "explain",
    text: "explained light-years to someone and felt like a prof",
  },
  {
    id: "satellite",
    text: "found your house in a satellite image and felt powerful",
  },
  {
    id: "black-hole",
    text: "watched a black hole visualization and questioned your entire existence",
  },
  {
    id: "difference",
    text: "googled the difference between meteor, meteorite and meteoride and still got them mixed up",
  },
  { id: "telescope", text: "used a telescope" },
];

const xpPerMission = 100;
const levelDisplay = document.getElementById("level-display");
const progressBar = document.getElementById("progress-bar");

const levels = [
  { xp: 0, name: "stargazer" },
  { xp: 200, name: "moonwatcher" },
  { xp: 400, name: "sky scout" },
  { xp: 600, name: "orbit novice" },
  { xp: 800, name: "celestial adept" },
  { xp: 1000, name: "telescope tamer" },
  { xp: 1200, name: "eclipse chaser" },
  { xp: 1400, name: "planet wanderer" },
  { xp: 1600, name: "asteroid mapper" },
  { xp: 1800, name: "comet seeker" },
  { xp: 2000, name: "galactic overmind" },
];

let xp = 0;

function loadProgress() {
  missions.forEach((m) => {
    if (localStorage.getItem(m.id) === "done") {
      xp += xpPerMission;
    }
  });
}

function renderMissions() {
  const container = document.getElementById("missions");
  missions.forEach((m) => {
    const done = localStorage.getItem(m.id) === "done";
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${m.text}</h3>
      <button ${done ? "disabled" : ""} onclick="completeMission('${
      m.id
    }', this)">✔</button>
    `;
    container.appendChild(card);
  });
}

function completeMission(id, button) {
  if (localStorage.getItem(id) === "done") return;
  localStorage.setItem(id, "done");
  button.disabled = true;
  xp += xpPerMission;
  updateProgress();
}

function updateProgress() {
  const percent = Math.min((xp / (missions.length * xpPerMission)) * 100, 100);
  progressBar.style.width = percent + "%";

  let level = levels[0].name;
  for (let i = 0; i < levels.length; i++) {
    if (xp >= levels[i].xp) {
      level = levels[i].name;
    }
  }
  levelDisplay.textContent = `Level: ${level}`;
}

loadProgress();
renderMissions();
updateProgress();
