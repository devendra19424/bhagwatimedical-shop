
import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
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
            <span className="text-xl font-bold">भगवती मेडिकल स्टोर</span>
          </Link>
        </div>
        
        <div className="hidden flex-1 mx-10 md:flex">
          <Input
            type="search"
            placeholder="खोजें दवाइयां, उपचार, रोग..."
            className="max-w-sm mx-auto"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <Button variant="ghost" className="relative" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                0
              </span>
            </Button>
          </Link>
          
          <Link to="/login">
            <Button variant="outline" size="sm" className="hidden md:flex gap-2">
              <User className="h-4 w-4" />
              लॉगिन / रजिस्टर
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
