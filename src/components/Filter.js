/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import s from "./Filter.module.scss";

export default function Filter({ title }) {
  const [country, setCountry] = useState("Kenya");
  console.log(country);
  return (
    <div className={s["filter"]}>
      <label htmlFor="cars">
        <h3>{title}</h3>
      </label>
      <select
        name="cars"
        id="cars"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="volvo">0 - 1,000,000</option>
        <option value="saab">1,000,000 - 5,000,000</option>
        <option value="mercedes">5,000,001 - 10,000,000</option>
        <option value="audi">10,000,001 - 15,000,000</option>
      </select>
    </div>
  );
}
