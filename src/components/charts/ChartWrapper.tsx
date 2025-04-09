"use client";

import React, { memo } from "react";
import styled from "styled-components";
import { useResponsive } from "@/lib/hooks/useResponsive";
import { trackPerformance } from "@/lib/utils/performance";
const ChartContainer = styled.div<{ $isMobile: boolean }>`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  }
`;

const ChartHeader = styled.div<{ $isMobile: boolean }>`
  margin-bottom: 1rem;
`;

const ChartTitle = styled.h3<{ $isMobile: boolean }>`
  font-weight: 600;
  font-size: ${(props) => (props.$isMobile ? "1.125rem" : "1.25rem")};
`;

const ChartDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
`;

const ChartContent = styled.div`
  width: 100%;
  height: 16rem;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 18rem;
  }

  @media (min-width: 1024px) {
    height: 20rem;
  }
`;

interface ChartWrapperProps {
  title: string;
  children: React.ReactNode;
  description?: string;
}

const ChartWrapper: React.FC<ChartWrapperProps> = memo(
  ({ title, children, description }) => {
    const { deviceType } = useResponsive();
    const isMobile = deviceType === "mobile";

    return (
      <ChartContainer $isMobile={isMobile}>
        <ChartHeader $isMobile={isMobile}>
          <ChartTitle $isMobile={isMobile}>{title}</ChartTitle>
          {description && <ChartDescription>{description}</ChartDescription>}
        </ChartHeader>
        <ChartContent>{children}</ChartContent>
      </ChartContainer>
    );
  }
);

ChartWrapper.displayName = "ChartWrapper";

class ChartPerformance {
  static renderChart(props: ChartWrapperProps) {
    return <ChartWrapper {...props} />;
  }
}

ChartPerformance.renderChart = trackPerformance("ChartWrapper")(
  ChartPerformance.renderChart
);

export default ChartWrapper;
