import React from "react";
import { useSelector } from "react-redux";
import { HiOutlineClock } from "react-icons/hi";
import { timestampToDate } from "./Continent";
import s from "./GlobalStats.module.scss";

export default function GlobalStats() {
  const { global } = useSelector((state) => state.continents);
  const {
    updated,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    population,
    active,
    critical,
  } = global;
  return (
    <div className={s["global-stats"]}>
      <hr className="divider-2" />
      <h3>Global Covid-19 Stats</h3>
      <ul className={s["stats-list"]}>
        <li>
          Population: <span>{population}</span>
        </li>
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
      <p className={s["updated-time"]}>
        <HiOutlineClock className={s["icon"]} /> Updated at:{" "}
        <span>{timestampToDate(updated)}</span>
      </p>
    </div>
  );
}
