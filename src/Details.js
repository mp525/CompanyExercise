import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";

function Details(props) {
    let { id } = useParams();
    const book = props.bookFacade.findBook(id);
    //persons.filter((person) => person.id !== id);
    return (
      <div>
        <p>Title: {book.title}</p>
        <p>ID: {book.id}</p>
        <p>Info: {book.info}</p>
      </div>
    );
  }

  export default Details;