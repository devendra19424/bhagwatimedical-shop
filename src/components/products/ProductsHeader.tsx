
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

interface ProductsHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
}

export function ProductsHeader({
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
}: ProductsHeaderProps) {
  const { t, lang } = useLanguage();

  // Debounce search input to improve performance
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.length > 0) {
        // Analytics tracking of search terms could be added here
        console.log(`Search query: ${searchQuery}`);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle search input change with validation
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Add simple validation
    if (value.length > 50) {
      toast({
        title: lang === 'en' ? "Search too long" : "खोज बहुत लंबी है",
        description: lang === 'en' ? "Please enter a shorter search term" : "कृपया छोटा खोज शब्द दर्ज करें",
        variant: "destructive",
      });
      return;
    }
    
    setSearchQuery(value);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-8 gap-3 md:gap-4">
      <h1 className="text-xl md:text-3xl font-bold text-center md:text-left w-full md:w-auto">{t("ourProducts")}</h1>
      
      <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
        <div className="relative flex-grow w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder={t("searchProducts")}
            className="pl-8 text-sm h-9 md:h-10 w-full"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label={t("searchProducts")}
          />
        </div>
        
        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-full sm:w-[180px] h-9 md:h-10 text-sm">
            <SelectValue placeholder={t("sortBy")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">{t("featured")}</SelectItem>
            <SelectItem value="price-low">{t("priceLowToHigh")}</SelectItem>
            <SelectItem value="price-high">{t("priceHighToLow")}</SelectItem>
            <SelectItem value="name-asc">{t("nameAZ")}</SelectItem>
            <SelectItem value="name-desc">{t("nameZA")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
