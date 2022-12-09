let table = document.querySelector(".product-table")
let tableBooking = document.querySelector(".booking")
let tableOrder = document.querySelector(".order")
let tableAccount = document.querySelector(".account")
// console.log("123");
const api = "../product/O.JSON"
const apiBooking = "../ApiJson/booking.json"
const apiOrder = "../ApiJson/order.json"
const apiAccount = "../login/json-server/data.json"
async function getData() {
    const response = await fetch(api)
    const data = await response.json()
    // console.log(data);
    data.forEach((element) => {
        table.innerHTML += `
        <tbody>
            <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>
                    <div class="product-img">
                        <img src="${element.url}"/>
                    </div>
                </td>
                <td>${element.category}</td>
                <td>${element.quantity}</td>
                <td class="status">
                    <i class="fa-solid fa-pen-to-square" id="edit" onclick="editContent(this)"></i>
                    <i class="fa-solid fa-trash" id="delete" onclick="SomeDeleteRowFunction(this)"></i>
                </td>
            </tr>
        </tbody>
        `
    })
}
async function getDataBooking() {
    const response = await fetch(apiBooking)
    const data = await response.json()
    data.forEach((element) => {
        tableBooking.innerHTML += `
            <tbody>
            <tr>
            <td>${element.name}</td>
            <td>${element.phone}</td>
            <td>${element.numberOfCustomer}</td>
            <td>Chi Nhánh ${element.branch}</td>
            <td>${element.date}</td>
            <td>${element.time}</td>
            <td class="status">
                <i class="fa-solid fa-pen-to-square" id="edit" onclick="editContentBooking(this)"></i>
                <i class="fa-solid fa-trash" id="delete" onclick="SomeDeleteRowFunction(this)"></i>
            </td>
            </tr>
    </tbody>
        `
    })
}
async function getDataOrder() {
    var temp
    const response = await fetch(apiOrder)
    const data = await response.json()
    data.forEach((element) => {
        tableOrder.innerHTML += `
            <tbody>
            <tr>
            <td>${element.username}</td>
            <td>${element.phone}</td>
            <td>${element.product[element.product.length - 1].id}</td>
            <td>${element.product[element.product.length - 1].count}</td>
            <td>${element.address}</td>
            <td class="status">
                <i class="fa-solid fa-pen-to-square" id="edit" onclick="editContentOrder(this)"></i>
                <i class="fa-solid fa-trash" id="delete" onclick="SomeDeleteRowFunction(this)"></i>
            </td>
            </tr>
    </tbody>
        `
    })
}
async function getDataAccount() {
    const response = await fetch(apiAccount)
    const data = await response.json()
    data.forEach((element) => {
        tableAccount.innerHTML += `
            <tbody>
            <tr>
            <td>${element.username}</td>
            <td>${element.password}</td>
            <td>${element.email}</td>
            <td class="status">
                <i class="fa-solid fa-pen-to-square" id="edit" onclick="editContentAccount(this)"></i>
                <i class="fa-solid fa-trash" id="delete" onclick="SomeDeleteRowFunction(this)"></i>
            </td>
            </tr>
    </tbody>
        `
    })
}
getData()
getDataBooking()
getDataOrder()
getDataAccount()
