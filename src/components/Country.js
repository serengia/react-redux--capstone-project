import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { timestampToDate } from "./Continent";
import s from "./Country.module.scss";

// {
//     "updated": 0,
//     "country": "string",
//     "countryInfo": {
//       "_id": 0,
//       "iso2": "string",
//       "iso3": "string",
//       "lat": 0,
//       "long": 0,
//       "flag": "string"
//     }
//   }

export default function Country(props) {
  const {
    updated,
    country,
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
    countryInfo,
  } = props.data;
  return (
    <div className={s["country"]}>
      <hr className="divider-2" />
      <div className={s["header"]}>
        <img
          src={countryInfo?.flag}
          alt={`${country} flag`}
          className={s["flag"]}
        />
        <div className={s["details"]}>
          <h2 className={s["title"]}>
            Country: <span>{country}</span>
          </h2>
          <p className={s["detail"]}>
            Population: <span>{population}</span>
          </p>
          <p className={s["detail"]}>
            Continent: <span>{continent}</span>
          </p>
        </div>
      </div>

      <div className={s["stats"]}>
        <ul className={s["stats-list"]}>
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
    </div>
  );
}
