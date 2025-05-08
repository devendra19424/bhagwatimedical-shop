
export type Message = {
  id: string;
  sender: "system" | "user" | "pharmacist";
  text: string;
  text_hi?: string;
  timestamp: string;
};

// Sample chat messages
export const sampleMessages: Message[] = [
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

export const pharmacistResponses: { [key: string]: Message } = {
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
