/* ========================================
   YOJANALINK - GOVERNMENT SCHEMES APP
   JavaScript - All Functionality
   ======================================== */

// ========================================
// DATA - Government Schemes Database
// ========================================

const governmentSchemes = [
   {
  id: 1,
  title: 'डॉ. बाबासाहेब आंबेडकर कृषी स्वावलंबन योजना',
  description: 'अनुसूचित जाती व नवबौद्ध शेतकऱ्यांना शेतीसाठी सिंचन सुविधा उपलब्ध करून देणारी योजना',
  badge: null,
  category: 'कृषी',
  tags: ['शेती', 'सिंचन', 'विहीर', 'अनुदान'],
  eligibility: 'अनुसूचित जाती / नवबौद्ध शेतकरी. नवीन विहिरीसाठी किमान 0.40 हेक्टर जमीन आवश्यक असून योजनेअंतर्गत कमाल 6 हेक्टर जमीन मर्यादा आहे.',
  about: 'ही योजना अनुसूचित जाती व नवबौद्ध शेतकऱ्यांना शेतीसाठी सिंचनाच्या सुविधा उपलब्ध करून देण्यासाठी आर्थिक सहाय्य देते.',
  benefits: [
    'नवीन विहिरीसाठी आर्थिक सहाय्य',
    'जुन्या विहिरीची दुरुस्ती',
    'विहिरीतील बोअरिंग',
    'पंप संचासाठी सहाय्य',
    'वीज जोडणीसाठी सहाय्य',
    'शेततळ्याच्या प्लास्टिक अस्तरीकरणासाठी सहाय्य',
    'ठिबक सिंचनासाठी सहाय्य',
    'तुषार सिंचनासाठी सहाय्य'
  ],
  documents: [
    '7/12 उतारा',
    '8-A उतारा',
    'आधार कार्ड',
    'जात प्रमाणपत्र',
    'आधार संलग्न बँक खाते'
  ],
  process: '1. योजनेसाठी अर्ज करा\n2. आवश्यक कागदपत्रे सादर करा\n3. पात्र लाभार्थ्यांची निवड केली जाते\n4. निवड झाल्यानंतर संबंधित घटकासाठी प्रक्रिया पूर्ण करा',
  website: 'mahadbt.maharashtra.gov.in'
},
{
  id: 9,
  title: 'भाऊसाहेब फुंडकर फळबाग लागवड योजना',
  description: 'शेतकऱ्यांना फळबाग लागवडीसाठी आर्थिक सहाय्य देणारी योजना',
  badge: null,
  category: 'कृषी',
  tags: ['शेती', 'फळबाग', 'लागवड', 'अनुदान'],
  eligibility: 'फळबाग लागवडीसाठी शासनाने निश्चित केलेल्या पात्रता अटी पूर्ण करणारे शेतकरी.',
  about: 'ही योजना शेतकऱ्यांना फळबाग लागवड करण्यासाठी प्रोत्साहन व आर्थिक सहाय्य देण्यासाठी आहे.',
  benefits: [
    'फळबाग लागवडीसाठी आर्थिक सहाय्य',
    'फळझाडांच्या लागवडीसाठी सहाय्य',
    'फळबाग विकसित करण्यासाठी प्रोत्साहन'
  ],
  documents: [
    'आधार कार्ड',
    '7/12 उतारा',
    '8-A उतारा',
    'बँक खाते तपशील'
  ],
  process: '1. योजनेसाठी अर्ज करा\n2. आवश्यक कागदपत्रे सादर करा\n3. अर्जाची पडताळणी केली जाते\n4. पात्र लाभार्थ्यांची निवड होते\n5. मंजुरीनंतर फळबाग लागवडीची प्रक्रिया पूर्ण करा',
  website: null
},
  {
    id: 2,
    title: 'आयुष्मान भारत योजना',
    description: '5 लाख रुपये तक की स्वास्थ्य बीमा कवरेज',
    badge: 'NEW',
    category: 'स्वास्थ्य',
    tags: ['स्वास्थ्य', 'बीमा'],
    eligibility: 'निचली आय वर्ग के परिवार',
    about: 'आयुष्मान भारत योजना भारत के गरीब परिवारों को ₹5 लाख तक की स्वास्थ्य बीमा सुविधा प्रदान करती है।',
    benefits: [
      '₹5 लाख तक की बीमा कवरेज',
      '700+ निजी अस्पताल में इलाज',
      'कैशलेस उपचार'
    ],
    documents: ['राशन कार्ड', 'आधार कार्ड', 'मोबाइल नंबर'],
    process: '1. पात्रता जांचें\n2. नजदीकी आरोग्य मित्र से संपर्क करें\n3. दस्तावेज सत्यापित करें\n4. प्राप्ति पत्र लें',
    website: 'www.pmjay.gov.in'
  },
  {
    id: 3,
    title: 'स्कूल स्कॉलरशिप योजना',
    description: 'माध्यमिक छात्रों के लिए 12,000 रुपये तक छात्रवृत्ति',
    badge: 'NEW',
    category: 'शिक्षा',
    tags: ['छात्र', 'शिक्षा'],
    eligibility: '9वीं से 12वीं तक की छात्राएं',
    about: 'यह योजना गरीब और मेधावी छात्रों को शिक्षा जारी रखने के लिए वित्तीय सहायता प्रदान करती है।',
    benefits: [
      '₹12,000 सालाना छात्रवृत्ति',
      'किताब और ड्रेस के लिए अतिरिक्त राशि',
      'परीक्षा शुल्क में छूट'
    ],
    documents: ['स्कूल प्रमाण पत्र', 'आधार कार्ड', 'आय प्रमाण पत्र'],
    process: '1. स्कूल में आवेदन करें\n2. आवश्यक दस्तावेज जमा करें\n3. मेरिट के आधार पर चयन\n4. खाते में सहायता की जमा',
    website: 'www.scholarships.gov.in'
  },
  {
    id: 4,
    title: 'प्रधानमंत्री आवास योजना',
    description: 'गरीब लोगों के लिए सस्ते घर',
    badge: null,
    category: 'आवास',
    tags: ['मकान', 'आवास'],
    eligibility: 'EWS और LIG श्रेणी के परिवार',
    about: 'यह योजना गरीब और निम्न आय वर्ग के परिवारों को किफायती मूल्य पर आवास प्रदान करती है।',
    benefits: [
      'सब्सिडी वाली कीमत पर मकान',
      'आसान ऋण की सुविधा',
      'भूमि का आवंटन'
    ],
    documents: ['आधार कार्ड', 'आय प्रमाण पत्र', 'जाति प्रमाण पत्र'],
    process: '1. आवेदन पत्र भरें\n2. नोडल एजेंसी में जमा करें\n3. मेरिट सूची की प्रतीक्षा करें\n4. मकान का आवंटन',
    website: 'www.pmay.gov.in'
  },
  {
    id: 5,
    title: 'कौशल विकास योजना',
    description: 'निःशुल्क कौशल प्रशिक्षण और प्रमाणपत्र',
    badge: 'NEW',
    category: 'कौशल',
    tags: ['प्रशिक्षण', 'रोजगार'],
    eligibility: '10वीं पास के बाद के सभी युवा',
    about: 'यह योजना युवाओं को विभिन्न कौशल में निःशुल्क प्रशिक्षण प्रदान करती है।',
    benefits: [
      'निःशुल्क प्रशिक्षण',
      'अंतरराष्ट्रीय प्रमाणपत्र',
      'नौकरी सहायता'
    ],
    documents: ['10वीं पास प्रमाण पत्र', 'आधार कार्ड', 'बैंक खाता'],
    process: '1. प्रशिक्षण केंद्र चुनें\n2. ऑनलाइन पंजीकरण करें\n3. प्रशिक्षण शुरू करें\n4. परीक्षा पास करें',
    website: 'www.skillindia.gov.in'
  },
  {
    id: 6,
    title: 'मुद्रा ऋण योजना',
    description: 'छोटे व्यवसाय के लिए 10 लाख तक ऋण',
    badge: null,
    category: 'व्यवसाय',
    tags: ['ऋण', 'व्यवसाय'],
    eligibility: 'सभी नए व्यवसायी',
    about: 'MUDRA योजना छोटे व्यवसायियों को बिना गिरवी के ऋण प्रदान करती है।',
    benefits: [
      '10 लाख तक का ऋण',
      'कम ब्याज दर',
      'आसान अनुमोदन प्रक्रिया'
    ],
    documents: ['आधार कार्ड', 'व्यवसाय योजना', 'बैंक खाता'],
    process: '1. बैंक से संपर्क करें\n2. आवेदन भरें\n3. दस्तावेज जमा करें\n4. अनुमोदन के लिए प्रतीक्षा करें',
    website: 'www.mudra.org.in'
  },
  {
    id: 7,
    title: 'बेरोजगारी भत्ता',
    description: 'बेरोजगार युवाओं को मासिक भत्ता',
    badge: 'NEW',
    category: 'बेरोजगारी',
    tags: ['नौकरी', 'आय'],
    eligibility: '18-35 साल के बेरोजगार',
    about: 'यह योजना बेरोजगार युवाओं को आर्थिक सहायता और रोजगार प्रशिक्षण प्रदान करती है।',
    benefits: [
      'मासिक आर्थिक सहायता',
      'रोजगार प्रशिक्षण',
      'नौकरी खोज सहायता'
    ],
    documents: ['आधार कार्ड', 'शैक्षणिक प्रमाण पत्र', 'बेरोजगारी पंजीकरण'],
    process: '1. रोजगार कार्यालय में पंजीकरण करें\n2. आवेदन जमा करें\n3. आवेदन के लिए प्रतीक्षा करें\n4. सहायता प्राप्त करें',
    website: 'www.employment.gov.in'
  },
  {
    id: 8,
    title: 'वृद्धा पेंशन योजना',
    description: '60+ वर्षीय वरिष्ठ नागरिकों के लिए पेंशन',
    badge: null,
    category: 'सामाजिक सुरक्षा',
    tags: ['वरिष्ठ', 'पेंशन'],
    eligibility: '60 वर्ष से अधिक आयु वाले',
    about: 'यह योजना वरिष्ठ नागरिकों को सामाजिक सुरक्षा और आर्थिक सहायता प्रदान करती है।',
    benefits: [
      '500-1500 रुपये मासिक पेंशन',
      'स्वास्थ्य सुविधाएं',
      'आवास सहायता'
    ],
    documents: ['आधार कार्ड', 'आयु प्रमाण पत्र', 'आय प्रमाण पत्र'],
    process: '1. स्थानीय कार्यालय में आवेदन करें\n2. दस्तावेज सत्यापित करें\n3. अनुमोदन के लिए प्रतीक्षा करें\n4. पेंशन प्राप्त करें',
    website: 'www.socialsecurity.gov.in'
  }

];

