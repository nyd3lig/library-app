const display = document.querySelector(".display")
const addBookBtn = document.querySelector(".add-book")
const formWrapper = document.querySelector(".form-wrapper")
const form = document.querySelector(".form")
const closeForm = document.querySelector(".form-close")
const submitBtn = document.querySelector(".submit-button")
const checkbox = document.querySelectorAll(".onOff")

//Adds on off class to toggle button
display.addEventListener("click", (e) => {
    console.log(e.target.tagName )
    //Adds on off class to toggle button
    if(e.target.tagName === "INPUT"){
        if(e.target.className === "off"){
            e.target.classList.toggle("off")
            e.target.classList.toggle("on")
        } else{
            e.target.classList.toggle("on")
            e.target.classList.toggle("off")
        }
    }

    //Removes card
    
        if(e.target.className === "card-close"){
        e.target.parentNode.remove()
}
 
})
formWrapper.addEventListener("click", (e) => {
    console.log(e.target.tagName )
    if(e.target.tagName === "INPUT"){
        if(e.target.className === "off"){
            e.target.classList.toggle("off")
            e.target.classList.toggle("on")
        } else{
            e.target.classList.toggle("on")
            e.target.classList.toggle("off")
        }
    }
})

let myLibrary = [];
//Opens submit form
addBookBtn.addEventListener("click",() => {
    console.log("clicked")
    formWrapper.style.display = "block";
    document.querySelectorAll = "";
})

//Closes submit form
formWrapper.addEventListener("click", (e) => {
    console.log(e.target.className)
    if(e.target.className === "form-close" || e.target.className === "form-wrapper"){
        formWrapper.style.display = "none";
    }
})


//Submits submit form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = form.title.value;
    let author = form.author.value;
    let readStatus = "NOT READ";
    // if(checkbox.checked){
    //    readStatus = "READ"
    // } 
    addBook(title, author, readStatus)
    console.log(form)
    console.log(author)
    console.log(readStatus)
    console.log(myLibrary)
    console.log("this is slider " + slider.value)

    
    


})

function Book(title, author, readStatus){
    this.title = title
    this.author = author
    this.readStatus = readStatus.toUpperCase()
}

function addBook(title, author, readStatus){
    title.toUpperCase()
    readStatus.toUpperCase()
    let book = new Book(title, author, readStatus)
    myLibrary.push(book)
    displayBook()
    myLibrary = [];
}

function displayBook(){
    myLibrary.forEach(book => {
        display.innerHTML += `
        <div class="card">
        <span class="card-close">X</span>
        <p class="title">${book.title}</p>
        <p class="autor">${book.author}</p>
        <p class="read">${book.readStatus}</p>
        <div class="toggle-container">
            <input value"checked" type="checkbox"  class="off"/>
            <div class="slider round boxshadowinput"></div> 
       </div>
     </div> 
    `
    //Removes card
    
    })
}


