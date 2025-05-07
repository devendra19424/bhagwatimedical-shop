
import { Product, FormattedProductData, RelatedProduct } from "@/utils/productUtils";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import { RelatedProducts } from "./RelatedProducts";
import AddToCartButton from "@/components/products/AddToCartButton";

interface ProductContentProps {
  product: Product;
  productData: FormattedProductData;
  quantity: number;
  setQuantity: (quantity: number) => void;
  relatedProducts: RelatedProduct[];
  isInCart?: boolean;
  onAddToCart?: () => void;
}

export function ProductContent({ 
  product, 
  productData, 
  quantity, 
  setQuantity, 
  relatedProducts,
  isInCart,
  onAddToCart
}: ProductContentProps) {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <ProductImage imageUrl={product.imageUrl} name={productData.name} />
        <ProductInfo
          name={productData.name}
          category={productData.category}
          price={productData.price}
          description={productData.description}
          inStock={product.inStock}
          deliveryInfo={productData.deliveryInfo}
          usageInstructions={productData.usageInstructions}
          uses={productData.uses}
          sideEffects={productData.sideEffects}
          quantity={quantity}
          onQuantityChange={setQuantity}
          isInCart={isInCart}
          onAddToCart={onAddToCart}
          productId={product.id}
          imageUrl={product.imageUrl}
        />
      </div>
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
