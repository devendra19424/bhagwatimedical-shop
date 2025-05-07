
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const { totalItems } = useCart();
  
  // Don't show FAB on specific pages
  const hideFloatingButton = [
    '/cart',
    '/checkout',
  ].includes(location.pathname);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50/30 to-white">
      <Header />
      <motion.main 
        className="flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
      <Toaster />
      <Sonner />
      {isMobile && !hideFloatingButton && <FloatingActionButton />}
    </div>
  );
};

export default Layout;
