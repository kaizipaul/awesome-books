export const bookStorage = JSON.parse(localStorage.getItem('books')) || [];
export const nameInput = document.querySelector('#title-book');
export const authorInput = document.querySelector('#author-book');
export const bookList = document.querySelector('.book-store');

// initiate book class
export default class Book {
  constructor(id, bookName, bookAuthor) {
    this.id = id;
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
  }

 static render = () => {
   bookStorage.forEach((book) => {
     const bookCard = document.createElement('li');
     bookCard.id = book.id;
     bookCard.classList.add('book');
     bookCard.innerHTML = `<div><i class="fa-sharp fa-solid fa-book"></i><p class='font-bold'>${book.bookName}</p><p>${book.bookAuthor}</p></div><i class="fa-solid fa-trash delete-btn"></i>`;
     bookList.appendChild(bookCard);

     const deleteBtn = document.querySelectorAll('.delete-btn');

     deleteBtn.forEach((del, id) => {
       del.addEventListener('click', () => {
         Book.delete(id);
       });
     });
   });
 }

 static new = () => {
   const newBook = new Book(Date.now(), nameInput.value, authorInput.value);

   if (nameInput.value && authorInput.value !== '') {
     bookStorage.push(newBook);
     localStorage.setItem('books', JSON.stringify(bookStorage));
   }

   // add message to user if the input fields are false
 }

 static delete = (index) => {
   if (index !== -1) bookStorage.splice(index, 1);
   localStorage.setItem('books', JSON.stringify(bookStorage));
   bookList.innerHTML = '';
   Book.render();
 }
}