// ============================================================
// BACKEND WORK HERE:
// Replace the static governmentSchemes array above with a database/API.
// Example: GET /api/schemes?language=hi|mr|en
// The backend should return verified scheme data and localized fields.
// ============================================================

// ========================================
// USER PROFILE DATA
// (login/onboarding के दौरान ली गई असली जानकारी यहां से लोड होती है)
// ========================================

const PROFILE_STORAGE_KEY = 'yojanalink_profile';
const VERIFIED_PHONE_STORAGE_KEY = 'yojanalink_verified_phone';

// BACKEND INTEGRATION: replace these localStorage helpers with authenticated
// GET /api/users/me and PATCH /api/users/me calls. Aadhaar must be encrypted
// by the backend; this frontend only displays a masked value.
function maskAadhaar(value) {
  const digits = String(value || '').replace(/\D/g, '');
  return digits.length === 12 ? `XXXX-XXXX-${digits.slice(-4)}` : '';
}

// localStorage में सेव किए गए सभी प्रोफाइल पढ़ें (फोन नंबर के हिसाब से)
function getSavedProfiles() {
  let savedProfiles = {};
  try {
    savedProfiles = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || '{}');
  } catch (e) {
    savedProfiles = {};
  }

  // पुराने format को नए format में बदलें (अगर जरूरत हो)
  if (savedProfiles && savedProfiles.phone && !savedProfiles[savedProfiles.phone]) {
    savedProfiles = { [savedProfiles.phone]: savedProfiles };
  }

  return savedProfiles;
}

// login के समय verify किए गए मोबाइल नंबर के आधार पर सही प्रोफाइल चुनें
function loadUserProfile() {
  const savedProfiles = getSavedProfiles();
  const verifiedPhone = sessionStorage.getItem(VERIFIED_PHONE_STORAGE_KEY) || '';
  const saved = savedProfiles[verifiedPhone] || Object.values(savedProfiles)[0] || {};

  return {
    name: saved.fullName || '',
    phone: saved.phone || verifiedPhone || '',
    location: saved.location || '',
    age: saved.age || '',
    gender: saved.gender || '',
    aadhaar: saved.aadhaar || '',
    aadhaarMasked: saved.aadhaarMasked || maskAadhaar(saved.aadhaar),
    // Document upload was intentionally removed from the user profile.
    // सुझाव फीचर के लिए इस्तेमाल होता है, फिलहाल onboarding में नहीं लिया जाता
    education: saved.education || ''
  };
}

// प्रोफाइल में हुए बदलाव को localStorage में वापस सेव करें
function persistUserProfile() {
  if (!userProfile.phone) return;

  const savedProfiles = getSavedProfiles();
  savedProfiles[userProfile.phone] = {
    fullName: userProfile.name,
    phone: userProfile.phone,
    location: userProfile.location,
    age: userProfile.age,
    gender: userProfile.gender,
    aadhaar: userProfile.aadhaar,
    aadhaarMasked: userProfile.aadhaarMasked,
    education: userProfile.education
  };

  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(savedProfiles));
}

const userProfile = loadUserProfile();

// ========================================
// APPLICATION STATE
// ========================================

const appState = {
  currentView: 'home',
  darkMode: localStorage.getItem('darkMode') === 'true' || false,
  fontSize: localStorage.getItem('fontSize') || 'medium',
  // Keep the same language key used by onboarding pages.
  language: localStorage.getItem('yojanalink_language') || localStorage.getItem('language') || 'hi',
  notifications: true,
  otpTimer: null,
  otpTime: 30
};

// ========================================
// DOM ELEMENTS
// ========================================

const elements = {
  // Navigation
  navItems: document.querySelectorAll('.nav-item'),
  schemesList: document.getElementById('schemesList'),
  suggestionsSection: document.getElementById('suggestionsSection'),
  profileSection: document.getElementById('profileSection'),
  
  // Header Icons
  notificationBtn: document.getElementById('notificationBtn'),
  settingsBtn: document.getElementById('settingsBtn'),
  profileBtn: document.getElementById('profileBtn'),
  
  // Panels
  notificationPanel: document.getElementById('notificationPanel'),
  settingsPanel: document.getElementById('settingsPanel'),
  
  // Chatbot
  chatbotFab: document.getElementById('chatbotFab'),
  chatbotPanel: document.getElementById('chatbotPanel'),
  chatbotCloseBtn: document.getElementById('chatbotCloseBtn'),
  chatbotMessages: document.getElementById('chatbotMessages'),
  chatbotInput: document.getElementById('chatbotInput'),
  chatbotSendBtn: document.getElementById('chatbotSendBtn'),
  
  // Search
  schemeSearch: document.getElementById('schemeSearch'),
  
  // Modals
  schemeModal: document.getElementById('schemeModal'),
  profileModal: document.getElementById('profileModal'),
  modalCloseBtn: document.getElementById('modalCloseBtn'),
  profileModalCloseBtn: document.getElementById('profileModalCloseBtn'),
  modalCancelBtn: document.getElementById('modalCancelBtn'),
  applyNowBtn: document.getElementById('applyNowBtn'),
  
  // Settings
  darkModeToggle: document.getElementById('darkModeToggle'),
  notificationsToggle: document.getElementById('notificationsToggle'),
  fontSizeSelect: document.getElementById('fontSizeSelect'),
  languageSelect: document.getElementById('languageSelect'),
  
  // Profile
  editProfileBtn: document.getElementById('editProfileBtn'),
  profileForm: document.getElementById('profileForm'),
  profileDisplayName: document.getElementById('profileDisplayName'),
  profileDisplayLocation: document.getElementById('profileDisplayLocation'),
  profileDisplayPhone: document.getElementById('profileDisplayPhone'),
  profileDisplayAge: document.getElementById('profileDisplayAge'),
  profileDisplayGender: document.getElementById('profileDisplayGender'),
  profileDisplayAadhaar: document.getElementById('profileDisplayAadhaar'),
  
  // OTP
  otpTimer: document.getElementById('otpTimer'),
  verifyOtpBtn: document.getElementById('verifyOtpBtn'),
  resendOtpBtn: document.getElementById('resendOtpBtn'),
  countdownDisplay: document.getElementById('countdownDisplay')
};

// ========================================
// CHATBOT RESPONSES
// ========================================

// Keyword -> response key. Actual response text is translated in CHATBOT_TRANSLATIONS.
const CHATBOT_TRANSLATIONS = {
  hi: {
    student:'छात्रों के लिए स्कूल स्कॉलरशिप, कौशल विकास योजना और शिक्षा ऋण जैसी योजनाएं उपलब्ध हैं।',
    scholarship:'आप स्कूल स्कॉलरशिप और उच्च शिक्षा छात्रवृत्ति जैसी योजनाएं देख सकते हैं।',
    loan:'छोटे व्यवसाय के लिए MUDRA योजना देखें। यह ₹10 लाख तक के ऋण की जानकारी देती है।',
    job:'कौशल विकास योजना से प्रशिक्षण और रोजगार सहायता मिल सकती है।',
    business:'MUDRA योजना छोटे व्यवसायों के लिए उपयोगी हो सकती है।',
    health:'आयुष्मान भारत योजना पात्र परिवारों को ₹5 लाख तक की स्वास्थ्य बीमा सुविधा देती है।',
    house:'प्रधानमंत्री आवास योजना आवास सहायता से जुड़ी जानकारी देती है।',
    farmer:'किसानों के लिए कृषी स्वावलंबन और फळबाग लागवड जैसी योजनाएं उपलब्ध हैं।',
    pension:'वृद्धा पेंशन योजना वरिष्ठ नागरिकों के लिए पेंशन संबंधी सहायता देती है।',
    default:'कृपया अपने प्रश्न को विस्तार से समझाएं। हम आपकी सहायता के लिए यहां हैं। 🤝'
  },
  mr: {
    student:'विद्यार्थ्यांसाठी शालेय शिष्यवृत्ती, कौशल्य विकास आणि शिक्षण कर्जासारख्या योजना उपलब्ध आहेत.',
    scholarship:'तुम्ही शालेय शिष्यवृत्ती आणि उच्च शिक्षण शिष्यवृत्तीच्या योजना पाहू शकता.',
    loan:'लघु व्यवसायासाठी मुद्रा योजनेची माहिती पहा. ₹10 लाखांपर्यंत कर्जाची सुविधा उपलब्ध असू शकते.',
    job:'कौशल्य विकास योजनेतून प्रशिक्षण आणि रोजगारासाठी मदत मिळू शकते.',
    business:'लघु व्यवसायांसाठी मुद्रा योजना उपयुक्त ठरू शकते.',
    health:'आयुष्मान भारत योजनेत पात्र कुटुंबांना ₹5 लाखांपर्यंत आरोग्य विमा सुविधा मिळते.',
    house:'प्रधानमंत्री आवास योजना घरकुल सहाय्याशी संबंधित माहिती देते.',
    farmer:'शेतकऱ्यांसाठी कृषी स्वावलंबन आणि फळबाग लागवड यांसारख्या योजना उपलब्ध आहेत.',
    pension:'वृद्धापकाळ पेन्शन योजना ज्येष्ठ नागरिकांसाठी पेन्शन सहाय्य देते.',
    default:'कृपया तुमचा प्रश्न थोडा सविस्तर सांगा. आम्ही मदतीसाठी येथे आहोत. 🤝'
  },
  en: {
    student:'Students can explore school scholarships, skill development and education-loan schemes.',
    scholarship:'You can explore school scholarships and higher-education scholarship schemes.',
    loan:'For small businesses, explore the MUDRA scheme and its loan information.',
    job:'Skill Development can provide training and employment support.',
    business:'The MUDRA scheme may be useful for small businesses.',
    health:'Ayushman Bharat provides eligible families with health insurance coverage of up to ₹5 lakh.',
    house:'Pradhan Mantri Awas Yojana provides information related to housing assistance.',
    farmer:'Farmers can explore agricultural self-reliance and horticulture plantation schemes.',
    pension:'Old-age pension schemes provide pension-related support for senior citizens.',
    default:'Please explain your question in a little more detail. We are here to help. 🤝'
  }
};

