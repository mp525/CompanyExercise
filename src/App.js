import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation,
  useParams,
  Prompt,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import FindBook from "./FindBook";
import Details from "./Details";
import AddBook from "./AddBook";
import Products from "./Products";
import Login from "./Login";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let history = useHistory();

  const setLoginStatus = (status) => {
    setIsLoggedIn(status);
    history.push("/");
  };

  return (
    <div>
      <Header
        loginMsg={isLoggedIn ? "Logout" : "Login"}
        isLoggedIn={isLoggedIn}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={props.bookFacade} />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={props.bookFacade} />
        </Route>
        <Route path="/find-book">
          <FindBook bookFacade={props.bookFacade} />
        </Route>
        <Route path="/login">
          <Login
            loginMsg={isLoggedIn ? "Logout" : "Login"}
            isLoggedIn={isLoggedIn}
            setLoginStatus={setLoginStatus}
          />
        </Route>
        <Route
          path="/find-book/:id"
          children={<Details bookFacade={props.bookFacade} />}
        />
        <Route path="/getById/:id" children={<Child />} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

function Header({ isLoggedIn, loginMsg }) {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/company">
          Company
        </NavLink>
      </li>
      {isLoggedIn && (
        <>
          <li>
            <NavLink activeClassName="active" to="/add-book">
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/find-book">
              Find Book
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink exact activeClassName="active" to="/login">
          {loginMsg}
        </NavLink>
      </li>
    </ul>
  );
}

function NoMatch() {
  let location = useLocation();
  return (
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  );
}

function Child() {
  let { id } = useParams();
  return <h3>ID: {id}</h3>;
}

function Home() {
  return <h3>Home</h3>;
}

function Company() {
  return <h3>Company</h3>;
}

export default App;
