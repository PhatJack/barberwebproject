//Cart
//using JavaScript
let cartIcon = document.getElementById("cartIcon");
let cart = document.querySelector(".cart");
let closebtn = document.getElementById("close-btn");
let removeCart = document.querySelector("#cart-remove");
let overlay = document.querySelector(".over-lay");
//Close button

cartIcon.onclick = () => {
  cart.classList.add("active");
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
//Cart working JS
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

//Remove item in cart

function ready() {
  var rmCart = document.querySelectorAll("#cart-remove");
  // console.log(rmCart.length);
  for (let i = 0; i < rmCart.length; i++) {
    var button = rmCart[i];
    // button.addEventListener("click", function (event) {
    //     var btnCliked = event.target;
    //     console.log(123);
    //     btnCliked.parentElement.remove();
    //     updateTotal();
    // });
    button.addEventListener("click", removeCartItem);
  }
  var quantityInput = document.querySelectorAll(".cart-quantity");
  // console.log(quantityInput.length);
  for (var i = 0; i < quantityInput.length; i++) {
    var input = quantityInput[i];
    input.addEventListener("change", quantityChanged);
  }
}
function removeCartItem(event) {
  var btnCliked = event.target;
  btnCliked.parentElement.remove();
  updateTotal();
}
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value)) {
    input.value = 1;
  }
  updateTotal();
}

//Update total

function updateTotal() {
  var cart = document.getElementsByClassName("cart")[0];
  var total = document.getElementsByClassName("cart-total-price")[0];
  // var priceElement = document.querySelectorAll(".cart-price");
  var cartBoxes = cart.querySelectorAll(".cart-detail-box");
  // var quantityElement = document.querySelectorAll(".cart-quantity");
  var sum = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerHTML.replace("$", ""));
    // console.log(price);
    var quantity = parseFloat(quantityElement.value);
    sum += price * quantity;
    // console.log(price * quantity);
    // console.log(quantity);
    // console.log(price);
  }
  total.innerHTML = "$" + sum.toFixed(2);
}
updateTotal();
