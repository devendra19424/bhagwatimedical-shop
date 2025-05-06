
import { ReactNode } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  Users,
  Settings,
} from "lucide-react";

export interface NavigationItem {
  name: string;
  href: string;
  icon: React.FC<{ className?: string }>;
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
  },
  {
    name: t("orders"),
    href: "/admin/orders",
    icon: ShoppingCart,
    current: currentPath.includes("/admin/orders"),
  },
  {
    name: t("delivery"),
    href: "/admin/delivery",
    icon: Truck,
    current: currentPath.includes("/admin/delivery"),
  },
  {
    name: t("users"),
    href: "/admin/users",
    icon: Users,
    current: currentPath.includes("/admin/users"),
  },
  {
    name: t("settings"),
    href: "/admin/settings",
    icon: Settings,
    current: currentPath.includes("/admin/settings"),
  },
];
