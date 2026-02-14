import { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  fr: {
    hero: {
      title: "Bouclier Préventif Contre le Feu Bactérien",
      subtitle: "Produit phytosanitaire à usage préventif conçu pour protéger les vergers contre le feu bactérien et soutenir la résistance naturelle des arbres fruitiers.",
      buttons: {
        contact: "Nous contacter",
        learnMore: "Découvrir BlightX"
      }
    },
    about: {
      title: "Qu'est-ce que BlightX ?",
      description: "BlightX est un produit phytosanitaire à usage préventif destiné aux vergers.",
      description2: "Il contribue à limiter le développement du feu bactérien tout en renforçant la structure cellulaire et les mécanismes de défense des arbres fruitiers."
    },
    usage: {
      title: "Mode d'Utilisation",
      cards: {
        dosage: { title: "DOSE", text: "5 kg pour 120 à 150 L d’eau" },
        prep: { title: "PRÉPARATION", text: "Préparer un prémélange (méthode slurry) en incorporant progressivement la poudre dans l’eau jusqu’à obtention d’une pâte homogène, puis verser dans la cuve." },
        app: { title: "APPLICATION", text: "Pulvérisation intégrale de la canopée jusqu’à couverture uniforme. Dose indicative : 2 à 2,5 L de bouillie par arbre adulte." }
      }
    },
    crops: {
      title: "Cultures Cibles",
      items: ["Poiriers", "Pommiers", "Cognassiers"]
    },
    formulation: {
      title: "Composition Fonctionnelle",
      disclaimer: "Formule à base de composants d’origine végétale et minérale.",
      ingredients: [
        "Argile Blanche",
        "Silicate de Potasse",
        "Essence de Pin",
        "Tea Tree Oil"
      ]
    },
    sustainability: {
      title: "Engagement Agricole Durable",
      points: [
        "Conçu pour accompagner une gestion responsable des vergers.",
        "Sans résidus chimiques persistants.",
        "Compatible avec des pratiques culturales durables et respectueuses de l’écosystème."
      ]
    },
    product: {
      title: "Spécifications Techniques",
      specs: [
        "Poudre à diluer",
        "Application préventive",
        "Formation d’un écran protecteur après séchage",
        "Conservation longue durée",
        "Fabrication en Tunisie"
      ],
      packaging: {
        title: "Conditionnements Disponibles",
        options: [
          {
            weight: "5 kg",
            label: "Professionnel",
            description: "Adapté aux vergers et aux exploitations arboricoles."
          },
          {
            weight: "1 kg",
            label: "Petit exploitant",
            description: "Idéal pour les petites parcelles et l’arboriculture familiale."
          }
        ]
      }
    },
    cta: {
      title: "Protégez vos vergers dès aujourd’hui.",
      buttons: {
        contact: "Nous contacter",
        demo: "Demander une démonstration",
        distributor: "Devenir distributeur"
      },
      newsletter: {
        title: "Restez informé",
        placeholder: "Votre adresse email",
        button: "S'inscrire",
        success: "Merci ! Vous êtes inscrit.",
        error: "Une erreur est survenue.",
        loading: "Inscription...",
        disclaimer: "Recevez nos dernières actualités sur la protection des cultures."
      }
    },
    footer: {
      tagline: "Protection contre le feu bactérien",
      contact: "contact@blightx.com",
      country: "Tunisie 🇹🇳"
    }
  },
  en: {
    hero: {
      title: "Preventive Shield Against Fire Blight",
      subtitle: "Preventive phytosanitary product designed to protect orchards against fire blight and support the natural resistance of fruit trees.",
      buttons: {
        contact: "Contact Us",
        learnMore: "Discover BlightX"
      }
    },
    about: {
      title: "What is BlightX?",
      description: "BlightX is a preventive phytosanitary product intended for orchards.",
      description2: "It contributes to limiting the development of fire blight while strengthening the cellular structure and defense mechanisms of fruit trees."
    },
    usage: {
      title: "Instructions for Use",
      cards: {
        dosage: { title: "DOSAGE", text: "5 kg for 120 to 150 L of water" },
        prep: { title: "PREPARATION", text: "Prepare a premix (slurry method) by gradually incorporating the powder into water until a homogeneous paste is obtained, then pour into the tank." },
        app: { title: "APPLICATION", text: "Full canopy spray until uniform coverage. Indicative dose: 2 to 2.5 L of mixture per adult tree." }
      }
    },
    crops: {
      title: "Target Crops",
      items: ["Pear Trees", "Apple Trees", "Quince Trees"]
    },
    formulation: {
      title: "Functional Composition",
      disclaimer: "Formula based on components of plant and mineral origin.",
      ingredients: [
        "White Clay",
        "Potassium Silicate",
        "Pine Essence",
        "Tea Tree Oil"
      ]
    },
    sustainability: {
      title: "Sustainable Agricultural Commitment",
      points: [
        "Designed to accompany responsible orchard management.",
        "No persistent chemical residues.",
        "Compatible with sustainable and ecosystem-friendly cultural practices."
      ]
    },
    product: {
      title: "Technical Specifications",
      specs: [
        "Dilutable Powder",
        "Preventive Application",
        "Protective Screen Formation After Drying",
        "Long-term Storage",
        "Made in Tunisia"
      ],
      packaging: {
        title: "Available Packaging",
        options: [
          {
            weight: "5 kg",
            label: "Professional",
            description: "Suitable for orchards and arboricultural operations."
          },
          {
            weight: "1 kg",
            label: "Smallholder",
            description: "Ideal for small plots and family arboriculture."
          }
        ]
      }
    },
    cta: {
      title: "Protect your orchards today.",
      buttons: {
        contact: "Contact Us",
        demo: "Request a Demo",
        distributor: "Become a Distributor"
      },
      newsletter: {
        title: "Stay Updated",
        placeholder: "Your email address",
        button: "Subscribe",
        success: "Thanks! You're subscribed.",
        error: "Something went wrong.",
        loading: "Subscribing...",
        disclaimer: "Receive our latest news on crop protection."
      }
    },
    footer: {
      tagline: "Fire Blight Protection",
      contact: "contact@blightx.com",
      country: "Tunisia 🇹🇳"
    }
  },
  ar: {
    hero: {
      title: "درع وقائي ضد اللفحة النارية",
      subtitle: "منتج وقائي للصحة النباتية مصمم لحماية البساتين من اللفحة النارية ودعم المقاومة الطبيعية للأشجار المثمرة.",
      buttons: {
        contact: "اتصل بنا",
        learnMore: "اكتشف BlightX"
      }
    },
    about: {
      title: "ما هو BlightX؟",
      description: "BlightX هو منتج وقائي للصحة النباتية مخصص للبساتين.",
      description2: "يساهم في الحد من تطور اللفحة النارية مع تعزيز البنية الخلوية وآليات الدفاع للأشجار المثمرة."
    },
    usage: {
      title: "طريقة الاستخدام",
      cards: {
        dosage: { title: "الجرعة", text: "5 كجم لكل 120 إلى 150 لترًا من الماء" },
        prep: { title: "التحضير", text: "قم بإعداد خليط أولي (طريقة المعلق) بإضافة المسحوق تدريجيًا للماء حتى الحصول على عجينة متجانسة، ثم اسكبها في الخزان." },
        app: { title: "التطبيق", text: "رش كامل للمظلة الشجرية حتى التغطية الكاملة. الجرعة التقريبية: 2 إلى 2.5 لتر من الخليط لكل شجرة بالغة." }
      }
    },
    crops: {
      title: "المحاصيل المستهدفة",
      items: ["أشجار الإجاص", "أشجار التفاح", "أشجار السفرجل"]
    },
    formulation: {
      title: "التركيبة الوظيفية",
      disclaimer: "تركيبة تعتمد على مكونات من أصل نباتي ومعدني.",
      ingredients: [
        "الطين الأبيض",
        "سيليكات البوتاسيوم",
        "خلاصة الصنوبر",
        "زيت شجرة الشاي"
      ]
    },
    sustainability: {
      title: "التزام زراعي مستدام",
      points: [
        "مصمم لدعم الإدارة المسؤولة للبساتين.",
        "بدون بقايا كيميائية دائمة.",
        "متوافق مع الممارسات الزراعية المستدامة والصديقة للنظام البيئي."
      ]
    },
    product: {
      title: "المواصفات التقنية",
      specs: [
        "مسحوق قابل للتخفيف",
        "تطبيق وقائي",
        "تشكيل شاشة واقية بعد الجفاف",
        "تخزين طويل الأمد",
        "صنع في تونس"
      ],
      packaging: {
        title: "التعبئة المتوفرة",
        options: [
          {
            weight: "5 كجم",
            label: "محترف",
            description: "مناسب للبساتين والعمليات الزراعية الكبيرة."
          },
          {
            weight: "1 كجم",
            label: "مزارع صغير",
            description: "مثالي لقطع الأراضي الصغيرة والزراعة العائلية."
          }
        ]
      }
    },
    cta: {
      title: "احمِ بساتينك اليوم.",
      buttons: {
        contact: "اتصل بنا",
        demo: "طلب عرض توضيحي",
        distributor: "كن موزعًا"
      },
      newsletter: {
        title: "ابق على اطلاع",
        placeholder: "عنوان بريدك الإلكتروني",
        button: "اشتراك",
        success: "شكراً! تم الاشتراك.",
        error: "حدث خطأ ما.",
        loading: "جاري الاشتراك...",
        disclaimer: "احصل على آخر الأخبار حول حماية المحاصيل."
      }
    },
    footer: {
      tagline: "حماية ضد اللفحة النارية",
      contact: "contact@blightx.com",
      country: "تونس 🇹🇳"
    }
  }
};