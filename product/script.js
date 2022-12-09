//category

function goToProInfo(img) {
  var category = document.querySelector("#wrapper");
  var product_info = document.querySelector("#product-information");
  category.style.display = "none";
  product_info.style.display = "block";
  img_main = document.querySelector(".product-content-left-img > img");
  img_main.src = img.src;
}
//product-info
function change_info(nth) {
  var info_titles = document.querySelectorAll(".product-info-title > *");
  for (var i = 0; i < info_titles.length; i++)
    info_titles[i].style.border = "none";
  info_titles[nth].style.borderBottom = "3px solid #9F7150";
  var infos = document.querySelectorAll(".product-info-content > *");
  for (var i = 0; i < infos.length; i++) infos[i].style.display = "none";
  infos[nth].style.display = "block";
}
function choose_size(nth) {
  var sizes = document.querySelectorAll(".size > *");
  for (var i = 0; i < sizes.length; i++) sizes[i].style.border = "none";
  sizes[nth].style.border = "1px solid #000";
  document.querySelector(".choose_size").style.display = "none";
}

let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

var currentPageProduct = 1;
var currentProductData = [];
function createList(category) {
  currentProductData = [];
  if (category == "ALL")
    for (var i = 0; i < productData.length; i++)
      currentProductData.push(productData[i]);
  else
    for (var i = 0; i < productData.length; i++)
      if (productData[i].category.toUpperCase() == category)
        currentProductData.push(productData[i]);
}
function loadPageCategory() {
  console.log("yes");
  showSlides();
  createList("ALL");
  // console.log(currentProductData);
  showCurrentProduct();
  showCurrentDot();
  let userMenu = document.getElementById("login-menu");
  const currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
  if (currentAccount == null) {
    userMenu.innerHTML = `
        <li><a href="./login/login.html" target="_blank" id="link-login">Đăng nhập</a></li>
        `;
  } else {
    userMenu.innerHTML = `
        <li><a href="./login/login.html" target="_blank" id="link-login">Xin chào ${currentAccount.username}</a></li>
        <li><a href="#" id="link-logout" onclick="logOut()">Đăng xuất</a></li>
        `;
  }
}

function showCurrentProduct() {
  var productContainer = document.querySelector(".category .products");
  productContainer.innerHTML = ``;
  var to;
  if (currentPageProduct * 8 > currentProductData.length)
    to = currentProductData.length;
  else to = currentPageProduct * 8;
  console.log((currentPageProduct - 1) * 8, to);
  for (var i = (currentPageProduct - 1) * 8; i < to; i++) {
    productContainer.innerHTML += `<li>
            <div class="product-item" onclick="goToProductInfo(${i})">
                <div class="product-top">
                    <div href="" class="product-thumb">
                        <img src="${currentProductData[i].url}"
                            alt="product">
                    </div>
                    <!-- Mua Ngay -->
                </div>
                <div class="product-info">
                    <a href="" class="product-cat">${
                      currentProductData[i].category
                    }</a>
                    <a href="" class="product-name">${
                      currentProductData[i].name
                    }</a>
                    <div class="product-price">${numberWithCommas(
                      currentProductData[i].price
                    )} VND</div>
                </div>
            </div>
        </li>`;
  }
}
function showCurrentDot() {
  if (currentProductData.length == 0) return;
  var nDot = Math.ceil(currentProductData.length / 8);
  var paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = ``;
  paginationContainer.innerHTML += `<a onclick="leftPagination(this)">«</a>`;
  for (var i = 1; i <= nDot; i++)
    paginationContainer.innerHTML += `<a onclick="changePagination(this)">${i}</a>`;
  paginationContainer.innerHTML += `<a onclick="rightPagination(this)">»</a>`;
  var dots = document.querySelectorAll(".pagination > *");
  dots[currentPageProduct].classList.add("active");
  if (currentPageProduct == 1) dots[0].style.visibility = "hidden";
  if (currentPageProduct == nDot) dots[nDot + 1].style.visibility = "hidden";
}

function changePagination(currentDot) {
  currentPageProduct = parseInt(currentDot.innerHTML);
  showCurrentDot();
  showCurrentProduct();
}

function leftPagination() {
  if (currentPageProduct == 1) return;
  currentPageProduct -= 1;
  showCurrentDot();
  showCurrentProduct();
}
function rightPagination() {
  if (currentPageProduct == Math.ceil(currentProductData.length / 8)) return;
  currentPageProduct += 1;
  showCurrentDot();
  showCurrentProduct();
}

