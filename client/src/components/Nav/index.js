import React from "react";

function Nav() {
  const { pathname } = window.location;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Google Books</a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={pathname === "/search" || pathname === "/" ? "nav-link active text-primary" : "nav-link"} href="/search">Search</a>
            </li>
            <li className="nav-item">
              <a className={pathname === "/saved" ? "nav-link active text-primary" : "nav-link"} href="/saved">Saved</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
