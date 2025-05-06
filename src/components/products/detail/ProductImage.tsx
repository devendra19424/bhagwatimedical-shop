
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface ProductImageProps {
  imageUrl: string;
  name: string;
}

export function ProductImage({ imageUrl, name }: ProductImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  
  return (
    <Card className="bg-white rounded-lg overflow-hidden border-neutral-200 shadow-sm">
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
      </div>
    </Card>
  );
}
