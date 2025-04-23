import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ProductsHeader } from "@/components/products/ProductsHeader";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { ProductsList } from "@/components/products/ProductsList";
import { useLanguage } from "@/context/LanguageContext";

// Categories for filtering (kept in the main file as it's configuration)
const categories = [
  { id: "all", name: "सभी श्रेणियां" },
  { id: "pain-killers", name: "पेन किलर" },
  { id: "fever", name: "बुखार दवाइयां" },
  { id: "vitamins", name: "विटामिन्स" },
  { id: "devices", name: "स्वास्थ्य उपकरण" },
  { id: "skincare", name: "स्किन केयर" },
  { id: "diabetes", name: "डायबिटीज" },
  { id: "heart", name: "हृदय स्वास्थ्य" },
  { id: "nutrition", name: "पोषण" },
];

// Sample product data
const products = [
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
  {
    id: 5,
    name: "कफ सिरप",
    imageUrl: "https://images.unsplash.com/photo-1603807008857-ad66b70431e2?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 99.99,
    description: "खांसी निवारक सिरप",
    category: "कफ और सर्दी",
  },
  {
    id: 6,
    name: "ग्लूकोमीटर",
    imageUrl: "https://images.unsplash.com/photo-1612277627603-ab936df4d50d?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 1299.99,
    description: "शुगर लेवल मॉनिटरिंग सिस्टम",
    category: "डायबिटीज",
  },
  {
    id: 7,
    name: "बीपी मॉनिटर",
    imageUrl: "https://images.unsplash.com/photo-1580281657702-257584239a58?h=500&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&w=800",
    price: 1499.99,
    description: "डिजिटल ब्लड प्रेशर मॉनिटर",
    category: "हृदय स्वास्थ्य",
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

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [sortOption, setSortOption] = useState("featured");
  
  // Filter products based on search query and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || 
                           product.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") {
      return a.price - b.price;
    } else if (sortOption === "price-high") {
      return b.price - a.price;
    } else if (sortOption === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    // Default: featured
    return 0;
  });

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
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        <ProductsList products={sortedProducts} />
      </div>
    </Layout>
  );
};

export default ProductsPage;
