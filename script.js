import { textarea } from './src/textarea.js';
import { title } from './src/title.js';
import { description } from './src/descriprion.js';
import { language } from './src/language.js';
import { keyboard } from './src/keyboard.js';
import { arr } from '../data.js';



document.querySelector("body").classList.add("page");
const page = document.querySelector(".page");

const centralizer = document.createElement("div");
centralizer.classList.add("centralizer");

page.append(centralizer);
centralizer.append(title);
centralizer.append(textarea);
centralizer.append(keyboard);
centralizer.append(description);
centralizer.append(language);



const keyboardKey = document.querySelectorAll(".keyboard__key");
const space = document.querySelector(".space");
const shiftLeft = document.querySelector(".shift-left");
const shiftRight = document.querySelector(".shift-right");
const ctrlLeft = document.querySelector(".ctrl-left");
const ctrlRight = document.querySelector(".ctrl-right");
const altLeft = document.querySelector(".alt-left");
const altRight = document.querySelector(".alt-right");
const backspace = document.querySelector(".backspace");
const capslock = document.querySelector(".capslock");
const arrowUp = document.querySelector(".case-up");
const arrowDown = document.querySelector(".case-down");
const arrowLeft = document.querySelector(".case-left");
const arrowRight = document.querySelector(".case-right");



const win = document.querySelector("win");
//const textarea = document.querySelector(".textarea");

let key = 'en';
let lang = 'en';
document.addEventListener('keydown', function (event) {
    for (let i = 0; i < keyboardKey.length; i++) {

        console.log(event.code);

        //UpperCase() method returns the value of the string converted to uppercase
        if (event.code === "Space") {
            space.classList.add('active');
        }
        if (event.code === "ControlLeft") {
            ctrlLeft.classList.add('active');
        }
        if (event.code === "ControlRight") {
            ctrlRight.classList.add('active');
        }
        if (event.code === "ShiftLeft") {
            shiftLeft.classList.add('active');
        }
        if (event.code === "ShiftRight") {
            shiftRight.classList.add('active');
        }
        if (event.code === "AltLeft") {
            altLeft.classList.add('active');
        }
        if (event.code === "AltRight") {
            altRight.classList.add('active');
        }
        if (event.code === "ArrowUp") {
            arrowUp.classList.add('active');
        }
        if (event.code === "ArrowDown") {
            arrowDown.classList.add('active');
        }
        if (event.code === "ArrowLeft") {
            arrowLeft.classList.add('active');
        }
        if (event.code === "ArrowRight") {
            arrowRight.classList.add('active');
        }
        /*  if (event.key === "MetaLeft") {
              win.classList.add('active');
          }*/

        if (keyboardKey[i].innerHTML === event.key && event.key !== "Shift" && event.key !== "Alt") {
            keyboardKey[i].classList.add('active');
        };

    };

    if (event.key === "CapsLock") {
        if (key === 'en' && lang === 'en') {
            for (let i = 0; i < keyboardKey.length; i++) {
                if (arr[i].printable === true) {
                    keyboardKey[i].innerHTML = arr[i]['EN'];
                };
            }
            key = 'EN';
        }
        else if (key === 'EN' && lang === 'en') {
            for (let i = 0; i < keyboardKey.length; i++) {
                if (arr[i].printable === true) {
                    keyboardKey[i].innerHTML = arr[i]['en'];
                };
            }
            key = 'en';
        }

        else if (key === 'ru' && lang === 'ru') {
            for (let i = 0; i < keyboardKey.length; i++) {
                if (arr[i].printable === true) {
                    keyboardKey[i].innerHTML = arr[i]['RU'];
                };
            }
            key = 'RU';
        }

        else if (key === 'RU' && lang === 'ru') {
            for (let i = 0; i < keyboardKey.length; i++) {
                if (arr[i].printable === true) {
                    keyboardKey[i].innerHTML = arr[i]['ru'];
                };
            }
            key = 'ru';
        }

        console.log(key);
    }

    if (shiftLeft.classList.contains('active') && altLeft.classList.contains('active')) {
        if (lang === 'en') {
            lang = 'ru';
            if (key === 'en') {
                for (let i = 0; i < keyboardKey.length; i++) {
                    if (arr[i].printable === true) {
                        keyboardKey[i].innerHTML = arr[i]['ru'];
                    };
                }
                key = 'ru';
            }
            else if (key === 'EN') {
                for (let i = 0; i < keyboardKey.length; i++) {
                    if (arr[i].printable === true) {
                        keyboardKey[i].innerHTML = arr[i]['RU'];
                    };
                }
                key = 'RU';
            }
        }
        else if (lang === 'ru') {
            lang = 'en';
            if (key === 'ru') {
                for (let i = 0; i < keyboardKey.length; i++) {
                    if (arr[i].printable === true) {
                        keyboardKey[i].innerHTML = arr[i]['en'];
                    };
                }
                key = 'en';
            }
            else if (key === 'RU') {
                for (let i = 0; i < keyboardKey.length; i++) {
                    if (arr[i].printable === true) {
                        keyboardKey[i].innerHTML = arr[i]['EN'];
                    };
                }
                key = 'EN';
            }
        }

    }

    if (event.key !== "Backspace" && event.key !== "Tab" && event.key !== "CapsLock" && event.key !== "Shift"
        && event.key !== "Control" && event.key !== "Alt" && event.key !== "Enter" && event.key !== "Delete"
        && event.key !== "ArrowUp" && event.key !== "ArrowDown" && event.key !== "ArrowLeft" && event.key !== "ArrowRight" && event.key !== "Meta") {
        textarea.innerHTML += event.key;
    }

    if (event.key === 'Backspace') {
        textarea.innerHTML = textarea.innerHTML.slice(0, -1);
    }
})

document.addEventListener('keyup', function () {
    for (let j = 0; j < keyboardKey.length; j++) {
        if (keyboardKey[j].classList.contains('active')) {
            keyboardKey[j].classList.remove('active')
        }
    }
})

for (let i = 0; i < keyboardKey.length; i++) {
    keyboardKey[i].addEventListener('mousedown', function () {
        keyboardKey[i].classList.add('active');
        if (arr[i].printable === true) {
            textarea.innerHTML += keyboardKey[i].innerHTML;
        }
    })
}

for (let y of keyboardKey) {
    y.addEventListener('mouseup', function () {
        y.classList.remove('active');
    })
}

space.addEventListener('mousedown', function () {
    space.classList.add('active');
    textarea.innerHTML += " ";
})

backspace.addEventListener('mousedown', function () {
    //x.classList.add('active');
    textarea.innerHTML = textarea.innerHTML.slice(0, -1);
    console.log('drhgdg');
})

/*capslock.addEventListener('mousedown', function () {
    console.log('sdljsd');
    if (key === 'en') {
        for (let i = 0; i < keyboardKey.length; i++) {
            if (arr[i].printable === true) {
                keyboardKey[i].innerHTML = arr[i]['EN'];
            };
        }
        key = 'EN';
    }
    else if (key === 'EN') {
        for (let i = 0; i < keyboardKey.length; i++) {
            if (arr[i].printable === true) {
                keyboardKey[i].innerHTML = arr[i]['en'];
            };
        }
        key = 'en';
    }
})*/






