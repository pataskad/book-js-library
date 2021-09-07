"use strict"

let myLibrary = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        pages: 560 + 'pg.',
        hasRead: 'No',
    },
    {
        title: 'Game of Thrones',
        author: 'G.R.R Martin',
        pages: 1002 + 'pg.',
        hasRead: 'No',
    },
    {   
        title: 'Percy Jackson',
        author: 'Rick Riordan',
        pages: 340 + 'pg.',
        hasRead: 'Yes'
    }
] // clear library object placeholders before submitting project code

const container = document.querySelector('.container')
const main = document.querySelector('main')
const modal = document.getElementById('input-modal')
// form input nodes
const bookTitleInput = document.querySelector('#book-title')
const bookAuthorInput = document.querySelector('#book-author') 
const bookPagesInput = document.querySelector('#book-pages')
const bookHasReadCheckbox = document.querySelector('#hasRead')
const addBookBtn = document.querySelector('#add-book-button')

loopThroughLibrary()

document.addEventListener('click', (e) => {
    if (e.target.matches('#add-book-button')) {
        modal.style.display = 'block'
        main.classList.add('blur-background')
    }
})
document.addEventListener('click', (e) => {
    if (e.target.matches('.round-slider.rounded')) {
        Book.prototype.hasReadToggle()
    }
})
document.addEventListener('mouseover', (e) => {
    if (e.target.matches('#add-book-button')) {
        addBookBtn.textContent = 'New'
    } else {
        addBookBtn.textContent = '+'
    }
})
document.addEventListener('click', (e) => {
    if (e.target.matches('.remove-book-btn')) {
        deleteBook(e)
    }
})
document.addEventListener('click', (e) => {
    if (e.target.matches('#form-submit-btn')) {
        addBookToLibrary()
    }
})
document.addEventListener('click', (e) => {
    if (e.target.matches('.close-button')) {
        inputCancel()
    }
})
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        inputCancel()
    }
})

function Book(title, author, pages, hasRead) { // book object constructor
    this.title = title
    this.author = author
    this.pages = +(pages) + 'pg.'
    this.hasRead = hasRead
}

Book.prototype.hasReadToggle = function() {
    let toggleReadStatusBtn = document.querySelector('.toggle-read-status-btn input')
    if (toggleReadStatusBtn.checked == true) {
        myLibrary[0].hasRead = 'No' // need to find index dynamically
        // updateObjectValues()
        //loopThroughLibrary() // updates view but toggle doesn't slide once refreshed
        console.log('no') // outputs correctly with toggle
    } else if (toggleReadStatusBtn.checked == false) {
        myLibrary[0].hasRead = 'Yes' // need to find index
        //loopThroughLibrary() // updates view with changes but toggle doesn't slide
        console.log('yes') // outputs correctly with toggle
    }
    // return??
}

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
function deleteBook(e) {
    let bookIndex = e.target.dataset.attribute
    myLibrary.splice(bookIndex, 1)
    loopThroughLibrary()
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
function updateObjectValues() {
    // separate function liner to update read value and still slide toggle
}
function loopThroughLibrary() {
    clearDisplay()
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        container.appendChild(card)
        card.innerHTML = '<h4>Title:</h4>' + '<br>' + `<p class='card-values'>${myLibrary[i].title}</p>` 
              + '<br>' + '<h4>Author:</h4>' + '<br>' + `<p class='card-values'>${myLibrary[i].author}</p>`
              + '<br>' + '<h4>Page Count:</h4>' + '<br>' + `<p class='card-values'>${myLibrary[i].pages}</p>`
              + '<br>' + '<h4>Read:</h4>' + '<br>' + `<p class='card-values'>${myLibrary[i].hasRead}</p>`
        const removeBookBtnDiv = document.createElement('div')
        const deleteBtn = document.createElement('button')
        const toggleReadLabel = document.createElement('label')
        const toggleReadStatusBtn = document.createElement('input')
        const sliderSpanToggle = document.createElement('span')
        sliderSpanToggle.classList.add('round-slider')
        sliderSpanToggle.classList.add('rounded')
        removeBookBtnDiv.classList.add('remove-bookBtn-div')
        deleteBtn.classList.add('remove-book-btn')
        toggleReadStatusBtn.type = 'checkbox'
        toggleReadLabel.classList.add('toggle-read-status-btn')
        deleteBtn.dataset.attribute = `${myLibrary.indexOf(myLibrary[i])}`
        deleteBtn.textContent = 'Delete'
        toggleReadLabel.appendChild(toggleReadStatusBtn)
        toggleReadLabel.appendChild(sliderSpanToggle)
        removeBookBtnDiv.appendChild(deleteBtn)
        removeBookBtnDiv.appendChild(toggleReadLabel)
        card.appendChild(removeBookBtnDiv)
    } 
}