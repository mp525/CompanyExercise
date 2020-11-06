import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Details from "./Details";

function FindBook(props) {
    const [id, setId] = useState(0);
    const [book, setBook] = useState({});
    let { path, url } = useRouteMatch();
  
    const handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      setId(value);
    };
  
    const deleteBook = (e) => {
      props.bookFacade.deleteBook(id);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setBook(props.bookFacade.findBook(id));
    };
    //<input type="submit" value="Find book" /> onSubmit={handleSubmit}
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter book id"
            id="inputID"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>
            <Link to={`${path}/${id}`}>Find book</Link>
          </button>
        </form>
        <Switch>
          <Route exact path={path}>
            <h3>Book details for selected book will go here</h3>
          </Route>
          <div>
            <Route path={`${path}/:id`}>
              <Details bookFacade={props.bookFacade} />
            </Route>
  
            <button onClick={deleteBook}>Delete Book</button>
          </div>
        </Switch>
      </div>
    );
  }

  export default FindBook;