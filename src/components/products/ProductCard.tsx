
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
    <Card className="overflow-hidden">
      <Link to={`/products/${id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <Badge className="absolute top-2 right-2">{category}</Badge>
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/products/${id}`}>
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">
          {description}
        </p>
        <p className="font-bold">₹{price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full gap-2"
          disabled={stock === 0}
        >
          <ShoppingCart className="h-4 w-4" />
          {stock === 0 ? t("outOfStock") : t("addToCart")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
