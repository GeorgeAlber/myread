import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ShelfComponent from "../Shelf";

const ListBooks = ({ books, bookshelves, onChangeShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookshelves.map((shelf) => (
            <ShelfComponent
              key={shelf.key}
              shelf={shelf}
              books={books}
              onChangeShelf={onChangeShelf}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="search">Add a book</Link>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  bookshelves: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default ListBooks;
