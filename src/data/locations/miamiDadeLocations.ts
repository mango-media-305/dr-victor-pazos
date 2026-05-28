// src/data/locations/miamiDadeLocations.ts

import type { LanguageCode } from "../site/siteConfig";
import { contactInfo } from "../site/contact";

export interface LocationContentBlock {
    title: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
}

export interface LocationFaq {
    question: Record<LanguageCode, string>;
    answer: Record<LanguageCode, string>;
}

export interface MiamiDadeLocation {
    id: string;
    slug: string;
    city: string;
    county: string;
    state: string;
    priority: number;
    featured?: boolean;

    title: Record<LanguageCode, string>;
    shortTitle: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
    shortDescription: Record<LanguageCode, string>;

    intro: Record<LanguageCode, string>;
    reasonsToChooseOffice: LocationContentBlock[];
    nearbyServices: string[];
    faqs: LocationFaq[];

    href: Record<LanguageCode, string>;

    nearbyOffice: {
        label: Record<LanguageCode, string>;
        display: string;
    };

    seo: {
        title: Record<LanguageCode, string>;
        description: Record<LanguageCode, string>;
        keywords: Record<LanguageCode, string[]>;
    };
}

const officeDisplay = contactInfo.address.display;

const defaultNearbyServices = [
    "general-cardiology",
    "chest-pain-evaluation",
    "hypertension-treatment",
    "ekg-cardiac-testing",
    "arrhythmia-evaluation",
];

const getDefaultReasons = (city: string): LocationContentBlock[] => [
    {
        title: {
            en: `Cardiology care near ${city}`,
            es: `Atención cardiológica cerca de ${city}`,
        },
        description: {
            en: `Patients from ${city} can access cardiology and interventional cardiology care through the Hialeah office of Victor Pazos, MD.`,
            es: `Pacientes de ${city} pueden acceder a atención en cardiología y cardiología intervencionista a través de la oficina en Hialeah de Victor Pazos, MD.`,
        },
    },
    {
        title: {
            en: "Bilingual patient communication",
            es: "Comunicación bilingüe para pacientes",
        },
        description: {
            en: "Care is available in English and Spanish, helping patients and families discuss symptoms, test results, and next steps clearly.",
            es: "La atención está disponible en inglés y español, ayudando a pacientes y familiares a hablar con claridad sobre síntomas, resultados y próximos pasos.",
        },
    },
    {
        title: {
            en: "Heart-health evaluation and follow-up",
            es: "Evaluación y seguimiento de salud cardíaca",
        },
        description: {
            en: "The office supports patients seeking evaluation for symptoms, risk factors, abnormal testing, and ongoing cardiovascular conditions.",
            es: "La oficina apoya a pacientes que buscan evaluación por síntomas, factores de riesgo, pruebas anormales y condiciones cardiovasculares continuas.",
        },
    },
];

const getDefaultFaqs = (city: string): LocationFaq[] => [
    {
        question: {
            en: `Does Victor Pazos, MD serve patients from ${city}?`,
            es: `¿Victor Pazos, MD atiende pacientes de ${city}?`,
        },
        answer: {
            en: `Yes. Victor Pazos, MD serves patients from ${city} and nearby Miami-Dade communities from the Hialeah cardiology office.`,
            es: `Sí. Victor Pazos, MD atiende pacientes de ${city} y comunidades cercanas de Miami-Dade desde la oficina de cardiología en Hialeah.`,
        },
    },
    {
        question: {
            en: "Where is the cardiology office located?",
            es: "¿Dónde está ubicada la oficina de cardiología?",
        },
        answer: {
            en: `The office is located at ${officeDisplay}. Patients can call the office to request an appointment or get directions.`,
            es: `La oficina está ubicada en ${officeDisplay}. Los pacientes pueden llamar para solicitar una cita o recibir direcciones.`,
        },
    },
    {
        question: {
            en: "What symptoms may require urgent medical attention?",
            es: "¿Qué síntomas pueden requerir atención médica urgente?",
        },
        answer: {
            en: "Severe chest pain, sudden shortness of breath, fainting, stroke symptoms, severe weakness, or symptoms that feel like a medical emergency should not wait for a routine appointment. Call 911 immediately.",
            es: "Dolor fuerte en el pecho, falta de aire repentina, desmayo, síntomas de derrame cerebral, debilidad severa o síntomas que parezcan una emergencia médica no deben esperar por una cita rutinaria. Llame al 911 inmediatamente.",
        },
    },
];

