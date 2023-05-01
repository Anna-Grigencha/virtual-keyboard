import { textarea } from './src/textarea.js';
import { title } from './src/title.js';
import { description } from './src/descriprion.js';
import { language } from './src/language.js';
import { keyboard } from './src/keyboard.js'


document.querySelector("body").classList.add("page");
const page = document.querySelector(".page");

const centralizer = document.createElement("div");
centralizer.classList.add("centralizer");

page.append(centralizer);
centralizer.append(title);
centralizer.append(textarea);
centralizer.append(keyboard);
centralizer.append(description);
centralizer.append(language);






