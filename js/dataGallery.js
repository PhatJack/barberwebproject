let gallery = document.getElementsByClassName("gallery-content")[0];
let beforeDocument = document.querySelector(
  ".gallery-content .gallery-img::before"
);
var dataGallery = [
  {
    id: "1",
    img: "./img/moment/img1.jpg",
    name: "Phuc Du",
  },
  {
    id: "2",
    img: "./img/moment/img2.jpg",
    name: "Tien Luat",
  },
  {
    id: "3",
    img: "./img/moment/img3.jpg",
    name: "Binh Gold",
  },
  {
    id: "4",
    img: "./img/moment/img4.jpg",
    name: "Ngo Kien Huy",
  },
  {
    id: "5",
    img: "./img/moment/img5.jpg",
    name: "Huynh Phuong",
  },
  {
    id: "6",
    img: "./img/moment/img6.jpg",
    name: "Jun Pham",
  },
  {
    id: "7",
    img: "./img/moment/img7.jpg",
    name: "Justin Timberlake",
  },
  {
    id: "8",
    img: "./img/moment/img8.jpg",
    name: "Zayn Malik",
  },
];

for (var i = 0; i < dataGallery.length; i++) {
  gallery.innerHTML += `<div class="gallery-img" data-name="${dataGallery[i].name}">
                            <img src="${dataGallery[i].img}" alt="img"">
                        </div>`;
}
// for(let i = 0;i < 8;i++){
//     beforeDocument.style.content = `${dataGallery[i].name}`;
// }
