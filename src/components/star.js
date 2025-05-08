gsap.registerPlugin(ScrollTrigger);

//steallr nebula
document.getElementById("condenseBtn").addEventListener("click", () => {
  gsap.to("#condenseBtn", {
    scale: 1.1,
    backgroundColor: "#16a34a",
    duration: 0.5,
  });
  document.getElementById("condenseEffect").classList.remove("hidden");
});

//protostar section
document.getElementById("igniteBtn").addEventListener("click", () => {
  const star = document.getElementById("protoStar");
  star.classList.remove("hidden");
  gsap.fromTo(
    star,
    { scale: 0.5, opacity: 0 },
    { scale: 1.2, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
  );
  gsap.to(star, {
    rotation: 360,
    repeat: -1,
    duration: 20,
    ease: "linear",
    transformOrigin: "50% 50%",
  });
});

// hydrogen depletion scroll
ScrollTrigger.create({
  trigger: "#hydrogenBar",
  start: "top bottom",
  end: "bottom top",
  scrub: true,
  onUpdate: (self) => {
    const percent = Math.max(100 - self.progress * 100, 0);
    document.getElementById("hydrogenBar").style.width = `${percent}%`;
  },
});

// title and paras animation
gsap.utils.toArray("section h1").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
});

gsap.utils.toArray("section p").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    ease: "power2.out",
  });
});
