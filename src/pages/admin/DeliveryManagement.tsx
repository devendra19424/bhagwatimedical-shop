
import AdminLayout from "./AdminLayout";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";
import { activeDeliveries } from "@/data/admin/dashboardData";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Truck, Package } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const DeliveryManagement = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter deliveries based on search query
  const filteredDeliveries = activeDeliveries.filter(delivery => 
    delivery.customer.toLowerCase().includes(searchQuery.toLowerCase()) || 
    delivery.order.toLowerCase().includes(searchQuery.toLowerCase()) ||
    delivery.rider.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Status badge helper
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pickup':
        return (
          <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2.5 py-0.5 rounded-full text-xs">
            <Package className="h-3 w-3" />
            <span>{t('pickup')}</span>
          </div>
        );
      case 'enRoute':
        return (
          <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full text-xs">
            <Truck className="h-3 w-3" />
            <span>{t('enRoute')}</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1 bg-gray-100 text-gray-800 px-2.5 py-0.5 rounded-full text-xs">
            <span>{t(status)}</span>
          </div>
        );
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">{t("deliveryManagement")}</h1>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder={t("searchDeliveries")}
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <Card className="overflow-hidden">
          <ScrollArea className="h-[calc(100vh-260px)]">
            <div className="p-4">
              <div className="grid gap-4">
                {filteredDeliveries.map((delivery) => (
                  <Card key={delivery.id} className="p-4">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{delivery.order}</span>
                          {getStatusBadge(delivery.status)}
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{delivery.customer}</p>
                        
                        <div className="flex items-start gap-1.5 text-sm mb-2">
                          <MapPin className="h-4 w-4 mt-0.5 text-gray-500" />
                          <span>{delivery.address}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-gray-500">{t("deliveryRider")}:</span>
                          <span>{delivery.rider}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end justify-between">
                        <div className="text-sm text-gray-500 mb-auto">
                          {delivery.time}
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            {t("contactRider")}
                          </Button>
                          <Button size="sm">
                            {t("trackDelivery")}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollArea>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default DeliveryManagement;
