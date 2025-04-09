import React from "react";
import styled from "styled-components";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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

interface ScatterChartProps {
  data: Array<{
    product: string;
    sales: number;
    margin: number;
  }>;
}

const CustomScatterChart: React.FC<ScatterChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <StyledCartesianGrid />
        <XAxis
          type="number"
          dataKey="sales"
          name="Sales"
          stroke="#888888"
          tick={{ fontSize: 12 }}
        />
        <YAxis
          type="number"
          dataKey="margin"
          name="Margin"
          stroke="#888888"
          tick={{ fontSize: 12 }}
        />
        <StyledTooltip
          cursor={{
            strokeDasharray: "3 3",
            fill: "rgba(59, 130, 246, 0.1)",
          }}
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        />
        <Scatter
          name="Product Performance"
          data={data}
          fill="#3B82F6"
          fillOpacity={0.7}
          stroke="#3B82F6"
          strokeWidth={2}
          shape="circle"
          style={{
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(event) => {
            event.target.setAttribute("fill", "#2563EB");
            event.target.setAttribute("r", "12");
          }}
          onMouseLeave={(event) => {
            event.target.setAttribute("fill", "#3B82F6");
            event.target.setAttribute("r", "8");
          }}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default CustomScatterChart;
