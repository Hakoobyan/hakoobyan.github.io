
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

document.getElementById('downloadBtn').addEventListener('click', function() {
    const fileUrl = '../pdf/Armen Hakobyan.pdf';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Armen Hakobyan.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});