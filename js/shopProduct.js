let shopProduct = document.querySelector(".shop-product");
const dataProduct = [
  {
    id: "1",
    img: "./img/Product/product1.png",
    name: "Barber Pomade Colmav",
    price: "$45.00",
    sale: "",
  },
  {
    id: "2",
    img: "./img/Product/product1.png",
    name: "Barber Pomade Colmav",
    price: "$45.50",
    sale: "$91.00",
  },
  {
    id: "3",
    img: "./img/Product/product1.png",
    name: "Barber Pomade Colmav",
    price: "$98.00",
    sale: "",
  },
  {
    id: "4",
    img: "./img/Product/product1.png",
    name: "Barber Pomade Colmav",
    price: "$31.58",
    sale: "$62.00"
  },
  {
    id: "5",
    img: "./img/Product/product1.png",
    name: "Barber Pomade Colmav",
    price: "$23.40",
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
                <p class="product-price"><del class="salePrice">${dataProduct[i].sale}</del>${dataProduct[i].price}</p>
            <div class="buy-btn">
              <button>Add to cart</button>
            </div>
        </div>`;
}
// let temp = document.getElementsByClassName(".sale-content");
// console.log(temp.length);
// for(let i  = 1;i < 5;i = i + 2){
//   saleContent[i].style.display = 'none';
// }