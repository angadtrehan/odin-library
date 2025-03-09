import { placeBook } from './bookshelves.js';

export class Book {
    constructor(title, author, pages, read) {
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor");
        }
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read === "on" ? true : false;

        this.returnShortInfo = () => {
            return `${this.title}, ${this.author}.`;
        };
        this.setShelf = (shelf) => {
            this.shelf = shelf;
        }
        this.setRead = (read) => {
            this.read = read;
        }

        placeBook(this);
    }
}