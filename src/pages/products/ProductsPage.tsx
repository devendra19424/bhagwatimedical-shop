
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ProductsHeader } from "@/components/products/ProductsHeader";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { ProductsList } from "@/components/products/ProductsList";
import { useLanguage } from "@/context/LanguageContext";

// Updated categories with both language versions
const categories = [
  { id: "all", name_en: "All Categories", name_hi: "सभी श्रेणियां" },
  { id: "pain-killers", name_en: "Pain Killers", name_hi: "पेन किलर" },
  { id: "fever", name_en: "Fever Medicines", name_hi: "बुखार दवाइयां" },
  { id: "vitamins", name_en: "Vitamins", name_hi: "विटामिन्स" },
  { id: "devices", name_en: "Health Devices", name_hi: "स्वास्थ्य उपकरण" },
  { id: "skincare", name_en: "Skin Care", name_hi: "स्किन केयर" },
  { id: "diabetes", name_en: "Diabetes", name_hi: "डायबिटीज" },
  { id: "heart", name_en: "Heart Health", name_hi: "हृदय स्वास्थ्य" },
  { id: "nutrition", name_en: "Nutrition", name_hi: "पोषण" },
];

// Updated product data with both language versions
const products = [
  {
    id: 1,
    name_en: "Paracetamol",
    name_hi: "पैरासिटामोल",
    imageUrl: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 25.99,
    description_en: "Fever and pain relief tablets",
    description_hi: "बुखार और दर्द निवारक टैबलेट",
    category_en: "Pain Killers",
    category_hi: "पेन किलर",
  },
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
    id: 3,
    name_en: "Digital Thermometer",
    name_hi: "डिजिटल थर्मामीटर",
    imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 399.99,
    description_en: "Quick and accurate temperature measurement",
    description_hi: "त्वरित और सटीक तापमान माप",
    category_en: "Health Devices",
    category_hi: "स्वास्थ्य उपकरण",
  },
  {
    id: 4,
    name_en: "Hand Sanitizer",
    name_hi: "हैंड सैनिटाइज़र",
    imageUrl: "https://images.unsplash.com/photo-1584362522949-b6394e1eaa4b?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 149.99,
    description_en: "99.9% germ kill",
    description_hi: "99.9% जीवाणु नाशक",
    category_en: "Skin Care",
    category_hi: "स्किन केयर",
  },
  {
    id: 5,
    name_en: "Cough Syrup",
    name_hi: "कफ सिरप",
    imageUrl: "https://images.unsplash.com/photo-1603807008857-ad66b70431e2?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 99.99,
    description_en: "Cough relief syrup",
    description_hi: "खांसी निवारक सिरप",
    category_en: "Cough & Cold",
    category_hi: "कफ और सर्दी",
  },
  {
    id: 6,
    name_en: "Glucometer",
    name_hi: "ग्लूकोमीटर",
    imageUrl: "https://images.unsplash.com/photo-1612277627603-ab936df4d50d?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 1299.99,
    description_en: "Sugar level monitoring system",
    description_hi: "शुगर लेवल मॉनिटरिंग सिस्टम",
    category_en: "Diabetes",
    category_hi: "डायबिटीज",
  },
  {
    id: 7,
    name_en: "BP Monitor",
    name_hi: "बीपी मॉनिटर",
    imageUrl: "https://images.unsplash.com/photo-1580281657702-257584239a58?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 1499.99,
    description_en: "Digital blood pressure monitor",
    description_hi: "डिजिटल ब्लड प्रेशर मॉनिटर",
    category_en: "Heart Health",
    category_hi: "हृदय स्वास्थ्य",
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

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [sortOption, setSortOption] = useState("featured");
  
  const { lang } = useLanguage();
  
  // Map categories to display correct language version
  const localizedCategories = categories.map(category => ({
    id: category.id,
    name: category[`name_${lang}`],
  }));
  
  // Filter products based on search query and category
  const filteredProducts = products.filter((product) => {
    const productName = product[`name_${lang}`] as string;
    const productDescription = product[`description_${lang}`] as string;
    const productCategory = product[`category_${lang}`] as string;
    
    const matchesSearch = productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          productDescription.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || 
                           productCategory.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const nameA = a[`name_${lang}`] as string;
    const nameB = b[`name_${lang}`] as string;
    
    if (sortOption === "price-low") {
      return a.price - b.price;
    } else if (sortOption === "price-high") {
      return b.price - a.price;
    } else if (sortOption === "name-asc") {
      return nameA.localeCompare(nameB);
    } else if (sortOption === "name-desc") {
      return nameB.localeCompare(nameA);
    }
    // Default: featured
    return 0;
  });
  
  // Map products to localized format
  const localizedProducts = sortedProducts.map(product => ({
    id: product.id,
    name: product[`name_${lang}`] as string,
    imageUrl: product.imageUrl,
    price: product.price,
    description: product[`description_${lang}`] as string,
    category: product[`category_${lang}`] as string,
    stock: 1
  }));

  return (
    <Layout>
      <div className="container py-8">
        <ProductsHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
        
        <CategoryFilter
          categories={localizedCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        <ProductsList products={localizedProducts} />
      </div>
    </Layout>
  );
};

export default ProductsPage;
