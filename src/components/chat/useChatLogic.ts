
import { useState, useEffect } from "react";
import { Message, sampleMessages, pharmacistResponses } from "./chatTypes";

export const useChatLogic = (mode: "page" | "floating" = "floating") => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (mode === "page") {
      // If in page mode, load messages immediately
      setMessages(sampleMessages);
    }
  }, [mode]);

  const toggleChat = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      if (newState && messages.length === 0) {
        // Load initial messages when opening the chat
        setMessages(sampleMessages);
      }
      return newState;
    });
  };

  const handleSendMessage = (newMessageText: string) => {
    if (!newMessageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: newMessageText,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate pharmacist response
    setTimeout(() => {
      const key = Object.keys(pharmacistResponses).find((key) =>
        newMessageText.toLowerCase().includes(key.toLowerCase())
      );

      let response: Message;
      if (key) {
        response = {
          ...pharmacistResponses[key],
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
        };
      } else {
        response = {
          id: Date.now().toString(),
          sender: "pharmacist",
          text:
            "I understand your question. Let me check with our pharmacists and get back to you. Is there anything else I can help you with?",
          text_hi:
            "मैं आपके प्रश्न को समझता हूं। मुझे हमारे फार्मासिस्ट से जांच करने दें और आपको वापस आऊंगा। क्या कुछ और है जिसमें मैं आपकी मदद कर सकता हूं?",
          timestamp: new Date().toISOString(),
        };
      }

      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 2000);
  };

  return {
    isOpen,
    messages,
    isTyping,
    toggleChat,
    handleSendMessage,
  };
};
