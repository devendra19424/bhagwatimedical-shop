
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Sample loyalty points data
const userPoints = {
  total: 560,
  history: [
    { id: "p1", points: 50, description: "Purchase", description_hi: "खरीदारी", date: "2023-05-12", orderId: "ORD12345" },
    { id: "p2", points: 100, description: "First order discount", description_hi: "पहले ऑर्डर पर छूट", date: "2023-05-10", orderId: "ORD12340" },
    { id: "p3", points: -20, description: "Redeemed for discount", description_hi: "छूट के लिए रिडीम किया गया", date: "2023-04-25", orderId: "ORD12335" },
    { id: "p4", points: 30, description: "Purchase", description_hi: "खरीदारी", date: "2023-04-15", orderId: "ORD12330" },
    { id: "p5", points: 400, description: "Referral bonus", description_hi: "रेफरल बोनस", date: "2023-04-01", orderId: null },
  ]
};

const rewardsList = [
  { 
    id: "r1", 
    name: "₹100 Discount Coupon", 
    name_hi: "₹100 डिस्काउंट कूपन", 
    points: 200, 
    description: "Get ₹100 off on your next purchase", 
    description_hi: "अपनी अगली खरीद पर ₹100 की छूट प्राप्त करें" 
  },
  { 
    id: "r2", 
    name: "Free Home Delivery for a Month", 
    name_hi: "एक महीने के लिए फ्री होम डिलीवरी", 
    points: 300, 
    description: "Unlimited free home delivery on all orders for a month", 
    description_hi: "एक महीने के लिए सभी ऑर्डर पर असीमित फ्री होम डिलीवरी" 
  },
  { 
    id: "r3", 
    name: "15% Discount on Vitamins", 
    name_hi: "विटामिन पर 15% छूट", 
    points: 150, 
    description: "Get 15% off on all vitamin supplements", 
    description_hi: "सभी विटामिन सप्लीमेंट्स पर 15% छूट प्राप्त करें" 
  },
  { 
    id: "r4", 
    name: "Premium Health Checkup", 
    name_hi: "प्रीमियम हेल्थ चेकअप", 
    points: 1000, 
    description: "Free comprehensive health checkup at our partner clinic", 
    description_hi: "हमारी पार्टनर क्लिनिक पर फ्री कंप्रिहेंसिव हेल्थ चेकअप" 
  },
  { 
    id: "r5", 
    name: "Digital Blood Pressure Monitor", 
    name_hi: "डिजिटल ब्लड प्रेशर मॉनिटर", 
    points: 2000, 
    description: "High-quality BP monitor delivered to your doorstep", 
    description_hi: "उच्च गुणवत्ता वाला बीपी मॉनिटर आपके घर तक पहुंचाया जाएगा" 
  },
];

// How to earn points
const earnPointsMethods = [
  { 
    id: "e1", 
    title: "Purchase Products", 
    title_hi: "उत्पाद खरीदें", 
    points: "1 point per ₹10 spent", 
    points_hi: "खर्च किए गए हर ₹10 पर 1 पॉइंट", 
    description: "Earn loyalty points on every purchase", 
    description_hi: "हर खरीद पर लॉयल्टी पॉइंट्स अर्जित करें" 
  },
  { 
    id: "e2", 
    title: "Refer Friends", 
    title_hi: "दोस्तों को रेफर करें", 
    points: "400 points per successful referral", 
    points_hi: "हर सफल रेफरल पर 400 पॉइंट्स", 
    description: "When your friend makes their first purchase", 
    description_hi: "जब आपका दोस्त अपनी पहली खरीदारी करता है" 
  },
  { 
    id: "e3", 
    title: "Write Reviews", 
    title_hi: "समीक्षाएँ लिखें", 
    points: "50 points per verified review", 
    points_hi: "हर सत्यापित समीक्षा पर 50 पॉइंट्स", 
    description: "Share your experience with products", 
    description_hi: "उत्पादों के साथ अपने अनुभव साझा करें" 
  },
  { 
    id: "e4", 
    title: "Birthday Bonus", 
    title_hi: "जन्मदिन बोनस", 
    points: "300 points on your birthday", 
    points_hi: "आपके जन्मदिन पर 300 पॉइंट्स", 
    description: "Automatic credit during your birthday month", 
    description_hi: "आपके जन्मदिन के महीने में स्वचालित क्रेडिट" 
  },
  { 
    id: "e5", 
    title: "Subscribe to Newsletter", 
    title_hi: "न्यूज़लेटर सब्सक्राइब करें", 
    points: "100 points one-time bonus", 
    points_hi: "100 पॉइंट्स एक बार का बोनस", 
    description: "Stay updated with our latest offers", 
    description_hi: "हमारे नवीनतम ऑफर्स से अपडेटेड रहें" 
  },
];

