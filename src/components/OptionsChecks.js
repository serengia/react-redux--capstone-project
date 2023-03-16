/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import s from "./OptionsChecks.module.scss";

export default function OptionsChecks() {
  return (
    <div className={s["options-check"]}>
      <div className={s["header"]}>
        <h3>View data by:</h3>
      </div>
      <div className={s["body"]}>
        <div className={`${s["checkbox-wrapper"]} ${s["continents-view"]}`}>
          <input type="checkbox" name="" id="check-continents" />
          <label htmlFor="check-continents">Continent</label>
        </div>
        <div className={`${s["checkbox-wrapper"]} ${s["countries-view"]}`}>
          <input type="checkbox" name="" id="check-countries" />
          <label htmlFor="check-countries">Country</label>
        </div>
      </div>
    </div>
  );
}
