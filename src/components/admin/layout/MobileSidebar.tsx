
import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationItem } from "./navigationItems";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MobileSidebarProps {
  navigation: NavigationItem[];
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  t: (key: string) => string;
}

export function MobileSidebar({ navigation, sidebarOpen, setSidebarOpen, t }: MobileSidebarProps) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (name: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };
  
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
        className="fixed inset-y-0 left-0 z-50 w-64 bg-white transition-transform duration-300 ease-in-out md:hidden flex flex-col"
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
        
        <ScrollArea className="flex-1">
          <nav className="px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name} className="space-y-1">
                {item.subItems ? (
                  <Collapsible
                    open={openMenus[item.name] || item.current}
                    onOpenChange={() => toggleMenu(item.name)}
                    className="space-y-1"
                  >
                    <CollapsibleTrigger asChild>
                      <div 
                        className={`group flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                          item.current
                            ? "bg-primary/10 text-primary"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center">
                          <item.icon
                            className={`mr-3 flex-shrink-0 h-5 w-5 ${
                              item.current ? "text-primary" : "text-gray-500 group-hover:text-gray-600"
                            }`}
                          />
                          {item.name}
                          
                          {item.badge && (
                            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${item.badge.color}`}>
                              {item.badge.count}
                            </span>
                          )}
                        </div>
                        
                        <ChevronDown className={`h-4 w-4 transition-transform ${openMenus[item.name] || item.current ? 'transform rotate-180' : ''}`} />
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="space-y-1 pl-10">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block px-3 py-2 text-sm rounded-md ${
                              subItem.current
                                ? "bg-primary/5 text-primary font-medium"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                            }`}
                            onClick={() => setSidebarOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    to={item.href}
                    className={`group flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${
                      item.current
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <div className="flex items-center">
                      <item.icon
                        className={`mr-3 flex-shrink-0 h-5 w-5 ${
                          item.current ? "text-primary" : "text-gray-500 group-hover:text-gray-600"
                        }`}
                      />
                      {item.name}
                    </div>
                    
                    {item.badge && (
                      <span className={`px-2 py-0.5 text-xs rounded-full ${item.badge.color}`}>
                        {item.badge.count}
                      </span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </ScrollArea>
        
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
