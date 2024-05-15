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
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myButton").className = "show";
    } else {
        document.getElementById("myButton").className = "";
    }
};

function goToHomePage() {
    window.location.href = "#main";
}
