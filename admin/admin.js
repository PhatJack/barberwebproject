let product_stat = document.querySelector(".product-statistics")
let menu = document.querySelectorAll(".statistics-menu li")
let content = document.querySelectorAll(".right-content-bottom")
let product = document.querySelector(".product-statistics")
let booking = document.querySelector(".booking-statistics")
let order = document.querySelector(".order-statistics")
let account = document.querySelector(".account-statistics")
let deleteBtn = document.getElementById("delete")
let editbtn = document.querySelector("td.status i#edit")
let tableThing = document.querySelector(".table")
const count = 0
menu.forEach((element) => {
    element.addEventListener("click", () => {
        menu.forEach((element) => {
            element.classList.remove("active")
        })
        element.classList.add("active")
    })
})
function changeContent(i) {
    for (let j = 0; j < content.length; j++) {
        content[j].style.display = "none"
    }
    content[i].style.display = "block"
}
function SomeDeleteRowFunction(o) {
    //no clue what to put here?
    if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        var p = o.parentNode.parentNode
        p.parentNode.removeChild(p)
    } else {
        return
    }
}
// let editTable = document.querySelector("tr");
// let editBtn = document.querySelector("i#edit");
// editBtn.addEventListener("click",() => {
//     alert('hello');
// })
async function editContent(o) {
    // let elements = document.getElementsByClassName("tr.edit-")
    let html = ""
        html = `
            <tr class="edit-form-table">
                <td class="input-field id" style="width:10%">
                    <p>Sửa ID</p>
                    <input type="number" />
                </td>
                <td class="input-field name" style="width:40%">
                    <p>Sửa tên sản phẩm</p>
                    <input type="text" />
                </td>
                <td class="input-field img" style="width:15%">
                    <p>Sửa hình ảnh</p>
                    <input type="file" />
                </td>
                <td class="input-field category" style="width:10%">
                    <p>Sửa loại</p>
                    <input type="text" />
                </td>
                <td class="input-field quantity" style="width:10%">
                    <p>Sửa số lượng</p>
                    <input type="number" />
                </td>
                <td class="input-field btn" style="width:15%">
                    <input type="submit" class="dec-btn" value="Hủy"/>
                    <input type="submit" class="acp-btn" value="Đồng ý"/>
                </td>
            </tr>
        `
    
    var p = o.parentNode.parentNode 
    // if(p.parentNode.childNodes.length)
    // console.log(elements);
    // console.log(p.parentNode.children.length);
    // if(p.parentNode.childElementCount == 1) p.parentNode.innerHTML += html;
    if(p.parentNode.childElementCount == 1) p.parentNode.insertAdjacentHTML("beforeend", html)
    
    p.nextElementSibling.classList.toggle("active");

}