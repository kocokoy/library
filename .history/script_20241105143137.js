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

function addBookToLibrary() {
  const book = new Book('test1','test2','test3','test4');
  const book2 = new Book('test1','test2','test3','test4');
  
  myLibrary.push(book.info());
  myLibrary.push(book2.info());
}

addBookToLibrary();
console.log(myLibrary);