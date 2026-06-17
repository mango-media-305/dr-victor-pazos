// src/data/site/siteConfig.ts

export const siteConfig = {
    name: "Cardiovascular and Interventional Center of South Florida",
    shortName: "Victor Pazos, MD",
    legalName: "Victor Pazos, MD, PA",

    domain: "https://victorpazosmd.com",

    tagline: {
        en: "Comprehensive Cardiovascular Care in South Florida",
        es: "Cuidado cardiovascular integral en el sur de Florida",
    },

    description: {
        en: "Cardiovascular and Interventional Center of South Florida, led by Victor Pazos, MD, provides comprehensive cardiology care, advanced diagnostic testing, preventive cardiology, and cardiovascular disease management in Hialeah, FL.",
        es: "Cardiovascular and Interventional Center of South Florida, dirigido por Victor Pazos, MD, ofrece cuidado cardiológico integral, pruebas diagnósticas avanzadas, cardiología preventiva y manejo de enfermedades cardiovasculares en Hialeah, FL.",
    },

    doctor: {
        name: "Victor Pazos",
        fullName: "Victor Pazos, MD",
        displayName: "Dr. Victor Pazos",
        credentials: "MD",
        specialty: {
            en: "Cardiologist",
            es: "Cardiólogo",
        },
        specialtyExtended: {
            en: "Cardiology & Interventional Cardiology",
            es: "Cardiología y cardiología intervencionista",
        },
    },

    seo: {
        defaultTitle: {
            en: "Cardiologist in Hialeah, FL | Victor Pazos, MD",
            es: "Cardiólogo en Hialeah, FL | Victor Pazos, MD",
        },

        titleTemplate: {
            en: "%s | Victor Pazos, MD",
            es: "%s | Victor Pazos, MD",
        },

        defaultDescription: {
            en: "Looking for a cardiologist in Hialeah, FL? Victor Pazos, MD provides cardiology and interventional cardiology care for patients across Miami-Dade.",
            es: "¿Busca un cardiólogo en Hialeah, FL? Victor Pazos, MD ofrece atención en cardiología y cardiología intervencionista para pacientes de Miami-Dade.",
        },

        defaultImage: "/images/og/default-og.webp",

        keywords: {
            en: [
                "cardiologist in Hialeah FL",
                "cardiologist in Miami",
                "heart doctor Hialeah",
                "heart doctor Miami",
                "interventional cardiologist Hialeah",
                "cardiology care Miami-Dade",
                "chest pain evaluation Hialeah",
                "high blood pressure doctor Miami",
                "EKG testing Hialeah",
                "stress test cardiologist Miami",
            ],
            es: [
                "cardiólogo en Hialeah FL",
                "cardiólogo en Miami",
                "doctor del corazón Hialeah",
                "doctor del corazón Miami",
                "cardiólogo intervencionista Hialeah",
                "cardiología en Miami-Dade",
                "evaluación de dolor en el pecho Hialeah",
                "doctor para presión alta Miami",
                "prueba EKG Hialeah",
                "prueba de esfuerzo cardiólogo Miami",
            ],
        },
    },

    locale: {
        defaultLanguage: "en",
        languages: ["en", "es"],
        languageLabels: {
            en: "English",
            es: "Español",
        },
        languageShortLabels: {
            en: "EN",
            es: "ES",
        },
    },

    contact: {
        phone: "(305) 835-0551",
        phoneHref: "tel:+13058350551",

        email: "admin@victorpazosmd.com",
        emailHref: "mailto:admin@victorpazosmd.com",

        address: {
            street: "7100 W 20th Ave",
            suite: "Suite G-166",
            building: "Palmetto Medical Plaza",
            city: "Hialeah",
            state: "FL",
            zip: "33016",
            country: "US",
            full: "7100 W 20th Ave, Suite G-166, Palmetto Medical Plaza, Hialeah, FL 33016",
        },

        coordinates: {
            latitude: null,
            longitude: null,
        },

        googleMapsUrl:
            "https://maps.app.goo.gl/u2zeY5qEvhHE4eUt5",

        appointmentPriority: ["phone", "email", "form"],
    },

    business: {
        type: "Physician",
        medicalSpecialty: "Cardiovascular",
        areaServed: [
            "Hialeah",
            "Miami",
            "Miami-Dade County",
            "Miami Lakes",
            "Hialeah Gardens",
            "Doral",
            "Miami Gardens",
            "Westchester",
            "Fontainebleau",
            "Palm Springs North",
            "Country Club",
            "Medley",
            "Miami Springs",
        ],
        languages: ["English", "Spanish"],
    },

    assets: {
        logo: {
            default: "/images/brand/logo-mark.svg",
            light: "/images/brand/logo-light.webp",
            dark: "/images/brand/logo-dark.webp",
            mark: "/images/brand/logo-mark.svg",
        },
        favicon: "/images/brand/logo-mark.svg",
        appleTouchIcon: "/images/brand/apple-touch-icon.png",
    },

    social: {
        facebook: "",
        instagram: "",
        linkedin: "",
        youtube: "",
    },

    analytics: {
        googleAnalyticsId: "",
        googleSearchConsoleVerification: "",
        microsoftClarityId: "",
        bingWebmasterVerification: "",
    },

    forms: {
        appointment: {
            name: "appointment-request",
            netlifyName: "appointment-request",
        },
        contact: {
            name: "contact",
            netlifyName: "contact",
        },
    },
} as const;

export type SiteConfig = typeof siteConfig;
export type LanguageCode = keyof typeof siteConfig.locale.languageLabels;