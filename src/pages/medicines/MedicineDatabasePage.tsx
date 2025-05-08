
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import MedicineDetailView from "@/components/medicines/MedicineDetailView";

// Sample medicine database
const medicines = [
  {
    id: "1",
    name_en: "Aspirin",
    name_hi: "एस्पिरिन",
    category_en: "Pain Reliever",
    category_hi: "दर्द निवारक",
    manufacturer: "Bayer",
    description_en: "Aspirin is used to treat pain, reduce fever, and reduce inflammation.",
    description_hi: "एस्पिरिन का उपयोग दर्द का इलाज करने, बुखार कम करने और सूजन कम करने के लिए किया जाता है।",
    activeIngredients_en: "Acetylsalicylic acid",
    activeIngredients_hi: "एसिटाइलसैलिसिलिक एसिड",
    dosage_en: "Adults: 325-650 mg every 4-6 hours as needed, not exceeding 4000 mg per day.",
    dosage_hi: "वयस्क: आवश्यकतानुसार हर 4-6 घंटे में 325-650 मिलीग्राम, प्रति दिन 4000 मिलीग्राम से अधिक नहीं।",
    sideEffects_en: "Stomach upset, heartburn, nausea, vomiting, stomach bleeding.",
    sideEffects_hi: "पेट में गड़बड़ी, सीने में जलन, मतली, उल्टी, पेट में रक्तस्राव।",
    warnings_en: "Not recommended for children under 18 years with viral infections due to risk of Reye's syndrome. Consult doctor if pregnant, breastfeeding, or have ulcers.",
    warnings_hi: "रेये सिंड्रोम के जोखिम के कारण वायरल संक्रमण वाले 18 वर्ष से कम उम्र के बच्चों के लिए अनुशंसित नहीं है। यदि गर्भवती हैं, स्तनपान करा रही हैं, या अल्सर है तो डॉक्टर से परामर्श करें।",
    interactions_en: "May interact with blood thinners, other NSAIDs, certain antidepressants, and some diabetes medications.",
    interactions_hi: "रक्त पतला करने वाली दवाओं, अन्य NSAIDs, कुछ एंटीडिप्रेसेंट और कुछ मधुमेह दवाओं के साथ परस्पर क्रिया कर सकता है।",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500",
    inStock: true,
    price: 149,
    strength: "500 mg"
  },
  {
    id: "2",
    name_en: "Metformin",
    name_hi: "मेटफॉर्मिन",
    category_en: "Diabetes Medication",
    category_hi: "मधुमेह दवा",
    manufacturer: "Sun Pharma",
    description_en: "Metformin is used to treat type 2 diabetes by helping to control blood sugar levels.",
    description_hi: "मेटफॉर्मिन का उपयोग रक्त शर्करा के स्तर को नियंत्रित करने में मदद करके टाइप 2 मधुमेह के इलाज के लिए किया जाता है।",
    activeIngredients_en: "Metformin hydrochloride",
    activeIngredients_hi: "मेटफॉर्मिन हाइड्रोक्लोराइड",
    dosage_en: "Initial: 500 mg twice daily with meals. Maximum: 2550 mg per day, divided into three doses.",
    dosage_hi: "प्रारंभिक: भोजन के साथ दिन में दो बार 500 मिलीग्राम। अधिकतम: प्रति दिन 2550 मिलीग्राम, तीन खुराकों में विभाजित।",
    sideEffects_en: "Nausea, vomiting, stomach upset, diarrhea, weakness, metallic taste in mouth.",
    sideEffects_hi: "मतली, उल्टी, पेट में गड़बड़ी, दस्त, कमजोरी, मुंह में धातु का स्वाद।",
    warnings_en: "Not for use in patients with kidney disease or heart failure. Alcohol may increase risk of lactic acidosis.",
    warnings_hi: "किडनी की बीमारी या हृदय विफलता वाले रोगियों के लिए उपयोग नहीं। अल्कोहल लैक्टिक एसिडोसिस के जोखिम को बढ़ा सकता है।",
    interactions_en: "May interact with certain heart medications, diuretics, steroids, and other diabetes medications.",
    interactions_hi: "कुछ हृदय दवाओं, मूत्रवर्धक, स्टेरॉइड और अन्य मधुमेह दवाओं के साथ परस्पर क्रिया कर सकता है।",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=500",
    inStock: true,
    price: 235,
    strength: "500 mg"
  },
  {
    id: "3",
    name_en: "Atorvastatin",
    name_hi: "अटोरवास्टैटिन",
    category_en: "Cholesterol Medication",
    category_hi: "कोलेस्ट्रॉल दवा",
    manufacturer: "Cipla",
    description_en: "Atorvastatin is used to lower cholesterol and reduce the risk of heart disease.",
    description_hi: "अटोरवास्टैटिन का उपयोग कोलेस्ट्रॉल को कम करने और हृदय रोग के जोखिम को कम करने के लिए किया जाता है।",
    activeIngredients_en: "Atorvastatin calcium",
    activeIngredients_hi: "अटोरवास्टैटिन कैल्शियम",
    dosage_en: "Initial: 10-20 mg once daily. Maintenance: 10-80 mg once daily based on response.",
    dosage_hi: "प्रारंभिक: दिन में एक बार 10-20 मिलीग्राम। रखरखाव: प्रतिक्रिया के आधार पर दिन में एक बार 10-80 मिलीग्राम।",
    sideEffects_en: "Muscle pain, joint pain, digestive issues, mild memory problems, liver enzyme elevation.",
    sideEffects_hi: "मांसपेशियों में दर्द, जोड़ों का दर्द, पाचन संबंधी समस्याएं, हल्की स्मृति समस्याएं, यकृत एंजाइम का बढ़ना।",
    warnings_en: "Avoid if pregnant or breastfeeding. Monitor liver function. May increase blood sugar levels slightly.",
    warnings_hi: "गर्भावस्था या स्तनपान के दौरान उपयोग से बचें। यकृत के कार्य की निगरानी करें। रक्त शर्करा के स्तर को थोड़ा बढ़ा सकता है।",
    interactions_en: "May interact with certain antibiotics, antifungals, HIV medications, and grapefruit juice.",
    interactions_hi: "कुछ एंटीबायोटिक्स, एंटीफंगल, एचआईवी दवाओं और अंगूर के रस के साथ परस्पर क्रिया कर सकता है।",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=500",
    inStock: true,
    price: 320,
    strength: "20 mg"
  },
  {
    id: "4",
    name_en: "Cetirizine",
    name_hi: "सेटिरिज़िन",
    category_en: "Antihistamine",
    category_hi: "एंटीहिस्टामाइन",
    manufacturer: "Dr. Reddy's",
    description_en: "Cetirizine is used to relieve allergy symptoms such as sneezing, itching, and runny nose.",
    description_hi: "सेटिरिज़िन का उपयोग छींक, खुजली और बहती नाक जैसे एलर्जी के लक्षणों से राहत देने के लिए किया जाता है।",
    activeIngredients_en: "Cetirizine hydrochloride",
    activeIngredients_hi: "सेटिरिज़िन हाइड्रोक्लोराइड",
    dosage_en: "Adults and children over 6 years: 5-10 mg once daily. Children 2-5 years: 2.5 mg once daily.",
    dosage_hi: "वयस्क और 6 वर्ष से अधिक उम्र के बच्चे: दिन में एक बार 5-10 मिलीग्राम। 2-5 वर्ष के बच्चे: दिन में एक बार 2.5 मिलीग्राम।",
    sideEffects_en: "Drowsiness, dry mouth, headache, fatigue.",
    sideEffects_hi: "उनींदापन, मुंह सूखना, सिरदर्द, थकान।",
    warnings_en: "Use caution when driving or operating machinery. Alcohol may increase drowsiness.",
    warnings_hi: "वाहन चलाते समय या मशीनरी संचालित करते समय सावधानी बरतें। अल्कोहल उनींदापन को बढ़ा सकता है।",
    interactions_en: "Minimal interactions with other medications, but may enhance effects of CNS depressants.",
    interactions_hi: "अन्य दवाओं के साथ न्यूनतम परस्पर क्रिया, लेकिन CNS डिप्रेसेंट के प्रभावों को बढ़ा सकता है।",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951aa3304?auto=format&fit=crop&w=500",
    inStock: true,
    price: 85,
    strength: "10 mg"
  },
  {
    id: "5",
    name_en: "Omeprazole",
    name_hi: "ओमेप्राज़ोल",
    category_en: "Antacid",
    category_hi: "एंटासिड",
    manufacturer: "Abbott",
    description_en: "Omeprazole reduces stomach acid production and is used to treat acid reflux and ulcers.",
    description_hi: "ओमेप्राज़ोल पेट के एसिड उत्पादन को कम करता है और एसिड रिफ्लक्स और अल्सर के इलाज के लिए उपयोग किया जाता है।",
    activeIngredients_en: "Omeprazole",
    activeIngredients_hi: "ओमेप्राज़ोल",
    dosage_en: "Adults: 20-40 mg once daily for 4-8 weeks depending on condition.",
    dosage_hi: "वयस्क: स्थिति के आधार पर 4-8 सप्ताह के लिए दिन में एक बार 20-40 मिलीग्राम।",
    sideEffects_en: "Headache, nausea, diarrhea, stomach pain, vitamin B12 deficiency with long-term use.",
    sideEffects_hi: "सिरदर्द, मतली, दस्त, पेट दर्द, लंबे समय तक उपयोग के साथ विटामिन B12 की कमी।",
    warnings_en: "Long-term use may increase risk of bone fractures and certain infections. Not for immediate relief of heartburn.",
    warnings_hi: "लंबे समय तक उपयोग से हड्डियों के फ्रैक्चर और कुछ संक्रमणों का जोखिम बढ़ सकता है। सीने की जलन से तत्काल राहत के लिए नहीं।",
    interactions_en: "May interact with clopidogrel, St. John's Wort, HIV medications, and certain antifungals.",
    interactions_hi: "क्लोपिडोग्रेल, सेंट जॉन्स वॉर्ट, एचआईवी दवाओं और कुछ एंटीफंगल के साथ परस्पर क्रिया कर सकता है।",
    imageUrl: "https://images.unsplash.com/photo-1626716493137-b67de7142a93?auto=format&fit=crop&w=500",
    inStock: true,
    price: 180,
    strength: "20 mg"
  }
];

