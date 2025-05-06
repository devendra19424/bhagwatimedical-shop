
import AdminLayout from "./AdminLayout";
import { Card } from "@/components/ui/card";
import {
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Clock,
  Truck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { DashboardCards } from "@/components/admin/dashboard/DashboardCards";
import { DashboardSection } from "@/components/admin/dashboard/DashboardSection";
import { RecentOrdersTable } from "@/components/admin/dashboard/RecentOrdersTable";
import { LowStockTable } from "@/components/admin/dashboard/LowStockTable";
import { ActiveDeliveriesTable } from "@/components/admin/dashboard/ActiveDeliveriesTable";
import {
  recentOrders,
  lowStockProducts,
  activeDeliveries,
  dashboardStats,
} from "@/data/admin/dashboardData";

const AdminDashboard = () => {
  const { t } = useLanguage();

  // Dashboard icons
  const dashboardIcons = {
    orders: <ShoppingCart className="w-6 h-6 text-blue-700" />,
    users: <Users className="w-6 h-6 text-green-700" />,
    products: <Package className="w-6 h-6 text-purple-700" />,
    todayOrders: <Truck className="w-6 h-6 text-orange-700" />,
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Stats Cards */}
        <DashboardCards 
          t={t} 
          stats={dashboardStats} 
          icons={dashboardIcons}
        />

        {/* Recent Orders */}
        <DashboardSection 
          title={t("recentOrders")} 
          linkTo="/admin/orders" 
          viewAllText={t("viewAll")}
        >
          <RecentOrdersTable orders={recentOrders} t={t} />
        </DashboardSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Low Stock Products */}
          <DashboardSection 
            title={t("lowStockProducts")} 
            linkTo="/admin/products" 
            viewAllText={t("viewAll")}
          >
            <LowStockTable products={lowStockProducts} t={t} />
          </DashboardSection>

          {/* Active Deliveries */}
          <DashboardSection 
            title={t("activeDeliveries")} 
            linkTo="/admin/delivery" 
            viewAllText={t("viewAll")}
          >
            <ActiveDeliveriesTable deliveries={activeDeliveries} t={t} />
          </DashboardSection>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
