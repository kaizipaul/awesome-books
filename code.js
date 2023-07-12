import time from './modules/timeAndDate.js';
import Book, { nameInput, authorInput, bookList } from './modules/bookClass.js';

// calling variables
const navBar = document.querySelector('#header');

const bookListNav = document.querySelector('#book-list');
const bookListMobile = document.querySelector('#book-list-mobile');

const submitBook = document.querySelector('#add');

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

// render the book list when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  Book.render();
});

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

// add book to list

submitBook.addEventListener('click', () => {
  Book.new();
  nameInput.value = '';
  authorInput.value = '';
  bookList.innerHTML = '';
  Book.render();
});

// add functionality that allows the user to submit the book by pressing enter

time();
