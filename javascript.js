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

const library = [];

addBookToLibrary("hobbit", "Tolkien", 500, true);
addBookToLibrary("potter", "rowling", 500, true);
addBookToLibrary("xxx", "yyy", 500, true);

console.table(library);