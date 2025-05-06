
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Search, ZoomIn, ZoomOut } from "lucide-react";

interface ProductImageProps {
  imageUrl: string;
  name: string;
}

export function ProductImage({ imageUrl, name }: ProductImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [magnifyPosition, setMagnifyPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setMagnifyPosition({ x, y });
  };
  
  return (
    <Card className="bg-white rounded-lg overflow-hidden border-neutral-200 shadow-md relative group hover:shadow-lg transition-all duration-300">
      <div 
        className="relative aspect-square overflow-hidden"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="w-full h-full cursor-zoom-in">
          <img
            src={imageUrl}
            alt={name}
            className={`w-full h-full object-contain transition-all duration-300 ${
              isZoomed ? "scale-105" : "scale-100"
            }`}
            style={isZoomed ? {
              transformOrigin: `${magnifyPosition.x}% ${magnifyPosition.y}%`
            } : undefined}
          />
        </div>
        
        <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          {isZoomed ? (
            <ZoomOut className="h-5 w-5 text-neutral-600" />
          ) : (
            <ZoomIn className="h-5 w-5 text-neutral-600" />
          )}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>
    </Card>
  );
}
