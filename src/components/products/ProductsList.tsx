
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ProductCard from "./ProductCard";

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

  if (products.length === 0) {
    return (
      <div className="text-center py-12 px-4 bg-neutral-50 rounded-lg border border-neutral-200">
        <h3 className="text-lg font-medium mb-2 text-neutral-700">{t("noResults")}</h3>
        <p className="text-gray-600 text-sm md:text-base">{t("adjustSearch")}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
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
    </div>
  );
}
