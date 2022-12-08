let product_stat = document.querySelector(".product-statistics");
let menu = document.querySelectorAll(".statistics-menu li");
let content = document.querySelectorAll(".right-content-bottom");
let product = document.querySelector(".product-statistics");
let booking = document.querySelector(".booking-statistics");
let order = document.querySelector(".order-statistics");
let account = document.querySelector(".account-statistics");
const count = 0;
menu.forEach((element) => {
    element.addEventListener("click", () => {
        menu.forEach((element) => {
            element.classList.remove("active");
        });
    element.classList.add("active");
    });
});
function changeContent(i){
    for(let j = 0;j < content.length;j++){
        content[j].style.display = "none";
    }
    content[i].style.display = "block";
}