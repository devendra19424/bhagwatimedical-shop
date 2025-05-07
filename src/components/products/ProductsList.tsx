
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ProductCard from "./ProductCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  category: string;
  stock: number;
}

interface ProductsListProps {
  products: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl border border-neutral-200 shadow-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-3"
        >
          <h3 className="text-lg md:text-xl font-semibold text-neutral-700">{t("noResults")}</h3>
          <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto">{t("adjustSearch")}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`grid ${
        isMobile 
          ? "grid-cols-1 gap-4" 
          : "grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      }`}
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            delay: index * 0.05,
            ease: "easeOut"
          }}
          className="h-full"
        >
          <ProductCard
            id={product.id.toString()}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            category={product.category}
            stock={product.stock}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
