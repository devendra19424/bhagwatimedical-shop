
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/translations";

interface ProductCategoryCardProps {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  imageUrl: string;
}

const ProductCategoryCard = ({ id, name, imageUrl }: ProductCategoryCardProps) => {
  const { lang } = useLanguage();

  return (
    <Link to={`/products?category=${id}`}>
      <Card className="overflow-hidden transition-transform hover:scale-105">
        <div className="aspect-square overflow-hidden">
          <img
            src={imageUrl}
            alt={name[lang as Language]}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="font-semibold">{name[lang as Language]}</h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCategoryCard;
