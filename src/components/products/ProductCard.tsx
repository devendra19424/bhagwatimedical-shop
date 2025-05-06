
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

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

  return (
    <Card 
      className="overflow-hidden h-full flex flex-col border-neutral-200 shadow-sm transition-all duration-300 hover:shadow-lg rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${id}`} className="flex-shrink-0">
        <div className="relative aspect-square overflow-hidden bg-white">
          <motion.img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            loading="lazy"
          />
          <Badge className="absolute top-2 right-2 text-xs bg-white/90 text-primary hover:bg-white/95 shadow-sm">{category}</Badge>
          <div className="absolute top-2 left-2 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white/90 text-neutral-600 shadow-sm hover:bg-white hover:text-rose-500">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
      </Link>

      <CardContent className="p-4 flex-grow">
        <Link to={`/products/${id}`}>
          <h3 className="font-semibold text-base md:text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">{name}</h3>
        </Link>
        <p className="text-neutral-600 text-xs md:text-sm line-clamp-2 mb-2">
          {description}
        </p>
        <p className="font-bold text-sm md:text-base text-primary">₹{price.toFixed(2)}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button
          className="w-full gap-1 md:gap-2 text-xs md:text-sm py-1 md:py-2 transition-all hover:shadow-md bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
          disabled={stock === 0}
          variant={stock === 0 ? "outline" : "default"}
        >
          <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
          {stock === 0 ? t("outOfStock") : t("addToCart")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
