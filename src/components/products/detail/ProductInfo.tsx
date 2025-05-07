
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock, MinusCircle, PlusCircle, ShoppingCart, Shield, Star, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import AddToCartButton from "@/components/products/AddToCartButton";

interface ProductInfoProps {
  name: string;
  category: string;
  price: number;
  description: string;
  inStock: boolean;
  deliveryInfo: string;
  usageInstructions: string;
  uses: string[];
  sideEffects: string[];
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  isInCart?: boolean;
  onAddToCart?: () => void;
  productId: string | number;
  imageUrl: string;
}

export function ProductInfo({
  name,
  category,
  price,
  description,
  inStock,
  deliveryInfo,
  usageInstructions,
  uses,
  sideEffects,
  quantity,
  onQuantityChange,
  isInCart,
  onAddToCart,
  productId,
  imageUrl,
}: ProductInfoProps) {
  const { t } = useLanguage();
  const [isFavorite, setIsFavorite] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md border border-neutral-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mb-6 space-y-4">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <motion.div variants={itemVariants}>
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">{category}</Badge>
          </motion.div>
          <motion.div variants={itemVariants}>
            {inStock ? (
              <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                <Check className="h-3 w-3 mr-1" />
                {t("inStock")}
              </Badge>
            ) : (
              <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">
                <AlertCircle className="h-3 w-3 mr-1" />
                {t("outOfStock")}
              </Badge>
            )}
          </motion.div>
        </div>

        <motion.h1 
          className="text-3xl font-bold mb-2 text-neutral-800 relative"
          variants={itemVariants}
        >
          {name}
          <span className="absolute -top-2 -right-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Best Seller</span>
        </motion.h1>
        
        <motion.div className="flex items-center gap-2 mb-3" variants={itemVariants}>
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => (
              <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm text-neutral-500">4.8 (120 {t("reviews")})</span>
        </motion.div>
        
        <motion.p 
          className="text-2xl font-bold mb-4 text-primary bg-clip-text"
          variants={itemVariants}
        >
          ₹{price.toFixed(2)}
          <span className="text-sm text-neutral-500 line-through ml-2">₹{(price * 1.2).toFixed(2)}</span>
          <span className="text-sm text-green-600 ml-2">20% OFF</span>
        </motion.p>

        <motion.p 
          className="text-neutral-700 mb-6 leading-relaxed text-sm md:text-base"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center gap-3 mb-6"
          variants={itemVariants}
        >
          <div className="flex items-center border rounded-md border-neutral-200 bg-white shadow-sm">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="text-neutral-500 hover:text-neutral-700"
            >
              <MinusCircle className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onQuantityChange(quantity + 1)}
              className="text-neutral-500 hover:text-neutral-700"
            >
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1">
            <AddToCartButton 
              productId={productId}
              name={name}
              price={price}
              imageUrl={imageUrl}
              category={category}
              quantity={quantity}
            />
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className={`h-12 w-12 rounded-full border-neutral-200 ${isFavorite ? 'text-red-500 border-red-200' : 'text-neutral-400'}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500' : ''}`} />
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          variants={itemVariants}
        >
          <Alert className="bg-blue-50 border border-blue-200 text-blue-800">
            <Clock className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-800 font-medium">{t("fastDelivery")}</AlertTitle>
            <AlertDescription className="text-blue-700">
              {deliveryInfo}
            </AlertDescription>
          </Alert>
          
          <Alert className="bg-green-50 border border-green-200 text-green-800">
            <Shield className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800 font-medium">{t("genuine")}</AlertTitle>
            <AlertDescription className="text-green-700">
              {t("genuineDescription")}
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Tabs defaultValue="uses" className="border rounded-xl border-neutral-200 overflow-hidden shadow-sm">
          <TabsList className="w-full bg-neutral-50 p-0 border-b border-neutral-200">
            <TabsTrigger value="uses" className="flex-1 py-3 data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none border-r border-neutral-200">
              {t("uses")}
            </TabsTrigger>
            <TabsTrigger value="dosage" className="flex-1 py-3 data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none border-r border-neutral-200">
              {t("dosage")}
            </TabsTrigger>
            <TabsTrigger value="side-effects" className="flex-1 py-3 data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none">
              {t("sideEffects")}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="uses" className="p-4 bg-white m-0">
            <ul className="space-y-3">
              {uses.map((use, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{use}</span>
                </motion.li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="dosage" className="p-4 bg-white m-0 text-neutral-700 leading-relaxed">
            <p>{usageInstructions}</p>
          </TabsContent>
          
          <TabsContent value="side-effects" className="p-4 bg-white m-0">
            <ul className="space-y-3">
              {sideEffects.map((effect, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{effect}</span>
                </motion.li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}
