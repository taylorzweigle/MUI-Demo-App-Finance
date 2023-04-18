//Taylor Zweigle, 2023
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import * as types from "../../utility/types";

import { getPieFraction } from "../../utility/utility";

const PieChart = ({ theme, year }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        name: types.TYPE_BILLS_UTILITIES.type,
        color: types.TYPE_BILLS_UTILITIES.color,
        y: getPieFraction(types.TYPE_BILLS_UTILITIES.type, year),
      },
      {
        name: types.TYPE_CAR.type,
        color: types.TYPE_CAR.color,
        y: getPieFraction(types.TYPE_CAR.type, year),
      },
      {
        name: types.TYPE_ENTERTAINMENT.type,
        color: types.TYPE_ENTERTAINMENT.color,
        y: getPieFraction(types.TYPE_ENTERTAINMENT.type, year),
      },
      {
        name: types.TYPE_FOOD_DRINK.type,
        color: types.TYPE_FOOD_DRINK.color,
        y: getPieFraction(types.TYPE_FOOD_DRINK.type, year),
      },
      {
        name: types.TYPE_GAS.type,
        color: types.TYPE_GAS.color,
        y: getPieFraction(types.TYPE_GAS.type, year),
      },
      {
        name: types.TYPE_GIFTS_DONATIONS.type,
        color: types.TYPE_GIFTS_DONATIONS.color,
        y: getPieFraction(types.TYPE_GIFTS_DONATIONS.type, year),
      },
      {
        name: types.TYPE_GROCERIES.type,
        color: types.TYPE_GROCERIES.color,
        y: getPieFraction(types.TYPE_GROCERIES.type, year),
      },
      {
        name: types.TYPE_SHOPPING.type,
        color: types.TYPE_SHOPPING.color,
        y: getPieFraction(types.TYPE_SHOPPING.type, year),
      },
      {
        name: types.TYPE_TRAVEL.type,
        color: types.TYPE_TRAVEL.color,
        y: getPieFraction(types.TYPE_TRAVEL.type, year),
      },
    ]);

    //eslint-disable-next-line
  }, [year]);

  const options = {
    chart: {
      type: "pie",
      backgroundColor: theme === "dark" ? "#171717" : "#ffffff",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      style: {
        color: theme === "dark" ? "#171717" : "#ffffff",
      },
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: "pointer",
        showInLegend: true,
        dataLabels: {
          enabled: true,
        },
      },
    },
    tooltip: {
      pointFormat: "<b>{point.percentage:.1f}%</b>",
    },
    series: [
      {
        name: "Categories",
        colorByPoint: true,
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
