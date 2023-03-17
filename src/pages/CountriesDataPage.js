import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Continent from "../components/Continent";
import Country from "../components/Country";
import GlobalStats from "../components/GlobalStats";
import Hero from "../components/Hero";
import { getContinentsData, getGlobalData } from "../redux/continentsSlice";
import { getCountriesData } from "../redux/countriesSlice";
import s from "./CountriesDataPage.module.scss";

function CountriesDataPage() {
  const dispatch = useDispatch();
  const { countries, countrySearchTerm } = useSelector(
    (state) => state.countries
  );
  const { continents, continentSearchTerm } = useSelector(
    (state) => state.continents
  );
  const { view } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(getCountriesData());
    dispatch(getContinentsData());
    dispatch(getGlobalData());
  }, [dispatch]);

  return (
    <main className={s["home-page"]}>
      <Hero />
      <div className={`${s["display-wrapper"]} row`}>
        <GlobalStats />
        {view === "countries" && (
          <div className={s["countries-view"]}>
            <ul>
              {countries
                .filter((c) =>
                  c.country.toLowerCase().includes(countrySearchTerm)
                )
                .map((c) => (
                  <Country key={c.country} data={c} />
                ))}
            </ul>
          </div>
        )}

        {view === "continents" && (
          <div className={s["continents-view"]}>
            <ul>
              {continents
                .filter((c) =>
                  c.continent.toLowerCase().includes(continentSearchTerm)
                )
                .map((con) => (
                  <Continent key={con.continent} data={con} />
                ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

export default CountriesDataPage;
