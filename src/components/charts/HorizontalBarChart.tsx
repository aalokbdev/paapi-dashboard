import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StyledCartesianGrid = styled(CartesianGrid)`
  stroke-dasharray: 3 3;

  .recharts-cartesian-grid-horizontal {
    display: none;
  }
`;

const StyledTooltip = styled(Tooltip)`
  .recharts-tooltip-wrapper {
    background-color: white;
    border: 1px solid #dddddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StyledLegend = styled(Legend)`
  .recharts-legend-item {
    margin-right: 10px;
  }
`;

interface HorizontalBarChartProps {
  data: Array<{
    product: string;
    sales: number;
    margin: number;
  }>;
}

const CustomHorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  data,
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ left: 20, right: 20, bottom: 5 }}
      >
        <StyledCartesianGrid />
        <XAxis type="number" tick={{ fontSize: 12 }} />
        <YAxis dataKey="product" type="category" tick={{ fontSize: 12 }} />
        <StyledTooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        />
        <StyledLegend />
        <Bar dataKey="sales" fill="#3B82F6" background={{ fill: "#e6f2ff" }} />
        <Bar dataKey="margin" fill="#10B981" background={{ fill: "#e6f3ed" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomHorizontalBarChart;
