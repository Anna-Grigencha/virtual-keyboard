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
const win = document.querySelector("win");
//const textarea = document.querySelector(".textarea");

let key = 'en';
let lang = 'en';
document.addEventListener('keydown', function (event) {
    for (let i = 0; i < keyboardKey.length; i++) {

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
        /*  if (event.key === "MetaLeft") {
              win.classList.add('active');
          }*/

        if (keyboardKey[i].innerHTML === event.key && event.key !== "Shift" && event.key !== "Alt") {
            keyboardKey[i].classList.add('active');
        };

    };

    if (event.key === "CapsLock") {
        for (let i = 0; i < keyboardKey.length; i++) {
            // if (key === 'en') {
            console.log(key);
            if (arr[i].printable === true) {
                key = 'EN';
                keyboardKey[i].innerHTML = arr[i][key];
            };
            //  }

            /* if (arr[i].printable === true && key === 'EN') {
                 key = 'en';
                 keyboardKey[i].innerHTML = arr[i][key];
             }*/
        }
        // key = "EN"
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



for (let x of keyboardKey) {
    x.addEventListener('mousedown', function () {

        x.classList.add('active');
        textarea.innerHTML += x.innerHTML;
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






