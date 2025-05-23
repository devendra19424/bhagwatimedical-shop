
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { productImages } from "@/translations";
import { Language } from "@/translations";

const CategorySection = () => {
  const { lang, t } = useLanguage();
  
  const categories = [
    {
      id: 1,
      name: t("painKillers"),
      icon: "💊",
      link: "/products?category=pain-killers",
      image: productImages.painKillers.image
    },
    {
      id: 2,
      name: t("fever"),
      icon: "🌡️",
      link: "/products?category=fever",
      image: productImages.feverMedicines.image
    },
    {
      id: 3,
      name: t("vitamins"),
      icon: "🍊",
      link: "/products?category=vitamins",
      image: productImages.vitamins.image
    },
    {
      id: 4,
      name: t("devices"),
      icon: "🩺",
      link: "/products?category=devices",
      image: productImages.bpMonitor.image
    },
    {
      id: 5,
      name: t("skincare"),
      icon: "💆",
      link: "/products?category=skincare",
      image: productImages.skinCare.image
    },
    {
      id: 6,
      name: t("diabetes"),
      icon: "📊",
      link: "/products?category=diabetes",
      image: productImages.glucometer.image
    },
    {
      id: 7,
      name: t("heartHealth"),
      icon: "❤️",
      link: "/products?category=heart",
      image: productImages.heartHealth.image
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          {t("categories")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 md:gap-4">
          {categories.map((category) => (
            <Link key={category.id} to={category.link}>
              <Card className="border-none h-full shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="flex flex-col items-center justify-center p-3 md:p-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 mb-3 md:mb-4 rounded-full bg-primary/10 flex items-center justify-center text-2xl md:text-3xl">
                    {category.icon}
                  </div>
                  <span className="text-center text-sm md:text-base font-medium">{category.name}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
