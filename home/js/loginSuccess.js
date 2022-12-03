let username_home = document.getElementById("user-login-name");


const temp = localStorage.getItem("username");
console.log(temp);
username_home.innerHTML += temp;