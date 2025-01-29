export const siteContent = {
  // Global Components
  header: {
    logo: {
      alt: "Divine Design Wellness Logo"
    },
    navigation: [
      { text: "Home", href: "/" },
      { text: "Services", href: "/services" },
      { text: "Nutraceuticals", href: "/nutraceuticals" },
      { text: "Our Team", href: "/teams" },
      { text: "FAQ", href: "/faq" },
      { text: "Contact", href: "/contact" }
    ]
  },
  footer: {
    brand: {
      title: "Divine Design Wellness",
      tagline: "Empowering Your Journey to Wellness"
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about" },
        { text: "Our Team", href: "/teams" },
        { text: "Contact", href: "/contact" }
      ]
    },
    contactInfo: {
      title: "Contact Info",
      address: {
        lines: ["100 W. Walnut", "Decatur, TX"]
      },
      phone: "(940) 268-4412"
    },
    connect: {
      title: "Connect With Us",
      description: "Follow us on social media for wellness tips, updates, and inspiration.",
      socialLinks: [
        { 
          platform: "Facebook", 
          href: "https://m.facebook.com/6156192790759/", 
          ariaLabel: "Follow us on Facebook",
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]
    },
    legal: {
      copyright: "© {year} Divine Design Wellness. All rights reserved.",
      links: [
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms of Service", href: "/terms" }
      ]
    }
  },

  // FAQ Content
  faq: {
    hero: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our services and treatments."
    },
    questions: [
      {
        question: "What is EvexiPEL?",
        answer: "EvexiPEL is the flagship therapy of EVEXIAS Health Solutions. This method delivers life-changing bioidentical hormone therapy. EVEXIAS achieves this exclusively through strategic partnership with a leading compounding pharmacy and FDA-registered 503B outsourcing facility. This comprehensive approach combines physiological principles with innovative techniques to optimize hormone levels in both women and men."
      },
      {
        question: "How do I know if I'm a candidate for pellets?",
        answer: "If you experience a combination of fatigue, depressed mood, and lower/absent libido, you may have Androgen Insufficiency Syndrome (AIS). Hormone Replacement Therapy (HRT) is a highly effective treatment for AIS. Additionally, if you prefer a minimally invasive procedure every 3-4 months (4-6 months for men), you are an ideal candidate. Other symptoms that often improve with bio-identical hormone optimization include insomnia, early waking, anxiety, lack of energy/drive, lethargy, joint pain, and daytime sleepiness."
      },
      {
        question: "Do I have blood work done before each treatment?",
        answer: "Initial bloodwork is performed to establish baseline hormone levels, aid in diagnosing AIS, and assess any imbalances in other major hormone systems (e.g., adrenal, thyroid). These values will help determine your initial dosage. Four weeks after your first pellet insertion, you will have repeat labs (a smaller panel). These results will be reviewed at your six-week follow-up visit. Thereafter, a full panel of labs is drawn annually. If you experience any significant changes in symptoms related to hormone therapy, your nurse practitioner will recommend reassessment at that time."
      },
      {
        question: "What are the pellets made from?",
        answer: "The EvexiPEL method features the patented pellet that is plant based and derived from yams and designed to be an exact replication of what the body produces in contrast to synthetic hormones. This pellet is specifically designed to improve patient comfort and deliver sustained, steady dosing throughout the treatment cycle."
      },
      {
        question: "How long will the treatment last?",
        answer: "For women, the effects typically last an average of 3-4 months. Very active individuals may require therapy every 3 months or sooner, while less active or elderly individuals may experience benefits for longer than 4 months. In men, the typical cycle ranges from 4-6 months. The return of early symptoms of hormone insufficiency, such as fatigue, joint pain, or decreased libido, can indicate the need for your next insertion."
      },
      {
        question: "Is the therapy FDA approved?",
        answer: "The individual ingredients within the pellets are FDA-approved, and the distribution of these pellets is regulated by the FDA. However, the pellet insertion procedure itself is not FDA-approved. It's common for physicians to prescribe medications or therapies for uses not explicitly approved by the FDA (off-label) if they believe them to be safe and effective for their patients. The reason bio-identical hormones (compounded drugs) are not FDA-approved is due to their individualized dosing nature."
      },
      {
        question: "How are they administered?",
        answer: "Pellets are inserted using a very minor surgical procedure, performed in the office setting and requiring only local anesthesia. Using a very small incision (~ 1-2 cm in women, ~ 3-4 cm in men), they are inserted subcutaneously below the belt and above the buttock in women, and in the posterior flank in men. Recovery is very quick and uncomplicated; exercise restrictions for 3 days in women and 5 days in men are simply to avoid complications."
      },
      {
        question: "Does it matter if I'm on birth control?",
        answer: "Not at all. Certain types may have an influence on therapy, which your physician/provider will review with you."
      },
      {
        question: "Are there any side effects?",
        answer: "There are no serious or permanent side effects. In some cases, nuisance side effects can occur, such as hair growth or acne, both of which are very treatable."
      },
      {
        question: "What if I'm already on some form of HRT, like creams, patches, or pills?",
        answer: "Transitioning to pellet therapy from other forms of HRT is common. Your physician can assess your needs even if you're currently using another type of hormone replacement therapy. If you prefer to continue with your current HRT but are not ready for pellets, we can offer alternative formulations."
      },
      {
        question: "What if I've had breast cancer?",
        answer: "There is no direct causative link between bio-identical estrogen, progesterone, and breast cancer. The Women's Health Initiative (WHI) study in 2003 raised concerns about 'hormones and breast cancer,' but a long-term follow-up study published in JAMA in 2017 by one of the original WHI authors found no increased mortality from breast cancer in the subjects over an 18-year period. The number of patients receiving HRT 5 to 10 years after breast cancer treatment and remission is increasing. However, hormone use in patients with a history of hormone-receptor-positive tumors is not yet considered standard care. The decision to use hormones in this situation is an informed one that the patient must make for herself. Finally, patients with or recently recovered from breast cancer can receive testosterone alone to help manage both AIS and menopausal symptoms."
      }
    ],
    cta: {
      text: "Don't see your question? Contact us",
      buttonText: "Get in Touch",
      link: "/contact"
    }
  },

  // Nutraceuticals Content
  nutraceuticals: {
    hero: {
      title: "Our Nutraceuticals",
      subtitle: "Premium quality supplements to support your wellness journey"
    },
    description: "Premium quality supplements designed to support your wellness journey. Our comprehensive range of nutraceuticals is carefully selected to provide optimal nutritional support, enhance your body's natural functions, and promote overall well-being.",
    products: [
      {
        name: "QuiCalm",
        description: "Helps to reduce the feelings of stress and anxiety, as well as reduce stress related food cravings. QuiCalm contains Relora (extract containing Magnolia officinails and Phellodendron amurense barks), holy basil leaf extract and L-theanine. Good for adrenal fatigue and anxiety. This supplement can be taken up to three times a day"
      },
      {
        name: "Cognitive Ultra W/ Relora",
        description: "Supports stress management, appetite control and mood balance. This supplement uses the adaptogenec and neurotonic benefits of Bacopa extra with Relora to support a calm state. This supplement helps stabilize cortisol (the stress hormone), regulates melatonin, increase concentration, and has been shown to reduce stress related cravings."
      },
      {
        name: "Synapsin LPT",
        description: "Bioavailable peptide that supports cognitive function, mental focus, clarity and overall wellbeing. Key benefits include mental agility and focus, energy support and antioxidant protection. Simply chew and swallow 1/2 1 tablet daily."
      },
      {
        name: "Evexias SLEEP",
        description: "A comprehensive supplement designed to support restful and quality sleep without the morning grogginess. This supplement uses valerian root, magnolia bark, GABA, 5-HTP and melatonin. Using antioxidants and compounds, this supplement maximizes the sleep cycle and promotes restful, restorative sleep without AM drowsiness."
      },
      {
        name: "DIM 150 MG",
        description: "Supports homonoal balanec and weight management in men and women. This supplement is a natural way to maintain proper estrogen metabolism-giving you proper hormone balance and preventing estrogen dominance. This supplement is recommend twice a day for men and once a day for women.f"
      },
      {
        name: "ADK",
        description: "This suppluement includes vitamin A, D3 and K2. These help supporrt bone and density and structure, calcium utilization and cardiovascular health. Vitamin A and D support bone building and help minimize bone breakdown cells. Vitamin K2 helps calcium deposition into the bones and helps blood vessels maintain elasticity."
      },
      {
        name: "Complete Mag",
        description: "Three forms of magnesium (Taurate, Glycinate, Malate) to help promote the absorption of metabolism of calcium, as well as the metabolic processes that aid in neuromuscular, cardiac and acid-base balance in the body. Magnesium supports hormone balance, glucose metabolism, bone health, mental health, gastrointestinal regularity and cardiovascular health."
      },
      {
        name: "Thyroid Support",
        description: "You should take Thyroid support to help maintain healthy thyroid function, which is essential for regulating metabolism, energy levels, and overall well-being. This supplement contains key nutrients like iodine, selenium, and L-tyrosine, which suppor thyroid hormone production and balance. It provides a convenient way to suppor toptimal thyroid health and adderss potential deficiencies that can affect metabolism and energy."
      },
      {
        name: "GI Guard",
        description: "You should take GI Guard to promote digestive health and support a balanced gut microbiome. This supplement includes ingredients like probiotics, prebiotics, and soothing herbs such as ale vera and slippery elm, which can help maintain gastrointestinal comfort and function. It provides a convenient way to support overall digestiev wellness and alleviate symptoms of occasional digestive discomfort."
      },
      {
        name: "Iodine Complete",
        description: "You should take Iodine Complete to ensure adequate iodine levels, which are crucial for thyroid hormone production and regulation. This supplement combines iodine with selenium and other essential nutrients to support thyroid function and overall metabolic health. It provides a convenient way to maintain optimal iodine levels, which are essential for maintaining energy levels, metabolism, and overall well-being."
      },
      {
        name: "Glutathione LPT",
        description: "One of the most present antioxidants in the body, this supplement shields from oxidative damage, aids in detoxifications and anti-inflammatory support and boosts the imunte system. This is a liposomal chewable tablet for enhanced efficacy and bioavailability."
      },
      {
        name: "INFLAM-X LPT",
        description: "Targets inflammation and oxidative stress by harnessing tetrahydrocurcuminoids (compounds from the root of turmeric). THCs are more chemically stable and bioavailable, making them superior to curcumin alone in anti-inflammatory and antioxidant agency. Inflam-X helps curb chronic inflammation, speed sports recovery, protects the liver, manages blood sugar and exerts anti-cancer and anti-aging effects."
      },
      {
        name: "IMMUNO-T LPT",
        description: "You should take Immuno-T LPT to strengthen your imune system with its powerful blend of vitamin C, zinc, elderberry extract, and echinacea. This supplement helps support your body's defenses against infections and promotes overall immune health. It's a convenient way to ensure you're giving your immune system the nutrients it needs to stay strong and resilient."
      },
      {
        name: "NAC 500",
        description: "You should take NAC 500 to support respiratory health and detoxification processes in your body. N-acetylcysteine (NAC) is a potent antioxidant that helps replenish glutathione levels, crucial for combating oxidative stress and supporting immune function. This upplement offers a convenient way to promote overall well-being and protect against environmental toxins and pollutants."
      }
    ]
  },

  // Services Content
  services: {
    hero: {
      title: "Our Services",
      subtitle: "Comprehensive wellness solutions tailored to your unique needs."
    },
    servicesList: [
      {
        id: "bhrt",
        title: "Bioidentical HRT",
        description: "Personalized hormone replacement therapy using bioidentical hormones to restore balance and vitality. Our comprehensive approach includes detailed testing and ongoing monitoring to ensure optimal results.",
        image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e",
        benefits: [
          "Improved energy levels",
          "Better sleep quality",
          "Enhanced mood stability",
          "Increased muscle mass",
          "Better cognitive function"
        ]
      },
      {
        id: "thyroid",
        title: "Thyroid",
        description: "A dietary supplement to support thyroid function and health. This is a vegetarian blend of Tyrosine with herbal extracts, vitamins and minerals, not found in other supplements, and includes patented ForsLean Coleius forkskohlii to support the maintenance and proper function of a healthy thyroid.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
        benefits: [
          "Appetite and weight management",
          "Energy",
          "Mood",
          "Production of thyroid hormones T3 (Triiodothyronine) and T4 (Thyroxine)"
        ]
      },
      {
        id: "pcos",
        title: "PCOS",
        description: "Specialized care for Polycystic Ovary Syndrome through an integrative approach. We combine lifestyle modifications, hormone balancing, and targeted supplementation to manage PCOS effectively.",
        image: "https://images.unsplash.com/photo-1631815589825-d2d46939e6d2",
        benefits: [
          "Hormone balance",
          "Regular menstrual cycles",
          "Improved fertility",
          "Better skin health",
          "Weight management support"
        ]
      },
      {
        id: "weight-management",
        title: "Weight Loss and Management",
        description: "Comprehensive weight management programs that focus on sustainable results. Our approach combines medical supervision, nutritional guidance, and lifestyle optimization.",
        image: "https://images.unsplash.com/photo-1579684288538-c76a2fab9617",
        benefits: [
          "Personalized meal plans",
          "Medical supervision",
          "Behavioral support",
          "Exercise guidance",
          "Long-term success strategies"
        ]
      },
      {
        id: "iv-therapy",
        title: "IV Therapy",
        description: "Advanced IV therapy treatments for optimal nutrient delivery and health support. (Coming March 2025)",
        image: "https://images.unsplash.com/photo-1631815589654-b2a4d6fa7ee3",
        comingSoon: true,
        availableDate: "March 2025",
        benefits: [
          "Rapid nutrient delivery",
          "Enhanced hydration",
          "Improved energy levels",
          "Immune system support",
          "Quick recovery"
        ]
      }
    ]
  },

  // Home Page
  home: {
    hero: {
      title: "Divine Design Wellness",
      description: "Divine Design Wellness is located in Decatur TX, and is part of the Empowered Life collective.",
      ctaButton: "Contact Us"
    },
    about: {
      title: "About Us",
      mainText: "At Divine Design Wellness, our goal is to enrich lives by focusing on hormone balance and optimization. We're driven to achieve optimal health for both ourselves and our patients. Our commitment is rooted in an integrated, functional approach—examining and addressing the underlying causes of health issues rather than simply alleviating symptoms.",
      subText: "Our commitment to excellence in hormone optimization, regenerative medicine, and aesthetic treatments is backed by years of clinical expertise and cutting-edge technology.",
      ctaButton: "Learn More About Us"
    },
    hormoneTherapy: {
      title: "Bioidentical Hormone Therapy",
      description: "Experience the transformative power of EvexiPEL, our flagship bioidentical hormone therapy. Using plant-based pellets derived from yams, we deliver sustained, steady hormone optimization tailored to your unique needs.",
      highlights: [
        "Personalized treatment plans based on comprehensive lab work",
        "Minimally invasive procedure with quick recovery",
        "3-4 month effectiveness for women, 4-6 months for men",
        "Treatment for fatigue, mood changes, and hormone imbalances"
      ],
      ctaButton: "Learn More About HRT",
      ctaLink: "/faq#hormone-therapy"
    },
    team: {
      title: "Our Team",
      subtitle: "Meet our experienced professionals dedicated to your wellness journey.",
      teamMembers: [
        {
          name: "Olivia",
          role: "Women's Health Nurse Practitioner",
          image: "/assets/Olivia.JPEG"
        },
        {
          name: "Kelly",
          role: "Nurse Practitioner",
          image: "/assets/Kelly.JPEG"
        }
      ],
      viewMoreText: "Meet Our Full Team"
    },
    contact: {
      location: {
        title: "Location",
        address: ["100 W. Walnut", "Decatur, TX"]
      },
      phone: {
        title: "Phone",
        number: "(940) 268-4412"
      },
      hours: {
        title: "Hours of Operation",
        schedule: [
          { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
          { days: "Saturday", hours: "10:00 AM - 2:00 PM" },
          { days: "Sunday", hours: "Closed" }
        ]
      },
      ctaButton: "Book Appointment"
    },
    faq: {
      title: "Common Questions",
      subtitle: "Find quick answers to frequently asked questions about our services",
      viewAllText: "View All FAQs",
      featuredQuestions: [
        {
          question: "What if I've had breast cancer?",
          answer: "Our approach to hormone therapy for breast cancer survivors is highly personalized and carefully considered. We conduct comprehensive evaluations and work closely with your oncology team to develop a safe, effective treatment plan.",
          link: "/faq#breast-cancer"
        }
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive wellness solutions tailored to your needs",
      viewAllText: "View All Services",
      featured: [
        {
          title: "Bioidentical HRT",
          description: "Personalized hormone replacement therapy using bioidentical hormones to restore balance and vitality.",
          link: "/services#bhrt"
        },
        {
          title: "Thyroid",
          description: "A dietary supplement to support thyroid function and health. This is a vegetarian blend of Tyrosine with herbal extracts, vitamins and minerals, not found in other supplements, and includes patented ForsLean Coleius forkskohlii to support the maintenance and proper function of a healthy thyroid.",
          link: "/services#thyroid"
        },
        {
          title: "PCOS",
          description: "Specialized care for Polycystic Ovary Syndrome through an integrative approach.",
          link: "/services#pcos"
        },
        {
          title: "Weight Loss and Management",
          description: "Comprehensive weight management programs that focus on sustainable results.",
          link: "/services#weight-management"
        },
        {
          title: "IV Therapy",
          description: "Advanced IV therapy treatments for optimal nutrient delivery and health support.",
          link: "/services#iv-therapy",
          comingSoon: true,
          availableDate: "March 2025"
        }
      ]
    },
    nutraceuticals: {
      title: "Nutraceuticals",
      subtitle: "Premium supplements and wellness products to support your health journey",
      featured: [
        {
          title: "QuiCalm",
          description: "Helps to reduce the feelings of stress and anxiety, as well as reduce stress related food cravings. QuiCalm contains Relora (extract containing Magnolia officinails and Phellodendron amurense barks), holy basil leaf extract and L-theanine. Good for adrenal fatigue and anxiety. This supplement can be taken up to three times a day",
          link: "/nutraceuticals#hormone-support"
        },
        {
          title: "Cognitive Ultra W/ Relora",
          description: "Supports stress management, appetite control and mood balance. This supplement uses the adaptogenec and neurotonic benefits of Bacopa extra with Relora to support a calm state. This supplement helps stabilize cortisol (the stress hormone), regulates melatonin, increase concentration, and has been shown to reduce stress related cravings.",
          link: "/nutraceuticals#immune-health"
        },
        {
          title: "Synapsin LPT",
          description: "Bioavailable peptide that supports cognitive function, mental focus, clarity and overall wellbeing. Key benefits include mental agility and focus, energy support and antioxidant protection. Simply chew and swallow 1/2 1 tablet daily.",
          link: "/nutraceuticals#energy"
        }
      ],
      viewAllText: "View All Products"
    }
  },

  // About Page
  about: {
    hero: {
      title: "About Divine Design Wellness",
      subtitle: "Excellence in Integrative Healthcare"
    },
    welcome: {
      mainText: "At Divine Design Wellness, we are committed to redefining healthcare through an integrative approach that harmoniously combines advanced medical science with personalized attention. Our state-of-the-art wellness center serves as a sanctuary where cutting-edge treatments meet compassionate care.",
      subText: "Under the leadership of our board-certified medical professionals, we deliver evidence-based treatments tailored to your unique health profile. Our approach focuses on identifying and addressing root causes rather than just managing symptoms, ensuring sustainable health outcomes.",
      features: {
        title: "What distinguishes our practice:",
        list: [
          "Comprehensive Health Assessment & Monitoring",
          "Advanced Diagnostic Technologies",
          "Integrative Treatment Protocols",
          "Board-Certified Medical Team",
          "Evidence-Based Therapeutic Approaches"
        ]
      },
      conclusion: "Our expertise spans hormone optimization, regenerative medicine, aesthetic treatments, and wellness therapies. We leverage the latest medical advancements while maintaining a patient-centered approach, ensuring that each treatment plan is as unique as the individual it serves."
    },
    mainText: "At Divine Design Wellness, our goal is to enrich lives by focusing on hormone balance and optimization. We're driven to achieve optimal health for both ourselves and our patients. Our commitment is rooted in an integrated, functional approach—examining and addressing the underlying causes of health issues rather than simply alleviating symptoms.",
    values: [
      "Integrative Healthcare Excellence",
      "Personalized Patient Care",
      "Advanced Treatment Solutions"
    ]
  },

  // Teams Page
  teams: {
    hero: {
      title: "Meet Our Team",
      subtitle: "Dedicated professionals committed to your wellness journey"
    },
    teamMembers: [
      {
        name: "Olivia",
        role: "Nurse Practitioner",
        image: "/assets/Olivia.JPEG",
        bio: "Women's Health Nurse Practitioner",
        specialties: []
      },
      {
        name: "Kelly",
        role: "Nurse Practitioner",
        image: "/assets/Kelly.JPEG",
        bio: "Family Nurse Practitioner, Certified Nurse Midwife",
        specialties: [
          "Hormone Optimization",
          "Thyroid Management",
          "Weight Management",
          "Women's Health"
        ]
      }
    ],
    empoweredTeam: {
      title: "Empowered Life Team",
      members: [
        {
          name: "Dr. Ericka",
          role: "Chiropractor",
          image: "/assets/Dr._Ericka.png",
          link: "https://www.empoweredlife-chiro.com/"
        },
        {
          name: "Dr. Paris",
          role: "Occupational Therapist",
          image: "/assets/Dr._Paris.png",
          link: "https://www.functionalflower.com/"
        },
        {
          name: "Alicia",
          role: "Licensed Professional Counselor",
          image: "/assets/Alicia_Wimsatt.png",
          link: "https://couchtalkcounseling.com/"
        },
        {
          name: "Marissa",
          role: "Director of First impressions",
          image: "/assets/Marissa.png",
          link: "#"
        }
      ]
    }
  },

  // Contact Page
  contact: {
    hero: {
      title: "Contact Us",
      subtitle: "We're here to help you on your wellness journey. Reach out to us with any questions or to schedule an appointment."
    },
    info: {
      location: {
        title: "Location",
        address: ["100 W. Walnut", "Decatur, TX"]
      },
      phone: {
        title: "Phone",
        number: "(940) 268-4412"
      },
      hours: {
        title: "Hours of Operation",
        schedule: [
          { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
          { days: "Saturday", hours: "10:00 AM - 2:00 PM" },
          { days: "Sunday", hours: "Closed" }
        ]
      }
    },
    form: {
      title: "Send us a Message",
      fields: {
        name: {
          label: "Full Name",
          placeholder: "Enter your full name"
        },
        email: {
          label: "Email Address",
          placeholder: "Enter your email address"
        },
        phone: {
          label: "Phone Number",
          placeholder: "Enter your phone number"
        },
        message: {
          label: "Message",
          placeholder: "How can we help you?"
        }
      },
      submitButton: "Send Message"
    }
  }
} 