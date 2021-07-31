import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const NavBar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <div className="all-center">
        <i className="fab fa-reddit-alien x-large"></i>
        <h2>Hello, {title}</h2>
      </div>

      <ul>
        <li>
          <Link onClick={console.log('In giphy page')} to="/">
            Giphy
          </Link>
        </li>
        <li>
          <Link onClick={console.log('In reddit page')} to="/reddit">
            Reddit
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
