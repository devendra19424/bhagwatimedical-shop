
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { MapPin, Navigation, Phone, Clock, Star } from "lucide-react";

// Sample data for doctors and pharmacies
const doctors = [
  {
    id: "d1",
    name: "Dr. Rahul Sharma",
    specialty: "General Physician",
    specialty_hi: "सामान्य चिकित्सक",
    address: "123 Medical Center, Main Road, Itarsi",
    address_hi: "123 मेडिकल सेंटर, मेन रोड, इटारसी",
    distance: 1.2,
    phone: "9876543210",
    rating: 4.7,
    availableToday: true,
    openHours: "9:00 AM - 6:00 PM",
    experience: "15 years",
    experience_hi: "15 वर्ष",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500"
  },
  {
    id: "d2",
    name: "Dr. Priya Patel",
    specialty: "Cardiologist",
    specialty_hi: "हृदय रोग विशेषज्ञ",
    address: "456 Heart Care Hospital, Station Road, Itarsi",
    address_hi: "456 हार्ट केयर हॉस्पिटल, स्टेशन रोड, इटारसी",
    distance: 2.5,
    phone: "9876543211",
    rating: 4.9,
    availableToday: false,
    openHours: "10:00 AM - 5:00 PM",
    experience: "20 years",
    experience_hi: "20 वर्ष",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500"
  },
  {
    id: "d3",
    name: "Dr. Amit Singh",
    specialty: "Pediatrician",
    specialty_hi: "बाल रोग विशेषज्ञ",
    address: "789 Child Care Center, Old Itarsi",
    address_hi: "789 चाइल्ड केयर सेंटर, पुराना इटारसी",
    distance: 0.8,
    phone: "9876543212",
    rating: 4.8,
    availableToday: true,
    openHours: "9:00 AM - 7:00 PM",
    experience: "12 years",
    experience_hi: "12 वर्ष",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500"
  },
  {
    id: "d4",
    name: "Dr. Sunita Verma",
    specialty: "Dermatologist",
    specialty_hi: "त्वचा रोग विशेषज्ञ",
    address: "234 Skin Care Clinic, New Market, Itarsi",
    address_hi: "234 स्किन केयर क्लिनिक, न्यू मार्केट, इटारसी",
    distance: 3.1,
    phone: "9876543213",
    rating: 4.6,
    availableToday: true,
    openHours: "11:00 AM - 6:00 PM",
    experience: "10 years",
    experience_hi: "10 वर्ष",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500"
  }
];

const pharmacies = [
  {
    id: "p1",
    name: "City Pharmacy",
    name_hi: "सिटी फार्मेसी",
    address: "100 Main Road, Itarsi",
    address_hi: "100 मेन रोड, इटारसी",
    distance: 0.5,
    phone: "9876543220",
    rating: 4.5,
    openHours: "8:00 AM - 10:00 PM",
    open24Hours: false,
    homeDelivery: true,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=500"
  },
  {
    id: "p2",
    name: "HealthFirst Medical Store",
    name_hi: "हेल्थफर्स्ट मेडिकल स्टोर",
    address: "200 Station Road, Itarsi",
    address_hi: "200 स्टेशन रोड, इटारसी",
    distance: 1.8,
    phone: "9876543221",
    rating: 4.7,
    openHours: "24 Hours",
    open24Hours: true,
    homeDelivery: true,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=500"
  },
  {
    id: "p3",
    name: "MedPlus Pharmacy",
    name_hi: "मेडप्लस फार्मेसी",
    address: "300 Hospital Road, Itarsi",
    address_hi: "300 हॉस्पिटल रोड, इटारसी",
    distance: 2.1,
    phone: "9876543222",
    rating: 4.6,
    openHours: "8:00 AM - 11:00 PM",
    open24Hours: false,
    homeDelivery: true,
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=500"
  },
  {
    id: "p4",
    name: "Medicare Pharmacy",
    name_hi: "मेडिकेयर फार्मेसी",
    address: "400 College Road, Itarsi",
    address_hi: "400 कॉलेज रोड, इटारसी",
    distance: 3.5,
    phone: "9876543223",
    rating: 4.3,
    openHours: "9:00 AM - 9:00 PM",
    open24Hours: false,
    homeDelivery: false,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=500"
  }
];

