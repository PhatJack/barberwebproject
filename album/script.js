function changeHairStyle() {
    var add = document.querySelector(".add")
    var btn = document.querySelector(".btn")
    var style = document.querySelector("#style")
    if (add.style.display == "grid") {
        console.log("grid")
        add.style.display = "none"
        btn.innerHTML = "Thêm"
        style.scrollIntoView({
            behavior: "smooth"
        })
    }
    else {
        console.log("none")
        add.style.display = "grid"
        btn.innerHTML = "Thu gọn"
        add.scrollIntoView({
            behavior: "smooth"
        });
    }
}


