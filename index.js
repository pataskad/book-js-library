"use strict"

let myLibrary = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        pages: '560',
        hasRead: false,
    },
    {
        title: 'Game of Thrones',
        author: 'G.R.R Martin',
        pages: '1002',
        hasRead: false,
    }
]

const container = document.querySelector('.container')
const card = document.querySelector('.card')

function Book() { // constructor, need params?
    this.title = title
    this.author = author
    this.pages = pages
    hasRead = false;
}

function addBookToLibrary() {
    const book = Object.create(Book)
    myLibary.push(book)
    console.log(book.title, book.author, book.pages, hasRead)
}

for (let i = 0; i < myLibrary.length; i++) {
    // made a card template within this loop?
    // add 'card' class
    // reference 'etch a sketch' project and others as needed to create card within JS
/*     const card = document.createElement('div')
    card.classList.add('card') */ 
    card.textContent += myLibrary[i].title + '\n' + myLibrary[i].author + '\n'
    console.log(myLibrary[i])
}