export const siteContent = {
  // Global Components
  header: {
    logo: {
      alt: "Divine Design Wellness Logo"
    },
    navigation: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
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
      phone: "(940) 268-4412",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM"
    },
    connect: {
      title: "Connect With Us",
      description: "Follow us on social media for wellness tips, updates, and inspiration.",
      socialLinks: [
        { platform: "Facebook", href: "#", ariaLabel: "Follow us on Facebook" },
        { platform: "Instagram", href: "#", ariaLabel: "Follow us on Instagram" }
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
    categories: [
      {
        title: "General Questions",
        questions: [
          {
            question: "What if I've had breast cancer?",
            answer: "Our approach to hormone therapy for breast cancer survivors is highly personalized and carefully considered. We conduct comprehensive evaluations, review your complete medical history, and work closely with your oncology team. While some forms of hormone therapy may not be suitable, we offer various alternative wellness treatments and can develop a safe, effective plan tailored to your specific situation and recovery journey."
          }
        ]
      },
      {
        title: "Treatment & Services",
        questions: []
      },
      {
        title: "Appointments & Scheduling",
        questions: []
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
        description: "Stress and anxiety support supplement"
      },
      {
        name: "Cognitive Ultra W/ Relora",
        description: "Advanced cognitive function support"
      },
      {
        name: "Synapsin LPT",
        description: "Neural support formula"
      },
      {
        name: "Evexias SLEEP",
        description: "Natural sleep support supplement"
      },
      {
        name: "DIM 150 MG",
        description: "Hormone balance support"
      },
      {
        name: "ADK",
        description: "Essential vitamins A, D, and K supplement"
      },
      {
        name: "Complete Mag",
        description: "Comprehensive magnesium formula"
      },
      {
        name: "Thyroid Support",
        description: "Natural thyroid function support"
      },
      {
        name: "GI Guard",
        description: "Digestive health support"
      },
      {
        name: "Iodine Complete",
        description: "Complete iodine supplementation"
      },
      {
        name: "Glutathione LPT",
        description: "Antioxidant support formula"
      },
      {
        name: "INFLAM-X LPT",
        description: "Inflammation support supplement"
      },
      {
        name: "IMMUNO-T LPT",
        description: "Immune system support"
      },
      {
        name: "NAC 500",
        description: "Antioxidant and respiratory support"
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
        description: "Expert thyroid management using advanced diagnostics and personalized treatment plans. We address both hypothyroid and hyperthyroid conditions with a comprehensive approach to restore optimal thyroid function.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
        benefits: [
          "Balanced metabolism",
          "Improved energy",
          "Weight management",
          "Better temperature regulation",
          "Enhanced mental clarity"
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
      description: "Optimize your health, starting today. Contact us to schedule your consultation and discover the transformative benefits of hormone pellet therapy, nutraceuticals and peptide therapy, and IV therapy.",
      ctaButton: "Contact Us"
    },
    about: {
      title: "About Us",
      mainText: "At Divine Design Wellness, we deliver transformative healthcare through an integrative approach that combines advanced medical science with personalized attention.",
      subText: "Our commitment to excellence in hormone optimization, regenerative medicine, and aesthetic treatments is backed by years of clinical expertise and cutting-edge technology.",
      ctaButton: "Learn More About Us"
    },
    team: {
      title: "Our Team",
      subtitle: "Meet our experienced professionals dedicated to your wellness journey.",
      teamMembers: [
        {
          name: "Olivia",
          role: "Practice Manager",
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
          description: "Expert thyroid management using advanced diagnostics and personalized treatment plans.",
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
    }
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
        role: "Practice Manager",
        image: "/assets/Olivia.JPEG",
        bio: "Olivia serves as our Practice Manager, ensuring smooth operations and exceptional patient care. Her organizational skills and commitment to patient satisfaction help create a welcoming and efficient healthcare environment.",
        specialties: [
          "Practice Management",
          "Patient Care Coordination",
          "Healthcare Administration",
          "Patient Relations"
        ]
      },
      {
        name: "Kelly",
        role: "Nurse Practitioner",
        image: "/assets/Kelly.JPEG",
        bio: "Kelly is a dedicated Nurse Practitioner with extensive experience in hormone optimization and wellness. Her patient-centered approach and deep understanding of integrative medicine help create personalized treatment plans that deliver real results.",
        specialties: [
          "Hormone Optimization",
          "Thyroid Management",
          "Weight Management",
          "Women's Health"
        ]
      }
    ]
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