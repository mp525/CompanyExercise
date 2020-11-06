import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Details from "./Details";

function Products(props) {
    let { path, url } = useRouteMatch();
  
    return (
      <div>
        <h3>Number of products: {props.bookFacade.getBooks().length}</h3>
        <ul>
          {props.bookFacade.getBooks().map((book) => {
            return (
              <li key={book.id}>
                {book.title} <Link to={`${url}/${book.id}`}>details</Link>
              </li>
            );
          })}
        </ul>
        <Switch>
          <Route exact path={path}>
            <h3>Book details for selected book will go here</h3>
          </Route>
          <Route path={`${path}/:id`}>
            <Details bookFacade={props.bookFacade} />
          </Route>
        </Switch>
      </div>
    );
  }

  export default Products;