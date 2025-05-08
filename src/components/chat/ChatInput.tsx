
import { SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  mode?: "page" | "floating";
};

const ChatInput = ({ onSendMessage, mode = "floating" }: ChatInputProps) => {
  const { lang } = useLanguage();
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    onSendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="flex w-full gap-2">
      <Input
        placeholder={lang === "en" ? "Type your message here..." : "अपना संदेश यहां टाइप करें..."}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
        className={`flex-1 ${mode === "floating" ? "h-8 text-sm" : ""}`}
      />
      <Button 
        onClick={handleSend} 
        size={mode === "floating" ? "sm" : "default"}
        className={mode === "floating" ? "h-8 px-2" : ""}
      >
        <SendHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ChatInput;
