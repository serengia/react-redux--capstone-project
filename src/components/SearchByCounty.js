import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { continentsActions } from "../redux/continentsSlice";
import { countriesActions } from "../redux/countriesSlice";

import s from "./SearchByCounty.module.scss";

export default function SearchByCounty() {
  const { view } = useSelector((state) => state.ui);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const inputVal = e.target.value;
    setSearchTerm(inputVal);
    if (view === "countries") {
      dispatch(countriesActions.triggerCountrySearch(searchTerm));
    }
    if (view === "continents") {
      dispatch(continentsActions.triggerContinentSearch(searchTerm));
    }
  };

  let dynamicHeading = "Country";
  let dynamicPlaceholder = "Kenya";
  if (view === "continents") {
    dynamicHeading = "Continent";
    dynamicPlaceholder = "Africa";
  }

  return (
    <div className={s["search-wrapper"]}>
      <h3>Search by {dynamicHeading}</h3>
      <div className={s["search-box"]}>
        <input
          type="text"
          placeholder={`e.g. ${dynamicPlaceholder}`}
          onChange={handleFilter}
        />
      </div>
    </div>
  );
}
