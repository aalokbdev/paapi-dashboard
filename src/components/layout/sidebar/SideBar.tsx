import React, { Suspense, useEffect } from "react";

import {
  LayoutGrid,
  BarChart,
  Users,
  Settings,
  HelpCircle,
  X,
} from "lucide-react";
import {
  CloseButton,
  LogoContainer,
  LogoIcon,
  LogoSubtitle,
  LogoTextContainer,
  LogoTitle,
  NavigationContainer,
  NavItem,
  NavItemText,
  SidebarContainer,
  SidebarOverlay,
} from "./styles";
import { SidebarProps } from "@/types/types";

const TemporarySidebar: React.FC<SidebarProps> = ({
  items = [
    { icon: <LayoutGrid size={20} />, text: "Dashboard", active: true },
    { icon: <BarChart size={20} />, text: "Analytics" },
    { icon: <Users size={20} />, text: "Users" },
    { icon: <Settings size={20} />, text: "Settings" },
    { icon: <HelpCircle size={20} />, text: "Support" },
  ],
  sidebarOpen,
  closeSidebar,
  setSidebarOpen,
}) => {

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <SidebarOverlay
          $isOpen={sidebarOpen}
          onClick={() => setSidebarOpen(false)}
        />
        {sidebarOpen && (
          <SidebarContainer $isOpen={sidebarOpen}>
            <CloseButton onClick={() => setSidebarOpen(false)}>
              <X size={24} />
            </CloseButton>

            <LogoContainer>
              <LogoIcon>P</LogoIcon>
              <LogoTextContainer>
                <LogoTitle>Paapi.ai</LogoTitle>
                <LogoSubtitle>Business Analytics</LogoSubtitle>
              </LogoTextContainer>
            </LogoContainer>

            <NavigationContainer>
              {items.map((item, index) => (
                <NavItem
                  key={index}
                  $active={item.active}
                >
                  {item.icon}
                  <NavItemText $active={item.active}>{item.text}</NavItemText>
                </NavItem>
              ))}
            </NavigationContainer>
          </SidebarContainer>
        )}
      </Suspense>
    </>
  );
};

export default TemporarySidebar;
