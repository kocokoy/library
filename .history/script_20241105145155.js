const bookTitleElement = document.querySelector('.jsBookTitle');
const bookAuthorElement = document.querySelector('.jsBookAuthor');
const bookPagesElement = document.querySelector('.jsBookPages');
const bookReadElement = document.querySelector('.jsBookRead');
const bookButtonElement = document.querySelector('.jsBookButton');
const myLibrary = [];

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    const bookObj = {
      title: this.title,
      author: this.author,
      pages: this.pages,
      read: this.read,
    }
    return bookObj;
  };
}

function addBookToLibrary(title,author,pages,read) {
  const book = new Book(title,author,pages,read);
  myLibrary.push(book.info());
}

bookButtonElement.addEventListener('click', () => {
  const bookTitleValue = bookTitleElement.value;
  const bookAuthorValue = bookAuthorElement.value;
  const bookPagesValue = bookPagesElement.value;
  const bookButtonValue = bookButtonElement.value;
  addBookToLibrary(bookTitleValue,bookAuthorValue,bookPagesValue,bookButtonValue);
})


console.log(myLibrary);