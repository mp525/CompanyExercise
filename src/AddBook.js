import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Prompt
} from "react-router-dom";

function AddBook(props) {
    let [isBlocking, setIsBlocking] = useState(false);
    const [book, setBook] = useState({});
  
    const handleChange = (event) => {
      setIsBlocking(event.target.value.length > 0);
      const target = event.target;
      const property = target.id;
      const value = target.value;
      const tmpBook = { ...book, [property]: value };
      setBook(tmpBook);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsBlocking(false);
      props.bookFacade.addBook(book);
    };
  
    return (
      <div>
        <h3>Add book</h3>
        <form onSubmit={handleSubmit}>
          <input
            id="title"
            placeholder="add title"
            type="text"
            onChange={handleChange}
          />
          <br />
          <input
            id="info"
            placeholder="add info"
            type="text"
            onChange={handleChange}
          />
          <br />
          <input type="submit" />
        </form>
        <Prompt
          when={isBlocking}
          message={(location) =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
      </div>
    );
  }

  export default AddBook;