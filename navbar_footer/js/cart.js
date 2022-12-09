//Cart
//using JavaScript
let cartIcon = document.getElementById("cartIcon");
let cart = document.querySelector(".cart");
let closebtn = document.getElementById("close-btn");
let removeCart = document.querySelector("#cart-remove");
let overlay = document.querySelector(".over-lay");
displayNumberOfProductInCart();
//Close button
function displayNumberOfProductInCart() {
  let currentCart = JSON.parse(localStorage.getItem("cart"));
  let iconCart = document.querySelector(".bi-cart");
  if (currentCart.length == 0)
    iconCart.style.setProperty("--bi-cartAfterDisplay", "none");
  else {
    iconCart.style.setProperty("--bi-cartAfterDisplay", "block");
    iconCart.setAttribute("data-before", currentCart.length);
  }
}
async function addToCart() {
  let c = document.querySelector(".product-quantity input").value;
  let currentProduct = JSON.parse(localStorage.getItem("currentProduct"));
  let currentCart = JSON.parse(localStorage.getItem("cart"));
  let modal_success = document.querySelector(".successful-container");
  if (currentCart != null) {
    for (let i = 0; i < currentCart.length; i++)
      if (currentCart[i].product.name == currentProduct.name) {
        currentCart[i].count = parseInt(currentCart[i].count) + parseInt(c);
        localStorage.setItem("cart", JSON.stringify(currentCart));
        modal_success.style.display = "flex";
        await sleep(1000);
        modal_success.style.display = "none";
        return;
      }
    currentCart.push({ product: currentProduct, count: c });
    displayNumberOfProductInCart();
  } else currentCart = [{ product: currentProduct, count: c }];
  localStorage.setItem("cart", JSON.stringify(currentCart));
  modal_success.style.display = "flex";
  await sleep(1000);
  modal_success.style.display = "none";
  displayNumberOfProductInCart();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function removeProduct(index) {
  let currentCart = JSON.parse(localStorage.getItem("cart"));
  currentCart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(currentCart));
  displayNumberOfProductInCart();
  loadCart();
}
function loadCart() {
  let currentCart = JSON.parse(localStorage.getItem("cart"));
  let cart_container = document.querySelector(".cart-content-container");
  cart_container.innerHTML = ``;
  let total = 0;
  for (let i = 0; i < currentCart.length; i++) {
    total +=
      parseInt(currentCart[i].product.price) * parseInt(currentCart[i].count);
    cart_container.innerHTML += `
    <div class="cart-content">
      <img src="${currentCart[i].product.url}" alt="" class="img-cart">
        <div class="cart-detail-box">
        <div class="cart-product-title">${currentCart[i].product.name}</div>
        <div class="cart-price">${
          parseInt(currentCart[i].product.price).toLocaleString("en-US") +
          " VND"
        }</div>
        <input type="number" value="${
          currentCart[i].count
        }" class="cart-quantity" min="1" onchange="changeCount(${i}, this.value)">
      </div>
      <i class="bi bi-trash" id="cart-remove" onclick="removeProduct(${i})"></i>
    </div>`;
  }
  document.querySelector(".cart-total-price").innerHTML =
    total.toLocaleString("en-US") + " VND";
}
function changeCount(i, newCount) {
  console.log(newCount);
  let currentCart = JSON.parse(localStorage.getItem("cart"));
  console.log(currentCart);
  currentCart[i].count = newCount;
  localStorage.setItem("cart", JSON.stringify(currentCart));
  loadCart();
}
cartIcon.onclick = () => {
  cart.classList.add("active");
  overlay.style.display = "block";
  loadCart();
};
closebtn.onclick = () => {
  cart.classList.remove("active");
  overlay.style.display = "none";
};
overlay.onclick = () => {
  cart.classList.remove("active");
  overlay.style.display = "none";
};

function goToFormCheckout() {
  window.location.href = "../../product/html/form-checkout.html";
}
