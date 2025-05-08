
import { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/context/LanguageContext";
import { Message } from "./chatTypes";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

type PageChatProps = {
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (message: string) => void;
};

const PageChat = ({ messages, isTyping, onSendMessage }: PageChatProps) => {
  const { t, lang } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">{t("chatWithPharmacist")}</h1>
      <Card className="w-full">
        <CardHeader className="bg-primary">
          <CardTitle className="text-white flex items-center gap-2">
            <Avatar className="h-8 w-8 border-2 border-white">
              <AvatarFallback>RP</AvatarFallback>
              <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120" />
            </Avatar>
            {t("askPharmacist")}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 h-[500px] overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage 
                key={message.id} 
                message={message} 
                lang={lang} 
                mode="page"
              />
            ))}
            {isTyping && <TypingIndicator mode="page" />}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
        <CardFooter className="border-t p-4">
          <ChatInput onSendMessage={onSendMessage} mode="page" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default PageChat;
