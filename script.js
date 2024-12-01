const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    if(this.read == "false")
    {
        this.read = "Reading";
    }
    else
    {
        this.read = "Finished";
    }
}

const cards = document.querySelector(".cards");

function addBookToLibrary(book) {
    myLibrary.push(book);
    const card = document.createElement("li");
    const title_card = document.createElement("div");
    const author_card = document.createElement("div");
    const pages_card = document.createElement("div");
    const read_card = document.createElement("div");

    card.appendChild(title_card);
    card.appendChild(author_card);
    card.appendChild(pages_card);
    card.appendChild(read_card);

    title_card.innerHTML = "<strong>Title: </strong>" + book.title;
    author_card.innerHTML = "<strong>Author: </strong>" + book.author;
    pages_card.innerHTML = "<strong>Pages: </strong>" + book.pages;
    read_card.innerHTML = "<strong>Read: </strong>" + book.read;

    const finished = document.createElement("button");
    finished.textContent = "Finished reading?"
    if(book.read == "Reading")
    {
        card.appendChild(finished);
        finished.addEventListener("click", () => {
            book.read = "Finished";
            read_card.innerHTML = "<strong>Read: </strong> Finished";
            card.removeChild(finished);
        })
    }
    

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
const radios = document.getElementsByName('read');
let read;
const confirm = document.querySelector("#confirm");
const button = document.querySelector("button")
button.addEventListener("click", () => {
    dialog.show();
})

confirm.addEventListener("click", () => {
    if(isOnlyWhitespace(title.value) == false && isOnlyWhitespace(author.value) == false && pages.value > 0)
    {   
        for(let i = 0; i < radios.length; i++)
            {
                if(radios[i].checked)
                {
                    read = radios[i].value;
                }
            }
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

