import React from "react";
import styled from "styled-components";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }

  .recharts-legend-item-text {
    margin-left: 4px;
  }
`;

interface PieChartProps {
  data: Array<{
    platform: string;
    users: number;
  }>;
}

const COLORS = ["#3B82F6", "#10B981", "#6366F1", "#F43F5E", "#F59E0B"];
const HOVER_COLORS = ["#2563EB", "#059669", "#4F46E5", "#E11D48", "#D97706"];

const CustomPieChart: React.FC<PieChartProps> = ({ data }) => {
  const handleMouseEnter = (
    event: React.MouseEvent<SVGElement>,
    index: number
  ) => {
    const target = event.target as SVGElement;
    target.setAttribute("fill", HOVER_COLORS[index % HOVER_COLORS.length]);
  };

  const handleMouseLeave = (
    event: React.MouseEvent<SVGElement>,
    index: number
  ) => {
    const target = event.target as SVGElement;
    target.setAttribute("fill", COLORS[index % COLORS.length]);
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius="80%"
          innerRadius="60%"
          paddingAngle={5}
          fill="#8884d8"
          dataKey="users"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="white"
              strokeWidth={2}
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(event) => handleMouseEnter(event, index)}
              onMouseLeave={(event) => handleMouseLeave(event, index)}
            />
          ))}
        </Pie>
        <StyledTooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        />
        <StyledLegend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconType="circle"
          iconSize={10}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
