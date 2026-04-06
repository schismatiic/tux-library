const myLibrary = [];
let count = 0;
// ======================= CONSTRUCTOR =======================
function Book(id, name, author, numberOfPages) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.numberOfPages = numberOfPages;
}

// =========================== DOM ===========================
const tux = document.getElementById("tux");
const book__box = document.getElementById("book-container");
const addButton = document.getElementById("new-book");
const submitButton = document.getElementById("submit__button");

// ======================== ADD BOOKS ========================
const addBookToLibrary = (name, author, numberOfPages) => {
  const newBook = new Book(crypto.randomUUID(), name, author, numberOfPages);
  myLibrary.push(newBook);
  return myLibrary;
};

// ====================== DEFAULT BOOKS ======================
const donQuijote = addBookToLibrary(
  "Don Quijote de la Mancha",
  "Miguel de Cervantes",
  1380,
);
const crimeAndPunishment = addBookToLibrary(
  "Crime and Punishment",
  "Dostoevsky",
  720,
);
const orwell1984 = addBookToLibrary("1984", "Orwell", 336);

// =========================== TUX ===========================
tux.addEventListener("click", () => {
  tux.src = "https://media.tenor.com/S61VCO73mOAAAAAj/linux-tux.gif";
});

// ===================== RENDER BOOKS =====================

const renderBooks = (addedBook) => {
  if (count === 0) {
    myLibrary.forEach((book) => {
      const bookItem = document.createElement("div");

      const name = document.createElement("h3");
      const author = document.createElement("p");
      const numberOfPages = document.createElement("p");
      const removeButton = document.createElement("button");

      bookItem.className = "book";
      name.className = "book__name";
      author.className = "book__author";
      numberOfPages.className = "book__pages";
      removeButton.className = "remove__button";

      name.textContent = `➤ ${book.name}`;
      author.textContent = `Author: ${book.author}`;
      numberOfPages.textContent = `Number of pages: ${book.numberOfPages}`;
      removeButton.textContent = "Remove";

      bookItem.appendChild(name);
      bookItem.appendChild(author);
      bookItem.appendChild(numberOfPages);
      bookItem.appendChild(removeButton);
      book__box.appendChild(bookItem);
    });
  } else {
    const bookItem = document.createElement("div");

    const name = document.createElement("h3");
    const author = document.createElement("p");
    const numberOfPages = document.createElement("p");

    bookItem.className = "book";
    name.className = "book__name";
    author.className = "book__author";
    numberOfPages.className = "book__pages";

    name.textContent = `➤ ${addedBook.name}`;
    author.textContent = `Author: ${addedBook.author}`;
    numberOfPages.textContent = `Number of pages: ${addedBook.numberOfPages}`;

    bookItem.appendChild(name);
    bookItem.appendChild(author);
    bookItem.appendChild(numberOfPages);
    book__box.appendChild(bookItem);
  }
};
submitButton.addEventListener("click", (event) => {
  const inputName = document.getElementById("name").value;
  const inputAuthor = document.getElementById("author").value;
  const inputNumberOfPages = document.getElementById("numberOfPages").value;
  addBookToLibrary(inputName, inputAuthor, inputNumberOfPages);
  count++;
  const bookToRender = myLibrary[myLibrary.length - 1];
  renderBooks(bookToRender);
});
renderBooks();
