//Array that holds the Book objects
let myLibrary = [];

//initialization and declaration of variables that holds Book object properties
let book, pages, author;
let bookStatus = "Read";

//selecting elements from html
const submit = document.querySelector(".submit-button");
const bookName = document.querySelector("#book-name");
const pagesCount = document.querySelector("#pages");
const authorName = document.querySelector("#author");
const readStatus = document.querySelector("#read");

//Storing html elements in array so we can apply eventlistner once and for all
const inputForms = [bookName, pagesCount, authorName, readStatus];

//Object Constructor
function Book(name, pages, author, status) {
  this.name = name;
  this.pages = pages;
  this.author = author;
  this.status = status;
}

//listening the event for the array we created above
inputForms.forEach((input) => {
  addEventListener("change", (event) => {
    if (input === bookName) {
      book = input.value;
    } else if (input === pagesCount) {
      pages = input.value;
    } else if (input === authorName) {
      author = input.value;
    } else {
      bookStatus = input.value;
    }
  });
});

function addBookTOLibrary(event) {
  /*  event.preventDefault(); */
  myLibrary[myLibrary.length] = new Book(book, pages, author, bookStatus);
  console.log(myLibrary[length - 1]);
  /*   displayBooks(); */
}

/* function displayBooks() {
  const bookElement = document.createElement("tr");
  const bookNameData = document.createElement("td");
  const bookPageData = document.createElement("td");
  const bookAuthorData = document.createElement("td");
  const bookReadData = document.createElement("td");
  const bookReadButton = document.createElement("button");
  bookReadButton.className = "status";
  const delData = document.createElement("td");
  const delButton = document.createElement("button");
  delButton.className = "delete";

  bookElement.textContent = myLibrary[myLibrary.length - 1].Book.name;
} */

submit.addEventListener("click", addBookTOLibrary);
