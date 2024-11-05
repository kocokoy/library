const bookTitleElement = document.querySelector('.jsBookTitle');
const bookAuthorElement = document.querySelector('.jsBookAuthor');
const bookPagesElement = document.querySelector('.jsBookPages');
const bookReadElement = document.querySelector('.jsBookRead');
const bookButtonElement = document.querySelector('.jsNewBookButton');
const bookDisplayElement = document.querySelector('.jsBookDisplay');

const myLibrary = [
  {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281, read: true},
  {title: '1984', author: 'George Orwell', pages: 328, read: false},
];

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
  displayBookToLibrary();
}

function displayBookToLibrary(){
  myLibrary.forEach(book => {
    // const div = document.createElement('div');
    // div.classList.add('book-card');
    // div.innerHTML = `
    //   <div>${title}</div>
    //   <div>${author}</div>
    //   <div>${pages}</div>
    //   <div>${read}</div>
    // `
    // bookDisplayElement.appendChild(div);
    console.log(book);
  })
}

bookButtonElement.addEventListener('click', () => {
  const bookTitleValue = bookTitleElement.value;
  const bookAuthorValue = bookAuthorElement.value;
  const bookPagesValue = bookPagesElement.value;
  const bookReadValue = bookReadElement.value;
  bookTitleElement.value = '';
  bookAuthorElement.value = '';
  bookPagesElement.value = '';
  bookReadElement.value = '';
  addBookToLibrary(bookTitleValue,bookAuthorValue,bookPagesValue,bookReadValue);
  
  console.log(myLibrary);
})

