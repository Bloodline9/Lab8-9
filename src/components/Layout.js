import React from "react";

import Button from "../Button";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = () => (
  <header>
    <h2>Router</h2>
    <Button
      label="Log Out"
      handleClick={() => {
        localStorage.clear();
        window.location.reload();
      }}
    />
    <nav>
      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In Page</Link>
        </li>
        <li>
          <Link to="/profile">Profile Page</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Layout = () => (
  <div>
    <Header />
  </div>
);

export default Layout;
