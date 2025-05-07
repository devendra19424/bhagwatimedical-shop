
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { medicineData } from "@/data/medicineData";
import { formatProductData, formatRelatedProducts } from "@/utils/productUtils";
import { ProductNotFound } from "@/components/products/detail/ProductNotFound";
import { ProductSeo } from "@/components/products/detail/ProductSeo";
import { ProductContent } from "@/components/products/detail/ProductContent";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { lang } = useLanguage();
  const { addToCart, cartItems } = useCart();
  
  // Get all medicines from medicineData
  const allProducts = medicineData.map(medicine => ({
    id: medicine.id,
    name_en: medicine.name_en,
    name_hi: medicine.name_hi,
    imageUrl: medicine.imageUrl,
    price: medicine.price,
    description_en: medicine.description_en,
    description_hi: medicine.description_hi,
    category_en: medicine.category_en,
    category_hi: medicine.category_hi,
    inStock: medicine.inStock,
    usageInstructions_en: medicine.usageInstructions_en,
    usageInstructions_hi: medicine.usageInstructions_hi,
    uses_en: medicine.uses_en,
    uses_hi: medicine.uses_hi,
    sideEffects_en: medicine.sideEffects_en,
    sideEffects_hi: medicine.sideEffects_hi,
    deliveryInfo_en: "Delivery within 60 minutes in selected cities",
    deliveryInfo_hi: "चुनिंदा शहरों में 60 मिनट के भीतर डिलीवरी",
    strength: medicine.strength,
    manufacturer: medicine.manufacturer
  }));
  
  // Find product by ID
  const product = allProducts.find((p) => p.id === id);
  
  if (!product) {
    return (
      <Layout>
        <ProductNotFound />
      </Layout>
    );
  }

  // Format product data according to language
  const productData = formatProductData(product, lang);

  // Get 4 related products from the same category
  const relatedProducts = allProducts
    .filter(p => p.id !== id && p[`category_${lang}`] === product[`category_${lang}`])
    .slice(0, 4)
    .map(p => ({
      id: p.id,
      name: p[`name_${lang}`],
      imageUrl: p.imageUrl,
      price: p.price,
      description: p[`description_${lang}`],
      category: p[`category_${lang}`],
    }));

  // Handle add to cart button click
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: productData.name,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: quantity,
      category: productData.category,
    });
    
    toast({
      title: lang === "en" ? "Product added to cart!" : "उत्पाद कार्ट में जोड़ा गया!",
      description: lang === "en" 
        ? `${quantity} x ${productData.name} added to your cart.` 
        : `${quantity} x ${productData.name} आपके कार्ट में जोड़ा गया।`,
      variant: "default",
    });
  };

  // Check if this product is already in cart
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <Layout>
      <ProductSeo productData={productData} />
      <ProductContent
        product={product}
        productData={productData}
        quantity={quantity}
        setQuantity={setQuantity}
        relatedProducts={relatedProducts}
        onAddToCart={handleAddToCart}
        isInCart={isInCart}
      />
    </Layout>
  );
};

export default ProductDetailPage;
