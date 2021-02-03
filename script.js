let display = document.querySelector(".display")
const formWrapper = document.querySelector(".form-wrapper")
const form = document.querySelector(".form")
const closeForm = document.querySelector(".form-close")
const submitBtn = document.querySelector(".submit-button")
const formToggleButton = document.querySelector(".form-toggle-button")
const emptyLibrary = document.querySelector("#empty-library")
const readP = document.querySelector(".read")


let myLibrary = [];

display.addEventListener("click", (e) => {
    toggleButtonTextChangeDisplay(e)
    toggleOnOff(e)

    //Removes card
    if (e.target.className === "card-close") {
        e.target.parentNode.remove()
        checksLibrary()
    }

})
//Adds on off class to toggle button on form
formWrapper.addEventListener("click", (e) => {
    toggleOnOff(e)
})



//Opens submit form
document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.classList.contains("add-book")) {
        formWrapper.style.display = "block";
    }
})


//Closes submit form
formWrapper.addEventListener("click", (e) => {
    if (e.target.className === "form-close" || e.target.className === "form-wrapper") {
        formWrapper.style.display = "none";


    }
    if (e.target.type === "checkbox") {
        toggleButtonTextChangeForm(e)
    }


})


//Submits submit form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checksLibrary(e)
    let title = form.title.value;
    let author = form.author.value;
    let readStatus = "Not Read"
    let checkboxState = ""
    let btnState = "off"


    if (formToggleButton.classList.contains("on")) {
        readStatus = "Read"
        checkboxState = "checked"
        btnState = "on"
    }
    addBook(title, author, readStatus, checkboxState, btnState)



    formWrapper.style.display = "none";
    form.reset()

})



function Book(title, author, readStatus, checkboxState, btnState) {
    this.title = title
    this.author = author
    this.readStatus = readStatus
    this.checkboxState = checkboxState
    this.btnState = btnState
}



function addBook(title, author, readStatus, checkboxState, btnState) {
    let book = new Book(title, author, readStatus, checkboxState, btnState)
    myLibrary.push(book)
    displayBook()
    myLibrary = [];
}

function displayBook() {
    myLibrary.forEach(book => {
        display.innerHTML += `
        <div class="card">
        <span class="card-close">X</span>
        <p class="title">${book.title}</p>
        <p class="autor">${book.author}</p>
        <p class="read">${book.readStatus}</p>
        <div class="toggle-container" >
            
            <input ${book.checkboxState} value"checked" type="checkbox" class="${book.btnState}" />
            <div class="slider round boxshadowinput"></div> 
       </div>
     </div> 
    `


    })
}

function toggleButtonTextChangeDisplay(e) {
    let children = e.target.parentNode.parentNode.children;
    if (e.target.className === "off") {
        children[3].innerText = "Read";

    } else if (e.target.className === "on") {
        children[3].innerText = "Not Read"

    }
}

function toggleButtonTextChangeForm(e) {
    let state = e.target.parentNode.parentNode.children[5].textContent;
    if (state === "Not Read") {
        e.target.parentNode.parentNode.children[5].textContent = "Read";
    } else {
        e.target.parentNode.parentNode.children[5].textContent = "Not Read";
    }


}

function toggleOnOff(event) {
    if (event.target.tagName === "INPUT") {
        if (event.target.className === "off") {
            event.target.classList.toggle("off")
            event.target.classList.toggle("on")
        } else {
            event.target.classList.toggle("on")
            event.target.classList.toggle("off")
        }
    }
}

function checksLibrary(e) {
    let storage = emptyLibrary;
    if (display.children.length >= 1) {
        emptyLibrary.remove();
    } else {
        display.appendChild(storage);
    }

}