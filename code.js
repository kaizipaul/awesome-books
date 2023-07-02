import addtoLocalStorage from './modules/localStorage.js';
import time from './modules/timeAndDate.js';

// calling variables
const navBar = document.querySelector('#header');

const bookListNav = document.querySelector('#book-list');
const bookListMobile = document.querySelector('#book-list-mobile');

const bookName = document.querySelector('#title-book');
const bookAuthor = document.querySelector('#author-book');
const submitBook = document.querySelector('#add');
const booksDiv = document.querySelector('#book-store');

const addBook = document.querySelector('#book-add');
const addBookMobile = document.querySelector('#book-add-mobile');
const contactUs = document.querySelector('#contact-us');
const contactUsMobile = document.querySelector('#contact-us-mobile');

const contactSection = document.querySelector('#contacts');
const addSection = document.querySelector('#input-section');
const bookListSection = document.querySelector('#book-list-section');

const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobile-menu');
const closeBtn = document.querySelector('#close-btn');

bookListNav.addEventListener('click', () => {
  bookListSection.style.display = 'block';
  contactSection.style.display = 'none';
  addSection.style.display = 'none';
});
// site navigation to contacts
contactUs.addEventListener('click', () => {
  contactSection.style.display = 'block';
  addSection.style.display = 'none';
  bookListSection.style.display = 'none';
});

// site navigation to add book form
addBook.addEventListener('click', () => {
  addSection.style.display = 'block';
  contactSection.style.display = 'none';
  bookListSection.style.display = 'none';
});

// site navigation for mobile menu
contactUsMobile.addEventListener('click', () => {
  contactSection.style.display = 'block';
  addSection.style.display = 'none';
  bookListSection.style.display = 'none';
});

addBookMobile.addEventListener('click', () => {
  addSection.style.display = 'block';
  contactSection.style.display = 'none';
  bookListSection.style.display = 'none';
});

bookListMobile.addEventListener('click', () => {
  bookListSection.style.display = 'block';
  contactSection.style.display = 'none';
  addSection.style.display = 'none';
});

// opening and closing mobile menu
hamburger.addEventListener('click', () => {
  mobileMenu.style.width = '100%';
  navBar.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  mobileMenu.style.width = 0;
  navBar.style.display = 'block';
});

let bookArray = [];

const addElementsToPage = ((bookArray) => {
  booksDiv.innerHTML = '';

  bookArray.foreach((task) => {
    const writtenBy = ' by : ';
    const div = document.createElement('div');
    div.className = 'task mb-3';

    div.setAttribute('data-id', task.id);
    div.appendChild(
      document.createTextNode(task.title + writtenBy + task.author),
    );

    const delBtn = document.createElement('button');
    delBtn.className = 'del text-[1.4rem] p-4 rounded-md';
    delBtn.appendChild(document.createTextNode('Delete'));

    div.appendChild(delBtn);

    booksDiv.appendChild(div);
  });
});

class AddBooks {
  static addToArray(bookName, authorName) {
    const task = {
      id: Date.now(),
      title: bookName,
      author: authorName,
    };

    bookArray.push(task);

    addElementsToPage(bookArray);
    addtoLocalStorage(bookArray);
  }

    static deleteTask = (taskId) => {
      bookArray = bookArray.filter((task) => (task.id !== taskId));
      addtoLocalStorage(bookArray);
    };
}

submitBook.addEventListener('click', (e) => {
  e.preventDefault();
  if ((bookName.value && bookAuthor.value) !== '') {
    AddBooks.addToArray(bookName.value, bookAuthor.value);
    bookName.value = '';
    bookAuthor.value = '';
    bookName.focus();
  }
});

booksDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('del')) {
    e.target.parentElement.remove();

    AddBooks.deleteTask(JSON.parse(e.target.parentElement.getAttribute('data-id')));
  }
});

const getFromStorage = () => {
  const data = window.localStorage.getItem('books');
  if (data) {
    const books = JSON.parse(data);
    addElementsToPage(books);
  }
};

if (localStorage.getItem('books')) {
  bookArray = JSON.parse(localStorage.getItem('books'));
}

getFromStorage();
time();
