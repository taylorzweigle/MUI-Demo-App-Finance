//Taylor Zweigle, 2023
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import {
  TYPE_BILLS_UTILITIES,
  TYPE_CAR,
  TYPE_ENTERTAINMENT,
  TYPE_FOOD_DRINK,
  TYPE_GAS,
  TYPE_GIFTS_DONATIONS,
  TYPE_GROCERIES,
  TYPE_SHOPPING,
  TYPE_TRAVEL,
} from "../../utility/types";

import { getPieFraction } from "../../utility/utility";

const PieChart = ({ theme, year }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (year !== "2022") {
      setData([
        { name: "category1", y: 11.11 },
        { name: "category2", y: 11.11 },
        { name: "category3", y: 11.11 },
        { name: "category4", y: 11.11 },
        { name: "category5", y: 11.11 },
        { name: "category6", y: 11.11 },
        { name: "category7", y: 11.11 },
        { name: "category8", y: 11.11 },
        { name: "category9", y: 11.11 },
      ]);
    } else {
      setData([
        {
          name: TYPE_BILLS_UTILITIES.type,
          color: TYPE_BILLS_UTILITIES.color,
          y: getPieFraction(TYPE_BILLS_UTILITIES),
        },
        {
          name: TYPE_CAR.type,
          color: TYPE_CAR.color,
          y: getPieFraction(TYPE_CAR),
        },
        {
          name: TYPE_ENTERTAINMENT.type,
          color: TYPE_ENTERTAINMENT.color,
          y: getPieFraction(TYPE_ENTERTAINMENT),
        },
        {
          name: TYPE_FOOD_DRINK.type,
          color: TYPE_FOOD_DRINK.color,
          y: getPieFraction(TYPE_FOOD_DRINK),
        },
        {
          name: TYPE_GAS.type,
          color: TYPE_GAS.color,
          y: getPieFraction(TYPE_GAS),
        },
        {
          name: TYPE_GIFTS_DONATIONS.type,
          color: TYPE_GIFTS_DONATIONS.color,
          y: getPieFraction(TYPE_GIFTS_DONATIONS),
        },
        {
          name: TYPE_GROCERIES.type,
          color: TYPE_GROCERIES.color,
          y: getPieFraction(TYPE_GROCERIES),
        },
        {
          name: TYPE_SHOPPING.type,
          color: TYPE_SHOPPING.color,
          y: getPieFraction(TYPE_SHOPPING),
        },
        {
          name: TYPE_TRAVEL.type,
          color: TYPE_TRAVEL.color,
          y: getPieFraction(TYPE_TRAVEL),
        },
      ]);
    }

    //eslint-disable-next-line
  }, [year]);

  const options = {
    chart: {
      type: "pie",
      backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      style: {
        color: theme === "dark" ? "#000000" : "#ffffff",
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
