
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Truck,
  Users,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { t, lang } = useLanguage();
  
  const navigation = [
    {
      name: t("dashboard"),
      href: "/admin",
      icon: LayoutDashboard,
      current: location.pathname === "/admin",
    },
    {
      name: t("products"),
      href: "/admin/products",
      icon: Package,
      current: location.pathname.includes("/admin/products"),
    },
    {
      name: t("orders"),
      href: "/admin/orders",
      icon: ShoppingCart,
      current: location.pathname.includes("/admin/orders"),
    },
    {
      name: t("delivery"),
      href: "/admin/delivery",
      icon: Truck,
      current: location.pathname.includes("/admin/delivery"),
    },
    {
      name: t("users"),
      href: "/admin/users",
      icon: Users,
      current: location.pathname.includes("/admin/users"),
    },
    {
      name: t("settings"),
      href: "/admin/settings",
      icon: Settings,
      current: location.pathname.includes("/admin/settings"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">{t("adminShort")}</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-md text-gray-500 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                item.current
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon
                className={`mr-3 flex-shrink-0 h-5 w-5 ${
                  item.current ? "text-primary-foreground" : "text-gray-500 group-hover:text-gray-600"
                }`}
              />
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center p-4 border-t">
          <Link to="/" className="w-full">
            <Button variant="outline" className="w-full justify-start">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t("backToStore")}
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto border-r bg-white">
          <div className="flex items-center flex-shrink-0 px-4 mb-5">
            <span className="text-xl font-bold text-primary">{t("adminShort")}</span>
          </div>
          
          <div className="flex flex-col flex-grow">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    item.current
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-5 w-5 ${
                      item.current ? "text-primary-foreground" : "text-gray-500 group-hover:text-gray-600"
                    }`}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center p-4 border-t">
            <Link to="/" className="w-full">
              <Button variant="outline" className="w-full justify-start">
                <ChevronLeft className="mr-2 h-4 w-4" />
                {t("backToStore")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="md:pl-64">
        <div className="sticky top-0 z-10 flex items-center h-16 bg-white border-b px-4 md:px-6">
          <button
            type="button"
            className="md:hidden -ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex justify-between items-center w-full">
            <h1 className="text-xl font-semibold text-gray-900 md:ml-2">
              {t("adminPanel")}
            </h1>
            
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-2">{t("admin")}</span>
              <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <span className="font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
        
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
