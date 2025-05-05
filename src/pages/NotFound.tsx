
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

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
            {t("pageNotFound")}
          </p>
          <p className="text-gray-500 mb-8">
            {t("pageNotFoundDescription")}
          </p>
          <Link to="/">
            <Button>
              {t("returnToHome")}
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
