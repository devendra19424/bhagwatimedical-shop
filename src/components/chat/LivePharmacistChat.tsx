
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { MessageSquare, X, Send, PlusCircle, ChevronRight, MinusCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample pharmacist data
const pharmacists = [
  {
    id: "ph1",
    name: "Dr. Amit Kumar",
    role: "Senior Pharmacist",
    role_hi: "वरिष्ठ फार्मासिस्ट",
    specialization: "General Medicine, Diabetes",
    specialization_hi: "सामान्य चिकित्सा, मधुमेह",
    experience: "12 years",
    experience_hi: "12 वर्ष",
    languages: ["English", "Hindi"],
    languages_hi: ["अंग्रेजी", "हिंदी"],
    isAvailable: true,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "ph2",
    name: "Dr. Priya Sharma",
    role: "Clinical Pharmacist",
    role_hi: "क्लिनिकल फार्मासिस्ट",
    specialization: "Cardiology, Geriatric Care",
    specialization_hi: "हृदय रोग, वृद्धावस्था देखभाल",
    experience: "8 years",
    experience_hi: "8 वर्ष",
    languages: ["English", "Hindi", "Punjabi"],
    languages_hi: ["अंग्रेजी", "हिंदी", "पंजाबी"],
    isAvailable: true,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "ph3",
    name: "Dr. Rajesh Verma",
    role: "Pediatric Specialist",
    role_hi: "बाल विशेषज्ञ",
    specialization: "Pediatric Medicine, Allergies",
    specialization_hi: "बाल चिकित्सा, एलर्जी",
    experience: "15 years",
    experience_hi: "15 वर्ष",
    languages: ["English", "Hindi"],
    languages_hi: ["अंग्रेजी", "हिंदी"],
    isAvailable: false,
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

// Sample conversations
const defaultMessages = [
  {
    id: "m1",
    sender: "system",
    text: "Welcome to the Bhagwati Medical Store pharmacist chat service. How can we help you today?",
    text_hi: "भगवती मेडिकल स्टोर फार्मासिस्ट चैट सेवा में आपका स्वागत है। आज हम आपकी कैसे सहायता कर सकते हैं?",
    timestamp: new Date(new Date().getTime() - 60000).toISOString(),
  }
];

// Message templates for quick questions
const messageTemplates = [
  {
    id: "t1",
    text: "What is the recommended dosage for this medicine?",
    text_hi: "इस दवा के लिए अनुशंसित खुराक क्या है?"
  },
  {
    id: "t2",
    text: "Are there any side effects I should be aware of?",
    text_hi: "क्या ऐसे कोई दुष्प्रभाव हैं जिनके बारे में मुझे पता होना चाहिए?"
  },
  {
    id: "t3",
    text: "Can I take this medicine with my current medications?",
    text_hi: "क्या मैं इस दवा को अपनी वर्तमान दवाओं के साथ ले सकता हूं?"
  },
  {
    id: "t4",
    text: "Is this medicine safe during pregnancy?",
    text_hi: "क्या यह दवा गर्भावस्था के दौरान सुरक्षित है?"
  }
];

interface Message {
  id: string;
  sender: "user" | "pharmacist" | "system";
  text: string;
  text_hi?: string;
  timestamp: string;
  isTyping?: boolean;
}

interface ChatViewProps {
  chatOpen: boolean;
  onClose: () => void;
  selectedPharmacist: any;
}

const ChatView = ({ chatOpen, onClose, selectedPharmacist }: ChatViewProps) => {
  const { lang, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  // Scroll to bottom of chat when new messages arrive
  useEffect(() => {
    if (chatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, chatOpen]);
  
  const simulatePharmacistResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      let response: Message;
      
      // Simple response logic based on user input
      if (userMessage.toLowerCase().includes("dosage") || userMessage.toLowerCase().includes("खुराक")) {
        response = {
          id: `m${Date.now()}`,
          sender: "pharmacist",
          text: "The recommended dosage depends on various factors including your age, weight, and medical condition. Could you please provide more information about the specific medication you're inquiring about?",
          text_hi: "अनुशंसित खुराक आपकी उम्र, वजन और चिकित्सा स्थिति सहित विभिन्न कारकों पर निर्भर करती है। क्या आप कृपया उस विशिष्ट दवा के बारे में अधिक जानकारी प्रदान कर सकते हैं जिसके बारे में आप पूछताछ कर रहे हैं?",
          timestamp: new Date().toISOString()
        };
      } else if (userMessage.toLowerCase().includes("side effect") || userMessage.toLowerCase().includes("दुष्प्रभाव")) {
        response = {
          id: `m${Date.now()}`,
          sender: "pharmacist",
          text: "All medications can have potential side effects. Common ones include nausea, headache, or drowsiness. For specific medications, I'd need more details to provide accurate information. Can you tell me which medicine you're concerned about?",
          text_hi: "सभी दवाओं के संभावित दुष्प्रभाव हो सकते हैं। सामान्य में मतली, सिरदर्द, या नींद आना शामिल है। विशिष्ट दवाओं के लिए, सटीक जानकारी प्रदान करने के लिए मुझे अधिक विवरण की आवश्यकता होगी। क्या आप मुझे बता सकते हैं कि आप किस दवा के बारे में चिंतित हैं?",
          timestamp: new Date().toISOString()
        };
      } else if (userMessage.toLowerCase().includes("pregnancy") || userMessage.toLowerCase().includes("गर्भावस्था")) {
        response = {
          id: `m${Date.now()}`,
          sender: "pharmacist",
          text: "Medication safety during pregnancy is very important. Many medications are not recommended during pregnancy, especially during the first trimester. It's crucial to consult with your healthcare provider before taking any medication during pregnancy. Could you specify which medication you're asking about?",
          text_hi: "गर्भावस्था के दौरान दवा की सुरक्षा बहुत महत्वपूर्ण है। कई दवाओं की सिफारिश गर्भावस्था के दौरान नहीं की जाती है, विशेष रूप से पहली तिमाही के दौरान। गर्भावस्था के दौरान कोई भी दवा लेने से पहले अपने स्वास्थ्य सेवा प्रदाता से परामर्श करना महत्वपूर्ण है। क्या आप बता सकते हैं कि आप किस दवा के बारे में पूछ रहे हैं?",
          timestamp: new Date().toISOString()
        };
      } else {
        response = {
          id: `m${Date.now()}`,
          sender: "pharmacist",
          text: "Thank you for your question. To provide the most accurate information, could you please provide more details about your concern? If you have specific medications or health conditions you're asking about, that would be helpful.",
          text_hi: "आपके प्रश्न के लिए धन्यवाद। सबसे सटीक जानकारी प्रदान करने के लिए, क्या आप कृपया अपनी चिंता के बारे में अधिक जानकारी प्रदान कर सकते हैं? यदि आप जिन विशिष्ट दवाओं या स्वास्थ्य स्थितियों के बारे में पूछ रहे हैं, तो वह सहायक होगा।",
          timestamp: new Date().toISOString()
        };
      }
      
      setMessages(prevMessages => [...prevMessages, response]);
      setIsTyping(false);
    }, 2000);
  };
  
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: `m${Date.now()}`,
        sender: "user",
        text: newMessage.trim(),
        timestamp: new Date().toISOString()
      };
      
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setNewMessage("");
      
      // Simulate pharmacist response
      simulatePharmacistResponse(newMessage.trim());
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const useTemplate = (template: { text: string, text_hi?: string }) => {
    setNewMessage(lang === "en" ? template.text : (template.text_hi || template.text));
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={selectedPharmacist.image} alt={selectedPharmacist.name} />
            <AvatarFallback>
              {selectedPharmacist.name.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{selectedPharmacist.name}</h3>
            <p className="text-xs text-muted-foreground">
              {lang === "en" ? selectedPharmacist.role : selectedPharmacist.role_hi}
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map(message => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.sender === "user" ? "justify-end" : "justify-start"
            )}
          >
            {message.sender === "pharmacist" && (
              <Avatar className="mr-2 mt-1 w-8 h-8">
                <AvatarImage src={selectedPharmacist.image} alt={selectedPharmacist.name} />
                <AvatarFallback>
                  {selectedPharmacist.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
            )}
            
            <div
              className={cn(
                "max-w-[80%] px-4 py-2 rounded-lg",
                message.sender === "user" 
                  ? "bg-primary text-primary-foreground"
                  : message.sender === "system"
                  ? "bg-muted text-muted-foreground text-center w-full max-w-full"
                  : "bg-white border"
              )}
            >
              {lang === "en" ? message.text : (message.text_hi || message.text)}
              <div className="text-xs mt-1 opacity-70 text-right">
                {new Date(message.timestamp).toLocaleTimeString(
                  lang === "en" ? "en-US" : "hi-IN", 
                  { hour: "2-digit", minute: "2-digit" }
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <Avatar className="mr-2 mt-1 w-8 h-8">
              <AvatarImage src={selectedPharmacist.image} alt={selectedPharmacist.name} />
              <AvatarFallback>
                {selectedPharmacist.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="bg-muted px-4 py-2 rounded-lg flex items-center gap-1">
              <div className="w-2 h-2 bg-foreground/70 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-foreground/70 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-foreground/70 rounded-full animate-bounce"></div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t">
        <div className="flex flex-wrap gap-2 mb-4">
          {messageTemplates.map((template) => (
            <Button
              key={template.id}
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => useTemplate(template)}
            >
              {lang === "en" ? template.text : template.text_hi}
            </Button>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Textarea
            ref={inputRef}
            placeholder={lang === "en" ? "Type your message here..." : "अपना संदेश यहां टाइप करें..."}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="min-h-[60px]"
          />
          <Button
            onClick={handleSendMessage}
            className="px-4"
            disabled={!newMessage.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-4 text-xs text-muted-foreground text-center">
          {lang === "en" 
            ? "This chat service is for general medication inquiries. For medical emergencies, please call emergency services." 
            : "यह चैट सेवा सामान्य दवा पूछताछ के लिए है। चिकित्सा आपात स्थिति के लिए, कृपया आपातकालीन सेवाओं को कॉल करें।"}
        </div>
      </div>
    </div>
  );
};

const LivePharmacistChat = ({ mode = "widget" }: { mode?: "widget" | "page" }) => {
  const { t, lang } = useLanguage();
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedPharmacist, setSelectedPharmacist] = useState<any>(null);
  const isMobile = useIsMobile();
  
  const handleStartChat = (pharmacist: any) => {
    setSelectedPharmacist(pharmacist);
    setChatOpen(true);
  };
  
  const availablePharmacists = pharmacists.filter(p => p.isAvailable);
  
  // For widget mode, show floating chat button and sheet
  if (mode === "widget") {
    return (
      <>
        <div className="fixed bottom-4 right-4 z-40">
          <Sheet open={chatOpen} onOpenChange={setChatOpen}>
            <SheetTrigger asChild>
              <Button
                size="lg"
                className="rounded-full shadow-lg flex items-center gap-2"
              >
                <MessageSquare className="h-5 w-5" />
                {t("askPharmacist")}
              </Button>
            </SheetTrigger>
            <SheetContent
              side={isMobile ? "bottom" : "right"}
              className={isMobile ? "h-[90%]" : "w-[400px] max-w-md"}
            >
              {!selectedPharmacist ? (
                <div className="flex flex-col h-full">
                  <SheetHeader className="pb-4 border-b">
                    <SheetTitle>{t("liveChat")}</SheetTitle>
                    <SheetDescription>
                      {lang === "en" 
                        ? "Chat with our licensed pharmacists for medication information and advice" 
                        : "दवाओं की जानकारी और सलाह के लिए हमारे लाइसेंस प्राप्त फार्मासिस्टों से चैट करें"}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-6 flex-1 overflow-y-auto">
                    <h3 className="text-sm font-medium mb-4">
                      {lang === "en" ? "Available Pharmacists" : "उपलब्ध फार्मासिस्ट"}
                    </h3>
                    <div className="space-y-4">
                      {availablePharmacists.map((pharmacist) => (
                        <div 
                          key={pharmacist.id}
                          className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                          onClick={() => handleStartChat(pharmacist)}
                        >
                          <Avatar>
                            <AvatarImage src={pharmacist.image} alt={pharmacist.name} />
                            <AvatarFallback>{pharmacist.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{pharmacist.name}</h4>
                              <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                                {lang === "en" ? "Online" : "ऑनलाइन"}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {lang === "en" ? pharmacist.role : pharmacist.role_hi}
                            </p>
                            <p className="text-xs mt-1">
                              <span className="font-medium">
                                {lang === "en" ? "Specializes in: " : "विशेषज्ञता: "}
                              </span>
                              {lang === "en" ? pharmacist.specialization : pharmacist.specialization_hi}
                            </p>
                            <div className="mt-2 flex items-center text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>
                                {lang === "en" 
                                  ? `Experience: ${pharmacist.experience}` 
                                  : `अनुभव: ${pharmacist.experience_hi}`}
                              </span>
                            </div>
                            <div className="mt-2 flex items-center gap-1">
                              <ChevronRight className="h-4 w-4 text-primary" />
                              <span className="text-xs text-primary font-medium">
                                {lang === "en" ? "Start Chat" : "चैट शुरू करें"}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {pharmacists.filter(p => !p.isAvailable).map((pharmacist) => (
                        <div 
                          key={pharmacist.id}
                          className="flex items-start gap-4 p-4 rounded-lg border opacity-60"
                        >
                          <Avatar>
                            <AvatarImage src={pharmacist.image} alt={pharmacist.name} />
                            <AvatarFallback>{pharmacist.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{pharmacist.name}</h4>
                              <Badge variant="outline" className="text-muted-foreground text-xs">
                                {lang === "en" ? "Offline" : "ऑफलाइन"}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {lang === "en" ? pharmacist.role : pharmacist.role_hi}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <SheetFooter className="border-t pt-4">
                    <p className="text-xs text-muted-foreground">
                      {lang === "en" 
                        ? "Our pharmacists are available from 9:00 AM to 7:00 PM daily. For urgent medical advice, please consult a doctor." 
                        : "हमारे फार्मासिस्ट प्रतिदिन सुबह 9:00 बजे से शाम 7:00 बजे तक उपलब्ध हैं। तत्काल चिकित्सा सलाह के लिए, कृपया एक डॉक्टर से परामर्श करें।"}
                    </p>
                  </SheetFooter>
                </div>
              ) : (
                <ChatView
                  chatOpen={chatOpen}
                  onClose={() => setSelectedPharmacist(null)}
                  selectedPharmacist={selectedPharmacist}
                />
              )}
            </SheetContent>
          </Sheet>
        </div>
      </>
    );
  }
  
  // For page mode, show full page interface
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">{t("liveChat")}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>{lang === "en" ? "Available Pharmacists" : "उपलब्ध फार्मासिस्ट"}</CardTitle>
              <CardDescription>
                {lang === "en" 
                  ? "Select a pharmacist to start chatting" 
                  : "चैट शुरू करने के लिए एक फार्मासिस्ट चुनें"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {availablePharmacists.map((pharmacist) => (
                  <div 
                    key={pharmacist.id}
                    className={`
                      flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer
                      ${selectedPharmacist?.id === pharmacist.id ? 'bg-primary/5 border-primary' : ''}
                    `}
                    onClick={() => handleStartChat(pharmacist)}
                  >
                    <Avatar>
                      <AvatarImage src={pharmacist.image} alt={pharmacist.name} />
                      <AvatarFallback>{pharmacist.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{pharmacist.name}</h4>
                        <Badge variant="outline" className="text-green-600 border-green-600 text-xs">
                          {lang === "en" ? "Online" : "ऑनलाइन"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {lang === "en" ? pharmacist.role : pharmacist.role_hi}
                      </p>
                      <p className="text-xs mt-1">
                        <span className="font-medium">
                          {lang === "en" ? "Specializes in: " : "विशेषज्ञता: "}
                        </span>
                        {lang === "en" ? pharmacist.specialization : pharmacist.specialization_hi}
                      </p>
                      <div className="mt-2 flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>
                          {lang === "en" 
                            ? `Experience: ${pharmacist.experience}` 
                            : `अनुभव: ${pharmacist.experience_hi}`}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        <Button variant="link" className="h-auto p-0 text-xs" asChild>
                          <div className="flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            {lang === "en" ? "Start Chat" : "चैट शुरू करें"}
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {pharmacists.filter(p => !p.isAvailable).map((pharmacist) => (
                  <div 
                    key={pharmacist.id}
                    className="flex items-start gap-4 p-4 rounded-lg border opacity-60"
                  >
                    <Avatar>
                      <AvatarImage src={pharmacist.image} alt={pharmacist.name} />
                      <AvatarFallback>{pharmacist.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{pharmacist.name}</h4>
                        <Badge variant="outline" className="text-muted-foreground text-xs">
                          {lang === "en" ? "Offline" : "ऑफलाइन"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {lang === "en" ? pharmacist.role : pharmacist.role_hi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start border-t pt-4">
              <p className="text-xs text-muted-foreground">
                {lang === "en" 
                  ? "Our pharmacists are available from 9:00 AM to 7:00 PM daily. For urgent medical advice, please consult a doctor." 
                  : "हमारे फार्मासिस्ट प्रतिदिन सुबह 9:00 बजे से शाम 7:00 बजे तक उपलब्ध हैं। तत्काल चिकित्सा सलाह के लिए, कृपया एक डॉक्टर से परामर्श करें।"}
              </p>
            </CardFooter>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          {selectedPharmacist ? (
            <Card className="h-[700px] flex flex-col">
              <ChatView
                chatOpen={true}
                onClose={() => setSelectedPharmacist(null)}
                selectedPharmacist={selectedPharmacist}
              />
            </Card>
          ) : (
            <Card className="h-[700px] flex items-center justify-center">
              <div className="text-center p-8 max-w-md">
                <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h2 className="text-xl font-medium mb-2">
                  {lang === "en" ? "Select a pharmacist to start a chat" : "चैट शुरू करने के लिए एक फार्मासिस्ट चुनें"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {lang === "en" 
                    ? "Our licensed pharmacists are here to answer your questions about medications, side effects, and general health concerns" 
                    : "हमारे लाइसेंस प्राप्त फार्मासिस्ट दवाओं, दुष्प्रभावों और सामान्य स्वास्थ्य चिंताओं के बारे में आपके सवालों का जवाब देने के लिए यहां हैं"}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <PlusCircle className="h-4 w-4 text-green-600" />
                    <span>
                      {lang === "en" ? "Get expert advice on medication usage" : "दवा के उपयोग पर विशेषज्ञ सलाह प्राप्त करें"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <PlusCircle className="h-4 w-4 text-green-600" />
                    <span>
                      {lang === "en" ? "Ask about potential drug interactions" : "संभावित दवा इंटरैक्शन के बारे में पूछें"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <PlusCircle className="h-4 w-4 text-green-600" />
                    <span>
                      {lang === "en" ? "Learn about side effects and precautions" : "दुष्प्रभावों और सावधानियों के बारे में जानें"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MinusCircle className="h-4 w-4 text-red-600" />
                    <span>
                      {lang === "en" ? "Not for medical emergencies or diagnoses" : "चिकित्सा आपात स्थिति या निदान के लिए नहीं"}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default LivePharmacistChat;
