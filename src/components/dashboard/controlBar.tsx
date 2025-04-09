"use client";

import React from "react";

import { Settings, RefreshCw, Filter, Download } from "lucide-react";

import { ControlsBar, ControlsGroup, ControlButton } from "./styles";

const DashboardControlBar: React.FC = () => {
  return (
    <ControlsBar>
      <ControlsGroup>
        <ControlButton>
          <RefreshCw size={16} />
          <span>Refresh</span>
        </ControlButton>
        <ControlButton>
          <Filter size={16} />
          <span>Filter</span>
        </ControlButton>
      </ControlsGroup>
      <ControlsGroup>
        <ControlButton>
          <Download size={16} />
          <span>Export</span>
        </ControlButton>
        <ControlButton>
          <Settings size={16} />
          <span>Settings</span>
        </ControlButton>
      </ControlsGroup>
    </ControlsBar>
  );
};

export default DashboardControlBar;
