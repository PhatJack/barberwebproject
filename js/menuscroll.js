const body = document.body;
const nav = document.querySelector(".container");
window.addEventListener("scroll", () => {
  const currentscroll = window.pageYOffset;
  if (currentscroll > 120) {
    // console.log(currentscroll);
    nav.classList.add("active");
  } else {
    // console.log(currentscroll);

    nav.classList.remove("active");
  }
});