function filterByCategory() {
  clearPrice();
  currentPageProduct = 1;
  var categogy = document.querySelector(".filter .category").value;
  createList(categogy);
  console.log(currentProductData);
  showCurrentDot();
  showCurrentProduct();
}
function filterByPrice() {
  var categogy = document.querySelector(".filter .category").value;
  createList(categogy);
  currentPageProduct = 1;
  min = parseInt(document.querySelector(".price.min").value);
  max = parseInt(document.querySelector(".price.max").value);
  if (!isNaN(max)) {
    var tempProductData = [];
    for (var i = 0; i < currentProductData.length; i++)
      if (
        parseInt(currentProductData[i].price) >= min &&
        parseInt(currentProductData[i].price) <= max
      )
        tempProductData.push(currentProductData[i]);
    if (tempProductData.length != 0) currentProductData = tempProductData;
  }
  showCurrentProduct();
  showCurrentDot();
}
function clearPrice() {
  document.querySelector(".price.min").value = "";
  document.querySelector(".price.max").value = "";
}
function searchByName() {
  currentPageProduct = 1;
  clearPrice();
  createList("ALL");
  document.querySelector(".filter .category").value = "ALL";

  var name = document.querySelector(".search input").value;
  console.log(name);
  var tempProductData = [];
  console.log(currentProductData);
  for (var i = 0; i < currentProductData.length; i++) {
    if (currentProductData[i].name.search(name.toUpperCase()) != -1)
      tempProductData.push(currentProductData[i]);
  }
  console.log(tempProductData);
  if (tempProductData.length != 0) currentProductData = tempProductData;
  console.log(currentProductData);

  showCurrentProduct();
  showCurrentDot();
}
function goToProductInfo(idProduct) {
  console.log(idProduct);
  console.log(currentProductData[idProduct]);
  localStorage.setItem(
    "currentProduct",
    JSON.stringify(currentProductData[idProduct])
  );
  window.location.href = "product-info.html";
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function loadPageProductInfo() {
  var product = JSON.parse(localStorage.getItem("currentProduct"));
  console.log(product);
  document.querySelector(".product-content-left-img img").src = product.url;
  document.querySelector(".product-name h2").innerHTML = product.name;
  document.querySelector(".product-price p").innerHTML =
    numberWithCommas(product.price) + " VND";
  document.querySelector(".product-info-content-details").innerHTML =
    productDetails[Math.floor(Math.random() * 5)];
  let userMenu = document.getElementById("login-menu");
  const currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
  if (currentAccount == null) {
    userMenu.innerHTML = `
        <li><a href="./login/login.html" target="_blank" id="link-login">Đăng nhập</a></li>
        `;
  } else {
    userMenu.innerHTML = `
        <li><a href="./login/login.html" target="_blank" id="link-login">Xin chào ${currentAccount.username}</a></li>
        <li><a href="#" id="link-logout" onclick="logOut()">Đăng xuất</a></li>
        `;
  }
}
//mouse-move
let item = document.querySelector(".product-content-left-img");
function scaleImg(index) {
  index.onmouseover = (event) => {
    let temp = event.target;
    temp.style.transform = "scale(2)";
  };
  index.onmouseout = (event) => {
    let temp = event.target;
    temp.style.transform = "scale(1)";
  };
  index.addEventListener("mousemove", (event) => {
    let temp = event.target;
    var x = event.clientX;
    var y = event.clientY;
    var xPoint = ((x - item.offsetLeft) / item.clientWidth) * 100;
    var yPoint = ((y - item.offsetTop) / item.clientHeight) * 100;
    // item.style.transform = "rotate(90deg)";
    temp.style.transformOrigin = xPoint + "% " + yPoint + "%";
    console.log(xPoint, yPoint);
  });
}
scaleImg(item);

function loadPageFormCheckout() {
  let product_list_container = document.querySelector(".product-list");
  let current_cart = JSON.parse(localStorage.getItem("cart"));
  product_list_container.innerHTML = ``;
  for (let i = 0; i < current_cart.length; i++) {
    product_list_container.innerHTML += `
      <div class="product-table">
      <div class="product">
        <div class="product-image">
          <div class="product-thumbnail">
            <div class="product-thumbnail-wrapper">
              <img style="width: 150px;" class="product-thumbnail-image" alt=""
                src="${current_cart[i].product.url}">
              <span class="product-thumbnail-quantity" aria-hidden="true">${
                current_cart[i].count
              }</span>
            </div>
          </div>
        </div>
        <div class="product-description">
          <span class="price-per-product">${
            parseInt(current_cart[i].product.price).toLocaleString("en-US") +
            " VND/1 sản phẩm."
          }</span>
          <span class="product-description-name order-summary-emphasis">${
            current_cart[i].product.name
          }</span>
          <span class="product-size" style="color: #969696">113 gram</span>
        </div>
        <div class="product-price">
          <span class="order-summary-emphasis" style="text-align: right;">${
            (
              parseInt(current_cart[i].product.price) *
              parseInt(current_cart[i].count)
            ).toLocaleString("en-US") + " VND"
          }</span>
        </div>
      </div>
    </div>`;
  }
  calTotal();
}
function calTotal() {
  let current_cart = JSON.parse(localStorage.getItem("cart"));
  let total_container = document.querySelector(
    ".total-line-subtotal .total-line-price span"
  );
  let total_all_container = document.querySelector(".payment-due-price");
  console.log(total_container);
  let total = 0;
  for (let i = 0; i < current_cart.length; i++) {
    total +=
      parseInt(current_cart[i].product.price) * parseInt(current_cart[i].count);
  }
  total_container.innerHTML = total.toLocaleString("en-US") + " ₫";
  total_all_container.innerHTML =
    (total + 100000).toLocaleString("en-US") + " ₫";
}
