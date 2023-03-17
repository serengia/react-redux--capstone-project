/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { HiMinus, HiPlus, HiOutlineClock } from "react-icons/hi";
import s from "./Continent.module.scss";

// {
//     "updated": 1679013814456,
//     "cases": 125134719,
//     "todayCases": 4227,
//     "deaths": 1616748,
//     "todayDeaths": 83,
//     "recovered": 120594046,
//     "todayRecovered": 15298,
//     "active": 2923925,
//     "critical": 7447,
//     "casesPerOneMillion": 209206.08,
//     "deathsPerOneMillion": 2702.96,
//     "tests": 1306826985,
//     "testsPerOneMillion": 2184814.56,
//     "population": 598140916,
//     "continent": "North America",
//     "activePerOneMillion": 4888.35,
//     "recoveredPerOneMillion": 201614.77,
//     "criticalPerOneMillion": 12.45,
//     "continentInfo": {
//       "lat": 31.6768272,
//       "long": -146.4707474
//     },
//     "countries": []

export function timestampToDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function Continent(props) {
  const [showCountries, setShowCountries] = useState(false);
  const {
    updated,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    population,
    continent,
    active,
    critical,
    countries: countriesArr,
  } = props.data;
  return (
    <div className={s["continent"]}>
      <h2 className={s["title"]}>
        Continent: <span>{continent}</span>{" "}
      </h2>
      <hr className="divider" />
      <div className={s["stats"]}>
        <ul>
          <li>
            Cases: <span> {cases}</span>
          </li>
          <li>
            Today cases: <span>{todayCases}</span>
          </li>
          <li>
            Deaths: <span>{deaths}</span>
          </li>
          <li>
            Today Deaths: <span>{todayDeaths}</span>
          </li>
          <li>
            Recovered: <span>{recovered}</span>
          </li>
          <li>
            Today recovered: <span>{todayRecovered}</span>
          </li>
          <li>
            Population: <span>{population}</span>
          </li>
          <li>
            Active: <span>{active}</span>
          </li>
          <li>
            Critical: <span>{critical}</span>
          </li>
        </ul>
      </div>
      <p className={s["updated-time"]}>
        <HiOutlineClock className={s["icon"]} /> Updated at:{" "}
        <span>{timestampToDate(updated)}</span>
      </p>
      <div className={s["countries-wrapper"]}>
        <button
          type="button"
          className={s["toggle-countries"]}
          onClick={() => setShowCountries(!showCountries)}
        >
          {!showCountries && (
            <div className={`${s["show"]} ${s["option"]}`}>
              <span>
                <HiPlus className={s["icon"]} />
              </span>
              <p>Show countries</p>
            </div>
          )}
          {showCountries && (
            <div className={`${s["hide"]} ${s["option"]}`}>
              <span>
                <HiMinus className={s["icon"]} />
              </span>
              <p>Hide countries</p>
            </div>
          )}
        </button>
        {showCountries && (
          <div className={s["countries"]}>
            <ul>
              {countriesArr.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
