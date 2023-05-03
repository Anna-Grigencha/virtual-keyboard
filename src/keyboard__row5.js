import { arr } from './data.js';

let key = sessionStorage.getItem('key') || 'en';

const row5 = document.createElement("div");   //новое
row5.classList.add("keyboard__row");

for (let i = 55; i < 64; i++) {
    const keyboardKey = document.createElement("div");
    keyboardKey.classList.add("keyboard__key");
    keyboardKey.classList.add("key");
    keyboardKey.classList.add("letter-row-five");
    if (i === 55) {
        keyboardKey.classList.add("ctrl-left");
    };
    if (i === 63) {
        keyboardKey.classList.add("ctrl-right");
    };
    if (i === 56) {
        keyboardKey.classList.add("win");
    };
    if (i === 57) {
        keyboardKey.classList.add("alt-left");
    };
    if (i === 59) {
        keyboardKey.classList.add("alt-right");
    };
    if (i === 60) {
        keyboardKey.classList.add("case-left");
    };
    if (i === 61) {
        keyboardKey.classList.add("case-down");
    };
    if (i === 62) {
        keyboardKey.classList.add("case-right");
    };
    if (i === 58) {
        keyboardKey.classList.add("space");
    };

    keyboardKey.textContent = arr[i][key];
    row5.append(keyboardKey);
}



export { row5 };