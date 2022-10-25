const body = document.body;
const nav = document.querySelector(".container");
const scrollHome = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  const currentscroll = window.pageYOffset;
  console.log(currentscroll);
  if (currentscroll > 120) {
    // console.log(currentscroll);
    nav.classList.add("active");
    scrollHome.classList.add("active");

  } else {
    nav.classList.remove("active");
    scrollHome.classList.remove("active");

  }
});
