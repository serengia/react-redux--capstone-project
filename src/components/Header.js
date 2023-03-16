import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

function Header() {
  return (
    <header className={s["header"]}>
      <div className={`${s["header-container"]} row`}>
        <div className={s["logo-wrapper"]}>Covid-19 Data</div>
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
