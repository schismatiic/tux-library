let myLibrary = [];
let count = 0;
// ======================= CONSTRUCTOR =======================
function Book(id, name, author, numberOfPages, toggle, toggleRead) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.toggle = toggle;
  this.toggleRead = toggleRead;
}

// ======================== ADD BOOKS ========================
const addBookToLibrary = (name, author, numberOfPages) => {
  const newBook = new Book(
    crypto.randomUUID(),
    name,
    author,
    numberOfPages,
    true,
    false,
  );
  myLibrary.push(newBook);
  return myLibrary;
};
// ======================= REMOVE BOOK =======================
const removeBook = (array, bookId) => {
  const newArray = array.filter((book) => book.id !== bookId);
  myLibrary = newArray;
  return newArray;
};

// ====================== DEFAULT BOOKS ======================
const donQuijote = addBookToLibrary(
  "Don Quijote de la Mancha",
  "Miguel de Cervantes",
  1380,
);
const crimeAndPunishment = addBookToLibrary(
  "Crime and Punishment",
  "Fyodor Dostoevsky",
  720,
);
const orwell1984 = addBookToLibrary("1984", "George Orwell", 336);

// =========================== DOM ===========================
const tux = document.getElementById("tux");
const book__box = document.getElementById("book-container");
const addButton = document.getElementById("new-book");
const submitButton = document.getElementById("submit__button");

// ===================== RENDER BOOKS =====================
const renderBooks = (library) => {
  console.log(myLibrary);

  library.forEach((book) => {
    if (book.toggle === true) {
      const bookItem = document.createElement("div");

      const nameRender = document.createElement("h3");
      const author = document.createElement("p");
      const numberOfPages = document.createElement("p");
      const removeButton = document.createElement("button");
      const toggleReadButton = document.createElement("button");

      bookItem.className = "book";
      nameRender.className = "book__name";
      author.className = "book__author";
      numberOfPages.className = "book__pages";
      removeButton.className = "remove__button";
      toggleReadButton.className = "toggle__button";

      bookItem.setAttribute("data-bookId", `${book.id}`);
      removeButton.addEventListener("click", () => {
        const idName = bookItem.getAttribute("data-bookId");
        const newLibrary = removeBook(myLibrary, idName);
        myLibrary = newLibrary;
        count = count - 100;
        bookItem.removeChild(nameRender);
        bookItem.removeChild(author);
        bookItem.removeChild(numberOfPages);
        bookItem.removeChild(removeButton);
        bookItem.removeChild(toggleReadButton);
        book__box.removeChild(bookItem);
        renderBooks(myLibrary);
        console.log(idName);
      });
      toggleReadButton.addEventListener("click", () => {
        book.toggleRead = !book.toggleRead;
        console.log(book.toggleRead);
        if (book.toggleRead === true) {
          toggleReadButton.style.color = "rgb(0, 0, 0)";
          toggleReadButton.style.backgroundColor = "rgb(222, 7, 7)";
        } else {
          toggleReadButton.style.color = "rgb(222, 7, 7)";
          toggleReadButton.style.backgroundColor = "rgb(0, 0, 0)";
        }
        toggleReadButton.textContent =
          book.toggleRead === true ? "Read" : "Not read";
      });

      nameRender.textContent = `➤ ${book.name}`;
      author.textContent = `Author: ${book.author}`;
      numberOfPages.textContent = `Number of pages: ${book.numberOfPages}`;
      removeButton.textContent = "Remove";
      toggleReadButton.textContent =
        book.toggleRead === true ? "Read" : "Not read";

      bookItem.appendChild(nameRender);
      bookItem.appendChild(author);
      bookItem.appendChild(numberOfPages);
      bookItem.appendChild(removeButton);
      bookItem.appendChild(toggleReadButton);
      book__box.appendChild(bookItem);
      book.toggle = false;
    }
  });
};
submitButton.addEventListener("click", (event) => {
  const inputName = document.getElementById("name").value;
  const inputAuthor = document.getElementById("author").value;
  const inputNumberOfPages = document.getElementById("numberOfPages").value;
  addBookToLibrary(inputName, inputAuthor, inputNumberOfPages);
  // count++;
  // const bookToRender = myLibrary[myLibrary.length - 1];
  renderBooks(myLibrary);
});

renderBooks(myLibrary);

// =========================== TUX ===========================
tux.addEventListener("click", () => {
  tux.src = "https://media.tenor.com/S61VCO73mOAAAAAj/linux-tux.gif";
});
