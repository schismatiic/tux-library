const myLibrary = [];
function Book(id, name, author, numberOfPages) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.numberOfPages = numberOfPages;
}
// ====================== DEFAULT BOOKS ======================
const defaultBook1 = new Book(
  crypto.randomUUID(),
  "Don Quijote de la Mancha",
  "Miguel de Cervantes",
  1380,
);
const defaultBook2 = new Book(
  crypto.randomUUID(),
  "Crime and Punishement",
  "Fyodor Dostoevsky",
  720,
);
const defaultBook3 = new Book(
  crypto.randomUUID(),
  "1984",
  "George Orwell",
  336,
);
myLibrary[0] = defaultBook1;
myLibrary[1] = defaultBook2;
myLibrary[2] = defaultBook3;
// ===========================================================

// function addBookToLibrary() {}
const tux = document.getElementById("tux");
const book__box = document.getElementById("book-container");

// =========================== TUX ===========================
tux.addEventListener("click", () => {
  tux.src = "https://media.tenor.com/S61VCO73mOAAAAAj/linux-tux.gif";
});
// ===========================================================
const nuevo = document.createElement("p");

myLibrary.forEach((book, index) => {
  const bookItem = document.createElement("div");

  const name = document.createElement("h3");
  const author = document.createElement("p");
  const numberOfPages = document.createElement("p");

  bookItem.className = "book";
  name.className = "book__name";
  author.className = "book__author";
  numberOfPages.className = "book__pages";

  name.textContent = `${book.name}`;
  author.textContent = `Author: ${book.author}`;
  numberOfPages.textContent = `Number of pages: ${book.numberOfPages}`;

  bookItem.appendChild(name);
  bookItem.appendChild(author);
  bookItem.appendChild(numberOfPages);
  book__box.appendChild(bookItem);
});
