const myLibrary = [];
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
const crimeAndPunishment = addBookToLibrary("Punishement", "Dostoevsky", 720);
const orwell1984 = addBookToLibrary("1984", "Orwell", 336);

// =========================== TUX ===========================
tux.addEventListener("click", () => {
  tux.src = "https://media.tenor.com/S61VCO73mOAAAAAj/linux-tux.gif";
});

// ===================== RENDERIZE BOOKS =====================
const renderizeBooks = () => {
  myLibrary.forEach((book) => {
    const bookItem = document.createElement("div");

    const name = document.createElement("h3");
    const author = document.createElement("p");
    const numberOfPages = document.createElement("p");

    bookItem.className = "book";
    name.className = "book__name";
    author.className = "book__author";
    numberOfPages.className = "book__pages";

    name.textContent = `➤ ${book.name}`;
    author.textContent = `Author: ${book.author}`;
    numberOfPages.textContent = `Number of pages: ${book.numberOfPages}`;

    bookItem.appendChild(name);
    bookItem.appendChild(author);
    bookItem.appendChild(numberOfPages);
    book__box.appendChild(bookItem);
  });
};
renderizeBooks();
