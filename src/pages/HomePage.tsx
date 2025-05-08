
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
import { medicineData } from "@/data/medicineData";

const HomePage = () => {
  // Make the data available for components that need it
  const featuredMedicines = medicineData.slice(0, 8); // Get first 8 medicines for featured section
  
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts featuredMedicines={featuredMedicines} />
      
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
    </Layout>
  );
};

export default HomePage;
