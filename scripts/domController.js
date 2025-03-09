const bookInfoDialog = document.querySelector(".infodiv");

export function showBookInDom(book, shelfDom, slot) {
    const randomColor = `#${Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase()}${Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase()}${Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase()}`;

    const bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.dataset.id = book.id;
    const topBook = document.createElement("div");
    topBook.className = "top-book";
    topBook.dataset.parent = book.id;
    topBook.style.backgroundColor = randomColor;
    
    const bottomBook = document.createElement("div");
    bottomBook.className = "bottom-book";
    bottomBook.dataset.parent = book.id;
    bottomBook.style.backgroundColor = randomColor;

    const bookInfoSpan = document.createElement("span");
    bookInfoSpan.className = "bookinfo";
    bookInfoSpan.style.visibility = "hidden";
    
    bookElement.appendChild(topBook);
    bookElement.appendChild(bottomBook);
    bookElement.appendChild(bookInfoSpan);
    
    shelfDom.appendChild(bookElement);

    topBook.addEventListener('mouseenter', () => {
        console.log(`Hover happened for ${topBook.dataset.parent}`);
        bookInfoSpan.style.setProperty('--book-info', `"${book.returnShortInfo()}"`);
        bookInfoSpan.style.visibility = "visible";
    });
    topBook.addEventListener('mouseleave', () => {
        console.log(`Hover happened for ${topBook.dataset.parent}`);
        bookInfoSpan.style.setProperty('--book-info', `""`);
        bookInfoSpan.style.visibility = "hidden";
    });

    topBook.addEventListener('click', () => {
        // code for bringing up details panel
        const dialog = document.createElement("dialog");
        dialog.className = "book-info-dialog";

        const information = document.createElement("div");
        information.className = "information";

        const title = document.createElement("h2");
        title.textContent = `${book.title}`;
        title.className = "title";

        const author = document.createElement("p");
        author.textContent = `by ${book.author}`;
        author.className = "author";

        const pages = document.createElement("p");
        pages.textContent = `${book.pages == "" ? "--" : book.pages} pages`;
        pages.className = "pages";

        const read = document.createElement("p");
        read.textContent = `${book.read ? "Read" : "Not Read"}`;
        read.className = "read";

        const readButton = document.createElement("button");
        readButton.className = "read-status";
        readButton.textContent = "Change Read Status";

        const closeButton = document.createElement("button");
        closeButton.className = "close";
        closeButton.textContent = "Close";

        information.appendChild(title);
        information.appendChild(author);
        information.appendChild(pages);
        information.appendChild(read);
        information.appendChild(readButton);
        information.appendChild(closeButton);
        dialog.appendChild(information);
        bookInfoDialog.appendChild(dialog);

        dialog.showModal();

        closeButton.addEventListener('click', () => {
            dialog.close();
        });

        readButton.addEventListener('click', () => {
            book.setRead(!book.read);
            read.textContent = `${book.read ? "Read" : "Not Read"}`;
        })

    });

    bottomBook.addEventListener('click', () => {
        shelfDom.removeChild(bookElement);
    })
}