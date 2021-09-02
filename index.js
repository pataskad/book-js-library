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
// fixed header to allow continous access to 'add book' button without scrolling
// data-attribute??? Data-attribute = book object index placement

const container = document.querySelector('.container')
const main = document.querySelector('main')
const modal = document.getElementById('input-modal')
// form input nodes
const bookTitleInput = document.querySelector('#book-title')
const bookAuthorInput = document.querySelector('#book-author') 
const bookPagesInput = document.querySelector('#book-pages')
const bookHasReadCheckbox = document.querySelector('#hasRead')
const formSubmitBtn = document.querySelector('#form-submit-btn')
const formErrorOutput = document.querySelector('#form-entry-error')

loopThroughLibrary()

const modalCloseBtn = document.getElementsByClassName('close-button')[0]
const addBookBtn = document.querySelector('#add-book-button')
// event listeners
addBookBtn.addEventListener('click', () => {
    modal.style.display = 'block'
    main.classList.add('blur-background')
})
addBookBtn.addEventListener('mouseover', () => {
    addBookBtn.textContent = 'New'
})
addBookBtn.addEventListener('mouseout', () => {
    addBookBtn.textContent = '+'
})
formSubmitBtn.addEventListener('click', addBookToLibrary)
modalCloseBtn.onclick = function() {
    inputCancel()
}
window.onclick = function(e) {
    if (e.target == modal) {
        inputCancel()
    }
}

function Book(title, author, pages, hasRead) { // book object constructor
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

function addBookToLibrary(title, author, pages, hasRead) {
    if (validateFormInput() == true) {
        title = bookTitleInput.value
        author = bookAuthorInput.value
        pages = bookPagesInput.value
        hasRead = (bookHasReadCheckbox.checked == true) ? 'Yes' : 'No'

        const book = new Book(title, author, pages, hasRead)
        myLibrary.push(book)
        clearFormInputs() 
        loopThroughLibrary()
        removeBlurAndModal()
        return book
    }
}
function validateFormInput() {
    if (bookTitleInput.value === '') {
        alert('Please fill out the title field')
        bookTitleInput.focus()
        return false
    }  else if (bookAuthorInput.value === '') {
        alert('Please fill out the author field')
        bookAuthorInput.focus()
        return false
    }  else if (bookPagesInput.value === '') {
        alert('Please enter a page count')
        bookPagesInput.focus()
        return false
    }
    return true
}
function deleteBook() {
    const bookToDelete = document.getAttribute('remove-book-btn')
}
function clearDisplay() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
}
function removeBlurAndModal() {
    main.classList.remove('blur-background')
    modal.style.display = 'none'
}
function clearFormInputs() {
    bookTitleInput.value = ''
    bookAuthorInput.value = ''
    bookPagesInput.value = ''
    bookHasReadCheckbox.checked = false
}
function inputCancel() {
    removeBlurAndModal()
    clearFormInputs()
}
function loopThroughLibrary() {
    clearDisplay()
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.dataset.attribute = `${myLibrary.indexOf(myLibrary[i])}`
        container.appendChild(card)
        card.innerHTML = '<h4>Title:</h4>' + '<br>' + `<p class='card-values'>${myLibrary[i].title}</p>` 
              + '<br>' + '<h4>Author:</h4>' + '<br>' + `<p class='card-values'>${myLibrary[i].author}</p>`
              + '<br>' + '<h4>Page Count:</h4>' + '<br>' + `<p class='card-values'>${myLibrary[i].pages}</p>`
              + '<br>' + '<h4>Read:</h4>' + '<br>' + `<p class='card-values'>${myLibrary[i].hasRead}</p>`
        const removeBookBtnDiv = document.createElement('div')
        removeBookBtnDiv.classList.add('remove-bookBtn-div')
        removeBookBtnDiv.innerHTML = '<button class="remove-book-btn">Delete</button>'
        card.appendChild(removeBookBtnDiv)
    } 
}