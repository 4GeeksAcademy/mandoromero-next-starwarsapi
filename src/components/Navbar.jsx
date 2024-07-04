import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" style={{backgroundColor: "#ffe81f", color: "#000"  }}>
      <Link className="navbar-brand" to="/" style={{ fontFamily:  "Star Wars, sans-serif", marginLeft: "375px", fontSize: "30px", color: "#ffe81f" }}>
        Star Wars Databank
      </Link>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ml-auto">
          <Link className="nav-link" to="/favorites" style={{ fontFamily:  "Star Wars, sans-serif", marginLeft: "200px", color: "#ffe81f" }}>
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
