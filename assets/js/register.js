let x = document.getElementById('btn-toogle-selected');
let y = document.getElementById('form-login');
let z = document.getElementById('form-register');
let a = document.getElementsByClassName('main-register');


function login() {
    x.style.left = "0%";
    y.style.left = "0%";
    y.style.opacity = "100%"
    y.style.visibility = "visible";
    z.style.left = "65%";
    z.style.opacity = "0%";
    z.style.visibility = "hidden";
}

function register() {
    x.style.left = "50%";
    y.style.left = "-100%";
    y.style.opacity = "0%";
    y.style.visibility = "hidden";
    z.style.left = "40%";
    z.style.opacity = "100%";
    z.style.visibility = "visible";
}