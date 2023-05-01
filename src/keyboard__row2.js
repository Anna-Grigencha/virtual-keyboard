const row2 = document.createElement("div");   //новое
row2.classList.add("keyboard__row");
const lettersRowTwo = ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "/", "Del"];

for (let i = 0; i < 15; i++) {
    const keyboardKey = document.createElement("div");
    keyboardKey.classList.add("keyboard__key");
    keyboardKey.classList.add("key");
    keyboardKey.classList.add("letter-row-two");
    if (i === 0) {
        keyboardKey.classList.add("tab");
    }
    if (i === 14) {
        keyboardKey.classList.add("del");
    }

    keyboardKey.textContent = lettersRowTwo[i];
    row2.append(keyboardKey);
}



export { row2 };