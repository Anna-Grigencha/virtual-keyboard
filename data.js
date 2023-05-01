//"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"

const arr = [
    { 'en': '`', 'EN': '`', 'ru': 'ё', 'RU': 'Ё', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '1', 'EN': '1', 'ru': '1', 'RU': '1', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '2', 'EN': '2', 'ru': '2', 'RU': '2', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '3', 'EN': '3', 'ru': '3', 'RU': '3', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '4', 'EN': '4', 'ru': '4', 'RU': '4', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '5', 'EN': '5', 'ru': '5', 'RU': '5', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '6', 'EN': '6', 'ru': '6', 'RU': '6', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '7', 'EN': '7', 'ru': '7', 'RU': '7', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '8', 'EN': '8', 'ru': '8', 'RU': '8', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '9', 'EN': '9', 'ru': '9', 'RU': '9', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '0', 'EN': '0', 'ru': '0', 'RU': '0', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '-', 'EN': '-', 'ru': '-', 'RU': '-', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '=', 'EN': '=', 'ru': '=', 'RU': '=', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'Backspace', 'EN': 'Backspace', 'ru': 'Backspace', 'RU': 'Backspace', 'printable': false, 'size': 1, 'color': 'light' },

    { 'en': 'Tab', 'EN': 'Tab', 'ru': 'Tab', 'RU': 'Tab', 'printable': false, 'size': 1, 'color': 'light' },
    { 'en': 'q', 'EN': 'Q', 'ru': 'й', 'RU': 'Й', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'w', 'EN': 'W', 'ru': 'ц', 'RU': 'Ц', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'e', 'EN': 'E', 'ru': 'у', 'RU': 'У', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'r', 'EN': 'R', 'ru': 'к', 'RU': 'К', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 't', 'EN': 'T', 'ru': 'е', 'RU': 'Е', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'y', 'EN': 'Y', 'ru': 'н', 'RU': 'Н', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'u', 'EN': 'U', 'ru': 'г', 'RU': 'Г', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'i', 'EN': 'I', 'ru': 'ш', 'RU': 'Ш', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'o', 'EN': 'O', 'ru': 'щ', 'RU': 'Щ', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'p', 'EN': 'P', 'ru': 'з', 'RU': 'З', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '[', 'EN': '[', 'ru': 'х', 'RU': 'Х', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': ']', 'EN': ']', 'ru': 'ъ', 'RU': 'Ъ', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '/', 'EN': '/', 'ru': '/', 'RU': '/', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'Del', 'EN': 'Del', 'ru': 'Del', 'RU': 'Del', 'printable': false, 'size': 1, 'color': 'light' },

    { 'en': 'CapsLock', 'EN': 'CapsLock', 'ru': 'CapsLock', 'RU': 'CapsLock', 'printable': false, 'size': 1, 'color': 'light' },
    { 'en': 'a', 'EN': 'A', 'ru': 'ф', 'RU': 'Ф', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 's', 'EN': 'S', 'ru': 'ы', 'RU': 'Ы', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'd', 'EN': 'D', 'ru': 'в', 'RU': 'В', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'f', 'EN': 'F', 'ru': 'а', 'RU': 'А', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'g', 'EN': 'G', 'ru': 'п', 'RU': 'П', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'h', 'EN': 'H', 'ru': 'р', 'RU': 'Р', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'j', 'EN': 'J', 'ru': 'о', 'RU': 'О', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'k', 'EN': 'K', 'ru': 'л', 'RU': 'Л', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'l', 'EN': 'L', 'ru': 'д', 'RU': 'Д', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': ';', 'EN': ';', 'ru': 'ж', 'RU': 'Ж', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': "'", 'EN': "'", 'ru': 'э', 'RU': 'Э', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'Enter', 'EN': 'Enter', 'ru': 'Enter', 'RU': 'Enter', 'printable': false, 'size': 1, 'color': 'light' },

    { 'en': 'Shift', 'EN': 'Shift', 'ru': 'Shift', 'RU': 'Shift', 'printable': false, 'size': 1, 'color': 'light' },
    { 'en': 'z', 'EN': 'Z', 'ru': 'я', 'RU': 'Я', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'x', 'EN': 'X', 'ru': 'ч', 'RU': 'Ч', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'c', 'EN': 'C', 'ru': 'с', 'RU': 'С', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'v', 'EN': 'V', 'ru': 'м', 'RU': 'М', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'b', 'EN': 'B', 'ru': 'и', 'RU': 'И', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'n', 'EN': 'N', 'ru': 'т', 'RU': 'Т', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'm', 'EN': 'M', 'ru': 'ь', 'RU': 'Ь', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': ',', 'EN': ',', 'ru': 'б', 'RU': 'Б', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '.', 'EN': '.', 'ru': 'ю', 'RU': 'Ю', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '/', 'EN': '/', 'ru': '.', 'RU': '.', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': `${String.fromCharCode(9650)}`, 'EN': `${String.fromCharCode(9650)}`, 'ru': `${String.fromCharCode(9650)}`, 'RU': `${String.fromCharCode(9650)}`, 'printable': false, 'size': 1, 'color': 'light' },
    { 'en': 'Shift', 'EN': 'Shift', 'ru': 'Shift', 'RU': 'Shift', 'printable': false, 'size': 1, 'color': 'light' },

    { 'en': 'Ctrl', 'EN': 'Ctrl', 'ru': 'Ctrl', 'RU': 'Ctrl', 'printable': false, 'size': 1, 'color': 'light' },
    { 'en': 'Win', 'EN': 'Win', 'ru': 'Win', 'RU': 'Win', 'printable': false, 'size': 1, 'color': 'light' },
    { 'en': 'Alt', 'EN': 'Alt', 'ru': 'Alt', 'RU': 'Alt', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': '', 'EN': '', 'ru': '', 'RU': '', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': 'Alt', 'EN': 'Alt', 'ru': 'Alt', 'RU': 'Alt', 'printable': true, 'size': 1, 'color': 'light' },
    { 'en': `${String.fromCharCode(9664)}`, 'EN': `${String.fromCharCode(9664)}`, 'ru': `${String.fromCharCode(9664)}`, 'RU': `${String.fromCharCode(9664)}`, 'printable': false, 'size': 1, 'color': 'light' },
    { 'en': `${String.fromCharCode(9660)}`, 'EN': `${String.fromCharCode(9660)}`, 'ru': `${String.fromCharCode(9660)}`, 'RU': `${String.fromCharCode(9660)}`, 'printable': false, 'size': 1, 'color': 'light' },
    { 'en': `${String.fromCharCode(9658)}`, 'EN': `${String.fromCharCode(9658)}`, 'ru': `${String.fromCharCode(9658)}`, 'RU': `${String.fromCharCode(9658)}`, 'printable': false, 'size': 1, 'color': 'light' },
    { 'en': 'Ctrl', 'EN': 'Ctrl', 'ru': 'Ctrl', 'RU': 'Ctrl', 'printable': false, 'size': 1, 'color': 'light' }




]

//console.log(arr);
export { arr };