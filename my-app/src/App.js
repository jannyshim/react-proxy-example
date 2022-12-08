import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import TodoTable from './components/TodoTable';
import DisplayBoard from './components/DisplayBoard';
import DisplayTodos from './components/DisplayTodos';
import CreateBook from './components/CreateBook';
import CreateTodo from './components/CreateTodo';
import { getAllBooks, createBook } from './services/BookService';
import { getAllTodos, createTodo } from './services/TodoService';
import Footer from './components/Footer';

function App() {

  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);
  const [todoShelf, setTodoShelf] = useState({});

  const handleSubmit = () => {
    createBook(bookShelf)
      .then(() => {
        setNumberBooks(numberOfBooks + 1);
      });
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const handleOnChangeForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === 'book') {
      bookShelf.book = e.target.value;
    } else if (e.target.name === 'category') {
      bookShelf.category = e.target.value;
    } else if (e.target.name === 'author') {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  }

  const handleOnChangeForm2 = (e) => {
    let inputTodoData = todoShelf;
    if (e.target.name === 'todo') {
      todoShelf.todo = e.target.value;
    } else if (e.target.name === 'category') {
      todoShelf.category = e.target.value;
    }
    setTodoShelf(inputTodoData);
  }

  const getAllTodo = () => {
    getAllTodos()
      .then(data => {
        setTodos(data);
        setNumberTodos(data.length);
      });
  }

  const handleSubmit2 = () => {
    createTodo(todoShelf)
      .then(() => {
        setNumberTodos(numberOfTodos + 1);
      });
  }

  return (
    <div className="main-wrapper">
      <div className="main">
        <div className="table-scroll">
          <Header />
          <CreateBook
            bookShelf={bookShelf}
            onChangeForm={handleOnChangeForm}
            handleSubmit={handleSubmit}
          />
          <CreateTodo
            todoShelf={todoShelf}
            onChangeForm2={handleOnChangeForm2}
            handleSubmit2={handleSubmit2}
          />
          <DisplayBoard
            numberOfBooks={numberOfBooks}
            getAllBook={getAllBook}
          />
          <DisplayTodos
            numberOfTodos={numberOfTodos}
            getAllTodo={getAllTodo}
          />
          <BookTable books={books} />
          <TodoTable todos={todos} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
