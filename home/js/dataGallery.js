let gallery = document.getElementsByClassName("gallery-content")[0];

var dataGallery = [
  {
    id: "1",
    img: "./home/img/moment/img1.jpg",
    name: "Phuc Du",
  },
  {
    id: "2",
    img: "./home/img/moment/img2.jpg",
    name: "Tien Luat",
  },
  {
    id: "3",
    img: "./home/img/moment/img3.jpg",
    name: "Binh Gold",
  },
  {
    id: "4",
    img: "./home/img/moment/img4.jpg",
    name: "Ngo Kien Huy",
  },
  {
    id: "5",
    img: "./home/img/moment/img5.jpg",
    name: "Huynh Phuong",
  },
  {
    id: "6",
    img: "./home/img/moment/img6.jpg",
    name: "Jun Pham",
  },
  {
    id: "7",
    img: "./home/img/moment/img7.jpg",
    name: "Justin Timberlake",
  },
  {
    id: "8",
    img: "./home/img/moment/img8.jpg",
    name: "Zayn Malik",
  },
];

for (var i = 0; i < 8; i++) {
  gallery.innerHTML += `<div class="gallery-img" data-name="${dataGallery[i].name}">
    <img src="${dataGallery[i].img}" alt="">
</div>`;
}
