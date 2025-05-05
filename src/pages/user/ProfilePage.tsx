
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const ProfilePage = () => {
  const { t, lang } = useLanguage();
  
  // Profile information state
  const [name, setName] = useState(lang === "en" ? "Ram Sharma" : "राम शर्मा");
  const [email, setEmail] = useState("ram.sharma@example.com");
  const [mobile, setMobile] = useState("9876543210");

  // Address state
  const [address, setAddress] = useState(lang === "en" ? "123, Main Market" : "123, मुख्य बाज़ार");
  const [city, setCity] = useState(lang === "en" ? "Itarsi" : "इटारसी");
  const [state, setState] = useState(lang === "en" ? "Madhya Pradesh" : "मध्य प्रदेश");
  const [pincode, setPincode] = useState("461111");
  const [landmark, setLandmark] = useState(lang === "en" ? "Near Shiv Temple" : "शिव मंदिर के पास");

  // Password change state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Handle profile update
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile update:", { name, email, mobile });
    // Update profile logic would go here
  };

  // Handle address update
  const handleAddressUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Address update:", { address, city, state, pincode, landmark });
    // Update address logic would go here
  };

  // Handle password change
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password change:", {
      currentPassword,
      newPassword,
      confirmNewPassword,
    });
    // Change password logic would go here
  };

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6">
          {lang === "en" ? "My Account" : "मेरा अकाउंट"}
        </h1>
        
        <Tabs defaultValue="profile" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">
              {lang === "en" ? "Profile" : "प्रोफाइल"}
            </TabsTrigger>
            <TabsTrigger value="address">
              {lang === "en" ? "Address" : "पता"}
            </TabsTrigger>
            <TabsTrigger value="password">
              {lang === "en" ? "Password" : "पासवर्ड"}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>
                  {lang === "en" ? "Profile Information" : "प्रोफाइल जानकारी"}
                </CardTitle>
                <CardDescription>
                  {lang === "en" ? "Update your personal information." : "अपनी व्यक्तिगत जानकारी अपडेट करें।"}
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleProfileUpdate}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="profile-name">
                      {lang === "en" ? "Full Name" : "पूरा नाम"}
                    </Label>
                    <Input
                      id="profile-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-email">
                      {lang === "en" ? "Email" : "ईमेल"}
                    </Label>
                    <Input
                      id="profile-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile-mobile">
                      {lang === "en" ? "Mobile Number" : "मोबाइल नंबर"}
                    </Label>
                    <Input
                      id="profile-mobile"
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">
                    {lang === "en" ? "Update" : "अपडेट करें"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="address">
            <Card>
              <CardHeader>
                <CardTitle>
                  {lang === "en" ? "Delivery Address" : "डिलीवरी पता"}
                </CardTitle>
                <CardDescription>
                  {lang === "en" ? "Update your delivery address." : "अपना डिलीवरी पता अपडेट करें।"}
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleAddressUpdate}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="street-address">
                      {lang === "en" ? "Street/House Number" : "गली/घर नंबर"}
                    </Label>
                    <Textarea
                      id="street-address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">
                        {lang === "en" ? "City" : "शहर"}
                      </Label>
                      <Input
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">
                        {lang === "en" ? "State" : "राज्य"}
                      </Label>
                      <Input
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pincode">
                        {lang === "en" ? "Pincode" : "पिनकोड"}
                      </Label>
                      <Input
                        id="pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="landmark">
                        {lang === "en" ? "Landmark" : "लैंडमार्क"}
                      </Label>
                      <Input
                        id="landmark"
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">
                    {lang === "en" ? "Update" : "अपडेट करें"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>
                  {lang === "en" ? "Change Password" : "पासवर्ड बदलें"}
                </CardTitle>
                <CardDescription>
                  {lang === "en" ? "Update your password." : "अपना पासवर्ड बदलें।"}
                </CardDescription>
              </CardHeader>
              <form onSubmit={handlePasswordChange}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">
                      {lang === "en" ? "Current Password" : "वर्तमान पासवर्ड"}
                    </Label>
                    <Input
                      id="current-password"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">
                      {lang === "en" ? "New Password" : "नया पासवर्ड"}
                    </Label>
                    <Input
                      id="new-password"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-new-password">
                      {lang === "en" ? "Confirm New Password" : "नए पासवर्ड की पुष्टि करें"}
                    </Label>
                    <Input
                      id="confirm-new-password"
                      type="password"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">
                    {lang === "en" ? "Change Password" : "पासवर्ड बदलें"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProfilePage;
