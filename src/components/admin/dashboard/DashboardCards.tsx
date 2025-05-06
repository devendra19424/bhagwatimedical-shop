
import { TrendingUp, Clock } from "lucide-react";
import { StatCard } from "./StatCard";

interface DashboardCardsProps {
  t: (key: string) => string;
  stats: {
    orders: number;
    users: number;
    products: number;
    todayOrders: number;
  };
  icons: {
    orders: React.ReactNode;
    users: React.ReactNode;
    products: React.ReactNode;
    todayOrders: React.ReactNode;
  };
}

export function DashboardCards({ t, stats, icons }: DashboardCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title={t("totalOrders")}
        value={stats.orders}
        icon={icons.orders}
        trend={{
          value: t("increaseFromLastMonth").replace("{percent}", "12.5"),
          icon: <TrendingUp className="w-3 h-3 mr-1" />,
        }}
      />

      <StatCard
        title={t("totalUsers")}
        value={stats.users}
        icon={icons.users}
        trend={{
          value: t("increaseFromLastMonth").replace("{percent}", "8.2"),
          icon: <TrendingUp className="w-3 h-3 mr-1" />,
        }}
      />

      <StatCard
        title={t("totalProducts")}
        value={stats.products}
        icon={icons.products}
        trend={{
          value: t("increaseFromLastMonth").replace("{percent}", "15.3"),
          icon: <TrendingUp className="w-3 h-3 mr-1" />,
        }}
      />

      <StatCard
        title={t("todayOrders")}
        value={stats.todayOrders}
        icon={icons.todayOrders}
        trend={{
          value: t("updatedToday"),
          icon: <Clock className="w-3 h-3 mr-1" />,
        }}
      />
    </div>
  );
}
