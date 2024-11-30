const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    if(this.read == false)
    {
        this.read = "Not yet read";
    }
    else
    {
        this.read = "Read";
    }
}

const cards = document.querySelector(".cards");

function addBookToLibrary(book) {
    myLibrary.push(book);
    const card = document.createElement("li");
    card.innerHTML = "<strong>Title:</strong> " + book.title + 
    "<br><strong>Author:</strong> " + book.author +
    "<br><strong>Pages:</strong> " + book.pages +
    "<br><strong>Read:</strong> " + book.read; 
    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
        const index = myLibrary.indexOf(book);
        myLibrary.splice(index, 1);
        cards.removeChild(card);
    })
    card.appendChild(remove);
    cards.appendChild(card);
    return console.table(myLibrary);

}

const dialog = document.querySelector("dialog");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const confirm = document.querySelector("#confirm");

const button = document.querySelector("button")
button.addEventListener("click", () => {
    dialog.show();
})

confirm.addEventListener("click", () => {
    if(isOnlyWhitespace(title.value) == false && isOnlyWhitespace(author.value) == false && pages.value > 0)
    {   
        let newBook = new Book(title.value, author.value, pages.value, read);
        addBookToLibrary(newBook);
    }
    title.value = "";
    author.value = "";
    pages.value = "";
})

function isOnlyWhitespace(str) {
    return str.trim() === "";
  }

