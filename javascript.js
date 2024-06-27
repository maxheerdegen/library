function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    library.push(book);
}

function displayBooksOnPage(library){
    for (book of library){
        console.log(book);
        const content = document.createElement("div");
        content.textContent = `${book.title} ${book.author} ${book.numberOfPages} ${book.read}`;
        container.appendChild(content);
    }
}

const library = [];
const container = document.querySelector(".container");

addBookToLibrary("hobbit", "Tolkien", 500, true);
addBookToLibrary("potter", "rowling", 500, true);
addBookToLibrary("xxx", "yyy", 500, true);

displayBooksOnPage(library);