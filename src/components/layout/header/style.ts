import styled from 'styled-components';

const colors = {
  primary: '#3B82F6',
  background: {
    light: '#F3F4F6',
    dark: '#E5E7EB'
  },
  text: {
    primary: '#1F2937',
    secondary: '#6B7280',
    muted: '#9CA3AF'
  }
};

const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px'
};

export const animations = {
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  hover: `
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.05);
      opacity: 0.9;
    }
  `
};

export const HeaderContainer = styled.header<{ $deviceType: string }>`
  background-color: white;
  border-bottom: 1px solid ${colors.background.dark};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const MobileMenuButton = styled.button`
  background: red;
  border: none;
  color: ${colors.text.secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  
  &:hover {
    background-color: ${colors.background.light};
    color: ${colors.primary};
  }
  
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  display: none;
  align-items: center;
  width: 100%;
  max-width: 28rem;
  position: relative;
  
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 0.75rem;
  display: flex;
  align-items: center;
  color: ${colors.text.muted};
  pointer-events: none;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  border: 1px solid ${colors.background.dark};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: ${colors.text.primary};
  background-color: #fff;
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (min-width: ${breakpoints.tablet}) {
    gap: 1rem;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${colors.text.secondary};
  cursor: pointer;
  position: relative;
  padding: 0.4rem;
  
  @media (min-width: ${breakpoints.tablet}) {
    padding: 0.5rem;
    ${animations.hover}
  }

  &:hover {
    color: ${colors.primary};
  }
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  background-color: #EF4444;
  color: white;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.625rem;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
`;

export const UserAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${colors.background.light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text.primary};
  font-weight: 600;
`;

export const UserDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 20;
  display: ${props => props.$isOpen ? 'block' : 'none'};
  animation: fadeIn 0.3s ease;
`;
export const LoadingPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: #666;
`;
export const DropdownItem = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.background.light};
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;