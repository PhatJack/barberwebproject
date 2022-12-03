// import{login} from './getDataByJson'

let signupBtn = document.querySelector(".sign-up-btn");
let logIn = document.querySelector(".signup-btn");
let header = document.querySelector(".header");
let emailAppear = document.querySelector(".login-form form .input-email");
let pwdType = document.getElementById("pwd");
let confirmPwd = document.querySelector(".login-form form .input-confirm-password");
let hidePwd = document.getElementById("eyeIcon");
signupBtn.addEventListener("click", () => {
    logIn.classList.toggle("active");
    if (logIn.classList.contains("active")) {
        header.innerHTML = "Sign up";
        emailAppear.style.display = "flex";
        confirmPwd.style.display = "flex";
        header.style.marginBottom = "10px";
        signupBtn.innerHTML = "Sign in";
    } else {
        header.innerHTML = "Sign in";
        emailAppear.style.display = "none";
        confirmPwd.style.display = "none";
        signupBtn.innerHTML = "Sign up here";
        }
    });
    pwdType.addEventListener("keypress",() => {
        hidePwd.style.display = "block";
    })
hidePwd.addEventListener("click", () => {
    if(hidePwd.classList.contains("fa-eye")){
        pwdType.type = 'text';
        hidePwd.classList.remove("fa-eye");
        hidePwd.classList.add("fa-eye-slash");
    }else{
        pwdType.type = 'password';
        hidePwd.classList.add("fa-eye");
        hidePwd.classList.remove("fa-eye-slash");
    }
});
// console.log(123);
