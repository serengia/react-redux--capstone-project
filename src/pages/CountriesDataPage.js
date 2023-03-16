import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { getContinentsData } from "../redux/continentsSlice";
import { getCountryData, getCountriesData } from "../redux/countriesSlice";
import s from "./CountriesDataPage.module.scss";

function CountriesDataPage() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);
  const { continents } = useSelector((state) => state.continents);
  const { view } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(getCountriesData());
    dispatch(getContinentsData());
  }, [dispatch]);

  return (
    <main>
      <Hero />
      <div className={`${s["display-wrapper"]} row`}>
        {view === "countries" && (
          <div className={s["countries-view"]}>
            <h2>Countries View</h2>
            <ul>
              {countries.map((c, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={`${c.countryInfo._id}${i}`}>
                  <p>Checking</p>
                  <button
                    type="button"
                    data-id={c.countryInfo._id}
                    onClick={(e) => {
                      dispatch(getCountryData(e.target.dataset.id));
                    }}
                  >
                    {c.country}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {view === "continents" && (
          <div className={s["continents-view"]}>
            <h2>Continents view</h2>
            <ul>
              {continents.map((con) => (
                <li key={con.continent}>{con.continent}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

export default CountriesDataPage;