const CHATBOT_KEYWORDS = {
  student:['student','छात्र','विद्यार्थी','विद्यार्थ्यांसाठी'],
  scholarship:['scholarship','छात्रवृत्ति','शिष्यवृत्ती'],
  loan:['loan','ऋण','कर्ज'],
  job:['job','नौकरी','रोजगार','नोकरी'],
  business:['business','व्यवसाय'],
  health:['health','स्वास्थ्य','आरोग्य','बीमार'],
  house:['house','घर','आवास','घरकुल'],
  farmer:['farmer','किसान','खेती','शेतकरी','शेती'],
  pension:['pension','पेंशन','पेन्शन']
};

function getChatbotResponse(userMessage) {
  const lower = userMessage.toLowerCase();
  const lang = appState.language || 'hi';
  for (const [key, keywords] of Object.entries(CHATBOT_KEYWORDS)) {
    if (keywords.some(word => lower.includes(word.toLowerCase()))) {
      return CHATBOT_TRANSLATIONS[lang][key];
    }
  }
  return CHATBOT_TRANSLATIONS[lang].default;
}

// ========================================
// PERSONALIZED SUGGESTIONS
// ========================================

function getPersonalizedSuggestions() {
  const userEducation = String(userProfile.education || '').toLowerCase();
  const byId = id => governmentSchemes.find(s => s.id === id);
  const ids = (
    userEducation.includes('स्नातक') ||
    userEducation.includes('graduate') ||
    userEducation.includes('b.sc') ||
    userEducation.includes('b.tech') ||
    userEducation.includes('be')
  ) ? [5, 3, 6] : [2, 4, 1];

  return ids.map(byId).filter(Boolean).slice(0, 5);
}

// ========================================
// RENDER FUNCTIONS
// ========================================

function renderSchemeCards(schemesToRender = null) {
  const container = elements.schemesList;
  const source = schemesToRender || getLocalizedSchemes();

  if (source.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>${t('noResults')}</h3>
        <p>${t('changeSearch')}</p>
      </div>`;
    return;
  }

  container.innerHTML = source.map(scheme => `
    <div class="scheme-card" data-scheme-id="${scheme.id}">
      <div class="scheme-header">
        <h3 class="scheme-title">${scheme.title}</h3>
        ${scheme.badge ? `<span class="scheme-badge">${scheme.badge}</span>` : ''}
      </div>
      <p class="scheme-description">${scheme.description}</p>
      <div class="scheme-footer">
        <div><span class="scheme-tag">${scheme.category}</span></div>
        <span class="scheme-arrow">→</span>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.scheme-card').forEach(card => {
    card.addEventListener('click', () => {
      const schemeId = Number(card.dataset.schemeId);
      const original = governmentSchemes.find(s => s.id === schemeId);
      if (original) showSchemeDetails(getLocalizedScheme(original));
    });
  });
}

function renderSuggestions() {
  const suggestions = getPersonalizedSuggestions()
    .map(getLocalizedScheme);
  const container = document.getElementById('suggestionsList');
  if (!container) return;

  container.innerHTML = suggestions.map(suggestion => `
    <div class="suggestion-item" data-scheme-id="${suggestion.id}">
      <div class="suggestion-info">
        <h3>${suggestion.title}</h3>
        <p>${suggestion.description}</p>
      </div>
      <span class="suggestion-match">${t('match')}</span>
    </div>
  `).join('');

  container.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      const original = governmentSchemes.find(s => s.id === Number(item.dataset.schemeId));
      if (original) showSchemeDetails(getLocalizedScheme(original));
    });
  });
}

function showSchemeDetails(scheme) {
  const modal = elements.schemeModal;
  const modalBody = document.getElementById('modalBody');

  const detailsHTML = `
    <div class="scheme-detail-group"><h3>${scheme.title}</h3><p>${scheme.description}</p></div>
    <div class="scheme-detail-group"><h3>${t('about')}</h3><p>${scheme.about}</p></div>
    <div class="scheme-detail-group"><h3>${t('eligibility')}</h3><p>${scheme.eligibility}</p></div>
    <div class="scheme-detail-group"><h3>${t('benefits')}</h3><ul>${scheme.benefits.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div class="scheme-detail-group"><h3>${t('documents')}</h3><ul>${scheme.documents.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div class="scheme-detail-group"><h3>${t('process')}</h3><p>${scheme.process.replace(/\n/g, '<br>')}</p></div>
    <div class="scheme-detail-group"><h3>${t('officialWebsite')}</h3><p>${
      scheme.website
        ? `<a href="https://${scheme.website}" target="_blank" rel="noopener" style="color: var(--primary-color);">${scheme.website}</a>`
        : t('soon')
    }</p></div>`;
  modalBody.innerHTML = detailsHTML;
  modal.classList.add('visible');
}

// ========================================
// NAVIGATION HANDLING
// ========================================

// यह फंक्शन अलग-अलग pages को दिखाता है (होम, सुझाव, प्रोफाइल)
function switchView(view) {
  // कौन सा view active है यह याद रखें
  appState.currentView = view;
  
  // पहले सभी sections को छिपा दें
  elements.schemesList.parentElement.style.display = 'none';
  elements.suggestionsSection.style.display = 'none';
  elements.profileSection.style.display = 'none';
  
  // अब जो section चुना गया है उसे दिखा दें
  switch(view) {
    case 'home':
      // होम पेज में schemes दिखाएं
      elements.schemesList.parentElement.style.display = 'block';
      break;
    case 'suggestions':
      // सुझाव पेज में personalized suggestions दिखाएं
      renderSuggestions();
      elements.suggestionsSection.style.display = 'block';
      break;
    case 'profile':
      // प्रोफाइल पेज दिखाएं
      elements.profileSection.style.display = 'block';
      break;
  }
  
  // navigation buttons को update करें (active color लगाएं)
  elements.navItems.forEach(item => {
    item.classList.remove('active');  // सभी से active class हटा दें
    if (item.dataset.nav === view) {
      item.classList.add('active');   // सही button को active बना दें
    }
  });
  
  // Scroll to top
  document.querySelector('.main-content').scrollTop = 0;
}

// ========================================
// PANEL TOGGLES
// ========================================

function togglePanel(panel) {
  // Close other panels
  if (panel !== elements.notificationPanel) {
    elements.notificationPanel.classList.remove('visible');
  }
  if (panel !== elements.settingsPanel) {
    elements.settingsPanel.classList.remove('visible');
  }
  
  // Toggle current panel
  panel.classList.toggle('visible');
}

// ========================================
// CHATBOT FUNCTIONS (चैटबॉट के फंक्शन)
// ========================================

// यह फंक्शन chatbot को खोलता और बंद करता है
function toggleChatbot() {
  // chatbot को toggle करें (hidden ↔ visible)
  elements.chatbotPanel.classList.toggle('hidden');
  
  // अगर chatbot अब दिख रहा है तो input में cursor डालें
  if (!elements.chatbotPanel.classList.contains('hidden')) {
    elements.chatbotInput.focus();
  }
}

// यह फंक्शन user के message को send करता है
function sendChatbotMessage() {
  // input field से text निकालें
  const message = elements.chatbotInput.value.trim();
  
  // अगर message खाली है तो कुछ मत करो
  if (!message) return;
  
  // user का message chatbot के screen पर दिखाएं
  addChatMessage(message, 'user');
  elements.chatbotInput.value = '';
  
  // Simulate bot typing
  setTimeout(() => {
    const response = getChatbotResponse(message);
    addChatMessage(response, 'bot');
  }, 500);
}

function addChatMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}-message`;
  messageDiv.innerHTML = `<p>${text}</p>`;
  elements.chatbotMessages.appendChild(messageDiv);
  elements.chatbotMessages.scrollTop = elements.chatbotMessages.scrollHeight;
}

function getChatbotResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check for keywords
  for (const [keyword, response] of Object.entries(chatbotResponses)) {
    if (lowerMessage.includes(keyword)) {
      return response;
    }
  }
  
  // Default response
  return 'कृपया अपने प्रश्न को विस्तार से समझाएं। हम आपकी सहायता के लिए यहां हैं। 🤝';
}

// ========================================
// OTP TIMER FUNCTIONS
// ========================================

function startOtpTimer() {
  elements.otpTimer.style.display = 'block';
  appState.otpTime = 30;
  elements.resendOtpBtn.disabled = true;
  
  const timerInterval = setInterval(() => {
    appState.otpTime--;
    const minutes = Math.floor(appState.otpTime / 60);
    const seconds = appState.otpTime % 60;
    elements.countdownDisplay.textContent = 
      `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (appState.otpTime <= 0) {
      clearInterval(timerInterval);
      elements.resendOtpBtn.disabled = false;
      addChatMessage(t('otpExpired'), 'bot');
    }
  }, 1000);
  
  appState.otpTimer = timerInterval;
}

