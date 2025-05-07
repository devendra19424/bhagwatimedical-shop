
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

interface AddToCartButtonProps {
  productId: string | number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  quantity?: number;
}

const AddToCartButton = ({ productId, name, price, imageUrl, category, quantity = 1 }: AddToCartButtonProps) => {
  const { addToCart, cartItems } = useCart();
  const { lang } = useLanguage();
  const isInCart = cartItems.some(item => item.id === productId);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (isInCart) return;
    
    setIsAdding(true);
    
    setTimeout(() => {
      addToCart({
        id: productId,
        name,
        price,
        imageUrl,
        quantity: quantity,
        category
      });
      
      toast({
        title: lang === "en" ? "Product added to cart!" : "उत्पाद कार्ट में जोड़ा गया!",
        description: lang === "en" 
          ? `${quantity > 1 ? `${quantity} x ` : ''}${name} added to your cart.` 
          : `${quantity > 1 ? `${quantity} x ` : ''}${name} आपके कार्ट में जोड़ा गया।`,
        variant: "default",
      });
      
      setIsAdding(false);
    }, 500);
  };

  return (
    <Button
      variant={isInCart ? "outline" : "default"}
      size="sm"
      className={`w-full ${isInCart ? 'text-green-600 border-green-600' : ''}`}
      onClick={handleAddToCart}
      disabled={isInCart || isAdding}
    >
      {isAdding ? (
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="flex items-center"
        >
          <span className="mr-2">Adding...</span>
          <ShoppingCart className="h-4 w-4" />
        </motion.div>
      ) : isInCart ? (
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="flex items-center"
        >
          <span className="mr-2">Added to Cart</span>
          <Check className="h-4 w-4" />
        </motion.div>
      ) : (
        <motion.div className="flex items-center">
          <span className="mr-2">{lang === "en" ? "Add to Cart" : "कार्ट में जोड़ें"}</span>
          <ShoppingCart className="h-4 w-4" />
        </motion.div>
      )}
    </Button>
  );
};

export default AddToCartButton;
