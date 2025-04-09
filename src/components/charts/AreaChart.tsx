import React from "react";
import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartTooltip = styled(Tooltip)`
  .recharts-tooltip-wrapper {
    background-color: white;
    border: 1px solid #dddddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StyledCartesianGrid = styled(CartesianGrid)`
  stroke-dasharray: 3 3;
  stroke: #f0f0f0;
`;

interface AreaChartProps {
  data: Array<{
    country: string;
    sales: number;
  }>;
}

const CustomAreaChart: React.FC<AreaChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <StyledCartesianGrid />
        <XAxis dataKey="country" stroke="#888888" tick={{ fontSize: 12 }} />
        <YAxis stroke="#888888" tick={{ fontSize: 12 }} />
        <ChartTooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#3B82F6"
          fill="#3B82F6"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChart;
