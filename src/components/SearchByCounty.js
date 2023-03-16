import React from "react";
import s from "./SearchByCounty.module.scss";

export default function SearchByCounty() {
  return (
    <div className={s["search-wrapper"]}>
      <h3>Search by Country</h3>
      <div className={s["search-box"]}>
        <form>
          <input type="text" placeholder="e.g. Kenya" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
