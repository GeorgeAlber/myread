import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookCard from "./book/BookCard";
import * as BooksAPI from "../BooksAPI";

const Search = ({ userShelfBooks, onChangeShelf }) => {
  const [booksResult, setBooksResult] = useState([]);

  const updateQuery = (query) => {
    if (query.length > 0) {
      getSearchResult(query);
    } else {
      setBooksResult([]);
    }
  };

  const getSearchResult = (query) => {
    const getSearchBooks = async () => {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          setBooksResult([]);
        } else {
          let test = books.map((book) => {
            userShelfBooks.map((ub) => {
              if (ub.id === book.id) {
                book.shelf = ub.shelf;
              }
              return ub;
            });
            return book;
          });

          setBooksResult(test);
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
          {booksResult.map((book) => (
            <BookCard key={book.id} book={book} onChangeShelf={onChangeShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  userShelfBooks: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Search;
