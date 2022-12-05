//Cart
//using JavaScript
let cartIcon = document.getElementById("cartIcon");
let cart = document.querySelector(".cart");
let closebtn = document.getElementById("close-btn");
let removeCart = document.querySelector("#cart-remove");
let overlay = document.querySelector(".over-lay");
//Close button
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
  } else currentCart = [{ product: currentProduct, count: c }];
  localStorage.setItem("cart", JSON.stringify(currentCart));
  modal_success.style.display = "flex";
  await sleep(1000);
  modal_success.style.display = "none";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function removeProduct(index) {
  let currentCart = JSON.parse(localStorage.getItem("cart"));
  currentCart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(currentCart));
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
  loadCart();
  overlay.style.display = "block";
};
closebtn.onclick = () => {
  cart.classList.remove("active");
  overlay.style.display = "none";
};
overlay.onclick = () => {
  cart.classList.remove("active");
  overlay.style.display = "none";
};

function goToFormCheckout(from) {
  switch (from) {
    case "home":
      window.location.href = "./product/html/form-checkout.html";
    case "course":
      window.location.href = "../../product/html/form-checkout.html";
    case "album":
      window.location.href = "../product/html/form-checkout.html";
    case "booking":
      window.location.href = "../product/html/form-checkout.html";
    case "product":
      window.location.href = "./form-checkout.html";
  }
}
// //Cart working JS
// if (document.readyState === "loading") {
//   document.addEventListener("DOMContentLoaded", ready);
// } else {
//   ready();
// }

// //Remove item in cart

// function ready() {
//   var rmCart = document.querySelectorAll("#cart-remove");
//   // console.log(rmCart.length);
//   for (let i = 0; i < rmCart.length; i++) {
//     var button = rmCart[i];
//     // button.addEventListener("click", function (event) {
//     //     var btnCliked = event.target;
//     //     console.log(123);
//     //     btnCliked.parentElement.remove();
//     //     updateTotal();
//     // });
//     button.addEventListener("click", removeCartItem);
//   }
//   var quantityInput = document.querySelectorAll(".cart-quantity");
//   // console.log(quantityInput.length);
//   for (var i = 0; i < quantityInput.length; i++) {
//     var input = quantityInput[i];
//     input.addEventListener("change", quantityChanged);
//   }
// }
// function removeCartItem(event) {
//   var btnCliked = event.target;
//   btnCliked.parentElement.remove();
//   updateTotal();
// }
// function quantityChanged(event) {
//   var input = event.target;
//   if (isNaN(input.value)) {
//     input.value = 1;
//   }
//   updateTotal();
// }

// //Update total

// function updateTotal() {
//   var cart = document.getElementsByClassName("cart")[0];
//   var total = document.getElementsByClassName("cart-total-price")[0];
//   // var priceElement = document.querySelectorAll(".cart-price");
//   var cartBoxes = cart.querySelectorAll(".cart-detail-box");
//   // var quantityElement = document.querySelectorAll(".cart-quantity");
//   var sum = 0;
//   for (let i = 0; i < cartBoxes.length; i++) {
//     var cartBox = cartBoxes[i];
//     var priceElement = cartBox.getElementsByClassName("cart-price")[0];
//     var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
//     var price = parseFloat(priceElement.innerHTML.replace("$", ""));
//     // console.log(price);
//     var quantity = parseFloat(quantityElement.value);
//     sum += price * quantity;
//     // console.log(price * quantity);
//     // console.log(quantity);
//     // console.log(price);
//   }
//   total.innerHTML = "$" + sum.toFixed(2);
// }
// updateTotal();
