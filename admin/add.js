const addButton = document.querySelector(".add-content input");
const overlay = document.querySelector(".overlay");
const formAddProduct = document.querySelector("#addProduct");
function addProduct() {
  overlay.style.display = "none";
  formAddProduct.classList.remove("active");
  let content = document.querySelectorAll("#addProduct input");
  let name = content[0].value;
  let quantity = content[1].value;
  let img = content[2].value;
  let categogy = document.querySelector("#addProduct select").value;
  let table = document.querySelector(".product-table");
  table.innerHTML += `
  <tbody>
          <tr>
              <td>${table.childElementCount}</td>
              <td>${name}</td>
              <td>
                  <div class="product-img">
                      <img src="${img}"/>
                  </div>
              </td>
              <td>${categogy}</td>
              <td>${quantity}</td>
              <td class="status">
                  <i class="fa-solid fa-pen-to-square" id="edit" onclick="editContent(this)"></i>
                  <i class="fa-solid fa-trash" id="delete" onclick="SomeDeleteRowFunction(this)"></i>
              </td>
          </tr>
      </tbody>
  `;
}
addButton.addEventListener("click", function () {
  overlay.style.display = "block";
  formAddProduct.classList.add("active");
});
overlay.addEventListener("click", function () {
  console.log("yes");
  overlay.style.display = "none";
  formAddProduct.classList.remove("active");
});
