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
async function editContent(o) {
    let html = ""
    html = `
            <tr class="edit-form-table">
                <td class="input-field id" style="width:10%;" onkeydown="return false;">
                    <p>Sửa ID</p>
                    <input type="number" placeholder="Không sửa"/>
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
                    <input type="submit" class="dec-btn" value="Hủy" onclick="removeEditContent(this)"/>
                    <input type="submit" class="acp-btn" value="Đồng ý" onclick="confirmEditContent(this)"/>
                </td>
            </tr>
        `
    var p = o.parentNode.parentNode
    if (p.parentNode.childElementCount == 1)
        p.parentNode.insertAdjacentHTML("beforeend", html)

    p.nextElementSibling.classList.toggle("active")
}
function removeEditContent(o){
    let p = o.parentNode.parentNode;
    p.classList.remove("active")
}
function confirmEditContent(o) {
    let p = o.parentNode.parentNode;
    // let temp = p.previousElementSibling;
    let name = document.querySelector(".name input").value;
    let img = document.querySelector(".img input").value;
    let category = document.querySelector(".category input").value;
    let quantity = document.querySelector(".quantity input").value;
    // console.log(quantity);
    let idvalue = p.previousElementSibling.querySelector("tr td:nth-child(1)");
    let namevalue = p.previousElementSibling.querySelector("tr td:nth-child(2)");
    let imgvalue = p.previousElementSibling.querySelector("tr td:nth-child(3)");
    let categoryvalue = p.previousElementSibling.querySelector("tr td:nth-child(4)");
    let quantityvalue = p.previousElementSibling.querySelector("tr td:nth-child(5)");
    idvalue.innerHTML = idvalue.innerHTML;
    namevalue.innerHTML = name;
    imgvalue.childNodes[1].childNodes[1].src = img;
    categoryvalue.innerHTML = category;
    quantityvalue.innerHTML = quantity;
    p.classList.remove("active");
    // console.log(p.previousElementSibling);
}
async function editContentBooking(o) {
    let html = ""
    html = `
    <tr class="edit-form-table">
        <td class="input-field name" style="width:20%">
            <p>Sửa tên</p>
            <input type="text" />
        </td>
        <td class="input-field phone-number" style="width:15%">
            <p>Sửa số điện thoại</p>
            <input type="number" maxlength="10"/>
        </td>
        <td class="input-field customer" style="width:10%">
            <p>Sửa số lượng KH</p>
            <input type="number" />
        </td>
        <td class="input-field branch" style="width:15%">
            <p>Sửa chi nhánh</p>
            <input type="number" />
        </td>
        <td class="input-field time" style="width:20%">
            <p>Sửa ngày</p>
            <input type="date" />
        </td>
        <td class="input-field date" style="width:10%">
            <p>Sửa thời gian</p>
            <input type="time" />
        </td>
        <td class="input-field btn" style="width:10%">
            <input type="submit" class="dec-btn" value="Hủy" onclick="removeEditContent(this)"/>
            <input type="submit" class="acp-btn" value="Đồng ý" onclick="confirmEditContentBooking(this)"/>
        </td>
    </tr>
    `
    var p = o.parentNode.parentNode
    if (p.parentNode.childElementCount == 1)
        p.parentNode.insertAdjacentHTML("beforeend", html)
    p.nextElementSibling.classList.toggle("active")
}
function confirmEditContentBooking(o) {
    let p = o.parentNode.parentNode;
    // let temp = p.previousElementSibling;
    let name = document.querySelector(".name input").value;
    let phone = document.querySelector(".phone-number input").value;
    let customer = document.querySelector(".customer input").value;
    let branch = document.querySelector(".branch input").value;
    let time = document.querySelector(".time input").value;
    let date = document.querySelector(".date input").value;
    // console.log(quantity);
    let namevalue = p.previousElementSibling.querySelector("tr td:nth-child(1)");
    let phonevalue = p.previousElementSibling.querySelector("tr td:nth-child(2)");
    let customervalue = p.previousElementSibling.querySelector("tr td:nth-child(3)");
    let branchvalue = p.previousElementSibling.querySelector("tr td:nth-child(4)");
    let timevalue = p.previousElementSibling.querySelector("tr td:nth-child(5)");
    let datevalue = p.previousElementSibling.querySelector("tr td:nth-child(6)");
    namevalue.innerHTML = name;
    phonevalue.innerHTML = phone;
    customervalue.innerHTML = customer;
    branchvalue.innerHTML = branch;
    timevalue.innerHTML = time;
    datevalue.innerHTML = date;
    p.classList.remove("active");
    // console.log(p.previousElementSibling);
}
async function editContentOrder(o) {
    let html = ""
    html = `
    <tr class="edit-form-table">
        <td class="input-field username-infor" style="width:10%">
            <p>Sửa username</p>
            <input type="text" />
        </td>
        <td class="input-field phone-number" style="width:15%">
            <p>Sửa số điện thoại</p>
            <input type="number" maxlength="10"/>
        </td>
        <td class="input-field product-name" style="width:15%">
            <p>Sửa tên SP</p>
            <input type="text" />
        </td>
        <td class="input-field quantity-item" style="width:10%">
            <p>Sửa số lượng SP</p>
            <input type="number" />
        </td>
        <td class="input-field address" style="width:20%">
            <p>Sửa địa chỉ</p>
            <input type="text" />
        </td>
        <td class="input-field btn" style="width:10%">
            <input type="submit" class="dec-btn" value="Hủy" onclick="removeEditContent(this)"/>
            <input type="submit" class="acp-btn" value="Đồng ý" onclick="confirmEditContentOrder(this)"/>
        </td>
    </tr>
    `
    var p = o.parentNode.parentNode
    if (p.parentNode.childElementCount == 1)
        p.parentNode.insertAdjacentHTML("beforeend", html)
    p.nextElementSibling.classList.toggle("active")
}
function confirmEditContentOrder(o){
    let p = o.parentNode.parentNode;
    let username = document.querySelector(".username-infor input").value;
    let phone = document.querySelector(".phone-number input").value;
    let product_name = document.querySelector(".product-name input").value;
    let quantity = document.querySelector(".quantity-item input").value;
    let address = document.querySelector(".address input").value;
    // console.log(quantity);
    let usernamevalue = p.previousElementSibling.querySelector("tr td:nth-child(1)");
    let phonevalue = p.previousElementSibling.querySelector("tr td:nth-child(2)");
    let product_namevalue = p.previousElementSibling.querySelector("tr td:nth-child(3)");
    let quantityvalue = p.previousElementSibling.querySelector("tr td:nth-child(4)");
    let addressvalue = p.previousElementSibling.querySelector("tr td:nth-child(5)");
    usernamevalue.innerHTML = username;
    phonevalue.innerHTML = phone;
    product_namevalue.innerHTML = product_name;
    quantityvalue.innerHTML = quantity;
    addressvalue.innerHTML = address;
    p.classList.remove("active");
}
async function editContentAccount(o) {
    let html = ""
    html = `
    <tr class="edit-form-table">
        <td class="input-field username-infor" style="width:20%">
            <p>Sửa username</p>
            <input type="text" />
        </td>
        <td class="input-field password" style="width:20%">
            <p>Sửa password</p>
            <input type="text"/>
        </td>
        <td class="input-field email" style="width:20%">
            <p>Sửa email</p>
            <input type="email" />
        </td>
        <td class="input-field btn" style="width:20%">
            <input type="submit" class="dec-btn" value="Hủy" onclick="removeEditContent(this)"/>
            <input type="submit" class="acp-btn" value="Đồng ý" onclick="confirmEditContentAccount(this)"/>
        </td>
    </tr>
    `
    var p = o.parentNode.parentNode
    if (p.parentNode.childElementCount == 1)
        p.parentNode.insertAdjacentHTML("beforeend", html)
    p.nextElementSibling.classList.toggle("active")
}
function confirmEditContentAccount(o){
    let p = o.parentNode.parentNode;
    let username = document.querySelector(".username-infor input").value;
    let password = document.querySelector(".password input").value;
    let email = document.querySelector(".email input").value;
    // console.log(quantity);
    let usernamevalue = p.previousElementSibling.querySelector("tr td:nth-child(1)");
    let passwordvalue = p.previousElementSibling.querySelector("tr td:nth-child(2)");
    let emailvalue = p.previousElementSibling.querySelector("tr td:nth-child(3)");
    usernamevalue.innerHTML = username;
    passwordvalue.innerHTML = password;
    emailvalue.innerHTML = email;
    p.classList.remove("active");
}