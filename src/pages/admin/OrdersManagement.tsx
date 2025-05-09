
import AdminLayout from "./AdminLayout";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";
import { recentOrders } from "@/data/admin/dashboardData";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const OrdersManagement = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  // Filter orders based on search query and status
  const filteredOrders = recentOrders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         order.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter ? order.status === statusFilter : true;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">{t("orders")}</h1>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder={t("searchOrders")}
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              {t("filter")}
            </Button>
          </div>
        </div>
        
        <Card className="overflow-hidden">
          <ScrollArea className="h-[calc(100vh-260px)]">
            <div className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3">{t("orderId")}</th>
                    <th className="text-left p-3">{t("customer")}</th>
                    <th className="text-left p-3">{t("date")}</th>
                    <th className="text-center p-3">{t("items")}</th>
                    <th className="text-right p-3">{t("total")}</th>
                    <th className="text-center p-3">{t("status")}</th>
                    <th className="text-right p-3">{t("actions")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-muted/50">
                      <td className="p-3 font-medium">{order.id}</td>
                      <td className="p-3">{order.customer}</td>
                      <td className="p-3">{order.date}</td>
                      <td className="p-3 text-center">{order.items}</td>
                      <td className="p-3 text-right">₹{order.total.toFixed(2)}</td>
                      <td className="p-3">
                        <div className="flex justify-center">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            order.status === "completed" 
                              ? "bg-green-100 text-green-800" 
                              : order.status === "inProgress" 
                              ? "bg-blue-100 text-blue-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {t(order.status)}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 text-right">
                        <Button variant="ghost" size="sm">
                          {t("viewDetails")}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollArea>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default OrdersManagement;