function resendOtp() {
  addChatMessage(t('otpNew'), 'bot');
  startOtpTimer();
}

// ========================================
// SEARCH FUNCTIONALITY (योजना खोजना)
// ========================================

// यह फंक्शन schemes को खोजता है जब user search box में कुछ टाइप करे
function searchSchemes(query) {
  const lowerQuery = query.toLowerCase().trim();
  const localized = getLocalizedSchemes();

  if (!lowerQuery) {
    renderSchemeCards(localized);
    return;
  }

  const filtered = localized.filter((scheme, index) => {
    const original = governmentSchemes[index];
    const fields = [
      scheme.title, scheme.description, scheme.category,
      ...(scheme.tags || []),
      original.title, original.description, original.category,
      ...(original.tags || [])
    ];
    return fields.some(value => String(value || '').toLowerCase().includes(lowerQuery));
  });

  renderSchemeCards(filtered);
}

// ========================================
// DARK MODE FUNCTIONALITY (रात का मोड)
// ========================================

// यह फंक्शन रात के मोड को ON/OFF करता है
function toggleDarkMode() {
  // dark mode को toggle करें (ON → OFF, OFF → ON)
  appState.darkMode = !appState.darkMode;
  
  // CSS class को add/remove करें (यह visual look बदल देता है)
  document.body.classList.toggle('dark-mode');
  
  // setting को browser की मेमोरी में save करें
  localStorage.setItem('darkMode', appState.darkMode);
}

// ========================================
// FONT SIZE FUNCTIONALITY (फॉन्ट साइज बदलना)
// ========================================

// यह फंक्शन फॉन्ट साइज को छोटा, मध्यम या बड़ा करता है
function changeFontSize(size) {
  // सबसे पहले पुरानी क्लास हटा दें
  document.body.classList.remove('font-small', 'font-large');
  
  // अगर साइज medium नहीं है तो नई क्लास लगा दें
  if (size !== 'medium') {
    document.body.classList.add(`font-${size}`);
  }
  
  // साइज को app state में सेव करें
  appState.fontSize = size;
  
  // साइज को browser की मेमोरी में सेव करें (ताकि अगली बार खुलने पर याद रहे)
  localStorage.setItem('fontSize', size);
}

// ========================================
// LANGUAGE FUNCTIONALITY (भाषा बदलना)
// ========================================

