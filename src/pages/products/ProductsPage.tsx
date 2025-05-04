
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ProductsHeader } from "@/components/products/ProductsHeader";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { ProductsList } from "@/components/products/ProductsList";
import { useLanguage } from "@/context/LanguageContext";
import { productImages } from "@/translations";

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

// Updated product data with proper images and category mapping
const generateProducts = () => [
  {
    id: 1,
    name_en: "Paracetamol",
    name_hi: "पैरासिटामोल",
    imageUrl: productImages.painKillers.image,
    price: 25.99,
    description_en: "Fever and pain relief tablets",
    description_hi: "बुखार और दर्द निवारक टैबलेट",
    category_id: "pain-killers",
    category_en: "Pain Killers",
    category_hi: "पेन किलर",
  },
  {
    id: 2,
    name_en: "Ibuprofen",
    name_hi: "इबुप्रोफेन",
    imageUrl: productImages.painKillers.image,
    price: 35.99,
    description_en: "Anti-inflammatory pain reliever",
    description_hi: "सूजन कम करने वाला दर्द निवारक",
    category_id: "pain-killers",
    category_en: "Pain Killers",
    category_hi: "पेन किलर",
  },
  {
    id: 3,
    name_en: "Multivitamin",
    name_hi: "मल्टीविटामिन",
    imageUrl: productImages.vitamins.image,
    price: 299.99,
    description_en: "Daily nutritional supplement",
    description_hi: "दैनिक पोषण सप्लीमेंट",
    category_id: "vitamins",
    category_en: "Vitamins",
    category_hi: "विटामिन्स",
  },
  {
    id: 4,
    name_en: "Digital Thermometer",
    name_hi: "डिजिटल थर्मामीटर",
    imageUrl: productImages.thermometer.image,
    price: 399.99,
    description_en: "Quick and accurate temperature measurement",
    description_hi: "त्वरित और सटीक तापमान माप",
    category_id: "devices",
    category_en: "Health Devices",
    category_hi: "स्वास्थ्य उपकरण",
  },
  {
    id: 5,
    name_en: "Hand Sanitizer",
    name_hi: "हैंड सैनिटाइज़र",
    imageUrl: productImages.handSanitizer.image,
    price: 149.99,
    description_en: "99.9% germ kill",
    description_hi: "99.9% जीवाणु नाशक",
    category_id: "skincare",
    category_en: "Skin Care",
    category_hi: "स्किन केयर",
  },
  {
    id: 6,
    name_en: "Cough Syrup",
    name_hi: "कफ सिरप",
    imageUrl: productImages.coughSyrup.image,
    price: 99.99,
    description_en: "Cough relief syrup",
    description_hi: "खांसी निवारक सिरप",
    category_id: "fever",
    category_en: "Fever Medicines",
    category_hi: "बुखार दवाइयां",
  },
  {
    id: 7,
    name_en: "Face Cream",
    name_hi: "फेस क्रीम",
    imageUrl: productImages.skinCare.image,
    price: 199.99,
    description_en: "Moisturizing face cream",
    description_hi: "मॉइस्चराइजिंग फेस क्रीम",
    category_id: "skincare",
    category_en: "Skin Care",
    category_hi: "स्किन केयर",
  },
  {
    id: 8,
    name_en: "Glucometer",
    name_hi: "ग्लूकोमीटर",
    imageUrl: productImages.glucometer.image,
    price: 1299.99,
    description_en: "Sugar level monitoring system",
    description_hi: "शुगर लेवल मॉनिटरिंग सिस्टम",
    category_id: "diabetes",
    category_en: "Diabetes",
    category_hi: "डायबिटीज",
  },
  {
    id: 9,
    name_en: "BP Monitor",
    name_hi: "बीपी मॉनिटर",
    imageUrl: productImages.bpMonitor.image,
    price: 1499.99,
    description_en: "Digital blood pressure monitor",
    description_hi: "डिजिटल ब्लड प्रेशर मॉनिटर",
    category_id: "devices",
    category_en: "Health Devices",
    category_hi: "स्वास्थ्य उपकरण",
  },
  {
    id: 10,
    name_en: "Protein Powder",
    name_hi: "प्रोटीन पाउडर",
    imageUrl: productImages.vitamins.image,
    price: 999.99,
    description_en: "Pure whey protein",
    description_hi: "शुद्ध व्हे प्रोटीन",
    category_id: "nutrition",
    category_en: "Nutrition",
    category_hi: "पोषण",
  },
  {
    id: 11,
    name_en: "Omega-3 Supplements",
    name_hi: "ओमेगा-3 सप्लीमेंट्स",
    imageUrl: productImages.heartHealth.image,
    price: 599.99,
    description_en: "Heart health supplements",
    description_hi: "हृदय स्वास्थ्य सप्लीमेंट्स",
    category_id: "heart",
    category_en: "Heart Health",
    category_hi: "हृदय स्वास्थ्य",
  },
  {
    id: 12,
    name_en: "CoQ10 Capsules",
    name_hi: "CoQ10 कैप्सूल्स",
    imageUrl: productImages.heartHealth.image,
    price: 799.99,
    description_en: "Coenzyme Q10 for heart support",
    description_hi: "हृदय समर्थन के लिए कोएंजाइम Q10",
    category_id: "heart",
    category_en: "Heart Health",
    category_hi: "हृदय स्वास्थ्य",
  },
];

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [sortOption, setSortOption] = useState("featured");
  const [products, setProducts] = useState(generateProducts());
  
  const { lang } = useLanguage();
  
  // Update category when URL parameter changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);
  
  // Map categories to display correct language version
  const localizedCategories = categories.map(category => ({
    id: category.id,
    name: category[`name_${lang}`],
  }));
  
  // Filter products based on search query and category
  const filteredProducts = products.filter((product) => {
    const productName = product[`name_${lang}`] as string;
    const productDescription = product[`description_${lang}`] as string;
    
    const matchesSearch = productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          productDescription.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || 
                           product.category_id === selectedCategory;
    
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
    stock: 10
  }));

  return (
    <Layout>
      <div className="container py-4 md:py-8 px-4 md:px-6 mx-auto">
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
