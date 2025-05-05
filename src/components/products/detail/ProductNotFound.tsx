
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/layout/Layout";

export function ProductNotFound() {
  const { lang } = useLanguage();
  
  return (
    <Layout>
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">
          {lang === 'en' ? 'Product Not Found' : 'प्रोडक्ट नहीं मिला'}
        </h1>
        <p className="mb-6">
          {lang === 'en' 
            ? 'Sorry, the product you are looking for does not exist.' 
            : 'क्षमा करें, आपके द्वारा खोजा गया प्रोडक्ट मौजूद नहीं है।'
          }
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
