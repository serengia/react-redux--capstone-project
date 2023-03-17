import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.scss";

function Header() {
  return (
    <header className={s["header"]}>
      <div className={`${s["header-container"]} row`}>
        <div className={s["logo-wrapper"]}>
          <Link to="/" className={s["logo"]}>
            Covid-19 Data
          </Link>
        </div>
        <nav>
          <ul className={s["nav-list"]}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
