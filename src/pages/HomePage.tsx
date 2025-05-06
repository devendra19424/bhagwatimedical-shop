
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import DeliveryInfo from "@/components/home/DeliveryInfo";
import Testimonials from "@/components/home/Testimonials";
import { medicineData } from "@/data/medicineData"; // Import the new medicine data

const HomePage = () => {
  // Make the data available for components that need it
  const featuredMedicines = medicineData.slice(0, 8); // Get first 8 medicines for featured section
  
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts featuredMedicines={featuredMedicines} />
      <DeliveryInfo />
      <Testimonials />
    </Layout>
  );
};

export default HomePage;
