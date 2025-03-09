import { Book } from './book.js'

const dialogue = document.querySelector("body > dialog");
const form = document.querySelector("body > dialog form");
const submitButton = document.querySelector("body > dialog button");
const closeButton = document.querySelector("#close-btn");
const addButton = document.querySelector("#add-book");

let counter = 0;
const MAX_VALUE = 20*16;

addButton.addEventListener('click', () => {
    dialogue.showModal();
});

dialogue.addEventListener('close', () => {
    console.log(`Return: ${dialogue.returnValue}`);
    if (counter === MAX_VALUE) {
        alert("Your library is full. Can't add any more books without removing some");
    }
    const bookData = JSON.parse(dialogue.returnValue);
    const book = new Book(bookData.name, bookData.author, bookData.pages, bookData.read);
    console.log(`Book: ${book.returnShortInfo()}`);
    counter++;
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    dialogue.close(JSON.stringify(values));
});

closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    dialogue.close();
});

