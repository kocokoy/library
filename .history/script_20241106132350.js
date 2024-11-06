const bookTitleElement = document.querySelector('.jsBookTitle');
const bookAuthorElement = document.querySelector('.jsBookAuthor');
const bookPagesElement = document.querySelector('.jsBookPages');
const bookReadElement = document.querySelector('.jsBookRead');
const bookButtonElement = document.querySelector('.jsNewBookButton');
const bookDisplayElement = document.querySelector('.jsBookDisplay');
const addNewBookCardHolderElement = document.querySelector('.jsAddNewBookCardHolder');
const addBookElement = document.querySelector('.jsAddBook');

const myLibrary = [
  {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281, read: true},
  {title: '1984', author: 'George Orwell', pages: 328, read: false},
];



displayBookToLibrary();

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
  const bookTitleValue = bookTitleElement.value;
  const bookAuthorValue = bookAuthorElement.value;
  const bookPagesValue = bookPagesElement.value;
  const bookReadValue = bookReadElement.value;
  bookTitleElement.value = '';
  bookAuthorElement.value = '';
  bookPagesElement.value = '';
  bookReadElement.value = '';
  if(!(bookTitleValue && bookAuthorValue && bookPagesValue && bookReadValue)){
    console.log('test');   
  }else{
    const book = new Book(bookTitleValue,bookAuthorValue,bookPagesValue,bookReadValue);
    myLibrary.push(book.info());
  }
  
}

function displayBookToLibrary(){

  bookDisplayElement.innerHTML = '';
  
  myLibrary.forEach((book,i) => {
    const div = document.createElement('div');
    div.classList.add('book-card');
    div.setAttribute('data-id',i);
    div.innerHTML = `
      <button>Read</button>
      <div>Title: ${book.title}, Author: ${book.author}, ${book.pages} pages, Read: ${book.read}</div>
      <button class="jsDeleteButton">Delete</button>
    `
    div.ins
    bookDisplayElement.appendChild(div);

  })
  deleteButtonClicked();
}

function deleteButtonClicked(){
  const deleteButtonElement = document.querySelectorAll('.jsDeleteButton');
  const bookCardElement = document.querySelectorAll('.book-card');
  deleteButtonElement.forEach(button => {
    button.addEventListener('click', (event) => {
      event.target.closest(bookCardElement)
    })
  })
}
bookButtonElement.addEventListener('click', () => {
  addNewBookCardHolderElement.classList.add('add-new-book-card-holder');
})

addBookElement.addEventListener('click', () => {
  addBookToLibrary();
  displayBookToLibrary();
  addNewBookCardHolderElement.classList.remove('add-new-book-card-holder');
})



