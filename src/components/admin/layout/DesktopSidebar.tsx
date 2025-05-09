
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavigationItem } from "./navigationItems";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface DesktopSidebarProps {
  navigation: NavigationItem[];
  t: (key: string) => string;
}

export function DesktopSidebar({ navigation, t }: DesktopSidebarProps) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (name: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto border-r bg-white">
        <div className="flex items-center flex-shrink-0 px-4 mb-5">
          <span className="text-xl font-bold text-primary">{t("adminShort")}</span>
        </div>
        
        <div className="flex flex-col flex-grow">
          <ScrollArea className="flex-1">
            <nav className="px-2 pb-4 space-y-1">
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
