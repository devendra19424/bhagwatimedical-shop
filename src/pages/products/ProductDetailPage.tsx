
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MinusCircle, PlusCircle, ShoppingCart, Clock, Check, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
    deliveryInfo: "इटारसी क्षेत्र में 60 मिनट के भीतर डिलीवरी",
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
    deliveryInfo: "इटारसी क्षेत्र में 60 मिनट के भीतर डिलीवरी",
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
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge>{product.category}</Badge>
                {product.inStock ? (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    स्टॉक में है
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-red-600 border-red-600">
                    स्टॉक में नहीं है
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-bold mb-4">₹{product.price.toFixed(2)}</p>
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <MinusCircle className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </div>
                <Button className="flex-1 gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  कार्ट में जोड़ें
                </Button>
              </div>
              
              <Alert className="bg-blue-50 border border-blue-200 mb-4">
                <Clock className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800">तेज़ डिलीवरी</AlertTitle>
                <AlertDescription className="text-blue-700">
                  {product.deliveryInfo}
                </AlertDescription>
              </Alert>
            </div>
            
            <Tabs defaultValue="uses">
              <TabsList className="w-full">
                <TabsTrigger value="uses" className="flex-1">उपयोग</TabsTrigger>
                <TabsTrigger value="dosage" className="flex-1">खुराक</TabsTrigger>
                <TabsTrigger value="side-effects" className="flex-1">साइड इफेक्ट्स</TabsTrigger>
              </TabsList>
              <TabsContent value="uses" className="pt-4">
                <ul className="space-y-2">
                  {product.uses.map((use, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="dosage" className="pt-4">
                <p>{product.usageInstructions}</p>
              </TabsContent>
              <TabsContent value="side-effects" className="pt-4">
                <ul className="space-y-2">
                  {product.sideEffects.map((effect, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">संबंधित उत्पाद</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
              <Link to={`/products/${relProduct.id}`} key={relProduct.id}>
                <div className="group bg-white rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={relProduct.imageUrl}
                      alt={relProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{relProduct.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{relProduct.description}</p>
                    <p className="font-bold">₹{relProduct.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
