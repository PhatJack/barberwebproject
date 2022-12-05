let shopProduct = document.querySelector(".shop-product");
const dataProduct = [
  {
    id: "1",
    img: "./home/img/Product/product1.png",
    name: "Barber Pomade Colmav",
    price: "450,000",
    sale: "",
  },
  {
    id: "2",
    img: "./home/img/Product/product2.png",
    name: "Barber Pomade Uban Primade",
    price: "250,000",
    sale: "300,000",
  },
  {
    id: "3",
    img: "./home/img/Product/product3.png",
    name: "Barber Pomade Reuzel",
    price: "540,000",
    sale: "",
  },
  {
    id: "4",
    img: "./home/img/Product/product4.png",
    name: "Barber Pomade Colmav",
    price: "300,000",
    sale: "380,000",
  },
  {
    id: "5",
    img: "./home/img/Product/product5.png",
    name: "Barber Pomade Suavecito",
    price: "420,000",
    sale: "",
  },
];

for (let i = 0; i < 5; i++) {
  shopProduct.innerHTML += `
        <div class="product-content">
            <div class="product-img">
                <img src="${dataProduct[i].img}" alt="">
                <span class="sale-content">sale!</span>
            </div>
                <p class="product-name">${dataProduct[i].name}</p>
                <p class="product-price"><del class="salePrice">${dataProduct[i].sale}</del>${dataProduct[i].price}VND</p>
            <div class="buy-btn">
              <button>Thêm vào giỏ hàng</button>
            </div>
        </div>`;
}