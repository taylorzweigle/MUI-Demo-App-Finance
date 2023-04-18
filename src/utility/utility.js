//Taylor Zweigle, 2023
import * as types from "./types";

import { data } from "../data/data";
import { contacts } from "../data/contacts";

/***********************************/
/**** Private Utility Functions ****/
/***********************************/
const _getMonth = (date) => date.slice(0, 3);
const _getYear = (date) => date.slice(8, 12);

const _getMonthTotalSpending = (month, year) => {
  let monthTotal = 0;

  for (let i = 0; i < data.length; i++) {
    if (_getMonth(data[i].date) === month && _getYear(data[i].date) === year) {
      monthTotal = monthTotal + data[i].amount;
    }
  }

  return monthTotal;
};

const _getCategorySpending = (category, year) => {
  let categoryTotal = 0;

  for (let i = 0; i < data.length; i++) {
    if (_getYear(data[i].date) === year && data[i].type === category) {
      categoryTotal = categoryTotal + data[i].amount;
    }
  }

  return categoryTotal * -1;
};

const _getYearTotalSpending = (year) => {
  let totalYear = 0;

  for (let i = 0; i < data.length; i++) {
    if (_getYear(data[i].date) === year) {
      totalYear = totalYear + data[i].amount;
    }
  }

  return totalYear;
};

/***********************************/
/***** Public Utility Functions ****/
/***********************************/
export const formatCurrency = (currency) => {
  return currency > 0 ? currency.toFixed(2) : (currency * -1).toFixed(2);
};

export const formatCurrencyColor = (currency) => {
  return currency > 0 ? "secondary.main" : "tertiary.main";
};

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const getAvatar = (contact) => {
  let avatar = "";

  for (let i = 0; i < contacts.length; i++) {
    if (contact === contacts[i].name) {
      avatar = contacts[i].avatar;
    }
  }

  return avatar;
};

export const getContactBalance = (contact) => {
  let balance = 0.0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].contact === contact) {
      balance = balance + data[i].amount;
    }
  }

  return balance;
};

/***********************************/
/***** Dashboard Summary Cards *****/
/***********************************/
export const getNetWorth = () => {
  let total = 0;

  for (let i = 0; i < data.length; i++) {
    total = total + data[i].amount;
  }

  return formatCurrency(total);
};

export const getTotalIncome = () => {
  let totalIncome = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].amount > 0.0) {
      totalIncome = totalIncome + data[i].amount;
    }
  }

  return formatCurrency(totalIncome);
};

export const getTotalExpenses = () => {
  let totalExpenses = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].amount < 0.0) {
      totalExpenses = totalExpenses + data[i].amount;
    }
  }

  return formatCurrency(totalExpenses);
};

/***********************************/
/****** Dashboard Graph Cards ******/
/***********************************/
export const getBarTotal = (months, year, index) => {
  let monthTotal = 0;

  for (let i = 0; i <= index; i++) {
    monthTotal = monthTotal + _getMonthTotalSpending(months[i], year);
  }

  return monthTotal;
};

export const getPieFraction = (category, year) => {
  let percentage = 0;

  percentage = _getCategorySpending(category, year) / _getYearTotalSpending(year);

  return percentage;
};

/***********************************/
/*** Dashboard Transactions Card ***/
/***********************************/
export const convertType = (type) => {
  switch (type) {
    case "bills and utilities":
      return types.TYPE_BILLS_UTILITIES;
    case "car":
      return types.TYPE_CAR;
    case "entertainment":
      return types.TYPE_ENTERTAINMENT;
    case "food and drink":
      return types.TYPE_FOOD_DRINK;
    case "gas":
      return types.TYPE_GAS;
    case "gifts and donations":
      return types.TYPE_GIFTS_DONATIONS;
    case "groceries":
      return types.TYPE_GROCERIES;
    case "income":
      return types.TYPE_INCOME;
    case "payment":
      return types.TYPE_PAYMENT;
    case "shopping":
      return types.TYPE_SHOPPING;
    case "travel":
      return types.TYPE_TRAVEL;
    default:
      return null;
  }
};

/***********************************/
/** Transactions Summary Container */
/***********************************/
export const getTabNetTotal = (account, month) => {
  let tabTotal = 0.0;

  for (let i = 0; i < data.length; i++) {
    if (_getMonth(data[i].date) === month && data[i].account === account) {
      tabTotal = tabTotal + data[i].amount;
    }
  }

  return tabTotal;
};

export const getTabGrossTotal = (account, month) => {
  let tabTotal = 0.0;

  for (let i = 0; i < data.length; i++) {
    if (_getMonth(data[i].date) === month && data[i].account === account && data[i].amount > 0) {
      tabTotal = tabTotal + data[i].amount;
    }
  }

  return tabTotal;
};

export const getTabDebitTotal = (account, month) => {
  let tabTotal = 0.0;

  for (let i = 0; i < data.length; i++) {
    if (_getMonth(data[i].date) === month && data[i].account === account && data[i].amount < 0) {
      tabTotal = tabTotal + data[i].amount;
    }
  }

  return tabTotal;
};
