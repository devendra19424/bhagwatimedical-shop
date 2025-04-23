
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock, MinusCircle, PlusCircle, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, AlertCircle } from "lucide-react";

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
}: ProductInfoProps) {
  const { t } = useLanguage();

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge>{category}</Badge>
          {inStock ? (
            <Badge variant="outline" className="text-green-600 border-green-600">
              {t("inStock")}
            </Badge>
          ) : (
            <Badge variant="outline" className="text-red-600 border-red-600">
              {t("outOfStock")}
            </Badge>
          )}
        </div>

        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-2xl font-bold mb-4">₹{price.toFixed(2)}</p>
        <p className="text-gray-700 mb-6">{description}</p>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <MinusCircle className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onQuantityChange(quantity + 1)}
            >
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
          <Button className="flex-1 gap-2">
            <ShoppingCart className="h-4 w-4" />
            {t("addToCart")}
          </Button>
        </div>

        <Alert className="bg-blue-50 border border-blue-200 mb-4">
          <Clock className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-800">{t("fastDelivery")}</AlertTitle>
          <AlertDescription className="text-blue-700">
            {deliveryInfo}
          </AlertDescription>
        </Alert>
      </div>

      <Tabs defaultValue="uses">
        <TabsList className="w-full">
          <TabsTrigger value="uses" className="flex-1">{t("uses")}</TabsTrigger>
          <TabsTrigger value="dosage" className="flex-1">{t("dosage")}</TabsTrigger>
          <TabsTrigger value="side-effects" className="flex-1">{t("sideEffects")}</TabsTrigger>
        </TabsList>
        <TabsContent value="uses" className="pt-4">
          <ul className="space-y-2">
            {uses.map((use, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="dosage" className="pt-4">
          <p>{usageInstructions}</p>
        </TabsContent>
        <TabsContent value="side-effects" className="pt-4">
          <ul className="space-y-2">
            {sideEffects.map((effect, index) => (
              <li key={index} className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <span>{effect}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
