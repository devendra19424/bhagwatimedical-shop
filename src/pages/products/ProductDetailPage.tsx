
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/products/detail/ProductImage";
import { ProductInfo } from "@/components/products/detail/ProductInfo";
import { RelatedProducts } from "@/components/products/detail/RelatedProducts";
import { useLanguage } from "@/context/LanguageContext";
import { Helmet } from "react-helmet-async";

// Dummy product data
const products = [
  {
    id: "1",
    name_en: "Paracetamol",
    name_hi: "पैरासिटामोल",
    imageUrl: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 25.99,
    description_en: "Paracetamol is a pain and fever reducing medication used to treat mild to moderate pain.",
    description_hi: "पैरासिटामोल एक दर्द और बुखार कम करने वाली दवा है जो हल्के से मध्यम दर्द के इलाज के लिए उपयोग की जाती है।",
    category_en: "Pain Killers",
    category_hi: "पेन किलर",
    inStock: true,
    usageInstructions_en: "Take one tablet 3-4 times a day, every 4-6 hours. Do not exceed 4 doses in a day.",
    usageInstructions_hi: "प्रति दिन 3-4 बार, हर 4-6 घंटे में एक टैबलेट लें। एक दिन में 4 से अधिक खुराकें न लें।",
    uses_en: [
      "To reduce fever",
      "For relief from mild to moderate pain",
      "Headache, muscle pain",
      "Toothache and period pain",
    ],
    uses_hi: [
      "बुखार कम करने के लिए",
      "हल्के से मध्यम दर्द में राहत के लिए",
      "सिरदर्द, मांसपेशियों में दर्द",
      "दांत दर्द और पीरियड्स दर्द",
    ],
    sideEffects_en: [
      "Generally well tolerated",
      "Some people may experience nausea, stomach upset",
      "Liver damage can occur with excessive use",
      "Allergic reaction (rare)",
    ],
    sideEffects_hi: [
      "सामान्यतः अच्छी तरह से सहन किया जाता है",
      "कुछ लोगों में मतली, पेट की परेशानी हो सकती है",
      "अत्यधिक उपयोग से लीवर को नुकसान हो सकता है",
      "एलर्जिक प्रतिक्रिया (दुर्लभ)",
    ],
    deliveryInfo_en: "Delivery within 60 minutes in Itarsi area",
    deliveryInfo_hi: "इटारसी क्षेत्र में 60 मिनट के भीतर डिलीवरी",
    related: [2, 5],
  },
  {
    id: "2",
    name_en: "Multivitamin",
    name_hi: "मल्टीविटामिन",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 299.99,
    description_en: "Daily nutritional supplement",
    description_hi: "दैनिक पोषण सप्लीमेंट",
    category_en: "Vitamins",
    category_hi: "विटामिन्स",
    inStock: true,
    usageInstructions_en: "Take one capsule daily with breakfast.",
    usageInstructions_hi: "प्रतिदिन एक कैप्सूल सुबह के भोजन के साथ लें।",
    uses_en: [
      "To fill nutritional gaps",
      "Improve general health and wellbeing",
      "Strengthen immune system",
      "Boost energy levels",
    ],
    uses_hi: [
      "पोषक तत्वों की कमी को पूरा करने के लिए",
      "सामान्य स्वास्थ्य और कल्याण में सुधार के लिए",
      "प्रतिरक्षा प्रणाली को मजबूत करने के लिए",
      "ऊर्जा के स्तर को बढ़ाने के लिए",
    ],
    sideEffects_en: [
      "Generally safe and well tolerated",
      "Some people may experience mild stomach upset",
      "Excess dosage can lead to vitamin toxicity",
    ],
    sideEffects_hi: [
      "आमतौर पर सुरक्षित और अच्छी तरह से सहन किया जाता है",
      "कुछ लोगों में पेट की हल्की परेशानी हो सकती है",
      "अधिक खुराक से विटामिन विषाक्तता हो सकती है",
    ],
    deliveryInfo_en: "Delivery within 60 minutes in Itarsi area",
    deliveryInfo_hi: "इटारसी क्षेत्र में 60 मिनट के भीतर डिलीवरी",
    related: [1, 8],
  },
];

// Related products
const relatedProducts = [
  {
    id: 2,
    name_en: "Multivitamin",
    name_hi: "मल्टीविटामिन",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 299.99,
    description_en: "Daily nutritional supplement",
    description_hi: "दैनिक पोषण सप्लीमेंट",
    category_en: "Vitamins",
    category_hi: "विटामिन्स",
  },
  {
    id: 5,
    name_en: "Cough Syrup",
    name_hi: "कफ सिरप",
    imageUrl: "https://images.unsplash.com/photo-1603807008857-ad66b70431e2?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 99.99,
    description_en: "Cough relief syrup",
    description_hi: "खांसी निवारक सिरप",
    category_en: "Cold & Cough",
    category_hi: "कफ और सर्दी",
  },
  {
    id: 8,
    name_en: "Protein Powder",
    name_hi: "प्रोटीन पाउडर",
    imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 999.99,
    description_en: "Pure whey protein",
    description_hi: "शुद्ध व्हे प्रोटीन",
    category_en: "Nutrition",
    category_hi: "पोषण",
  },
];

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { lang } = useLanguage();
  
  // Find product by ID
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {lang === 'en' ? 'Product Not Found' : 'प्रोडक्ट नहीं मिला'}
          </h1>
          <p className="mb-6">
            {lang === 'en' ? 'Sorry, the product you are looking for does not exist.' : 'क्षमा करें, आपके द्वारा खोजा गया प्रोडक्ट मौजूद नहीं है।'}
          </p>
          <Link to="/products">
            <Button>
              {lang === 'en' ? 'View All Products' : 'सभी प्रोडक्ट देखें'}
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Format product data according to language
  const productData = {
    name: product[`name_${lang}`],
    category: product[`category_${lang}`],
    price: product.price,
    description: product[`description_${lang}`],
    inStock: product.inStock,
    deliveryInfo: product[`deliveryInfo_${lang}`],
    usageInstructions: product[`usageInstructions_${lang}`],
    uses: product[`uses_${lang}`],
    sideEffects: product[`sideEffects_${lang}`],
  };

  return (
    <Layout>
      {/* SEO Optimization */}
      <Helmet>
        <title>{productData.name} | Bhagwati Medical Store Itarsi - Purani Itarsi</title>
        <meta name="description" content={`Buy ${productData.name} at Bhagwati Medical Store - ${productData.description}. Delivery in Itarsi, Purani Itarsi area.`} />
        <meta name="keywords" content={`${productData.name}, ${productData.category}, medicine itarsi, pharmacy purani itarsi, medical shop itarsi, dawai ki dukan purani itarsi, bhagwati medical`} />
      </Helmet>

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
          />
        </div>
        <RelatedProducts products={relatedProducts.map(prod => ({
          ...prod,
          name: prod[`name_${lang}`],
          description: prod[`description_${lang}`],
          category: prod[`category_${lang}`]
        }))} />
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
