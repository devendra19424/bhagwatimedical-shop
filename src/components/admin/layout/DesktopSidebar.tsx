
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationItem } from "./navigationItems";

interface DesktopSidebarProps {
  navigation: NavigationItem[];
  t: (key: string) => string;
}

export function DesktopSidebar({ navigation, t }: DesktopSidebarProps) {
  return (
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
  );
}
