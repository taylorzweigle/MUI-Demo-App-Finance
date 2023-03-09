//Taylor Zweigle, 2023
import Tooltip from "@mui/material/Tooltip";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ConstructionIcon from "@mui/icons-material/Construction";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import * as ThemeTokens from "../themes/systemTokens";

const iconStyle = {
  width: ThemeTokens.SYS_ICON_SM,
  height: ThemeTokens.SYS_ICON_SM,
};

export const TYPE_BILLS_UTILITIES = {
  type: "bills and utilities",
  color: ThemeTokens.SYS_LIGHT_THEME_CHART_900,
  icon: (
    <Tooltip title="Bills & Utilities" placement="top">
      <CreditCardIcon color="action" sx={iconStyle} />
    </Tooltip>
  ),
};

export const TYPE_CAR = {
  type: "car",
  color: ThemeTokens.SYS_LIGHT_THEME_CHART_800,
  icon: (
    <Tooltip title="Car" placement="top">
      <ConstructionIcon color="action" sx={iconStyle} />
    </Tooltip>
  ),
};

export const TYPE_ENTERTAINMENT = {
  type: "entertainment",
  color: ThemeTokens.SYS_LIGHT_THEME_CHART_700,
  icon: (
    <Tooltip title="Entertainment" placement="top">
      <CalendarMonthIcon color="action" sx={iconStyle} />
    </Tooltip>
  ),
};

export const TYPE_FOOD_DRINK = {
  type: "food and drink",
  color: ThemeTokens.SYS_LIGHT_THEME_CHART_600,
  icon: (
    <Tooltip title="Food & Drink" placement="top">
      <RestaurantIcon color="action" sx={iconStyle} />
    </Tooltip>
  ),
};

export const TYPE_GAS = {
  type: "gas",
  color: ThemeTokens.SYS_LIGHT_THEME_CHART_500,
  icon: (
    <Tooltip title="Gas" placement="top">
      <LocalGasStationIcon color="action" sx={iconStyle} />
    </Tooltip>
  ),
};

export const TYPE_GIFTS_DONATIONS = {
  type: "gifts and donations",
  color: ThemeTokens.SYS_LIGHT_THEME_CHART_400,
  icon: (
    <Tooltip title="Gifts & Donations" placement="top">
      <CardGiftcardIcon color="action" sx={iconStyle} />
    </Tooltip>
  ),
};

export const TYPE_GROCERIES = {
  type: "groceries",
  color: ThemeTokens.SYS_LIGHT_THEME_CHART_300,
  icon: (
    <Tooltip title="Groceries" placement="top">
      <ShoppingCartIcon color="action" sx={iconStyle} />
    </Tooltip>
  ),
};

export const TYPE_INCOME = {
  type: "income",
  color: ThemeTokens.SYS_LIGHT_THEME_CHART_200,
  icon: (
    <Tooltip title="Income" placement="top">
      <AttachMoneyIcon color="action" sx={iconStyle} />
    </Tooltip>
  ),
};

export const TYPE_PAYMENT = {
  type: "payment",
  color: ThemeTokens.SYS_LIGHT_THEME_CHART_200,
  icon: (
    <Tooltip title="Payment" placement="top">
      <MoneyOffIcon color="action" sx={iconStyle} />
    </Tooltip>
  ),
};

export const TYPE_SHOPPING = {
  type: "shopping",
  color: ThemeTokens.SYS_LIGHT_THEME_CHART_100,
  icon: (
    <Tooltip title="Shopping" placement="top">
      <LocalOfferIcon color="action" sx={iconStyle} />
    </Tooltip>
  ),
};

export const TYPE_TRAVEL = {
  type: "travel",
  color: ThemeTokens.SYS_LIGHT_THEME_CHART_50,
  icon: (
    <Tooltip title="Travel" placement="top">
      <LocalTaxiIcon color="action" sx={iconStyle} />
    </Tooltip>
  ),
};
