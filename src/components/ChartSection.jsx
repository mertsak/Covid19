import React from "react";
import { useSelector } from "react-redux";

import { Bar } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

const ChartSection = () => {
  // const country = useSelector((state) => state.covid.country);
  const country = useSelector((state) => state.covid.country);

  console.log(country);

  return (
    <div className="chart-container">
      <Bar
        data={{
          labels: ["Infected", "Deaths", "Active"],
          datasets: [
            {
              label: "People",
              borderWidth: 1,
              backgroundColor: ["#BFDBFE", "#FECACA", "#FEF08A"],
              data: [
                country.confirmed.value,
                country.deaths.value,
                country.confirmed.value - country.deaths.value,
              ],
              borderColor: "black",
              borderRadius: 5,
              hoverBorderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartSection;
