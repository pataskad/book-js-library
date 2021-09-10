"use strict"

let myLibrary = [
    {
        title: 'Placeholder',
        author: 'Delete Me',
        pages: 123 + 'pg.',
        hasRead: 'No',
    },
]

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
    if (e.target.matches('.round-slider.rounded')) {
        Book.prototype.hasReadToggle(e)
    }
    if (e.target.matches('.remove-book-btn')) {
        deleteBook(e)
    }
    if (e.target.matches('#form-submit-btn')) {
        addBookToLibrary()
    }
    if (e.target.matches('.close-button')) {
        inputCancel()
    }
})
document.addEventListener('mouseover', (e) => {
    if (e.target.matches('#add-book-button')) {
        addBookBtn.textContent = 'New'
    } else {
        addBookBtn.textContent = '+'
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
Book.prototype.hasReadToggle = function(e) {
    let toggleReadStatusBtn = document.querySelectorAll('.toggle-read-status-btn input')
    let toggleBtnIndex = e.target.dataset.attribute
    if (toggleReadStatusBtn[toggleBtnIndex].checked == true) {
        myLibrary[toggleBtnIndex].hasRead = 'No'
        timedDelay()
    } else if (toggleReadStatusBtn[toggleBtnIndex].checked == false) {
        myLibrary[toggleBtnIndex].hasRead = 'Yes'
        timedDelay()
    }
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
function timedDelay() {
    setTimeout(function(){loopThroughLibrary()}, 300)
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
        sliderSpanToggle.dataset.attribute = `${myLibrary.indexOf(myLibrary[i])}`
        deleteBtn.textContent = 'Delete'

        if (myLibrary[i].hasRead == true || myLibrary[i].hasRead == 'Yes') {
            toggleReadStatusBtn.checked = true
        } else (
            toggleReadStatusBtn.checked = false
        )
        
        toggleReadLabel.appendChild(toggleReadStatusBtn)
        toggleReadLabel.appendChild(sliderSpanToggle)
        removeBookBtnDiv.appendChild(deleteBtn)
        removeBookBtnDiv.appendChild(toggleReadLabel)
        card.appendChild(removeBookBtnDiv)
    } 
}