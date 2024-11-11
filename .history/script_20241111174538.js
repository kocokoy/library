class LibraryApp {
  constructor(){
    this.myLibrary = [
      {_title: 'To Kill a Mockingbird', _author: 'Harper Lee', _pages: 281, _read: true},
      {_title: '1984', _author: 'George Orwell', _pages: 328, _read: false},
    ];
    this.book = new BookInfoCreator(this);
    this.libraryUI = new LibraryUI(this);
  }
  start(){
    this.libraryUI.displayBookToLibrary();
  }
}

class BookInfoCreator {
  constructor(app,title,author,pages,read){
    this.app = app
    this._title = title;
    this._author = author;
    this._pages = pages;
    this._read = read;
  };

  get info(){
    return{
    title: this._title,
    author: this._author,
    pages: this._pages,
    read: this._read
    }
  }

  set title(value){
    if (value.length > 0) this._title = value;
    else console.error("Title can't be empty!");
  }

  set author(value){
    this._author = value;
  }

  set pages(value) {
    if (Number.isInteger(value) && value > 0) this._pages = value;
    else console.error("Pages should be a positive integer!");
  }

  set read(value) {
    this._read = value;
  }
}

class LibraryUI{
  constructor(app) {
    this.app = app
    this.bookTitleElement = document.querySelector('.jsBookTitle');
    this.bookAuthorElement = document.querySelector('.jsBookAuthor');
    this.bookPagesElement = document.querySelector('.jsBookPages');
    this.bookReadElement = document.querySelector('.jsBookRead');
    this.bookButtonElement = document.querySelector('.jsNewBookButton');
    this.bookDisplayElement = document.querySelector('.jsBookDisplay');
    this.addNewBookCardHolderElement = document.querySelector('.jsAddNewBookCardHolder');
    this.addBookElement = document.querySelector('.jsAddBook');

    
    this.bookButtonElement.addEventListener('click', () => {
      this.addNewBookCardHolderElement.classList.add('add-new-book-card-holder');
    });

    this.addBookElement.addEventListener('click', () => {
      this.addBookToLibrary();
      this.displayBookToLibrary();
      this.deleteButtonClicked();
      console.log(this.app.myLibrary);
      this.addNewBookCardHolderElement.classList.remove('add-new-book-card-holder');
    })
  }

  

  addBookToLibrary() {
    const bookTitleValue = this.bookTitleElement.value;
    const bookAuthorValue = this.bookAuthorElement.value;
    const bookPagesValue = this.bookPagesElement.value;
    const bookReadValue = JSON.parse(this.bookReadElement.value); 

    this.bookTitleElement.value= '';
    this.bookAuthorElement.value = '';
    this.bookPagesElement.value = '';
    this.bookReadElement.value = '';

    if(bookTitleValue && bookAuthorValue && bookPagesValue && bookReadValue !== undefined){
      const book = new BookInfoCreator(this.app, bookTitleValue, bookAuthorValue, bookPagesValue, bookReadValue);

      // Push the book info into the myLibrary array
      console.log()
      this.app.myLibrary.push(book.info);
      console.log("Book added:", book.info);
    }
    
  }

  displayBookToLibrary(){

    this.bookDisplayElement.innerHTML = '';
    
    this.app.myLibrary.forEach((book,i) => {
      const div = document.createElement('div');
      div.classList.add('book-card');
      div.setAttribute('data-id',i);
      console.log(book);
      const readButton = book.read 
      ? `<button class="jsReadButton book-read">Read: Yes</button>`
      : `<button class="jsReadButton book-not-read">Read: No</button>`

      div.innerHTML = `
        ${readButton}
        <div>Title: ${book.title}, Author: ${book.author}, ${book.pages} pages</div>
        <button class="jsDeleteButton">Delete</button>
      `
      this.bookDisplayElement.appendChild(div);

    })
    this.deleteButtonClicked();
    this.readButtonClicked();
  }

  deleteButtonClicked(){
    const deleteButtonElement = document.querySelectorAll('.jsDeleteButton');
    deleteButtonElement.forEach(button => {
      button.addEventListener('click', (event) => {
        const bookElement =  event.target.closest('.book-card');
        const bookID = bookElement.getAttribute('data-id');
        console.log(bookID)
        this.app.myLibrary.splice(bookID,1);
        this.displayBookToLibrary();
      })
    })
  }
  
  readButtonClicked(){
    const readButtonElement = document.querySelectorAll('.jsReadButton');
    readButtonElement.forEach(button => {
      button.addEventListener('click', (event) => {
        const readElement = event.target.closest('.book-card');
        const readId = readElement.getAttribute('data-id');
        this.app.myLibrary[readId]._read = !this.app.myLibrary[readId]._read;
        console.log(this.app.myLibrary);
        this.displayBookToLibrary();
      })
    })
  }
  
}

const app = new LibraryApp();
app.start();
