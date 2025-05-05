
import { Helmet } from "react-helmet-async";
import { FormattedProductData } from "@/utils/productUtils";

interface ProductSeoProps {
  productData: FormattedProductData;
}

export function ProductSeo({ productData }: ProductSeoProps) {
  return (
    <Helmet>
      <title>{productData.name} | Bhagwati Medical Store Itarsi - Purani Itarsi</title>
      <meta 
        name="description" 
        content={`Buy ${productData.name} at Bhagwati Medical Store - ${productData.description}. Delivery in Itarsi, Purani Itarsi area.`}
      />
      <meta 
        name="keywords" 
        content={`${productData.name}, ${productData.category}, medicine itarsi, pharmacy purani itarsi, medical shop itarsi, dawai ki dukan purani itarsi, bhagwati medical`} 
      />
    </Helmet>
  );
}
