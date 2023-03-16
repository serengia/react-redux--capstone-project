/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import s from "./Filter.module.scss";

export default function Filter() {
  const [country, setCountry] = useState("Kenya");
  console.log(country);
  return (
    <div className={s["filter"]}>
      <label htmlFor="cars">
        <h3>Filter by Country</h3>
      </label>
      <select
        name="cars"
        id="cars"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}
