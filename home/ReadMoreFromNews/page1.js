let list = document.querySelector(".news-container .col-left .list-news");
const api_link = "../../ApiJson/news.json";
let nextBtn = document.querySelector("#nextBtn");
let prevBtn = document.querySelector("#prevBtn");
let perPage = 5;
let start = 0;
let curPage = 1;
let end = perPage;
let totalPage = Math.ceil(15 / perPage);
async function getNewsData() {
  const response = await fetch(api_link);
  const data = await response.json();
  // console.log(data);
  //   data.length = start;
  list.innerHTML = "";
  for (let i = start; i < end; i++) {
    list.innerHTML += `<li>
            <div class="news-img">
                <a href="./${data_link[i]}">
                    <img src="${data[i].url}" alt="">
                </a>
            </div>
                <div class="news-description">
                    <a href="./ke-dao-mo.html">${data[i].header}</a>
                    <p>${data[i].desc}</p>
                <div class="date">${data[i].date}</div>
            </div>
        </li>`;
  }
}
function getCurPage(curPage) {
  start = (curPage - 1) * perPage;
  end = curPage * perPage;
}
function renderListPage() {
  let listPage = document.querySelector(".list-num-pages");
  for (let i = 2; i <= totalPage; i++) {
    listPage.innerHTML += `<li class="pagenum"> <a> ${i}</a> </li>`;
  }
}
function changePage() {
  let page = document.querySelectorAll("ul > li.pagenum");
  for (let i = 0; i < page.length; i++) {
    page[i].addEventListener("click", () => {
      let index = i + 1;
      curPage = index;
      getCurPage(curPage);
      getNewsData();
    });
  }
  console.log(page);
}
nextBtn.addEventListener("click", () => {
  curPage++;
  if (curPage > totalPage) {
    curPage = totalPage;
  }
  getCurPage(curPage);
  getNewsData();
  console.log(start, end);
});
prevBtn.addEventListener("click", () => {
  curPage--;
  if (curPage <= 1) {
    curPage = 1;
  }
  getCurPage(curPage);
  getNewsData();
  console.log(start, end);
});
$(document).ready(function () {
  $("#nextBtn").click(function () {
    $(".temp .list-num-pages")
      .find(".pagenum.active")
      .next()
      .addClass("active");
    $(".temp .list-num-pages")
      .find(".pagenum.active")
      .prev()
      .removeClass("active");
  });
  $("#prevBtn").click(function () {
    $(".temp .list-num-pages")
      .find(".pagenum.active")
      .prev()
      .addClass("active");
    $(".temp .list-num-pages")
      .find(".pagenum.active")
      .next()
      .removeClass("active");
  });
  // $('.pagenum.active').addClass("active").siblings().removeClass("active");
  $('.pagenum').click(function(){
    $('li.pagenum').addClass("active").siblings().removeClass("active");
  })
});

renderListPage();
changePage();
getNewsData();
