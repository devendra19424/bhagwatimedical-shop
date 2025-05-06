
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock, MinusCircle, PlusCircle, ShoppingCart, Shield, Star } from "lucide-react";
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
    <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">{category}</Badge>
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
        </div>

        <h1 className="text-3xl font-bold mb-2 text-neutral-800">{name}</h1>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => (
              <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm text-neutral-500">4.8 (120 {t("reviews")})</span>
        </div>
        
        <p className="text-2xl font-bold mb-4 text-primary">₹{price.toFixed(2)}</p>
        <p className="text-neutral-700 mb-6 leading-relaxed">{description}</p>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center border rounded-md border-neutral-200">
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
          <Button className="flex-1 gap-2 py-6 bg-primary hover:bg-primary/90 text-white">
            <ShoppingCart className="h-4 w-4" />
            {t("addToCart")}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
        </div>
      </div>

      <Tabs defaultValue="uses" className="border rounded-lg border-neutral-200 overflow-hidden">
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
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-neutral-700">{use}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="dosage" className="p-4 bg-white m-0 text-neutral-700 leading-relaxed">
          <p>{usageInstructions}</p>
        </TabsContent>
        <TabsContent value="side-effects" className="p-4 bg-white m-0">
          <ul className="space-y-3">
            {sideEffects.map((effect, index) => (
              <li key={index} className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-neutral-700">{effect}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
