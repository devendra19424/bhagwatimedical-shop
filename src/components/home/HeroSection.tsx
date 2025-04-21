
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-medical-100 to-pharmacy-100 py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              आपकी स्वास्थ्य सेवा, हमारा उत्तरदायित्व
            </h1>
            <p className="text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              भगवती मेडिकल स्टोर से आवश्यक दवाइयां और स्वास्थ्य उत्पाद घर बैठे मंगवाएं। हम इटारसी में तीव्र और विश्वसनीय दवा डिलीवरी सेवा प्रदान करते हैं।
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  अभी खरीदें
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  अकाउंट बनाएं
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
