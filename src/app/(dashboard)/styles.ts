import styled from "styled-components";


export const breakpoints = {
  mobile: "640px",
  tablet: "768px",
  desktop: "1024px",
};

export const LayoutContainer = styled.div<{ $deviceType: string }>`
  display: flex;
  min-height: 100vh;
  transition: all 0.3s ease-in-out;
  flex-direction: ${(props) =>
    props.$deviceType === "mobile" ? "column" : "row"};
  position: relative;
  overflow-x: hidden;
`;

export const MainContent = styled.main<{ $deviceType: string; $sidebarOpen: boolean }>`
  flex: 1;
  background-color: #f4f4f4;
  transition: all 0.3s ease-in-out;
  width: 100%;
  margin-left: 0;
  @media (min-width: ${breakpoints.desktop}) {
    width: calc(100% - 256px);
    margin-left: 256px;
  }
  overflow-x: hidden;
`;

export const ContentArea = styled.div<{ $deviceType: string }>`
  padding: ${(props) => {
    if (props.$deviceType === "mobile") return "0.5rem";
    if (props.$deviceType === "tablet") return "1rem";
    return "1.5rem";
  }};

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export const LoadingPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #666;
`;