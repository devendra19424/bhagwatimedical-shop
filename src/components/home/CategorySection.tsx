
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "पेन किलर",
    icon: "💊",
    link: "/products?category=pain-killers",
  },
  {
    id: 2,
    name: "बुखार दवाइयां",
    icon: "🌡️",
    link: "/products?category=fever",
  },
  {
    id: 3,
    name: "विटामिन्स",
    icon: "🍊",
    link: "/products?category=vitamins",
  },
  {
    id: 4,
    name: "स्वास्थ्य उपकरण",
    icon: "🩺",
    link: "/products?category=devices",
  },
  {
    id: 5,
    name: "स्किन केयर",
    icon: "💆",
    link: "/products?category=skincare",
  },
  {
    id: 6,
    name: "डायबिटीज",
    icon: "📊",
    link: "/products?category=diabetes",
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          श्रेणियां
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
