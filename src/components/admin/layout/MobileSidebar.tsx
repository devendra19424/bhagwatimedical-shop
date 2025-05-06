
import { Link } from "react-router-dom";
import { X, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationItem } from "./navigationItems";

interface MobileSidebarProps {
  navigation: NavigationItem[];
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  t: (key: string) => string;
}

export function MobileSidebar({ navigation, sidebarOpen, setSidebarOpen, t }: MobileSidebarProps) {
  if (!sidebarOpen) return null;

  return (
    <>
      {/* Mobile sidebar backdrop */}
      <div
        className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
        onClick={() => setSidebarOpen(false)}
      />
      
      {/* Mobile sidebar */}
      <div
        className="fixed inset-y-0 left-0 z-50 w-64 bg-white transition-transform duration-300 ease-in-out md:hidden"
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
    </>
  );
}
