
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const HeroSection = () => {
  const { lang } = useLanguage();
  
  return (
    <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              {translations.heroTitle[lang]}
            </h1>
            <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {translations.heroDescription[lang]}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  {translations.shopNow[lang]}
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  {translations.createAccount[lang]}
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1240&q=80"
              alt="Pharmacy Delivery"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              width={500}
              height={310}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
