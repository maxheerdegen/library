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
const showButton = document.querySelector(".showDialog");
const newBookDialog = document.querySelector(".newBookDialog");
const newBookForm = document.querySelector(".newBookForm");
const confirmButton = document.querySelector(".confirm");


const newBookTitle = document.querySelector("#title");
const newBookAuthor = document.querySelector("#author");
const newBookPages = document.querySelector("#pages");
const newBookRead = document.querySelector("#read");

showButton.addEventListener("click", () =>{
    newBookDialog.showModal();
})

confirmButton.addEventListener("click", (event)=>{
    event.preventDefault();
    if (newBookRead.checked){
        newBookRead.value = "yes";
    }
    addBookToLibrary(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.value);
    console.table(library);
    newBookForm.reset();
    newBookDialog.close();
})


addBookToLibrary("hobbit", "Tolkien", 500, true);
addBookToLibrary("potter", "rowling", 500, true);
addBookToLibrary("xxx", "yyy", 500, true);

displayBooksOnPage(library);