
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/components/ui/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  imageUrl,
  category,
  stock,
}: ProductCardProps) => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const isMobile = useIsMobile();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (stock === 0) return;
    
    toast({
      title: t("addedToCart"),
      description: `${name} ${t("hasBeenAddedToCart")}`,
      duration: 3000,
    });
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    toast({
      title: isFavorite ? t("removedFromWishlist") : t("addedToWishlist"),
      description: `${name} ${isFavorite ? t("hasBeenRemovedFromWishlist") : t("hasBeenAddedToWishlist")}`,
      duration: 3000,
    });
  };

  return (
    <Card 
      className="overflow-hidden h-full flex flex-col border-neutral-200 transition-all duration-300 hover:shadow-lg hover:border-blue-200 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${id}`} className="flex-shrink-0 relative">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white to-blue-50">
          <motion.img
            src={imageUrl}
            alt={name}
            className="object-contain w-full h-full p-2"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            loading="lazy"
          />
          
          <Badge className="absolute top-2 right-2 text-xs bg-white/90 text-primary hover:bg-white/95 shadow-sm">
            {category}
          </Badge>
          
          <motion.button
            className={`absolute top-2 left-2 h-8 w-8 rounded-full bg-white/90 text-neutral-600 shadow-sm flex items-center justify-center
              ${isFavorite ? 'text-rose-500' : 'text-neutral-600'}`}
            onClick={handleToggleFavorite}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
          </motion.button>
          
          {stock > 0 && stock <= 5 && (
            <div className="absolute bottom-2 left-2 bg-amber-500/90 text-white text-xs py-1 px-2 rounded-full">
              {t("onlyLeft").replace("{count}", stock.toString())}
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
      </Link>

      <CardContent className="p-4 flex-grow">
        <Link to={`/products/${id}`}>
          <h3 className="font-semibold text-base md:text-lg mb-1 line-clamp-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center mb-1 text-amber-400">
          {Array(5).fill(0).map((_, i) => (
            <Star key={i} className="h-3 w-3" fill="currentColor" />
          ))}
          <span className="ml-1 text-xs text-neutral-500">
            (5.0)
          </span>
        </div>
        
        <p className="text-neutral-600 text-xs md:text-sm line-clamp-2 mb-2">
          {description}
        </p>
        
        <p className="font-bold text-sm md:text-base text-primary">
          ₹{price.toFixed(2)}
          <span className="text-xs text-neutral-500 line-through ml-2">
            ₹{(price * 1.2).toFixed(2)}
          </span>
          <span className="text-xs text-green-600 ml-1">
            20% OFF
          </span>
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button
          className="w-full gap-1 md:gap-2 text-xs md:text-sm py-1 md:py-2 transition-all hover:shadow-md bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
          disabled={stock === 0}
          variant={stock === 0 ? "outline" : "default"}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
          {stock === 0 ? t("outOfStock") : t("addToCart")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
