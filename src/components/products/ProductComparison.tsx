
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/context/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { X, ShoppingCart, Plus, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  manufacturer: string;
  dosage: string;
  inStock: boolean;
  features: {
    childSafe: boolean;
    sugarFree: boolean;
    vegan: boolean;
  };
  effectiveFor: string[];
}

const allProducts: Product[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop",
    category: "Pain Relief",
    manufacturer: "MediCorp",
    dosage: "500mg",
    inStock: true,
    features: {
      childSafe: false,
      sugarFree: true,
      vegan: true,
    },
    effectiveFor: ["Fever", "Headache", "Muscle Pain"],
  },
  {
    id: "2",
    name: "Ibuprofen 400mg",
    price: 35.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop",
    category: "Pain Relief",
    manufacturer: "HealthPharm",
    dosage: "400mg",
    inStock: true,
    features: {
      childSafe: false,
      sugarFree: true,
      vegan: false,
    },
    effectiveFor: ["Inflammation", "Fever", "Headache", "Joint Pain"],
  },
  {
    id: "3",
    name: "Aspirin 300mg",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop",
    category: "Pain Relief",
    manufacturer: "VitaPharm",
    dosage: "300mg",
    inStock: false,
    features: {
      childSafe: false,
      sugarFree: true,
      vegan: true,
    },
    effectiveFor: ["Fever", "Pain", "Inflammation"],
  },
  {
    id: "4",
    name: "Cetirizine 10mg",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop",
    category: "Allergy",
    manufacturer: "MediCorp",
    dosage: "10mg",
    inStock: true,
    features: {
      childSafe: true,
      sugarFree: false,
      vegan: true,
    },
    effectiveFor: ["Allergies", "Hay Fever", "Hives"],
  },
  {
    id: "5",
    name: "Children's Paracetamol",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop",
    category: "Pain Relief",
    manufacturer: "KidHealth",
    dosage: "120mg/5ml",
    inStock: true,
    features: {
      childSafe: true,
      sugarFree: true,
      vegan: true,
    },
    effectiveFor: ["Children's Fever", "Children's Pain"],
  },
];

interface ComparisonProps {
  maxProducts?: number;
}

