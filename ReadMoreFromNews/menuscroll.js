const body = document.body;
const nav = document.querySelector(".nav-container");
const scrollHome = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  const currentscroll = window.pageYOffset;
  console.log(currentscroll);
  if (currentscroll > 200) {
    // console.log(currentscroll);
    nav.classList.add("active");
    scrollHome.classList.add("active");

  } else {
    nav.classList.remove("active");
    scrollHome.classList.remove("active");

  }
});
