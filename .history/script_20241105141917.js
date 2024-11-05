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
  const book = Book('test1','test2','test3','test4');
  
  myLibrary.push(book.info);
}

console.log{myLibrary};