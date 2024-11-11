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
  if(bookTitleValue && bookAuthorValue && bookPagesValue && bookReadValue){
    const book = new Book(bookTitleValue,bookAuthorValue,bookPagesValue,JSON.parse(bookReadValue));
    myLibrary.push(book.info());
  }
  
}

function displayBookToLibrary(){

  bookDisplayElement.innerHTML = '';
  
  myLibrary.forEach((book,i) => {
    const div = document.createElement('div');
    let readButton = '';
    div.classList.add('book-card');
    div.setAttribute('data-id',i);
    console.log(book.read);
    if(book.read){
      readButton = `<button class="jsReadButton book-read">Read: Yes</button>`
    }else{
      readButton = `<button class="jsReadButton book-not-read">Read: No</button>`
    }

    div.innerHTML = `
      ${readButton}
      <div>Title: ${book.title}, Author: ${book.author}, ${book.pages} pages</div>
      <button class="jsDeleteButton">Delete</button>
    `
    bookDisplayElement.appendChild(div);

  })
  deleteButtonClicked();
  readButtonClicked();
}


function getDataID(){
  const deleteButtonParentElement = document.querySelector('.jsBookDisplay');
  deleteButtonParentElement.addEventListener('click', (event) => {
    const element = event.target.closest('.book-card');
    // const id = element.getAttribute('data-id');
    // return id;
    console.log(element);
  });
  
}

function deleteButtonClicked(){
  console.log(getDataID());
  myLibrary.splice(1,1);
  // displayBookToLibrary();
}

function readButtonClicked(){
  const readButtonElement = document.querySelectorAll('.jsReadButton');
  readButtonElement.forEach(button => {
    button.addEventListener('click', (event) => {
      const readElement = event.target.closest('.book-card');
      const readId = readElement.getAttribute('data-id');
      myLibrary[readId].read = !myLibrary[readId].read;
      displayBookToLibrary();
    })
  })
}


bookButtonElement.addEventListener('click', () => {
  addNewBookCardHolderElement.classList.add('add-new-book-card-holder');
})

addBookElement.addEventListener('click', () => {
  addBookToLibrary();
  displayBookToLibrary();
  deleteButtonClicked();
  console.log(myLibrary);
  addNewBookCardHolderElement.classList.remove('add-new-book-card-holder');
})



