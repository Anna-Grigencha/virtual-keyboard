import { row1 } from "./keyboard__row1.js";
import { row2 } from "./keyboard__row2.js";
import { row3 } from "./keyboard__row3.js";
import { row4 } from "./keyboard__row4.js";
import { row5 } from "./keyboard__row5.js";
//import { rows } from "./keyboard__rows.js";



const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");


keyboard.append(row1);
keyboard.append(row2);
keyboard.append(row3);
keyboard.append(row4);
keyboard.append(row5);
//keyboard.append(rows);






export { keyboard };