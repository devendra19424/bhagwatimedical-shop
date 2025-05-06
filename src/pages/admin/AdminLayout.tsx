
import { ReactNode, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { MobileSidebar } from "@/components/admin/layout/MobileSidebar";
import { DesktopSidebar } from "@/components/admin/layout/DesktopSidebar";
import { AdminHeader } from "@/components/admin/layout/AdminHeader";
import { getNavigationItems } from "@/components/admin/layout/navigationItems";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  
  const navigation = getNavigationItems(t, location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileSidebar 
        navigation={navigation} 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        t={t} 
      />
      
      <DesktopSidebar navigation={navigation} t={t} />
      
      <div className="md:pl-64">
        <AdminHeader setSidebarOpen={setSidebarOpen} t={t} />
        
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
