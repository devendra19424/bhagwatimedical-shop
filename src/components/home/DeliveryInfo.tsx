
import { Truck, Clock, MapPin, Shield } from "lucide-react";
import { useLanguage, translations } from "@/context/LanguageContext";

const DeliveryInfo = () => {
  const { lang } = useLanguage();

  const features = [
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: translations.fastDelivery[lang],
      description: translations.fastDeliveryDesc[lang],
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: translations.service24x7[lang],
      description: translations.service24x7Desc[lang],
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: translations.trackDelivery[lang],
      description: translations.trackDeliveryDesc[lang],
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: translations.genuineMeds[lang],
      description: translations.genuineMedsDesc[lang],
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          {translations.whyChooseUs[lang]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
