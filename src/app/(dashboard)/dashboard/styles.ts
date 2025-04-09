import styled, { keyframes } from "styled-components";

export const breakpoints = {
  mobile: "640px",
  tablet: "768px",
  desktop: "1024px",
  large: "1280px",
  xlarge: "1536px",
};


export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  max-width: 1600px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;