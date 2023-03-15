/*class Book
{
    constructor(title,author,isbn)
    {
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class Ui
{
    addToBookList(book)
    {
        const list=document.getElementById('book-list');
        const row=document.createElement('tr');
        row.innerHTML+=`
        <th>${book.title}</th>
        <th>${book.author}</th>
        <th>${book.isbn}</th>
        <th ><a href="#" class="delete" >X</a> </th>
        `;
        list.appendChild(row);
    }

    showAlert(message,className)
    {
        const div=document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));   //Craeting That DIV

        const container=document.querySelector('.container');    //as u r using insertbefore so take these 2 in querysector form only
        const form=document.querySelector('#book-form');
        container.insertBefore(div,form);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }
        deleteBook(target)
        {
           if(target.className==='delete') 
           {
            target.parentElement.parentElement.remove();
           }
        }


    }


//event listener

document.getElementById('book-form').addEventListener('submit',(e)=>{
e.preventDefault();
const title=document.getElementById('title').value;
const author=document.getElementById('author').value;
const isbn=document.getElementById('isbn').value;

const book1=new Book(title,author,isbn);

const ui=new Ui();

if(title===''||author===''||isbn==='')
{
    ui.showAlert('please enter al the field','error');
}
else
{
    ui.addToBookList(book1);
    ui.showAlert('successfully added','success');
}

});



//delete book

document.getElementById('book-list').addEventListener('click',function(e){
  
    const ui=new Ui();
   
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed','success');
    e.preventDefault();

});     */

class Book
{
    constructor(title,author,isbn)
    {
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class Ui
{
    addToBookList(book)
    {
        const list=document.getElementById('book-list');
        const row=document.createElement('tr');
        row.innerHTML+=`
        <th>${book.title}</th>
        <th>${book.author}</th>
        <th>${book.isbn}</th>
        <th ><a href="#" class="delete" >X</a> </th>
        `;
        list.appendChild(row);
    }

    showAlert(message,className)
    {
        const div=document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));   //Craeting That DIV

        const container=document.querySelector('.container');    
        const form=document.getElementById('book-form');
        container.insertBefore(div,form);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);
    }
        deleteBook(target)
        {
           if(target.className==='delete') 
           {
            target.parentElement.parentElement.remove();
           }
        }


    }


//event listener

document.getElementById('book-form').addEventListener('submit',(e)=>{
e.preventDefault();
const title=document.getElementById('title').value;
const author=document.getElementById('author').value;
const isbn=document.getElementById('isbn').value;

const book1=new Book(title,author,isbn);

const ui=new Ui();

if(title===''||author===''||isbn==='')
{
    ui.showAlert('please enter al the field','error');
}
else
{
    ui.addToBookList(book1);
    ui.showAlert('successfully added','success');
}

});



//delete book

document.getElementById('book-list').addEventListener('click',function(e){
  
    const ui=new Ui();
   
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed','success');
    e.preventDefault();

});

