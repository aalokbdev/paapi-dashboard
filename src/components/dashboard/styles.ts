import styled, { keyframes, css } from "styled-components";
import { TrendType } from "@/types/types";

export const colors = {
  primary: {
    light: "#3B82F6",
    main: "#2563EB",
    dark: "#1E40AF",
  },
  secondary: {
    light: "#10B981",
    main: "#059669",
    dark: "#047857",
  },
  background: {
    default: "#F3F4F6",
    paper: "#FFFFFF",
  },
  text: {
    primary: "#1F2937",
    secondary: "#4B5563",
    disabled: "#6B7280",
  },
  error: {
    light: "#EF4444",
    main: "#DC2626",
    dark: "#B91C1C",
  },
  success: {
    light: "#10B981",
    main: "#059669",
    dark: "#047857",
  },
  trend: {
    up: "#10B981",
    down: "#EF4444",
    neutral: "#6B7280",
  },
};

export const breakpoints = {
  mobile: "640px",
  tablet: "768px",
  desktop: "1024px",
  large: "1280px",
  xlarge: "1536px",
};

export const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

export const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const shadowStyles = css`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  max-width: 1600px;
  margin: 0 auto;
  background-color: ${colors.background.default};
  animation: ${fadeIn} 0.5s ease-out;
`;

export const DashboardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DashboardTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${colors.text.primary};
`;

export const DateRangeSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${colors.background.paper};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  color: #1f2937;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const PerformanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const PerformanceCard = styled.div<{ $trending?: TrendType }>`
  background-color: ${colors.background.paper};
  padding: 1.25rem;
  border-radius: 0.75rem;
  ${shadowStyles}
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${(props) =>
      props.$trending === "up"
        ? colors.trend.up
        : props.$trending === "down"
        ? colors.trend.down
        : colors.trend.neutral};
  }
`;

export const PerformanceCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

export const PerformanceCardTitle = styled.h3`
  font-size: 0.875rem;
  color: ${colors.text.secondary};
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

export const PerformanceCardValue = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${colors.text.primary};
  margin-bottom: 0.5rem;
`;

export const PerformanceCardTrend = styled.div<{ $trending?: TrendType }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${(props) =>
    props.$trending === "up"
      ? colors.trend.up
      : props.$trending === "down"
      ? colors.trend.down
      : colors.trend.neutral};
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ChartContainer = styled.div<{ $expanded?: boolean }>`
  background-color: ${colors.background.paper};
  border-radius: 0.75rem;
  padding: 1.25rem;
  ${shadowStyles}
  position: relative;
  grid-column: ${(props) => (props.$expanded ? "1 / -1" : "auto")};
  min-height: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 300px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-height: 250px;
  }

  /* Make the chart fill the container */
  & > div {
    flex: 1;
  }

  /* Fix for recharts responsive rendering */
  & .recharts-wrapper,
  & .recharts-surface {
    width: 100% !important;
    height: 100% !important;
    min-height: 200px;
    max-height: 235px;
  }
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const ChartTitleArea = styled.div`
  flex: 1;
`;

export const ChartTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text.primary};
  margin-bottom: 0.25rem;
`;

export const ChartDescription = styled.p`
  font-size: 0.875rem;
  color: ${colors.text.secondary};
`;

export const ChartControls = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ChartControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 0.375rem;
  background-color: ${colors.background.default};
  border: none;
  color: ${colors.text.secondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.background.paper};
    color: ${colors.text.primary};
  }
`;

export const ChartOptionsMenu = styled.div`
  position: absolute;
  top: 4rem;
  right: 1.25rem;
  background-color: ${colors.background.paper};
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  z-index: 10;
  min-width: 150px;
`;

export const ChartOption = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  text-align: left;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  background-color: transparent;
  border: none;
  font-size: 0.875rem;
  color: ${colors.text.secondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.background.default};
    color: ${colors.text.primary};
  }
`;

export const ControlsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background.paper};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: ${breakpoints.mobile}) {
    gap: 0.75rem;
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
  }
`;

export const ControlsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: ${breakpoints.mobile}) {
  }

  @media (max-width: 480px) {
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const ControlButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  background-color: ${colors.background.default};
  border: none;
  font-size: 0.875rem;
  color: ${colors.text.secondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.background.paper};
    color: ${colors.text.primary};
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.75rem;
    flex: 1;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 360px) {
    span {
      display: none;
    }
    padding: 0.4rem;
    justify-content: center;
  }
`;

export const ChartsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChartsSectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text.primary};
`;

export const ChartTabs = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ChartTab = styled.button<{ $active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  border: none;
  background-color: ${(props) =>
    props.$active ? colors.primary.light : colors.background.default};
  color: ${(props) => (props.$active ? "white" : colors.text.secondary)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.$active ? colors.primary.main : colors.background.paper};
  }
`;
