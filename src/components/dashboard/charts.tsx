"use client";

import React, { useState, useEffect } from "react";
import { keyframes } from "styled-components";
import dynamic from "next/dynamic";
import { Settings, ChevronUp, ChevronDown, ChevronRight } from "lucide-react";

import {
  monthlySalesData,
  userEngagementData,
  productPerformanceData,
  geographicSalesData,
  performanceMetrics,
} from "@/data/mockdata";

import {
  PerformanceGrid,
  PerformanceCard,
  PerformanceCardHeader,
  PerformanceCardTitle,
  PerformanceCardValue,
  PerformanceCardTrend,
  ChartsGrid,
  ChartContainer,
  ChartHeader,
  ChartTitleArea,
  ChartTitle,
  ChartDescription,
  ChartControls,
  ChartControlButton,
  ChartOptionsMenu,
  ChartOption,
  ChartsSectionHeader,
  ChartsSectionTitle,
  ChartTabs,
  ChartTab,
  breakpoints,
} from "./styles";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const LineChart = dynamic(() => import("@/components/charts/LineChart"), {
  ssr: false,
});
const BarChart = dynamic(() => import("@/components/charts/BarChart"), {
  ssr: false,
});
const PieChart = dynamic(() => import("@/components/charts/PieChart"), {
  ssr: false,
});
const AreaChart = dynamic(() => import("@/components/charts/AreaChart"), {
  ssr: false,
});
const ScatterChart = dynamic(() => import("@/components/charts/ScatterChart"), {
  ssr: false,
});
const RadarChart = dynamic(() => import("@/components/charts/RadarChart"), {
  ssr: false,
});
const ComposedChart = dynamic(
  () => import("@/components/charts/ComposedChart"),
  { ssr: false }
);
const DonutChart = dynamic(() => import("@/components/charts/DonutChart"), {
  ssr: false,
});
const HorizontalBarChart = dynamic(
  () => import("@/components/charts/HorizontalBarChart"),
  { ssr: false }
);
const StackedBarChart = dynamic(
  () => import("@/components/charts/StackedBarChart"),
  { ssr: false }
);

interface ChartConfig {
  id: string;
  expanded: boolean;
  optionsOpen: boolean;
  favorite: boolean;
}