const LoyaltyProgramPage = () => {
  const { t, lang } = useLanguage();
  const [selectedReward, setSelectedReward] = useState<any>(null);
  const [redeemDialogOpen, setRedeemDialogOpen] = useState(false);
  
  // Determine user tier based on points
  const getUserTier = (points: number) => {
    if (points >= 2000) return { name: lang === "en" ? "Platinum" : "प्लैटिनम", color: "bg-purple-500" };
    if (points >= 1000) return { name: lang === "en" ? "Gold" : "गोल्ड", color: "bg-yellow-500" };
    if (points >= 500) return { name: lang === "en" ? "Silver" : "सिल्वर", color: "bg-gray-400" };
    return { name: lang === "en" ? "Bronze" : "ब्रॉन्ज़", color: "bg-amber-700" };
  };
  
  const userTier = getUserTier(userPoints.total);
  const nextTier = userPoints.total < 500 
    ? { name: lang === "en" ? "Silver" : "सिल्वर", points: 500 }
    : userPoints.total < 1000
      ? { name: lang === "en" ? "Gold" : "गोल्ड", points: 1000 }
      : userPoints.total < 2000
        ? { name: lang === "en" ? "Platinum" : "प्लैटिनम", points: 2000 }
        : null;
  
  const progress = nextTier ? ((userPoints.total / nextTier.points) * 100) : 100;

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">{t("loyaltyProgram")}</h1>
        
        {/* Points summary card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <CardTitle className="text-2xl">{t("yourPoints")}</CardTitle>
                <CardDescription>
                  {lang === "en"
                    ? "Your loyalty status and rewards"
                    : "आपकी लॉयल्टी स्थिति और रिवॉर्ड्स"}
                </CardDescription>
              </div>
              <div className="mt-4 md:mt-0">
                <Badge className={`${userTier.color} text-white px-3 py-1 text-sm`}>
                  {userTier.name} {lang === "en" ? "Member" : "सदस्य"}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold">{userPoints.total}</div>
                  <div className="text-muted-foreground">
                    {lang === "en" ? "Total Points" : "कुल पॉइंट्स"}
                  </div>
                </div>
                
                {nextTier && (
                  <div className="mt-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>
                        {userTier.name}
                      </span>
                      <span>
                        {nextTier.name} ({nextTier.points - userPoints.total} {lang === "en" ? "points to go" : "पॉइंट्स और चाहिए"})
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}
              </div>
              
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-medium mb-2">
                  {lang === "en" ? "Member Benefits" : "सदस्य लाभ"}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    {lang === "en" ? "Earn points on every purchase" : "हर खरीद पर पॉइंट्स अर्जित करें"}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    {lang === "en" ? "Exclusive discounts and offers" : "विशेष छूट और ऑफर"}
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    {lang === "en" ? "Priority customer service" : "प्राथमिकता ग्राहक सेवा"}
                  </li>
                  {userPoints.total >= 500 && (
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      {lang === "en" ? "Free delivery on all orders" : "सभी ऑर्डर पर फ्री डिलीवरी"}
                    </li>
                  )}
                  {userPoints.total >= 1000 && (
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      {lang === "en" ? "Early access to new products" : "नए उत्पादों तक जल्दी पहुंच"}
                    </li>
                  )}
                  {userPoints.total >= 2000 && (
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      {lang === "en" ? "Personal health consultant" : "व्यक्तिगत स्वास्थ्य सलाहकार"}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Tabs for rewards, history, and ways to earn */}
        <Tabs defaultValue="rewards" className="mt-6">
          <TabsList className="mb-4">
            <TabsTrigger value="rewards">{t("redeemPoints")}</TabsTrigger>
            <TabsTrigger value="history">{t("pointsHistory")}</TabsTrigger>
            <TabsTrigger value="earn">{t("earnPoints")}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="rewards">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewardsList.map(reward => (
                <Card key={reward.id} className={`
                  hover:shadow-md transition-shadow cursor-pointer
                  ${userPoints.total < reward.points ? "opacity-70" : ""}
                `}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">
                        {lang === "en" ? reward.name : reward.name_hi}
                      </CardTitle>
                      <Badge>{reward.points} {lang === "en" ? "Points" : "पॉइंट्स"}</Badge>
                    </div>
                    <CardDescription>
                      {lang === "en" ? reward.description : reward.description_hi}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full" 
                      disabled={userPoints.total < reward.points}
                      onClick={() => {
                        setSelectedReward(reward);
                        setRedeemDialogOpen(true);
                      }}
                    >
                      {t("redeemPoints")}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-md border">
                  <table className="min-w-full divide-y divide-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-4 py-3.5 text-left text-sm font-medium text-muted-foreground">
                          {lang === "en" ? "Date" : "तारीख"}
                        </th>
                        <th className="px-4 py-3.5 text-left text-sm font-medium text-muted-foreground">
                          {lang === "en" ? "Description" : "विवरण"}
                        </th>
                        <th className="px-4 py-3.5 text-left text-sm font-medium text-muted-foreground">
                          {lang === "en" ? "Points" : "पॉइंट्स"}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-background">
                      {userPoints.history.map((item) => (
                        <tr key={item.id}>
                          <td className="whitespace-nowrap px-4 py-4 text-sm">
                            {new Date(item.date).toLocaleDateString(lang === "en" ? "en-US" : "hi-IN")}
                          </td>
                          <td className="px-4 py-4 text-sm">
                            {lang === "en" ? item.description : item.description_hi}
                            {item.orderId && (
                              <span className="text-xs text-muted-foreground ml-2">
                                ({item.orderId})
                              </span>
                            )}
                          </td>
                          <td className={`whitespace-nowrap px-4 py-4 text-sm font-medium ${item.points > 0 ? "text-green-600" : "text-red-600"}`}>
                            {item.points > 0 ? "+" : ""}{item.points}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="earn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {earnPointsMethods.map(method => (
                <Card key={method.id}>
                  <CardHeader>
                    <CardTitle>{lang === "en" ? method.title : method.title_hi}</CardTitle>
                    <CardDescription>
                      <Badge variant="secondary" className="mt-1">
                        {lang === "en" ? method.points : method.points_hi}
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {lang === "en" ? method.description : method.description_hi}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Redeem Dialog */}
        <Dialog open={redeemDialogOpen} onOpenChange={setRedeemDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {lang === "en" ? "Confirm Redemption" : "रिडेम्पशन की पुष्टि करें"}
              </DialogTitle>
              <DialogDescription>
                {lang === "en" 
                  ? "You are about to redeem your points for the following reward:"
                  : "आप अपने पॉइंट्स को निम्नलिखित इनाम के लिए रिडीम करने जा रहे हैं:"}
              </DialogDescription>
            </DialogHeader>
            
            {selectedReward && (
              <div className="py-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium text-lg">
                    {lang === "en" ? selectedReward.name : selectedReward.name_hi}
                  </span>
                  <Badge>{selectedReward.points} {lang === "en" ? "Points" : "पॉइंट्स"}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  {lang === "en" ? selectedReward.description : selectedReward.description_hi}
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <span>{lang === "en" ? "Your Current Points" : "आपके वर्तमान पॉइंट्स"}</span>
                    <span>{userPoints.total}</span>
                  </div>
                  <div className="border-t border-border my-2"></div>
                  <div className="flex justify-between items-center">
                    <span>{lang === "en" ? "Points to Redeem" : "रिडीम करने के लिए पॉइंट्स"}</span>
                    <span className="text-red-600">-{selectedReward.points}</span>
                  </div>
                  <div className="border-t border-border my-2"></div>
                  <div className="flex justify-between items-center font-medium">
                    <span>{lang === "en" ? "Remaining Points" : "शेष पॉइंट्स"}</span>
                    <span>{userPoints.total - selectedReward.points}</span>
                  </div>
                </div>
              </div>
            )}
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setRedeemDialogOpen(false)}>
                {lang === "en" ? "Cancel" : "रद्द करें"}
              </Button>
              <Button onClick={() => {
                // Implement redemption logic here
                setRedeemDialogOpen(false);
                // Show success notification
              }}>
                {lang === "en" ? "Confirm Redemption" : "रिडेम्पशन की पुष्टि करें"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default LoyaltyProgramPage;
