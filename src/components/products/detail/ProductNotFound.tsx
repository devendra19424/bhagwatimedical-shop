
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/layout/Layout";

export function ProductNotFound() {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">
          {t("productNotFound")}
        </h1>
        <p className="mb-6">
          {t("productNotFoundDescription")}
        </p>
        <Link to="/products">
          <Button>
            {t("viewAllProducts")}
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
