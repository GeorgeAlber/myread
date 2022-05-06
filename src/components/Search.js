import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "./book/BookCard";
import * as BooksAPI from "../BooksAPI";

const Search = ({ onChangeShelf }) => {
  const [books, setBooks] = useState([]);

  const updateQuery = (query) => {
    if (query.length > 0) {
      getSearchResult(query);
    } else {
      setBooks([]);
    }
  };

  const getSearchResult = (query) => {
    const getSearchBooks = async () => {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          setBooks([]);
        } else {
          setBooks(books);
        }
      });
    };
    getSearchBooks();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onChangeShelf={onChangeShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
