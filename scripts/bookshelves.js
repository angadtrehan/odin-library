import { showBookInDom } from './domController.js';

export class Shelf {
    constructor(shelf) {
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor");
        }
        this.shelf = shelf;
        this.shelfDom = document.querySelector(`#shelf${this.shelf}`);
        this.slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        this.putBook = (book) => {
            let slot = Math.floor(Math.random() * this.slots.length);
            slot = this.slots.splice(slot)[0]; // Need to add validation for shelf filling up, this isn't working.
            console.log(`PUTTING BOOK IN SLOT ${slot} IN SHELF ${this.shelf}`);
            book.setShelf(this.shelf);
            showBookInDom(book, this.shelfDom, slot);
        };
    }
}

const bookshelves = {
    1: new Shelf(1),
    2: new Shelf(2),
    3: new Shelf(3),
    4: new Shelf(4),
    5: new Shelf(5),
    6: new Shelf(6),
    7: new Shelf(7),
    8: new Shelf(8),
    9: new Shelf(9),
    10: new Shelf(10),
    11: new Shelf(11),
    12: new Shelf(12),
    13: new Shelf(13),
    14: new Shelf(14),
    15: new Shelf(15),
    16: new Shelf(16),
}

export function placeBook(book) {
    const shelf = Math.floor(Math.random() * 16) + 1;
    bookshelves[shelf].putBook(book);
}

