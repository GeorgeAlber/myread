import React from "react";
import BookCard from "./book/BookCard";

const ShelfComponent = ({ shelf, books, onChangeShelf }) => {
  const shelfBooks = books.filter((b) => b.shelf === shelf.key);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map((book) => (
            <BookCard key={book.id} book={book} onChangeShelf={onChangeShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ShelfComponent;
