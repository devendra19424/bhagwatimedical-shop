
export interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: string;
  items: number;
}

export interface LowStockProduct {
  id: number;
  name: string;
  stock: number;
  threshold: number;
  category: string;
}

export interface Delivery {
  id: string;
  order: string;
  customer: string;
  address: string;
  rider: string;
  status: string;
  time: string;
}

export interface DashboardStats {
  orders: number;
  users: number;
  products: number;
  todayOrders: number;
}
