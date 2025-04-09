import React from "react";
import styled from "styled-components";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StyledCartesianGrid = styled(CartesianGrid)`
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

interface ComposedChartProps {
  data: any;
}

const CustomComposedChart: React.FC<ComposedChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={data}>
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
        <Bar
          dataKey="revenue"
          barSize={20}
          fill="#3B82F6"
          background={{ fill: "#e6f2ff" }}
        />
        <Line
          type="monotone"
          dataKey="profit"
          stroke="#10B981"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CustomComposedChart;
