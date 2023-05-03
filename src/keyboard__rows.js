import { arr } from './data.js';

let key = sessionStorage.getItem('key') || 'en';

const rows = document.createElement("div");   //новое
rows.classList.add("keyboard__row");

for (let i = 0; i < 64; i++) {
    const keyboardKey = document.createElement("div");
    keyboardKey.classList.add("keyboard__key");
    keyboardKey.classList.add("key");
    keyboardKey.classList.add("letter-row-one");
    if (i === 13) {
        keyboardKey.classList.add("backspace");
    }

    keyboardKey.textContent = arr[i][key];

    rows.append(keyboardKey);
}


export { rows };