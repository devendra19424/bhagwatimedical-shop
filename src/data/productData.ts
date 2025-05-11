// Mock product data for development
export const products = [
  {
    id: "1",
    name_en: "Paracetamol",
    name_hi: "पैरासिटामोल",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet.jpg",
    price: 20.00,
    description_en: "Paracetamol is a pain and fever reducing medication used to treat mild to moderate pain.",
    description_hi: "पैरासिटामोल एक दर्द और बुखार कम करने वाली दवा है जो हल्के से मध्यम दर्द के इलाज के लिए उपयोग की जाती है।",
    category_en: "Pain Killers",
    category_hi: "पेन किलर",
    inStock: true,
    usageInstructions_en: "Take one tablet 3-4 times a day, every 4-6 hours. Do not exceed 4 doses in a day.",
    usageInstructions_hi: "प्रति दिन 3-4 बार, हर 4-6 घंटे में एक टैबलेट लें। एक दिन में 4 से अधिक खुराकें न लें।",
    uses_en: [
      "To reduce fever",
      "For relief from mild to moderate pain",
      "Headache, muscle pain",
      "Toothache and period pain",
    ],
    uses_hi: [
      "बुखार कम करने के लिए",
      "हल्के से मध्यम दर्द में राहत के लिए",
      "सिरदर्द, मांसपेशियों में दर्द",
      "दांत दर्द और पीरियड्स दर्द",
    ],
    sideEffects_en: [
      "Generally well tolerated",
      "Some people may experience nausea, stomach upset",
      "Liver damage can occur with excessive use",
      "Allergic reaction (rare)",
    ],
    sideEffects_hi: [
      "सामान्यतः अच्छी तरह से सहन किया जाता है",
      "कुछ लोगों में मतली, पेट की परेशानी हो सकती है",
      "अत्यधिक उपयोग से लीवर को नुकसान हो सकता है",
      "एलर्जिक प्रतिक्रिया (दुर्लभ)",
    ],
    deliveryInfo_en: "Delivery within 60 minutes in Itarsi area",
    deliveryInfo_hi: "इटारसी क्षेत्र में 60 मिनट के भीतर डिलीवरी",
    related: [2, 5],
  },
  {
    id: "2",
    name_en: "Multivitamin",
    name_hi: "मल्टीविटामिन",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/12/ED/JR/DL/108376694/cipmox-amoxicillin-250mg-capsules.png",
    price: 299.99,
    description_en: "Daily nutritional supplement",
    description_hi: "दैनिक पोषण सप्लीमेंट",
    category_en: "Vitamins",
    category_hi: "विटामिन्स",
    inStock: true,
    usageInstructions_en: "Take one capsule daily with breakfast.",
    usageInstructions_hi: "प्रतिदिन एक कैप्सूल सुबह के भोजन के साथ लें।",
    uses_en: [
      "To fill nutritional gaps",
      "Improve general health and wellbeing",
      "Strengthen immune system",
      "Boost energy levels",
    ],
    uses_hi: [
      "पोषक तत्वों की कमी को पूरा करने के लिए",
      "सामान्य स्वास्थ्य और कल्याण में सुधार के लिए",
      "प्रतिरक्षा प्रणाली को मजबूत करने के लिए",
      "ऊर्जा के स्तर को बढ़ाने के लिए",
    ],
    sideEffects_en: [
      "Generally safe and well tolerated",
      "Some people may experience mild stomach upset",
      "Excess dosage can lead to vitamin toxicity",
    ],
    sideEffects_hi: [
      "आमतौर पर सुरक्षित और अच्छी तरह से सहन किया जाता है",
      "कुछ लोगों में पेट की हल्की परेशानी हो सकती है",
      "अधिक खुराक से विटामिन विषाक्तता हो सकती है",
    ],
    deliveryInfo_en: "Delivery within 60 minutes in Itarsi area",
    deliveryInfo_hi: "इटारसी क्षेत्र में 60 मिनट के भीतर डिलीवरी",
    related: [1, 8],
  },
  {
    id: "5",
    name_en: "Cough Syrup",
    name_hi: "कफ सिरप",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets-500x500.jpg",
    price: 99.99,
    description_en: "Cough relief syrup",
    description_hi: "खांसी निवारक सिरप",
    category_en: "Cold & Cough",
    category_hi: "कफ और सर्दी",
  },
  {
    id: "8",
    name_en: "Protein Powder",
    name_hi: "प्रोटीन पाउडर",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/9/453699709/CH/EL/TV/2474176/aspirin-tablets.jpeg",
    price: 999.99,
    description_en: "Pure whey protein",
    description_hi: "शुद्ध व्हे प्रोटीन",
    category_en: "Nutrition",
    category_hi: "पोषण",
  },
];

// Related products data
export const relatedProducts = [
  {
    id: "2",
    name_en: "Multivitamin",
    name_hi: "मल्टीविटामिन",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/12/ED/JR/DL/108376694/cipmox-amoxicillin-250mg-capsules.png",
    price: 299.99,
    description_en: "Daily nutritional supplement",
    description_hi: "दैनिक पोषण सप्लीमेंट",
    category_en: "Vitamins",
    category_hi: "विटामिन्स",
  },
  {
    id: "5",
    name_en: "Cough Syrup",
    name_hi: "कफ सिरप",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets-500x500.jpg",
    price: 99.99,
    description_en: "Cough relief syrup",
    description_hi: "खांसी निवारक सिरप",
    category_en: "Cold & Cough",
    category_hi: "कफ और सर्दी",
  },
  {
    id: "8",
    name_en: "Protein Powder",
    name_hi: "प्रोटीन पाउडर",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/9/453699709/CH/EL/TV/2474176/aspirin-tablets.jpeg",
    price: 999.99,
    description_en: "Pure whey protein",
    description_hi: "शुद्ध व्हे प्रोटीन",
    category_en: "Nutrition",
    category_hi: "पोषण",
  },
];

export const productImages = {
  painKillers: {
    name: {
      en: "Pain Killers",
      hi: "दर्द निवारक"
    },
    image: "https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet.jpg"
  },
  coughSyrup: {
    name: {
      en: "Cough Syrup",
      hi: "खांसी का सिरप"
    },
    image: "https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets-500x500.jpg"
  },
  vitamins: {
    name: {
      en: "Vitamins",
      hi: "विटामिन्स"
    },
    image: "https://5.imimg.com/data5/SELLER/Default/2022/12/ED/JR/DL/108376694/cipmox-amoxicillin-250mg-capsules.png"
  },
};
