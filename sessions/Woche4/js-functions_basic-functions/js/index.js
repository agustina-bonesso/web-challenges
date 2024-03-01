console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
  const bookTitle = "";
  const bookAuthor = "";
  let bookRating;
  let bookSalesNumber;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

function printBookData(bookTitle, bookAuthor, bookRating, bookSalesNumber){
  console.log(
    "Book Title: " + bookTitle + "\n" +
    "Book Author: " + bookAuthor + "\n" +
    "Book Rating: " + bookRating + "\n" +
    "Number of Sales: " + bookSalesNumber + "\n" +
    "-------------------------------------------------"
  )
}
printBookData("The Lord of the Javascript","Mario", 4.2,120);

function increaseSales(bookTitle, bookAuthor, bookRating, bookSalesNumber){
  bookSalesNumber++; 
  bookRating = bookRating/bookSalesNumber;
  printBookData(bookTitle, bookAuthor, bookRating, bookSalesNumber)
}

increaseSales("The Lord of the Javascript","Mario", 4.2,120);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
