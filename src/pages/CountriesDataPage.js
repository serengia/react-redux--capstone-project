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
  const { countries, countrySearchTerm, countryFilterByCasesNumArr } =
    useSelector((state) => state.countries);
  const { continents, continentSearchTerm, continentFilterByCasesNumArr } =
    useSelector((state) => state.continents);
  const { view } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(getCountriesData());
    dispatch(getContinentsData());
    dispatch(getGlobalData());
  }, [dispatch]);

  // eslint-disable-next-line no-unused-vars
  function filterCountriesByCasesMiddleware(dataArr) {
    if (countryFilterByCasesNumArr.length === 0) {
      return dataArr;
    }
    return dataArr.filter(
      (item) =>
        item.cases >= +countryFilterByCasesNumArr[0] &&
        item.cases <= +countryFilterByCasesNumArr[1]
    );
  }

  // eslint-disable-next-line no-unused-vars
  function filterContinentsByCasesMiddleware(dataArr) {
    if (continentFilterByCasesNumArr.length === 0) {
      return dataArr;
    }
    return dataArr.filter(
      (item) =>
        item.cases >= +continentFilterByCasesNumArr[0] &&
        item.cases <= +continentFilterByCasesNumArr[1]
    );
  }

  // eslint-disable-next-line no-unused-vars
  const filterCountries = (dataArr) => {
    return filterCountriesByCasesMiddleware(dataArr).filter((item) =>
      item.country.toLowerCase().includes(countrySearchTerm)
    );
  };

  // eslint-disable-next-line no-unused-vars
  const filterContinents = (dataArr) => {
    return filterContinentsByCasesMiddleware(dataArr).filter((item) =>
      item.continent.toLowerCase().includes(continentSearchTerm)
    );
  };

  return (
    <main className={s["home-page"]}>
      <Hero />
      <div className={`${s["display-wrapper"]} row`}>
        <GlobalStats />
        {view === "countries" && (
          <div className={s["countries-view"]}>
            <ul className={s["countries-list"]}>
              {filterCountries(countries).map((c) => (
                <Country key={c.country} data={c} />
              ))}
            </ul>
          </div>
        )}

        {view === "continents" && (
          <div className={s["continents-view"]}>
            <ul className={s["continents-list"]}>
              {filterContinents(continents).map((con) => (
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
