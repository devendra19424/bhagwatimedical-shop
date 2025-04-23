
import { Card } from "@/components/ui/card";

interface ProductImageProps {
  imageUrl: string;
  name: string;
}

export function ProductImage({ imageUrl, name }: ProductImageProps) {
  return (
    <Card className="bg-white rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-auto object-cover"
      />
    </Card>
  );
}
