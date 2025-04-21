
import { Truck, Clock, MapPin, Shield } from "lucide-react";

const features = [
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "तीव्र डिलीवरी",
    description: "इटारसी शहर में 60 मिनट से भी कम समय में दवाइयां आपके घर तक पहुंचाते हैं।",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "24x7 सेवा",
    description: "आपात स्थितियों में भी हम 24 घंटे आपकी सेवा में हैं।",
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "डिलीवरी ट्रैकिंग",
    description: "रियल-टाइम में अपने ऑर्डर को ट्रैक करें और जानें कि वह कहां है।",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "असली दवाइयां",
    description: "हम केवल प्रमाणित और गुणवत्तापूर्ण दवाइयां ही डिलीवर करते हैं।",
  },
];

const DeliveryInfo = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          क्यों चुनें हमारी डिलीवरी सेवा?
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
