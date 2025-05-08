
import { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/context/LanguageContext";
import { Message } from "./chatTypes";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

type FloatingChatProps = {
  isOpen: boolean;
  toggleChat: () => void;
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (message: string) => void;
};

const FloatingChat = ({ 
  isOpen, 
  toggleChat, 
  messages, 
  isTyping, 
  onSendMessage 
}: FloatingChatProps) => {
  const { t, lang } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isOpen) {
    return (
      <Button
        variant="default"
        className="fixed bottom-4 right-4 shadow-lg z-50"
        onClick={toggleChat}
      >
        {t("chatNow")}
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 sm:w-96 shadow-lg z-50">
      <CardHeader className="bg-primary p-3">
        <div className="flex justify-between items-center">
          <CardTitle className="text-white text-base flex items-center gap-2">
            <Avatar className="h-6 w-6 border-2 border-white">
              <AvatarFallback>RP</AvatarFallback>
              <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120" />
            </Avatar>
            {t("askPharmacist")}
          </CardTitle>
          <Button
            variant="ghost"
            className="h-6 w-6 p-0 text-white hover:bg-primary-foreground/20"
            onClick={toggleChat}
          >
            ✕
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-3 h-80 overflow-y-auto">
        <div className="space-y-3">
          {messages.map((message) => (
            <ChatMessage 
              key={message.id} 
              message={message} 
              lang={lang} 
              mode="floating"
            />
          ))}
          {isTyping && <TypingIndicator mode="floating" />}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter className="border-t p-2">
        <ChatInput onSendMessage={onSendMessage} mode="floating" />
      </CardFooter>
    </Card>
  );
};

export default FloatingChat;