const Chart: React.FC = () => {
  const [dateMenuOpen, setDateMenuOpen] = useState(false);

  const [activeView, setActiveView] = useState("all");

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

  const toggleChartExpansion = (chartId: string) => {
    setChartConfigs((prev) => ({
      ...prev,
      [chartId]: {
        ...prev[chartId],
        expanded: !prev[chartId].expanded,
        optionsOpen: false,
      },
    }));
  };

  const toggleChartOptions = (chartId: string) => {
    setChartConfigs((prev) => {
      const newConfigs = { ...prev };

      Object.keys(newConfigs).forEach((key) => {
        newConfigs[key] = { ...newConfigs[key], optionsOpen: false };
      });

      newConfigs[chartId] = {
        ...newConfigs[chartId],
        optionsOpen: !prev[chartId].optionsOpen,
      };

      return newConfigs;
    });
  };

  const toggleChartFavorite = (chartId: string) => {
    setChartConfigs((prev) => ({
      ...prev,
      [chartId]: {
        ...prev[chartId],
        favorite: !prev[chartId].favorite,
      },
    }));
  };

  const metricTrends = {
    totalRevenue: "up",
    averageOrderValue: "up",
    conversionRate: "down",
    activeUsers: "up",
  };

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

  const getVisibleCharts = () => {
    if (activeView === "all") return Object.keys(chartConfigs);
    if (activeView === "favorites")
      return Object.keys(chartConfigs).filter(
        (id) => chartConfigs[id].favorite
      );
    return Object.keys(chartConfigs);
  };

  const renderChartControls = (chartId: string) => (
    <ChartControls>
      <ChartControlButton
        onClick={(e) => {
          e.stopPropagation();
          toggleChartFavorite(chartId);
        }}
      >
        {chartConfigs[chartId].favorite ? "★" : "☆"}
      </ChartControlButton>
      <ChartControlButton
        onClick={(e) => {
          e.stopPropagation();
          toggleChartExpansion(chartId);
        }}
      >
        {chartConfigs[chartId].expanded ? (
          <ChevronDown size={18} />
        ) : (
          <ChevronUp size={18} />
        )}
      </ChartControlButton>
      <ChartControlButton
        onClick={(e) => {
          e.stopPropagation();
          toggleChartOptions(chartId);
        }}
      >
        <Settings size={18} />
      </ChartControlButton>
    </ChartControls>
  );

  const renderChartOptionsMenu = (chartId: string) =>
    chartConfigs[chartId].optionsOpen && (
      <ChartOptionsMenu onClick={(e) => e.stopPropagation()}>
        <ChartOption>View Full Screen</ChartOption>
        <ChartOption>Download CSV</ChartOption>
        <ChartOption>Change Chart Type</ChartOption>
        <ChartOption>Customize Colors</ChartOption>
      </ChartOptionsMenu>
    );

  return (
    <>
      <PerformanceGrid>
        {Object.entries(performanceMetrics).map(([key, value]) => {
          const formattedKey = key.replace(/([A-Z])/g, " $1").trim();
          const trend =
            metricTrends[key as keyof typeof metricTrends] || "neutral";

          return (
            <PerformanceCard
              key={key}
              $trending={trend as "up" | "down" | "neutral"}
            >
              <PerformanceCardHeader>
                <PerformanceCardTitle>{formattedKey}</PerformanceCardTitle>
              </PerformanceCardHeader>
              <PerformanceCardValue>
                {key.includes("rate") ? `${value}%` : value.toLocaleString()}
              </PerformanceCardValue>
              <PerformanceCardTrend
                $trending={trend as "up" | "down" | "neutral"}
              >
                {trend === "up" && <ChevronUp size={14} />}
                {trend === "down" && <ChevronDown size={14} />}
                {trend === "neutral" && <ChevronRight size={14} />}
                <span>
                  {trend === "up"
                    ? "+12% vs last period"
                    : trend === "down"
                    ? "-5% vs last period"
                    : "No change"}
                </span>
              </PerformanceCardTrend>
            </PerformanceCard>
          );
        })}
      </PerformanceGrid>

      <ChartsSectionHeader>
        <ChartsSectionTitle>Analytics Overview</ChartsSectionTitle>
        <ChartTabs>
          <ChartTab
            $active={activeView === "all"}
            onClick={() => setActiveView("all")}
          >
            All
          </ChartTab>
          <ChartTab
            $active={activeView === "favorites"}
            onClick={() => setActiveView("favorites")}
          >
            Favorites
          </ChartTab>
        </ChartTabs>
      </ChartsSectionHeader>

      <ChartsGrid>
        {getVisibleCharts().includes("salesTrend") && (
          <ChartContainer $expanded={chartConfigs.salesTrend.expanded}>
            <ChartHeader>
              <ChartTitleArea>
                <ChartTitle>Monthly Sales Trend</ChartTitle>
                <ChartDescription>
                  Revenue and profit trends over the past year
                </ChartDescription>
              </ChartTitleArea>
              {renderChartControls("salesTrend")}
              {renderChartOptionsMenu("salesTrend")}
            </ChartHeader>
            <LineChart data={monthlySalesData} />
          </ChartContainer>
        )}

        {getVisibleCharts().includes("userEngagement") && (
          <ChartContainer $expanded={chartConfigs.userEngagement.expanded}>
            <ChartHeader>
              <ChartTitleArea>
                <ChartTitle>User Engagement by Platform</ChartTitle>
                <ChartDescription>
                  Distribution of users across different platforms
                </ChartDescription>
              </ChartTitleArea>
              {renderChartControls("userEngagement")}
              {renderChartOptionsMenu("userEngagement")}
            </ChartHeader>
            <PieChart data={userEngagementData} />
          </ChartContainer>
        )}

        {getVisibleCharts().includes("productSales") && (
          <ChartContainer $expanded={chartConfigs.productSales.expanded}>
            <ChartHeader>
              <ChartTitleArea>
                <ChartTitle>Product Sales Performance</ChartTitle>
                <ChartDescription>
                  Sales and margin for key products
                </ChartDescription>
              </ChartTitleArea>
              {renderChartControls("productSales")}
              {renderChartOptionsMenu("productSales")}
            </ChartHeader>
            <BarChart data={productPerformanceData} />
          </ChartContainer>
        )}

        {getVisibleCharts().includes("geoSales") && (
          <ChartContainer $expanded={chartConfigs.geoSales.expanded}>
            <ChartHeader>
              <ChartTitleArea>
                <ChartTitle>Geographic Sales Distribution</ChartTitle>
                <ChartDescription>
                  Sales performance across different countries
                </ChartDescription>
              </ChartTitleArea>
              {renderChartControls("geoSales")}
              {renderChartOptionsMenu("geoSales")}
            </ChartHeader>
            <AreaChart data={geographicSalesData} />
          </ChartContainer>
        )}

        {getVisibleCharts().includes("productMargin") && (
          <ChartContainer $expanded={chartConfigs.productMargin.expanded}>
            <ChartHeader>
              <ChartTitleArea>
                <ChartTitle>Product Sales vs Margin</ChartTitle>
                <ChartDescription>
                  Relationship between sales volume and profit margin
                </ChartDescription>
              </ChartTitleArea>
              {renderChartControls("productMargin")}
              {renderChartOptionsMenu("productMargin")}
            </ChartHeader>
            <ScatterChart data={productPerformanceData} />
          </ChartContainer>
        )}

        {getVisibleCharts().includes("revenueProfit") && (
          <ChartContainer $expanded={chartConfigs.revenueProfit.expanded}>
            <ChartHeader>
              <ChartTitleArea>
                <ChartTitle>Revenue and Profit Composition</ChartTitle>
                <ChartDescription>
                  Detailed view of revenue and profit trends
                </ChartDescription>
              </ChartTitleArea>
              {renderChartControls("revenueProfit")}
              {renderChartOptionsMenu("revenueProfit")}
            </ChartHeader>
            <ComposedChart data={monthlySalesData} />
          </ChartContainer>
        )}

        {getVisibleCharts().includes("multiDimensional") && (
          <ChartContainer $expanded={chartConfigs.multiDimensional.expanded}>
            <ChartHeader>
              <ChartTitleArea>
                <ChartTitle>Multi-dimensional Performance</ChartTitle>
                <ChartDescription>
                  Comprehensive performance analysis
                </ChartDescription>
              </ChartTitleArea>
              {renderChartControls("multiDimensional")}
              {renderChartOptionsMenu("multiDimensional")}
            </ChartHeader>
            <RadarChart data={productPerformanceData} />
          </ChartContainer>
        )}

        {getVisibleCharts().includes("productDistribution") && (
          <ChartContainer $expanded={chartConfigs.productDistribution.expanded}>
            <ChartHeader>
              <ChartTitleArea>
                <ChartTitle>Product Distribution</ChartTitle>
                <ChartDescription>Breakdown of product sales</ChartDescription>
              </ChartTitleArea>
              {renderChartControls("productDistribution")}
              {renderChartOptionsMenu("productDistribution")}
            </ChartHeader>
            <DonutChart data={productPerformanceData} />
          </ChartContainer>
        )}

        {getVisibleCharts().includes("salesByProduct") && (
          <ChartContainer $expanded={chartConfigs.salesByProduct.expanded}>
            <ChartHeader>
              <ChartTitleArea>
                <ChartTitle>Sales by Product</ChartTitle>
                <ChartDescription>
                  Comparative view of product sales
                </ChartDescription>
              </ChartTitleArea>
              {renderChartControls("salesByProduct")}
              {renderChartOptionsMenu("salesByProduct")}
            </ChartHeader>
            <HorizontalBarChart data={productPerformanceData} />
          </ChartContainer>
        )}

        {getVisibleCharts().includes("detailedPerformance") && (
          <ChartContainer $expanded={chartConfigs.detailedPerformance.expanded}>
            <ChartHeader>
              <ChartTitleArea>
                <ChartTitle>Detailed Product Performance</ChartTitle>
                <ChartDescription>
                  Stacked view of sales metrics
                </ChartDescription>
              </ChartTitleArea>
              {renderChartControls("detailedPerformance")}
              {renderChartOptionsMenu("detailedPerformance")}
            </ChartHeader>
            <StackedBarChart data={monthlySalesData} />
          </ChartContainer>
        )}
      </ChartsGrid>
    </>
  );
};

export default Chart;
