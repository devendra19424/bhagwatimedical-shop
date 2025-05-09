
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Search, ZoomIn, ZoomOut } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProductImageProps {
  imageUrl: string;
  name: string;
}

export function ProductImage({ imageUrl, name }: ProductImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [magnifyPosition, setMagnifyPosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || isMobile) return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setMagnifyPosition({ x, y });
  };

  // Handle image error and show a placeholder if needed
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "https://placehold.co/600x400?text=No+Image";
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white rounded-xl overflow-hidden border-neutral-200 shadow-md relative group hover:shadow-xl transition-all duration-300">
        <div 
          className="relative aspect-square overflow-hidden"
          onMouseEnter={() => !isMobile && setIsZoomed(true)}
          onMouseLeave={() => !isMobile && setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          onClick={() => isMobile && setIsZoomed(!isZoomed)}
        >
          <motion.div 
            className="w-full h-full cursor-zoom-in"
            animate={{ 
              scale: isZoomed ? 1.05 : 1
            }}
            transition={{ 
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            <img
              src={imageUrl || "https://placehold.co/600x400?text=No+Image"}
              alt={name}
              className="w-full h-full object-contain p-4"
              style={isZoomed ? {
                transformOrigin: `${magnifyPosition.x}% ${magnifyPosition.y}%`
              } : undefined}
              onError={handleImageError}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm flex items-center justify-center"
          >
            {isZoomed ? (
              <ZoomOut className="h-5 w-5 text-primary" />
            ) : (
              <ZoomIn className="h-5 w-5 text-primary" />
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobile ? 0.7 : 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/5 pointer-events-none"
          >
            {isMobile && (
              <div className="bg-white/80 rounded-full p-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
            )}
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>
      </Card>
    </motion.div>
  );
}
