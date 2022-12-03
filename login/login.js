let signupBtn = document.querySelector(".sign-up-btn");
let logIn = document.querySelector(".signup-btn");
let header = document.querySelector(".header");
let emailAppear = document.querySelector(".login-form form .input-email");
let confirmPwd = document.querySelector(".login-form form .input-confirm-password");
signupBtn.addEventListener("click", () => {
    logIn.classList.toggle("active");
    if (logIn.classList.contains("active")) {
        header.innerHTML = "Sign up";
        emailAppear.style.display = "flex";
        confirmPwd.style.display = "flex";
        header.style.marginBottom = "10px";
        signupBtn.innerHTML = "Sign in";
        // logIn.classList.toggle("active");
    } else {
        header.innerHTML = "Sign in";
        emailAppear.style.display = "none";
        confirmPwd.style.display = "none";
        // logIn.style.transform = "translate(100%,0)";
        signupBtn.innerHTML = "Sign up here";
    }
});
console.log(123);
