//Taylor Zweigle, 2023
import {
  TYPE_BILLS_UTILITIES,
  TYPE_CAR,
  TYPE_ENTERTAINMENT,
  TYPE_FOOD_DRINK,
  TYPE_GAS,
  TYPE_GIFTS_DONATIONS,
  TYPE_GROCERIES,
  TYPE_INCOME,
  TYPE_PAYMENT,
  TYPE_SHOPPING,
  TYPE_TRAVEL,
} from "./types";

import { data } from "../data/data";
import { contacts } from "../data/contacts";

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const _getYearTotalSpending = (year) => {
  let totalYear = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].date.slice(8, 12) === year) {
      totalYear = totalYear + data[i].amount;
    }
  }

  return totalYear;
};

const _getMonthTotalSpending = (month) => {
  let monthTotal = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].date.slice(0, 3) === month) {
      monthTotal = monthTotal + data[i].amount;
    }
  }

  return monthTotal;
};

const _getTotalIncome = () => {
  let totalIncome = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].amount > 0.0) {
      totalIncome = totalIncome + data[i].amount;
    }
  }

  return totalIncome;
};

const _getTotalExpenses = () => {
  let totalExpenses = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].amount < 0.0) {
      totalExpenses = totalExpenses + data[i].amount;
    }
  }

  return totalExpenses;
};

const _getMonthBalance = (months, index) => {
  let monthTotal = 0;

  for (let i = 0; i <= index; i++) {
    monthTotal = monthTotal + _getMonthTotalSpending(months[i]);
  }

  return monthTotal;
};

const _getTabNetTotal = (account, month) => {
  let tabTotal = 0.0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].date.slice(0, 3) === month && data[i].account === account) {
      tabTotal = tabTotal + data[i].amount;
    }
  }

  return tabTotal;
};

const _getTabGrossTotal = (account, month) => {
  let tabTotal = 0.0;

  for (let i = 0; i < data.length; i++) {
    if (
      data[i].date.slice(0, 3) === month &&
      data[i].account === account &&
      data[i].amount > 0
    ) {
      tabTotal = tabTotal + data[i].amount;
    }
  }

  return tabTotal;
};

const _getTabDebitTotal = (account, month) => {
  let tabTotal = 0.0;

  for (let i = 0; i < data.length; i++) {
    if (
      data[i].date.slice(0, 3) === month &&
      data[i].account === account &&
      data[i].amount < 0
    ) {
      tabTotal = tabTotal + data[i].amount;
    }
  }

  return tabTotal;
};

const _getCategorySpending = (category) => {
  let categoryTotal = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].type === category) {
      categoryTotal = categoryTotal + data[i].amount;
    }
  }

  return categoryTotal * -1;
};

const _getCategorySpendingPercentage = (category) =>
  _getCategorySpending(category) / _getYearTotalSpending("2022");

const _getAvatar = (contact) => {
  let avatar = "";

  for (let i = 0; i < contacts.length; i++) {
    if (contact === contacts[i].name) {
      avatar = contacts[i].avatar;
    }
  }

  return avatar;
};

const _getBalance = (contact) => {
  let balance = 0.0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].contact === contact) {
      balance = balance + data[i].amount;
    }
  }

  return balance;
};

export const getNetWorth = () =>
  formatCurrency(_getYearTotalSpending("2021") + _getYearTotalSpending("2022"));

export const getTotalIncome = () => formatCurrency(_getTotalIncome());

export const getTotalExpenses = () => formatCurrency(_getTotalExpenses());

export const getPieFraction = (category) =>
  _getCategorySpendingPercentage(category.type);

export const getBarTotal = (months, index) => _getMonthBalance(months, index);

export const getTabNetTotal = (account, month) =>
  _getTabNetTotal(account, month);

export const getTabGrossTotal = (account, month) =>
  _getTabGrossTotal(account, month);

export const getTabDebitTotal = (account, month) =>
  _getTabDebitTotal(account, month);

export const formatCurrency = (currency) =>
  currency > 0 ? currency.toFixed(2) : (currency * -1).toFixed(2);

export const formatCurrencyColor = (currency) =>
  currency > 0 ? "secondary.main" : "tertiary.main";

export const getAvatar = (contact) => _getAvatar(contact);

export const getBalance = (contact) => _getBalance(contact);

export const convertType = (type) => {
  switch (type) {
    case "bills and utilities":
      return TYPE_BILLS_UTILITIES;
    case "car":
      return TYPE_CAR;
    case "entertainment":
      return TYPE_ENTERTAINMENT;
    case "food and drink":
      return TYPE_FOOD_DRINK;
    case "gas":
      return TYPE_GAS;
    case "gifts and donations":
      return TYPE_GIFTS_DONATIONS;
    case "groceries":
      return TYPE_GROCERIES;
    case "income":
      return TYPE_INCOME;
    case "payment":
      return TYPE_PAYMENT;
    case "shopping":
      return TYPE_SHOPPING;
    case "travel":
      return TYPE_TRAVEL;
    default:
      return null;
  }
};
