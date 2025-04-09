import {
  DashboardData,
} from "@/types/types";

export const fetchDashboardData = async (): Promise<DashboardData> => {
  const response = await fetch("/data/mockJsonData.json");
  if (!response.ok) {
    throw new Error("Failed to fetch dashboard data");
  }
  return response.json();
};
