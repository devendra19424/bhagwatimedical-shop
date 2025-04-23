
import { ShoppingCart, User, Globe, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <nav className="flex flex-col gap-4">
                <Link to="/products" className="text-lg font-medium">
                  {t("allProducts")}
                </Link>
                <Link to="/categories" className="text-lg font-medium">
                  {t("categories")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary-foreground"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <span className="text-xl font-bold">{t("storeName")}</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center gap-6">
          <Link to="/products" className="text-sm font-medium">
            {t("allProducts")}
          </Link>
          <Link to="/categories" className="text-sm font-medium">
            {t("categories")}
          </Link>
          <div className="w-full max-w-sm">
            <Input
              type="search"
              placeholder={t("searchProducts")}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border rounded-full px-3 py-1">
            <Globe className="h-4 w-4 text-primary" />
            <Switch
              checked={lang === "hi"}
              onCheckedChange={toggleLanguage}
              aria-label={t("switchLanguage")}
            />
            <span className="text-xs font-medium hidden sm:inline">
              {lang === "hi" ? "EN" : "हिं"}
            </span>
          </div>

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                0
              </span>
            </Button>
          </Link>

          <Link to="/login" className="hidden md:block">
            <Button variant="outline" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              {t("login")}
            </Button>
          </Link>

          <Link to="/login" className="md:hidden">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
