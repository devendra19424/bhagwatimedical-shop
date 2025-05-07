
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import { contactTranslations } from "@/translations/contact";
import { Phone, Mail, MapPin, Home, Box, Info, MessageCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50/70 border-t border-blue-100">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary p-1">
                  <Heart className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{translations.storeName[lang]}</h3>
              </div>
              <p className="text-gray-600">
                {lang === "hi"
                  ? "इटारसी में विश्वसनीय औषधि वितरण के लिए। अब घर बैठे दवाइयां मंगवाएं।"
                  : "Trusted medicine delivery in Itarsi. Now order medicines at home."}
              </p>
              <p className="text-gray-600 flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{translations.address[lang]}</span>
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4 border-b pb-2 border-blue-100">{translations.quickLinks[lang]}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    {translations.home[lang]}
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <Box className="h-4 w-4" />
                    {translations.allMedicines[lang]}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    {translations.about[lang]}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    {translations.contact[lang]}
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4 border-b pb-2 border-blue-100">{translations.contact[lang]}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <a href="tel:+919516271348" className="hover:text-primary transition-colors">
                    +91 9516271348
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <a href="mailto:shubh18237@gmail.com" className="hover:text-primary transition-colors">
                    shubh18237@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Bhagwati+Medical+Store+Main+Road+Old+Itarsi+Near+Bajaj+Showroom" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {lang === "hi"
                      ? "भगवती मेडिकल स्टोर, मेन रोड, पुराना इटारसी, बजाज शोरूम के पास"
                      : "Bhagwati Medical Store, Main Road, Old Itarsi, Near Bajaj Showroom"}
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold mb-4 border-b pb-2 border-blue-100">{translations.newsletter[lang]}</h3>
              <p className="text-gray-600 mb-4">
                {lang === "hi"
                  ? "नवीनतम ऑफर और अपडेट के लिए सब्सक्राइब करें"
                  : "Subscribe for latest offers and updates"}
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder={lang === "hi" ? "आपका ईमेल" : "Your email"} 
                  className="flex-1 rounded-l-lg border border-blue-200 px-4 py-2 focus:outline-none focus:border-blue-400"
                />
                <button 
                  type="submit" 
                  className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors"
                >
                  {lang === "hi" ? "भेजें" : "Send"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-blue-100 mt-8 pt-6 text-center text-gray-600">
          <p>{translations.copyright[lang]}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
