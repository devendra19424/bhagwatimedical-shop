
import { ShoppingCart, User, Globe, Menu, Search as SearchIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const { totalItems } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Left side - Logo and mobile menu */}
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b">
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
                
                <div className="px-2 py-6 flex-1 overflow-auto">
                  <nav className="flex flex-col gap-1">
                    <SheetClose asChild>
                      <Link to="/products" className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-accent transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="m7 19 5-5 5 5" />
                          <path d="m7 15 5-5 5 5" />
                          <path d="M12 5v13" />
                        </svg>
                        <span className="text-base font-medium">{t("allProducts")}</span>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/categories" className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-accent transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <rect width="7" height="7" x="3" y="3" rx="1" />
                          <rect width="7" height="7" x="14" y="3" rx="1" />
                          <rect width="7" height="7" x="14" y="14" rx="1" />
                          <rect width="7" height="7" x="3" y="14" rx="1" />
                        </svg>
                        <span className="text-base font-medium">{t("categories")}</span>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/profile" className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-accent transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span className="text-base font-medium">{t("myAccount")}</span>
                      </Link>
                    </SheetClose>
                  </nav>
                </div>
                
                <div className="p-4 border-t mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full border bg-accent/50">
                    <Globe className="h-4 w-4 text-primary" />
                    <Switch
                      checked={lang === "hi"}
                      onCheckedChange={toggleLanguage}
                      aria-label={t("switchLanguage")}
                    />
                    <span className="text-xs font-medium">
                      {lang === "hi" ? "EN" : "हिं"}
                    </span>
                  </div>
                </div>
              </div>
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
            <span className="text-xl font-bold hidden md:inline">{t("storeName")}</span>
          </Link>
        </div>

        {/* Desktop navigation and search */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6">
          <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
            {t("allProducts")}
          </Link>
          <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">
            {t("categories")}
          </Link>
          <div className="w-full max-w-sm relative">
            <Input
              type="search"
              placeholder={t("searchProducts")}
              className="w-full pl-9 bg-muted/70 focus:bg-white"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Mobile search button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            {isSearchOpen ? <X className="h-5 w-5" /> : <SearchIcon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 border rounded-full px-3 py-1 hover:border-primary/50 transition-colors">
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
              {totalItems > 0 && (
                <motion.span 
                  key={totalItems} // Add key to trigger animation when totalItems changes
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground"
                >
                  {totalItems}
                </motion.span>
              )}
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 hidden md:flex">
                <User className="h-4 w-4" />
                {t("login")}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/login" className="w-full">
                  {t("login")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/profile" className="w-full">
                  {t("myAccount")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/login" className="w-full">
                  {t("login")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/profile" className="w-full">
                  {t("myAccount")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Mobile search bar */}
      {isSearchOpen && (
        <motion.div 
          className="md:hidden container px-4 pb-3"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <Input
              type="search"
              placeholder={t("searchProducts")}
              className="w-full pl-9"
              autoFocus
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
