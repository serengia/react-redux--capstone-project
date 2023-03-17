import React from "react";
import SearchByCounty from "./SearchByCounty";
import Filter from "./Filter";
import s from "./Hero.module.scss";
import OptionsChecks from "./OptionsChecks";

export default function Hero({
  title = "Covid-19 Live Global Data",
  showFilters = true,
  extraComps,
  opacity = 0.3,
  showHeader = true,
}) {
  return (
    <section className={s["section-hero"]}>
      <div className={`${s["hero-container"]} row`}>
        {showHeader && <h1 className={s["main-text"]}>{title}</h1>}
        {extraComps && extraComps}
        {showFilters && (
          <div className={s["filter-container"]}>
            <OptionsChecks />
            <Filter title="Filter by reported cases" />
            {/* <Filter title="Filter by recovery rates" /> */}
            <SearchByCounty />
          </div>
        )}
      </div>
      <div
        className={s["overlay"]}
        style={{ backgroundColor: `rgba(0,17,40, ${opacity})` }}
      >
        &nbsp;
      </div>
    </section>
  );
}
