import PropTypes from "prop-types";
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
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default BookCard;
