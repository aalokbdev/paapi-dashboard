import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
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

interface LineChartProps {
  data: Array<{
    month: string;
    revenue: number;
    profit: number;
  }>;
}

const CustomLineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <StyledCartesianGrid />
        <XAxis dataKey="month" stroke="#888888" tick={{ fontSize: 12 }} />
        <YAxis stroke="#888888" tick={{ fontSize: 12 }} />
        <StyledTooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        />
        <StyledLegend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#3B82F6"
          strokeWidth={2}
          activeDot={{
            r: 8,
            fill: "#3B82F6",
            strokeWidth: 2,
            stroke: "white",
          }}
          dot={{
            r: 4,
            fill: "#3B82F6",
            strokeWidth: 2,
            stroke: "white",
          }}
        />
        <Line
          type="monotone"
          dataKey="profit"
          stroke="#10B981"
          strokeWidth={2}
          activeDot={{
            r: 8,
            fill: "#10B981",
            strokeWidth: 2,
            stroke: "white",
          }}
          dot={{
            r: 4,
            fill: "#10B981",
            strokeWidth: 2,
            stroke: "white",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
