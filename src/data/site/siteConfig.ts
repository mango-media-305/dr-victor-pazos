// src/data/site/siteConfig.ts

export const siteConfig = {
    name: "Victor Pazos, MD. PA.",
    shortName: "Victor Pazos, MD",
    legalName: "Victor Pazos, MD. PA.",

    domain: "https://victorpazosmd.com",

    tagline: {
        en: "Experienced Cardiology Care in Hialeah & Miami-Dade",
        es: "Atención cardiológica con experiencia en Hialeah y Miami-Dade",
    },

    description: {
        en: "Victor Pazos, MD. PA. provides experienced cardiology and interventional cardiology care for patients in Hialeah, Miami, and Miami-Dade County.",
        es: "Victor Pazos, MD. PA. ofrece atención cardiológica y cardiología intervencionista para pacientes en Hialeah, Miami y Miami-Dade County.",
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

        email: "johndoe@testing.com",
        emailHref: "mailto:johndoe@testing.com",

        address: {
            street: "7100 W 20th Avenue",
            suite: "Suite G166",
            city: "Hialeah",
            state: "FL",
            zip: "33016",
            country: "US",
            full: "7100 W 20th Avenue Suite G166, Hialeah, FL 33016",
        },

        coordinates: {
            latitude: null,
            longitude: null,
        },

        googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=7100%20W%2020th%20Avenue%20Suite%20G166%2C%20Hialeah%2C%20FL%2033016",

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