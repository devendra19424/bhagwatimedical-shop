
import { Link } from "react-router-dom";
import { useLanguage, translations } from "@/context/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{translations.storeName[lang]}</h3>
            <p className="text-gray-600 mb-4">
              {lang === "hi"
                ? "इटारसी में विश्वसनीय औषधि वितरण के लिए। अब घर बैठे दवाइयां मंगवाएं।"
                : "Trusted medicine delivery in Itarsi. Now order medicines at home."}
            </p>
            <p className="text-gray-600">
              <strong>{lang === "hi" ? "पता:" : "Address:"}</strong>{" "}
              {translations.address[lang]}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{translations.quickLinks[lang]}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  {translations.home[lang]}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary">
                  {translations.allMedicines[lang]}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">
                  {translations.about[lang]}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary">
                  {translations.contact[lang]}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{translations.contact[lang]}</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600">
                {/* Phone */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                {/* Email */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>contact@bhagwatimedical.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                {/* Location */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  {lang === "hi"
                    ? "इटारसी, मध्य प्रदेश, भारत"
                    : "Itarsi, Madhya Pradesh, India"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-gray-600">
          <p>{translations.copyright[lang]}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
