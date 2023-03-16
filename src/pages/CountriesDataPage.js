import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { getCountryData, getCountriesData } from "../redux/countriesSlice";

function CountriesDataPage() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountriesData());
  }, [dispatch]);

  return (
    <main>
      <Hero />
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
    </main>
  );
}

export default CountriesDataPage;