const ProductComparison = ({ maxProducts = 3 }: ComparisonProps) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  
  const handleAddProduct = (productId: string) => {
    if (selectedProducts.length >= maxProducts) {
      toast({
        title: "Maximum products reached",
        description: `You can compare up to ${maxProducts} products at a time`,
        variant: "destructive",
      });
      return;
    }
    
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    if (selectedProducts.some(p => p.id === productId)) {
      toast({
        title: "Product already added",
        description: "This product is already in your comparison",
        variant: "destructive",
      });
      return;
    }
    
    setSelectedProducts([...selectedProducts, product]);
  };
  
  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };
  
  const handleAddToCart = (productId: string) => {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <Card className="w-full border border-neutral-200 shadow-sm">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-t-lg">
        <CardTitle className="flex items-center justify-between">
          <span>{t("compareProducts")}</span>
          {selectedProducts.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedProducts([])}
              className="text-xs h-8"
            >
              Clear All
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6 p-4 overflow-x-auto">
        {selectedProducts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-neutral-500 mb-4">Select products to compare</p>
            <Select onValueChange={handleAddProduct}>
              <SelectTrigger className="w-[260px] mx-auto">
                <SelectValue placeholder="Choose a product" />
              </SelectTrigger>
              <SelectContent>
                {allProducts.map(product => (
                  <SelectItem key={product.id} value={product.id}>
                    {product.name} ({product.dosage})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ) : (
          <>
            <div className="flex mb-4 gap-2">
              {selectedProducts.length < maxProducts && (
                <Select onValueChange={handleAddProduct}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Add product" />
                  </SelectTrigger>
                  <SelectContent>
                    {allProducts
                      .filter(p => !selectedProducts.some(sp => sp.id === p.id))
                      .map(product => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.name} ({product.dosage})
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              )}
              <Badge variant="outline" className="bg-neutral-50 text-xs">
                {selectedProducts.length} of {maxProducts} products
              </Badge>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-[160px_repeat(auto-fill,minmax(180px,1fr))] gap-4 min-w-[700px]">
                {/* Header Row */}
                <div className="font-medium text-neutral-500">
                  &nbsp;
                </div>
                
                {selectedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full bg-white/80 shadow-sm hover:bg-white"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                    
                    <div className="flex flex-col items-center space-y-3 p-3 bg-white rounded-lg border border-neutral-200">
                      <div className="h-24 w-24 bg-neutral-50 rounded-lg flex items-center justify-center p-2">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-medium text-sm">{product.name}</h4>
                        <p className="text-primary font-bold text-sm mt-1">
                          ₹{product.price.toFixed(2)}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        disabled={!product.inStock}
                        variant={product.inStock ? "default" : "outline"}
                        className="w-full mt-2 text-xs h-8 gap-1"
                        onClick={() => handleAddToCart(product.id)}
                      >
                        <ShoppingCart className="h-3 w-3" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </div>
                  </motion.div>
                ))}
                
                {/* Comparison Rows */}
                <div className="contents">
                  {/* Category */}
                  <div className="bg-neutral-50 p-3 rounded-lg font-medium text-sm">
                    Category
                  </div>
                  {selectedProducts.map(product => (
                    <div key={`${product.id}-category`} className="p-3 rounded-lg text-sm border text-center">
                      {product.category}
                    </div>
                  ))}
                  
                  {/* Manufacturer */}
                  <div className="bg-neutral-50 p-3 rounded-lg font-medium text-sm">
                    Manufacturer
                  </div>
                  {selectedProducts.map(product => (
                    <div key={`${product.id}-manufacturer`} className="p-3 rounded-lg text-sm border text-center">
                      {product.manufacturer}
                    </div>
                  ))}
                  
                  {/* Dosage */}
                  <div className="bg-neutral-50 p-3 rounded-lg font-medium text-sm">
                    Dosage
                  </div>
                  {selectedProducts.map(product => (
                    <div key={`${product.id}-dosage`} className="p-3 rounded-lg text-sm border text-center">
                      {product.dosage}
                    </div>
                  ))}
                  
                  {/* In Stock */}
                  <div className="bg-neutral-50 p-3 rounded-lg font-medium text-sm">
                    Availability
                  </div>
                  {selectedProducts.map(product => (
                    <div 
                      key={`${product.id}-stock`} 
                      className={`p-3 rounded-lg text-sm border text-center ${
                        product.inStock ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </div>
                  ))}
                  
                  {/* Child Safe */}
                  <div className="bg-neutral-50 p-3 rounded-lg font-medium text-sm">
                    Child Safe
                  </div>
                  {selectedProducts.map(product => (
                    <div key={`${product.id}-childsafe`} className="p-3 rounded-lg text-sm border flex justify-center">
                      {product.features.childSafe ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  ))}
                  
                  {/* Sugar Free */}
                  <div className="bg-neutral-50 p-3 rounded-lg font-medium text-sm">
                    Sugar Free
                  </div>
                  {selectedProducts.map(product => (
                    <div key={`${product.id}-sugarfree`} className="p-3 rounded-lg text-sm border flex justify-center">
                      {product.features.sugarFree ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  ))}
                  
                  {/* Vegan */}
                  <div className="bg-neutral-50 p-3 rounded-lg font-medium text-sm">
                    Vegan
                  </div>
                  {selectedProducts.map(product => (
                    <div key={`${product.id}-vegan`} className="p-3 rounded-lg text-sm border flex justify-center">
                      {product.features.vegan ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  ))}
                  
                  {/* Effective For */}
                  <div className="bg-neutral-50 p-3 rounded-lg font-medium text-sm">
                    Effective For
                  </div>
                  {selectedProducts.map(product => (
                    <div key={`${product.id}-effective`} className="p-3 rounded-lg text-sm border text-center">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {product.effectiveFor.map(condition => (
                          <Badge key={condition} variant="outline" className="bg-blue-50 text-xs">
                            {condition}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {isMobile && (
                <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
                  <div className="bg-gradient-to-l from-white to-transparent w-16 h-full"></div>
                </div>
              )}
            </div>
            
            <div className="mt-4 text-xs text-neutral-500 text-center">
              <p>Scroll horizontally to see all comparison details</p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductComparison;
