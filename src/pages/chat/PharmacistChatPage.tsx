
import Layout from "@/components/layout/Layout";
import LivePharmacistChat from "@/components/chat/LivePharmacistChat";
import { useLanguage } from "@/context/LanguageContext";

const PharmacistChatPage = () => {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <LivePharmacistChat mode="page" />
    </Layout>
  );
};

export default PharmacistChatPage;
