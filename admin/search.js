let table1 = document.querySelector(".product-table");

async function searchProduct() {
  let searchValue = document.querySelector(
    ".search-content input:first-child"
  ).value;
  console.log(searchValue);
  const response = await fetch(api);
  const data = await response.json();
  let count = 0;
  // console.log(data);
  table1.innerHTML = `
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
      count++;
      table1.innerHTML += `
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
}
