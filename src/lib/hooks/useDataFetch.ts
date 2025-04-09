import {
  SalesData,
  UserEngagementData,
  ProductPerformance,
  GeographicSalesData,
} from "@/types/types";

export interface DashboardData {
  monthlySalesData: SalesData[];
  userEngagementData: UserEngagementData[];
  productPerformanceData: ProductPerformance[];
  geographicSalesData: GeographicSalesData[];
  performanceMetrics: {
    totalRevenue: number;
    averageMargin: number;
    newCustomers: number;
    activeUsers: number;
  };
}

export const fetchDashboardData = async (): Promise<DashboardData> => {
  const response = await fetch("/data/mockJsonData.json");
  if (!response.ok) {
    throw new Error("Failed to fetch dashboard data");
  }
  return response.json();
};