const LocatorPage = () => {
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [maxDistance, setMaxDistance] = useState([5]); // in kilometers
  const [activeTab, setActiveTab] = useState("doctors");
  
  // Filter doctors/pharmacies based on search and distance
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDistance = doctor.distance <= maxDistance[0];
    return matchesSearch && matchesDistance;
  });
  
  const filteredPharmacies = pharmacies.filter(pharmacy => {
    const matchesSearch = pharmacy.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDistance = pharmacy.distance <= maxDistance[0];
    return matchesSearch && matchesDistance;
  });

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">
          {activeTab === "doctors" 
            ? (lang === "en" ? "Find Nearby Doctors" : "पास के डॉक्टर खोजें") 
            : (lang === "en" ? "Find Nearby Pharmacies" : "पास की फार्मेसी खोजें")}
        </h1>
        
        {/* Tabs */}
        <Tabs
          defaultValue="doctors"
          onValueChange={setActiveTab}
          className="mb-8"
        >
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="doctors">
              {lang === "en" ? "Doctors" : "डॉक्टर"}
            </TabsTrigger>
            <TabsTrigger value="pharmacies">
              {lang === "en" ? "Pharmacies" : "फार्मेसी"}
            </TabsTrigger>
          </TabsList>
          
          {/* Search and filter controls */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <label className="text-sm font-medium mb-2 block">
                {lang === "en" ? "Search" : "खोज"}
              </label>
              <Input
                type="search"
                placeholder={
                  activeTab === "doctors"
                    ? (lang === "en" ? "Search doctors by name or specialty" : "नाम या विशेषज्ञता द्वारा डॉक्टर खोजें")
                    : (lang === "en" ? "Search pharmacies by name" : "नाम द्वारा फार्मेसी खोजें")
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="md:col-span-1">
              <label className="text-sm font-medium mb-2 block">
                {t("distance")} (km): {maxDistance}
              </label>
              <Slider
                defaultValue={[5]}
                max={10}
                step={0.5}
                onValueChange={setMaxDistance}
              />
            </div>
            <div className="md:col-span-1">
              <Button className="w-full" onClick={() => { setSearchQuery(""); setMaxDistance([5]); }}>
                {lang === "en" ? "Reset Filters" : "फिल्टर रीसेट करें"}
              </Button>
            </div>
          </div>
          
          {/* Results display */}
          <TabsContent value="doctors" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map(doctor => (
                  <Card key={doctor.id} className="overflow-hidden">
                    <div className="aspect-[3/1] w-full overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{doctor.name}</CardTitle>
                          <p className="text-muted-foreground">
                            {lang === "en" ? doctor.specialty : doctor.specialty_hi}
                          </p>
                        </div>
                        <Badge variant={doctor.availableToday ? "default" : "outline"}>
                          {doctor.availableToday 
                            ? (lang === "en" ? "Available Today" : "आज उपलब्ध") 
                            : (lang === "en" ? "Not Available" : "उपलब्ध नहीं")}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 pb-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                        <span className="text-sm">{lang === "en" ? doctor.address : doctor.address_hi}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{doctor.openHours}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium">{doctor.rating}/5</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span className="text-sm">
                          {lang === "en" ? "Experience: " : "अनुभव: "}
                          {lang === "en" ? doctor.experience : doctor.experience_hi}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 border-t">
                      <div className="grid grid-cols-2 w-full gap-2">
                        <Button variant="outline" className="text-xs" size="sm" asChild>
                          <a href={`tel:${doctor.phone}`}>
                            <Phone className="h-3 w-3 mr-1" />
                            {doctor.phone}
                          </a>
                        </Button>
                        <Button size="sm" className="text-xs" asChild>
                          <a href={`https://maps.google.com/?q=${doctor.address}`} target="_blank" rel="noopener noreferrer">
                            <Navigation className="h-3 w-3 mr-1" />
                            {t("directions")}
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg font-medium">
                    {lang === "en" ? "No doctors found" : "कोई डॉक्टर नहीं मिला"}
                  </p>
                  <p className="text-muted-foreground">
                    {lang === "en" ? "Try adjusting your search or distance filter" : "अपनी खोज या दूरी फिल्टर को समायोजित करने का प्रयास करें"}
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="pharmacies" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPharmacies.length > 0 ? (
                filteredPharmacies.map(pharmacy => (
                  <Card key={pharmacy.id} className="overflow-hidden">
                    <div className="aspect-[3/1] w-full overflow-hidden">
                      <img
                        src={pharmacy.image}
                        alt={pharmacy.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">
                            {lang === "en" ? pharmacy.name : pharmacy.name_hi}
                          </CardTitle>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm font-medium">{pharmacy.rating}/5</span>
                          </div>
                        </div>
                        {pharmacy.open24Hours ? (
                          <Badge variant="default">
                            {lang === "en" ? "Open 24 Hours" : "24 घंटे खुला"}
                          </Badge>
                        ) : (
                          <Badge variant="outline">
                            {pharmacy.openHours}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2 pb-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                        <span className="text-sm">{lang === "en" ? pharmacy.address : pharmacy.address_hi}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={pharmacy.homeDelivery ? "secondary" : "outline"} className="text-xs">
                          {lang === "en" ? "Home Delivery" : "होम डिलीवरी"}
                          {pharmacy.homeDelivery 
                            ? (lang === "en" ? " Available" : " उपलब्ध") 
                            : (lang === "en" ? " Not Available" : " उपलब्ध नहीं")}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {pharmacy.distance} km
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 border-t">
                      <div className="grid grid-cols-2 w-full gap-2">
                        <Button variant="outline" className="text-xs" size="sm" asChild>
                          <a href={`tel:${pharmacy.phone}`}>
                            <Phone className="h-3 w-3 mr-1" />
                            {pharmacy.phone}
                          </a>
                        </Button>
                        <Button size="sm" className="text-xs" asChild>
                          <a href={`https://maps.google.com/?q=${pharmacy.address}`} target="_blank" rel="noopener noreferrer">
                            <Navigation className="h-3 w-3 mr-1" />
                            {t("directions")}
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg font-medium">
                    {lang === "en" ? "No pharmacies found" : "कोई फार्मेसी नहीं मिली"}
                  </p>
                  <p className="text-muted-foreground">
                    {lang === "en" ? "Try adjusting your search or distance filter" : "अपनी खोज या दूरी फिल्टर को समायोजित करने का प्रयास करें"}
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default LocatorPage;
