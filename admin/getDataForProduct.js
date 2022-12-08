let table = document.querySelector(".table");
// console.log("123");
const api = "../product/O.JSON";
async function getData() {
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data);
    data.forEach((element) => {
    table.innerHTML += `
        <tbody>
            <td>${element.name}</td>
            <td>
                <div class="product-img">
                    <img src="${element.url}"/>
                </div>
            </td>
            <td>${element.category}</td>
            <td>${element.quantity}</td>
            <td class="status">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </td>
        </tbody>
        `;
    });
}

getData();