// यह फंक्शन एप्लिकेशन की भाषा को हिंदी, मराठी या अंग्रेजी में बदलता है
// ============================================================
// APP TRANSLATIONS
// Every visible UI string is kept here so one language selection
// updates the complete application.
// ============================================================
const APP_TRANSLATIONS = {
  "hi": {
    "appSubtitle": "सरकारी योजनाएं",
    "notifications": "सूचनाएं",
    "settings": "सेटिंग्स",
    "profile": "प्रोफाइल",
    "close": "बंद करें",
    "schemeHeader": "सरकारी योजनाएं",
    "schemeSubtitle": "अपने लिए सही योजना खोजें",
    "searchPlaceholder": "सरकारी योजनाएं खोजें...",
    "searchAria": "सरकारी योजनाएं खोजें",
    "suggestionsHeader": "आपके लिए सुझाव",
    "suggestionsSubtitle": "आपकी प्रोफाइल के आधार पर सुझाई गई योजनाएं",
    "profileHeader": "आपकी प्रोफाइल",
    "profileSubtitle": "अपनी जानकारी देखें और संपादित करें",
    "editProfile": "प्रोफाइल संपादित करें",
    "home": "होम",
    "suggestions": "सुझाव",
    "profileNav": "आईडी",
    "footer": "सरल • सुरक्षित • आपके लिए",
    "age": "उम्र",
    "gender": "लिंग",
    "aadhaar": "आधार नंबर",
    "chatbotHeader": "YojanaLink सहायता",
    "chatbotWelcome": "नमस्ते! 👋 मैं आपकी सरकारी योजनाएं खोजने में मदद कर सकता हूं। कुछ प्रश्न पूछें।",
    "chatbotOtpSent": "OTP भेज दिया गया",
    "chatbotOtpPlaceholder": "6 अंकों का OTP दर्ज करें",
    "chatbotVerify": "सत्यापित करें",
    "chatbotResend": "OTP फिर से भेजें",
    "chatbotPlaceholder": "अपना संदेश लिखें...",
    "chatbotInputAria": "चैट संदेश",
    "chatbotVoice": "वॉइस संदेश",
    "chatbotSend": "संदेश भेजें",
    "chatbotOpen": "चैटबॉट खोलें",
    "noResults": "कोई योजना नहीं मिली",
    "changeSearch": "कृपया अपनी खोज शर्तें बदलें",
    "details": "योजना विवरण",
    "about": "योजना के बारे में",
    "eligibility": "पात्रता",
    "benefits": "लाभ",
    "documents": "आवश्यक दस्तावेज",
    "process": "आवेदन प्रक्रिया",
    "officialWebsite": "आधिकारिक वेबसाइट",
    "soon": "जल्द उपलब्ध होगा",
    "applyNow": "अभी आवेदन करें",
    "modalClose": "बंद करें",
    "match": "मेल",
    "applySuccess": "आपका आवेदन सफलतापूर्वक जमा हो गया है। शीघ्र ही आपको विस्तृत जानकारी दी जाएगी। 📧",
    "updated": "आपकी प्रोफाइल सफलतापूर्वक अपडेट हो गई है! ✅",
    "otpVerified": "OTP सत्यापित हो गया! 🎉",
    "invalidOtp": "कृपया 6 अंकों का सही OTP दर्ज करें।",
    "otpExpired": "OTP की समय सीमा समाप्त हो गई। कृपया फिर से OTP मांगें।",
    "otpNew": "नया OTP आपके मोबाइल नंबर पर भेज दिया गया है।",
    "welcomeChat": "नमस्ते! मैं आपकी सरकारी योजनाएं खोजने में मदद कर सकता हूं। क्या आप जानना चाहते हैं कि कौन सी योजना आपके लिए सही है? 😊",
    "online": "आप ऑनलाइन हैं। 🟢",
    "offline": "आप ऑफलाइन हैं। कृपया इंटरनेट कनेक्शन जांचें। 🔴",
    "settingsLanguage": "भाषा",
    "settingsNotifications": "सूचनाएं",
    "darkMode": "गहरा मोड",
    "fontSize": "फॉन्ट आकार",
    "small": "छोटा",
    "medium": "मध्यम",
    "large": "बड़ा",
    "profileModalTitle": "प्रोफाइल संपादित करें",
    "name": "नाम:",
    "location": "स्थान:",
    "locationPlaceholder": "शहर या गांव",
    "phone": "मोबाइल नंबर:",
    "phoneNote": "मोबाइल नंबर OTP से सत्यापित है, इसे यहां से नहीं बदला जा सकता।",
    "aadhaarNote": "प्रोफाइल में आधार नंबर मास्क करके दिखेगा।",
    "save": "सहेजें",
    "signOut": "साइन आउट",
    "male": "पुरुष",
    "female": "महिला",
    "other": "अन्य",
    "signOutConfirm": "क्या आप वाकई साइन आउट करना चाहते हैं?",
    "voiceUnsupported": "वॉइस इनपुट Google Chrome या Microsoft Edge में बेहतर काम करता है।",
    "micError": "कृपया माइक्रोफोन की अनुमति दें और फिर प्रयास करें।",
    "scholarshipTitle": "नई छात्रवृत्ति योजना",
    "scholarshipText": "नई सरकारी छात्रवृत्ति योजना उपलब्ध है",
    "twoHours": "2 घंटे पहले",
    "deadlineTitle": "आवेदन की समय सीमा अपडेट",
    "deadlineText": "PM किसान योजना की समय सीमा बढ़ाई गई",
    "fiveHours": "5 घंटे पहले",
    "housingTitle": "आवास योजना नई सूची",
    "housingText": "आवास निर्माण योजना के लिए नई सूची जारी",
    "oneDay": "1 दिन पहले",
    "invalidAadhaar": "कृपया 12 अंकों का सही आधार नंबर दर्ज करें।"
  },
  "mr": {
    "appSubtitle": "सरकारी योजना",
    "notifications": "सूचना",
    "settings": "सेटिंग्ज",
    "profile": "प्रोफाइल",
    "close": "बंद करा",
    "schemeHeader": "सरकारी योजना",
    "schemeSubtitle": "तुमच्यासाठी योग्य योजना शोधा",
    "searchPlaceholder": "सरकारी योजना शोधा...",
    "searchAria": "सरकारी योजना शोधा",
    "suggestionsHeader": "तुमच्यासाठी सूचना",
    "suggestionsSubtitle": "तुमच्या प्रोफाइलच्या आधारावर सुचवलेल्या योजना",
    "profileHeader": "तुमची प्रोफाइल",
    "profileSubtitle": "तुमची माहिती पहा आणि संपादित करा",
    "editProfile": "प्रोफाइल संपादित करा",
    "home": "मुख्यपृष्ठ",
    "suggestions": "सूचना",
    "profileNav": "प्रोफाइल",
    "footer": "सोपे • सुरक्षित • तुमच्यासाठी",
    "age": "वय",
    "gender": "लिंग",
    "aadhaar": "आधार क्रमांक",
    "chatbotHeader": "YojanaLink मदत",
    "chatbotWelcome": "नमस्कार! 👋 मी तुम्हाला सरकारी योजना शोधण्यात मदत करू शकतो. प्रश्न विचारा.",
    "chatbotOtpSent": "OTP पाठवला आहे",
    "chatbotOtpPlaceholder": "6 अंकी OTP टाका",
    "chatbotVerify": "पडताळणी करा",
    "chatbotResend": "OTP पुन्हा पाठवा",
    "chatbotPlaceholder": "तुमचा संदेश लिहा...",
    "chatbotInputAria": "चॅट संदेश",
    "chatbotVoice": "व्हॉइस संदेश",
    "chatbotSend": "संदेश पाठवा",
    "chatbotOpen": "चॅटबॉट उघडा",
    "noResults": "कोणतीही योजना सापडली नाही",
    "changeSearch": "कृपया शोधाचे शब्द बदला",
    "details": "योजनेचा तपशील",
    "about": "योजनेबद्दल",
    "eligibility": "पात्रता",
    "benefits": "लाभ",
    "documents": "आवश्यक कागदपत्रे",
    "process": "अर्ज प्रक्रिया",
    "officialWebsite": "अधिकृत संकेतस्थळ",
    "soon": "लवकरच उपलब्ध होईल",
    "applyNow": "आता अर्ज करा",
    "modalClose": "बंद करा",
    "match": "जुळणी",
    "applySuccess": "तुमचा अर्ज यशस्वीरित्या जमा झाला आहे. लवकरच तुम्हाला सविस्तर माहिती दिली जाईल. 📧",
    "updated": "तुमची प्रोफाइल यशस्वीरित्या अपडेट झाली आहे! ✅",
    "otpVerified": "OTP ची पडताळणी झाली! 🎉",
    "invalidOtp": "कृपया 6 अंकी योग्य OTP टाका.",
    "otpExpired": "OTP ची वेळ संपली आहे. कृपया पुन्हा OTP मागवा.",
    "otpNew": "नवीन OTP तुमच्या मोबाइल क्रमांकावर पाठवला आहे.",
    "welcomeChat": "नमस्कार! मी तुम्हाला योग्य सरकारी योजना शोधण्यात मदत करू शकतो. 😊",
    "online": "तुम्ही ऑनलाइन आहात. 🟢",
    "offline": "तुम्ही ऑफलाइन आहात. कृपया इंटरनेट कनेक्शन तपासा. 🔴",
    "settingsLanguage": "भाषा",
    "settingsNotifications": "सूचना",
    "darkMode": "डार्क मोड",
    "fontSize": "फॉन्ट आकार",
    "small": "लहान",
    "medium": "मध्यम",
    "large": "मोठा",
    "profileModalTitle": "प्रोफाइल संपादित करा",
    "name": "नाव:",
    "location": "ठिकाण:",
    "locationPlaceholder": "शहर किंवा गाव",
    "phone": "मोबाइल क्रमांक:",
    "phoneNote": "मोबाइल क्रमांक OTP ने पडताळला आहे; तो येथे बदलता येणार नाही.",
    "aadhaarNote": "प्रोफाइलमध्ये आधार क्रमांक मास्क करून दाखवला जाईल.",
    "save": "जतन करा",
    "signOut": "साइन आउट",
    "male": "पुरुष",
    "female": "महिला",
    "other": "इतर",
    "signOutConfirm": "तुम्हाला खरोखर साइन आउट करायचे आहे का?",
    "voiceUnsupported": "व्हॉइस इनपुट Google Chrome किंवा Microsoft Edge मध्ये अधिक चांगले काम करते.",
    "micError": "कृपया मायक्रोफोनची परवानगी द्या आणि पुन्हा प्रयत्न करा.",
    "scholarshipTitle": "नवीन शिष्यवृत्ती योजना",
    "scholarshipText": "नवीन सरकारी शिष्यवृत्ती योजना उपलब्ध आहे",
    "twoHours": "2 तासांपूर्वी",
    "deadlineTitle": "अर्जाची अंतिम मुदत अपडेट",
    "deadlineText": "PM किसान योजनेची अंतिम मुदत वाढवण्यात आली आहे",
    "fiveHours": "5 तासांपूर्वी",
    "housingTitle": "घरकुल योजनेची नवीन यादी",
    "housingText": "घरकुल योजनेसाठी नवीन यादी जाहीर झाली आहे",
    "oneDay": "1 दिवसापूर्वी",
    "invalidAadhaar": "कृपया 12 अंकी योग्य आधार क्रमांक टाका."
  },
  "en": {
    "appSubtitle": "Government Schemes",
    "notifications": "Notifications",
    "settings": "Settings",
    "profile": "Profile",
    "close": "Close",
    "schemeHeader": "Government Schemes",
    "schemeSubtitle": "Find the right scheme for you",
    "searchPlaceholder": "Search government schemes...",
    "searchAria": "Search government schemes",
    "suggestionsHeader": "Suggestions for you",
    "suggestionsSubtitle": "Schemes recommended based on your profile",
    "profileHeader": "Your Profile",
    "profileSubtitle": "View and edit your information",
    "editProfile": "Edit Profile",
    "home": "Home",
    "suggestions": "Suggestions",
    "profileNav": "Profile",
    "footer": "Simple • Safe • For you",
    "age": "Age",
    "gender": "Gender",
    "aadhaar": "Aadhaar number",
    "chatbotHeader": "YojanaLink Support",
    "chatbotWelcome": "Hello! 👋 I can help you find government schemes. Ask me a question.",
    "chatbotOtpSent": "OTP sent",
    "chatbotOtpPlaceholder": "Enter 6-digit OTP",
    "chatbotVerify": "Verify",
    "chatbotResend": "Resend OTP",
    "chatbotPlaceholder": "Type your message...",
    "chatbotInputAria": "Chat message",
    "chatbotVoice": "Voice message",
    "chatbotSend": "Send message",
    "chatbotOpen": "Open chatbot",
    "noResults": "No schemes found",
    "changeSearch": "Please change your search terms",
    "details": "Scheme Details",
    "about": "About the Scheme",
    "eligibility": "Eligibility",
    "benefits": "Benefits",
    "documents": "Required Documents",
    "process": "Application Process",
    "officialWebsite": "Official Website",
    "soon": "Coming soon",
    "applyNow": "Apply Now",
    "modalClose": "Close",
    "match": "match",
    "applySuccess": "Your application has been submitted successfully. You will receive detailed information soon. 📧",
    "updated": "Your profile was updated successfully! ✅",
    "otpVerified": "OTP verified! 🎉",
    "invalidOtp": "Please enter a valid 6-digit OTP.",
    "otpExpired": "The OTP has expired. Please request a new OTP.",
    "otpNew": "A new OTP has been sent to your mobile number.",
    "welcomeChat": "Hello! I can help you find the government scheme that is right for you. 😊",
    "online": "You are online. 🟢",
    "offline": "You are offline. Please check your internet connection. 🔴",
    "settingsLanguage": "Language",
    "settingsNotifications": "Notifications",
    "darkMode": "Dark mode",
    "fontSize": "Font size",
    "small": "Small",
    "medium": "Medium",
    "large": "Large",
    "profileModalTitle": "Edit Profile",
    "name": "Name:",
    "location": "Location:",
    "locationPlaceholder": "City or village",
    "phone": "Mobile number:",
    "phoneNote": "Your mobile number is verified by OTP and cannot be changed here.",
    "aadhaarNote": "Your Aadhaar number is shown in masked form in the profile.",
    "save": "Save",
    "signOut": "Sign Out",
    "male": "Male",
    "female": "Female",
    "other": "Other",
    "signOutConfirm": "Are you sure you want to sign out?",
    "voiceUnsupported": "Voice input works best in Google Chrome or Microsoft Edge.",
    "micError": "Please allow microphone permission and try again.",
    "scholarshipTitle": "New scholarship scheme",
    "scholarshipText": "A new government scholarship scheme is available",
    "twoHours": "2 hours ago",
    "deadlineTitle": "Application deadline update",
    "deadlineText": "The PM Kisan scheme deadline has been extended",
    "fiveHours": "5 hours ago",
    "housingTitle": "New housing scheme list",
    "housingText": "A new list has been released for the housing scheme",
    "oneDay": "1 day ago",
    "invalidAadhaar": "Please enter a valid 12-digit Aadhaar number."
  }
};

