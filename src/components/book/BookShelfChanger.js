import React, { useState } from "react";
import PropTypes from "prop-types";

const BookShelfChanger = ({ book, onChangeShelf }) => {
  const [shelfVal, setShelfVal] = useState(book.shelf);

  const handleChange = (event) => {
    setShelfVal(event.target.value);
    onChangeShelf(book, event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select
        value={typeof shelfVal === "undefined" ? "none" : shelfVal}
        onChange={handleChange}
      >
        <option disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default BookShelfChanger;
