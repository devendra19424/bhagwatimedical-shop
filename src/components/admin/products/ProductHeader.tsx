
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProductHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  openAddDialog: () => void;
}

export function ProductHeader({
  searchQuery,
  setSearchQuery,
  openAddDialog,
}: ProductHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <h1 className="text-2xl font-bold">{t("productManagement")}</h1>
      
      <div className="flex items-center gap-2 w-full sm:w-auto">
        <div className="relative flex-grow md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder={t("searchProducts")}
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Button onClick={openAddDialog}>
          <Plus className="h-4 w-4 mr-2" />
          {t("newProduct")}
        </Button>
      </div>
    </div>
  );
}
