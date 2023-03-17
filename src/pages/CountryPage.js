import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Country from "../components/Country";
import Hero from "../components/Hero";
import s from "./CountryPage.module.scss";

export default function CountryPage() {
  const { country: countryName } = useParams();

  const { countries } = useSelector((state) => state.countries);

  const countryData = countries.find((c) => c.country === countryName);
  console.log("This is the country data,", countryData);

  if (!countryData) {
    return <p>Could not find a result.</p>;
  }

  const extraComps = (
    <div className={s["extra-components"]}>
      <h1>{`Country: ${countryData.country}`}</h1>
    </div>
  );

  return (
    <main className={s["country-page"]}>
      <Hero
        showFilters={false}
        opacity={0.5}
        showHeader={false}
        extraComps={extraComps}
      />
      <div className={`${s["body-content"]} row`}>
        <Country data={countryData} />
      </div>
    </main>
  );
}
