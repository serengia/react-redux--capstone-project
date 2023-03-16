import React from "react";
import Filter from "./Filter";
import s from "./Hero.module.scss";
import OptionsChecks from "./OptionsChecks";

export default function Hero() {
  return (
    <section className={s["section-hero"]}>
      <div className={`${s["hero-container"]} row`}>
        <h1 className={s["main-text"]}>Covid-19 Live Global Data</h1>
        <div className={s["filter-container"]}>
          <OptionsChecks />
          <Filter />
        </div>
      </div>
    </section>
  );
}
