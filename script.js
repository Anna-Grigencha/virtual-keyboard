import { textarea } from './src/textarea.js';
import { title } from './src/title.js';
import { description } from './src/descriprion.js';
import { language } from './src/language.js';
import { keyboard } from './src/keyboard.js'


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
//const textarea = document.querySelector(".textarea");
console.log(keyboardKey);

document.addEventListener('keydown', function (event) {
    for (let i = 0; i < keyboardKey.length; i++) {
        console.log(event.key);
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

        if (keyboardKey[i].innerHTML === event.key && event.key !== "Shift" && event.key !== "Alt") {
            keyboardKey[i].classList.add('active');
        };
    };

    if (event.key !== "Backspace" && event.key !== "Tab" && event.key !== "CapsLock" && event.key !== "Shift" && event.key !== "Control" && event.key !== "Alt") {
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






//MouseUp occurs when the user releases the mouse button
/*for (let y of button) {
    y.addEventListener(‘mouseup’ , function () {
        y.className =”
    })
}*/
/*pace.addEventListener(‘mousedown’, function () {
    space.classList.add(‘active’)
    p.innerHTML +=” “
})*/
/*space.addEventListener(‘mouseup’, function () {
    space.classList.remove(‘active’)
})*/
/*function back() {
    Backspace.className +=’ active’
    p.innerHTML = p.innerHTML.slice(0, -1)
}*/
//onmousedown attribute fires when a mouse button is pressed down on the element
//Backspace.onmousedown = back
//onmouseup event occurs when a user releases a mouse button over an element
//Backspace.onmouseup = function () {
  //  Backspace.classList.remove(‘active’)
/*}*/