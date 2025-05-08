
import { useChatLogic } from "./useChatLogic";
import PageChat from "./PageChat";
import FloatingChat from "./FloatingChat";

export type LivePharmacistChatProps = {
  mode?: "page" | "floating";
};

const LivePharmacistChat = ({ mode = "floating" }: LivePharmacistChatProps) => {
  const { isOpen, messages, isTyping, toggleChat, handleSendMessage } = useChatLogic(mode);

  if (mode === "page") {
    return (
      <PageChat 
        messages={messages}
        isTyping={isTyping}
        onSendMessage={handleSendMessage}
      />
    );
  }

  return (
    <FloatingChat
      isOpen={isOpen}
      toggleChat={toggleChat}
      messages={messages}
      isTyping={isTyping}
      onSendMessage={handleSendMessage}
    />
  );
};

export default LivePharmacistChat;
