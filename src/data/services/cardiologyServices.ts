// src/data/services/cardiologyServices.ts

import type { LucideIcon } from "lucide-astro";

import Arrythmia from "../../components/icons/Arrythmia.astro";
import CardiacTesting from "../../components/icons/CardiacTesting.astro";
import Cardiology from "../../components/icons/Cardiology.astro";
import ChestPain from "../../components/icons/ChestPain.astro";
import HeartDisease from "../../components/icons/HeartDisease.astro";
import Hypertension from "../../components/icons/Hypertension.astro";
import InterventionalCardiology from "../../components/icons/InterventionalCardiology.astro";
import PreventiveCardiology from "../../components/icons/PreventiveCardiology.astro";
import ShortnessOfBreath from "../../components/icons/ShortnessOfBreath.astro";

import type { LanguageCode } from "../site/siteConfig";

export interface ServiceFaq {
    question: Record<LanguageCode, string>;
    answer: Record<LanguageCode, string>;
}

export interface ServiceContentBlock {
    title: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
}

export interface ServiceDetailImage {
    src: string;
    alt: Record<LanguageCode, string>;
}

export interface CardiologyService {
    id: string;
    slug: Record<LanguageCode, string>;
    icon: LucideIcon;
    title: Record<LanguageCode, string>;
    shortTitle: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
    shortDescription: Record<LanguageCode, string>;
    overview: Record<LanguageCode, string>;
    detailImages: ServiceDetailImage[];
    reasonsToSeekCare: ServiceContentBlock[];
    whatToExpect: ServiceContentBlock[];
    faqs: ServiceFaq[];
    keywords: Record<LanguageCode, string[]>;
    href: Record<LanguageCode, string>;
    seo: {
        title: Record<LanguageCode, string>;
        description: Record<LanguageCode, string>;
    };
    featured?: boolean;
    priority: number;
}

