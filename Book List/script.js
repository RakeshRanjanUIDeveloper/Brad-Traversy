//Book Constructor
function Book(title, author, isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}
// UI Constructor
function UI(){}
UI.prototype.addBookToList= function(book){
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
UI.prototype.showAlert = function(message, className){
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

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}
UI.prototype.clearFields = function(){
    document.getElementById('title').value ='';
    document.getElementById('author').value ='';
    document.getElementById('isbn').value ='';
}

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
    //Show meesage
    ui.showAlert('Book removed!!' , 'success')
    e.preventDefault();
})