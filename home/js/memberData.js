<<<<<<< HEAD:js/memberData.js
let ourteam = document.querySelector(".our-team .our-team-content");
const api_url = "./ApiJson/data.json";
//
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    for(let i = 0;i < data.length;i++) {
        ourteam.innerHTML += `
=======
let ourteam = document.querySelector(".our-team-content");
const api_url = "../../ApiJson/data.json";
//
async function getData() {
  const response = await fetch(api_url);
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    ourteam.innerHTML += `
>>>>>>> 17496b071a5e63fcfbf94ca40ba3283471ae6224:home/js/memberData.js
        <div class="member">
            <div class="member-photo">
                <img src="${data[i].img}" alt="">
            </div>
            <div class="member-information">
                <span class="member-name">${data[i].name}</span>
                <span class="memeber-career">-${data[i].career}-</span>
                <p>${data[i].desc}</p>
            </div>
        </div>`;
  }
  // console.log(key);
}

getData();
