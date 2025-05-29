const books = ["Harry Potter", "The Hobbit", "Lord of the Rings"];



function getBook(callback) {
  const checkedBook = prompt("Please enter the name of the book:");
  callback(checkedBook);
}


function checkAvailability(bookName) {
  return books.includes(bookName);
}



function handleBookStatus(bookName) {
  const isAvailable = checkAvailability(bookName);
  if (isAvailable) {
    console.log(`Great! You can borrow "${bookName}".`);
  } else {
    console.log(`Sorry, "${bookName}" is currently out of stock.`);
  }
}


getBook(handleBookStatus);

