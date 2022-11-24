const navMenu = () => {
  const hero = document.querySelector(".hero");
  const nav = document.querySelector(".list");
  const body = document.querySelector("body");
  const navlinks = document.querySelectorAll(".navbar .list li:not(.temp)");
  // toggle nav[0]
  hero.addEventListener("click", () => {
    nav.classList.toggle("active");
    // animation fade in for nav menu
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `NavFadeIn 0.5s ease forwards ${
          index / 9 + 0.5
        }s`;
      }
    });
    hero.classList.toggle("toggle");
  });
};
navMenu();
