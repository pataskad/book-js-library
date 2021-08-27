"use strict"

let myLibrary = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        pages: '560',
        hasRead: 'No',
    },
    {
        title: 'Game of Thrones',
        author: 'G.R.R Martin',
        pages: '1002',
        hasRead: 'No',
    }
]

const container = document.querySelector('.container')

function Book() { // constructor, need params?
    this.title = title
    this.author = author
    this.pages = pages
    hasRead = 'No';
}

function addBookToLibrary() {
    const book = new Book()
    myLibary.push(book)
    console.log(book.title, book.author, book.pages, hasRead)
}

for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    container.appendChild(card)
    card.innerHTML += '<h4>Title:</h4>' + '<br>' + `<p class='card-values'>${myLibrary[i].title}</p>` 
          + '<br>' + '<h4>Author:</h4>' + '<br>' + `<p class='card-values'>${myLibrary[i].author}</p>`
          + '<br>' + '<h4>Page Count:</h4>' + '<br>' + `<p class='card-values'>${myLibrary[i].pages}</p>`
          + '<br>' + '<h4>Read:</h4>' + '<br>' + `<p class='card-values'>${myLibrary[i].hasRead}</p>`
}