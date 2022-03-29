import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// import { Button } from "./Button";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          {click ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/agendar" className="nav-links" onClick={closeMobileMenu}>
              Agendar
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/orcamentos"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Orçamentos
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/nossosmecanicos"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Nossos Mecânicos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
