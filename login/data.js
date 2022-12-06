// import{login,handleLogin} from './getDataByJson.js';
let signinBtn = document.getElementsByClassName("signin-btn")[0];
const userMenu = document.getElementById("login-menu");
// let logOutBtn = document.getElementById("link-logout");
let api = "./json-server/data.json";

// fetchAPI(api);
// function loginStatus(){
//     const key = localStorage.getItem("currentAccount");
//     const temp = JSON.parse(JSON.stringify(key));
//     console.log(temp);
// }

// loginStatus();
window.onload = () => {
    // console.log('run');
    // console.log(userMenu);
    const currentAccount = JSON.parse(localStorage.getItem("currentAccount"));
    if(currentAccount == null){
        userMenu.innerHTML = `
        <li><a href="./login/login.html" target="_blank" id="link-login">Đăng nhập</a></li>
        `;
    }else{
        userMenu.innerHTML = `
        <li><a href="./login/login.html" target="_blank" id="link-login">Xin chào ${currentAccount.username}</a></li>
        <li><a href="#" id="link-logout" onclick="logOut()">Đăng xuất</a></li>
        `
    }
}

// logOutBtn.addEventListener("click",() => {
//     confirm("Are you sure you want to log out");
//     localStorage.setItem("currentAccount",JSON.stringify(null));
// window.location.href = "./login/login.html";
// })
function logOut(){
            confirm("Are you sure you want to log out");
            localStorage.setItem("currentAccount",JSON.stringify(null));
        window.location.href = "./login/login.html";
    }
// console.log(logOutBtn);
// function checkLogout(){
//     if()
// }