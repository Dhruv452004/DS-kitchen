let darklightmode = document.querySelector(".darklightmode");
let body = document.querySelector("body");

let mode = "light";

darklightmode.addEventListener("click", function () {
    if (mode === "light") {
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});


const burger = document.querySelector('.burger');
const navC = document.querySelector('.navContainer');
const nav = document.querySelector('.nav');
const call = document.querySelector('.call');

burger.addEventListener('click', () => {
    nav.classList.toggle('visibility-class');
    call.classList.toggle('visibility-class');
    navC.classList.toggle('h-nav');
})
