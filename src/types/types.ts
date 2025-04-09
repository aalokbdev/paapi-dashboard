export type ViewMode = 'all' | 'favorites';
export type TrendType = 'up' | 'down' | 'neutral';

export interface ChartConfig {
  id: string;
  expanded: boolean;
  optionsOpen: boolean;
  favorite: boolean;
}

export interface PerformanceMetric {
  label: string;
  value: number;
  trend: TrendType;
  percentageChange: number;
}

export interface ChartData {
  name: string;
  [key: string]: number | string;
}

export interface SidebarProps {
  items?: Array<{
    icon: React.ReactNode;
    text: string;
    active?: boolean;
  }>;
  sidebarOpen: boolean;
  closeSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
}

export interface SalesData {
  month: string;
  revenue: number;
  profit: number;
}

export interface UserEngagementData {
  platform: string;
  users: number;
}

export interface ProductPerformance {
  product: string;
  sales: number;
  margin: number;
}

export interface GeographicSalesData {
  country: string;
  sales: number;
}

export interface DashboardData {
  monthlySalesData?: any[];
  userEngagementData?: any[];
  productPerformanceData?: any[];
  geographicSalesData?: any[];
  performanceMetrics?: {
    [key: string]: number;
  };
}