
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface Medicine {
  id: string;
  name_en: string;
  name_hi: string;
  imageUrl: string;
  price: number;
  description_en: string;
  description_hi: string;
  category_en: string;
  category_hi: string;
  inStock: boolean;
}

interface FeaturedProductsProps {
  featuredMedicines?: Medicine[];
}

const FeaturedProducts = ({ featuredMedicines = [] }: FeaturedProductsProps) => {
  const { lang, t } = useLanguage();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  // Handle image error and show a placeholder
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "https://placehold.co/600x400?text=No+Image";
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-neutral-50">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
            <span className="inline-block border-b-2 border-primary pb-1">{t("featured")}</span>
          </h2>
          <Link to="/products">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/5 gap-2">
              {t("allProducts")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredMedicines.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden h-full border-neutral-200 hover:shadow-lg transition-all duration-300"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link to={`/products/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden bg-neutral-50">
                    <img
                      src={product.imageUrl || "https://placehold.co/600x400?text=No+Image"}
                      alt={product[`name_${lang}`]}
                      className="object-contain w-full h-full p-2 transition-transform duration-300 ease-in-out hover:scale-105"
                      onError={handleImageError}
                    />
                    <div className="absolute top-2 right-2 bg-white/90 text-primary text-xs py-1 px-2 rounded-full font-medium">
                      {product[`category_${lang}`]}
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link to={`/products/${product.id}`}>
                    <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">{product[`name_${lang}`]}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                    {product[`description_${lang}`]}
                  </p>
                  <p className="font-bold text-primary">
                    ₹{product.price.toFixed(2)}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full gap-2 hover:shadow-md transition-all">
                    <ShoppingCart className="h-4 w-4" />
                    {t("addToCart")}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
