import React from "react";
import Filter from "./Filter";
import s from "./Hero.module.scss";
import OptionsChecks from "./OptionsChecks";
// eslint-disable-next-line import/no-absolute-path, no-unused-vars
const bgImage = "../extraImages/covid-banner.png";
// eslint-disable-next-line no-unused-vars
const bgImage2 = "../../public/img/covid-banner.png";
// eslint-disable-next-line import/first, no-unused-vars
import bgImage3 from "../extraImages/covid-banner.png";

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
            <Filter title="Filter by recovery rates" />
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
