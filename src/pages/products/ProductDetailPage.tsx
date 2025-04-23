import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/products/detail/ProductImage";
import { ProductInfo } from "@/components/products/detail/ProductInfo";
import { RelatedProducts } from "@/components/products/detail/RelatedProducts";

// Dummy product data
const products = [
  {
    id: "1",
    name: "पैरासिटामोल",
    imageUrl: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 25.99,
    description: "पैरासिटामोल एक दर्द और बुखार कम करने वाली दवा है जो हल्के से मध्यम दर्द के इलाज के लिए उपयोग की जाती है।",
    category: "पेन किलर",
    inStock: true,
    usageInstructions: "प्रति दिन 3-4 बार, हर 4-6 घंटे में एक टैबलेट लें। एक दिन में 4 से अधिक खुराकें न लें।",
    uses: [
      "बुखार कम करने के लिए",
      "हल्के से मध्यम दर्द में राहत के लिए",
      "सिरदर्द, मांसपेशियों में दर्द",
      "दांत दर्द और पीरियड्स दर्द",
    ],
    sideEffects: [
      "सामान्यतः अच्छी तरह से सहन किया जाता है",
      "कुछ लोगों में मतली, पेट की परेशानी हो सकती है",
      "अत्यधिक उपयोग से लीवर को नुकसान हो सकता है",
      "एलर्जिक प्रतिक्रिया (दुर्लभ)",
    ],
    deliveryInfo: "इटारसी क्षे��्र में 60 मिनट के भीतर डिलीवरी",
    related: [2, 5],
  },
  {
    id: "2",
    name: "मल्टीविटामिन",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 299.99,
    description: "दैनिक पोषण सप्लीमेंट",
    category: "विटामिन्स",
    inStock: true,
    usageInstructions: "प्रतिदिन एक कैप्सूल सुबह के भोजन के साथ लें।",
    uses: [
      "पोषक तत्वों की कमी को पूरा करने के लिए",
      "सामान्य स्वास्थ्य और कल्याण में सुधार के लिए",
      "प्रतिरक्षा प्रणाली को मजबूत करने के लिए",
      "ऊर्जा के स्तर को बढ़ाने के लिए",
    ],
    sideEffects: [
      "आमतौर पर सुरक्षित और अच्छी तरह से सहन किया जाता है",
      "कुछ लोगों में पेट की हल्की परेशानी हो सकती है",
      "अधिक खुराक से विटामिन विषाक्तता हो सकती है",
    ],
    deliveryInfo: "इटारसी क्षे��्र में 60 मिनट के भीतर डिलीवरी",
    related: [1, 8],
  },
];

// Related products
const relatedProducts = [
  {
    id: 2,
    name: "मल्टीविटामिन",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 299.99,
    description: "दैनिक पोषण सप्लीमेंट",
    category: "विटामिन्स",
  },
  {
    id: 5,
    name: "कफ सिरप",
    imageUrl: "https://images.unsplash.com/photo-1603807008857-ad66b70431e2?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 99.99,
    description: "खांसी निवारक सिरप",
    category: "कफ और सर्दी",
  },
  {
    id: 8,
    name: "प्रोटीन पाउडर",
    imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 999.99,
    description: "शुद्ध व्हे प्रोटीन",
    category: "पोषण",
  },
];

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Find product by ID
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">प्रोडक्ट नहीं मिला</h1>
          <p className="mb-6">क्षमा करें, आपके द्वारा खोजा गया प्रोडक्ट मौजूद नहीं है।</p>
          <Link to="/products">
            <Button>सभी प्रोडक्ट देखें</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ProductImage imageUrl={product.imageUrl} name={product.name} />
          <ProductInfo
            name={product.name}
            category={product.category}
            price={product.price}
            description={product.description}
            inStock={product.inStock}
            deliveryInfo={product.deliveryInfo}
            usageInstructions={product.usageInstructions}
            uses={product.uses}
            sideEffects={product.sideEffects}
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
        </div>
        <RelatedProducts products={relatedProducts} />
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
