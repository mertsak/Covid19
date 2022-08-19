import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import CountUp from "react-countup";

import "moment/locale/en-nz";
import "moment/locale/tr";

import { fetchCountries, fetchOneData } from "../redux/covidSlice/services";

const DrowDown = () => {
  const [country, setCountry] = useState("Turkey");
  const countryx = useSelector((state) => state.covid.country);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.covid.countries);
  const language = useSelector((state) => state.language.language);

  if (language) {
    moment.locale("en-nz");
  } else {
    moment.locale("tr");
  }

  useEffect(() => {
    dispatch(fetchOneData(country));
    dispatch(fetchCountries());
  }, [dispatch, country]);

  return (
    <>
      <div className="select-container">
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          {country &&
            countries.map((country, i) => (
              <option value={country.name} key={i}>
                {country.name}
              </option>
            ))}
        </select>
      </div>

      <div className="country-data-con">
        <h2>{country}</h2>

        <div className="card-info">
          {language ? (
            <small>
              <span>Last Updated:</span>
              {country &&
                moment(country.lastUpdate).format("MMMM Do YYYY, hh:mm")}
            </small>
          ) : (
            <small>
              <span>Son güncelleme:</span>
              {country &&
                moment(country.lastUpdate).format("MMMM Do YYYY, h:mm:ss a")}
            </small>
          )}
        </div>

        <div className="card-box">
          <div className="card b">
            {language ? (
              <p className="title">Infected</p>
            ) : (
              <p className="title">Enfekte</p>
            )}
            <p>
              <CountUp
                start={0}
                end={countryx && countryx.confirmed.value}
                separator=","
              ></CountUp>
            </p>
          </div>

          <div className="card r">
            {language ? (
              <p className="title">Active</p>
            ) : (
              <p className="title">Aktif</p>
            )}
            <p>
              <CountUp
                start={0}
                end={
                  countryx && countryx.confirmed.value - countryx.deaths.value
                }
                separator=","
              ></CountUp>
            </p>
          </div>

          <div className="card y">
            {language ? (
              <p className="title">Deaths</p>
            ) : (
              <p className="title">Ölüm</p>
            )}
            <p>
              <CountUp
                start={0}
                end={countryx && countryx.deaths.value}
                separator=","
              ></CountUp>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrowDown;
