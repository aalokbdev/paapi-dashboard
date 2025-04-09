"use client";

import React, { useState, useEffect } from "react";
import { keyframes } from "styled-components";
import { Calendar, ChevronUp, ChevronDown } from "lucide-react";

import {
  DashboardHeader,
  DashboardTitle,
  DateRangeSelector,
  ChartOptionsMenu,
  ChartOption,
} from "./styles";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

interface ChartConfig {
  id: string;
  expanded: boolean;
  optionsOpen: boolean;
  favorite: boolean;
}

const DashboardHead: React.FC = () => {
  const [dateRange, setDateRange] = useState("Last 30 days");
  const [dateMenuOpen, setDateMenuOpen] = useState(false);

  const [chartConfigs, setChartConfigs] = useState<{
    [key: string]: ChartConfig;
  }>({
    salesTrend: {
      id: "salesTrend",
      expanded: false,
      optionsOpen: false,
      favorite: false,
    },
    userEngagement: {
      id: "userEngagement",
      expanded: false,
      optionsOpen: false,
      favorite: false,
    },
    productSales: {
      id: "productSales",
      expanded: false,
      optionsOpen: false,
      favorite: false,
    },
    geoSales: {
      id: "geoSales",
      expanded: false,
      optionsOpen: false,
      favorite: false,
    },
    productMargin: {
      id: "productMargin",
      expanded: false,
      optionsOpen: false,
      favorite: false,
    },
    revenueProfit: {
      id: "revenueProfit",
      expanded: false,
      optionsOpen: false,
      favorite: false,
    },
    multiDimensional: {
      id: "multiDimensional",
      expanded: false,
      optionsOpen: false,
      favorite: false,
    },
    productDistribution: {
      id: "productDistribution",
      expanded: false,
      optionsOpen: false,
      favorite: false,
    },
    salesByProduct: {
      id: "salesByProduct",
      expanded: false,
      optionsOpen: false,
      favorite: false,
    },
    detailedPerformance: {
      id: "detailedPerformance",
      expanded: false,
      optionsOpen: false,
      favorite: false,
    },
  });

  useEffect(() => {
    const handleClickOutside = () => {
      setDateMenuOpen(false);
      setChartConfigs((prev) => {
        const newConfigs = { ...prev };
        Object.keys(newConfigs).forEach((key) => {
          newConfigs[key] = { ...newConfigs[key], optionsOpen: false };
        });
        return newConfigs;
      });
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <DashboardHeader>
      <DashboardTitle>Business Analytics Dashboard</DashboardTitle>
      <DateRangeSelector
        onClick={(e) => {
          e.stopPropagation();
          setDateMenuOpen(!dateMenuOpen);
        }}
      >
        <Calendar size={16} style={{ stroke: "#1F2937" }} />
        <span>{dateRange}</span>
        {dateMenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        {dateMenuOpen && (
          <ChartOptionsMenu onClick={(e) => e.stopPropagation()}>
            <ChartOption
              onClick={() => {
                setDateRange("Today");
                setDateMenuOpen(false);
              }}
            >
              Today
            </ChartOption>
            <ChartOption
              onClick={() => {
                setDateRange("Last 7 days");
                setDateMenuOpen(false);
              }}
            >
              Last 7 days
            </ChartOption>
            <ChartOption
              onClick={() => {
                setDateRange("Last 30 days");
                setDateMenuOpen(false);
              }}
            >
              Last 30 days
            </ChartOption>
            <ChartOption
              onClick={() => {
                setDateRange("This quarter");
                setDateMenuOpen(false);
              }}
            >
              This quarter
            </ChartOption>
            <ChartOption
              onClick={() => {
                setDateRange("Year to date");
                setDateMenuOpen(false);
              }}
            >
              Year to date
            </ChartOption>
          </ChartOptionsMenu>
        )}
      </DateRangeSelector>
    </DashboardHeader>
  );
};

export default DashboardHead;
