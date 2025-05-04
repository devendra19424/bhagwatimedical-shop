
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
    <Card className="overflow-hidden h-full flex flex-col">
      <Link to={`/products/${id}`} className="flex-shrink-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
            loading="lazy"
          />
          <Badge className="absolute top-2 right-2 text-xs">{category}</Badge>
        </div>
      </Link>
      <CardContent className="p-3 md:p-4 flex-grow">
        <Link to={`/products/${id}`}>
          <h3 className="font-semibold text-base md:text-lg mb-1 line-clamp-2">{name}</h3>
        </Link>
        <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-2">
          {description}
        </p>
        <p className="font-bold text-sm md:text-base">₹{price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-3 md:p-4 pt-0 mt-auto">
        <Button
          className="w-full gap-1 md:gap-2 text-xs md:text-sm py-1 md:py-2"
          disabled={stock === 0}
        >
          <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
          {stock === 0 ? t("outOfStock") : t("addToCart")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
