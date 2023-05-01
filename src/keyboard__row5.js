const row5 = document.createElement("div");   //новое
row5.classList.add("keyboard__row");
const lettersRowFive = ["Ctrl", "Win", "Alt", "", "Alt", `${String.fromCharCode(9664)}`, `${String.fromCharCode(9660)}`, `${String.fromCharCode(9658)}`, "Ctrl"];

for (let i = 0; i < 9; i++) {
    const keyboardKey = document.createElement("div");
    keyboardKey.classList.add("keyboard__key");
    keyboardKey.classList.add("key");
    keyboardKey.classList.add("letter-row-five");
    if (i === 0 || i === 8) {
        keyboardKey.classList.add("ctrl");
    };
    if (i === 1) {
        keyboardKey.classList.add("win");
    };
    if (i === 2 || i === 4) {
        keyboardKey.classList.add("alt");
    }
    if (i === 5 || i === 6 || i === 7) {
        keyboardKey.classList.add("case-down");
    }
    if (i === 3) {
        keyboardKey.classList.add("space");
    };

    keyboardKey.textContent = lettersRowFive[i];
    row5.append(keyboardKey);
}



export { row5 };