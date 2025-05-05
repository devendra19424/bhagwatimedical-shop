
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/context/LanguageContext";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  const { t } = useLanguage();
  
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
      {/* SEO Optimization */}
      <Helmet>
        <title>Login to Bhagwati Medical Store | Pharmacy in Purani Itarsi</title>
        <meta name="description" content="Login or register for Bhagwati Medical Store - Your trusted pharmacy and medical shop in Itarsi, Purani Itarsi. Order medicines online with fast delivery." />
        <meta name="keywords" content="login, register, bhagwati medical, pharmacy itarsi, medical shop purani itarsi, dawai ki dukan itarsi" />
      </Helmet>

      <div className="container mx-auto py-10 px-4 max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">{t("login")}</TabsTrigger>
            <TabsTrigger value="register">{t("register")}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>{t("loginToAccount")}</CardTitle>
                <CardDescription>
                  {t("loginWithEmail")}
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("email")}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("yourEmail")}
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">{t("password")}</Label>
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        {t("forgotPassword")}
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder={t("yourPassword")}
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    {t("loginButton")}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>{t("createAccount")}</CardTitle>
                <CardDescription>
                  {t("registerToOrder")}
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("fullName")}</Label>
                    <Input
                      id="name"
                      placeholder={t("yourFullName")}
                      required
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">{t("email")}</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder={t("yourEmail")}
                      required
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">{t("mobileNumber")}</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder={t("yourMobileNumber")}
                      required
                      value={registerMobile}
                      onChange={(e) => setRegisterMobile(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">{t("password")}</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder={t("yourPassword")}
                      required
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">{t("confirmPassword")}</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder={t("reEnterPassword")}
                      required
                      value={registerConfirmPassword}
                      onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    {t("registerButton")}
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
