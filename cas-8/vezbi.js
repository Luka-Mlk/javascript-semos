"use strict";
const books = JSON.parse(localStorage.getItem("books")) || [];
function addBook(event) {
  event.preventDefault();
  console.log(event);
  const author = document.getElementById("author");
  const name = document.getElementById("name");
  const year = document.getElementById("year");
  const book = {
    author: author.value,
    name: name.value,
    year: year.value,
  };
  //   alternativen nacin na pisuvanje na ^^
  //   const book = {author,name,year}
  author.value = "";
  name.value = "";
  year.value = "";
  if (!isDuplicate(book)) {
    console.log("greska");
    return;
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
}
console.log(books);
// function localSave() {
//   localStorage.setItem("books", JSON.stringify(books));
// }
function localRemoveLast() {}
function localWipe() {
  localStorage.clear();
}
function isDuplicate(newBook) {
  const find = books.find(
    (book) => newBook.author === book.author && newBook.name === book.name
  );
  console.log(find);
  return find;
  //   console.log(
  //     books.some(
  //       (book) => newBook.author === book.author && newBook.name === book.name
  //     )
  //   );
}
