async function search() {
  let currentChoice = document.querySelectorAll(".left-content-bottom li");
  console.log(currentChoice);
  for (let i = 0; i < currentChoice.length; i++)
    if (currentChoice[i].classList.contains("active")) {
      currentChoice = i;
      break;
    }
  let searchValue = document.querySelector(
    ".search-content input:first-child"
  ).value;
  let response;
  let data;
  console.log(currentChoice);
  switch (currentChoice) {
    case 0:
      let table = document.querySelector(".product-table");
      response = await fetch(api);
      data = await response.json();
      // console.log(data);
      table.innerHTML = `
      <thead class="header-table">
        <th style="width:10%;">Id</th>
        <th style="width:40%">Tên sản phẩm</th>
        <th style="width:15%">Hình ảnh</th>
        <th style="width:10%">Loại</th>
        <th style="width:10%">Số lượng</th>
        <th style="width:15%">Trạng thái</th>
      </thead>
      `;
      data.forEach((element) => {
        if (element.name.toLowerCase().includes(searchValue.toLowerCase())) {
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
      `;
        }
      });
      break;
    case 1:
      let tableBooking = document.querySelector(".table.booking");
      tableBooking.innerHTML = `
        <thead class="header-table">
          <th style="width:20%">Họ và tên</th>
          <th style="width:15%">Số điện thoại</th>
          <th style="width:10%">Số lượng</th>
          <th style="width:15%">Chi Nhánh</th>
          <th style="width:20%">Ngày đặt lịch</th>
          <th style="width:10%">Khung giờ</th>
          <th style="width:10%">Trạng thái</th>
        </thead>
      `;
      response = await fetch(apiBooking);
      data = await response.json();
      console.log(data);
      data.forEach((element) => {
        if (element.name.toLowerCase().includes(searchValue.toLowerCase())) {
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
          `;
        }
      });
      break;
    case 2:
      let tableOrder = document.querySelector(".order");
      tableOrder.innerHTML = `
        <thead class="header-table">
          <th style="width:10%">Tài khoản</th>
          <th style="width:15%">Số điện thoại</th>
          <th style="width:15%">Sản phẩm</th>
          <th style="width:10%">Số lượng</th>
          <th style="width:20%">Địa chỉ</th>
          <th style="width:10%">Trạng thái</th>
        </thead>
      `;
      response = await fetch(apiOrder);
      data = await response.json();
      console.log(data);
      data.forEach((element) => {
        if (
          element.username.toLowerCase().includes(searchValue.toLowerCase())
        ) {
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
          `;
        }
      });
      break;
    case 3:
      let tableAccount = document.querySelector(".account");
      tableAccount.innerHTML = `
          <thead class="header-table">
            <th style="width:20%">Tài khoản</th>
            <th style="width:20%">Mật khẩu</th>
            <th style="width:20%">Email</th>
            <th style="width:20%">Trạng thái</th>
          </thead>
      `;
      response = await fetch(apiAccount);
      data = await response.json();
      data.forEach((element) => {
        if (
          element.username.toLowerCase().includes(searchValue.toLowerCase())
        ) {
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
          `;
        }
      });
      break;
  }
}
