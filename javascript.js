class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = pages;
    this.read = read;
    }
}

Book.prototype.changeRead = function () {
    if (this.read === "no") {
        this.read = "yes";
    }

    else {
        this.read = "no";
    }
}

function confirmModal(){
    event.preventDefault();
    if (newBookRead.checked){
        newBookRead.value = "yes";
    }
    addBookToLibrary(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.value);
    displayBooksOnPage(library);
    newBookForm.reset();
    newBookDialog.close();
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    library.push(book);
}

function displayBooksOnPage(library){
    while (container.lastChild){
        container.removeChild(container.lastChild);
    }
    for ( const [index, book] of library.entries()){
        const content = document.createElement("div");
        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const read = document.createElement("div");
        const deleteButton = document.createElement("button");
        const changeReadButton = document.createElement("button");

        deleteButton.textContent = "delete";
        changeReadButton.textContent = "read";
        content.dataset.libraryIndex = index;
        content.classList.toggle("card");
        title.textContent = `Title: ${book.title}`;
        author.textContent = `Author: ${book.author}`;
        pages.textContent = `Pages: ${book.numberOfPages}`;
        read.textContent = `Read: ${book.read}`;

        content.appendChild(title);
        content.appendChild(author);
        content.appendChild(pages);
        content.appendChild(read);
        content.appendChild(deleteButton);
        content.appendChild(changeReadButton);
        container.appendChild(content);

        deleteButton.addEventListener("click", () => {
            container.removeChild(content);
            library.splice(content.dataset.libraryIndex, 1);
            displayBooksOnPage(library);
        });

        changeReadButton.addEventListener("click", () => {
            library[content.dataset.libraryIndex].changeRead();
            read.textContent = `Read: ${book.read}`;
        })
    }
}

const library = [];
const container = document.querySelector(".container");
const showButton = document.querySelector(".showDialog");
const newBookDialog = document.querySelector(".newBookDialog");
const newBookForm = document.querySelector(".newBookForm");
const confirmButton = document.querySelector(".confirm");
const cancelButton = document.querySelector(".cancel");


const newBookTitle = document.querySelector("#title");
const newBookAuthor = document.querySelector("#author");
const newBookPages = document.querySelector("#pages");
const newBookRead = document.querySelector("#read");

showButton.addEventListener("click", () =>{
    newBookDialog.showModal();
})

confirmButton.addEventListener("click", confirmModal);

cancelButton.addEventListener("click", (event) =>{
    newBookForm.reset();
})

addBookToLibrary("hobbit", "Tolkien", 500, "yes");
addBookToLibrary("potter", "rowling", 500, "yes");
addBookToLibrary("xxx", "yyy", 500, "yes");

displayBooksOnPage(library);