export const miamiDadeLocations: MiamiDadeLocation[] = [
    {
        id: "hialeah",
        slug: "hialeah",
        city: "Hialeah",
        county: "Miami-Dade County",
        state: "FL",
        priority: 1,
        featured: true,
        title: {
            en: "Cardiologist in Hialeah, FL",
            es: "Cardiólogo en Hialeah, FL",
        },
        shortTitle: {
            en: "Hialeah",
            es: "Hialeah",
        },
        description: {
            en: "Victor Pazos, MD. PA. provides cardiology and interventional cardiology care from a local office in Hialeah, serving patients throughout Miami-Dade County.",
            es: "Victor Pazos, MD. PA. ofrece atención en cardiología y cardiología intervencionista desde una oficina local en Hialeah, atendiendo pacientes de Miami-Dade County.",
        },
        shortDescription: {
            en: "Local cardiology care from the Hialeah office.",
            es: "Atención cardiológica local desde la oficina en Hialeah.",
        },
        intro: {
            en: "The Hialeah office is the main location for patients seeking cardiovascular evaluation, heart-health guidance, and ongoing cardiology care with Victor Pazos, MD. The office serves patients from Hialeah and surrounding Miami-Dade communities.",
            es: "La oficina en Hialeah es la ubicación principal para pacientes que buscan evaluación cardiovascular, orientación para la salud del corazón y cuidado cardiológico continuo con Victor Pazos, MD. La oficina atiende pacientes de Hialeah y comunidades cercanas de Miami-Dade.",
        },
        reasonsToChooseOffice: [
            {
                title: {
                    en: "Local Hialeah cardiology office",
                    es: "Oficina local de cardiología en Hialeah",
                },
                description: {
                    en: "Patients in Hialeah have direct access to the office location for cardiology evaluation, follow-up, and heart-health concerns.",
                    es: "Pacientes en Hialeah tienen acceso directo a la oficina para evaluación cardiológica, seguimiento y preocupaciones de salud cardíaca.",
                },
            },
            {
                title: {
                    en: "Bilingual care for Miami-Dade families",
                    es: "Atención bilingüe para familias de Miami-Dade",
                },
                description: {
                    en: "The practice provides care in English and Spanish, helping patients and families communicate clearly during important heart-health visits.",
                    es: "La práctica ofrece atención en inglés y español, ayudando a pacientes y familias a comunicarse con claridad durante visitas importantes de salud cardíaca.",
                },
            },
            {
                title: {
                    en: "Care for symptoms and ongoing conditions",
                    es: "Atención para síntomas y condiciones continuas",
                },
                description: {
                    en: "Patients may contact the office for chest discomfort, shortness of breath, palpitations, high blood pressure, abnormal EKG results, or known heart disease.",
                    es: "Los pacientes pueden contactar la oficina por molestia en el pecho, falta de aire, palpitaciones, presión alta, resultados anormales de EKG o enfermedad cardíaca conocida.",
                },
            },
        ],
        nearbyServices: defaultNearbyServices,
        faqs: getDefaultFaqs("Hialeah"),
        href: {
            en: "/locations/hialeah/",
            es: "/es/ubicaciones/hialeah/",
        },
        nearbyOffice: {
            label: {
                en: "Hialeah Office",
                es: "Oficina en Hialeah",
            },
            display: officeDisplay,
        },
        seo: {
            title: {
                en: "Cardiologist in Hialeah, FL | Victor Pazos, MD",
                es: "Cardiólogo en Hialeah, FL | Victor Pazos, MD",
            },
            description: {
                en: "Looking for a cardiologist in Hialeah, FL? Victor Pazos, MD. PA. provides cardiovascular care from a local Hialeah office serving Miami-Dade patients.",
                es: "¿Busca un cardiólogo en Hialeah, FL? Victor Pazos, MD. PA. ofrece atención cardiovascular desde una oficina local en Hialeah para pacientes de Miami-Dade.",
            },
            keywords: {
                en: [
                    "cardiologist in Hialeah",
                    "heart doctor Hialeah",
                    "Hialeah cardiology",
                    "interventional cardiologist Hialeah",
                    "Spanish speaking cardiologist Hialeah",
                ],
                es: [
                    "cardiólogo en Hialeah",
                    "doctor del corazón Hialeah",
                    "cardiología Hialeah",
                    "cardiólogo intervencionista Hialeah",
                    "cardiólogo que habla español Hialeah",
                ],
            },
        },
    },
    {
        id: "miami",
        slug: "miami",
        city: "Miami",
        county: "Miami-Dade County",
        state: "FL",
        priority: 2,
        featured: true,
        title: {
            en: "Cardiologist Serving Miami, FL",
            es: "Cardiólogo sirviendo a Miami, FL",
        },
        shortTitle: {
            en: "Miami",
            es: "Miami",
        },
        description: {
            en: "Patients from Miami can access experienced cardiovascular care at the Hialeah office of Victor Pazos, MD. PA.",
            es: "Pacientes de Miami pueden acceder a cuidado cardiovascular con experiencia en la oficina de Hialeah de Victor Pazos, MD. PA.",
        },
        shortDescription: {
            en: "Cardiology care for patients from Miami.",
            es: "Atención cardiológica para pacientes de Miami.",
        },
        intro: {
            en: "Patients from Miami can visit the Hialeah cardiology office for evaluation of heart-related symptoms, cardiovascular risk factors, abnormal cardiac testing, and ongoing heart-health concerns.",
            es: "Pacientes de Miami pueden visitar la oficina de cardiología en Hialeah para evaluación de síntomas relacionados con el corazón, factores de riesgo cardiovascular, pruebas cardíacas anormales y preocupaciones continuas de salud cardíaca.",
        },
        reasonsToChooseOffice: getDefaultReasons("Miami"),
        nearbyServices: defaultNearbyServices,
        faqs: getDefaultFaqs("Miami"),
        href: {
            en: "/locations/miami/",
            es: "/es/ubicaciones/miami/",
        },
        nearbyOffice: {
            label: {
                en: "Nearby Hialeah Office",
                es: "Oficina cercana en Hialeah",
            },
            display: officeDisplay,
        },
        seo: {
            title: {
                en: "Cardiologist Near Miami, FL | Hialeah Office Serving Miami-Dade",
                es: "Cardiólogo cerca de Miami, FL | Oficina en Hialeah sirviendo Miami-Dade",
            },
            description: {
                en: "Victor Pazos, MD serves Miami patients from his Hialeah cardiology office, offering cardiovascular evaluation and heart-health guidance across Miami-Dade.",
                es: "Victor Pazos, MD atiende pacientes de Miami desde su oficina de cardiología en Hialeah, ofreciendo evaluación cardiovascular y orientación cardíaca en Miami-Dade.",
            },
            keywords: {
                en: [
                    "cardiologist near Miami",
                    "heart doctor Miami",
                    "Miami cardiology",
                    "interventional cardiologist Miami",
                    "cardiology Miami-Dade",
                ],
                es: [
                    "cardiólogo cerca de Miami",
                    "doctor del corazón Miami",
                    "cardiología Miami",
                    "cardiólogo intervencionista Miami",
                    "cardiología Miami-Dade",
                ],
            },
        },
    },
    {
        id: "miami-lakes",
        slug: "miami-lakes",
        city: "Miami Lakes",
        county: "Miami-Dade County",
        state: "FL",
        priority: 3,
        featured: true,
        title: {
            en: "Cardiologist Near Miami Lakes, FL",
            es: "Cardiólogo cerca de Miami Lakes, FL",
        },
        shortTitle: {
            en: "Miami Lakes",
            es: "Miami Lakes",
        },
        description: {
            en: "Victor Pazos, MD. PA. serves patients from Miami Lakes who need cardiology evaluation, testing guidance, and ongoing heart-health care.",
            es: "Victor Pazos, MD. PA. atiende pacientes de Miami Lakes que necesitan evaluación cardiológica, orientación sobre pruebas y cuidado continuo del corazón.",
        },
        shortDescription: {
            en: "Heart care near Miami Lakes.",
            es: "Cuidado del corazón cerca de Miami Lakes.",
        },
        intro: {
            en: "Miami Lakes patients looking for nearby cardiology care can access the Hialeah office for heart-health evaluation, symptoms, risk management, and follow-up care.",
            es: "Pacientes de Miami Lakes que buscan atención cardiológica cercana pueden acceder a la oficina en Hialeah para evaluación de salud cardíaca, síntomas, manejo de riesgos y seguimiento.",
        },
        reasonsToChooseOffice: getDefaultReasons("Miami Lakes"),
        nearbyServices: defaultNearbyServices,
        faqs: getDefaultFaqs("Miami Lakes"),
        href: {
            en: "/locations/miami-lakes/",
            es: "/es/ubicaciones/miami-lakes/",
        },
        nearbyOffice: {
            label: {
                en: "Nearby Hialeah Office",
                es: "Oficina cercana en Hialeah",
            },
            display: officeDisplay,
        },
        seo: {
            title: {
                en: "Cardiologist Near Miami Lakes, FL | Victor Pazos, MD",
                es: "Cardiólogo cerca de Miami Lakes, FL | Victor Pazos, MD",
            },
            description: {
                en: "Cardiology care near Miami Lakes, FL from Victor Pazos, MD. PA., serving patients across Hialeah and Miami-Dade County.",
                es: "Atención cardiológica cerca de Miami Lakes, FL con Victor Pazos, MD. PA., sirviendo pacientes de Hialeah y Miami-Dade County.",
            },
            keywords: {
                en: [
                    "cardiologist near Miami Lakes",
                    "heart doctor Miami Lakes",
                    "cardiology near Miami Lakes",
                    "Miami Lakes cardiologist",
                ],
                es: [
                    "cardiólogo cerca de Miami Lakes",
                    "doctor del corazón Miami Lakes",
                    "cardiología cerca de Miami Lakes",
                    "cardiólogo Miami Lakes",
                ],
            },
        },
    },
    {
        id: "doral",
        slug: "doral",
        city: "Doral",
        county: "Miami-Dade County",
        state: "FL",
        priority: 4,
        featured: true,
        title: {
            en: "Cardiologist Near Doral, FL",
            es: "Cardiólogo cerca de Doral, FL",
        },
        shortTitle: {
            en: "Doral",
            es: "Doral",
        },
        description: {
            en: "Patients from Doral can visit the Hialeah office for cardiology and interventional cardiology care with Victor Pazos, MD.",
            es: "Pacientes de Doral pueden visitar la oficina en Hialeah para atención en cardiología y cardiología intervencionista con Victor Pazos, MD.",
        },
        shortDescription: {
            en: "Cardiology access for patients from Doral.",
            es: "Acceso a cardiología para pacientes de Doral.",
        },
        intro: {
            en: "Doral patients can contact the Hialeah office for cardiology evaluation related to chest discomfort, shortness of breath, palpitations, high blood pressure, abnormal EKG results, or ongoing heart disease.",
            es: "Pacientes de Doral pueden contactar la oficina en Hialeah para evaluación cardiológica relacionada con molestia en el pecho, falta de aire, palpitaciones, presión alta, resultados anormales de EKG o enfermedad cardíaca continua.",
        },
        reasonsToChooseOffice: getDefaultReasons("Doral"),
        nearbyServices: defaultNearbyServices,
        faqs: getDefaultFaqs("Doral"),
        href: {
            en: "/locations/doral/",
            es: "/es/ubicaciones/doral/",
        },
        nearbyOffice: {
            label: {
                en: "Nearby Hialeah Office",
                es: "Oficina cercana en Hialeah",
            },
            display: officeDisplay,
        },
        seo: {
            title: {
                en: "Cardiologist Near Doral, FL | Victor Pazos, MD",
                es: "Cardiólogo cerca de Doral, FL | Victor Pazos, MD",
            },
            description: {
                en: "Victor Pazos, MD. PA. serves Doral patients seeking cardiology care near Miami-Dade County.",
                es: "Victor Pazos, MD. PA. atiende pacientes de Doral que buscan atención cardiológica cerca de Miami-Dade County.",
            },
            keywords: {
                en: [
                    "cardiologist near Doral",
                    "heart doctor Doral",
                    "Doral cardiology",
                    "cardiology near Doral FL",
                ],
                es: [
                    "cardiólogo cerca de Doral",
                    "doctor del corazón Doral",
                    "cardiología Doral",
                    "cardiología cerca de Doral FL",
                ],
            },
        },
    },
    {
        id: "hialeah-gardens",
        slug: "hialeah-gardens",
        city: "Hialeah Gardens",
        county: "Miami-Dade County",
        state: "FL",
        priority: 5,
        featured: true,
        title: {
            en: "Cardiologist Near Hialeah Gardens, FL",
            es: "Cardiólogo cerca de Hialeah Gardens, FL",
        },
        shortTitle: {
            en: "Hialeah Gardens",
            es: "Hialeah Gardens",
        },
        description: {
            en: "Victor Pazos, MD. PA. offers nearby cardiology care for patients from Hialeah Gardens and surrounding communities.",
            es: "Victor Pazos, MD. PA. ofrece atención cardiológica cercana para pacientes de Hialeah Gardens y comunidades alrededor.",
        },
        shortDescription: {
            en: "Nearby cardiology care for Hialeah Gardens.",
            es: "Atención cardiológica cercana para Hialeah Gardens.",
        },
        intro: {
            en: "Patients from Hialeah Gardens can access nearby cardiology care through the Hialeah office for symptoms, prevention, cardiac testing guidance, and ongoing cardiovascular care.",
            es: "Pacientes de Hialeah Gardens pueden acceder a atención cardiológica cercana a través de la oficina en Hialeah para síntomas, prevención, orientación sobre pruebas cardíacas y cuidado cardiovascular continuo.",
        },
        reasonsToChooseOffice: getDefaultReasons("Hialeah Gardens"),
        nearbyServices: defaultNearbyServices,
        faqs: getDefaultFaqs("Hialeah Gardens"),
        href: {
            en: "/locations/hialeah-gardens/",
            es: "/es/ubicaciones/hialeah-gardens/",
        },
        nearbyOffice: {
            label: {
                en: "Nearby Hialeah Office",
                es: "Oficina cercana en Hialeah",
            },
            display: officeDisplay,
        },
        seo: {
            title: {
                en: "Cardiologist Near Hialeah Gardens, FL | Victor Pazos, MD",
                es: "Cardiólogo cerca de Hialeah Gardens, FL | Victor Pazos, MD",
            },
            description: {
                en: "Cardiology care near Hialeah Gardens from Victor Pazos, MD. PA., with a Hialeah office serving Miami-Dade patients.",
                es: "Atención cardiológica cerca de Hialeah Gardens con Victor Pazos, MD. PA., desde una oficina en Hialeah para pacientes de Miami-Dade.",
            },
            keywords: {
                en: [
                    "cardiologist near Hialeah Gardens",
                    "heart doctor Hialeah Gardens",
                    "cardiology Hialeah Gardens",
                ],
                es: [
                    "cardiólogo cerca de Hialeah Gardens",
                    "doctor del corazón Hialeah Gardens",
                    "cardiología Hialeah Gardens",
                ],
            },
        },
    },
    {
        id: "miami-gardens",
        slug: "miami-gardens",
        city: "Miami Gardens",
        county: "Miami-Dade County",
        state: "FL",
        priority: 6,
        featured: true,
        title: {
            en: "Cardiologist Near Miami Gardens, FL",
            es: "Cardiólogo cerca de Miami Gardens, FL",
        },
        shortTitle: {
            en: "Miami Gardens",
            es: "Miami Gardens",
        },
        description: {
            en: "Patients from Miami Gardens can access cardiology care at the Hialeah office of Victor Pazos, MD. PA.",
            es: "Pacientes de Miami Gardens pueden acceder a atención cardiológica en la oficina de Hialeah de Victor Pazos, MD. PA.",
        },
        shortDescription: {
            en: "Cardiology access near Miami Gardens.",
            es: "Acceso a cardiología cerca de Miami Gardens.",
        },
        intro: {
            en: "Miami Gardens patients can contact the Hialeah cardiology office for cardiovascular evaluation, heart-related symptoms, risk factor review, and ongoing care planning.",
            es: "Pacientes de Miami Gardens pueden contactar la oficina de cardiología en Hialeah para evaluación cardiovascular, síntomas relacionados con el corazón, revisión de factores de riesgo y planificación de cuidado continuo.",
        },
        reasonsToChooseOffice: getDefaultReasons("Miami Gardens"),
        nearbyServices: defaultNearbyServices,
        faqs: getDefaultFaqs("Miami Gardens"),
        href: {
            en: "/locations/miami-gardens/",
            es: "/es/ubicaciones/miami-gardens/",
        },
        nearbyOffice: {
            label: {
                en: "Nearby Hialeah Office",
                es: "Oficina cercana en Hialeah",
            },
            display: officeDisplay,
        },
        seo: {
            title: {
                en: "Cardiologist Near Miami Gardens, FL | Victor Pazos, MD",
                es: "Cardiólogo cerca de Miami Gardens, FL | Victor Pazos, MD",
            },
            description: {
                en: "Victor Pazos, MD. PA. serves patients from Miami Gardens seeking cardiology care near Hialeah and Miami-Dade.",
                es: "Victor Pazos, MD. PA. atiende pacientes de Miami Gardens que buscan atención cardiológica cerca de Hialeah y Miami-Dade.",
            },
            keywords: {
                en: [
                    "cardiologist near Miami Gardens",
                    "heart doctor Miami Gardens",
                    "Miami Gardens cardiology",
                ],
                es: [
                    "cardiólogo cerca de Miami Gardens",
                    "doctor del corazón Miami Gardens",
                    "cardiología Miami Gardens",
                ],
            },
        },
    },
    {
        id: "westchester",
        slug: "westchester",
        city: "Westchester",
        county: "Miami-Dade County",
        state: "FL",
        priority: 7,
        featured: false,
        title: {
            en: "Cardiologist Near Westchester, FL",
            es: "Cardiólogo cerca de Westchester, FL",
        },
        shortTitle: {
            en: "Westchester",
            es: "Westchester",
        },
        description: {
            en: "Victor Pazos, MD. PA. serves patients from Westchester who need cardiology care near Miami-Dade County.",
            es: "Victor Pazos, MD. PA. atiende pacientes de Westchester que necesitan atención cardiológica cerca de Miami-Dade County.",
        },
        shortDescription: {
            en: "Heart care near Westchester.",
            es: "Cuidado del corazón cerca de Westchester.",
        },
        intro: {
            en: "Patients from Westchester can access cardiology care through the Hialeah office for symptoms, heart-risk concerns, abnormal test results, and long-term cardiovascular follow-up.",
            es: "Pacientes de Westchester pueden acceder a atención cardiológica a través de la oficina en Hialeah para síntomas, preocupaciones de riesgo cardíaco, resultados anormales y seguimiento cardiovascular a largo plazo.",
        },
        reasonsToChooseOffice: getDefaultReasons("Westchester"),
        nearbyServices: defaultNearbyServices,
        faqs: getDefaultFaqs("Westchester"),
        href: {
            en: "/locations/westchester/",
            es: "/es/ubicaciones/westchester/",
        },
        nearbyOffice: {
            label: {
                en: "Nearby Hialeah Office",
                es: "Oficina cercana en Hialeah",
            },
            display: officeDisplay,
        },
        seo: {
            title: {
                en: "Cardiologist Near Westchester, FL | Victor Pazos, MD",
                es: "Cardiólogo cerca de Westchester, FL | Victor Pazos, MD",
            },
            description: {
                en: "Cardiology care near Westchester, FL from Victor Pazos, MD. PA., serving patients throughout Miami-Dade.",
                es: "Atención cardiológica cerca de Westchester, FL con Victor Pazos, MD. PA., sirviendo pacientes de Miami-Dade.",
            },
            keywords: {
                en: [
                    "cardiologist near Westchester",
                    "heart doctor Westchester",
                    "Westchester cardiology",
                ],
                es: [
                    "cardiólogo cerca de Westchester",
                    "doctor del corazón Westchester",
                    "cardiología Westchester",
                ],
            },
        },
    },
    {
        id: "fontainebleau",
        slug: "fontainebleau",
        city: "Fontainebleau",
        county: "Miami-Dade County",
        state: "FL",
        priority: 8,
        featured: false,
        title: {
            en: "Cardiologist Near Fontainebleau, FL",
            es: "Cardiólogo cerca de Fontainebleau, FL",
        },
        shortTitle: {
            en: "Fontainebleau",
            es: "Fontainebleau",
        },
        description: {
            en: "Patients from Fontainebleau can access cardiology care through the nearby Hialeah office of Victor Pazos, MD.",
            es: "Pacientes de Fontainebleau pueden acceder a atención cardiológica a través de la oficina cercana en Hialeah de Victor Pazos, MD.",
        },
        shortDescription: {
            en: "Cardiology care near Fontainebleau.",
            es: "Atención cardiológica cerca de Fontainebleau.",
        },
        intro: {
            en: "Fontainebleau patients looking for cardiology care can contact the Hialeah office for evaluation of symptoms, cardiovascular risk, abnormal EKG results, and ongoing heart-health concerns.",
            es: "Pacientes de Fontainebleau que buscan atención cardiológica pueden contactar la oficina en Hialeah para evaluación de síntomas, riesgo cardiovascular, resultados anormales de EKG y preocupaciones continuas de salud cardíaca.",
        },
        reasonsToChooseOffice: getDefaultReasons("Fontainebleau"),
        nearbyServices: defaultNearbyServices,
        faqs: getDefaultFaqs("Fontainebleau"),
        href: {
            en: "/locations/fontainebleau/",
            es: "/es/ubicaciones/fontainebleau/",
        },
        nearbyOffice: {
            label: {
                en: "Nearby Hialeah Office",
                es: "Oficina cercana en Hialeah",
            },
            display: officeDisplay,
        },
        seo: {
            title: {
                en: "Cardiologist Near Fontainebleau, FL | Victor Pazos, MD",
                es: "Cardiólogo cerca de Fontainebleau, FL | Victor Pazos, MD",
            },
            description: {
                en: "Victor Pazos, MD. PA. serves Fontainebleau patients looking for cardiology care near Hialeah and Miami-Dade.",
                es: "Victor Pazos, MD. PA. atiende pacientes de Fontainebleau que buscan atención cardiológica cerca de Hialeah y Miami-Dade.",
            },
            keywords: {
                en: [
                    "cardiologist near Fontainebleau",
                    "heart doctor Fontainebleau",
                    "Fontainebleau cardiology",
                ],
                es: [
                    "cardiólogo cerca de Fontainebleau",
                    "doctor del corazón Fontainebleau",
                    "cardiología Fontainebleau",
                ],
            },
        },
    },
    {
        id: "kendall",
        slug: "kendall",
        city: "Kendall",
        county: "Miami-Dade County",
        state: "FL",
        priority: 9,
        featured: false,
        title: {
            en: "Cardiologist Near Kendall, FL",
            es: "Cardiólogo cerca de Kendall, FL",
        },
        shortTitle: {
            en: "Kendall",
            es: "Kendall",
        },
        description: {
            en: "Victor Pazos, MD. PA. serves patients from Kendall seeking cardiology care in Miami-Dade County.",
            es: "Victor Pazos, MD. PA. atiende pacientes de Kendall que buscan atención cardiológica en Miami-Dade County.",
        },
        shortDescription: {
            en: "Cardiology care for patients from Kendall.",
            es: "Atención cardiológica para pacientes de Kendall.",
        },
        intro: {
            en: "Patients from Kendall can contact the Hialeah cardiology office for cardiovascular evaluation, risk-factor review, heart-related symptoms, and ongoing follow-up care.",
            es: "Pacientes de Kendall pueden contactar la oficina de cardiología en Hialeah para evaluación cardiovascular, revisión de factores de riesgo, síntomas relacionados con el corazón y seguimiento continuo.",
        },
        reasonsToChooseOffice: getDefaultReasons("Kendall"),
        nearbyServices: defaultNearbyServices,
        faqs: getDefaultFaqs("Kendall"),
        href: {
            en: "/locations/kendall/",
            es: "/es/ubicaciones/kendall/",
        },
        nearbyOffice: {
            label: {
                en: "Nearby Hialeah Office",
                es: "Oficina cercana en Hialeah",
            },
            display: officeDisplay,
        },
        seo: {
            title: {
                en: "Cardiologist Near Kendall, FL | Victor Pazos, MD",
                es: "Cardiólogo cerca de Kendall, FL | Victor Pazos, MD",
            },
            description: {
                en: "Cardiology care for Kendall patients from Victor Pazos, MD. PA., serving communities across Miami-Dade County.",
                es: "Atención cardiológica para pacientes de Kendall con Victor Pazos, MD. PA., sirviendo comunidades de Miami-Dade County.",
            },
            keywords: {
                en: [
                    "cardiologist near Kendall",
                    "heart doctor Kendall",
                    "Kendall cardiology",
                ],
                es: [
                    "cardiólogo cerca de Kendall",
                    "doctor del corazón Kendall",
                    "cardiología Kendall",
                ],
            },
        },
    },
];

export const featuredMiamiDadeLocations = miamiDadeLocations
    .filter((location) => location.featured)
    .sort((a, b) => a.priority - b.priority);

export const getMiamiDadeLocationBySlug = (slug: string) => {
    return miamiDadeLocations.find((location) => location.slug === slug);
};

export const getMiamiDadeLocationHref = (
    location: MiamiDadeLocation,
    language: LanguageCode
) => {
    return location.href[language];
};

export const getRelatedMiamiDadeLocations = (
    currentLocationId: string,
    limit = 4
) => {
    return miamiDadeLocations
        .filter((location) => location.id !== currentLocationId)
        .sort((a, b) => a.priority - b.priority)
        .slice(0, limit);
};

export const getMiamiDadeLocationStaticPaths = (language: LanguageCode) => {
    return miamiDadeLocations.map((location) => ({
        params: {
            slug: location.slug,
        },
        props: {
            location,
            language,
        },
    }));
};