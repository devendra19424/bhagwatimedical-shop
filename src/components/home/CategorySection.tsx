
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const CategorySection = () => {
  const { lang } = useLanguage();
  
  const categories = [
    {
      id: 1,
      name: lang === "en" ? translations.painKillers[lang] : translations.painKillers[lang],
      icon: "💊",
      link: "/products?category=pain-killers",
    },
    {
      id: 2,
      name: lang === "en" ? translations.fever[lang] : translations.fever[lang],
      icon: "🌡️",
      link: "/products?category=fever",
    },
    {
      id: 3,
      name: lang === "en" ? translations.vitamins[lang] : translations.vitamins[lang],
      icon: "🍊",
      link: "/products?category=vitamins",
    },
    {
      id: 4,
      name: lang === "en" ? translations.devices[lang] : translations.devices[lang],
      icon: "🩺",
      link: "/products?category=devices",
    },
    {
      id: 5,
      name: lang === "en" ? translations.skincare[lang] : translations.skincare[lang],
      icon: "💆",
      link: "/products?category=skincare",
    },
    {
      id: 6,
      name: lang === "en" ? translations.diabetes[lang] : translations.diabetes[lang],
      icon: "📊",
      link: "/products?category=diabetes",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {translations.categories[lang]}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to={category.link}>
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <span className="text-center font-medium">{category.name}</span>
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
