
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Search, ZoomIn, ZoomOut } from "lucide-react";

interface ProductImageProps {
  imageUrl: string;
  name: string;
}

export function ProductImage({ imageUrl, name }: ProductImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  
  return (
    <Card className="bg-white rounded-lg overflow-hidden border-neutral-200 shadow-sm relative group">
      <div 
        className="relative aspect-square cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <img
          src={imageUrl}
          alt={name}
          className={`w-full h-full object-contain transition-all duration-300 ${
            isZoomed ? "scale-110" : "scale-100"
          }`}
        />
        
        <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {isZoomed ? (
            <ZoomOut className="h-5 w-5 text-neutral-600" />
          ) : (
            <ZoomIn className="h-5 w-5 text-neutral-600" />
          )}
        </div>
      </div>
    </Card>
  );
}
