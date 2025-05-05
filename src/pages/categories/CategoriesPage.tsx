import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/layout/Layout";
import ProductCategoryCard from "@/components/products/ProductCategoryCard";
import { productImages } from "@/translations";
import { Helmet } from "react-helmet-async";

interface Category {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  imageUrl: string;
  description: {
    en: string;
    hi: string;
  };
}

const CategoriesPage = () => {
  const { lang } = useLanguage();

  const categories: Category[] = [
    {
      id: "pain-killers",
      name: {
        en: "Pain Killers",
        hi: "पेन किलर",
      },
      imageUrl: productImages.painKillers.image,
      description: {
        en: "Medicines for pain relief and fever reduction",
        hi: "दर्द निवारक और बुखार कम करने वाली दवाएं",
      },
    },
    {
      id: "fever",
      name: {
        en: "Fever Medicines",
        hi: "बुखार दवाइयां",
      },
      imageUrl: productImages.painKillers.image,
      description: {
        en: "Medicines for reducing fever and related symptoms",
        hi: "बुखार और संबंधित लक्षणों को कम करने वाली दवाएं",
      },
    },
    {
      id: "vitamins",
      name: {
        en: "Vitamins",
        hi: "विटामिन्स",
      },
      imageUrl: productImages.vitamins.image,
      description: {
        en: "Daily nutritional supplements and vitamins",
        hi: "दैनिक पोषण सप्लीमेंट और विटामिन",
      },
    },
    {
      id: "devices",
      name: {
        en: "Health Devices",
        hi: "स्वास्थ्य उपकरण",
      },
      imageUrl: productImages.thermometer.image,
      description: {
        en: "Health monitoring devices and equipment",
        hi: "स्वास्थ्य निगरानी उपकरण और उपकरण",
      },
    },
    {
      id: "skincare",
      name: {
        en: "Skin Care",
        hi: "स्किन केयर",
      },
      imageUrl: productImages.skinCare.image,
      description: {
        en: "Products for skin health and care",
        hi: "त्वचा के स्वास्थ्य और देखभाल के लिए उत्पाद",
      },
    },
    {
      id: "diabetes",
      name: {
        en: "Diabetes",
        hi: "डायबिटीज",
      },
      imageUrl: productImages.glucometer.image,
      description: {
        en: "Products for diabetes management",
        hi: "डायबिटीज प्रबंधन के लिए उत्पाद",
      },
    },
    {
      id: "heart",
      name: {
        en: "Heart Health",
        hi: "हृदय स्वास्थ्य",
      },
      imageUrl: productImages.heartHealth.image,
      description: {
        en: "Products for heart health management",
        hi: "हृदय स्वास्थ्य प्रबंधन के लिए उत्पाद",
      },
    },
    {
      id: "nutrition",
      name: {
        en: "Nutrition",
        hi: "पोषण",
      },
      imageUrl: productImages.vitamins.image,
      description: {
        en: "Nutritional supplements and health foods",
        hi: "पोषण सप्लीमेंट और स्वास्थ्य खाद्य पदार्थ",
      },
    },
  ];

  return (
    <Layout>
      {/* SEO Optimization */}
      <Helmet>
        <title>Medicine Categories | Bhagwati Medical Store - Purani Itarsi</title>
        <meta name="description" content="Browse all medicine categories at Bhagwati Medical Store - your complete pharmacy in Itarsi, Purani Itarsi. Find pain killers, vitamins, diabetes care and more." />
        <meta name="keywords" content="medicine categories itarsi, pharmacy purani itarsi, medical store old itarsi, dawai ki dukan itarsi, chemist shop purani itarsi, bhagwati medical store categories" />
      </Helmet>

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {lang === "en" ? "All Categories" : "सभी श्रेणियां"}
          </h1>
          <p className="text-gray-600">
            {lang === "en" 
              ? "Browse all our product categories to find what you need" 
              : "आपकी आवश्यकता के अनुसार सभी उत्पाद श्रेणियां देखें"}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col">
              <ProductCategoryCard
                id={category.id}
                name={category.name}
                imageUrl={category.imageUrl}
              />
              <p className="text-sm text-gray-600 mt-2 px-1">
                {category.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
