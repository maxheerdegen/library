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
    while (container.lastChild){
        container.removeChild(container.lastChild);
    }
    for ( const [index, book] of library.entries()){
        console.log(book);
        const content = document.createElement("div");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        content.dataset.libraryIndex = index;
        content.textContent = `${book.title} ${book.author} ${book.numberOfPages} ${book.read}`;
        content.appendChild(deleteButton);
        container.appendChild(content);

        deleteButton.addEventListener("click", () => {
            container.removeChild(content);
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

confirmButton.addEventListener("click", (event)=>{
    event.preventDefault();
    if (newBookRead.checked){
        newBookRead.value = "yes";
    }
    addBookToLibrary(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.value);
    console.table(library);
    displayBooksOnPage(library);
    newBookForm.reset();
    newBookDialog.close();
})

cancelButton.addEventListener("click", (event) =>{
    newBookForm.reset();
})


addBookToLibrary("hobbit", "Tolkien", 500, true);
addBookToLibrary("potter", "rowling", 500, true);
addBookToLibrary("xxx", "yyy", 500, true);

displayBooksOnPage(library);