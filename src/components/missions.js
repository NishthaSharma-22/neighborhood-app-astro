const missions = document.querySelectorAll(".mission");
const cards = document.querySelectorAll(".card");
const bgOverlay = document.getElementById("background-overlay");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bg = entry.target.getAttribute("data-bg");
        bgOverlay.style.backgroundImage = bg;

        cards.forEach((card) => card.classList.remove("active"));
        const card = entry.target.querySelector(".card");
        if (card) card.classList.add("active");
      }
    });
  },
  {
    threshold: 0.6,
  }
);

missions.forEach((mission) => observer.observe(mission));
