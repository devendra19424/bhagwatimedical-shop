
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
}

const ProductCard = ({ id, name, description, price, imageUrl, category, stock }: ProductCardProps) => {
  const isOutOfStock = stock === 0;
  
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:border-primary/50 transition-all hover:shadow-md">
      <Link to={`/products/${id}`} className="flex-1 flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            {isOutOfStock ? (
              <Badge variant="destructive">Out of Stock</Badge>
            ) : (
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
                In Stock
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="space-y-1 mb-2 flex-1">
            <h3 className="font-semibold text-sm md:text-base line-clamp-2">{name}</h3>
            <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">{description}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-xs text-muted-foreground">{category}</div>
            <div className="font-semibold">₹{price.toFixed(2)}</div>
          </div>
        </CardContent>
      </Link>
      
      <CardFooter className="p-4 pt-0">
        <AddToCartButton
          productId={id}
          name={name}
          price={price}
          imageUrl={imageUrl}
          category={category}
        />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
