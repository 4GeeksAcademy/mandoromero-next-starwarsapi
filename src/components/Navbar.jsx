import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <Link className="navbar-brand" to="/"  style={{marginLeft: "700px", fontSize: "30px", color: "#ffe81f"}}>Star Wars Databank</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/favorites" style={{marginLeft: "100px", color: "#ffe81f"  }}>Favorites</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;