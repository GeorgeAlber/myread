import PropTypes from "prop-types";
import BookCard from "./book/BookCard";

const Shelf = ({ shelf, books, onChangeShelf }) => {
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

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Shelf;
