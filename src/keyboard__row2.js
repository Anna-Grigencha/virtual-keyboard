import { arr } from '../data.js';

let key = 'en';

const row2 = document.createElement("div");   //новое
row2.classList.add("keyboard__row");
//const lettersRowTwo = ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/", "Del"];

for (let i = 14; i < 29; i++) {
    const keyboardKey = document.createElement("div");
    keyboardKey.classList.add("keyboard__key");
    keyboardKey.classList.add("key");
    keyboardKey.classList.add("letter-row-two");
    if (i === 14) {
        keyboardKey.classList.add("tab");
    }
    if (i === 28) {
        keyboardKey.classList.add("del");
    }

    keyboardKey.textContent = arr[i][key];
    row2.append(keyboardKey);
}



export { row2 };