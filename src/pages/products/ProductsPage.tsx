
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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

// Categories for filtering
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
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">हमारे उत्पाद</h1>
          
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="खोजें..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="क्रमबद्ध करें" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">फीचर्ड</SelectItem>
                <SelectItem value="price-low">कम से ज्यादा दाम</SelectItem>
                <SelectItem value="price-high">ज्यादा से कम दाम</SelectItem>
                <SelectItem value="name-asc">नाम (A-Z)</SelectItem>
                <SelectItem value="name-desc">नाम (Z-A)</SelectItem>
              </SelectContent>
            </Select>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>श्रेणियां</SheetTitle>
                  <SheetDescription>
                    अपनी पसंद की श्रेणी चुनें।
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4 space-y-4">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategory === category.id}
                        onCheckedChange={() => setSelectedCategory(category.id)}
                      />
                      <Label htmlFor={`category-${category.id}`}>
                        {category.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
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
        
        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-10">
            <h3 className="text-lg font-medium mb-2">कोई परिणाम नहीं मिला</h3>
            <p className="text-gray-600">अपनी खोज को समायोजित करके दोबारा प्रयास करें।</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;
