class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI{
    addBookToList(book){
        const bookList = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `
        bookList.appendChild(row);   
    }
    showAlert(message, className){
        const div = document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    clearFields(){
        document.getElementById('title').value ='';
        document.getElementById('author').value ='';
        document.getElementById('isbn').value ='';
    }
}

class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books =[];
        }else{
            books= JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBooks(){
        const books = Store.getBooks();
        books.forEach(function(book){
            const ui = new UI;
            ui.addBookToList(book)
        })
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index,1)
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    const title= document.getElementById('title').value;
    const author= document.getElementById('author').value;
    const isbn= document.getElementById('isbn').value;

    // Create book Object
    var book =new Book(title, author, isbn);
    //Create UI Object
    var ui = new UI();
    if(title==='' || author=== '' || isbn === ''){
        ui.showAlert('Please fill the details', 'error');
    }else{
        ui.addBookToList(book);
        Store.addBook(book);
        ui.showAlert('Book Added!!' , 'success');
        ui.clearFields();
    }

    e.preventDefault();
})

// Event Listener for Delete the book
document.getElementById('book-list').addEventListener('click', function(e){
    //Create UI Object
    var ui = new UI();
    ui.deleteBook(e.target);
    //Remove From LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
    //Show meesage
    ui.showAlert('Book removed!!' , 'success')
    e.preventDefault();
})


//AJAX call
document.getElementById('newbtn').addEventListener('click', loadData);
function loadData(){
    const xhr =new XMLHttpRequest();
    xhr.open("GET", 'data.txt', true);
    xhr.onload = function(){
        if(this.status ===200){
            console.log(this.responseText);
        }
    }
    xhr.send();
}