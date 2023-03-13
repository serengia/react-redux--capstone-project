import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

function Header() {
  return (
    <header>
      <div className={s["header-container"]}>
        <div className={s["logo-wrapper"]}>Logo</div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Meals</NavLink>
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
