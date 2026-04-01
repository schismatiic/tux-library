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
// ===========================================================
// function addBookToLibrary() {}

console.log(defaultBook1);
console.log(defaultBook2);
console.log(defaultBook3);
