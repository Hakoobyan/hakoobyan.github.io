document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function () {
        document.body.classList.toggle('menu-open');
    });

    window.closeWindowAndMenu = function () {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('open');
        document.body.classList.remove('menu-open');
    };

});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

function closeWindowAndMenu() {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}


window.onscroll = function () {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("myButton").className = "show";
    } else {
        document.getElementById("myButton").className = "";
    }
};

function goToHomePage() {
    window.location.href = "#main";
}
