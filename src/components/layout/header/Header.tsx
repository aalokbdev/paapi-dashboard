'use client'
import React, { Suspense, useState } from 'react';
import { 
  Search, 
  Bell, 
  HelpCircle, 
  ChevronDown, 
  User as UserIcon,
  Settings,
  Menu
} from 'lucide-react';
import { ActionContainer, DropdownItem, HeaderContainer, IconButton, LeftSection, LoadingPlaceholder, MobileMenuButton, NotificationBadge, SearchContainer, SearchIconContainer, SearchInput, SearchWrapper, UserAvatar, UserDropdown, UserProfile,  } from './style';

interface HeaderProps {
  deviceType?: string;
  toggleSidebar?: () => void;
  sidebarOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  deviceType = 'desktop',
  toggleSidebar,
  sidebarOpen = false
}) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  React.useEffect(() => {
    const handleClickOutside = () => {
      setIsUserDropdownOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
     <Suspense fallback={<LoadingPlaceholder>Loading Dashboard...</LoadingPlaceholder>}>

    <HeaderContainer $deviceType={deviceType}>
      <LeftSection>
        {(deviceType === 'mobile' || deviceType === 'tablet') && (
          <MobileMenuButton style={{ backgroundColor: "transparent", border: 'none', color: '#000' }}  onClick={toggleSidebar}>
            <Menu size={24} />
          </MobileMenuButton>
        )}
        
        <SearchContainer>
          <SearchWrapper>
            <SearchIconContainer>
              <Search size={20} />
            </SearchIconContainer>
            <SearchInput 
              type="text" 
              placeholder="Search dashboard..." 
            />
          </SearchWrapper>
        </SearchContainer>
      </LeftSection>

      <ActionContainer>
        <IconButton>
          <Bell size={20} />
          <NotificationBadge>3</NotificationBadge>
        </IconButton>

        <IconButton>
          <HelpCircle size={20} />
        </IconButton>

        <UserProfile onClick={handleProfileClick}>
          <UserAvatar>U</UserAvatar>
          <ChevronDown size={16} color='#000' />

          <UserDropdown $isOpen={isUserDropdownOpen}>
            <DropdownItem>
              <UserIcon size={16} /> Profile
            </DropdownItem>
            <DropdownItem>
              <Settings size={16} /> Settings
            </DropdownItem>
            <DropdownItem>
              Logout
            </DropdownItem>
          </UserDropdown>
        </UserProfile>
      </ActionContainer>
    </HeaderContainer>
     </Suspense>
  );
};

export default Header;