const SCHEME_TRANSLATIONS = {
  "1": {
    "en": {
      "title": "Dr. Babasaheb Ambedkar Agricultural Self-Reliance Scheme",
      "description": "A scheme providing irrigation facilities for Scheduled Caste and Neo-Buddhist farmers",
      "category": "Agriculture",
      "tags": [
        "Farming",
        "Irrigation",
        "Well",
        "Subsidy"
      ],
      "eligibility": "Scheduled Caste / Neo-Buddhist farmers. At least 0.40 hectare land is required for a new well, with a maximum limit of 6 hectares.",
      "about": "This scheme provides financial assistance to Scheduled Caste and Neo-Buddhist farmers to develop irrigation facilities for farming.",
      "benefits": [
        "Financial assistance for a new well",
        "Repair of an old well",
        "Well boring",
        "Assistance for pump sets",
        "Assistance for electricity connection",
        "Assistance for farm-pond plastic lining",
        "Assistance for drip irrigation",
        "Assistance for sprinkler irrigation"
      ],
      "documents": [
        "7/12 land record",
        "8-A land record",
        "Aadhaar card",
        "Caste certificate",
        "Aadhaar-linked bank account"
      ],
      "process": "1. Apply for the scheme\n2. Submit the required documents\n3. Eligible beneficiaries are selected\n4. Complete the process for the selected component",
      "website": "mahadbt.maharashtra.gov.in"
    },
    "mr": {
      "title": "डॉ. बाबासाहेब आंबेडकर कृषी स्वावलंबन योजना",
      "description": "अनुसूचित जाती व नवबौद्ध शेतकऱ्यांना सिंचन सुविधा उपलब्ध करून देणारी योजना",
      "category": "कृषी",
      "tags": [
        "शेती",
        "सिंचन",
        "विहीर",
        "अनुदान"
      ],
      "eligibility": "अनुसूचित जाती / नवबौद्ध शेतकरी. नवीन विहिरीसाठी किमान 0.40 हेक्टर जमीन आवश्यक असून कमाल 6 हेक्टर जमीन मर्यादा आहे.",
      "about": "अनुसूचित जाती व नवबौद्ध शेतकऱ्यांना शेतीसाठी सिंचन सुविधा विकसित करण्यासाठी ही योजना आर्थिक सहाय्य देते.",
      "benefits": [
        "नवीन विहिरीसाठी आर्थिक सहाय्य",
        "जुन्या विहिरीची दुरुस्ती",
        "विहिरीतील बोअरिंग",
        "पंप संचासाठी सहाय्य",
        "वीज जोडणीसाठी सहाय्य",
        "शेततळ्याच्या प्लास्टिक अस्तरीकरणासाठी सहाय्य",
        "ठिबक सिंचनासाठी सहाय्य",
        "तुषार सिंचनासाठी सहाय्य"
      ],
      "documents": [
        "7/12 उतारा",
        "8-A उतारा",
        "आधार कार्ड",
        "जात प्रमाणपत्र",
        "आधार संलग्न बँक खाते"
      ],
      "process": "1. योजनेसाठी अर्ज करा\n2. आवश्यक कागदपत्रे सादर करा\n3. पात्र लाभार्थ्यांची निवड केली जाते\n4. निवडलेल्या घटकाची प्रक्रिया पूर्ण करा",
      "website": "mahadbt.maharashtra.gov.in"
    }
  },
  "9": {
    "en": {
      "title": "Bhausaheb Fundkar Horticulture Plantation Scheme",
      "description": "Financial assistance for farmers to develop fruit orchards",
      "category": "Agriculture",
      "tags": [
        "Farming",
        "Orchard",
        "Plantation",
        "Subsidy"
      ],
      "eligibility": "Farmers who meet the eligibility conditions prescribed by the government for fruit orchard plantation.",
      "about": "This scheme encourages farmers to develop fruit orchards by providing financial assistance.",
      "benefits": [
        "Financial assistance for fruit orchard plantation",
        "Assistance for planting fruit trees",
        "Encouragement to develop fruit orchards"
      ],
      "documents": [
        "Aadhaar card",
        "7/12 land record",
        "8-A land record",
        "Bank account details"
      ],
      "process": "1. Apply for the scheme\n2. Submit the required documents\n3. Application is verified\n4. Eligible beneficiaries are selected\n5. Complete orchard plantation after approval",
      "website": null
    },
    "mr": {
      "title": "भाऊसाहेब फुंडकर फळबाग लागवड योजना",
      "description": "शेतकऱ्यांना फळबाग लागवडीसाठी आर्थिक सहाय्य देणारी योजना",
      "category": "कृषी",
      "tags": [
        "शेती",
        "फळबाग",
        "लागवड",
        "अनुदान"
      ],
      "eligibility": "शासनाने निश्चित केलेल्या फळबाग लागवडीच्या पात्रता अटी पूर्ण करणारे शेतकरी.",
      "about": "शेतकऱ्यांना फळबाग लागवडीसाठी प्रोत्साहन आणि आर्थिक सहाय्य देण्यासाठी ही योजना आहे.",
      "benefits": [
        "फळबाग लागवडीसाठी आर्थिक सहाय्य",
        "फळझाडांच्या लागवडीसाठी सहाय्य",
        "फळबाग विकसित करण्यासाठी प्रोत्साहन"
      ],
      "documents": [
        "आधार कार्ड",
        "7/12 उतारा",
        "8-A उतारा",
        "बँक खाते तपशील"
      ],
      "process": "1. योजनेसाठी अर्ज करा\n2. आवश्यक कागदपत्रे सादर करा\n3. अर्जाची पडताळणी केली जाते\n4. पात्र लाभार्थ्यांची निवड होते\n5. मंजुरीनंतर फळबाग लागवडीची प्रक्रिया पूर्ण करा",
      "website": null
    }
  },
  "2": {
    "en": {
      "title": "Ayushman Bharat Scheme",
      "description": "Health insurance coverage of up to ₹5 lakh",
      "category": "Health",
      "tags": [
        "Health",
        "Insurance"
      ],
      "eligibility": "Families in the lower-income group",
      "about": "Ayushman Bharat provides eligible poor families with health insurance coverage of up to ₹5 lakh.",
      "benefits": [
        "Health insurance coverage up to ₹5 lakh",
        "Treatment in 700+ private hospitals",
        "Cashless treatment"
      ],
      "documents": [
        "Ration card",
        "Aadhaar card",
        "Mobile number"
      ],
      "process": "1. Check eligibility\n2. Contact the nearest Arogya Mitra\n3. Verify documents\n4. Collect the acknowledgement",
      "website": "www.pmjay.gov.in"
    },
    "mr": {
      "title": "आयुष्मान भारत योजना",
      "description": "₹5 लाखांपर्यंत आरोग्य विमा संरक्षण",
      "category": "आरोग्य",
      "tags": [
        "आरोग्य",
        "विमा"
      ],
      "eligibility": "कमी उत्पन्न गटातील कुटुंबे",
      "about": "आयुष्मान भारत योजनेअंतर्गत पात्र गरीब कुटुंबांना ₹5 लाखांपर्यंत आरोग्य विमा सुविधा मिळते.",
      "benefits": [
        "₹5 लाखांपर्यंत विमा संरक्षण",
        "700+ खासगी रुग्णालयांमध्ये उपचार",
        "कॅशलेस उपचार"
      ],
      "documents": [
        "रेशन कार्ड",
        "आधार कार्ड",
        "मोबाइल क्रमांक"
      ],
      "process": "1. पात्रता तपासा\n2. जवळच्या आरोग्य मित्राशी संपर्क करा\n3. कागदपत्रांची पडताळणी करा\n4. पावती घ्या",
      "website": "www.pmjay.gov.in"
    }
  },
  "3": {
    "en": {
      "title": "School Scholarship Scheme",
      "description": "Scholarship of up to ₹12,000 for secondary students",
      "category": "Education",
      "tags": [
        "Students",
        "Education"
      ],
      "eligibility": "Girls studying from class 9 to 12",
      "about": "This scheme provides financial support to poor and meritorious students to continue their education.",
      "benefits": [
        "₹12,000 annual scholarship",
        "Additional support for books and uniform",
        "Exemption from examination fees"
      ],
      "documents": [
        "School certificate",
        "Aadhaar card",
        "Income certificate"
      ],
      "process": "1. Apply through the school\n2. Submit the required documents\n3. Selection is based on merit\n4. Assistance is deposited into the account",
      "website": "www.scholarships.gov.in"
    },
    "mr": {
      "title": "शालेय शिष्यवृत्ती योजना",
      "description": "माध्यमिक विद्यार्थ्यांसाठी ₹12,000 पर्यंत शिष्यवृत्ती",
      "category": "शिक्षण",
      "tags": [
        "विद्यार्थी",
        "शिक्षण"
      ],
      "eligibility": "इयत्ता 9 वी ते 12 वीपर्यंत शिकणाऱ्या विद्यार्थिनी",
      "about": "गरीब आणि गुणवंत विद्यार्थ्यांना शिक्षण सुरू ठेवण्यासाठी ही योजना आर्थिक मदत देते.",
      "benefits": [
        "वार्षिक ₹12,000 शिष्यवृत्ती",
        "पुस्तके आणि गणवेशासाठी अतिरिक्त मदत",
        "परीक्षा शुल्कात सवलत"
      ],
      "documents": [
        "शाळेचे प्रमाणपत्र",
        "आधार कार्ड",
        "उत्पन्न प्रमाणपत्र"
      ],
      "process": "1. शाळेत अर्ज करा\n2. आवश्यक कागदपत्रे जमा करा\n3. गुणवत्तेच्या आधारावर निवड\n4. मदत खात्यात जमा केली जाते",
      "website": "www.scholarships.gov.in"
    }
  },
  "4": {
    "en": {
      "title": "Pradhan Mantri Awas Yojana",
      "description": "Affordable housing for low-income families",
      "category": "Housing",
      "tags": [
        "House",
        "Housing"
      ],
      "eligibility": "Families in EWS and LIG categories",
      "about": "This scheme provides affordable housing support to poor and low-income families.",
      "benefits": [
        "Housing at subsidized prices",
        "Easy loan facility",
        "Land allocation"
      ],
      "documents": [
        "Aadhaar card",
        "Income certificate",
        "Caste certificate"
      ],
      "process": "1. Fill the application form\n2. Submit it to the nodal agency\n3. Wait for the merit list\n4. Housing is allotted",
      "website": "www.pmay.gov.in"
    },
    "mr": {
      "title": "प्रधानमंत्री आवास योजना",
      "description": "गरीब आणि कमी उत्पन्न असलेल्या कुटुंबांसाठी परवडणारी घरे",
      "category": "गृहनिर्माण",
      "tags": [
        "घर",
        "निवारा"
      ],
      "eligibility": "EWS आणि LIG श्रेणीतील कुटुंबे",
      "about": "गरीब आणि कमी उत्पन्न असलेल्या कुटुंबांना परवडणाऱ्या घरासाठी ही योजना मदत करते.",
      "benefits": [
        "अनुदानित किमतीत घर",
        "सुलभ कर्ज सुविधा",
        "जमीन वाटप"
      ],
      "documents": [
        "आधार कार्ड",
        "उत्पन्न प्रमाणपत्र",
        "जात प्रमाणपत्र"
      ],
      "process": "1. अर्ज भरा\n2. नोडल संस्थेकडे जमा करा\n3. गुणवत्ता यादीची प्रतीक्षा करा\n4. घराचे वाटप केले जाते",
      "website": "www.pmay.gov.in"
    }
  },
  "5": {
    "en": {
      "title": "Skill Development Scheme",
      "description": "Free skill training and certification",
      "category": "Skills",
      "tags": [
        "Training",
        "Employment"
      ],
      "eligibility": "All youth who have completed class 10 or above",
      "about": "This scheme provides free training in various skills to help young people build careers.",
      "benefits": [
        "Free training",
        "Industry-recognized certificate",
        "Job assistance"
      ],
      "documents": [
        "Class 10 pass certificate",
        "Aadhaar card",
        "Bank account"
      ],
      "process": "1. Choose a training centre\n2. Register online\n3. Start training\n4. Pass the examination",
      "website": "www.skillindia.gov.in"
    },
    "mr": {
      "title": "कौशल्य विकास योजना",
      "description": "मोफत कौशल्य प्रशिक्षण आणि प्रमाणपत्र",
      "category": "कौशल्य",
      "tags": [
        "प्रशिक्षण",
        "रोजगार"
      ],
      "eligibility": "इयत्ता 10 वी उत्तीर्ण किंवा त्यापुढील सर्व युवक",
      "about": "युवकांना विविध कौशल्यांमध्ये मोफत प्रशिक्षण देऊन करिअर घडवण्यासाठी ही योजना आहे.",
      "benefits": [
        "मोफत प्रशिक्षण",
        "प्रमाणपत्र",
        "नोकरीसाठी मदत"
      ],
      "documents": [
        "इयत्ता 10 वी उत्तीर्ण प्रमाणपत्र",
        "आधार कार्ड",
        "बँक खाते"
      ],
      "process": "1. प्रशिक्षण केंद्र निवडा\n2. ऑनलाइन नोंदणी करा\n3. प्रशिक्षण सुरू करा\n4. परीक्षा उत्तीर्ण करा",
      "website": "www.skillindia.gov.in"
    }
  },
  "6": {
    "en": {
      "title": "MUDRA Loan Scheme",
      "description": "Loans up to ₹10 lakh for small businesses",
      "category": "Business",
      "tags": [
        "Loan",
        "Business"
      ],
      "eligibility": "New and existing small business owners",
      "about": "MUDRA provides collateral-free loans to small businesses.",
      "benefits": [
        "Loans up to ₹10 lakh",
        "Lower interest rates",
        "Simple approval process"
      ],
      "documents": [
        "Aadhaar card",
        "Business plan",
        "Bank account"
      ],
      "process": "1. Contact a bank\n2. Fill the application\n3. Submit documents\n4. Wait for approval",
      "website": "www.mudra.org.in"
    },
    "mr": {
      "title": "मुद्रा कर्ज योजना",
      "description": "लघु व्यवसायासाठी ₹10 लाखांपर्यंत कर्ज",
      "category": "व्यवसाय",
      "tags": [
        "कर्ज",
        "व्यवसाय"
      ],
      "eligibility": "नवीन आणि विद्यमान लघु व्यवसायिक",
      "about": "MUDRA योजनेअंतर्गत लघु व्यवसायांना तारणाशिवाय कर्ज दिले जाते.",
      "benefits": [
        "₹10 लाखांपर्यंत कर्ज",
        "कमी व्याजदर",
        "सुलभ मंजुरी प्रक्रिया"
      ],
      "documents": [
        "आधार कार्ड",
        "व्यवसाय योजना",
        "बँक खाते"
      ],
      "process": "1. बँकेशी संपर्क करा\n2. अर्ज भरा\n3. कागदपत्रे जमा करा\n4. मंजुरीची प्रतीक्षा करा",
      "website": "www.mudra.org.in"
    }
  },
  "7": {
    "en": {
      "title": "Unemployment Allowance",
      "description": "Monthly allowance for unemployed youth",
      "category": "Unemployment",
      "tags": [
        "Jobs",
        "Income"
      ],
      "eligibility": "Unemployed people aged 18–35",
      "about": "This scheme provides financial assistance and employment training to unemployed youth.",
      "benefits": [
        "Monthly financial assistance",
        "Employment training",
        "Job search assistance"
      ],
      "documents": [
        "Aadhaar card",
        "Educational certificate",
        "Unemployment registration"
      ],
      "process": "1. Register at the employment office\n2. Submit the application\n3. Wait for application processing\n4. Receive assistance",
      "website": "www.employment.gov.in"
    },
    "mr": {
      "title": "बेरोजगारी भत्ता",
      "description": "बेरोजगार युवकांना मासिक भत्ता",
      "category": "बेरोजगारी",
      "tags": [
        "नोकरी",
        "उत्पन्न"
      ],
      "eligibility": "18 ते 35 वर्षे वयोगटातील बेरोजगार युवक",
      "about": "बेरोजगार युवकांना आर्थिक मदत आणि रोजगार प्रशिक्षण देण्यासाठी ही योजना आहे.",
      "benefits": [
        "मासिक आर्थिक मदत",
        "रोजगार प्रशिक्षण",
        "नोकरी शोधण्यासाठी मदत"
      ],
      "documents": [
        "आधार कार्ड",
        "शैक्षणिक प्रमाणपत्र",
        "बेरोजगारी नोंदणी"
      ],
      "process": "1. रोजगार कार्यालयात नोंदणी करा\n2. अर्ज जमा करा\n3. अर्ज प्रक्रियेची प्रतीक्षा करा\n4. मदत मिळवा",
      "website": "www.employment.gov.in"
    }
  },
  "8": {
    "en": {
      "title": "Old Age Pension Scheme",
      "description": "Pension for senior citizens aged 60+",
      "category": "Social Security",
      "tags": [
        "Senior Citizens",
        "Pension"
      ],
      "eligibility": "People aged 60 years and above",
      "about": "This scheme provides social security and financial assistance to senior citizens.",
      "benefits": [
        "₹500–₹1,500 monthly pension",
        "Health facilities",
        "Housing assistance"
      ],
      "documents": [
        "Aadhaar card",
        "Age proof",
        "Income certificate"
      ],
      "process": "1. Apply at the local office\n2. Verify documents\n3. Wait for approval\n4. Receive the pension",
      "website": "www.socialsecurity.gov.in"
    },
    "mr": {
      "title": "वृद्धापकाळ निवृत्तीवेतन योजना",
      "description": "60 वर्षांवरील ज्येष्ठ नागरिकांसाठी पेन्शन",
      "category": "सामाजिक सुरक्षा",
      "tags": [
        "ज्येष्ठ नागरिक",
        "पेन्शन"
      ],
      "eligibility": "60 वर्षे किंवा त्याहून अधिक वयाचे नागरिक",
      "about": "ज्येष्ठ नागरिकांना सामाजिक सुरक्षा आणि आर्थिक मदत देण्यासाठी ही योजना आहे.",
      "benefits": [
        "₹500–₹1,500 मासिक पेन्शन",
        "आरोग्य सुविधा",
        "निवारा सहाय्य"
      ],
      "documents": [
        "आधार कार्ड",
        "वयाचा पुरावा",
        "उत्पन्न प्रमाणपत्र"
      ],
      "process": "1. स्थानिक कार्यालयात अर्ज करा\n2. कागदपत्रांची पडताळणी करा\n3. मंजुरीची प्रतीक्षा करा\n4. पेन्शन मिळवा",
      "website": "www.socialsecurity.gov.in"
    }
  }
};

