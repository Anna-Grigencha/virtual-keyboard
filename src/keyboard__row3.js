const row3 = document.createElement("div");   //новое
row3.classList.add("keyboard__row");
const lettersRowThree = ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"];

for (let i = 0; i < 13; i++) {
    const keyboardKey = document.createElement("div");
    keyboardKey.classList.add("keyboard__key");
    keyboardKey.classList.add("key");
    keyboardKey.classList.add("letter-row-three");
    if (i === 0) {
        keyboardKey.classList.add("capsLock");
    }
    if (i === 12) {
        keyboardKey.classList.add("enter");
    }

    keyboardKey.textContent = lettersRowThree[i];
    row3.append(keyboardKey);
}



export { row3 };