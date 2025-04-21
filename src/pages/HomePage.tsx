
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import DeliveryInfo from "@/components/home/DeliveryInfo";
import Testimonials from "@/components/home/Testimonials";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <DeliveryInfo />
      <Testimonials />
    </Layout>
  );
};

export default HomePage;
