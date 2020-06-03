//Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI() { }

//adding bookis to us
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete" >X</td>
    `;

    // append books to list

    list.appendChild(row);
}

UI.prototype.showAlart = function (message, className) {

    //creating a div
    const div = document.createElement('div');

    div.appendChild(document.createTextNode(message));

    //give the div a class name
    div.className = `alert ${className}`;

    //get parent
    const container = document.querySelector('.container'),
        form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

//clear the user input
UI.prototype.clearInput = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';


}

//create the delete prototype
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}
//create eventListers
document.getElementById('book-form').addEventListener('submit', function (e) {

    //get the form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    //instantiation books
    const book = new Book(title, author, isbn);

    const ui = new UI();

    //checking for errors
    if (title === '' || author === '' || isbn === '') {

        ui.showAlart('Plase check your input fields', 'error');
    } else {
        //ui object

        ui.addBookToList(book);
        ui.showAlart('Book Added. ', 'success')
        ui.clearInput();

    }
    e.preventDefault();


});

//create delete listener

document.querySelector('#book-list').addEventListener('click', function (e) {

    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlart('Book Successfully deleteed ', 'success')
    e.preventDefault();
});