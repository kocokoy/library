const myLibrary = [];

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    return `${this.title} by ${this.author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary() {
  console.log(Book());
}

addBookToLibrary();
// console.log(myLibrary);