export const cardiologyServices: CardiologyService[] = [
    {
        id: "general-cardiology",
        slug: {
            en: "general-cardiology",
            es: "cardiologia-general",
        },
        icon: Cardiology,
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
        overview: {
            en: "General cardiology care helps patients evaluate symptoms, understand cardiovascular risk, review abnormal findings, and plan next steps for heart health. Victor Pazos, MD provides cardiology care from the Hialeah office for patients across Miami-Dade.",
            es: "La cardiología general ayuda a los pacientes a evaluar síntomas, entender riesgos cardiovasculares, revisar resultados anormales y planificar próximos pasos para la salud del corazón. Victor Pazos, MD ofrece atención cardiológica desde la oficina en Hialeah para pacientes de Miami-Dade.",
        },
        detailImages: [
            {
                src: "/images/services/general-cardiology/general-cardiology-visit.webp",
                alt: {
                    en: "General cardiology visit and heart health consultation",
                    es: "Consulta de cardiología general y salud del corazón",
                },
            },
            {
                src: "/images/services/general-cardiology/cardiology-evaluation.webp",
                alt: {
                    en: "Cardiology evaluation for heart-related symptoms",
                    es: "Evaluación cardiológica para síntomas relacionados con el corazón",
                },
            },
            {
                src: "/images/services/general-cardiology/heart-care-planning.webp",
                alt: {
                    en: "Heart care planning with a cardiology specialist",
                    es: "Planificación de cuidado cardíaco con especialista en cardiología",
                },
            },
        ],
        reasonsToSeekCare: [
            {
                title: {
                    en: "Heart-related symptoms",
                    es: "Síntomas relacionados con el corazón",
                },
                description: {
                    en: "Chest discomfort, shortness of breath, palpitations, dizziness, or fatigue with activity may need a cardiology evaluation.",
                    es: "Molestia en el pecho, falta de aire, palpitaciones, mareos o fatiga con actividad pueden necesitar una evaluación cardiológica.",
                },
            },
            {
                title: {
                    en: "Risk factor review",
                    es: "Revisión de factores de riesgo",
                },
                description: {
                    en: "High blood pressure, cholesterol, diabetes, smoking history, and family history can affect long-term cardiovascular health.",
                    es: "La presión alta, colesterol, diabetes, historial de fumar y antecedentes familiares pueden afectar la salud cardiovascular a largo plazo.",
                },
            },
            {
                title: {
                    en: "Ongoing heart care",
                    es: "Cuidado cardíaco continuo",
                },
                description: {
                    en: "Patients with known heart disease may need follow-up care, monitoring, medication review, or additional testing.",
                    es: "Pacientes con enfermedad cardíaca conocida pueden necesitar seguimiento, monitoreo, revisión de medicamentos o pruebas adicionales.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Medical history review",
                    es: "Revisión del historial médico",
                },
                description: {
                    en: "The visit may include a review of symptoms, medications, medical history, family history, and prior test results.",
                    es: "La visita puede incluir revisión de síntomas, medicamentos, historial médico, antecedentes familiares y resultados previos.",
                },
            },
            {
                title: {
                    en: "Heart-health discussion",
                    es: "Conversación sobre salud cardíaca",
                },
                description: {
                    en: "The doctor may discuss possible causes, cardiovascular risks, and whether testing or follow-up care is recommended.",
                    es: "El doctor puede hablar sobre posibles causas, riesgos cardiovasculares y si se recomienda hacer pruebas o seguimiento.",
                },
            },
            {
                title: {
                    en: "Clear next steps",
                    es: "Próximos pasos claros",
                },
                description: {
                    en: "The goal is to help patients understand what may be happening and what steps may be appropriate next.",
                    es: "El objetivo es ayudar al paciente a entender qué puede estar ocurriendo y qué pasos pueden ser apropiados después.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "What does a general cardiologist evaluate?",
                    es: "¿Qué evalúa un cardiólogo general?",
                },
                answer: {
                    en: "A general cardiologist evaluates heart-related symptoms, cardiovascular risk factors, abnormal test results, and ongoing heart conditions.",
                    es: "Un cardiólogo general evalúa síntomas relacionados con el corazón, factores de riesgo cardiovascular, resultados anormales y condiciones cardíacas continuas.",
                },
            },
            {
                question: {
                    en: "Do I need symptoms to see a cardiologist?",
                    es: "¿Necesito tener síntomas para ver a un cardiólogo?",
                },
                answer: {
                    en: "Not always. Some patients see a cardiologist because of risk factors, family history, abnormal test results, or prevention concerns.",
                    es: "No siempre. Algunos pacientes visitan a un cardiólogo por factores de riesgo, antecedentes familiares, resultados anormales o prevención.",
                },
            },
        ],
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
            es: " /es/services/cardiologia-general/",
        },
        seo: {
            title: {
                en: "General Cardiology in Hialeah, FL | Victor Pazos, MD",
                es: "Cardiología General en Hialeah, FL | Victor Pazos, MD",
            },
            description: {
                en: "General cardiology care in Hialeah for symptoms, risk factors, abnormal results, and ongoing heart conditions with Victor Pazos, MD.",
                es: "Atención de cardiología general en Hialeah para síntomas, factores de riesgo, resultados anormales y condiciones cardíacas con Victor Pazos, MD.",
            },
        },
        featured: true,
        priority: 1,
    },
    {
        id: "interventional-cardiology",
        slug: {
            en: "interventional-cardiology",
            es: "cardiologia-intervencionista",
        },
        icon: InterventionalCardiology,
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
        overview: {
            en: "Interventional cardiology focuses on advanced evaluation and treatment planning for heart and vascular conditions. Patients may be referred for interventional cardiology when symptoms, testing, or known cardiovascular disease suggest the need for more specialized care.",
            es: "La cardiología intervencionista se enfoca en evaluación avanzada y planificación de tratamiento para condiciones del corazón y los vasos sanguíneos. Los pacientes pueden ser referidos cuando síntomas, pruebas o enfermedad cardiovascular conocida requieren atención más especializada.",
        },
        detailImages: [
            {
                src: "/images/services/interventional-cardiology/interventional-cardiology-consultation.webp",
                alt: {
                    en: "Interventional cardiology consultation for advanced heart care",
                    es: "Consulta de cardiología intervencionista para cuidado cardíaco avanzado",
                },
            },
            {
                src: "/images/services/interventional-cardiology/cardiovascular-specialist.webp",
                alt: {
                    en: "Cardiovascular specialist reviewing heart and vascular concerns",
                    es: "Especialista cardiovascular revisando condiciones del corazón y vasos sanguíneos",
                },
            },
            {
                src: "/images/services/interventional-cardiology/advanced-heart-evaluation.webp",
                alt: {
                    en: "Advanced heart evaluation and treatment planning",
                    es: "Evaluación cardíaca avanzada y planificación de tratamiento",
                },
            },
        ],
        reasonsToSeekCare: [
            {
                title: {
                    en: "Advanced heart concerns",
                    es: "Preocupaciones cardíacas avanzadas",
                },
                description: {
                    en: "Patients with significant symptoms, abnormal testing, or known cardiovascular disease may need specialized evaluation.",
                    es: "Pacientes con síntomas importantes, pruebas anormales o enfermedad cardiovascular conocida pueden necesitar evaluación especializada.",
                },
            },
            {
                title: {
                    en: "Vascular and coronary conditions",
                    es: "Condiciones vasculares y coronarias",
                },
                description: {
                    en: "Interventional cardiology may be involved when heart arteries or blood vessels need closer evaluation.",
                    es: "La cardiología intervencionista puede estar involucrada cuando las arterias del corazón o vasos sanguíneos requieren evaluación más detallada.",
                },
            },
            {
                title: {
                    en: "Treatment planning",
                    es: "Planificación de tratamiento",
                },
                description: {
                    en: "Specialized care can help patients understand available options and appropriate next steps.",
                    es: "La atención especializada puede ayudar a los pacientes a entender opciones disponibles y próximos pasos apropiados.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Review of symptoms and testing",
                    es: "Revisión de síntomas y pruebas",
                },
                description: {
                    en: "The doctor may review symptoms, prior EKGs, imaging, lab results, or other cardiovascular testing.",
                    es: "El doctor puede revisar síntomas, EKG previos, imágenes, laboratorios u otras pruebas cardiovasculares.",
                },
            },
            {
                title: {
                    en: "Risk and condition discussion",
                    es: "Discusión de riesgos y condición",
                },
                description: {
                    en: "The visit may include discussion of cardiovascular risk, current diagnosis, and possible treatment pathways.",
                    es: "La visita puede incluir conversación sobre riesgo cardiovascular, diagnóstico actual y posibles opciones de tratamiento.",
                },
            },
            {
                title: {
                    en: "Next-step recommendations",
                    es: "Recomendaciones de próximos pasos",
                },
                description: {
                    en: "Recommendations may include further testing, monitoring, medication review, or referral pathways depending on the case.",
                    es: "Las recomendaciones pueden incluir pruebas adicionales, monitoreo, revisión de medicamentos o referidos según el caso.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "What is interventional cardiology?",
                    es: "¿Qué es la cardiología intervencionista?",
                },
                answer: {
                    en: "Interventional cardiology is a specialized area of cardiology focused on evaluating and treating certain heart and blood vessel conditions, often using minimally invasive approaches when appropriate.",
                    es: "La cardiología intervencionista es un área especializada enfocada en evaluar y tratar ciertas condiciones del corazón y vasos sanguíneos, frecuentemente con enfoques mínimamente invasivos cuando es apropiado.",
                },
            },
            {
                question: {
                    en: "Do all cardiology patients need interventional care?",
                    es: "¿Todos los pacientes de cardiología necesitan atención intervencionista?",
                },
                answer: {
                    en: "No. Many patients need evaluation, monitoring, medication management, or preventive care. Interventional care depends on symptoms, testing, and clinical findings.",
                    es: "No. Muchos pacientes necesitan evaluación, monitoreo, manejo de medicamentos o prevención. La atención intervencionista depende de síntomas, pruebas y hallazgos clínicos.",
                },
            },
        ],
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
            es: " /es/services/cardiologia-intervencionista/",
        },
        seo: {
            title: {
                en: "Interventional Cardiologist in Hialeah, FL | Victor Pazos, MD",
                es: "Cardiólogo Intervencionista en Hialeah, FL | Victor Pazos, MD",
            },
            description: {
                en: "Interventional cardiology care in Hialeah for advanced cardiovascular concerns, abnormal testing, and heart or vascular conditions.",
                es: "Atención de cardiología intervencionista en Hialeah para preocupaciones cardiovasculares avanzadas, pruebas anormales y condiciones del corazón o vasos sanguíneos.",
            },
        },
        featured: true,
        priority: 2,
    },
    {
        id: "chest-pain-evaluation",
        slug: {
            en: "chest-pain-evaluation",
            es: "evaluacion-dolor-pecho",
        },
        icon: ChestPain,
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
        overview: {
            en: "Chest discomfort can have many causes, but some symptoms may involve the heart. A cardiology evaluation can help review the pattern of symptoms, risk factors, and whether additional testing or urgent care is needed.",
            es: "La molestia en el pecho puede tener muchas causas, pero algunos síntomas pueden involucrar el corazón. Una evaluación cardiológica puede ayudar a revisar el patrón de síntomas, factores de riesgo y si se necesitan pruebas adicionales o atención urgente.",
        },
        detailImages: [
            {
                src: "/images/services/chest-pain-evaluation/chest-pain-consultation.webp",
                alt: {
                    en: "Chest pain evaluation with a cardiologist",
                    es: "Evaluación de dolor en el pecho con un cardiólogo",
                },
            },
            {
                src: "/images/services/chest-pain-evaluation/heart-symptom-review.webp",
                alt: {
                    en: "Heart symptom review for chest discomfort and pressure",
                    es: "Revisión de síntomas cardíacos por molestia y presión en el pecho",
                },
            },
            {
                src: "/images/services/chest-pain-evaluation/cardiology-testing-guidance.webp",
                alt: {
                    en: "Cardiology testing guidance for chest discomfort",
                    es: "Orientación sobre pruebas cardiológicas por molestia en el pecho",
                },
            },
        ],
        reasonsToSeekCare: [
            {
                title: {
                    en: "Pressure or tightness",
                    es: "Presión u opresión",
                },
                description: {
                    en: "Chest pressure, tightness, heaviness, burning, or discomfort may need a heart-focused evaluation.",
                    es: "Presión, opresión, pesadez, ardor o molestia en el pecho pueden necesitar una evaluación enfocada en el corazón.",
                },
            },
            {
                title: {
                    en: "Symptoms with activity",
                    es: "Síntomas con actividad",
                },
                description: {
                    en: "Symptoms that appear during walking, stairs, exercise, or stress should be discussed with a medical professional.",
                    es: "Síntomas que aparecen al caminar, subir escaleras, hacer ejercicio o con estrés deben hablarse con un profesional médico.",
                },
            },
            {
                title: {
                    en: "Risk factors",
                    es: "Factores de riesgo",
                },
                description: {
                    en: "High blood pressure, diabetes, cholesterol, smoking history, or family history may increase cardiovascular risk.",
                    es: "Presión alta, diabetes, colesterol, historial de fumar o antecedentes familiares pueden aumentar el riesgo cardiovascular.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Symptom review",
                    es: "Revisión de síntomas",
                },
                description: {
                    en: "The doctor may ask when symptoms started, what they feel like, how long they last, and what triggers or relieves them.",
                    es: "El doctor puede preguntar cuándo comenzaron los síntomas, cómo se sienten, cuánto duran y qué los provoca o alivia.",
                },
            },
            {
                title: {
                    en: "Risk assessment",
                    es: "Evaluación de riesgo",
                },
                description: {
                    en: "Your personal and family history, blood pressure, medications, and prior results may be reviewed.",
                    es: "Se puede revisar su historial personal y familiar, presión arterial, medicamentos y resultados previos.",
                },
            },
            {
                title: {
                    en: "Testing guidance",
                    es: "Orientación sobre pruebas",
                },
                description: {
                    en: "Depending on the case, EKG or other cardiac testing may be recommended.",
                    es: "Dependiendo del caso, se puede recomendar un EKG u otras pruebas cardíacas.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Should chest pain be treated as an emergency?",
                    es: "¿El dolor en el pecho debe tratarse como una emergencia?",
                },
                answer: {
                    en: "Severe chest pain, chest pain with shortness of breath, fainting, sweating, weakness, or symptoms that feel urgent should be treated as a medical emergency. Call 911 immediately.",
                    es: "Dolor fuerte en el pecho, dolor con falta de aire, desmayo, sudoración, debilidad o síntomas que parezcan urgentes deben tratarse como una emergencia médica. Llame al 911 inmediatamente.",
                },
            },
            {
                question: {
                    en: "Can a cardiologist help evaluate chest discomfort?",
                    es: "¿Un cardiólogo puede ayudar a evaluar molestias en el pecho?",
                },
                answer: {
                    en: "Yes. A cardiologist can evaluate symptoms, review risk factors, and recommend next steps such as testing, monitoring, or follow-up care.",
                    es: "Sí. Un cardiólogo puede evaluar síntomas, revisar factores de riesgo y recomendar próximos pasos como pruebas, monitoreo o seguimiento.",
                },
            },
        ],
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
            es: " /es/services/evaluacion-dolor-pecho/",
        },
        seo: {
            title: {
                en: "Chest Pain Evaluation in Hialeah, FL | Victor Pazos, MD",
                es: "Evaluación de Dolor en el Pecho en Hialeah, FL | Victor Pazos, MD",
            },
            description: {
                en: "Chest discomfort, pressure, tightness, or burning may need a heart-focused evaluation. Victor Pazos, MD provides cardiology care in Hialeah.",
                es: "La molestia, presión, opresión o ardor en el pecho puede necesitar evaluación cardiológica. Victor Pazos, MD ofrece atención en Hialeah.",
            },
        },
        featured: true,
        priority: 3,
    },
    {
        id: "hypertension-treatment",
        slug: {
            en: "hypertension-treatment",
            es: "tratamiento-hipertension",
        },
        icon: Hypertension,
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
        overview: {
            en: "High blood pressure is one of the most common cardiovascular risk factors. Cardiology care can help patients review readings, understand risk, discuss medications, and monitor long-term heart health.",
            es: "La presión alta es uno de los factores de riesgo cardiovascular más comunes. La atención cardiológica puede ayudar a revisar lecturas, entender riesgos, hablar sobre medicamentos y monitorear la salud del corazón a largo plazo.",
        },
        detailImages: [
            {
                src: "/images/services/hypertension-treatment/blood-pressure-review.webp",
                alt: {
                    en: "Blood pressure review during cardiology visit",
                    es: "Revisión de presión arterial durante una visita cardiológica",
                },
            },
            {
                src: "/images/services/hypertension-treatment/hypertension-care-plan.webp",
                alt: {
                    en: "Hypertension care plan and cardiovascular risk discussion",
                    es: "Plan de cuidado para hipertensión y conversación sobre riesgo cardiovascular",
                },
            },
            {
                src: "/images/services/hypertension-treatment/heart-risk-management.webp",
                alt: {
                    en: "Heart risk management for high blood pressure",
                    es: "Manejo de riesgo cardíaco para presión alta",
                },
            },
        ],
        reasonsToSeekCare: [
            {
                title: {
                    en: "Repeated high readings",
                    es: "Lecturas altas repetidas",
                },
                description: {
                    en: "Consistently elevated blood pressure may need medical evaluation and monitoring.",
                    es: "La presión arterial elevada de forma constante puede necesitar evaluación médica y monitoreo.",
                },
            },
            {
                title: {
                    en: "Medication review",
                    es: "Revisión de medicamentos",
                },
                description: {
                    en: "Patients may need help reviewing current medications, side effects, or treatment goals.",
                    es: "Los pacientes pueden necesitar ayuda revisando medicamentos actuales, efectos secundarios u objetivos de tratamiento.",
                },
            },
            {
                title: {
                    en: "Cardiovascular risk",
                    es: "Riesgo cardiovascular",
                },
                description: {
                    en: "Hypertension can increase the risk of heart disease, stroke, kidney disease, and other complications.",
                    es: "La hipertensión puede aumentar el riesgo de enfermedad cardíaca, derrame cerebral, enfermedad renal y otras complicaciones.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Blood pressure review",
                    es: "Revisión de presión arterial",
                },
                description: {
                    en: "The visit may include review of office readings, home readings, symptoms, medications, and risk factors.",
                    es: "La visita puede incluir revisión de lecturas en oficina, lecturas en casa, síntomas, medicamentos y factores de riesgo.",
                },
            },
            {
                title: {
                    en: "Risk reduction discussion",
                    es: "Discusión de reducción de riesgo",
                },
                description: {
                    en: "The doctor may discuss lifestyle, medication options, monitoring, and long-term cardiovascular prevention.",
                    es: "El doctor puede hablar sobre estilo de vida, opciones de medicamentos, monitoreo y prevención cardiovascular a largo plazo.",
                },
            },
            {
                title: {
                    en: "Follow-up planning",
                    es: "Plan de seguimiento",
                },
                description: {
                    en: "High blood pressure often requires ongoing monitoring and follow-up adjustments over time.",
                    es: "La presión alta muchas veces requiere monitoreo continuo y ajustes de seguimiento con el tiempo.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Can a cardiologist treat high blood pressure?",
                    es: "¿Un cardiólogo puede tratar la presión alta?",
                },
                answer: {
                    en: "Yes. Cardiologists often help evaluate and manage high blood pressure, especially when cardiovascular risk factors or heart concerns are present.",
                    es: "Sí. Los cardiólogos suelen ayudar a evaluar y manejar la presión alta, especialmente cuando existen factores de riesgo cardiovascular o preocupaciones del corazón.",
                },
            },
            {
                question: {
                    en: "Why is hypertension important for heart health?",
                    es: "¿Por qué la hipertensión es importante para la salud del corazón?",
                },
                answer: {
                    en: "Over time, uncontrolled high blood pressure can increase strain on the heart and blood vessels and may raise the risk of cardiovascular complications.",
                    es: "Con el tiempo, la presión alta no controlada puede aumentar la carga sobre el corazón y los vasos sanguíneos, elevando el riesgo de complicaciones cardiovasculares.",
                },
            },
        ],
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
            es: " /es/services/tratamiento-hipertension/",
        },
        seo: {
            title: {
                en: "High Blood Pressure & Hypertension Care in Hialeah, FL",
                es: "Cuidado de Presión Alta e Hipertensión en Hialeah, FL",
            },
            description: {
                en: "Cardiology care for high blood pressure, cardiovascular risk, medication review, and long-term monitoring with Victor Pazos, MD in Hialeah.",
                es: "Atención cardiológica para presión alta, riesgo cardiovascular, revisión de medicamentos y monitoreo continuo con Victor Pazos, MD en Hialeah.",
            },
        },
        featured: true,
        priority: 4,
    },
    {
        id: "heart-disease-management",
        slug: {
            en: "heart-disease-management",
            es: "manejo-enfermedades-corazon",
        },
        icon: HeartDisease,
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
        overview: {
            en: "Patients with known or suspected heart disease may need ongoing care, regular monitoring, medication review, risk reduction, and testing guidance. Cardiology follow-up can help patients understand their condition and next steps.",
            es: "Pacientes con enfermedad cardíaca conocida o sospechada pueden necesitar cuidado continuo, monitoreo regular, revisión de medicamentos, reducción de riesgo y orientación sobre pruebas. El seguimiento cardiológico puede ayudar a entender la condición y próximos pasos.",
        },
        detailImages: [
            {
                src: "/images/services/heart-disease-management/heart-disease-follow-up.webp",
                alt: {
                    en: "Heart disease follow-up visit with cardiology specialist",
                    es: "Visita de seguimiento para enfermedad cardíaca con especialista en cardiología",
                },
            },
            {
                src: "/images/services/heart-disease-management/cardiovascular-monitoring.webp",
                alt: {
                    en: "Cardiovascular monitoring and long-term heart care",
                    es: "Monitoreo cardiovascular y cuidado cardíaco a largo plazo",
                },
            },
            {
                src: "/images/services/heart-disease-management/treatment-planning.webp",
                alt: {
                    en: "Treatment planning for ongoing heart disease management",
                    es: "Planificación de tratamiento para manejo continuo de enfermedad cardíaca",
                },
            },
        ],
        reasonsToSeekCare: [
            {
                title: {
                    en: "Known heart condition",
                    es: "Condición cardíaca conocida",
                },
                description: {
                    en: "Patients with prior diagnosis may need monitoring, medication review, or follow-up care.",
                    es: "Pacientes con diagnóstico previo pueden necesitar monitoreo, revisión de medicamentos o seguimiento.",
                },
            },
            {
                title: {
                    en: "Changing symptoms",
                    es: "Síntomas que cambian",
                },
                description: {
                    en: "New or worsening symptoms should be discussed with a medical professional.",
                    es: "Síntomas nuevos o que empeoran deben hablarse con un profesional médico.",
                },
            },
            {
                title: {
                    en: "Long-term risk management",
                    es: "Manejo de riesgo a largo plazo",
                },
                description: {
                    en: "Heart disease care often includes blood pressure, cholesterol, diabetes, lifestyle, and medication management.",
                    es: "El cuidado de enfermedad cardíaca suele incluir manejo de presión, colesterol, diabetes, estilo de vida y medicamentos.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Condition review",
                    es: "Revisión de la condición",
                },
                description: {
                    en: "The doctor may review your diagnosis, current symptoms, medications, prior procedures, and recent testing.",
                    es: "El doctor puede revisar su diagnóstico, síntomas actuales, medicamentos, procedimientos previos y pruebas recientes.",
                },
            },
            {
                title: {
                    en: "Monitoring plan",
                    es: "Plan de monitoreo",
                },
                description: {
                    en: "Follow-up may include testing, symptom tracking, medication review, or periodic evaluation.",
                    es: "El seguimiento puede incluir pruebas, monitoreo de síntomas, revisión de medicamentos o evaluación periódica.",
                },
            },
            {
                title: {
                    en: "Risk reduction",
                    es: "Reducción de riesgo",
                },
                description: {
                    en: "The goal is to help reduce future cardiovascular risk and support long-term heart health.",
                    es: "El objetivo es ayudar a reducir riesgo cardiovascular futuro y apoyar la salud cardíaca a largo plazo.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Why is follow-up important for heart disease?",
                    es: "¿Por qué es importante el seguimiento para enfermedad cardíaca?",
                },
                answer: {
                    en: "Follow-up helps monitor symptoms, treatment response, risk factors, and whether additional testing or care adjustments may be needed.",
                    es: "El seguimiento ayuda a monitorear síntomas, respuesta al tratamiento, factores de riesgo y si se necesitan pruebas o ajustes adicionales.",
                },
            },
            {
                question: {
                    en: "Can heart disease care include prevention?",
                    es: "¿El cuidado de enfermedad cardíaca puede incluir prevención?",
                },
                answer: {
                    en: "Yes. Managing risk factors such as blood pressure, cholesterol, diabetes, and lifestyle is often part of long-term heart disease care.",
                    es: "Sí. Manejar factores de riesgo como presión, colesterol, diabetes y estilo de vida suele ser parte del cuidado cardíaco a largo plazo.",
                },
            },
        ],
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
            es: " /es/services/manejo-enfermedades-corazon/",
        },
        seo: {
            title: {
                en: "Heart Disease Management in Hialeah, FL | Cardiology Care",
                es: "Manejo de Enfermedades del Corazón en Hialeah, FL",
            },
            description: {
                en: "Ongoing cardiology care in Hialeah for known or suspected heart disease, cardiovascular risk, monitoring, and treatment planning.",
                es: "Atención cardiológica continua en Hialeah para enfermedad cardíaca conocida o sospechada, riesgo cardiovascular, monitoreo y planificación de tratamiento.",
            },
        },
        featured: true,
        priority: 5,
    },
    {
        id: "ekg-cardiac-testing",
        slug: {
            en: "ekg-cardiac-testing",
            es: "ekg-pruebas-cardiacas",
        },
        icon: CardiacTesting,
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
        overview: {
            en: "EKG and cardiac testing may help evaluate heart rhythm, symptoms, risk factors, or abnormal findings. A cardiology visit can help determine which testing may be appropriate based on your concerns.",
            es: "El EKG y las pruebas cardíacas pueden ayudar a evaluar el ritmo del corazón, síntomas, factores de riesgo o hallazgos anormales. Una visita cardiológica puede ayudar a determinar qué pruebas pueden ser apropiadas según sus preocupaciones.",
        },
        detailImages: [
            {
                src: "/images/services/ekg-cardiac-testing/ekg-testing.webp",
                alt: {
                    en: "EKG testing for heart rhythm evaluation",
                    es: "Prueba EKG para evaluación del ritmo cardíaco",
                },
            },
            {
                src: "/images/services/ekg-cardiac-testing/cardiac-test-review.webp",
                alt: {
                    en: "Cardiac test review with a cardiology specialist",
                    es: "Revisión de pruebas cardíacas con especialista en cardiología",
                },
            },
            {
                src: "/images/services/ekg-cardiac-testing/heart-rhythm-evaluation.webp",
                alt: {
                    en: "Heart rhythm evaluation and cardiac testing guidance",
                    es: "Evaluación del ritmo cardíaco y orientación sobre pruebas cardíacas",
                },
            },
        ],
        reasonsToSeekCare: [
            {
                title: {
                    en: "Abnormal EKG",
                    es: "EKG anormal",
                },
                description: {
                    en: "An abnormal EKG may need cardiology follow-up to understand what the finding may mean.",
                    es: "Un EKG anormal puede necesitar seguimiento cardiológico para entender qué puede significar el resultado.",
                },
            },
            {
                title: {
                    en: "Rhythm concerns",
                    es: "Preocupaciones del ritmo cardíaco",
                },
                description: {
                    en: "Palpitations, skipped beats, or irregular rhythms may require additional evaluation.",
                    es: "Palpitaciones, latidos saltados o ritmos irregulares pueden requerir evaluación adicional.",
                },
            },
            {
                title: {
                    en: "Symptom evaluation",
                    es: "Evaluación de síntomas",
                },
                description: {
                    en: "Testing may be recommended for chest discomfort, shortness of breath, dizziness, or fatigue with activity.",
                    es: "Se pueden recomendar pruebas para molestia en el pecho, falta de aire, mareos o fatiga con actividad.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Clinical review",
                    es: "Revisión clínica",
                },
                description: {
                    en: "Symptoms, history, medications, and previous results may be reviewed before recommending testing.",
                    es: "Se pueden revisar síntomas, historial, medicamentos y resultados previos antes de recomendar pruebas.",
                },
            },
            {
                title: {
                    en: "Testing recommendation",
                    es: "Recomendación de pruebas",
                },
                description: {
                    en: "Depending on the concern, EKG or other cardiac testing may be recommended.",
                    es: "Dependiendo de la preocupación, se puede recomendar EKG u otras pruebas cardíacas.",
                },
            },
            {
                title: {
                    en: "Results discussion",
                    es: "Discusión de resultados",
                },
                description: {
                    en: "The goal is to explain what the results may mean and what next steps may be needed.",
                    es: "El objetivo es explicar qué pueden significar los resultados y qué próximos pasos pueden ser necesarios.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "What does an EKG show?",
                    es: "¿Qué muestra un EKG?",
                },
                answer: {
                    en: "An EKG records the electrical activity of the heart and may help identify rhythm concerns or other findings that need medical interpretation.",
                    es: "Un EKG registra la actividad eléctrica del corazón y puede ayudar a identificar preocupaciones del ritmo u otros hallazgos que necesitan interpretación médica.",
                },
            },
            {
                question: {
                    en: "Do abnormal EKG results always mean heart disease?",
                    es: "¿Un EKG anormal siempre significa enfermedad cardíaca?",
                },
                answer: {
                    en: "Not always. Abnormal findings need to be interpreted in context with symptoms, history, risk factors, and sometimes additional testing.",
                    es: "No siempre. Los hallazgos anormales deben interpretarse junto con síntomas, historial, factores de riesgo y a veces pruebas adicionales.",
                },
            },
        ],
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
            es: " /es/services/ekg-pruebas-cardiacas/",
        },
        seo: {
            title: {
                en: "EKG / ECG Testing in Hialeah, FL | Cardiology Evaluation",
                es: "Prueba EKG / ECG en Hialeah, FL | Evaluación Cardiológica",
            },
            description: {
                en: "Need follow-up for an abnormal EKG or heart rhythm concern? Victor Pazos, MD provides cardiology evaluation and cardiac testing guidance in Hialeah.",
                es: "¿Necesita seguimiento por un EKG anormal o preocupación del ritmo cardíaco? Victor Pazos, MD ofrece evaluación cardiológica en Hialeah.",
            },
        },
        priority: 6,
    },
    {
        id: "shortness-of-breath-evaluation",
        slug: {
            en: "shortness-of-breath-evaluation",
            es: "evaluacion-falta-de-aire",
        },
        icon: ShortnessOfBreath,
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
        overview: {
            en: "Shortness of breath can have many causes, including heart-related concerns. A cardiology evaluation can help review symptoms, risk factors, and whether additional cardiac testing may be appropriate.",
            es: "La falta de aire puede tener muchas causas, incluyendo preocupaciones relacionadas con el corazón. Una evaluación cardiológica puede ayudar a revisar síntomas, factores de riesgo y si se necesitan pruebas cardíacas adicionales.",
        },
        detailImages: [
            {
                src: "/images/services/shortness-of-breath-evaluation/breathing-symptom-evaluation.webp",
                alt: {
                    en: "Cardiology evaluation for shortness of breath",
                    es: "Evaluación cardiológica por falta de aire",
                },
            },
            {
                src: "/images/services/shortness-of-breath-evaluation/fatigue-with-activity.webp",
                alt: {
                    en: "Evaluation for fatigue and shortness of breath with activity",
                    es: "Evaluación de fatiga y falta de aire con actividad",
                },
            },
            {
                src: "/images/services/shortness-of-breath-evaluation/heart-related-breathing-concerns.webp",
                alt: {
                    en: "Heart-related breathing concerns and cardiovascular evaluation",
                    es: "Preocupaciones respiratorias relacionadas con el corazón y evaluación cardiovascular",
                },
            },
        ],
        reasonsToSeekCare: [
            {
                title: {
                    en: "Breathing symptoms with activity",
                    es: "Falta de aire con actividad",
                },
                description: {
                    en: "Shortness of breath during walking, stairs, or exercise may need evaluation.",
                    es: "La falta de aire al caminar, subir escaleras o hacer ejercicio puede necesitar evaluación.",
                },
            },
            {
                title: {
                    en: "Fatigue or reduced stamina",
                    es: "Fatiga o menor resistencia",
                },
                description: {
                    en: "Unusual fatigue or reduced exercise tolerance may sometimes involve cardiovascular health.",
                    es: "Fatiga inusual o menor tolerancia al ejercicio puede a veces involucrar la salud cardiovascular.",
                },
            },
            {
                title: {
                    en: "Associated heart symptoms",
                    es: "Síntomas cardíacos asociados",
                },
                description: {
                    en: "Shortness of breath with chest discomfort, palpitations, dizziness, or swelling should be discussed with a clinician.",
                    es: "Falta de aire con molestia en el pecho, palpitaciones, mareos o hinchazón debe hablarse con un clínico.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Symptom pattern review",
                    es: "Revisión del patrón de síntomas",
                },
                description: {
                    en: "The doctor may ask when symptoms happen, how severe they are, and what makes them better or worse.",
                    es: "El doctor puede preguntar cuándo ocurren los síntomas, qué tan severos son y qué los mejora o empeora.",
                },
            },
            {
                title: {
                    en: "Heart and risk evaluation",
                    es: "Evaluación del corazón y riesgos",
                },
                description: {
                    en: "Risk factors, prior results, blood pressure, and known conditions may be reviewed.",
                    es: "Se pueden revisar factores de riesgo, resultados previos, presión arterial y condiciones conocidas.",
                },
            },
            {
                title: {
                    en: "Testing discussion",
                    es: "Discusión de pruebas",
                },
                description: {
                    en: "Depending on symptoms, cardiac testing or follow-up evaluation may be recommended.",
                    es: "Dependiendo de los síntomas, se pueden recomendar pruebas cardíacas o evaluación de seguimiento.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Can shortness of breath be related to the heart?",
                    es: "¿La falta de aire puede estar relacionada con el corazón?",
                },
                answer: {
                    en: "Yes, shortness of breath can sometimes be related to cardiovascular conditions, especially when it occurs with activity or other heart-related symptoms.",
                    es: "Sí, la falta de aire a veces puede relacionarse con condiciones cardiovasculares, especialmente cuando ocurre con actividad u otros síntomas cardíacos.",
                },
            },
            {
                question: {
                    en: "When is shortness of breath an emergency?",
                    es: "¿Cuándo la falta de aire es una emergencia?",
                },
                answer: {
                    en: "Sudden or severe shortness of breath, especially with chest pain, fainting, blue lips, confusion, or severe weakness, should be treated as an emergency. Call 911.",
                    es: "Falta de aire repentina o severa, especialmente con dolor en el pecho, desmayo, labios azules, confusión o debilidad severa, debe tratarse como emergencia. Llame al 911.",
                },
            },
        ],
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
            es: " /es/services/evaluacion-falta-de-aire/",
        },
        seo: {
            title: {
                en: "Shortness of Breath Evaluation in Hialeah, FL",
                es: "Evaluación de Falta de Aire en Hialeah, FL",
            },
            description: {
                en: "Cardiology evaluation in Hialeah for shortness of breath, fatigue with activity, reduced stamina, and symptoms that may involve the heart.",
                es: "Evaluación cardiológica en Hialeah para falta de aire, fatiga con actividad, menor resistencia y síntomas que pueden involucrar el corazón.",
            },
        },
        priority: 7,
    },
    {
        id: "preventive-cardiology",
        slug: {
            en: "preventive-cardiology",
            es: "cardiologia-preventiva",
        },
        icon: PreventiveCardiology,
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
        overview: {
            en: "Preventive cardiology focuses on identifying cardiovascular risk early and helping patients reduce the chance of future heart problems. This may include blood pressure, cholesterol, diabetes risk, family history, lifestyle, and ongoing monitoring.",
            es: "La cardiología preventiva se enfoca en identificar el riesgo cardiovascular temprano y ayudar a los pacientes a reducir la posibilidad de problemas cardíacos futuros. Puede incluir presión arterial, colesterol, riesgo de diabetes, antecedentes familiares, estilo de vida y monitoreo continuo.",
        },
        detailImages: [
            {
                src: "/images/services/preventive-cardiology/preventive-heart-care.webp",
                alt: {
                    en: "Preventive heart care and cardiovascular risk evaluation",
                    es: "Cuidado preventivo del corazón y evaluación de riesgo cardiovascular",
                },
            },
            {
                src: "/images/services/preventive-cardiology/heart-risk-assessment.webp",
                alt: {
                    en: "Heart risk assessment for long-term cardiovascular health",
                    es: "Evaluación de riesgo cardíaco para salud cardiovascular a largo plazo",
                },
            },
            {
                src: "/images/services/preventive-cardiology/cardiology-prevention-plan.webp",
                alt: {
                    en: "Preventive cardiology plan for heart health",
                    es: "Plan de cardiología preventiva para la salud del corazón",
                },
            },
        ],
        reasonsToSeekCare: [
            {
                title: {
                    en: "Family history of heart disease",
                    es: "Antecedentes familiares de enfermedad cardíaca",
                },
                description: {
                    en: "Family history may increase cardiovascular risk and may justify earlier evaluation.",
                    es: "Los antecedentes familiares pueden aumentar el riesgo cardiovascular y justificar evaluación temprana.",
                },
            },
            {
                title: {
                    en: "Risk factor management",
                    es: "Manejo de factores de riesgo",
                },
                description: {
                    en: "Blood pressure, cholesterol, diabetes, smoking history, and lifestyle can affect long-term heart health.",
                    es: "Presión arterial, colesterol, diabetes, historial de fumar y estilo de vida pueden afectar la salud cardíaca a largo plazo.",
                },
            },
            {
                title: {
                    en: "Prevention planning",
                    es: "Planificación preventiva",
                },
                description: {
                    en: "A cardiology visit can help patients understand what steps may reduce future cardiovascular risk.",
                    es: "Una visita cardiológica puede ayudar a entender qué pasos pueden reducir el riesgo cardiovascular futuro.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Risk review",
                    es: "Revisión de riesgo",
                },
                description: {
                    en: "The doctor may review blood pressure, cholesterol, family history, medical conditions, and lifestyle factors.",
                    es: "El doctor puede revisar presión arterial, colesterol, antecedentes familiares, condiciones médicas y estilo de vida.",
                },
            },
            {
                title: {
                    en: "Prevention goals",
                    es: "Objetivos de prevención",
                },
                description: {
                    en: "Care may include discussion of monitoring, testing, medication options, and lifestyle changes when appropriate.",
                    es: "La atención puede incluir monitoreo, pruebas, opciones de medicamentos y cambios de estilo de vida cuando sea apropiado.",
                },
            },
            {
                title: {
                    en: "Long-term plan",
                    es: "Plan a largo plazo",
                },
                description: {
                    en: "Preventive cardiology often focuses on consistent follow-up and risk reduction over time.",
                    es: "La cardiología preventiva suele enfocarse en seguimiento constante y reducción de riesgo con el tiempo.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Who should consider preventive cardiology?",
                    es: "¿Quién debe considerar cardiología preventiva?",
                },
                answer: {
                    en: "Patients with high blood pressure, cholesterol, diabetes, family history, smoking history, or other cardiovascular risk factors may benefit from preventive evaluation.",
                    es: "Pacientes con presión alta, colesterol, diabetes, antecedentes familiares, historial de fumar u otros factores de riesgo pueden beneficiarse de una evaluación preventiva.",
                },
            },
            {
                question: {
                    en: "Is preventive cardiology only for older adults?",
                    es: "¿La cardiología preventiva es solo para adultos mayores?",
                },
                answer: {
                    en: "No. Prevention can be helpful at different ages, especially when risk factors or family history are present.",
                    es: "No. La prevención puede ser útil a diferentes edades, especialmente cuando existen factores de riesgo o antecedentes familiares.",
                },
            },
        ],
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
            es: " /es/services/cardiologia-preventiva/",
        },
        seo: {
            title: {
                en: "Preventive Cardiology in Hialeah, FL | Heart Risk Evaluation",
                es: "Cardiología Preventiva en Hialeah, FL | Evaluación de Riesgo Cardíaco",
            },
            description: {
                en: "Preventive cardiology in Hialeah focused on cardiovascular risk factors, blood pressure, cholesterol, family history, and long-term heart health.",
                es: "Cardiología preventiva en Hialeah enfocada en factores de riesgo cardiovascular, presión, colesterol, antecedentes familiares y salud cardíaca a largo plazo.",
            },
        },
        priority: 8,
    },
    {
        id: "arrhythmia-evaluation",
        slug: {
            en: "arrhythmia-evaluation",
            es: "evaluacion-arritmia",
        },
        icon: Arrythmia,
        title: {
            en: "Arrhythmia Evaluation",
            es: "Evaluación de Arritmia",
        },
        shortTitle: {
            en: "Arrhythmia",
            es: "Arritmia",
        },
        description: {
            en: "Cardiology evaluation for irregular heart rhythms, palpitations, or symptoms that may indicate arrhythmias.",
            es: "Evaluación cardiológica para ritmos cardíacos irregulares, palpitaciones o síntomas que pueden indicar arritmias.",
        },
        shortDescription: {
            en: "Evaluation for irregular heart rhythms and palpitations.",
            es: "Evaluación de ritmos cardíacos irregulares y palpitaciones.",
        },
        overview: {
            en: "Arrhythmias are irregular heart rhythms that may cause palpitations, skipped beats, racing heartbeat, dizziness, fatigue, or other symptoms. A cardiology evaluation can help determine whether additional testing or monitoring may be needed.",
            es: "Las arritmias son ritmos cardíacos irregulares que pueden causar palpitaciones, latidos saltados, corazón acelerado, mareos, fatiga u otros síntomas. Una evaluación cardiológica puede ayudar a determinar si se necesitan pruebas o monitoreo adicional.",
        },
        detailImages: [
            {
                src: "/images/services/arrhythmia-evaluation/palpitations-evaluation.webp",
                alt: {
                    en: "Palpitations evaluation with a cardiologist",
                    es: "Evaluación de palpitaciones con un cardiólogo",
                },
            },
            {
                src: "/images/services/arrhythmia-evaluation/irregular-heartbeat-review.webp",
                alt: {
                    en: "Irregular heartbeat review and rhythm evaluation",
                    es: "Revisión de latidos irregulares y evaluación del ritmo cardíaco",
                },
            },
            {
                src: "/images/services/arrhythmia-evaluation/heart-rhythm-monitoring.webp",
                alt: {
                    en: "Heart rhythm monitoring and arrhythmia evaluation",
                    es: "Monitoreo del ritmo cardíaco y evaluación de arritmia",
                },
            },
        ],
        reasonsToSeekCare: [
            {
                title: {
                    en: "Palpitations",
                    es: "Palpitaciones",
                },
                description: {
                    en: "Fluttering, racing, pounding, or skipped-beat sensations may need evaluation.",
                    es: "Sensaciones de aleteo, latidos rápidos, fuertes o saltados pueden necesitar evaluación.",
                },
            },
            {
                title: {
                    en: "Irregular heartbeat",
                    es: "Latidos irregulares",
                },
                description: {
                    en: "An irregular rhythm found on EKG or noticed by the patient may need cardiology follow-up.",
                    es: "Un ritmo irregular encontrado en EKG o notado por el paciente puede necesitar seguimiento cardiológico.",
                },
            },
            {
                title: {
                    en: "Associated symptoms",
                    es: "Síntomas asociados",
                },
                description: {
                    en: "Dizziness, shortness of breath, chest discomfort, or fainting with palpitations should be discussed promptly.",
                    es: "Mareos, falta de aire, molestia en el pecho o desmayo con palpitaciones deben hablarse prontamente.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Rhythm symptom review",
                    es: "Revisión de síntomas del ritmo",
                },
                description: {
                    en: "The doctor may ask how often symptoms happen, how long they last, and whether they occur with activity, stress, or rest.",
                    es: "El doctor puede preguntar con qué frecuencia ocurren los síntomas, cuánto duran y si aparecen con actividad, estrés o reposo.",
                },
            },
            {
                title: {
                    en: "EKG or monitoring discussion",
                    es: "Discusión de EKG o monitoreo",
                },
                description: {
                    en: "Depending on symptoms, EKG or additional rhythm monitoring may be discussed.",
                    es: "Dependiendo de los síntomas, se puede hablar sobre EKG o monitoreo adicional del ritmo.",
                },
            },
            {
                title: {
                    en: "Risk and next steps",
                    es: "Riesgo y próximos pasos",
                },
                description: {
                    en: "The evaluation may include discussion of triggers, risks, treatment options, and follow-up recommendations.",
                    es: "La evaluación puede incluir conversación sobre desencadenantes, riesgos, opciones de tratamiento y seguimiento.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Are palpitations always dangerous?",
                    es: "¿Las palpitaciones siempre son peligrosas?",
                },
                answer: {
                    en: "Not always. Some palpitations are benign, but they should be evaluated when they are frequent, new, worsening, or associated with dizziness, chest discomfort, shortness of breath, or fainting.",
                    es: "No siempre. Algunas palpitaciones son benignas, pero deben evaluarse si son frecuentes, nuevas, empeoran o se asocian con mareos, molestia en el pecho, falta de aire o desmayo.",
                },
            },
            {
                question: {
                    en: "What tests may be used for arrhythmias?",
                    es: "¿Qué pruebas pueden usarse para arritmias?",
                },
                answer: {
                    en: "Depending on the case, evaluation may involve EKG, rhythm monitoring, cardiac testing, or review of prior results.",
                    es: "Dependiendo del caso, la evaluación puede incluir EKG, monitoreo del ritmo, pruebas cardíacas o revisión de resultados previos.",
                },
            },
        ],
        keywords: {
            en: [
                "arrhythmia cardiologist Miami",
                "irregular heartbeat doctor Hialeah",
                "palpitations evaluation Miami",
                "cardiologist for arrhythmia Miami-Dade",
            ],
            es: [
                "cardiólogo para arritmia Miami",
                "doctor para latidos irregulares Hialeah",
                "evaluación de palpitaciones Miami",
                "cardiólogo para arritmia Miami-Dade",
            ],
        },
        href: {
            en: "/services/arrhythmia-evaluation/",
            es: " /es/services/evaluacion-arritmia/",
        },
        seo: {
            title: {
                en: "Arrhythmia & Palpitations Evaluation in Hialeah, FL",
                es: "Evaluación de Arritmia y Palpitaciones en Hialeah, FL",
            },
            description: {
                en: "Cardiology evaluation in Hialeah for irregular heartbeat, palpitations, skipped beats, racing heart, and possible arrhythmia symptoms.",
                es: "Evaluación cardiológica en Hialeah para latidos irregulares, palpitaciones, latidos saltados, corazón acelerado y posibles síntomas de arritmia.",
            },
        },
        priority: 9,
    },
];

export const featuredCardiologyServices = cardiologyServices
    .filter((service) => service.featured)
    .sort((a, b) => a.priority - b.priority);

export const getCardiologyServiceBySlug = (
    slug: string,
    language: LanguageCode = "en"
) => {
    return cardiologyServices.find((service) => service.slug[language] === slug);
};

export const getCardiologyServiceHref = (
    service: CardiologyService,
    language: LanguageCode
) => {
    return service.href[language];
};

export const getRelatedCardiologyServices = (
    currentServiceId: string,
    limit = 3
) => {
    return cardiologyServices
        .filter((service) => service.id !== currentServiceId)
        .sort((a, b) => a.priority - b.priority)
        .slice(0, limit);
};

export const getCardiologyServiceStaticPaths = (language: LanguageCode) => {
    return cardiologyServices.map((service) => ({
        params: {
            slug: service.slug[language],
        },
        props: {
            service,
            language,
        },
    }));
};