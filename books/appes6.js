//Book Constructor
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI constructor
class UI {
    //add book list method
    addBookToList(book) {
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

        // Add to local storage


    }
    showAlart(message, className) {
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

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }

    }
    clearInput() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';


    }

}

//Local storage class
class storeToLocalStorage {

    static getBook() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];

        } else {//check to see if there is no empty
            books = JSON.parse(localStorage.getItem('books'));

        }
        return books;
    }
    static displayBook() {
        const books = storeToLocalStorage.getBook();
        books.forEach(function (book) {
            const ui = new UI();
            ui.addBookToList(book);
        });

    }
    static addBook(book) {
        const books = storeToLocalStorage.getBook();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = storeToLocalStorage.getBook();
        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//load dom content
document.addEventListener('DOMContentLoaded', storeToLocalStorage.displayBook);
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

        ui.showAlart(`Plase check your input fields`, 'error');
    } else {
        //ui object

        //Add book to list
        ui.addBookToList(book);
        // Add book to local storage
        storeToLocalStorage.addBook(book);
        //show alart
        ui.showAlart('Book Added. ', 'success');
        //clear user input
        ui.clearInput();


    }
    e.preventDefault();

});

//create delete listener

document.querySelector('#book-list').addEventListener('click', function (e) {

    const ui = new UI();
    ui.deleteBook(e.target);
    storeToLocalStorage.removeBook(e.target.parentElement.previousElementSibling.textContent)
    ui.showAlart('Book Successfully deleteed ', 'success')
    e.preventDefault();
});

