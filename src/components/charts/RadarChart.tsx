import React from "react";
import styled from "styled-components";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StyledPolarGrid = styled(PolarGrid)`
  stroke: #e0e0e0;
  stroke-dasharray: 3 3;
`;

const StyledTooltip = styled(Tooltip)`
  .recharts-tooltip-wrapper {
    background-color: white;
    border: 1px solid #dddddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const StyledPolarAngleAxis = styled(PolarAngleAxis)`
  .recharts-polar-angle-axis-tick-text {
    font-size: 12px;
    fill: #666;
  }
`;

const StyledPolarRadiusAxis = styled(PolarRadiusAxis)`
  .recharts-polar-radius-axis-tick-text {
    font-size: 10px;
    fill: #999;
  }
`;

interface RadarChartProps {
  data: Array<{
    product: string;
    sales: number;
    margin: number;
  }>;
}

const CustomRadarChart: React.FC<RadarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <StyledPolarGrid />
        <StyledPolarAngleAxis dataKey="product" />
        <StyledPolarRadiusAxis angle={30} domain={[0, "auto"]} />
        <Radar
          name="Sales"
          dataKey="sales"
          stroke="#3B82F6"
          fill="#3B82F6"
          fillOpacity={0.6}
          strokeWidth={2}
          dot={{
            stroke: "#3B82F6",
            strokeWidth: 2,
            fill: "white",
          }}
        />
        <Radar
          name="Margin"
          dataKey="margin"
          stroke="#10B981"
          fill="#10B981"
          fillOpacity={0.6}
          strokeWidth={2}
          dot={{
            stroke: "#10B981",
            strokeWidth: 2,
            fill: "white",
          }}
        />
        <StyledTooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default CustomRadarChart;
