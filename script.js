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
const bookRow = document.querySelector(".book-row");
const form = document.querySelector("#library-form");
const table = document.querySelector(".myTable");

//Storing html elements in array so we can apply eventlistner once and for all
const inputForms = [bookName, pagesCount, authorName, readStatus];

/* class */
class Book {
  constructor(name, pages, author, status) {
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.status = status;
  }
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

function displayBooks() {
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

  delButton.textContent = "Delete";
  bookNameData.textContent = myLibrary[myLibrary.length - 1].name;
  bookPageData.textContent = myLibrary[myLibrary.length - 1].pages;
  bookAuthorData.textContent = myLibrary[myLibrary.length - 1].author;
  bookReadButton.textContent = myLibrary[myLibrary.length - 1].status;

  if (bookReadButton.textContent === "Read") {
    bookReadButton.style.backgroundColor = "green";
  } else {
    bookReadButton.style.backgroundColor = "rgb(167, 29, 29)";
  }
  bookReadData.appendChild(bookReadButton);
  delData.appendChild(delButton);
  bookElement.append(bookNameData, bookPageData, bookAuthorData, bookReadData, delData);
  bookRow.appendChild(bookElement);
}

function clearField() {
  inputForms.forEach((input) => {
    if (input !== readStatus) {
      input.value = "";
    }
  });
}

function addBookTOLibrary(event) {
  event.preventDefault();
  if (bookName.value.trim() === "" || pagesCount.value.trim() === "" || authorName.value.trim() === "") {
    form.classList.add("error");
  } else {
    myLibrary[myLibrary.length] = new Book(book, pages, author, bookStatus);
    displayBooks();
    form.classList.remove("error");
    clearField();
    statusButton = document.querySelectorAll(".status");
    console.log(statusButton);
  }
}

table.addEventListener("click", (event) => {
  if (event.target.classList.contains("status")) {
    const button = event.target;
    if (button.textContent === "Read") {
      button.textContent = "Not Read";
      button.style.backgroundColor = "rgb(167, 29, 29)";
    } else {
      button.textContent = "Read";
      button.style.backgroundColor = "green";
    }
  }
});

table.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const button = event.target;
    const row = button.parentNode.parentNode;
    bookRow.removeChild(row);
  }
});

submit.addEventListener("click", addBookTOLibrary);
