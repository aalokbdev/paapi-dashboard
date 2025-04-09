"use client";

import React, { Suspense, useState, useEffect } from "react";
import styled from "styled-components";
import { useResponsive } from "@/lib/hooks/useResponsive";
import Sidebar from "@/components/layout/sidebar/SideBar";
import Header from "@/components/layout/header/Header";
import { LayoutContainer, MainContent, ContentArea, LoadingPlaceholder} from "./styles";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { deviceType } = useResponsive();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setSidebarOpen(deviceType === "desktop");
  }, [deviceType]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Suspense
      fallback={<LoadingPlaceholder>Loading Dashboard...</LoadingPlaceholder>}
    >
      <LayoutContainer $deviceType={deviceType}>
        <Sidebar
          sidebarOpen={sidebarOpen}
          closeSidebar={closeSidebar}
          setSidebarOpen={setSidebarOpen}
        />
        <Suspense
          fallback={
            <LoadingPlaceholder>Loading Dashboard...</LoadingPlaceholder>
          }
        >
          <MainContent $deviceType={deviceType} $sidebarOpen={sidebarOpen}>
            <Header
              deviceType={deviceType}
              toggleSidebar={toggleSidebar}
              sidebarOpen={sidebarOpen}
            />

            <Suspense
              fallback={
                <LoadingPlaceholder>Loading Dashboard...</LoadingPlaceholder>
              }
            >
              <ContentArea $deviceType={deviceType}>{children}</ContentArea>
            </Suspense>
          </MainContent>
        </Suspense>
      </LayoutContainer>
    </Suspense>
  );
};

export default DashboardLayout;
