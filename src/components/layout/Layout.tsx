
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LanguageProvider } from "@/context/LanguageContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Layout;
