import React, { useState } from "react";

const BookShelfChanger = ({ book, onChangeShelf }) => {
  const [shelfVal, setShelfVal] = useState(book.shelf);

  const handleChange = (event) => {
    setShelfVal(event.target.value);
    onChangeShelf(book, event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={shelfVal} onChange={handleChange}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;