const cart = document.getElementById("cart");
cart.addEventListener("click", () => {
    if (window.location.pathname == "/") {
        window.location.href = "Cart/cart.html";
    } else {
        window.location.href = "../Cart/cart.html";
    }
});

const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
    window.location.href = "../";
});

const btnLoginSignup = document.getElementById("login-signup");
btnLoginSignup.addEventListener("click", () => {
    if (window.location.pathname == "/") {
        window.location.href = "Login/login.html";
    } else {
        window.location.href = "../Login/login.html";
    }
});