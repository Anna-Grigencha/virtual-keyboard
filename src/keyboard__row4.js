const row4 = document.createElement("div");   //новое
row4.classList.add("keyboard__row");
const lettersRowFour = ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", `${String.fromCharCode(9650)}`, "Shift"];

for (let i = 0; i < 13; i++) {
    const keyboardKey = document.createElement("div");
    keyboardKey.classList.add("keyboard__key");
    keyboardKey.classList.add("key");
    keyboardKey.classList.add("letter-row-four");
    if (i === 0) {
        keyboardKey.classList.add("shift-left");
    }
    if (i === 12) {
        keyboardKey.classList.add("shift-right");
    }
    if (i === 11) {
        keyboardKey.classList.add("case-down");
    }

    keyboardKey.textContent = lettersRowFour[i];
    row4.append(keyboardKey);
}



export { row4 };