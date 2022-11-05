let list = document.querySelector('.news-container .col-left .list-news');

for(let i = 0;i < data.length;i++){
    list.innerHTML += `<li>
    <div class="news-img">
        <a href="./ke-dao-mo.html">
            <img src="${data[i].url}" alt="">
        </a>
    </div>
    <div class="news-description">
        <a href="./ke-dao-mo.html">${data[i].header}</a>
        <p>${data[i].desc}</p>
        <div class="date">${data[i].date}</div>
    </div>
</li>`
}