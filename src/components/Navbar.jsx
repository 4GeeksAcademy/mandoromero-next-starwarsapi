import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Star Wars Databank</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/favorites">Favorites</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;