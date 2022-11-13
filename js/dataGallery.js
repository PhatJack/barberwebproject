let gallery = document.getElementsByClassName("gallery-content")[0];

var dataGallery = [
    {
        "id" : "1",
        "img": "./img/4200.webp",
    },
    {
        "id" : "2",
        "img": "./img/4200.webp",
    },
    {
        "id" : "3",
        "img": "./img/4200.webp",
    },
    {
        "id" : "4",
        "img": "./img/4200.webp",
    },
    {
        "id" : "5",
        "img": "./img/4200.webp",
    },
    {
        "id" : "6",
        "img": "./img/4200.webp",
    },
    {
        "id" : "7",
        "img": "./img/4200.webp",
    },
    {
        "id" : "8",
        "img": "./img/4200.webp",
    },
]

for(var i = 0;i < 8;i++){
    gallery.innerHTML += `<div class="gallery-img">
    <img src="${dataGallery[i].img}" alt="">
</div>`;
}