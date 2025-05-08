
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import DeliveryInfo from "@/components/home/DeliveryInfo";
import Testimonials from "@/components/home/Testimonials";
import MedicineReminder from "@/components/reminders/MedicineReminder";
import HealthArticles from "@/components/health/HealthArticles";
import PrescriptionUpload from "@/components/prescription/PrescriptionUpload";
import ProductComparison from "@/components/products/ProductComparison";
import LivePharmacistChat from "@/components/chat/LivePharmacistChat";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { medicineData } from "@/data/medicineData";
import { Link } from "react-router-dom";
import { MapPin, MessageSquare, Award, Star, FileText, Bell, Database, Heart } from "lucide-react";

const HomePage = () => {
  const { t, lang } = useLanguage();
  // Make the data available for components that need it
  const featuredMedicines = medicineData.slice(0, 8); // Get first 8 medicines for featured section
  
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts featuredMedicines={featuredMedicines} />
      
      {/* Featured Services Section */}
      <div className="bg-gradient-to-b from-blue-50 to-blue-50/20 py-12">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              {lang === "en" ? "Featured Services" : "विशेष सेवाएँ"}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              {lang === "en" 
                ? "Discover our range of health services designed to provide comprehensive care and convenience" 
                : "हमारी स्वास्थ्य सेवाओं की श्रृंखला का पता लगाएं जो व्यापक देखभाल और सुविधा प्रदान करने के लिए डिज़ाइन की गई है"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Medicine Database Card */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="outline" className="bg-blue-50">
                      {lang === "en" ? "Information" : "जानकारी"}
                    </Badge>
                    <CardTitle className="mt-2">{t("medicineDatabase")}</CardTitle>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardDescription>
                  {lang === "en" 
                    ? "Access detailed information about medications, including uses, dosage, and side effects" 
                    : "उपयोग, खुराक और दुष्प्रभावों सहित दवाओं के बारे में विस्तृत जानकारी तक पहुंचें"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Detailed medication information" : "विस्तृत दवा जानकारी"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Side effect information" : "दुष्प्रभाव जानकारी"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Dosage instructions" : "खुराक निर्देश"}
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/medicine-database">
                    {lang === "en" ? "Explore Database" : "डेटाबेस एक्सप्लोर करें"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Doctor/Pharmacy Locator Card */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="outline" className="bg-green-50">
                      {lang === "en" ? "Locate" : "लोकेट करें"}
                    </Badge>
                    <CardTitle className="mt-2">
                      {lang === "en" ? "Healthcare Locator" : "हेल्थकेयर लोकेटर"}
                    </CardTitle>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <CardDescription>
                  {lang === "en" 
                    ? "Find doctors and pharmacies near you based on your location and specific needs" 
                    : "अपने स्थान और विशिष्ट आवश्यकताओं के आधार पर अपने पास के डॉक्टर और फार्मेसी खोजें"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Find nearby doctors" : "आसपास के डॉक्टर खोजें"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Locate pharmacies" : "फार्मेसी का पता लगाएं"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Get directions" : "दिशाएँ प्राप्त करें"}
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/locate">
                    {lang === "en" ? "Find Healthcare" : "हेल्थकेयर खोजें"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Live Chat with Pharmacist Card */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="outline" className="bg-purple-50">
                      {lang === "en" ? "Connect" : "कनेक्ट करें"}
                    </Badge>
                    <CardTitle className="mt-2">{t("liveChat")}</CardTitle>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <CardDescription>
                  {lang === "en" 
                    ? "Chat with our licensed pharmacists to get expert advice on medications and health concerns" 
                    : "दवाओं और स्वास्थ्य संबंधी चिंताओं पर विशेषज्ञ सलाह प्राप्त करने के लिए हमारे लाइसेंस प्राप्त फार्मासिस्टों से चैट करें"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Professional medication advice" : "पेशेवर दवा सलाह"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Instant responses" : "तत्काल प्रतिक्रियाएँ"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Privacy guaranteed" : "गोपनीयता की गारंटी"}
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/chat">
                    {lang === "en" ? "Start Chat" : "चैट शुरू करें"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Loyalty Program Card */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="outline" className="bg-yellow-50">
                      {lang === "en" ? "Rewards" : "रिवॉर्ड्स"}
                    </Badge>
                    <CardTitle className="mt-2">{t("loyaltyProgram")}</CardTitle>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Award className="h-5 w-5 text-yellow-600" />
                  </div>
                </div>
                <CardDescription>
                  {lang === "en" 
                    ? "Earn points with every purchase and redeem them for exclusive discounts and benefits" 
                    : "हर खरीदारी पर पॉइंट्स कमाएं और उन्हें विशेष छूट और लाभों के लिए रिडीम करें"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Points on every purchase" : "हर खरीद पर पॉइंट्स"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Exclusive member benefits" : "विशिष्ट सदस्य लाभ"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Special member-only offers" : "विशेष सदस्य-केवल ऑफर"}
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/loyalty">
                    {lang === "en" ? "Join Program" : "प्रोग्राम ज्वाइन करें"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Health Articles Card */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="outline" className="bg-red-50">
                      {lang === "en" ? "Education" : "शिक्षा"}
                    </Badge>
                    <CardTitle className="mt-2">{t("healthArticles")}</CardTitle>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <CardDescription>
                  {lang === "en" 
                    ? "Read informative articles about health topics, wellness tips, and medical news" 
                    : "स्वास्थ्य विषयों, स्वास्थ्य सुझावों और चिकित्सा समाचारों के बारे में जानकारीपूर्ण लेख पढ़ें"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Expert-authored content" : "विशेषज्ञ-लिखित सामग्री"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Health tips and advice" : "स्वास्थ्य सुझाव और सलाह"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Latest medical research" : "नवीनतम चिकित्सा अनुसंधान"}
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/health-articles">
                    {lang === "en" ? "Read Articles" : "लेख पढ़ें"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Product Reviews Card */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="outline" className="bg-orange-50">
                      {lang === "en" ? "Reviews" : "समीक्षाएँ"}
                    </Badge>
                    <CardTitle className="mt-2">{t("reviews")}</CardTitle>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Star className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
                <CardDescription>
                  {lang === "en" 
                    ? "Read and contribute product reviews to help others make informed decisions" 
                    : "उत्पाद समीक्षाएँ पढ़ें और योगदान दें ताकि दूसरों को सूचित निर्णय लेने में मदद मिल सके"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Verified customer reviews" : "सत्यापित ग्राहक समीक्षाएँ"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Share your experience" : "अपना अनुभव साझा करें"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>
                      {lang === "en" ? "Earn points with reviews" : "समीक्षाओं के साथ अंक अर्जित करें"}
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/products">
                    {lang === "en" ? "View Products" : "उत्पाद देखें"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2">
            <PrescriptionUpload />
          </div>
          <div className="col-span-1">
            <MedicineReminder />
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-b from-blue-50 to-blue-50/20 py-12">
        <div className="container px-4">
          <HealthArticles />
        </div>
      </div>
      
      <div className="container px-4 py-12">
        <ProductComparison />
      </div>
      
      <DeliveryInfo />
      <Testimonials />
      
      {/* Add LivePharmacistChat as a widget */}
      <LivePharmacistChat mode="widget" />
    </Layout>
  );
};

export default HomePage;
