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
  stroke: #f0f0f0;
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

interface BarChartProps {
  data: Array<{
    product: string;
    sales: number;
    margin: number;
  }>;
}

const CustomBarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <StyledCartesianGrid />
        <XAxis dataKey="product" stroke="#888888" tick={{ fontSize: 12 }} />
        <YAxis stroke="#888888" tick={{ fontSize: 12 }} />
        <StyledTooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        />
        <StyledLegend />
        <Bar
          dataKey="sales"
          fill="#3B82F6"
          barSize={20}
          background={{ fill: "#f0f0f0" }}
        />
        <Bar
          dataKey="margin"
          fill="#10B981"
          barSize={20}
          background={{ fill: "#e6f3ed" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
