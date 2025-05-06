
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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

  return (
    <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-300 border-neutral-200">
      <Link to={`/products/${id}`} className="flex-shrink-0">
        <div className="relative aspect-square overflow-hidden bg-neutral-50">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            loading="lazy"
          />
          <Badge className="absolute top-2 right-2 text-xs bg-white/90 text-primary hover:bg-white/95">{category}</Badge>
        </div>
      </Link>
      <CardContent className="p-4 flex-grow">
        <Link to={`/products/${id}`}>
          <h3 className="font-semibold text-base md:text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">{name}</h3>
        </Link>
        <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-2">
          {description}
        </p>
        <p className="font-bold text-sm md:text-base text-primary">₹{price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button
          className="w-full gap-1 md:gap-2 text-xs md:text-sm py-1 md:py-2 transition-all hover:shadow-md"
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
