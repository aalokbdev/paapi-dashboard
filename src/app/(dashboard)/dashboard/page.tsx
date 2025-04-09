"use client";

import React from "react";
import DashboardHead from "@/components/dashboard/dashboradHeader";
import DashboardControlBar from "@/components/dashboard/controlBar";
import Chart from "@/components/dashboard/charts";
import { DashboardContainer } from "./styles";

const Dashboard: React.FC = () => {

  return (
    <DashboardContainer>
      <DashboardHead/>

      <DashboardControlBar/>

      <Chart/>
    </DashboardContainer>
  );
};

export default Dashboard;
