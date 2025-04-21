
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginPage = () => {
  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  // Register form state
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerMobile, setRegisterMobile] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  // Handle login submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic would go here
    console.log("Login with:", { loginEmail, loginPassword });
  };

  // Handle register submission
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Registration logic would go here
    console.log("Register with:", {
      registerName,
      registerEmail,
      registerMobile,
      registerPassword,
      registerConfirmPassword,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4 max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">लॉगिन</TabsTrigger>
            <TabsTrigger value="register">रजिस्टर</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>अकाउंट में लॉगिन करें</CardTitle>
                <CardDescription>
                  अपने ईमेल और पासवर्ड का उपयोग करके लॉगिन करें।
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">ईमेल</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="आपका ईमेल"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">पासवर्ड</Label>
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        पासवर्ड भूल गए?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="आपका पासवर्ड"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    लॉगिन करें
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>नया अकाउंट बनाएं</CardTitle>
                <CardDescription>
                  भगवती मेडिकल स्टोर पर ऑर्डर करने के लिए रजिस्टर करें।
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">पूरा नाम</Label>
                    <Input
                      id="name"
                      placeholder="आपका पूरा नाम"
                      required
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">ईमेल</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="आपका ईमेल"
                      required
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">मोबाइल नंबर</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="आपका मोबाइल नंबर"
                      required
                      value={registerMobile}
                      onChange={(e) => setRegisterMobile(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">पासवर्ड</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="नया पासवर्ड"
                      required
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">पासवर्ड की पुष्टि करें</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="पासवर्ड फिर से डालें"
                      required
                      value={registerConfirmPassword}
                      onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    रजिस्टर करें
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

export default LoginPage;
