import React from "react";
import { HiHeart } from "react-icons/hi";
import s from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={s["footer"]}>
      <div className="row">
        <hr className="divider-3" />
      </div>
      <div className={`${s["footer-container"]} row`}>
        <p className={s["built-by"]}>
          Built with <HiHeart className={s["heart-icon"]} /> by{" "}
          <a href="http://github.com/serengia" target="_blank" rel="noreferrer">
            James Serengia
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
