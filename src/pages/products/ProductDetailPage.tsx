
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { products, relatedProducts } from "@/data/productData";
import { formatProductData, formatRelatedProducts } from "@/utils/productUtils";
import { ProductNotFound } from "@/components/products/detail/ProductNotFound";
import { ProductSeo } from "@/components/products/detail/ProductSeo";
import { ProductContent } from "@/components/products/detail/ProductContent";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { lang } = useLanguage();
  
  // Find product by ID
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <Layout>
        <ProductNotFound />
      </Layout>
    );
  }

  // Format product data according to language
  const productData = formatProductData(product, lang);

  // Format related products
  const formattedRelatedProducts = formatRelatedProducts(relatedProducts, lang);

  return (
    <Layout>
      <ProductSeo productData={productData} />
      <ProductContent
        product={product}
        productData={productData}
        quantity={quantity}
        setQuantity={setQuantity}
        relatedProducts={formattedRelatedProducts}
      />
    </Layout>
  );
};

export default ProductDetailPage;
