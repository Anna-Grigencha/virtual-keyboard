const row1 = document.createElement("div");   //новое
row1.classList.add("keyboard__row");
const lettersRowOne = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"];

for (let i = 0; i < 14; i++) {
    const keyboardKey = document.createElement("div");
    keyboardKey.classList.add("keyboard__key");
    keyboardKey.classList.add("key");
    keyboardKey.classList.add("letter-row-one");
    if (i === 13) {
        keyboardKey.classList.add("backspace");
    }
    keyboardKey.textContent = lettersRowOne[i];

    row1.append(keyboardKey);
}


export { row1 };