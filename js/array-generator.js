(function(win) {
  var global = win;
  var books = BIBLE;

  // create new array base on the passing array book names and numbers
  function createArray(arr) {
    if (Array.isArray(arr)) {
      var newArr = [];
      var bookName = arr[0];
      var chaps = arr[1];
      var i = -1;

      for (i = 1; i <= chaps; i++) {
        newArr.push(bookName + i);
      }

      return newArr;
    }
  }

  // get all the books and chapters then concatenate them together into a huge array. Yes, I mean HUGE!
  function getBooks(books, callback) {
    if (Array.isArray(books)) {
      var arr = [];
      var i = -1;
      var len = books.length;
      var concatArr = [];

      if (typeof callback === 'function') {
        for (i = 0; i < len; i++) {
          arr.push(createArray(books[i]));
          if (arr.length > 0) {
            concatArr = concatArr.concat(arr[i]);
          }

        }
      }

      return concatArr;
    }
  }

  var allBooks = getBooks(books, createArray);

  global.ARRAYGENERATOR = {
    allBooks: allBooks
  }

}(window));
