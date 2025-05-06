
import { Menu } from "lucide-react";

interface AdminHeaderProps {
  setSidebarOpen: (open: boolean) => void;
  t: (key: string) => string;
}

export function AdminHeader({ setSidebarOpen, t }: AdminHeaderProps) {
  return (
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
  );
}
