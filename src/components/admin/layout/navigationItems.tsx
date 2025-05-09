
import { ReactNode } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  Users,
  Settings,
  Plus,
  ChevronDown,
  Search,
  FileText,
} from "lucide-react";

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.FC<{ className?: string }>;
  current: boolean;
  badge?: {
    count: number;
    color: string;
  };
  subItems?: NavigationSubItem[];
}

export interface NavigationSubItem {
  name: string;
  href: string;
  current: boolean;
}

export const getNavigationItems = (
  t: (key: string) => string,
  currentPath: string
): NavigationItem[] => [
  {
    name: t("dashboard"),
    href: "/admin",
    icon: LayoutDashboard,
    current: currentPath === "/admin",
  },
  {
    name: t("products"),
    href: "/admin/products",
    icon: Package,
    current: currentPath.includes("/admin/products"),
    badge: {
      count: 324,
      color: "bg-blue-100 text-blue-800",
    },
    subItems: [
      {
        name: t("allProducts"),
        href: "/admin/products",
        current: currentPath === "/admin/products",
      },
      {
        name: t("categories"),
        href: "/admin/products/categories",
        current: currentPath === "/admin/products/categories",
      },
      {
        name: t("inventory"),
        href: "/admin/products/inventory",
        current: currentPath === "/admin/products/inventory",
      },
    ]
  },
  {
    name: t("orders"),
    href: "/admin/orders",
    icon: ShoppingCart,
    current: currentPath.includes("/admin/orders"),
    badge: {
      count: 18,
      color: "bg-green-100 text-green-800",
    },
  },
  {
    name: t("delivery"),
    href: "/admin/delivery",
    icon: Truck,
    current: currentPath.includes("/admin/delivery"),
    badge: {
      count: 3,
      color: "bg-orange-100 text-orange-800",
    },
  },
  {
    name: t("users"),
    href: "/admin/users",
    icon: Users,
    current: currentPath.includes("/admin/users"),
  },
  {
    name: t("reports"),
    href: "/admin/reports",
    icon: FileText,
    current: currentPath.includes("/admin/reports"),
    subItems: [
      {
        name: t("salesReport"),
        href: "/admin/reports/sales",
        current: currentPath === "/admin/reports/sales",
      },
      {
        name: t("inventoryReport"),
        href: "/admin/reports/inventory",
        current: currentPath === "/admin/reports/inventory",
      },
      {
        name: t("customerReport"),
        href: "/admin/reports/customers",
        current: currentPath === "/admin/reports/customers",
      },
    ]
  },
  {
    name: t("settings"),
    href: "/admin/settings",
    icon: Settings,
    current: currentPath.includes("/admin/settings"),
  },
];
