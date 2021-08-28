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
    },
    { 
        title: 'Percy Jackson',
        author: 'Rick Riordan',
        pages: 340,
        hasRead: 'Yes',
    }
]

const container = document.querySelector('.container')

function Book(title, author, pages, hasRead) { // object constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead;
}

/* Book.prototype.hasRead = function() {
    if (hasRead === false) {
        return 'No'
    } else {
        return 'Yes'
    }
} */

function addBookToLibrary() {
    let newBook = new Book()
    myLibrary.push(newBook)

    // add user inputted values to myLibrary array as new book objects
    // once new book has been created, must start the loop again to view newly added book
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