
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define the Message type with correct sender types
type Message = {
  id: string;
  sender: "system" | "user" | "pharmacist";
  text: string;
  text_hi?: string;
  timestamp: string;
};

// Sample chat messages
const sampleMessages: Message[] = [
  {
    id: "1",
    sender: "system",
    text: "Welcome to Bhagwati Medical Store's live chat! A pharmacist will be with you shortly.",
    text_hi: "भगवती मेडिकल स्टोर के लाइव चैट में आपका स्वागत है! एक फार्मासिस्ट जल्द ही आपके साथ होगा।",
    timestamp: new Date().toISOString(),
  },
  {
    id: "2",
    sender: "pharmacist",
    text: "Hello! I'm Rajesh, the pharmacist on duty. How can I assist you today?",
    text_hi: "नमस्ते! मैं राजेश हूं, ड्यूटी पर फार्मासिस्ट। आज मैं आपकी कैसे मदद कर सकता हूं?",
    timestamp: new Date().toISOString(),
  },
];

const pharmacistResponses: { [key: string]: Message } = {
  "Do you have paracetamol in stock?": {
    id: "",
    sender: "pharmacist",
    text: "Yes, we have Paracetamol in stock. We carry various brands including Calpol and Dolo. Would you like to know about the specific dosages available?",
    text_hi: "हां, हमारे पास पैरासिटामोल स्टॉक में है। हम कैल्पोल और डोलो सहित विभिन्न ब्रांड रखते हैं। क्या आप उपलब्ध विशिष्ट खुराक के बारे में जानना चाहेंगे?",
    timestamp: "",
  },
  "What are the side effects of Metformin?": {
    id: "",
    sender: "pharmacist",
    text: "Common side effects of Metformin include gastrointestinal issues like nausea, vomiting, diarrhea, and stomach pain. These typically improve over time. Less common side effects may include vitamin B12 deficiency with long-term use. Always consult your doctor if you experience any concerning symptoms.",
    text_hi: "मेटफॉर्मिन के सामान्य दुष्प्रभावों में मतली, उल्टी, दस्त और पेट दर्द जैसी गैस्ट्रोइंटेस्टाइनल समस्याएं शामिल हैं। ये आमतौर पर समय के साथ सुधर जाते हैं। लंबे समय तक उपयोग के साथ विटामिन B12 की कमी कम सामान्य दुष्प्रभाव हो सकते हैं। यदि आप किसी भी चिंताजनक लक्षण का अनुभव करते हैं तो हमेशा अपने डॉक्टर से परामर्श करें।",
    timestamp: "",
  },
  "How should I store Insulin?": {
    id: "",
    sender: "pharmacist",
    text: "Unopened insulin should be stored in the refrigerator at 2-8°C (36-46°F). Once opened, most insulin can be kept at room temperature (below 30°C/86°F) for up to 28 days, but check the specific instructions for your particular insulin product. Never freeze insulin, and keep it away from direct heat and sunlight.",
    text_hi: "अनुपयोगी इंसुलिन को 2-8°C (36-46°F) पर रेफ्रिजरेटर में स्टोर किया जाना चाहिए। एक बार खोले जाने के बाद, अधिकांश इंसुलिन को 28 दिनों तक कमरे के तापमान (30°C/86°F से कम) पर रखा जा सकता है, लेकिन अपने विशेष इंसुलिन उत्पाद के लिए विशिष्ट निर्देशों की जांच करें। इंसुलिन को कभी भी फ्रीज न करें, और इसे सीधी गर्मी और धूप से दूर रखें।",
    timestamp: "",
  },
};

type LivePharmacistChatProps = {
  mode?: "page" | "floating";
};

const LivePharmacistChat = ({ mode = "floating" }: LivePharmacistChatProps) => {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode === "page") {
      // If in page mode, load messages immediately
      setMessages(sampleMessages);
    }
  }, [mode]);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: newMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    // Simulate pharmacist response
    setTimeout(() => {
      const key = Object.keys(pharmacistResponses).find((key) =>
        newMessage.toLowerCase().includes(key.toLowerCase())
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

  if (mode === "page") {
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
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender !== "user" && (
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback>
                        {message.sender === "pharmacist" ? "RP" : "BM"}
                      </AvatarFallback>
                      {message.sender === "pharmacist" && (
                        <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120" />
                      )}
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[75%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : message.sender === "system"
                        ? "bg-muted"
                        : "bg-secondary"
                    }`}
                  >
                    <p>
                      {lang === "en"
                        ? message.text
                        : message.text_hi || message.text}
                    </p>
                    <p className="text-xs opacity-70 mt-1">
                      {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback>RP</AvatarFallback>
                    <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120" />
                  </Avatar>
                  <div className="max-w-[75%] rounded-lg p-3 bg-secondary">
                    <p>{t("pharmacistTyping")}</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="border-t p-4">
            <div className="flex w-full gap-2">
              <Input
                placeholder={lang === "en" ? "Type your message here..." : "अपना संदेश यहां टाइप करें..."}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <SendHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <>
      {isOpen ? (
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
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender !== "user" && (
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback>
                        {message.sender === "pharmacist" ? "RP" : "BM"}
                      </AvatarFallback>
                      {message.sender === "pharmacist" && (
                        <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120" />
                      )}
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[75%] rounded-lg p-2 text-sm ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : message.sender === "system"
                        ? "bg-muted"
                        : "bg-secondary"
                    }`}
                  >
                    <p>
                      {lang === "en"
                        ? message.text
                        : message.text_hi || message.text}
                    </p>
                    <p className="text-[10px] opacity-70 mt-1">
                      {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarFallback>RP</AvatarFallback>
                    <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120" />
                  </Avatar>
                  <div className="max-w-[75%] rounded-lg p-2 text-sm bg-secondary">
                    <p>{t("pharmacistTyping")}</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="border-t p-2">
            <div className="flex w-full gap-2">
              <Input
                placeholder={lang === "en" ? "Type your message here..." : "अपना संदेश यहां टाइप करें..."}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 h-8 text-sm"
              />
              <Button onClick={handleSendMessage} size="sm" className="h-8 px-2">
                <SendHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button
          variant="primary"
          className="fixed bottom-4 right-4 shadow-lg z-50"
          onClick={toggleChat}
        >
          {t("chatNow")}
        </Button>
      )}
    </>
  );
};

export default LivePharmacistChat;
