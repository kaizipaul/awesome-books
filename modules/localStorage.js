/* eslint-disable linebreak-style */
const addtoLocalStorage = (bookArray) => {
  window.localStorage.setItem('books', JSON.stringify(bookArray));
};

export default addtoLocalStorage;