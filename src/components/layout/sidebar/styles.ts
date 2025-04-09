import styled from "styled-components";

const colors = {
  primary: "#3B82F6",
  background: {
    light: "#F3F4F6",
    dark: "#E5E7EB",
  },
  text: {
    primary: "#1F2937",
    secondary: "#6B7280",
    muted: "#9CA3AF",
  },
};

const breakpoints = {
  mobile: "640px",
  tablet: "768px",
  desktop: "1024px",
};

export const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  width: 16rem;
  background-color: white;
  border-right: 1px solid ${colors.background.dark};
  padding: 1rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50; /* Ensure sidebar stays on top */
  transition: opacity 0.3s ease; /* Use opacity instead of transform */
  opacity: ${(props) =>
    props.$isOpen ? 1 : 0}; /* Fade the sidebar in and out */

  @media (min-width: ${breakpoints.desktop}) {
    display: block;
    opacity: 1; /* Always visible on desktop */
  }
`;

export const SidebarOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  display: block;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  background: transparent;
  border: none;
  color: ${colors.text.secondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;

  &:hover {
    background-color: ${colors.background.light};
  }

  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const OpenButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: ${colors.background.light};
  border: none;
  border-radius: 0.375rem;
  color: ${colors.text.secondary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.background.dark};
    color: ${colors.text.primary};
  }

  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LogoIcon = styled.div`
  background-color: ${colors.primary};
  color: white;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-weight: 700;
`;

export const LogoTextContainer = styled.div``;

export const LogoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.text.primary};
`;

export const LogoSubtitle = styled.p`
  font-size: 0.875rem;
  color: ${colors.text.secondary};
`;

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const NavItem = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;

  background-color: ${(props) =>
    props.$active ? colors.background.light : "transparent"};

  &:hover {
    background-color: ${colors.background.light};
  }

  svg {
    margin-right: 0.75rem;
    color: ${(props) =>
      props.$active ? colors.primary : colors.text.secondary};
  }
`;

export const NavItemText = styled.span<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? colors.primary : colors.text.secondary)};
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  transition: color 0.2s ease;

  ${NavItem}:hover & {
    color: ${colors.primary};
  }
`;