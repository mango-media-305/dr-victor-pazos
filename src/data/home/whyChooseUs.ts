// src/data/home/whyChooseUs.ts

import {
    MessageCircleHeart,
    ClipboardCheck,
    Route,
    PhoneCall,
    HeartPulse,
    MapPinCheckInside,
    type LucideIcon,
} from "lucide-astro";

import type { LanguageCode } from "../site/siteConfig";
import { contactInfo } from "../site/contact";

export interface WhyChooseUsItem {
    id: string;
    icon: LucideIcon;
    title: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
}

export interface WhyChooseUsContent {
    kicker: Record<LanguageCode, string>;
    title: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
    items: WhyChooseUsItem[];
    cta: {
        label: Record<LanguageCode, string>;
        href: string;
    };
    secondaryCta: {
        label: Record<LanguageCode, string>;
        href: Record<LanguageCode, string>;
    };
}

export const whyChooseUsContent: WhyChooseUsContent = {
    kicker: {
        en: "Why choose this office",
        es: "Por qué elegir esta oficina",
    },

    title: {
        en: "Heart care that helps patients feel informed, prepared, and supported.",
        es: "Cuidado del corazón para que los pacientes se sientan informados, preparados y acompañados.",
    },

    description: {
        en: "Choosing a cardiologist is about more than a diagnosis. Patients need clear explanations, practical next steps, and a care experience that helps them understand what is happening with their heart health.",
        es: "Elegir un cardiólogo es más que recibir un diagnóstico. Los pacientes necesitan explicaciones claras, próximos pasos prácticos y una experiencia de cuidado que les ayude a entender lo que ocurre con su salud cardíaca.",
    },

    items: [
        {
            id: "clear-explanations",
            icon: MessageCircleHeart,
            title: {
                en: "Clear explanations",
                es: "Explicaciones claras",
            },
            description: {
                en: "Patients receive guidance that helps them understand symptoms, test results, risk factors, and recommended next steps.",
                es: "Los pacientes reciben orientación para entender síntomas, resultados, factores de riesgo y próximos pasos recomendados.",
            },
        },
        {
            id: "heart-health-evaluation",
            icon: ClipboardCheck,
            title: {
                en: "Thoughtful evaluation",
                es: "Evaluación cuidadosa",
            },
            description: {
                en: "Care begins with listening, reviewing concerns, and evaluating heart-related symptoms in a structured way.",
                es: "La atención comienza escuchando, revisando preocupaciones y evaluando síntomas relacionados con el corazón de forma organizada.",
            },
        },
        {
            id: "practical-next-steps",
            icon: Route,
            title: {
                en: "Practical next steps",
                es: "Próximos pasos prácticos",
            },
            description: {
                en: "The goal is to help patients know what to do next, whether that means testing, monitoring, treatment planning, or follow-up care.",
                es: "El objetivo es ayudar al paciente a saber qué hacer después, ya sea pruebas, monitoreo, planificación de tratamiento o seguimiento.",
            },
        },
        {
            id: "phone-first-access",
            icon: PhoneCall,
            title: {
                en: "Phone-first appointment access",
                es: "Acceso a citas por teléfono",
            },
            description: {
                en: "Appointments are prioritized by phone so patients can speak with the office directly and confirm availability.",
                es: "Las citas se priorizan por teléfono para que los pacientes puedan comunicarse directamente con la oficina y confirmar disponibilidad.",
            },
        },
        {
            id: "prevention-and-management",
            icon: HeartPulse,
            title: {
                en: "Prevention and ongoing care",
                es: "Prevención y cuidado continuo",
            },
            description: {
                en: "Support for patients managing blood pressure, cardiovascular risk, heart disease, symptoms, or long-term heart-health concerns.",
                es: "Apoyo para pacientes que manejan presión arterial, riesgo cardiovascular, enfermedad cardíaca, síntomas o preocupaciones a largo plazo.",
            },
        },
        {
            id: "local-miami-dade-care",
            icon: MapPinCheckInside,
            title: {
                en: "Local Miami-Dade convenience",
                es: "Conveniencia local en Miami-Dade",
            },
            description: {
                en: `The Hialeah office is positioned to serve patients from ${contactInfo.serviceArea.nearbyAreas.slice(0, 4).join(", ")}, and nearby communities.`,
                es: `La oficina en Hialeah está ubicada para servir a pacientes de ${contactInfo.serviceArea.nearbyAreas.slice(0, 4).join(", ")} y comunidades cercanas.`,
            },
        },
    ],

    cta: {
        label: {
            en: contactInfo.appointment.primaryCta.en,
            es: contactInfo.appointment.primaryCta.es,
        },
        href: contactInfo.phone.href,
    },

    secondaryCta: {
        label: {
            en: "View cardiology services",
            es: "Ver servicios de cardiología",
        },
        href: {
            en: "/services/",
            es: " /es/services/",
        },
    },
};

export const getWhyChooseUsContent = () => whyChooseUsContent;

export const getWhyChooseUsItems = () => whyChooseUsContent.items;