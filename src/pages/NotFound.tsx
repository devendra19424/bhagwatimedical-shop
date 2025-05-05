
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            {lang === "en" ? "Oops! Page not found" : "उफ़! पेज नहीं मिला"}
          </p>
          <p className="text-gray-500 mb-8">
            {lang === "en" 
              ? "The page you are looking for doesn't exist or has been moved."
              : "जिस पेज की आप तलाश कर रहे हैं, वह मौजूद नहीं है या स्थानांतरित कर दिया गया है।"}
          </p>
          <Link to="/">
            <Button>
              {lang === "en" ? "Return to Home" : "होम पेज पर वापस जाएं"}
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
