window.onscroll = function () {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("myButton").className = "show";
    } else {
        document.getElementById("myButton").className = "";
    }
};



function goToHomePage() {
    const targetElement = document.getElementById("main");

    if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
            top: offsetTop,
        });

        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
}


document.getElementById('downloadBtn').addEventListener('click', function () {
    const fileUrl = 'path/pdf/Armen Hakobyan.pdf';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Armen Hakobyan.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});


window.addEventListener('load', function () {
    if (performance.navigation.type === 1) {
        window.location.href = "./";
    }
});

var words = [
    'Web Developer',
    'Freelancer',
    'Debugger'
];
var letters = "abcdefghijklmnopqrstuvwxyz#%&^+=-",
    speed = 200,
    steps = 4,
    loader = document.querySelector('#loader');
var wordIndex = 0;

function getNextWord() {
    var word = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
    return word;
}

function getRandomLetter() {
    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    return randomLetter;
}

function randomWordLoop() {
    var word = getNextWord();
    var textLength = word.length;
    for (var i = 0; i < textLength; i++) {
        (function (i, word) {
            letterAppear(i, word);
        })(i, word)
    }

    function letterAppear(i, word) {
        setTimeout(function () {
            randomLetters(i, word);
        }, speed * i);
    }

    function randomLetters(i, word) {
        for (var j = 0; j <= steps; j++) {
            charsAnim(i, word, j);
        }
    }

    function charsAnim(i, word, j) {
        setTimeout(function () {
            var count = j;
            if (j < steps) {
                randomChar(i, word, count, j);
            } else {
                goodChar(i, word, count, j);
            }
        }, ((speed / steps) * j) - (speed / steps));
    }

    function randomChar(i, word, count, j) {
        var letter = getRandomLetter();
        if (j > 0) {
            var oldText = loader.textContent.slice(0, -1);
        } else {
            var oldText = loader.textContent;
        }
        loader.textContent = oldText + letter;
    }
    function goodChar(i, word, count, j) {
        var oldText = loader.textContent.slice(0, -1);
        loader.textContent = oldText + word[i];
        if (i == textLength - 1) {
            removeWord();
        }
    }

    function removeWord() {
        setTimeout(function () {
            for (var k = 0; k < textLength; k++) {
                removeLetters(k);
            }
        }, speed * 2);
    }
    function removeLetters(k) {
        setTimeout(function () {
            removeLetter(k);
        }, 75 * k);
    }
    function removeLetter(k) {
        var actualText = loader.textContent.slice(0, -1);
        loader.textContent = actualText;
        if (k == textLength - 1) {
            randomWordLoop();
        }
    }
}

randomWordLoop();



document.addEventListener("DOMContentLoaded", () => {
    const Projects = document.querySelector("Projects");
    const Experience = document.querySelector("Experience");
    const Contact = document.querySelector("Contact");
    const links = document.querySelectorAll("a[href^='#']");
    
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - (Projects ? Projects.offsetHeight : 0);
                const offsetTop1 = targetElement.offsetTop - (Experience ? Experience.offsetHeight : 0);
                const offsetTop2 = targetElement.offsetTop - (Contact ? Contact.offsetHeight : 0);
                window.scrollTo({
                    top: offsetTop,
                    top: offsetTop1,
                    top: offsetTop2,
                });
                history.pushState(null, '', window.location.pathname + window.location.search);
            }
        });
    });
});