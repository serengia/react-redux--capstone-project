/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../redux/UISlice";
import s from "./OptionsChecks.module.scss";

export default function OptionsChecks() {
  const dispatch = useDispatch();
  const handlerContinentChecker = (e) => {
    if (e.target.checked) {
      console.log("YEEH!! Continet checked!");
      dispatch(uiActions.checkContinents());
    }
  };
  const handlerCountryChecker = (e) => {
    if (e.target.checked) {
      console.log("YEEH!! Country checked!");
      dispatch(uiActions.checkCountries());
    }
  };

  return (
    <div className={s["options-check"]}>
      <div className={s["header"]}>
        <h3>View by:</h3>
      </div>
      <div className={s["body"]}>
        <div className={`${s["checkbox-wrapper"]} ${s["continents-view"]}`}>
          <input
            type="radio"
            name="decide"
            id="check-continents"
            onChange={handlerContinentChecker}
          />
          <label htmlFor="check-continents">Continent view</label>
        </div>
        <div className={`${s["checkbox-wrapper"]} ${s["countries-view"]}`}>
          <input
            type="radio"
            name="decide"
            onChange={handlerCountryChecker}
            id="check-countries"
          />
          <label htmlFor="check-countries">Country view</label>
        </div>
      </div>
    </div>
  );
}
