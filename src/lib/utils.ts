import { TrendType } from "../types/types";

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const calculateTrend = (
  current: number,
  previous: number
): TrendType => {
  if (current > previous) return "up";
  if (current < previous) return "down";
  return "neutral";
};

export const calculatePercentageChange = (
  current: number,
  previous: number
): number => {
  if (previous === 0) return 0;
  return Math.round(((current - previous) / previous) * 100);
};

export const formatPerformanceValue = (key: string, value: number) => {
  switch (true) {
    case key.includes("rate"):
      return `${value}%`;
    case key.includes("Revenue") || key.includes("Value"):
      return formatCurrency(value);
    default:
      return value.toLocaleString();
  }
};
