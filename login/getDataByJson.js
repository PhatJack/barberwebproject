let api = "http://localhost:3000/user";

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
            window.location.href = "../index.html";
            localStorage.setItem("username", element.username);
            localStorage.setItem("password", element.password);
            localStorage.setItem("email", element.email);
        }
    });
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
    }
}
function handleCreateForm(){
    let username = document.querySelector(".input-username input");
    let password = document.querySelector(".input-password input");
    let email = document.querySelector(".input-email input");
    let user = {
        username: username.value,
        password: password.value,
        email: email.value,
    };
    createUser(user)
}
