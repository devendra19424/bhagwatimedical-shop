
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/context/LanguageContext";

type TypingIndicatorProps = {
  mode?: "page" | "floating";
};

const TypingIndicator = ({ mode = "floating" }: TypingIndicatorProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex justify-start">
      <Avatar className={mode === "page" ? "h-8 w-8 mr-2" : "h-6 w-6 mr-2"}>
        <AvatarFallback>RP</AvatarFallback>
        <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120" />
      </Avatar>
      <div className={`max-w-[75%] rounded-lg ${mode === "page" ? "p-3" : "p-2"} ${mode === "page" ? "" : "text-sm"} bg-secondary`}>
        <p>{t("pharmacistTyping")}</p>
      </div>
    </div>
  );
};

export default TypingIndicator;
