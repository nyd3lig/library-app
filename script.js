const display = document.querySelector(".display")
const addBookBtn = document.querySelector(".add-book")
const formWrapper = document.querySelector(".form-wrapper")
const closeForm = document.querySelector(".form-close")
const submitBtn = document.querySelector(".submit-button")

let myLibrary = [
    {title: "Long ass book title on the book",
    author: "author",
    readStatus: "read"
    },
    {
        title: "title2",
        author: "Another author",
        readStatus: ""
    }
];
//Opens submit form
addBookBtn.addEventListener("click",() => {
    console.log("clicked")
    formWrapper.style.display = "block";
})

//Closes submit form
formWrapper.addEventListener("click", (e) => {
    console.log(e.target.className)
    if(e.target.className === "form-close" || e.target.className === "form-wrapper"){
        formWrapper.style.display = "none";
    }
})

//Submits submit form
submitBtn.addEventListener("clic", (e) => {
    console.log(e.value)
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
    console.log(myLibrary)
}

function displayBook(){
    myLibrary.forEach(book => {
        display.innerHTML += `
        <div class="display">
        <div class="card">
           <p class="title">${book.title}</p>
           <p class="autor">${book.author}</p>
           <p class="read">${book.readStatus}</p>
        </div>
    </div>`
    })
}


