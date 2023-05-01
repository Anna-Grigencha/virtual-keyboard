import { arr } from '../data.js';

let key = 'en';
const row3 = document.createElement("div");   //новое
row3.classList.add("keyboard__row");

for (let i = 29; i < 42; i++) {
    const keyboardKey = document.createElement("div");
    keyboardKey.classList.add("keyboard__key");
    keyboardKey.classList.add("key");
    keyboardKey.classList.add("letter-row-three");
    if (i === 29) {
        keyboardKey.classList.add("capsLock");
    }
    if (i === 41) {
        keyboardKey.classList.add("enter");
    }

    keyboardKey.textContent = arr[i][key];
    row3.append(keyboardKey);
}



export { row3 };