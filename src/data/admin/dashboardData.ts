
// Demo data for the admin dashboard

export const recentOrders = [
  {
    id: "ORD-001",
    customer: "राम शर्मा",
    date: "2023-10-10",
    total: 399.98,
    status: "completed",
    items: 3,
  },
  {
    id: "ORD-002",
    customer: "सीमा वर्मा",
    date: "2023-10-09",
    total: 599.97,
    status: "inProgress",
    items: 2,
  },
  {
    id: "ORD-003",
    customer: "राजेश गुप्ता",
    date: "2023-10-09",
    total: 149.99,
    status: "completed",
    items: 1,
  },
  {
    id: "ORD-004",
    customer: "मोहन पटेल",
    date: "2023-10-08",
    total: 1299.99,
    status: "completed",
    items: 4,
  },
  {
    id: "ORD-005",
    customer: "दीपा जोशी",
    date: "2023-10-08",
    total: 325.97,
    status: "completed",
    items: 3,
  },
];

export const lowStockProducts = [
  {
    id: 1,
    name: "पैरासिटामोल",
    stock: 5,
    threshold: 10,
    category: "पेन किलर",
  },
  {
    id: 2,
    name: "मल्टीविटामिन",
    stock: 3,
    threshold: 8,
    category: "विटामिन्स",
  },
  {
    id: 3,
    name: "हैंड सैनिटाइज़र",
    stock: 2,
    threshold: 12,
    category: "स्किन केयर",
  },
];

export const activeDeliveries = [
  {
    id: "DEL-001",
    order: "ORD-002",
    customer: "सीमा वर्मा",
    address: "45, शिवाजी नगर, इटारसी",
    rider: "अमित यादव",
    status: "pickup",
    time: "11:30 AM",
  },
  {
    id: "DEL-002",
    order: "ORD-006",
    customer: "अनिल शर्मा",
    address: "22, गांधी रोड, इटारसी",
    rider: "सुरेश वर्मा",
    status: "enRoute",
    time: "11:45 AM",
  },
];

export const dashboardStats = {
  orders: 152,
  users: 84,
  products: 324,
  todayOrders: 12,
};
