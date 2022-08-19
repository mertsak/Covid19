import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import CountUp from "react-countup";
import "moment/locale/en-nz";
import "moment/locale/tr";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Safeımg from "../assets/medical-mask-pana.svg";
import { fetchData } from "../redux/covidSlice/services";

const Card = () => {
  const data = useSelector((state) => state.covid.covidData);
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  if (language) {
    moment.locale("en-nz");
  } else {
    moment.locale("tr");
  }

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="home-img-con">
        <div className="home-img">
          <img src={Safeımg} alt="" />
        </div>

        {language ? (
          <p className="home-text">
            Stay Safe,
            <br /> Keep Social <br /> Distancing
          </p>
        ) : (
          <p className="home-text">
            Güvende Kalın,
            <br /> Sosyal Mesafeyi
            <br /> Koruyun
          </p>
        )}
      </div>

      <div className="home-content">
        {language ? <h2>Global Data</h2> : <h2>Küresel Veri</h2>}

        <div className="card-info">
          {language ? (
            <small>
              <span>Last Updated:</span>
              {data && moment(data.lastUpdate).format("MMMM Do YYYY, hh:mm")}
            </small>
          ) : (
            <small>
              <span>Son güncelleme:</span>
              {data && moment(data.lastUpdate).format("MMMM Do YYYY, hh:mm")}
            </small>
          )}
        </div>

        <div className="card-box">
          <div className="card-2">
            <div className="card">
              {language ? (
                <p className="title">Infected</p>
              ) : (
                <p className="title">Enfekte</p>
              )}

              <p>
                <CountUp
                  start={0}
                  end={data && data.confirmed.value}
                  separator=","
                ></CountUp>
              </p>
            </div>
            <div className="card card-x">
              {language ? (
                <p className="title">Active</p>
              ) : (
                <p className="title">Aktif</p>
              )}

              <p>
                <CountUp
                  start={0}
                  end={data && data.confirmed.value - data.deaths.value}
                  separator=","
                ></CountUp>
              </p>
            </div>
          </div>

          <div className="card-1">
            {language ? (
              <p className="title">Deaths</p>
            ) : (
              <p className="title">Ölüm</p>
            )}

            <p>
              <CountUp
                start={0}
                end={data && data.deaths.value}
                separator=","
              ></CountUp>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
