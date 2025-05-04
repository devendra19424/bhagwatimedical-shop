
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <>
      {/* Desktop categories */}
      <div className="hidden md:flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Mobile category filter with scrollable chips */}
      <div className="md:hidden mb-4 relative">
        <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              className="flex-shrink-0 text-xs whitespace-nowrap"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed bottom-4 right-4 z-50 rounded-full h-12 w-12 shadow-lg md:hidden">
            <SlidersHorizontal className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side={isMobile ? "bottom" : "right"}>
          <SheetHeader>
            <SheetTitle>{t("categories")}</SheetTitle>
            <SheetDescription>
              {t("chooseYourCategory")}
            </SheetDescription>
          </SheetHeader>
          <div className="py-4 space-y-4">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={selectedCategory === category.id}
                  onCheckedChange={() => {
                    setSelectedCategory(category.id);
                    // Close sheet on mobile after selection (would require state management)
                  }}
                />
                <Label htmlFor={`category-${category.id}`}>
                  {category.name}
                </Label>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
