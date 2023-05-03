import { arr } from './data.js';

let key = sessionStorage.getItem('key') || 'en';

const row4 = document.createElement("div");   //новое
row4.classList.add("keyboard__row");

for (let i = 42; i < 55; i++) {
    const keyboardKey = document.createElement("div");
    keyboardKey.classList.add("keyboard__key");
    keyboardKey.classList.add("key");
    keyboardKey.classList.add("letter-row-four");
    if (i === 42) {
        keyboardKey.classList.add("shift-left");
    }
    if (i === 54) {
        keyboardKey.classList.add("shift-right");
    }
    if (i === 53) {
        keyboardKey.classList.add("case-up");
    }

    keyboardKey.textContent = arr[i][key];
    row4.append(keyboardKey);
}



export { row4 };