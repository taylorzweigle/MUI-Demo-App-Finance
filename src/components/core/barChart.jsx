//Taylor Zweigle, 2023
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import * as ThemeTokens from "../../themes/systemTokens";

import { getBarTotal } from "../../utility/utility";

const BarChart = ({ theme, year }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (year !== "2022") {
      setData([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    } else {
      setData([
        getBarTotal(categories, 0),
        getBarTotal(categories, 1),
        getBarTotal(categories, 2),
        getBarTotal(categories, 3),
        getBarTotal(categories, 4),
        getBarTotal(categories, 5),
        getBarTotal(categories, 6),
        getBarTotal(categories, 7),
        getBarTotal(categories, 8),
        getBarTotal(categories, 9),
        getBarTotal(categories, 10),
        getBarTotal(categories, 11),
      ]);
    }

    //eslint-disable-next-line
  }, [year]);

  const categories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const barChartOptions = {
    chart: {
      type: "column",
      backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      min: 0.0,
      title: false,
      labels: {
        formatter: function () {
          return "$" + this.axis.defaultLabelFormatter.call(this);
        },
      },
    },
    plotOptions: {
      column: {
        showInLegend: false,
        cursor: "pointer",
      },
    },
    tooltip: {
      pointFormat: "<b>$ {point.y:.1f}</b>",
    },
    series: [
      {
        name: "Balance",
        color: ThemeTokens.SYS_LIGHT_THEME_PRIMARY_MAIN,
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={barChartOptions} />;
};

export default BarChart;
