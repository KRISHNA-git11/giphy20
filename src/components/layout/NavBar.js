import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="all-center">
        <i className="fab fa-reddit-alien x-large"></i>
        <h2>Hello, Giphy</h2>
      </div>

      <ul>
        {/* <li>
          <Link to="/reddit">Reddit</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
