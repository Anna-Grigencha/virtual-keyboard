import { arr } from './data.js';

let key = 'en';

const row1 = document.createElement("div");   //новое
row1.classList.add("keyboard__row");

for (let i = 0; i < 14; i++) {
    const keyboardKey = document.createElement("div");
    keyboardKey.classList.add("keyboard__key");
    keyboardKey.classList.add("key");
    keyboardKey.classList.add("letter-row-one");
    if (i === 13) {
        keyboardKey.classList.add("backspace");
    }

    keyboardKey.textContent = arr[i][key];

    row1.append(keyboardKey);
}


export { row1 };