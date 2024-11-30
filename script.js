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

const book1 = new Book("title-test", "auhtor-test", 100, true);
const book2 = new Book("title-test2", "auhtor-test2", 1200, false);

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);

const cards = document.querySelector(".cards");
for(let i = 0; i < myLibrary.length; i++)
    {
        const card = document.createElement("li");
        card.innerHTML = "<strong>Title:</strong> " + myLibrary[i].title + 
        "<br><strong>Author:</strong> " + myLibrary[i].author +
        "<br><strong>Pages:</strong> " + myLibrary[i].pages + 
        "<br><strong>Read:</strong> " + myLibrary[i].read; 
        cards.appendChild(card);
    }


