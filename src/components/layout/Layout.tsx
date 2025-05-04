
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster />
      <Sonner />
    </div>
  );
};

export default Layout;
