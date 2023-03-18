import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt4, HiOutlineDownload, HiOutlineX } from "react-icons/hi";

import s from "./Header.module.scss";

function Header() {
  const { pathname } = useLocation();
  const [showPopper, setShowPopper] = useState(false);

  const showPopperHandler = () => {
    setShowPopper(!showPopper);
  };

  return (
    <header className={s["header"]}>
      <div className={`${s["header-container"]} row`}>
        <div className={s["logo-wrapper"]}>
          <Link to="/" className={s["logo"]}>
            {pathname.includes("countries") ? (
              <HiOutlineDownload className={s["back-icon"]} />
            ) : (
              " Covid-19 Data"
            )}
          </Link>
        </div>
        <nav className={s["nav"]}>
          <ul className={s["nav-list"]}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          {!showPopper && (
            <HiMenuAlt4
              className={s["adjustments-icon"]}
              onClick={showPopperHandler}
            />
          )}

          {showPopper && (
            <HiOutlineX
              className={s["close-icon"]}
              onClick={() => setShowPopper(false)}
            />
          )}

          {showPopper && (
            <div className={s["popper-wrapper"]}>
              <Link
                className={s["nav-link"]}
                to="/"
                onClick={() => setShowPopper(false)}
              >
                Home
              </Link>
              <Link
                className={s["nav-link"]}
                to="/contact"
                onClick={() => setShowPopper(false)}
              >
                contact
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
