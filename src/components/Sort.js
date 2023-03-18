/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import s from "./Sort.module.scss";

export default function Sort() {
  return (
    <div className={s["sort"]}>
      <div className={`${s["ascending"]} ${s["option"]}`}>
        <label htmlFor="asc">Sort ASC</label>
        <input type="checkbox" name="" id="asc" />
      </div>
    </div>
  );
}
