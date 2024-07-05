import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#ffe81f"  }}>
      <Link className="navbar-brand" to="/" style={{ color: "#000000", fontFamily:  "death star, san-serif", marginLeft: "375px", fontSize: "40px" }}>
        Star Wars Databank
      </Link>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav ml-auto">
          <Link className="nav-link" to="/favorites" style={{ fontSize: "20px", fontFamily:  "death star, san-serif", marginLeft: "200px", color: "#000000" }}>
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
