// const navMenu = () => {
//   const hero = document.querySelector(".hero");
//   const nav = document.querySelectorAll(".list");
//   const body = document.querySelector("body");
//   const navlinks = document.querySelectorAll(".nav-left .list li");
//   // toggle nav[0]
//   hero.addEventListener("click", () => {
//     nav[0].classList.toggle("active");
//     // body.classList.toggle("body-active");
//     // animation fade in for nav menu
//     navlinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = ``;
//       }else {
//             link.style.animation = `NavFadeIn 0.5s ease forwards ${index / 7 + 0.5}s`;
//       }
//     });
//     hero.classList.toggle("toggle");
//   });
// };
// navMenu();
const body = document.body;
const nav = document.querySelector(".container");
let lastscroll = 0;
window.addEventListener("scroll", () => {
    const currentscroll = window.pageYOffset
    if(currentscroll > 120){
        nav.classList.add("active");
    }else{
        nav.classList.remove("active");
    }
})