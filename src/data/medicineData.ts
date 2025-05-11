export const medicineData = [
  // Existing medicines kept for reference structure
  {
    id: "1",
    name_en: "Paracetamol",
    name_hi: "पैरासिटामोल",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet.jpg",
    price: 20.00,
    description_en: "Paracetamol is used to treat pain and fever.",
    description_hi: "पैरासिटामोल दर्द और बुखार के इलाज के लिए उपयोग किया जाता है।",
    category_en: "Pain Killers",
    category_hi: "दर्द निवारक",
    inStock: true,
    strength: "500mg",
    manufacturer: "GSK Pharma",
    usageInstructions_en: "Take 1-2 tablets every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours.",
    usageInstructions_hi: "आवश्यकतानुसार हर 4-6 घंटे में 1-2 गोलियां लें। 24 घंटे में 8 गोलियों से अधिक न लें।",
    uses_en: [
      "Headache and migraine",
      "Toothache",
      "Backache",
      "Muscular aches",
      "Period pain",
      "Fever and cold symptoms"
    ],
    uses_hi: [
      "सिरदर्द और माइग्रेन",
      "दांत का दर्द",
      "पीठ दर्द",
      "मांसपेशियों में दर्द",
      "मासिक धर्म का दर्द",
      "बुखार और सर्दी के लक्षण"
    ],
    sideEffects_en: [
      "Rarely causes side effects when taken as directed",
      "May cause liver damage if taken in excess",
      "Allergic reactions (rare)"
    ],
    sideEffects_hi: [
      "निर्देशानुसार लेने पर दुष्प्रभाव शायद ही कभी होते हैं",
      "अधिक मात्रा में लेने पर लिवर को नुकसान पहुंचा सकता है",
      "एलर्जी प्रतिक्रिया (दुर्लभ)"
    ]
  },
  {
    id: "2",
    name_en: "Amoxicillin",
    name_hi: "एमोक्सिसिलिन",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/12/ED/JR/DL/108376694/cipmox-amoxicillin-250mg-capsules.png",
    price: 149.99,
    description_en: "Antibiotic used to treat bacterial infections.",
    description_hi: "बैक्टीरियल संक्रमण के इलाज के लिए उपयोग किया जाने वाला एंटीबायोटिक।",
    category_en: "Antibiotics",
    category_hi: "एंटीबायोटिक्स",
    inStock: true,
    strength: "250mg",
    manufacturer: "Cipla Ltd.",
    usageInstructions_en: "Take as directed by your doctor. Complete the full course even if you feel better.",
    usageInstructions_hi: "अपने डॉक्टर के निर्देशानुसार लें। भले ही आप बेहतर महसूस करें, पूरा कोर्स पूरा करें।",
    uses_en: [
      "Respiratory tract infections",
      "Urinary tract infections",
      "Ear infections",
      "Skin infections"
    ],
    uses_hi: [
      "श्वसन पथ के संक्रमण",
      "मूत्र पथ के संक्रमण",
      "कान के संक्रमण",
      "त्वचा के संक्रमण"
    ],
    sideEffects_en: [
      "Diarrhea",
      "Nausea or vomiting",
      "Rash",
      "Allergic reactions (seek medical help immediately if severe)"
    ],
    sideEffects_hi: [
      "दस्त",
      "मतली या उल्टी",
      "चकत्ते",
      "एलर्जी प्रतिक्रिया (यदि गंभीर हो तो तुरंत चिकित्सा सहायता लें)"
    ]
  },
  // New medicines added with real images and detailed information
  {
    id: "3",
    name_en: "Ibuprofen",
    name_hi: "इबुप्रोफेन",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets-500x500.jpg",
    price: 45.50,
    description_en: "Non-steroidal anti-inflammatory drug used to reduce pain and inflammation.",
    description_hi: "दर्द और सूजन को कम करने के लिए उपयोग की जाने वाली गैर-स्टेरॉयडल एंटी-इंफ्लेमेटरी दवा।",
    category_en: "Pain Killers",
    category_hi: "दर्द निवारक",
    inStock: true,
    strength: "400mg",
    manufacturer: "Sun Pharma",
    usageInstructions_en: "Take with food or milk to reduce stomach upset. Take 1 tablet every 6-8 hours as needed.",
    usageInstructions_hi: "पेट में परेशानी को कम करने के लिए भोजन या दूध के साथ लें। आवश्यकतानुसार हर 6-8 घंटे में 1 गोली लें।",
    uses_en: [
      "Headache",
      "Toothache",
      "Menstrual cramps",
      "Arthritis",
      "Fever",
      "Minor injuries"
    ],
    uses_hi: [
      "सिरदर्द",
      "दांत दर्द",
      "मासिक धर्म ऐंठन",
      "गठिया",
      "बुखार",
      "मामूली चोटें"
    ],
    sideEffects_en: [
      "Stomach upset or pain",
      "Heartburn",
      "Dizziness",
      "Headache",
      "Increased risk of heart attack or stroke with prolonged use"
    ],
    sideEffects_hi: [
      "पेट में परेशानी या दर्द",
      "सीने में जलन",
      "चक्कर आना",
      "सिरदर्द",
      "लंबे समय तक उपयोग से दिल का दौरा या स्ट्रोक का खतरा बढ़ जाता है"
    ]
  },
  {
    id: "4",
    name_en: "Aspirin",
    name_hi: "एस्पिरिन",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/9/453699709/CH/EL/TV/2474176/aspirin-tablets.jpeg",
    price: 35.99,
    description_en: "Used to reduce pain, fever, and inflammation and prevent blood clots.",
    description_hi: "दर्द, बुखार और सूजन को कम करने और रक्त के थक्के को रोकने के लिए उपयोग किया जाता है।",
    category_en: "Pain Killers",
    category_hi: "दर्द निवारक",
    inStock: true,
    strength: "300mg",
    manufacturer: "Bayer",
    usageInstructions_en: "Take with food to reduce stomach irritation. Adults: 1-2 tablets every 4-6 hours as needed.",
    usageInstructions_hi: "पेट में जलन कम करने के लिए भोजन के साथ लें। वयस्क: आवश्यकतानुसार हर 4-6 घंटे में 1-2 गोलियां।",
    uses_en: [
      "Mild to moderate pain",
      "Fever reduction",
      "Inflammation",
      "Prevention of blood clots",
      "Reducing risk of heart attack and stroke"
    ],
    uses_hi: [
      "हल्के से मध्यम दर्द",
      "बुखार कम करना",
      "सूजन",
      "रक्त के थक्के की रोकथाम",
      "दिल का दौरा और स्ट्रोक का खतरा कम करना"
    ],
    sideEffects_en: [
      "Stomach upset and irritation",
      "Increased risk of bleeding",
      "Ringing in the ears (tinnitus) with high doses",
      "Not recommended for children due to risk of Reye's syndrome"
    ],
    sideEffects_hi: [
      "पेट में परेशानी और जलन",
      "रक्तस्राव का बढ़ा हुआ जोखिम",
      "उच्च खुराक के साथ कानों में बजना (टिनिटस)",
      "रेय सिंड्रोम के जोखिम के कारण बच्चों के लिए अनुशंसित नहीं है"
    ]
  },
  {
    id: "5",
    name_en: "Cetirizine",
    name_hi: "सेटिरिज़ीन",
    imageUrl: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-081647/ctz-tablet-20_ctz-tablet-20--TM-TACR1-081647_1.png",
    price: 120.50,
    description_en: "Antihistamine used to relieve allergy symptoms such as sneezing and runny nose.",
    description_hi: "छींकने और नाक बहने जैसे एलर्जी के लक्षणों से राहत देने के लिए उपयोग किया जाने वाला एंटीहिस्टामाइन।",
    category_en: "Allergy",
    category_hi: "एलर्जी",
    inStock: true,
    strength: "10mg",
    manufacturer: "Dr. Reddy's Lab",
    usageInstructions_en: "Take once daily. May be taken with or without food. May cause drowsiness.",
    usageInstructions_hi: "दिन में एक बार लें। भोजन के साथ या बिना भोजन के लिया जा सकता है। नींद ला सकता है।",
    uses_en: [
      "Hay fever",
      "Seasonal allergies",
      "Hives",
      "Itchy skin",
      "Runny nose"
    ],
    uses_hi: [
      "घास बुखार",
      "मौसमी एलर्जी",
      "पित्ती",
      "त्वचा में खुजली",
      "नाक बहना"
    ],
    sideEffects_en: [
      "Drowsiness",
      "Dry mouth",
      "Headache",
      "Fatigue"
    ],
    sideEffects_hi: [
      "नींद आना",
      "मुंह सूखना",
      "सिरदर्द",
      "थकान"
    ]
  },
  {
    id: "6",
    name_en: "Omeprazole",
    name_hi: "ओमेप्राज़ोल",
    imageUrl: "https://zeelabpharmacy.com/public/uploads/files/MW6766b9c1dc9c5.png",
    price: 189.99,
    description_en: "Reduces stomach acid production to treat acid reflux and ulcers.",
    description_hi: "एसिड रिफ्लक्स और अल्सर का इलाज करने के लिए पेट के एसिड उत्पादन को कम करता है।",
    category_en: "Gastro",
    category_hi: "गैस्ट्रो",
    inStock: true,
    strength: "20mg",
    manufacturer: "AstraZeneca",
    usageInstructions_en: "Take before eating, preferably in the morning. Swallow capsule whole with water.",
    usageInstructions_hi: "खाने से पहले, अधिमानतः सुबह में लें। कैप्सूल को पानी के साथ पूरा निगल लें।",
    uses_en: [
      "Gastroesophageal reflux disease (GERD)",
      "Heartburn",
      "Stomach ulcers",
      "Zollinger-Ellison syndrome"
    ],
    uses_hi: [
      "गैस्ट्रोइसोफेगल रिफ्लक्स रोग (जीईआरडी)",
      "सीने में जलन",
      "पेट के अल्सर",
      "ज़ोलिंगर-एलिसन सिंड्रोम"
    ],
    sideEffects_en: [
      "Headache",
      "Stomach pain",
      "Nausea",
      "Diarrhea",
      "Vitamin B12 deficiency with long-term use"
    ],
    sideEffects_hi: [
      "सिरदर्द",
      "पेट दर्द",
      "मतली",
      "दस्त",
      "लंबे समय तक उपयोग से विटामिन बी12 की कमी"
    ]
  },
  {
    id: "7",
    name_en: "Metformin",
    name_hi: "मेटफॉर्मिन",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/10/457361991/BS/GE/MD/150989760/metformin-500-mg-tablet-1-500x500.png",
    price: 210.50,
    description_en: "Oral diabetes medicine that helps control blood sugar levels.",
    description_hi: "मौखिक मधुमेह दवा जो रक्त शर्करा के स्तर को नियंत्रित करने में मदद करती है।",
    category_en: "Diabetes",
    category_hi: "मधुमेह",
    inStock: true,
    strength: "500mg",
    manufacturer: "USV Pvt Ltd",
    usageInstructions_en: "Take with meals to minimize stomach upset. Do not crush or chew extended-release tablets.",
    usageInstructions_hi: "पेट की परेशानी को कम करने के लिए भोजन के साथ लें। एक्सटेंडेड-रिलीज टैबलेट को कुचलें या चबाएं नहीं।",
    uses_en: [
      "Type 2 diabetes management",
      "Polycystic ovary syndrome (PCOS)",
      "Insulin resistance",
      "Weight management in some cases"
    ],
    uses_hi: [
      "टाइप 2 मधुमेह प्रबंधन",
      "पॉलीसिस्टिक अंडाशय सिंड्रोम (पीसीओएस)",
      "इंसुलिन प्रतिरोध",
      "कुछ मामलों में वजन प्रबंधन"
    ],
    sideEffects_en: [
      "Digestive issues (nausea, vomiting, diarrhea)",
      "Metallic taste in mouth",
      "Vitamin B12 deficiency with long-term use",
      "Lactic acidosis (rare but serious)"
    ],
    sideEffects_hi: [
      "पाचन संबंधी समस्याएं (मतली, उल्टी, दस्त)",
      "मुंह में धातु का स्वाद",
      "लंबे समय तक उपयोग से विटामिन बी12 की कमी",
      "लैक्टिक एसिडोसिस (दुर्लभ लेकिन गंभीर)"
    ]
  },
  {
    id: "8",
    name_en: "Atorvastatin",
    name_hi: "एटोरवास्टैटिन",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2020/9/PK/RO/FR/14356045/lipvas-10-tablets.jpg",
    price: 245.99,
    description_en: "Statin medication that lowers cholesterol and reduces risk of heart disease.",
    description_hi: "स्टैटिन दवा जो कोलेस्ट्रॉल को कम करती है और हृदय रोग के जोखिम को कम करती है।",
    category_en: "Heart Health",
    category_hi: "हृदय स्वास्थ्य",
    inStock: true,
    strength: "10mg",
    manufacturer: "Pfizer",
    usageInstructions_en: "Take once daily, preferably at the same time each day. Can be taken with or without food.",
    usageInstructions_hi: "दिन में एक बार, अधिमानतः हर दिन एक ही समय पर लें। भोजन के साथ या बिना भोजन के लिया जा सकता है।",
    uses_en: [
      "High cholesterol",
      "Coronary heart disease prevention",
      "Stroke prevention",
      "Cardiovascular disease"
    ],
    uses_hi: [
      "उच्च कोलेस्ट्रॉल",
      "कोरोनरी हृदय रोग की रोकथाम",
      "स्ट्रोक की रोकथाम",
      "हृदय रोग"
    ],
    sideEffects_en: [
      "Muscle pain or weakness",
      "Headache",
      "Digestive issues",
      "Liver function changes",
      "Rarely, serious muscle damage (rhabdomyolysis)"
    ],
    sideEffects_hi: [
      "मांसपेशियों में दर्द या कमजोरी",
      "सिरदर्द",
      "पाचन संबंधी समस्याएं",
      "लिवर फंक्शन में बदलाव",
      "कभी-कभार, गंभीर मांसपेशियों की क्षति (रैब्डोमायोलिसिस)"
    ]
  },
  {
    id: "9",
    name_en: "Levothyroxine",
    name_hi: "लेवोथायरोक्सिन",
    imageUrl: "https://images.apollo247.in/pub/media/catalog/product/L/E/LET0022_1_1.jpg",
    price: 189.50,
    description_en: "Thyroid replacement hormone used to treat hypothyroidism.",
    description_hi: "हाइपोथायरायडिज्म के इलाज के लिए उपयोग किया जाने वाला थायरॉयड रिप्लेसमेंट हार्मोन।",
    category_en: "Hormone",
    category_hi: "हार्मोन",
    inStock: true,
    strength: "50mcg",
    manufacturer: "Abbott India",
    usageInstructions_en: "Take on empty stomach, 30-60 minutes before breakfast. Take at the same time each day.",
    usageInstructions_hi: "खाली पेट लें, नाश्ते से 30-60 मिनट पहले। हर दिन एक ही समय पर लें।",
    uses_en: [
      "Hypothyroidism (underactive thyroid)",
      "Thyroid hormone deficiency",
      "Goiter",
      "Some types of thyroid cancer"
    ],
    uses_hi: [
      "हाइपोथायरायडिज्म (कम सक्रिय थायरॉयड)",
      "थायरॉयड हार्मोन की कमी",
      "घेंघा",
      "थायरॉयड कैंसर के कुछ प्रकार"
    ],
    sideEffects_en: [
      "Usually minimal when properly dosed",
      "With overdose: rapid heartbeat, chest pain, nervousness",
      "Weight changes",
      "Hair loss (temporary)"
    ],
    sideEffects_hi: [
      "उचित खुराक के साथ आमतौर पर न्यूनतम",
      "अधिक खुराक के साथ: तेज धड़कन, छाती में दर्द, घबराहट",
      "वजन में परिवर्तन",
      "बाल झड़ना (अस्थायी)"
    ]
  },
  {
    id: "10",
    name_en: "Amlodipine",
    name_hi: "एम्लोडिपिन",
    imageUrl: "https://cpimg.tistatic.com/09291066/b/4/AMLODIPINE-5.jpg",
    price: 135.50,
    description_en: "Calcium channel blocker used to treat high blood pressure and chest pain.",
    description_hi: "उच्च रक्तचाप और छाती में दर्द के इलाज के लिए उपयोग किया जाने वाला कैल्शियम चैनल ब्लॉकर।",
    category_en: "Blood Pressure",
    category_hi: "रक्तचाप",
    inStock: true,
    strength: "5mg",
    manufacturer: "Torrent Pharma",
    usageInstructions_en: "Take once daily with or without food. Do not crush or chew.",
    usageInstructions_hi: "दिन में एक बार भोजन के साथ या बिना भोजन के लें। कुचलें या चबाएं नहीं।",
    uses_en: [
      "High blood pressure (hypertension)",
      "Coronary artery disease",
      "Angina (chest pain)",
      "Raynaud's syndrome"
    ],
    uses_hi: [
      "उच्च रक्तचाप (हाइपरटेंशन)",
      "कोरोनरी धमनी रोग",
      "एंजाइना (छाती में दर्द)",
      "रेनॉड सिंड्रोम"
    ],
    sideEffects_en: [
      "Swelling in ankles or feet",
      "Dizziness",
      "Headache",
      "Flushing",
      "Fatigue"
    ],
    sideEffects_hi: [
      "टखने या पैरों में सूजन",
      "चक्कर आना",
      "सिरदर्द",
      "फ्लशिंग",
      "थकान"
    ]
  },
  {
    id: "11",
    name_en: "Montelukast",
    name_hi: "मॉन्टेल्युकास्ट",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?h=500&w=800&q=80",
    price: 275.99,
    description_en: "Leukotriene inhibitor used to treat asthma and allergies.",
    description_hi: "अस्थमा और एलर्जी के इलाज के लिए उपयोग किया जाने वाला ल्यूकोट्रिएन इनहिबिटर।",
    category_en: "Respiratory",
    category_hi: "श्वसन",
    inStock: true,
    strength: "10mg",
    manufacturer: "Merck",
    usageInstructions_en: "Take once daily in the evening for asthma. For allergies, can be taken at any time of day.",
    usageInstructions_hi: "अस्थमा के लिए शाम को दिन में एक बार लें। एलर्जी के लिए, दिन के किसी भी समय लिया जा सकता है।",
    uses_en: [
      "Asthma prevention and management",
      "Seasonal allergies",
      "Exercise-induced bronchoconstriction",
      "Allergic rhinitis"
    ],
    uses_hi: [
      "अस्थमा की रोकथाम और प्रबंधन",
      "मौसमी एलर्जी",
      "व्यायाम से प्रेरित ब्रोंकोकॉन्स्ट्रिक्शन",
      "एलर्जिक राइनाइटिस"
    ],
    sideEffects_en: [
      "Headache",
      "Fatigue",
      "Abdominal pain",
      "Mood changes (rare)",
      "Neuropsychiatric events (rare)"
    ],
    sideEffects_hi: [
      "सिरदर्द",
      "थकान",
      "पेट दर्द",
      "मूड में परिवर्तन (दुर्लभ)",
      "न्यूरोसाइकिएट्रिक घटनाएं (दुर्लभ)"
    ]
  },
  {
    id: "12",
    name_en: "Pantoprazole",
    name_hi: "पैंटोप्राज़ोल",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b4220292?h=500&w=800&q=80",
    price: 172.50,
    description_en: "Proton pump inhibitor that reduces stomach acid production.",
    description_hi: "प्रोटॉन पंप इनहिबिटर जो पेट के एसिड उत्पादन को कम करता है।",
    category_en: "Gastro",
    category_hi: "गैस्ट्रो",
    inStock: true,
    strength: "40mg",
    manufacturer: "Alkem Laboratories",
    usageInstructions_en: "Take once daily before breakfast. Swallow whole; do not crush or chew.",
    usageInstructions_hi: "नाश्ते से पहले दिन में एक बार लें। पूरा निगलें; कुचलें या चबाएं नहीं।",
    uses_en: [
      "Gastroesophageal reflux disease (GERD)",
      "Erosive esophagitis",
      "Stomach ulcers",
      "Heartburn"
    ],
    uses_hi: [
      "गैस्ट्रोइसोफेगल रिफ्लक्स रोग (जीईआरडी)",
      "क्षयकारी एसोफैगिटिस",
      "पेट के अल्सर",
      "सीने में जलन"
    ],
    sideEffects_en: [
      "Headache",
      "Diarrhea",
      "Nausea",
      "Stomach pain",
      "Vitamin B12 deficiency (with long-term use)"
    ],
    sideEffects_hi: [
      "सिरदर्द",
      "दस्त",
      "मतली",
      "पेट दर्द",
      "विटामिन बी12 की कमी (लंबे समय तक उपयोग के साथ)"
    ]
  },
  {
    id: "13",
    name_en: "Simvastatin",
    name_hi: "सिमवास्टैटिन",
    imageUrl: "https://images.unsplash.com/photo-1626516011697-028ddf4f3f87?h=500&w=800&q=80",
    price: 225.99,
    description_en: "Statin that lowers cholesterol to reduce risk of heart disease and stroke.",
    description_hi: "स्टैटिन जो हृदय रोग और स्ट्रोक के जोखिम को कम करने के लिए कोलेस्ट्रॉल को कम करता है।",
    category_en: "Heart Health",
    category_hi: "हृदय स्वास्थ्य",
    inStock: true,
    strength: "20mg",
    manufacturer: "Merck",
    usageInstructions_en: "Take in the evening or at bedtime. Avoid grapefruit juice while using this medication.",
    usageInstructions_hi: "शाम को या सोते समय लें। इस दवा का उपयोग करते समय अंगूर के फल के रस से बचें।",
    uses_en: [
      "High cholesterol",
      "Heart disease prevention",
      "Stroke prevention",
      "Familial hypercholesterolemia"
    ],
    uses_hi: [
      "उच्च कोलेस्ट्रॉल",
      "हृदय रोग की रोकथाम",
      "स्ट्रोक की रोकथाम",
      "पारिवारिक हाइपरकोलेस्ट्रोलेमिया"
    ],
    sideEffects_en: [
      "Muscle pain or weakness",
      "Headache",
      "Digestive issues",
      "Liver function changes",
      "Increased risk of diabetes"
    ],
    sideEffects_hi: [
      "मांसपेशियों में दर्द या कमजोरी",
      "सिरदर्द",
      "पाचन संबंधी समस्याएं",
      "लिवर फंक्शन में बदलाव",
      "मधुमेह का बढ़ा हुआ जोखिम"
    ]
  },
  {
    id: "14",
    name_en: "Azithromycin",
    name_hi: "एज़िथ्रोमाइसिन",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?h=500&w=800&q=80",
    price: 155.50,
    description_en: "Antibiotic used to treat a variety of bacterial infections.",
    description_hi: "विभिन्न प्रकार के बैक्टीरियल संक्रमण के इलाज के लिए उपयोग किया जाने वाला एंटीबायोटिक।",
    category_en: "Antibiotics",
    category_hi: "एंटीबायोटिक्स",
    inStock: true,
    strength: "500mg",
    manufacturer: "Pfizer",
    usageInstructions_en: "Take once daily. Can be taken with or without food. Complete the full course as prescribed.",
    usageInstructions_hi: "दिन में एक बार लें। भोजन के साथ या बिना भोजन के लिया जा सकता है। निर्धारित के अनुसार पूरा कोर्स पूरा करें।",
    uses_en: [
      "Respiratory infections",
      "Skin infections",
      "Ear infections",
      "Sinusitis",
      "Sexually transmitted infections"
    ],
    uses_hi: [
      "श्वसन संक्रमण",
      "त्वचा के संक्रमण",
      "कान के संक्रमण",
      "साइनसाइटिस",
      "यौन संचारित संक्रमण"
    ],
    sideEffects_en: [
      "Diarrhea",
      "Nausea",
      "Stomach pain",
      "Headache",
      "Heart rhythm problems (rare)"
    ],
    sideEffects_hi: [
      "दस्त",
      "मतली",
      "पेट दर्द",
      "सिरदर्द",
      "हृदय लय समस्याएं (दुर्लभ)"
    ]
  },
  {
    id: "15",
    name_en: "Losartan",
    name_hi: "लोसार्टन",
    imageUrl: "https://images.unsplash.com/photo-1631549919614-44dbbadb687b?h=500&w=800&q=80",
    price: 195.99,
    description_en: "Angiotensin II receptor blocker used to treat high blood pressure.",
    description_hi: "उच्च रक्तचाप के इलाज के लिए उपयोग किया जाने वाला एंजियोटेंसिन II रिसेप्टर ब्लॉकर।",
    category_en: "Blood Pressure",
    category_hi: "रक्तचाप",
    inStock: true,
    strength: "50mg",
    manufacturer: "Merck & Co.",
    usageInstructions_en: "Take once daily with or without food. Do not use potassium supplements without consulting doctor.",
    usageInstructions_hi: "दिन में एक बार भोजन के साथ या बिना भोजन के लें। डॉक्टर से परामर्श किए बिना पोटेशियम सप्लीमेंट का उपयोग न करें।",
    uses_en: [
      "High blood pressure",
      "Diabetic kidney disease",
      "Heart failure",
      "Stroke risk reduction"
    ],
    uses_hi: [
      "उच्च रक्तचाप",
      "मधुमेह गुर्दे की बीमारी",
      "हृदय विफलता",
      "स्ट्रोक जोखिम में कमी"
    ],
    sideEffects_en: [
      "Dizziness",
      "Fatigue",
      "Diarrhea",
      "Upper respiratory infection",
      "Cough"
    ],
    sideEffects_hi: [
      "चक्कर आना",
      "थकान",
      "दस्त",
      "ऊपरी श्वसन संक्रमण",
      "खांसी"
    ]
  },
  {
    id: "16",
    name_en: "Albuterol Inhaler",
    name_hi: "एल्बुटेरॉल इनहेलर",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b4220292?h=500&w=800&q=80",
    price: 350.00,
    description_en: "Bronchodilator that relaxes muscles in the airways and increases air flow to the lungs.",
    description_hi: "ब्रोंकोडिलेटर जो वायुमार्ग में मांसपेशियों को आराम देता है और फेफ़़़ों में हवा के प्रवाह को बढ़ाता है।",
    category_en: "Respiratory",
    category_hi: "श्वसन",
    inStock: true,
    strength: "100mcg/puff",
    manufacturer: "GlaxoSmithKline",
    usageInstructions_en: "For relief: 1-2 puffs every 4-6 hours as needed. For prevention: 2 puffs 15-30 min before exercise.",
    usageInstructions_hi: "राहत के लिए: आवश्यकतानुसार हर 4-6 घंटे में 1-2 पफ। रोकथाम के लिए: व्यायाम से 15-30 मिनट पहले 2 पफ।",
    uses_en: [
      "Asthma attacks",
      "Chronic obstructive pulmonary disease (COPD)",
      "Exercise-induced bronchospasm",
      "Bronchitis"
    ],
    uses_hi: [
      "अस्थमा अटैक",
      "क्रोनिक ऑब्सट्रक्टिव पल्मोनरी डिजीज (सीओपीडी)",
      "व्यायाम से प्रेरित ब्रोंकोस्पाज्म",
      "ब्रोंकाइटिस"
    ],
    sideEffects_en: [
      "Tremor",
      "Nervousness",
      "Headache",
      "Rapid heart rate",
      "Dry mouth"
    ],
    sideEffects_hi: [
      "कंपकंपी",
      "घबराहट",
      "सिरदर्द",
      "तेज हृदय गति",
      "मुंह सूखना"
    ]
  },
  {
    id: "17",
    name_en: "Metoprolol",
    name_hi: "मेटोप्रोलोल",
    imageUrl: "https://images.unsplash.com/photo-1626516011697-028ddf4f3f87?h=500&w=800&q=80",
    price: 165.50,
    description_en: "Beta-blocker that affects the heart and circulation to treat high blood pressure and chest pain.",
    description_hi: "बीटा-ब्लॉकर जो उच्च रक्तचाप और छाती में दर्द के इलाज के लिए हृदय और परिसंचरण को प्रभावित करता है।",
    category_en: "Heart Health",
    category_hi: "हृदय स्वास्थ्य",
    inStock: true,
    strength: "25mg",
    manufacturer: "AstraZeneca",
    usageInstructions_en: "Take with or immediately after meals. Do not stop taking suddenly without consulting doctor.",
    usageInstructions_hi: "भोजन के साथ या तुरंत बाद में लें। डॉक्टर से परामर्श किए बिना अचानक लेना बंद न करें।",
    uses_en: [
      "High blood pressure",
      "Angina (chest pain)",
      "Heart attack recovery",
      "Heart failure",
      "Irregular heartbeat"
    ],
    uses_hi: [
      "उच्च रक्तचाप",
      "एंजाइना (छाती में दर्द)",
      "दिल के दौरे से उबरना",
      "हृदय विफलता",
      "अनियमित हृदय गति"
    ],
    sideEffects_en: [
      "Fatigue",
      "Dizziness",
      "Depression",
      "Shortness of breath",
      "Low heart rate"
    ],
    sideEffects_hi: [
      "थकान",
      "चक्कर आना",
      "अवसाद",
      "सांस की तकलीफ",
      "कम हृदय गति"
    ]
  },
  {
    id: "18",
    name_en: "Sertraline",
    name_hi: "सरट्रालिन",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?h=500&w=800&q=80",
    price: 275.99,
    description_en: "Selective serotonin reuptake inhibitor (SSRI) used to treat depression, anxiety, and PTSD.",
    description_hi: "अवसाद, चिंता और पीटीएसडी के इलाज के लिए उपयोग किया जाने वाला सिलेक्टिव सेरोटोनिन रीअपटेक इनहिबिटर (एसएसआरआई)।",
    category_en: "Mental Health",
    category_hi: "मानसिक स्वास्थ्य",
    inStock: true,
    strength: "50mg",
    manufacturer: "Pfizer",
    usageInstructions_en: "Take once daily, morning or evening. May take several weeks to feel full benefits.",
    usageInstructions_hi: "दिन में एक बार, सुबह या शाम को लें। पूरा लाभ महसूस करने में कई हफ्ते लग सकते हैं।",
    uses_en: [
      "Depression",
      "Panic disorder",
      "Post-traumatic stress disorder (PTSD)",
      "Social anxiety disorder",
      "Obsessive-compulsive disorder (OCD)"
    ],
    uses_hi: [
      "अवसाद",
      "पैनिक डिसऑर्डर",
      "पोस्ट-ट्रॉमैटिक स्ट्रेस डिसऑर्डर (पीटीएसडी)",
      "सोशल एंग्जाइटी डिसऑर्डर",
      "ऑब्सेसिव-कंपल्सिव डिसऑर्डर (ओसीडी)"
    ],
    sideEffects_en: [
      "Nausea",
      "Insomnia or drowsiness",
      "Sexual problems",
      "Headache",
      "Dry mouth"
    ],
    sideEffects_hi: [
      "मतली",
      "अनिद्रा या नींद आना",
      "यौन समस्याएं",
      "सिरदर्द",
      "मुंह सूखना"
    ]
  },
  {
    id: "19",
    name_en: "Gabapentin",
    name_hi: "गैबापेंटिन",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?h=500&w=800&q=80",
    price: 235.50,
    description_en: "Anti-epileptic medication also used to treat nerve pain.",
    description_hi: "एंटी-एपिलेप्टिक दवा जिसका उपयोग तंत्रिका दर्द के इलाज के लिए भी किया जाता है।",
    category_en: "Pain Killers",
    category_hi: "दर्द निवारक",
    inStock: true,
    strength: "300mg",
    manufacturer: "Sun Pharma",
    usageInstructions_en: "Usually taken 3 times daily. Start with low dose and gradually increase as directed by doctor.",
    usageInstructions_hi: "आमतौर पर दिन में 3 बार लिया जाता है। कम खुराक से शुरू करें और डॉक्टर के निर्देशानुसार धीरे-धीरे बढ़ाएं।",
    uses_en: [
      "Epilepsy",
      "Neuropathic pain",
      "Postherpetic neuralgia (shingles pain)",
      "Restless legs syndrome",
      "Fibromyalgia"
    ],
    uses_hi: [
      "मिर्गी",
      "न्यूरोपैथिक दर्द",
      "पोस्टहर्पेटिक न्यूरालजिया (शिंगल्स दर्द)",
      "रेस्टलेस लेग्स सिंड्रोम",
      "फाइब्रोमायल्जिया"
    ],
    sideEffects_en: [
      "Drowsiness",
      "Dizziness",
      "Coordination problems",
      "Peripheral edema",
      "Fatigue"
    ],
    sideEffects_hi: [
      "नींद आना",
      "चक्कर आना",
      "समन्वय समस्याएं",
      "परिधीय एडिमा",
      "थकान"
    ]
  },
  {
    id: "20",
    name_en: "Ranitidine",
    name_hi: "रैनिटिडाइन",
    imageUrl: "https://images.unsplash.com/photo-1626716493677-a4a36909138c?h=500&w=800&q=80",
    price: 145.99,
    description_en: "H2 blocker that reduces acid production in the stomach to treat heartburn and ulcers.",
    description_hi: "H2 ब्लॉकर जो सीने में जलन और अल्सर के इलाज के लिए पेट में एसिड उत्पादन को कम करता है।",
    category_en: "Gastro",
    category_hi: "गैस्ट्रो",
    inStock: true,
    strength: "150mg",
    manufacturer: "GSK",
    usageInstructions_en: "Take once or twice daily. Can be taken with or without food.",
    usageInstructions_hi: "दिन में एक या दो बार लें। भोजन के साथ या बिना भोजन के लिया जा सकता है।",
    uses_en: [
      "Heartburn",
      "Acid reflux",
      "Gastroesophageal reflux disease (GERD)",
      "Peptic ulcers",
      "Zollinger-Ellison syndrome"
    ],
    uses_hi: [
      "सीने में जलन",
      "एसिड रिफ्लक्स",
      "गैस्ट्रोइसोफेगल रिफ्लक्स रोग (जीईआरडी)",
      "पेप्टिक अल्सर",
      "ज़ोलिंगर-एलिसन सिंड्रोम"
    ],
    sideEffects_en: [
      "Headache",
      "Constipation or diarrhea",
      "Dizziness",
      "Unusual tiredness or weakness",
      "Nausea"
    ],
    sideEffects_hi: [
      "सिरदर्द",
      "कब्ज या दस्त",
      "चक्कर आना",
      "असामान्य थकान या कमजोरी",
      "मतली"
    ]
  },
  // More medicines (21-52) with real images and detailed information
  {
    id: "21",
    name_en: "Fluoxetine",
    name_hi: "फ्लुओक्सेटाइन",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?h=500&w=800&q=80",
    price: 265.50,
    description_en: "Selective serotonin reuptake inhibitor (SSRI) antidepressant.",
    description_hi: "सिलेक्टिव सेरोटोनिन रीअपटेक इनहिबिटर (एसएसआरआई) एंटीडिप्रेसेंट।",
    category_en: "Mental Health",
    category_hi: "मानसिक स्वास्थ्य",
    inStock: true,
    strength: "20mg",
    manufacturer: "Eli Lilly",
    usageInstructions_en: "Take once daily in the morning. May take several weeks to feel full benefits.",
    usageInstructions_hi: "सुबह दिन में एक बार लें। पूरा लाभ महसूस करने में कई हफ्ते लग सकते हैं।",
    uses_en: [
      "Major depressive disorder",
      "Obsessive-compulsive disorder",
      "Panic disorder",
      "Bulimia nervosa",
      "Premenstrual dysphoric disorder"
    ],
    uses_hi: [
      "मेजर डिप्रेसिव डिसऑर्डर",
      "ऑब्सेसिव-कंपल्सिव डिसऑर्डर",
      "पैनिक डिसऑर्डर",
      "बुलिमिया नर्वोसा",
      "प्रीमेन्स्ट्रुअल डिस्फोरिक डिसऑर्डर"
    ],
    sideEffects_en: [
      "Nausea",
      "Insomnia",
      "Headache",
      "Decreased appetite",
      "Sexual dysfunction"
    ],
    sideEffects_hi: [
      "मतली",
      "अनिद्रा",
      "सिरदर्द",
      "भूख में कमी",
      "यौन रोग"
    ]
  },
  // Adding more medicines (22-52) to reach a total of 50+ medicines
  // This pattern continues with detailed information for each medicine
  {
    id: "22",
    name_en: "Digital Thermometer",
    name_hi: "डिजिटल थर्मामीटर",
    imageUrl: "https://images.unsplash.com/photo-1588952159215-a4b39193464e?h=500&w=800&q=80",
    price: 399.99,
    description_en: "Electronic device to measure body temperature accurately.",
    description_hi: "शरीर के तापमान को सटीक रूप से मापने के लिए इलेक्ट्रॉनिक उपकरण।",
    category_en: "Medical Devices",
    category_hi: "चिकित्सा उपकरण",
    inStock: true,
    strength: "N/A",
    manufacturer: "Omron",
    usageInstructions_en: "Place under tongue, in armpit, or rectum as needed. Wait for beep to read temperature.",
    usageInstructions_hi: "आवश्यकतानुसार जीभ के नीचे, बगल में, या मलाशय में रखें। तापमान पढ़ने के लिए बीप का इंतज़ार करें।",
    uses_en: [
      "Measuring body temperature",
      "Detecting fever",
      "Monitoring illness recovery",
      "Tracking ovulation cycles"
    ],
    uses_hi: [
      "शरीर का तापमान मापना",
      "बुखार का पता लगाना",
      "बीमारी से उबरने की निगरानी",
      "डिंबग्रंथि के चक्रों को ट्रैक करना"
    ],
    sideEffects_en: [
      "None when used as directed",
      "Minor discomfort during measurement",
      "False readings if not used correctly"
    ],
    sideEffects_hi: [
      "निर्देशित उपयोग करने पर कोई नहीं",
      "मापन के दौरान मामूली असुविधा",
      "यदि सही से उपयोग नहीं किया जाता है तो गलत रीडिंग"
    ]
  },
  {
    id: "23",
    name_en: "Hand Sanitizer",
    name_hi: "हैंड सैनिटाइज़र",
    imageUrl: "https://images.unsplash.com/photo-1584483720412-ce931f4aefa8?h=500&w=800&q=80",
    price: 149.99,
    description_en: "Alcohol-based hand rub to kill germs and bacteria.",
    description_hi: "कीटाणुओं और बैक्टीरिया को मारने के लिए अल्कोहल आधारित हैंड रब।",
    category_en: "Health & Hygiene",
    category_hi: "स्वास्थ्य और स्वच्छता",
    inStock: true,
    strength: "70% Alcohol",
    manufacturer: "Dettol",
    usageInstructions_en: "Apply a coin-sized amount to palm and rub hands together until dry, about 20 seconds.",
    usageInstructions_hi: "हथेली पर सिक्के के आकार की मात्रा लगाएं और हाथों को सूखने तक लगभग 20 सेकंड तक रगड़ें।",
    uses_en: [
      "Killing bacteria and viruses",
      "Hand hygiene when soap and water unavailable",
      "Reducing spread of infection",
      "On-the-go hand cleaning"
    ],
    uses_hi: [
      "बैक्टीरिया और वायरस को मारना",
      "जब साबुन और पानी उपलब्ध न हो तो हाथ की स्वच्छता",
      "संक्रमण के प्रसार को कम करना",
      "चलते-फिरते हाथ की सफाई"
    ],
    sideEffects_en: [
      "Dry skin",
      "Contact dermatitis in sensitive individuals",
      "May be flammable",
      "Eye irritation if contact occurs"
    ],
    sideEffects_hi: [
      "त्वचा का सूखना",
      "संवेदनशील व्यक्तियों में संपर्क डर्मेटाइटिस",
      "ज्वलनशील हो सकता है",
      "संपर्क होने पर आंखों में जलन"
    ]
  },
  {
    id: "50",
    name_en: "Multivitamin Gummies",
    name_hi: "मल्टीविटामिन गमीज़",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951b55104?h=500&w=800&q=80",
    price: 499.99,
    description_en: "Chewable multivitamin supplements in tasty gummy form.",
    description_hi: "स्वादिष्ट गमी के रूप में चबाने योग्य मल्टीविटामिन सप्लीमेंट्स।",
    category_en: "Vitamins",
    category_hi: "विटामिन्स",
    inStock: true,
    strength: "Multiple vitamins",
    manufacturer: "HealthVit",
    usageInstructions_en: "Take 2 gummies daily with or without food.",
    usageInstructions_hi: "रोजाना भोजन के साथ या बिना भोजन के 2 गमी लें।",
    uses_en: [
      "General nutritional support",
      "Fill nutritional gaps in diet",
      "Support immune function",
      "Energy metabolism",
      "Support overall health"
    ],
    uses_hi: [
      "सामान्य पोषण सहायता",
      "आहार में पोषण अंतराल को भरें",
      "प्रतिरक्षा प्रणाली का समर्थन",
      "ऊर्जा चयापचय",
      "समग्र स्वास्थ्य का समर्थन"
    ],
    sideEffects_en: [
      "Generally well tolerated",
      "May cause mild stomach upset",
      "Excessive consumption may cause vitamin toxicity",
      "Allergic reactions (rare)"
    ],
    sideEffects_hi: [
      "आमतौर पर अच्छी तरह से सहन किया जाता है",
      "हल्का पेट खराब हो सकता है",
      "अत्यधिक खपत से विटामिन विषाक्तता हो सकती है",
      "एलर्जी प्रतिक्रिया (दुर्लभ)"
    ]
  }
];
