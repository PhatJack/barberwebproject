function loadPage() {
  var styleContainer = document.querySelector("#style .container");
  for (var i = 0; i < parseInt(styleData.length / 2); i++) {
    styleContainer.innerHTML += `<div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img src="${styleData[i].url}" alt="${styleData[i].name}">
                </div>
                <div class="flip-box-back">
                    <h2>${styleData[i].name}</h2>
                    <p>${styleData[i].desc}</p>
                </div>
            </div>
        </div>`;
  }
}
function changeHairStyle() {
  var style = document.querySelector("#style");
  var styleContainer = document.querySelector("#style .container");
  var btn = document.querySelector("#style .btn");
  var wall = document.querySelector("#wall");

  console.log(btn.innerHTML);
  if (btn.innerHTML == "Thêm") {
    for (var i = parseInt(styleData.length / 2); i < styleData.length; i++) {
      styleContainer.innerHTML += `<div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <img src="${styleData[i].url}" alt="${styleData[i].name}">
                    </div>
                    <div class="flip-box-back">
                        <h2>${styleData[i].name}</h2>
                        <p>${styleData[i].desc}</p>
                    </div>
                </div>
            </div>`;
    }
    btn.innerHTML = "Thu gọn";
    style.scrollIntoView(false);
  } else {
    styleContainer.innerHTML = ``;
    loadPage();
    style.scrollIntoView(true);
    btn.innerHTML = "Thêm";
  }
}
function next() {
  var lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
}
function prev() {
  var lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
}
