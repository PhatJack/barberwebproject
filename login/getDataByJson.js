let api = "./json-server/data.json";
let userHomepage = document.getElementById("link-login");
function login(){
    getData(handleLogin);
}
function getData(callback){
    fetch(api).then(function (res){
        return res.json().then(callback);
    }
)}
function handleLogin(data){
    let username = document.querySelector(".input-username input").value;
    let password = document.querySelector(".input-password input").value;
    data.forEach(element => {
        if(username == element.username && password == element.password){
            alert('Dang nhap thanh cong');
            // userHomepage.innerHTML = `
            //     <li><a href="./login/login.html" target="_blank" id="link-login">Xem </a></li>
            //     <li><a href="./login/login.html" target="_blank" id="link-login">Dang xuat</a></li>
            // `;
            if(username == "admin" && password == "admin"){
                window.location.href = "../admin/admin.html"
            }else{
                window.location.href = "../index.html";
            }
            let object = {
                username: element.username,
                password: element.password,
            }
            const key = JSON.stringify(object);
            localStorage.setItem("currentAccount",key);
            return true;
        }
    });
    return false;
    // localStorage.removeItem("username");
    // localStorage.removeItem("password");
}

function signup(){
    handleCreateForm()
}
function createUser(data){
    fetch(api,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(function(response){
        return response.json();
    })
    if(data){
        alert('Dang ki thanh cong');
    }else{
        alert('Dang ki that bai');
    }
}
function handleCreateForm(){
    let username = document.querySelector(".input-username input");
    let password = document.querySelector(".input-password input");
    let email = document.querySelector(".input-email input");
    let user = {
        username: username.value,
        password: password.value,
    };
    createUser(user)
}
// function newHomePage(){
//     userHomepage.innerHTML = `
//         <li><a href="./login/login.html" target="_blank" id="link-login">Xem </a></li>
//         <li><a href="./login/login.html" target="_blank" id="link-login">Dang xuat</a></li>
//     `;
// }
// export {login,handleLogin};