// Return the current scheme data in the selected language.
// Backend version: the API should ideally return localized content
// or accept ?lang=hi|mr|en so the frontend does not own all translations.
function getLocalizedScheme(scheme) {
  const lang = appState.language || 'hi';
  const translated = SCHEME_TRANSLATIONS[scheme.id]?.[lang];
  if (!translated) return scheme;
  return { ...scheme, ...translated, badge: scheme.badge };
}

function getLocalizedSchemes() {
  return governmentSchemes.map(getLocalizedScheme);
}

function t(key) {
  const lang = appState.language || 'hi';
  return APP_TRANSLATIONS[lang]?.[key] || APP_TRANSLATIONS.hi[key] || key;
}

// Apply one language to every static UI element and re-render dynamic content.
function changeLanguage(lang) {
  const safeLang = ['hi', 'mr', 'en'].includes(lang) ? lang : 'hi';
  appState.language = safeLang;

  // Keep both keys for compatibility with the onboarding pages and old app data.
  localStorage.setItem('yojanalink_language', safeLang);
  localStorage.setItem('language', safeLang);

  userProfile.language = safeLang;
  document.documentElement.lang = safeLang;

  // Static elements use data-i18n/data-i18n-placeholder attributes.
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (APP_TRANSLATIONS[safeLang][key] !== undefined) {
      element.textContent = APP_TRANSLATIONS[safeLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (APP_TRANSLATIONS[safeLang][key] !== undefined) {
      element.placeholder = APP_TRANSLATIONS[safeLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const key = element.dataset.i18nAria;
    if (APP_TRANSLATIONS[safeLang][key] !== undefined) {
      element.setAttribute('aria-label', APP_TRANSLATIONS[safeLang][key]);
    }
  });

  // Settings select labels/options are also translated.
  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) languageSelect.value = safeLang;

  document.title = safeLang === 'en'
    ? 'YojanaLink | Government Schemes'
    : safeLang === 'mr'
      ? 'YojanaLink | सरकारी योजना'
      : 'YojanaLink | सरकारी योजनाएं';

  // Re-render scheme cards and suggestions using localized scheme data.
  renderSchemeCards();
  if (appState.currentView === 'suggestions') renderSuggestions();
  updateProfileDisplay();
}

// Backward-compatible alias used nowhere else, but kept simple for future code.
const applyAppLanguage = changeLanguage;

// ========================================
// SIGN OUT FUNCTIONALITY (साइन आउट करना)
// ========================================

// यह फंक्शन user को साइन आउट करता है और सभी डेटा को साफ करता है
function signOut() {
  // User से पुष्टि मांगें कि क्या वह सच में साइन आउट करना चाहता है
  const confirmSignOut = confirm(t('signOutConfirm'));
  
  // अगर user ने नहीं कहा तो वापस चला जाएं
  if (!confirmSignOut) {
    return;
  }
  
  // सभी localStorage डेटा को साफ करें (भाषा, प्रोफाइल इत्यादि)
  localStorage.clear();
  
  // सभी sessionStorage डेटा को साफ करें (verified phone number इत्यादि)
  sessionStorage.clear();
  
  // User को login page पर redirect करें
  window.location.href = 'login.html';
}

// ========================================
// PROFILE FUNCTIONS
// ========================================

// यह फंक्शन login/onboarding के समय ली गई असली जानकारी प्रोफाइल पेज पर दिखाता है
function updateProfileDisplay() {
  const placeholder = '—';

  if (elements.profileDisplayName) elements.profileDisplayName.textContent = userProfile.name || placeholder;
  if (elements.profileDisplayLocation) elements.profileDisplayLocation.textContent = userProfile.location || placeholder;
  if (elements.profileDisplayPhone) elements.profileDisplayPhone.textContent = userProfile.phone || placeholder;
  if (elements.profileDisplayAge) elements.profileDisplayAge.textContent = userProfile.age || placeholder;
  if (elements.profileDisplayGender) elements.profileDisplayGender.textContent = userProfile.gender || placeholder;
  if (elements.profileDisplayAadhaar) elements.profileDisplayAadhaar.textContent = userProfile.aadhaarMasked || placeholder;
}

// Profile editing no longer contains any document-upload control.
function showProfileEditModal() {
  document.getElementById('editName').value = userProfile.name || '';
  document.getElementById('editLocation').value = userProfile.location || '';
  document.getElementById('editPhone').value = userProfile.phone || '';
  document.getElementById('editAge').value = userProfile.age || '';
  document.getElementById('editGender').value = userProfile.gender || 'पुरुष';
  document.getElementById('editAadhaar').value = userProfile.aadhaar || '';
  elements.profileModal.classList.add('visible');
}

function saveProfileChanges(e) {
  e.preventDefault();

  userProfile.name = document.getElementById('editName').value.trim();
  userProfile.location = document.getElementById('editLocation').value.trim();
  userProfile.age = Number(document.getElementById('editAge').value) || '';
  userProfile.gender = document.getElementById('editGender').value;

  const aadhaar = String(document.getElementById('editAadhaar').value || '').replace(/\D/g, '');
  if (!/^\d{12}$/.test(aadhaar)) {
    alert(t('invalidAadhaar') || 'Please enter a valid 12-digit Aadhaar number.');
    return;
  }

  userProfile.aadhaar = aadhaar;
  userProfile.aadhaarMasked = maskAadhaar(aadhaar);

  // ============================================================
  // BACKEND WORK HERE:
  // Replace persistUserProfile() with PATCH /api/users/me.
  // The server should authenticate the user, validate the fields,
  // encrypt Aadhaar, and return the updated profile.
  // ============================================================
  persistUserProfile();
  updateProfileDisplay();
  elements.profileModal.classList.remove('visible');
  addChatMessage(t('updated'), 'bot');
}

// ========================================
// EVENT LISTENERS
// ========================================

// जब पूरा page लोड हो जाए तो यह कोड चलेगा
document.addEventListener('DOMContentLoaded', () => {
  
  // ===== APP शुरु करें =====
  renderSchemeCards();        // सभी scheme cards को दिखाएं
  updateProfileDisplay();     // user का profile दिखाएं
  
  // ===== LANGUAGE को apply करें (जो पहले से सेव है) =====
  // अगर कोई भाषा पहले से चुनी गई है तो वह भाषा अब लगा दें
  if (appState.language) {
    elements.languageSelect.value = appState.language;  // dropdown में वह भाषा select करें
    changeLanguage(appState.language);                  // पूरे app की भाषा बदल दें
  }
  
  // ===== DARK MODE को apply करें (जो पहले से सेव है) =====
  if (appState.darkMode) {
    document.body.classList.add('dark-mode');       // dark mode की class लगा दें
    elements.darkModeToggle.checked = true;         // toggle button को ON करें
  }
  
  // ===== FONT SIZE को apply करें (जो पहले से सेव है) =====
  if (appState.fontSize !== 'medium') {
    document.body.classList.add(`font-${appState.fontSize}`);  // font size की class लगा दें
    elements.fontSizeSelect.value = appState.fontSize;         // dropdown में वह size select करें
  }
  
  // ========================================
  // NAVIGATION (नीचे के बटन) 
  // ========================================
  
  // हर navigation बटन पर क्लिक करने के लिए
  elements.navItems.forEach(item => {
    item.addEventListener('click', () => {
      switchView(item.dataset.nav);  // सही page दिखाएं (होम/सुझाव/प्रोफाइल)
    });
  });
  
  // ========================================
  // HEADER ICONS (ऊपर के बटन)
  // ========================================
  
  elements.notificationBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePanel(elements.notificationPanel);
  });
  
  elements.settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePanel(elements.settingsPanel);
  });

  // Header profile button opens the profile view.
  elements.profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    elements.notificationPanel.classList.remove('visible');
    elements.settingsPanel.classList.remove('visible');
    switchView('profile');
  });

  // Explicit close buttons for notification and settings panels.
  document.querySelectorAll('.close-panel-btn').forEach((closeBtn) => {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const panel = closeBtn.closest('.panel-popup');
      if (panel) panel.classList.remove('visible');
    });
  });
  
  // Close panels when clicking elsewhere
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.notification-btn') && 
        !e.target.closest('.notification-panel')) {
      elements.notificationPanel.classList.remove('visible');
    }
    if (!e.target.closest('.settings-btn') && 
        !e.target.closest('.settings-panel')) {
      elements.settingsPanel.classList.remove('visible');
    }
  });
  
  // ========================================
  // SEARCH
  // ========================================
  
  elements.schemeSearch.addEventListener('input', (e) => {
    searchSchemes(e.target.value);
  });
  
  // ========================================
  // CHATBOT
  // ========================================
  
  elements.chatbotFab.addEventListener('click', toggleChatbot);
  elements.chatbotCloseBtn.addEventListener('click', toggleChatbot);
  
  elements.chatbotSendBtn.addEventListener('click', sendChatbotMessage);
  elements.chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendChatbotMessage();
  });
  
  // ========================================
  // MODALS
  // ========================================
  
  elements.modalCloseBtn.addEventListener('click', () => {
    elements.schemeModal.classList.remove('visible');
  });
  
  elements.modalCancelBtn.addEventListener('click', () => {
    elements.schemeModal.classList.remove('visible');
  });
  
  // BACKEND WORK HERE: submit the selected scheme/application to the server.
  elements.applyNowBtn.addEventListener('click', () => {
    addChatMessage(t('applySuccess'), 'bot');
    elements.schemeModal.classList.remove('visible');
    setTimeout(() => toggleChatbot(), 500);
  });
  
  elements.profileModalCloseBtn.addEventListener('click', () => {
    elements.profileModal.classList.remove('visible');
  });
  
  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === elements.schemeModal) {
      elements.schemeModal.classList.remove('visible');
    }
    if (e.target === elements.profileModal) {
      elements.profileModal.classList.remove('visible');
    }
  });
  
  // ========================================
  // SETTINGS
  // ========================================
  
  elements.darkModeToggle.addEventListener('change', toggleDarkMode);
  
  // जब फॉन्ट साइज चेंज हो तो changeFontSize फंक्शन कॉल करें
  elements.fontSizeSelect.addEventListener('change', (e) => {
    changeFontSize(e.target.value);
  });
  
  // जब भाषा चेंज हो तो changeLanguage फंक्शन कॉल करें
  elements.languageSelect.addEventListener('change', (e) => {
    changeLanguage(e.target.value);
  });
  
  // नोटिफिकेशन टॉगल करने के लिए
  elements.notificationsToggle.addEventListener('change', (e) => {
    appState.notifications = e.target.checked;
  });
  
  // ========================================
  // PROFILE
  // ========================================
  
  elements.editProfileBtn.addEventListener('click', showProfileEditModal);
  elements.profileForm.addEventListener('submit', saveProfileChanges);
  
  // Close profile modal btn
  elements.profileModalCloseBtn.addEventListener('click', () => {
    elements.profileModal.classList.remove('visible');
  });
  
  // Sign Out बटन के लिए event listener जोड़ें
  const signOutBtn = document.getElementById('signOutBtn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', signOut);
  }
  
  // ========================================
  // OTP
  // ========================================
  
  elements.verifyOtpBtn.addEventListener('click', () => {
    const otp = document.getElementById('otpInput').value;
    if (otp.length === 6) {
      addChatMessage(t('otpVerified'), 'bot');
      elements.otpTimer.style.display = 'none';
      document.getElementById('otpInput').value = '';
    } else {
      addChatMessage(t('invalidOtp'), 'bot');
    }
  });
  
  elements.resendOtpBtn.addEventListener('click', resendOtp);
  
  // ========================================
  // RESPONSIVE BEHAVIOR
  // ========================================
  
  // Prevent panel overflow on small screens
  const updateViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  updateViewportHeight();
  window.addEventListener('resize', updateViewportHeight);
  
  // Show welcome message in chatbot
  setTimeout(() => {
    addChatMessage(t('welcomeChat'), 'bot');
  }, 1000);
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Prevent multiple rapid clicks
function debounce(func, delay) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
}

// Handle offline/online status
window.addEventListener('online', () => {
  addChatMessage(t('online'), 'bot');
});

window.addEventListener('offline', () => {
  addChatMessage(t('offline'), 'bot');
});

// ========================================
// END OF SCRIPT
// ========================================
