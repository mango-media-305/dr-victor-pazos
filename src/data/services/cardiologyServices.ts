import {
    Activity,
    HeartPulse,
    Stethoscope,
    ShieldCheck,
    Gauge,
    Waves,
    ClipboardCheck,
    HeartHandshake,
    type LucideIcon,
} from "lucide-astro";

import type { LanguageCode } from "../site/siteConfig";

export interface CardiologyService {
    id: string;
    slug: string;
    icon: LucideIcon;
    title: Record<LanguageCode, string>;
    shortTitle: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
    shortDescription: Record<LanguageCode, string>;
    keywords: Record<LanguageCode, string[]>;
    href: Record<LanguageCode, string>;
    featured?: boolean;
    priority: number;
}

export const cardiologyServices: CardiologyService[] = [
    {
        id: "general-cardiology",
        slug: "general-cardiology",
        icon: Stethoscope,
        title: {
            en: "General Cardiology",
            es: "Cardiología General",
        },
        shortTitle: {
            en: "General Cardiology",
            es: "Cardiología General",
        },
        description: {
            en: "Comprehensive cardiology evaluations for patients with heart-related symptoms, risk factors, or ongoing cardiovascular conditions.",
            es: "Evaluaciones cardiológicas integrales para pacientes con síntomas relacionados al corazón, factores de riesgo o condiciones cardiovasculares existentes.",
        },
        shortDescription: {
            en: "Comprehensive heart evaluations and cardiovascular care.",
            es: "Evaluaciones del corazón y cuidado cardiovascular integral.",
        },
        keywords: {
            en: [
                "cardiologist in Hialeah",
                "cardiologist in Miami",
                "general cardiology Miami",
                "heart doctor Hialeah",
                "heart specialist Miami-Dade",
            ],
            es: [
                "cardiólogo en Hialeah",
                "cardiólogo en Miami",
                "cardiología general Miami",
                "doctor del corazón Hialeah",
                "especialista del corazón Miami-Dade",
            ],
        },
        href: {
            en: "/services/general-cardiology/",
            es: "/es/servicios/cardiologia-general/",
        },
        featured: true,
        priority: 1,
    },
    {
        id: "interventional-cardiology",
        slug: "interventional-cardiology",
        icon: HeartPulse,
        title: {
            en: "Interventional Cardiology",
            es: "Cardiología Intervencionista",
        },
        shortTitle: {
            en: "Interventional Cardiology",
            es: "Cardiología Intervencionista",
        },
        description: {
            en: "Specialized cardiovascular care focused on diagnosing and treating heart and blood vessel conditions using minimally invasive approaches when appropriate.",
            es: "Atención cardiovascular especializada enfocada en diagnosticar y tratar condiciones del corazón y los vasos sanguíneos mediante enfoques mínimamente invasivos cuando sea apropiado.",
        },
        shortDescription: {
            en: "Specialized care for advanced cardiovascular conditions.",
            es: "Atención especializada para condiciones cardiovasculares avanzadas.",
        },
        keywords: {
            en: [
                "interventional cardiologist Miami",
                "interventional cardiology Hialeah",
                "heart specialist Miami",
                "cardiac specialist Miami-Dade",
            ],
            es: [
                "cardiólogo intervencionista Miami",
                "cardiología intervencionista Hialeah",
                "especialista cardíaco Miami",
                "especialista del corazón Miami-Dade",
            ],
        },
        href: {
            en: "/services/interventional-cardiology/",
            es: "/es/servicios/cardiologia-intervencionista/",
        },
        featured: true,
        priority: 2,
    },
    {
        id: "chest-pain-evaluation",
        slug: "chest-pain-evaluation",
        icon: Activity,
        title: {
            en: "Chest Pain Evaluation",
            es: "Evaluación de Dolor en el Pecho",
        },
        shortTitle: {
            en: "Chest Pain",
            es: "Dolor en el Pecho",
        },
        description: {
            en: "Cardiology evaluation for chest discomfort, pressure, tightness, or symptoms that may be related to the heart.",
            es: "Evaluación cardiológica para molestias, presión, opresión o síntomas en el pecho que pueden estar relacionados con el corazón.",
        },
        shortDescription: {
            en: "Evaluation for chest pressure, discomfort, or heart-related symptoms.",
            es: "Evaluación de presión, molestia o síntomas relacionados al corazón.",
        },
        keywords: {
            en: [
                "chest pain cardiologist Miami",
                "chest pain evaluation Hialeah",
                "heart chest pain doctor Miami",
                "cardiologist for chest pain",
            ],
            es: [
                "cardiólogo para dolor de pecho Miami",
                "evaluación de dolor en el pecho Hialeah",
                "doctor para dolor de pecho Miami",
                "cardiólogo dolor en el pecho",
            ],
        },
        href: {
            en: "/services/chest-pain-evaluation/",
            es: "/es/servicios/evaluacion-dolor-pecho/",
        },
        featured: true,
        priority: 3,
    },
    {
        id: "hypertension-treatment",
        slug: "hypertension-treatment",
        icon: Gauge,
        title: {
            en: "Hypertension Treatment",
            es: "Tratamiento de Hipertensión",
        },
        shortTitle: {
            en: "Hypertension",
            es: "Hipertensión",
        },
        description: {
            en: "Cardiology care for high blood pressure, cardiovascular risk reduction, medication management, and long-term monitoring.",
            es: "Atención cardiológica para presión alta, reducción de riesgos cardiovasculares, manejo de medicamentos y monitoreo a largo plazo.",
        },
        shortDescription: {
            en: "High blood pressure care and cardiovascular risk management.",
            es: "Cuidado de presión alta y manejo de riesgo cardiovascular.",
        },
        keywords: {
            en: [
                "hypertension doctor Miami",
                "high blood pressure cardiologist Hialeah",
                "blood pressure specialist Miami",
                "cardiologist for hypertension",
            ],
            es: [
                "doctor para hipertensión Miami",
                "cardiólogo presión alta Hialeah",
                "especialista presión arterial Miami",
                "cardiólogo para hipertensión",
            ],
        },
        href: {
            en: "/services/hypertension-treatment/",
            es: "/es/servicios/tratamiento-hipertension/",
        },
        featured: true,
        priority: 4,
    },
    {
        id: "heart-disease-management",
        slug: "heart-disease-management",
        icon: HeartHandshake,
        title: {
            en: "Heart Disease Management",
            es: "Manejo de Enfermedades del Corazón",
        },
        shortTitle: {
            en: "Heart Disease",
            es: "Enfermedad Cardíaca",
        },
        description: {
            en: "Ongoing care for patients with known or suspected cardiovascular disease, including monitoring, treatment planning, and risk management.",
            es: "Atención continua para pacientes con enfermedad cardiovascular conocida o sospechada, incluyendo monitoreo, planificación de tratamiento y manejo de riesgos.",
        },
        shortDescription: {
            en: "Ongoing support for cardiovascular conditions.",
            es: "Apoyo continuo para condiciones cardiovasculares.",
        },
        keywords: {
            en: [
                "heart disease doctor Miami",
                "cardiovascular disease management Hialeah",
                "heart disease cardiologist Miami-Dade",
                "cardiology care Miami",
            ],
            es: [
                "doctor enfermedad del corazón Miami",
                "manejo enfermedad cardiovascular Hialeah",
                "cardiólogo enfermedad cardíaca Miami-Dade",
                "atención cardiológica Miami",
            ],
        },
        href: {
            en: "/services/heart-disease-management/",
            es: "/es/servicios/manejo-enfermedades-corazon/",
        },
        featured: true,
        priority: 5,
    },
    {
        id: "ekg-cardiac-testing",
        slug: "ekg-cardiac-testing",
        icon: ClipboardCheck,
        title: {
            en: "EKG & Cardiac Testing",
            es: "EKG y Pruebas Cardíacas",
        },
        shortTitle: {
            en: "Cardiac Testing",
            es: "Pruebas Cardíacas",
        },
        description: {
            en: "Diagnostic cardiac testing support for evaluating heart rhythm, symptoms, risk factors, and cardiovascular health.",
            es: "Apoyo con pruebas cardíacas diagnósticas para evaluar ritmo cardíaco, síntomas, factores de riesgo y salud cardiovascular.",
        },
        shortDescription: {
            en: "Testing support for heart rhythm and cardiovascular evaluation.",
            es: "Pruebas para evaluar ritmo cardíaco y salud cardiovascular.",
        },
        keywords: {
            en: [
                "EKG Miami",
                "cardiac testing Hialeah",
                "heart test Miami",
                "cardiologist EKG Miami-Dade",
            ],
            es: [
                "EKG Miami",
                "pruebas cardíacas Hialeah",
                "examen del corazón Miami",
                "cardiólogo EKG Miami-Dade",
            ],
        },
        href: {
            en: "/services/ekg-cardiac-testing/",
            es: "/es/servicios/ekg-pruebas-cardiacas/",
        },
        priority: 6,
    },
    {
        id: "shortness-of-breath-evaluation",
        slug: "shortness-of-breath-evaluation",
        icon: Waves,
        title: {
            en: "Shortness of Breath Evaluation",
            es: "Evaluación de Falta de Aire",
        },
        shortTitle: {
            en: "Shortness of Breath",
            es: "Falta de Aire",
        },
        description: {
            en: "Cardiology evaluation for shortness of breath, fatigue, reduced exercise tolerance, or symptoms that may involve the heart.",
            es: "Evaluación cardiológica para falta de aire, fatiga, menor tolerancia al ejercicio o síntomas que pueden involucrar el corazón.",
        },
        shortDescription: {
            en: "Evaluation for breathing symptoms that may be heart-related.",
            es: "Evaluación de síntomas respiratorios que pueden estar relacionados al corazón.",
        },
        keywords: {
            en: [
                "shortness of breath cardiologist Miami",
                "cardiologist for fatigue Hialeah",
                "heart related breathing problems Miami",
                "dyspnea cardiology Miami-Dade",
            ],
            es: [
                "cardiólogo falta de aire Miami",
                "cardiólogo para fatiga Hialeah",
                "problemas respiratorios del corazón Miami",
                "disnea cardiología Miami-Dade",
            ],
        },
        href: {
            en: "/services/shortness-of-breath-evaluation/",
            es: "/es/servicios/evaluacion-falta-de-aire/",
        },
        priority: 7,
    },
    {
        id: "preventive-cardiology",
        slug: "preventive-cardiology",
        icon: ShieldCheck,
        title: {
            en: "Preventive Cardiology",
            es: "Cardiología Preventiva",
        },
        shortTitle: {
            en: "Preventive Cardiology",
            es: "Cardiología Preventiva",
        },
        description: {
            en: "Preventive heart care focused on identifying risk factors early and supporting long-term cardiovascular wellness.",
            es: "Cuidado preventivo del corazón enfocado en identificar factores de riesgo temprano y apoyar la salud cardiovascular a largo plazo.",
        },
        shortDescription: {
            en: "Heart prevention, risk reduction, and long-term wellness.",
            es: "Prevención cardíaca, reducción de riesgo y bienestar a largo plazo.",
        },
        keywords: {
            en: [
                "preventive cardiology Miami",
                "heart disease prevention Hialeah",
                "cardiovascular risk assessment Miami",
                "preventive heart doctor Miami-Dade",
            ],
            es: [
                "cardiología preventiva Miami",
                "prevención enfermedad cardíaca Hialeah",
                "evaluación riesgo cardiovascular Miami",
                "doctor preventivo del corazón Miami-Dade",
            ],
        },
        href: {
            en: "/services/preventive-cardiology/",
            es: "/es/servicios/cardiologia-preventiva/",
        },
        priority: 8,
    },
];

export const featuredCardiologyServices = cardiologyServices
    .filter((service) => service.featured)
    .sort((a, b) => a.priority - b.priority);

export const getCardiologyServiceBySlug = (slug: string) => {
    return cardiologyServices.find((service) => service.slug === slug);
};

export const getCardiologyServiceHref = (
    service: CardiologyService,
    language: LanguageCode
) => {
    return service.href[language];
};