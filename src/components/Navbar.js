import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top" style={{ backgroundColor: 'lightslategray' }}>
      <div className="container my-2">
        <a href="#" className="navbar-brand text-dark">Madhan Abbineni</a>
        <button className="btn btn-outline-info ms-auto">Contact Me</button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsenav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapsenav">
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link text-dark mx-3">Blogs</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
