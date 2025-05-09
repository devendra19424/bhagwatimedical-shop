
import { useState } from "react";
import AdminLayout from "./AdminLayout";
import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const SettingsManagement = () => {
  const { t } = useLanguage();
  const [storeSettings, setStoreSettings] = useState({
    name: "MediPharm",
    address: "123 Main Street, Itarsi, Madhya Pradesh",
    phone: "+91 98765 43210",
    email: "contact@medipharm.com",
    openingHours: "9:00 AM - 9:00 PM",
    description: "Your trusted pharmacy for all healthcare needs.",
    enableDelivery: true,
    enableChat: true,
    maxDistance: "10",
  });

  const handleSaveGeneralSettings = () => {
    toast.success(t("settingsSaved"), {
      description: t("generalSettingsSaved")
    });
  };

  const handleSavePaymentSettings = () => {
    toast.success(t("settingsSaved"), {
      description: t("paymentSettingsSaved")
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">{t("settings")}</h1>
        </div>
        
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-3">
            <TabsTrigger value="general">{t("generalSettings")}</TabsTrigger>
            <TabsTrigger value="payment">{t("paymentSettings")}</TabsTrigger>
            <TabsTrigger value="notifications">{t("notificationSettings")}</TabsTrigger>
          </TabsList>
          
          <ScrollArea className="h-[calc(100vh-260px)] mt-6 pr-4">
            <TabsContent value="general">
              <Card className="p-6">
                <h2 className="text-lg font-medium mb-4">{t("storeInformation")}</h2>
                <div className="grid gap-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="store-name" className="text-sm font-medium">
                        {t("storeName")}
                      </label>
                      <Input 
                        id="store-name" 
                        value={storeSettings.name}
                        onChange={(e) => setStoreSettings({...storeSettings, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="store-phone" className="text-sm font-medium">
                        {t("storePhone")}
                      </label>
                      <Input 
                        id="store-phone" 
                        value={storeSettings.phone}
                        onChange={(e) => setStoreSettings({...storeSettings, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="store-address" className="text-sm font-medium">
                      {t("storeAddress")}
                    </label>
                    <Textarea 
                      id="store-address" 
                      value={storeSettings.address}
                      onChange={(e) => setStoreSettings({...storeSettings, address: e.target.value})}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="store-email" className="text-sm font-medium">
                        {t("storeEmail")}
                      </label>
                      <Input 
                        id="store-email" 
                        type="email"
                        value={storeSettings.email}
                        onChange={(e) => setStoreSettings({...storeSettings, email: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="opening-hours" className="text-sm font-medium">
                        {t("openingHours")}
                      </label>
                      <Input 
                        id="opening-hours" 
                        value={storeSettings.openingHours}
                        onChange={(e) => setStoreSettings({...storeSettings, openingHours: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="store-description" className="text-sm font-medium">
                      {t("storeDescription")}
                    </label>
                    <Textarea 
                      id="store-description" 
                      value={storeSettings.description}
                      onChange={(e) => setStoreSettings({...storeSettings, description: e.target.value})}
                    />
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <h2 className="text-lg font-medium mb-4">{t("featureSettings")}</h2>
                <div className="grid gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t("enableDelivery")}</p>
                      <p className="text-sm text-gray-500">{t("enableDeliveryDescription")}</p>
                    </div>
                    <Switch 
                      checked={storeSettings.enableDelivery}
                      onCheckedChange={(checked) => setStoreSettings({...storeSettings, enableDelivery: checked})}
                    />
                  </div>
                  
                  {storeSettings.enableDelivery && (
                    <div className="space-y-2 pl-6 border-l-2 border-gray-100">
                      <label htmlFor="max-distance" className="text-sm font-medium">
                        {t("maxDeliveryDistance")} (km)
                      </label>
                      <Input 
                        id="max-distance" 
                        type="number"
                        className="max-w-[200px]"
                        value={storeSettings.maxDistance}
                        onChange={(e) => setStoreSettings({...storeSettings, maxDistance: e.target.value})}
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{t("enableLiveChat")}</p>
                      <p className="text-sm text-gray-500">{t("enableLiveChatDescription")}</p>
                    </div>
                    <Switch 
                      checked={storeSettings.enableChat}
                      onCheckedChange={(checked) => setStoreSettings({...storeSettings, enableChat: checked})}
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end gap-3">
                  <Button variant="outline">{t("cancel")}</Button>
                  <Button onClick={handleSaveGeneralSettings}>{t("saveChanges")}</Button>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="payment">
              <Card className="p-6">
                <h2 className="text-lg font-medium mb-4">{t("paymentMethods")}</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">RazorPay</p>
                      <p className="text-sm text-gray-500">{t("onlinePayments")}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{t("cashOnDelivery")}</p>
                      <p className="text-sm text-gray-500">{t("cashPayment")}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">UPI</p>
                      <p className="text-sm text-gray-500">{t("upiPayments")}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end gap-3">
                  <Button variant="outline">{t("cancel")}</Button>
                  <Button onClick={handleSavePaymentSettings}>{t("saveChanges")}</Button>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card className="p-6">
                <h2 className="text-lg font-medium mb-4">{t("notificationSettings")}</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{t("orderNotifications")}</p>
                      <p className="text-sm text-gray-500">{t("orderNotificationsDescription")}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{t("stockAlerts")}</p>
                      <p className="text-sm text-gray-500">{t("stockAlertsDescription")}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{t("marketingEmails")}</p>
                      <p className="text-sm text-gray-500">{t("marketingEmailsDescription")}</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end gap-3">
                  <Button variant="outline">{t("cancel")}</Button>
                  <Button>{t("saveChanges")}</Button>
                </div>
              </Card>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default SettingsManagement;
