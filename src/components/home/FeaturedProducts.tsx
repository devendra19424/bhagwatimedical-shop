
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { productImages } from "@/translations";
import { Language } from "@/translations";

// Sample product data with images from productImages
const generateFeaturedProducts = (lang: Language) => [
  {
    id: 1,
    name: lang === "en" ? "Paracetamol" : "पैरासिटामोल",
    imageUrl: productImages.painKillers.image,
    price: 25.99,
    description: lang === "en" ? "Fever and pain relief tablets" : "बुखार और दर्द निवारक टैबलेट",
    category: lang === "en" ? "Pain Killers" : "पेन किलर",
  },
  {
    id: 2,
    name: lang === "en" ? "Multivitamin" : "मल्टीविटामिन",
    imageUrl: productImages.vitamins.image,
    price: 299.99,
    description: lang === "en" ? "Daily nutritional supplement" : "दैनिक पोषण सप्लीमेंट",
    category: lang === "en" ? "Vitamins" : "विटामिन्स",
  },
  {
    id: 3,
    name: lang === "en" ? "Digital Thermometer" : "डिजिटल थर्मामीटर",
    imageUrl: productImages.thermometer.image,
    price: 399.99,
    description: lang === "en" ? "Quick and accurate temperature measurement" : "त्वरित और सटीक तापमान माप",
    category: lang === "en" ? "Health Devices" : "स्वास्थ्य उपकरण",
  },
  {
    id: 4,
    name: lang === "en" ? "Hand Sanitizer" : "हैंड सैनिटाइज़र",
    imageUrl: productImages.handSanitizer.image,
    price: 149.99,
    description: lang === "en" ? "99.9% germ kill" : "99.9% जीवाणु नाशक",
    category: lang === "en" ? "Skin Care" : "स्किन केयर",
  },
];

const FeaturedProducts = () => {
  const { lang, t } = useLanguage();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const featuredProducts = generateFeaturedProducts(lang);

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">{t("featured")}</h2>
          <Link to="/products">
            <Button variant="link" className="text-primary">
              {t("allProducts")}
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
                  {t("addToCart")}
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