const MedicineDatabasePage = () => {
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMedicine, setSelectedMedicine] = useState<any>(null);
  
  // Get unique categories from medicines
  const categories = ["all", ...new Set(medicines.map(med => med[`category_${lang}`]))];
  
  // Filter medicines based on search query and active category
  const filteredMedicines = medicines.filter(med => {
    const matchesSearch = med[`name_${lang}`].toLowerCase().includes(searchQuery.toLowerCase()) || 
                         med[`description_${lang}`].toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || med[`category_${lang}`] === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleMedicineSelect = (medicine: any) => {
    setSelectedMedicine(medicine);
  };

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">{t("medicineDatabase")}</h1>
        
        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="search"
            placeholder={lang === "en" ? "Search medications..." : "दवाओं की खोज करें..."}
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Categories tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-4 flex flex-wrap">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setActiveCategory(category)}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Medicines list */}
          <div className={`col-span-1 ${selectedMedicine ? "hidden lg:block" : ""}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {filteredMedicines.length > 0 ? (
                filteredMedicines.map(medicine => (
                  <Card 
                    key={medicine.id} 
                    className={`hover:shadow-md transition-shadow cursor-pointer ${selectedMedicine?.id === medicine.id ? "ring-2 ring-primary" : ""}`}
                    onClick={() => handleMedicineSelect(medicine)}
                  >
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="outline" className="capitalize">
                          {medicine[`category_${lang}`]}
                        </Badge>
                        <span className="text-sm font-medium">{medicine.strength}</span>
                      </div>
                      <CardTitle className="text-xl">{medicine[`name_${lang}`]}</CardTitle>
                      <CardDescription className="text-sm">{medicine.manufacturer}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {medicine[`description_${lang}`]}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 border-t flex justify-between">
                      <span className="font-medium">₹{medicine.price}</span>
                      <span className={`text-sm ${medicine.inStock ? "text-green-600" : "text-red-600"}`}>
                        {medicine.inStock ? t("inStock") : t("outOfStock")}
                      </span>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg font-medium">
                    {lang === "en" ? "No medicines found" : "कोई दवा नहीं मिली"}
                  </p>
                  <p className="text-muted-foreground">
                    {lang === "en" ? "Try adjusting your search query or category filter" : "अपनी खोज क्वेरी या श्रेणी फिल्टर को समायोजित करने का प्रयास करें"}
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Medicine details */}
          {selectedMedicine ? (
            <div className="col-span-1 lg:col-span-2">
              <div className="lg:hidden mb-4">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedMedicine(null)}
                >
                  &larr; {lang === "en" ? "Back to list" : "सूची पर वापस जाएं"}
                </Button>
              </div>
              <MedicineDetailView medicine={selectedMedicine} />
            </div>
          ) : (
            <div className="hidden lg:block lg:col-span-2">
              <div className="h-full flex items-center justify-center border rounded-lg bg-muted/50">
                <div className="text-center p-8">
                  <h3 className="text-xl font-medium mb-2">
                    {lang === "en" ? "Select a medicine to view details" : "विवरण देखने के लिए एक दवा चुनें"}
                  </h3>
                  <p className="text-muted-foreground">
                    {lang === "en" ? "Click on any medicine from the list on the left to view its detailed information" : "बाईं ओर की सूची से किसी भी दवा पर क्लिक करके उसकी विस्तृत जानकारी देखें"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MedicineDatabasePage;
