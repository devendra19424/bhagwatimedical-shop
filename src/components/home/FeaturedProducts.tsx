
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "पैरासिटामोल",
    imageUrl: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 25.99,
    description: "बुखार और दर्द निवारक टैबलेट",
    category: "पेन किलर",
  },
  {
    id: 2,
    name: "मल्टीविटामिन",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 299.99,
    description: "दैनिक पोषण सप्लीमेंट",
    category: "विटामिन्स",
  },
  {
    id: 3,
    name: "डिजिटल थर्मामीटर",
    imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 399.99,
    description: "त्वरित और सटीक तापमान माप",
    category: "स्वास्थ्य उपकरण",
  },
  {
    id: 4,
    name: "हैंड सैनिटाइज़र",
    imageUrl: "https://images.unsplash.com/photo-1584362522949-b6394e1eaa4b?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 149.99,
    description: "99.9% जीवाणु नाशक",
    category: "स्किन केयर",
  },
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">विशेष उत्पाद</h2>
          <Link to="/products">
            <Button variant="link" className="text-primary">
              सभी देखें
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link to={`/products/${product.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs py-1 px-2 rounded">
                    {product.category}
                  </div>
                </div>
              </Link>
              <CardContent className="p-4">
                <Link to={`/products/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                </Link>
                <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                  {product.description}
                </p>
                <p className="font-bold">
                  ₹{product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  कार्ट में जोड़ें
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
