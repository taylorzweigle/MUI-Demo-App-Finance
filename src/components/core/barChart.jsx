//Taylor Zweigle, 2023
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import * as ThemeTokens from "../../themes/systemTokens";

import { getBarTotal } from "../../utility/utility";

const BarChart = ({ theme, year }) => {
  const [data, setData] = useState([]);

  const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  useEffect(() => {
    setData([
      getBarTotal(categories, year, 0),
      getBarTotal(categories, year, 1),
      getBarTotal(categories, year, 2),
      getBarTotal(categories, year, 3),
      getBarTotal(categories, year, 4),
      getBarTotal(categories, year, 5),
      getBarTotal(categories, year, 6),
      getBarTotal(categories, year, 7),
      getBarTotal(categories, year, 8),
      getBarTotal(categories, year, 9),
      getBarTotal(categories, year, 10),
      getBarTotal(categories, year, 11),
    ]);

    //eslint-disable-next-line
  }, [year]);

  const barChartOptions = {
    chart: {
      type: "column",
      backgroundColor: theme === "dark" ? "#171717" : "#ffffff",
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
