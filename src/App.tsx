
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/auth/LoginPage";
import ProfilePage from "./pages/user/ProfilePage";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";
import CartPage from "./pages/cart/CartPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrderTrackingPage from "./pages/tracking/OrderTrackingPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProductManagement from "./pages/admin/ProductManagement";
import OrdersManagement from "./pages/admin/OrdersManagement";
import DeliveryManagement from "./pages/admin/DeliveryManagement";
import UsersManagement from "./pages/admin/UsersManagement";
import SettingsManagement from "./pages/admin/SettingsManagement";
import CategoriesPage from "./pages/categories/CategoriesPage";
import HealthArticlesPage from "./pages/health/HealthArticlesPage";
import MedicineDatabasePage from "./pages/medicines/MedicineDatabasePage";
import LocatorPage from "./pages/locator/LocatorPage";
import LoyaltyProgramPage from "./pages/loyalty/LoyaltyProgramPage";
import PharmacistChatPage from "./pages/chat/PharmacistChatPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // Data is fresh for 5 minutes
      gcTime: 10 * 60 * 1000, // Cache data for 10 minutes (previously cacheTime)
      refetchOnWindowFocus: false, // Disable refetch on window focus for better performance
    }
  }
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                
                {/* Auth Routes */}
                <Route path="/login" element={<LoginPage />} />
                
                {/* User Routes */}
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/loyalty" element={<LoyaltyProgramPage />} />
                
                {/* Product Routes */}
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/medicine-database" element={<MedicineDatabasePage />} />
                
                {/* Health Information Routes */}
                <Route path="/health-articles" element={<HealthArticlesPage />} />
                <Route path="/locate" element={<LocatorPage />} />
                <Route path="/chat" element={<PharmacistChatPage />} />
                
                {/* Cart and Checkout */}
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/tracking" element={<OrderTrackingPage />} />
                
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/products" element={<ProductManagement />} />
                <Route path="/admin/products/categories" element={<ProductManagement />} />
                <Route path="/admin/products/inventory" element={<ProductManagement />} />
                <Route path="/admin/orders" element={<OrdersManagement />} />
                <Route path="/admin/delivery" element={<DeliveryManagement />} />
                <Route path="/admin/users" element={<UsersManagement />} />
                <Route path="/admin/settings" element={<SettingsManagement />} />
                <Route path="/admin/reports/sales" element={<AdminDashboard />} />
                <Route path="/admin/reports/inventory" element={<AdminDashboard />} />
                <Route path="/admin/reports/customers" element={<AdminDashboard />} />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
