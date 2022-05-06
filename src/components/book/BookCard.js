import React from "react";
import BookShelfChanger from "./BookShelfChanger";

const BookCard = ({ book, onChangeShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks?.thumbnail})`,
            }}
          ></div>
          <BookShelfChanger book={book} onChangeShelf={onChangeShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    </li>
  );
};

export default BookCard;
