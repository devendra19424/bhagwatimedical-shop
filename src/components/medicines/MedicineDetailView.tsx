
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import AddToCartButton from "@/components/products/AddToCartButton";

interface MedicineDetailViewProps {
  medicine: any;
}

const MedicineDetailView = ({ medicine }: MedicineDetailViewProps) => {
  const { t, lang } = useLanguage();

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b pb-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="capitalize">
                {medicine[`category_${lang}`]}
              </Badge>
              <Badge variant={medicine.inStock ? "default" : "destructive"} className="capitalize">
                {medicine.inStock ? t("inStock") : t("outOfStock")}
              </Badge>
            </div>
            <CardTitle className="text-2xl mb-1">{medicine[`name_${lang}`]}</CardTitle>
            <CardDescription>{medicine.manufacturer} | {medicine.strength}</CardDescription>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="text-2xl font-bold">₹{medicine.price}</div>
            <AddToCartButton
              productId={medicine.id}
              name={medicine[`name_${lang}`]}
              price={medicine.price}
              imageUrl={medicine.imageUrl}
              category={medicine[`category_${lang}`]}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full justify-start rounded-none border-b px-4">
            <TabsTrigger value="overview">{lang === "en" ? "Overview" : "सारांश"}</TabsTrigger>
            <TabsTrigger value="dosage">{t("dosageInfo")}</TabsTrigger>
            <TabsTrigger value="sideEffects">{t("sideEffects")}</TabsTrigger>
            <TabsTrigger value="warnings">{lang === "en" ? "Warnings" : "चेतावनियां"}</TabsTrigger>
          </TabsList>
          <div className="p-6">
            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{lang === "en" ? "Description" : "विवरण"}</h3>
                  <p className="text-muted-foreground mb-4">{medicine[`description_${lang}`]}</p>
                  
                  <h3 className="font-semibold text-lg mb-2">{t("activeIngredients")}</h3>
                  <p className="text-muted-foreground mb-4">{medicine[`activeIngredients_${lang}`]}</p>
                </div>
                <div>
                  <div className="aspect-square max-w-xs mx-auto md:max-w-full overflow-hidden rounded-lg mb-4">
                    <img 
                      src={medicine.imageUrl} 
                      alt={medicine[`name_${lang}`]} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="dosage" className="mt-0">
              <h3 className="font-semibold text-lg mb-2">{t("dosageInfo")}</h3>
              <p className="text-muted-foreground mb-6">{medicine[`dosage_${lang}`]}</p>
              
              <Alert className="bg-blue-50 border-blue-200">
                <AlertCircle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-600">
                  {lang === "en" ? "Important Note" : "महत्वपूर्ण जानकारी"}
                </AlertTitle>
                <AlertDescription className="text-blue-700">
                  {lang === "en" 
                    ? "Always consult with your doctor before starting, stopping, or changing the dosage of any medication." 
                    : "किसी भी दवा को शुरू करने, रोकने, या खुराक बदलने से पहले हमेशा अपने डॉक्टर से परामर्श करें।"}
                </AlertDescription>
              </Alert>
            </TabsContent>
            
            <TabsContent value="sideEffects" className="mt-0">
              <h3 className="font-semibold text-lg mb-2">{t("sideEffects")}</h3>
              <p className="text-muted-foreground mb-4">{medicine[`sideEffects_${lang}`]}</p>
              
              <h3 className="font-semibold text-lg mb-2">
                {lang === "en" ? "When to Contact a Doctor" : "डॉक्टर से कब संपर्क करें"}
              </h3>
              <p className="text-muted-foreground">
                {lang === "en" 
                  ? "Contact your healthcare provider immediately if you experience severe side effects or an allergic reaction." 
                  : "यदि आप गंभीर दुष्प्रभाव या एलर्जिक प्रतिक्रिया का अनुभव करते हैं तो तुरंत अपने स्वास्थ्य सेवा प्रदाता से संपर्क करें।"}
              </p>
            </TabsContent>
            
            <TabsContent value="warnings" className="mt-0">
              <h3 className="font-semibold text-lg mb-2">
                {lang === "en" ? "Warnings & Precautions" : "चेतावनियां और सावधानियां"}
              </h3>
              <p className="text-muted-foreground mb-6">{medicine[`warnings_${lang}`]}</p>
              
              <h3 className="font-semibold text-lg mb-2">
                {lang === "en" ? "Drug Interactions" : "दवा इंटरैक्शन"}
              </h3>
              <p className="text-muted-foreground">
                {medicine[`interactions_${lang}`]}
              </p>
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MedicineDetailView;
