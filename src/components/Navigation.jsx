import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="d-flex flex-wrap ms-4 me-4 align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          alt="logo"
          width="125px"
          height="50px"
          style={{ fontWeight: "bold", color: "#90bcab" }}
        />
      </Link>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to="/" className="nav-link px-2" style={{ color: "#90bcab" }}>
            Home
          </Link>
        </li>
        <Link to="/menu" className="nav-link px-2" style={{ color: "#90bcab" }}>
          Pokemon
        </Link>
        <li>
          <Link
            to="/about"
            className="nav-link px-2"
            style={{ color: "#90bcab" }}
          >
            About
          </Link>
        </li>
      </ul>
      <div className="col-md-3 text-end">
        <Link to="/auth/*" className="m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            style={{ color: "#90bcab" }}
            className="bi bi-person-badge"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
          </svg>
        </Link>
        <Link to="/cart" className="m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="25"
            fill="currentColor"
            style={{ color: "#90bcab" }}
            className="bi bi-basket"
            viewBox="0 0 16 16"
          >
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Navigation;
