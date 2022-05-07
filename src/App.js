import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ListBooks from "./components/book/ListBooks";
import Search from "./components/Search";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const bookshelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Have Read" },
  ];

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const onChangeShelf = (book, shelf) => {
    let updateBooks = books.filter((b) => b.id !== book.id);

    if (shelf !== "none") {
      book.shelf = shelf;
      updateBooks = updateBooks.concat(book);
    }

    setBooks(updateBooks);
    BooksAPI.update(book, shelf);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <ListBooks
              books={books}
              bookshelves={bookshelves}
              onChangeShelf={onChangeShelf}
            />
          }
          exact
        ></Route>
        <Route
          path="/search"
          element={
            <Search userShelfBooks={books} onChangeShelf={onChangeShelf} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
