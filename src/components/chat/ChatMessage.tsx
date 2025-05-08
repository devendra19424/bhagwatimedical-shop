
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Message } from "./chatTypes";

type ChatMessageProps = {
  message: Message;
  lang: "en" | "hi";
  mode?: "page" | "floating";
};

const ChatMessage = ({ message, lang, mode = "floating" }: ChatMessageProps) => {
  const isUser = message.sender === "user";
  const isSystem = message.sender === "system";
  
  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <Avatar className={mode === "page" ? "h-8 w-8 mr-2" : "h-6 w-6 mr-2"}>
          <AvatarFallback>
            {message.sender === "pharmacist" ? "RP" : "BM"}
          </AvatarFallback>
          {message.sender === "pharmacist" && (
            <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120" />
          )}
        </Avatar>
      )}
      <div
        className={`max-w-[75%] rounded-lg ${mode === "page" ? "p-3" : "p-2"} ${
          mode === "page" ? "" : "text-sm"
        } ${
          isUser
            ? "bg-primary text-primary-foreground"
            : isSystem
            ? "bg-muted"
            : "bg-secondary"
        }`}
      >
        <p>
          {lang === "en"
            ? message.text
            : message.text_hi || message.text}
        </p>
        <p className={`${mode === "page" ? "text-xs" : "text-[10px]"} opacity-70 mt-1`}>
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
