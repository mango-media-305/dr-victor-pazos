// src/data/services/cardiologyServices.ts

import Arrythmia from "../../components/icons/Arrythmia.astro";
import CardiacTesting from "../../components/icons/CardiacTesting.astro";
import Cardiology from "../../components/icons/Cardiology.astro";
import HeartDisease from "../../components/icons/HeartDisease.astro";
import Hypertension from "../../components/icons/Hypertension.astro";
import InterventionalCardiology from "../../components/icons/InterventionalCardiology.astro";
import PreventiveCardiology from "../../components/icons/PreventiveCardiology.astro";

import type { LanguageCode } from "../site/siteConfig";

type ServiceIcon = typeof Cardiology;

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
    icon: ServiceIcon;
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

const imageSets = {
    consultation: [
        {
            src: "/images/services/general-cardiology/general-cardiology-visit.webp",
            alt: {
                en: "Cardiology consultation with a heart specialist",
                es: "Consulta de cardiología con especialista del corazón",
            },
        },
        {
            src: "/images/services/general-cardiology/cardiology-evaluation.webp",
            alt: {
                en: "Comprehensive cardiology evaluation",
                es: "Evaluación cardiológica integral",
            },
        },
        {
            src: "/images/services/general-cardiology/heart-care-planning.webp",
            alt: {
                en: "Heart care planning and cardiovascular review",
                es: "Planificación de cuidado cardíaco y revisión cardiovascular",
            },
        },
    ],
    testing: [
        {
            src: "/images/services/echocardiograms/ekg-testing.webp",
            alt: {
                en: "Cardiac diagnostic testing",
                es: "Pruebas diagnósticas cardíacas",
            },
        },
        {
            src: "/images/services/echocardiograms/cardiac-test-review.webp",
            alt: {
                en: "Review of cardiac test results",
                es: "Revisión de resultados de pruebas cardíacas",
            },
        },
        {
            src: "/images/services/echocardiograms/heart-rhythm-evaluation.webp",
            alt: {
                en: "Heart rhythm and cardiac testing evaluation",
                es: "Evaluación del ritmo cardíaco y pruebas cardíacas",
            },
        },
    ],
    vascular: [
        {
            src: "/images/services/cardiac-catheterization/advanced-heart-evaluation.webp",
            alt: {
                en: "Advanced cardiovascular and vascular evaluation",
                es: "Evaluación cardiovascular y vascular avanzada",
            },
        },
        {
            src: "/images/services/heart-disease-evaluation-treatment/cardiovascular-monitoring.webp",
            alt: {
                en: "Cardiovascular and vascular monitoring",
                es: "Monitoreo cardiovascular y vascular",
            },
        },
        {
            src: "/images/services/general-cardiology/cardiology-evaluation.webp",
            alt: {
                en: "Vascular health assessment",
                es: "Evaluación de salud vascular",
            },
        },
    ],
    prevention: [
        {
            src: "/images/services/preventive-cardiology/preventive-heart-care.webp",
            alt: {
                en: "Preventive heart care visit",
                es: "Visita de cuidado preventivo del corazón",
            },
        },
        {
            src: "/images/services/preventive-cardiology/heart-risk-assessment.webp",
            alt: {
                en: "Cardiovascular risk assessment",
                es: "Evaluación de riesgo cardiovascular",
            },
        },
        {
            src: "/images/services/preventive-cardiology/cardiology-prevention-plan.webp",
            alt: {
                en: "Heart disease prevention plan",
                es: "Plan de prevención de enfermedad cardíaca",
            },
        },
    ],
    hypertension: [
        {
            src: "/images/services/hypertension-management/blood-pressure-review.webp",
            alt: {
                en: "Blood pressure review during cardiology visit",
                es: "Revisión de presión arterial durante visita cardiológica",
            },
        },
        {
            src: "/images/services/hypertension-management/hypertension-care-plan.webp",
            alt: {
                en: "Hypertension care plan",
                es: "Plan de cuidado para hipertensión",
            },
        },
        {
            src: "/images/services/hypertension-management/heart-risk-management.webp",
            alt: {
                en: "Heart risk management for high blood pressure",
                es: "Manejo de riesgo cardíaco por presión alta",
            },
        },
    ],
    heartDisease: [
        {
            src: "/images/services/heart-disease-evaluation-treatment/heart-disease-follow-up.webp",
            alt: {
                en: "Heart disease follow-up visit",
                es: "Visita de seguimiento para enfermedad cardíaca",
            },
        },
        {
            src: "/images/services/heart-disease-evaluation-treatment/treatment-planning.webp",
            alt: {
                en: "Cardiology treatment planning",
                es: "Planificación de tratamiento cardiológico",
            },
        },
        {
            src: "/images/services/heart-disease-evaluation-treatment/cardiovascular-monitoring.webp",
            alt: {
                en: "Ongoing cardiovascular monitoring",
                es: "Monitoreo cardiovascular continuo",
            },
        },
    ],
    rhythm: [
        {
            src: "/images/services/event-monitor/heart-rhythm-monitoring.webp",
            alt: {
                en: "Heart rhythm monitoring",
                es: "Monitoreo del ritmo cardíaco",
            },
        },
        {
            src: "/images/services/event-monitor/palpitations-evaluation.webp",
            alt: {
                en: "Palpitations and rhythm evaluation",
                es: "Evaluación de palpitaciones y ritmo cardíaco",
            },
        },
        {
            src: "/images/services/event-monitor/irregular-heartbeat-review.webp",
            alt: {
                en: "Irregular heartbeat review",
                es: "Revisión de latidos irregulares",
            },
        },
    ],
    interventional: [
        {
            src: "/images/services/cardiac-catheterization/interventional-cardiology-consultation.webp",
            alt: {
                en: "Interventional cardiology consultation",
                es: "Consulta de cardiología intervencionista",
            },
        },
        {
            src: "/images/services/cardiac-catheterization/advanced-heart-evaluation.webp",
            alt: {
                en: "Advanced heart evaluation",
                es: "Evaluación cardíaca avanzada",
            },
        },
        {
            src: "/images/services/cardiac-catheterization/cardiovascular-specialist.webp",
            alt: {
                en: "Cardiovascular specialist reviewing care plan",
                es: "Especialista cardiovascular revisando plan de cuidado",
            },
        },
    ],
        echocardiograms: [
        {
            src: "/images/services/echocardiograms/echocardiogram-testing.webp",
            alt: {
                en: "Echocardiogram ultrasound testing",
                es: "Prueba de ecocardiograma por ultrasonido",
            },
        },
        {
            src: "/images/services/echocardiograms/heart-ultrasound-review.webp",
            alt: {
                en: "Heart ultrasound review",
                es: "Revisión de ultrasonido del corazón",
            },
        },
        {
            src: "/images/services/echocardiograms/cardiac-valve-evaluation.webp",
            alt: {
                en: "Cardiac valve and heart function evaluation",
                es: "Evaluación de válvulas cardíacas y función del corazón",
            },
        },
    ],

    nuclearStressTesting: [
        {
            src: "/images/services/nuclear-stress-testing/nuclear-stress-test.webp",
            alt: {
                en: "Nuclear stress testing for heart blood flow evaluation",
                es: "Prueba de esfuerzo nuclear para evaluar flujo sanguíneo al corazón",
            },
        },
        {
            src: "/images/services/nuclear-stress-testing/cardiac-stress-imaging.webp",
            alt: {
                en: "Cardiac stress imaging",
                es: "Imágenes cardíacas de esfuerzo",
            },
        },
        {
            src: "/images/services/nuclear-stress-testing/stress-test-results-review.webp",
            alt: {
                en: "Nuclear stress test results review",
                es: "Revisión de resultados de prueba de esfuerzo nuclear",
            },
        },
    ],

    carotidUltrasound: [
        {
            src: "/images/services/carotid-ultrasound-studies/carotid-ultrasound.webp",
            alt: {
                en: "Carotid ultrasound study",
                es: "Estudio de ultrasonido de carótidas",
            },
        },
        {
            src: "/images/services/carotid-ultrasound-studies/neck-artery-ultrasound.webp",
            alt: {
                en: "Neck artery ultrasound evaluation",
                es: "Evaluación de arterias del cuello por ultrasonido",
            },
        },
        {
            src: "/images/services/carotid-ultrasound-studies/carotid-blood-flow-review.webp",
            alt: {
                en: "Carotid blood flow review",
                es: "Revisión del flujo sanguíneo carotídeo",
            },
        },
    ],

    abdominalAorticUltrasound: [
        {
            src: "/images/services/abdominal-aortic-ultrasound-screening/abdominal-aortic-ultrasound.webp",
            alt: {
                en: "Abdominal aortic ultrasound screening",
                es: "Ultrasonido de aorta abdominal",
            },
        },
        {
            src: "/images/services/abdominal-aortic-ultrasound-screening/aorta-screening.webp",
            alt: {
                en: "Aorta screening ultrasound",
                es: "Evaluación de aorta por ultrasonido",
            },
        },
        {
            src: "/images/services/abdominal-aortic-ultrasound-screening/vascular-screening-review.webp",
            alt: {
                en: "Vascular screening review",
                es: "Revisión de evaluación vascular",
            },
        },
    ],

    lowerExtremityArterial: [
        {
            src: "/images/services/lower-extremity-arterial-studies/lower-extremity-arterial-study.webp",
            alt: {
                en: "Lower extremity arterial study",
                es: "Estudio arterial de extremidades inferiores",
            },
        },
        {
            src: "/images/services/lower-extremity-arterial-studies/leg-artery-circulation-test.webp",
            alt: {
                en: "Leg artery circulation testing",
                es: "Prueba de circulación arterial en las piernas",
            },
        },
        {
            src: "/images/services/lower-extremity-arterial-studies/peripheral-vascular-assessment.webp",
            alt: {
                en: "Peripheral vascular assessment",
                es: "Evaluación vascular periférica",
            },
        },
    ],

    lowerExtremityVenous: [
        {
            src: "/images/services/lower-extremity-venous-studies/lower-extremity-venous-study.webp",
            alt: {
                en: "Lower extremity venous study",
                es: "Estudio venoso de extremidades inferiores",
            },
        },
        {
            src: "/images/services/lower-extremity-venous-studies/leg-vein-ultrasound.webp",
            alt: {
                en: "Leg vein ultrasound",
                es: "Ultrasonido de venas de las piernas",
            },
        },
        {
            src: "/images/services/lower-extremity-venous-studies/leg-swelling-vascular-evaluation.webp",
            alt: {
                en: "Leg swelling vascular evaluation",
                es: "Evaluación vascular por hinchazón en las piernas",
            },
        },
    ],

    cardiovascularRiskAssessment: [
        {
            src: "/images/services/cardiovascular-risk-assessment/heart-risk-assessment.webp",
            alt: {
                en: "Cardiovascular risk assessment",
                es: "Evaluación de riesgo cardiovascular",
            },
        },
        {
            src: "/images/services/cardiovascular-risk-assessment/prevention-consultation.webp",
            alt: {
                en: "Heart disease prevention consultation",
                es: "Consulta de prevención de enfermedad cardíaca",
            },
        },
        {
            src: "/images/services/cardiovascular-risk-assessment/risk-factor-review.webp",
            alt: {
                en: "Cardiovascular risk factor review",
                es: "Revisión de factores de riesgo cardiovascular",
            },
        },
    ],

    pacemakerAicd: [
        {
            src: "/images/services/pacemaker-aicd-interrogation/pacemaker-check.webp",
            alt: {
                en: "Pacemaker device check",
                es: "Chequeo de marcapasos",
            },
        },
        {
            src: "/images/services/pacemaker-aicd-interrogation/aicd-interrogation.webp",
            alt: {
                en: "AICD interrogation",
                es: "Interrogación de AICD",
            },
        },
        {
            src: "/images/services/pacemaker-aicd-interrogation/cardiac-device-review.webp",
            alt: {
                en: "Cardiac device data review",
                es: "Revisión de datos de dispositivo cardíaco",
            },
        },
    ],

    cardiacCatheterization: [
        {
            src: "/images/services/cardiac-catheterization/cardiac-catheterization-consultation.webp",
            alt: {
                en: "Cardiac catheterization consultation",
                es: "Consulta para cateterismo cardíaco",
            },
        },
        {
            src: "/images/services/cardiac-catheterization/advanced-heart-evaluation.webp",
            alt: {
                en: "Advanced heart evaluation",
                es: "Evaluación cardíaca avanzada",
            },
        },
        {
            src: "/images/services/cardiac-catheterization/cardiovascular-specialist.webp",
            alt: {
                en: "Cardiovascular specialist reviewing care plan",
                es: "Especialista cardiovascular revisando plan de cuidado",
            },
        },
    ],

    transesophagealEchocardiogram: [
        {
            src: "/images/services/transesophageal-echocardiogram/transesophageal-echocardiogram.webp",
            alt: {
                en: "Transesophageal echocardiogram procedure coordination",
                es: "Coordinación de ecocardiograma transesofágico",
            },
        },
        {
            src: "/images/services/transesophageal-echocardiogram/advanced-echocardiogram-review.webp",
            alt: {
                en: "Advanced echocardiogram review",
                es: "Revisión de ecocardiograma avanzado",
            },
        },
        {
            src: "/images/services/transesophageal-echocardiogram/tee-cardiac-imaging.webp",
            alt: {
                en: "TEE cardiac imaging",
                es: "Imágenes cardíacas TEE",
            },
        },
    ],
};

const appointmentFaq = {
    question: {
        en: "How do I know if this service is right for me?",
        es: "¿Cómo sé si este servicio es adecuado para mí?",
    },
    answer: {
        en: "The best next step is to call the office and schedule a cardiology evaluation. The care team can help determine whether this service may be appropriate based on your symptoms, history, and prior test results.",
        es: "El mejor próximo paso es llamar a la oficina y programar una evaluación cardiológica. El equipo puede ayudar a determinar si este servicio puede ser apropiado según sus síntomas, historial y resultados previos.",
    },
};

export const cardiologyServices: CardiologyService[] = [
    {
        id: "comprehensive-cardiology-consultations",
        slug: {
            en: "comprehensive-cardiology-consultations",
            es: "consultas-cardiologia-integral",
        },
        icon: Cardiology,
        title: {
            en: "Comprehensive Cardiology Consultations",
            es: "Consultas de Cardiología Integral",
        },
        shortTitle: {
            en: "Cardiology Consultations",
            es: "Consultas de Cardiología",
        },
        description: {
            en: "Comprehensive cardiology evaluations for symptoms, risk factors, abnormal results, prevention, and ongoing heart or vascular conditions.",
            es: "Evaluaciones cardiológicas integrales para síntomas, factores de riesgo, resultados anormales, prevención y condiciones cardíacas o vasculares existentes.",
        },
        shortDescription: {
            en: "Personalized heart and vascular evaluations.",
            es: "Evaluaciones personalizadas del corazón y sistema vascular.",
        },
        overview: {
            en: "A comprehensive cardiology consultation helps patients understand symptoms, review risk factors, evaluate prior test results, and plan appropriate next steps for heart and vascular health.",
            es: "Una consulta de cardiología integral ayuda a los pacientes a entender síntomas, revisar factores de riesgo, evaluar resultados previos y planificar próximos pasos para la salud cardíaca y vascular.",
        },
        detailImages: imageSets.consultation,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Heart-related symptoms",
                    es: "Síntomas relacionados con el corazón",
                },
                description: {
                    en: "Chest discomfort, shortness of breath, palpitations, dizziness, fatigue with activity, or abnormal cardiac results may require evaluation.",
                    es: "Molestia en el pecho, falta de aire, palpitaciones, mareos, fatiga con actividad o resultados cardíacos anormales pueden requerir evaluación.",
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
                    en: "Known heart or vascular disease",
                    es: "Enfermedad cardíaca o vascular conocida",
                },
                description: {
                    en: "Patients with existing cardiovascular conditions may need monitoring, medication review, diagnostic testing, or follow-up care.",
                    es: "Pacientes con condiciones cardiovasculares existentes pueden necesitar monitoreo, revisión de medicamentos, pruebas diagnósticas o seguimiento.",
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
                    en: "The visit may include a review of symptoms, medications, medical history, family history, and previous test results.",
                    es: "La visita puede incluir revisión de síntomas, medicamentos, historial médico, antecedentes familiares y resultados previos.",
                },
            },
            {
                title: {
                    en: "Cardiovascular assessment",
                    es: "Evaluación cardiovascular",
                },
                description: {
                    en: "The care team may discuss possible causes, risk factors, and whether diagnostic testing or follow-up care is recommended.",
                    es: "El equipo puede hablar sobre posibles causas, factores de riesgo y si se recomiendan pruebas diagnósticas o seguimiento.",
                },
            },
            {
                title: {
                    en: "Clear next steps",
                    es: "Próximos pasos claros",
                },
                description: {
                    en: "Patients receive guidance on testing, treatment planning, prevention, or ongoing management when appropriate.",
                    es: "Los pacientes reciben orientación sobre pruebas, planificación de tratamiento, prevención o manejo continuo cuando corresponde.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "What does a cardiology consultation include?",
                    es: "¿Qué incluye una consulta de cardiología?",
                },
                answer: {
                    en: "A consultation may include a review of symptoms, medical history, medications, risk factors, prior results, and recommendations for testing or treatment.",
                    es: "Una consulta puede incluir revisión de síntomas, historial médico, medicamentos, factores de riesgo, resultados previos y recomendaciones para pruebas o tratamiento.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "cardiologist in Hialeah",
                "cardiology consultation Hialeah",
                "heart doctor Miami-Dade",
                "cardiovascular evaluation Miami",
            ],
            es: [
                "cardiólogo en Hialeah",
                "consulta de cardiología Hialeah",
                "doctor del corazón Miami-Dade",
                "evaluación cardiovascular Miami",
            ],
        },
        href: {
            en: "/services/comprehensive-cardiology-consultations/",
            es: "/es/services/consultas-cardiologia-integral/",
        },
        seo: {
            title: {
                en: "Cardiology Consultation in Hialeah, FL | Victor Pazos, MD",
                es: "Consulta de Cardiología en Hialeah, FL | Victor Pazos, MD",
            },
            description: {
                en: "Comprehensive cardiology consultations in Hialeah for heart symptoms, risk factors, abnormal results, prevention, and ongoing cardiovascular care.",
                es: "Consultas de cardiología integral en Hialeah para síntomas cardíacos, factores de riesgo, resultados anormales, prevención y cuidado cardiovascular continuo.",
            },
        },
        featured: true,
        priority: 1,
    },
    {
        id: "echocardiograms",
        slug: {
            en: "echocardiograms",
            es: "ecocardiogramas",
        },
        icon: CardiacTesting,
        title: {
            en: "Echocardiograms",
            es: "Ecocardiogramas",
        },
        shortTitle: {
            en: "Echocardiograms",
            es: "Ecocardiogramas",
        },
        description: {
            en: "Non-invasive ultrasound testing used to evaluate heart structure, pumping function, valves, and other important cardiac findings.",
            es: "Prueba de ultrasonido no invasiva utilizada para evaluar la estructura del corazón, función de bombeo, válvulas y otros hallazgos cardíacos importantes.",
        },
        shortDescription: {
            en: "Heart ultrasound testing for structure and function.",
            es: "Ultrasonido cardíaco para estructura y función.",
        },
        overview: {
            en: "An echocardiogram uses ultrasound imaging to help evaluate how the heart is working. It may be recommended for symptoms, abnormal findings, heart murmurs, valve concerns, or ongoing cardiovascular monitoring.",
            es: "Un ecocardiograma utiliza imágenes por ultrasonido para ayudar a evaluar cómo funciona el corazón. Puede recomendarse por síntomas, hallazgos anormales, soplos cardíacos, problemas de válvulas o monitoreo cardiovascular.",
        },
        detailImages: imageSets.echocardiograms,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Symptoms or abnormal findings",
                    es: "Síntomas o hallazgos anormales",
                },
                description: {
                    en: "Shortness of breath, chest discomfort, swelling, fatigue, heart murmurs, or abnormal test results may lead to an echocardiogram recommendation.",
                    es: "Falta de aire, molestia en el pecho, hinchazón, fatiga, soplos cardíacos o resultados anormales pueden llevar a recomendar un ecocardiograma.",
                },
            },
            {
                title: {
                    en: "Valve and heart function review",
                    es: "Revisión de válvulas y función cardíaca",
                },
                description: {
                    en: "The test can help assess heart valves, chamber size, pumping function, and other structural concerns.",
                    es: "La prueba puede ayudar a evaluar válvulas cardíacas, tamaño de cavidades, función de bombeo y otros aspectos estructurales.",
                },
            },
            {
                title: {
                    en: "Ongoing monitoring",
                    es: "Monitoreo continuo",
                },
                description: {
                    en: "Patients with known heart conditions may need echocardiograms to monitor changes over time.",
                    es: "Pacientes con condiciones cardíacas conocidas pueden necesitar ecocardiogramas para monitorear cambios con el tiempo.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Ultrasound-based imaging",
                    es: "Imágenes por ultrasonido",
                },
                description: {
                    en: "A technologist uses ultrasound to capture images of the heart from the chest area.",
                    es: "Un tecnólogo utiliza ultrasonido para capturar imágenes del corazón desde el área del pecho.",
                },
            },
            {
                title: {
                    en: "Non-invasive test",
                    es: "Prueba no invasiva",
                },
                description: {
                    en: "The test does not involve surgery and is commonly performed in an outpatient setting.",
                    es: "La prueba no involucra cirugía y comúnmente se realiza en un entorno ambulatorio.",
                },
            },
            {
                title: {
                    en: "Provider review",
                    es: "Revisión por el proveedor",
                },
                description: {
                    en: "Results are reviewed to help guide diagnosis, monitoring, or treatment planning.",
                    es: "Los resultados se revisan para ayudar a guiar el diagnóstico, monitoreo o planificación de tratamiento.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Is an echocardiogram the same as an EKG?",
                    es: "¿Un ecocardiograma es lo mismo que un EKG?",
                },
                answer: {
                    en: "No. An EKG records the heart’s electrical activity, while an echocardiogram uses ultrasound images to evaluate heart structure and function.",
                    es: "No. Un EKG registra la actividad eléctrica del corazón, mientras que un ecocardiograma usa imágenes de ultrasonido para evaluar estructura y función cardíaca.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "echocardiogram Hialeah",
                "heart ultrasound Miami",
                "echocardiogram Miami-Dade",
            ],
            es: [
                "ecocardiograma Hialeah",
                "ultrasonido del corazón Miami",
                "ecocardiograma Miami-Dade",
            ],
        },
        href: {
            en: "/services/echocardiograms/",
            es: "/es/services/ecocardiogramas/",
        },
        seo: {
            title: {
                en: "Echocardiogram in Hialeah, FL | Heart Ultrasound",
                es: "Ecocardiograma en Hialeah, FL | Ultrasonido del Corazón",
            },
            description: {
                en: "Echocardiogram testing in Hialeah to evaluate heart structure, valves, pumping function, and cardiovascular health.",
                es: "Prueba de ecocardiograma en Hialeah para evaluar estructura del corazón, válvulas, función de bombeo y salud cardiovascular.",
            },
        },
        featured: true,
        priority: 2,
    },
    {
        id: "nuclear-stress-testing",
        slug: {
            en: "nuclear-stress-testing",
            es: "prueba-esfuerzo-nuclear",
        },
        icon: CardiacTesting,
        title: {
            en: "Nuclear Stress Testing",
            es: "Prueba de Esfuerzo Nuclear",
        },
        shortTitle: {
            en: "Nuclear Stress Testing",
            es: "Prueba Nuclear",
        },
        description: {
            en: "Advanced cardiac testing that helps evaluate blood flow to the heart muscle during stress and rest.",
            es: "Prueba cardíaca avanzada que ayuda a evaluar el flujo de sangre al músculo cardíaco durante esfuerzo y reposo.",
        },
        shortDescription: {
            en: "Testing to assess blood flow to the heart.",
            es: "Prueba para evaluar flujo sanguíneo al corazón.",
        },
        overview: {
            en: "Nuclear stress testing may be used to evaluate how well blood flows to the heart muscle. It can help assess symptoms, possible coronary artery disease, and treatment planning when clinically appropriate.",
            es: "La prueba de esfuerzo nuclear puede utilizarse para evaluar qué tan bien fluye la sangre al músculo cardíaco. Puede ayudar a evaluar síntomas, posible enfermedad coronaria y planificación de tratamiento cuando corresponde.",
        },
        detailImages: imageSets.nuclearStressTesting,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Chest discomfort or shortness of breath",
                    es: "Molestia en el pecho o falta de aire",
                },
                description: {
                    en: "Symptoms with activity may lead a cardiologist to recommend stress testing.",
                    es: "Síntomas con actividad pueden llevar al cardiólogo a recomendar una prueba de esfuerzo.",
                },
            },
            {
                title: {
                    en: "Coronary artery disease evaluation",
                    es: "Evaluación de enfermedad coronaria",
                },
                description: {
                    en: "The test may help evaluate blood flow concerns related to the coronary arteries.",
                    es: "La prueba puede ayudar a evaluar problemas de flujo sanguíneo relacionados con las arterias coronarias.",
                },
            },
            {
                title: {
                    en: "Treatment planning",
                    es: "Planificación de tratamiento",
                },
                description: {
                    en: "Results may help guide follow-up care, medication management, or additional testing.",
                    es: "Los resultados pueden ayudar a guiar seguimiento, manejo de medicamentos o pruebas adicionales.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Stress and rest comparison",
                    es: "Comparación entre esfuerzo y reposo",
                },
                description: {
                    en: "The test compares heart blood flow during stress and rest.",
                    es: "La prueba compara el flujo de sangre al corazón durante esfuerzo y reposo.",
                },
            },
            {
                title: {
                    en: "Detailed cardiac imaging",
                    es: "Imágenes cardíacas detalladas",
                },
                description: {
                    en: "Specialized imaging helps the care team evaluate blood flow patterns.",
                    es: "Imágenes especializadas ayudan al equipo a evaluar patrones de flujo sanguíneo.",
                },
            },
            {
                title: {
                    en: "Follow-up guidance",
                    es: "Orientación de seguimiento",
                },
                description: {
                    en: "The provider reviews results and discusses recommended next steps.",
                    es: "El proveedor revisa los resultados y conversa sobre próximos pasos recomendados.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Why would a cardiologist order a nuclear stress test?",
                    es: "¿Por qué un cardiólogo ordenaría una prueba nuclear?",
                },
                answer: {
                    en: "It may be ordered to evaluate symptoms, assess blood flow to the heart, or help determine whether additional testing or treatment is needed.",
                    es: "Puede ordenarse para evaluar síntomas, analizar el flujo sanguíneo al corazón o ayudar a determinar si se necesitan pruebas o tratamientos adicionales.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "nuclear stress test Hialeah",
                "cardiac stress test Miami",
                "heart stress testing Miami-Dade",
            ],
            es: [
                "prueba de esfuerzo nuclear Hialeah",
                "prueba cardíaca de esfuerzo Miami",
                "prueba de esfuerzo del corazón Miami-Dade",
            ],
        },
        href: {
            en: "/services/nuclear-stress-testing/",
            es: "/es/services/prueba-esfuerzo-nuclear/",
        },
        seo: {
            title: {
                en: "Nuclear Stress Testing in Hialeah, FL",
                es: "Prueba de Esfuerzo Nuclear en Hialeah, FL",
            },
            description: {
                en: "Nuclear stress testing in Hialeah to help evaluate blood flow to the heart and possible coronary artery disease.",
                es: "Prueba de esfuerzo nuclear en Hialeah para ayudar a evaluar flujo sanguíneo al corazón y posible enfermedad coronaria.",
            },
        },
        featured: true,
        priority: 3,
    },
    {
        id: "carotid-ultrasound-studies",
        slug: {
            en: "carotid-ultrasound-studies",
            es: "ultrasonido-carotidas",
        },
        icon: CardiacTesting,
        title: {
            en: "Carotid Ultrasound Studies",
            es: "Ultrasonido de Carótidas",
        },
        shortTitle: {
            en: "Carotid Ultrasound",
            es: "Ultrasonido Carotídeo",
        },
        description: {
            en: "Ultrasound testing used to evaluate the carotid arteries in the neck and assess circulation-related concerns.",
            es: "Prueba de ultrasonido utilizada para evaluar las arterias carótidas del cuello y revisar preocupaciones relacionadas con la circulación.",
        },
        shortDescription: {
            en: "Neck artery ultrasound for circulation assessment.",
            es: "Ultrasonido de arterias del cuello para evaluar circulación.",
        },
        overview: {
            en: "Carotid ultrasound studies use imaging to assess blood flow through the carotid arteries. This can help evaluate vascular risk and guide prevention or treatment planning.",
            es: "Los estudios de ultrasonido carotídeo utilizan imágenes para evaluar el flujo de sangre en las arterias carótidas. Esto puede ayudar a evaluar riesgo vascular y guiar prevención o tratamiento.",
        },
        detailImages: imageSets.carotidUltrasound,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Vascular risk assessment",
                    es: "Evaluación de riesgo vascular",
                },
                description: {
                    en: "Patients with cardiovascular risk factors may need carotid evaluation as part of vascular care.",
                    es: "Pacientes con factores de riesgo cardiovascular pueden necesitar evaluación carotídea como parte del cuidado vascular.",
                },
            },
            {
                title: {
                    en: "Circulation concerns",
                    es: "Preocupaciones de circulación",
                },
                description: {
                    en: "The test helps assess blood flow in the neck arteries that supply the brain.",
                    es: "La prueba ayuda a evaluar el flujo de sangre en las arterias del cuello que suministran sangre al cerebro.",
                },
            },
            {
                title: {
                    en: "Preventive planning",
                    es: "Planificación preventiva",
                },
                description: {
                    en: "Results may help guide preventive care and cardiovascular risk management.",
                    es: "Los resultados pueden ayudar a guiar cuidado preventivo y manejo del riesgo cardiovascular.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Non-invasive ultrasound",
                    es: "Ultrasonido no invasivo",
                },
                description: {
                    en: "A technologist uses ultrasound imaging to evaluate the carotid arteries.",
                    es: "Un tecnólogo usa imágenes por ultrasonido para evaluar las arterias carótidas.",
                },
            },
            {
                title: {
                    en: "Blood flow assessment",
                    es: "Evaluación del flujo sanguíneo",
                },
                description: {
                    en: "The study helps assess circulation and possible narrowing in the arteries.",
                    es: "El estudio ayuda a evaluar circulación y posible estrechamiento en las arterias.",
                },
            },
            {
                title: {
                    en: "Result-based recommendations",
                    es: "Recomendaciones basadas en resultados",
                },
                description: {
                    en: "The provider reviews results and recommends appropriate follow-up when needed.",
                    es: "El proveedor revisa resultados y recomienda seguimiento apropiado cuando sea necesario.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "What does a carotid ultrasound evaluate?",
                    es: "¿Qué evalúa un ultrasonido carotídeo?",
                },
                answer: {
                    en: "It evaluates the carotid arteries in the neck and helps assess blood flow or possible narrowing.",
                    es: "Evalúa las arterias carótidas del cuello y ayuda a revisar flujo sanguíneo o posible estrechamiento.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "carotid ultrasound Hialeah",
                "carotid artery test Miami",
                "vascular ultrasound Miami-Dade",
            ],
            es: [
                "ultrasonido carotídeo Hialeah",
                "prueba de carótidas Miami",
                "ultrasonido vascular Miami-Dade",
            ],
        },
        href: {
            en: "/services/carotid-ultrasound-studies/",
            es: "/es/services/ultrasonido-carotidas/",
        },
        seo: {
            title: {
                en: "Carotid Ultrasound in Hialeah, FL",
                es: "Ultrasonido de Carótidas en Hialeah, FL",
            },
            description: {
                en: "Carotid ultrasound studies in Hialeah to help evaluate neck artery blood flow and vascular risk.",
                es: "Ultrasonido de carótidas en Hialeah para ayudar a evaluar flujo sanguíneo en arterias del cuello y riesgo vascular.",
            },
        },
        featured: true,
        priority: 4,
    },
    {
        id: "abdominal-aortic-ultrasound-screening",
        slug: {
            en: "abdominal-aortic-ultrasound-screening",
            es: "ultrasonido-aorta-abdominal",
        },
        icon: CardiacTesting,
        title: {
            en: "Abdominal Aortic Ultrasound Screening",
            es: "Ultrasonido de Aorta Abdominal",
        },
        shortTitle: {
            en: "Abdominal Aortic Ultrasound",
            es: "Ultrasonido de Aorta",
        },
        description: {
            en: "Ultrasound screening used to evaluate the abdominal aorta and support vascular risk assessment.",
            es: "Estudio de ultrasonido utilizado para evaluar la aorta abdominal y apoyar la evaluación de riesgo vascular.",
        },
        shortDescription: {
            en: "Aortic ultrasound screening for vascular health.",
            es: "Ultrasonido de aorta para salud vascular.",
        },
        overview: {
            en: "Abdominal aortic ultrasound screening helps evaluate the abdominal aorta using non-invasive imaging. It may be recommended based on risk factors, history, or provider evaluation.",
            es: "El ultrasonido de aorta abdominal ayuda a evaluar la aorta abdominal usando imágenes no invasivas. Puede recomendarse según factores de riesgo, historial o evaluación médica.",
        },
        detailImages: imageSets.abdominalAorticUltrasound,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Vascular screening",
                    es: "Evaluación vascular",
                },
                description: {
                    en: "The test may be used as part of vascular screening for patients with certain risk factors.",
                    es: "La prueba puede utilizarse como parte de la evaluación vascular en pacientes con ciertos factores de riesgo.",
                },
            },
            {
                title: {
                    en: "Aortic assessment",
                    es: "Evaluación de la aorta",
                },
                description: {
                    en: "Ultrasound imaging helps assess the size and appearance of the abdominal aorta.",
                    es: "Las imágenes por ultrasonido ayudan a evaluar el tamaño y apariencia de la aorta abdominal.",
                },
            },
            {
                title: {
                    en: "Preventive care planning",
                    es: "Planificación de cuidado preventivo",
                },
                description: {
                    en: "Results can help guide prevention and follow-up recommendations.",
                    es: "Los resultados pueden ayudar a guiar recomendaciones de prevención y seguimiento.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Non-invasive imaging",
                    es: "Imágenes no invasivas",
                },
                description: {
                    en: "A technologist uses ultrasound imaging over the abdomen.",
                    es: "Un tecnólogo utiliza imágenes por ultrasonido sobre el abdomen.",
                },
            },
            {
                title: {
                    en: "Focused vascular review",
                    es: "Revisión vascular enfocada",
                },
                description: {
                    en: "The study focuses on evaluating the abdominal aorta.",
                    es: "El estudio se enfoca en evaluar la aorta abdominal.",
                },
            },
            {
                title: {
                    en: "Provider follow-up",
                    es: "Seguimiento con el proveedor",
                },
                description: {
                    en: "The provider reviews results and recommends next steps if needed.",
                    es: "El proveedor revisa resultados y recomienda próximos pasos si es necesario.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Is abdominal aortic ultrasound invasive?",
                    es: "¿El ultrasonido de aorta abdominal es invasivo?",
                },
                answer: {
                    en: "No. It is a non-invasive ultrasound study used to evaluate the abdominal aorta.",
                    es: "No. Es un estudio de ultrasonido no invasivo utilizado para evaluar la aorta abdominal.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "abdominal aortic ultrasound Hialeah",
                "aorta screening Miami",
                "vascular screening Hialeah",
            ],
            es: [
                "ultrasonido de aorta abdominal Hialeah",
                "evaluación de aorta Miami",
                "screening vascular Hialeah",
            ],
        },
        href: {
            en: "/services/abdominal-aortic-ultrasound-screening/",
            es: "/es/services/ultrasonido-aorta-abdominal/",
        },
        seo: {
            title: {
                en: "Abdominal Aortic Ultrasound Screening in Hialeah, FL",
                es: "Ultrasonido de Aorta Abdominal en Hialeah, FL",
            },
            description: {
                en: "Abdominal aortic ultrasound screening in Hialeah for vascular assessment and preventive cardiovascular care.",
                es: "Ultrasonido de aorta abdominal en Hialeah para evaluación vascular y cuidado cardiovascular preventivo.",
            },
        },
        priority: 5,
    },
    {
        id: "lower-extremity-arterial-studies",
        slug: {
            en: "lower-extremity-arterial-studies",
            es: "estudios-arteriales-extremidades-inferiores",
        },
        icon: HeartDisease,
        title: {
            en: "Lower Extremity Arterial Studies",
            es: "Estudios Arteriales de Extremidades Inferiores",
        },
        shortTitle: {
            en: "Lower Extremity Arterial Studies",
            es: "Estudios Arteriales",
        },
        description: {
            en: "Vascular studies used to evaluate arterial circulation in the legs and support assessment of peripheral vascular disease.",
            es: "Estudios vasculares utilizados para evaluar la circulación arterial en las piernas y apoyar la evaluación de enfermedad vascular periférica.",
        },
        shortDescription: {
            en: "Leg artery studies for circulation concerns.",
            es: "Estudios de arterias de las piernas para problemas de circulación.",
        },
        overview: {
            en: "Lower extremity arterial studies help evaluate blood flow in the leg arteries. They may be used when patients have leg pain with walking, circulation concerns, or risk factors for peripheral vascular disease.",
            es: "Los estudios arteriales de extremidades inferiores ayudan a evaluar el flujo de sangre en las arterias de las piernas. Pueden usarse cuando hay dolor en las piernas al caminar, problemas de circulación o factores de riesgo de enfermedad vascular periférica.",
        },
        detailImages: imageSets.lowerExtremityArterial,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Leg pain with walking",
                    es: "Dolor en las piernas al caminar",
                },
                description: {
                    en: "Pain, cramping, or fatigue in the legs during walking may be related to circulation problems.",
                    es: "Dolor, calambres o fatiga en las piernas al caminar pueden estar relacionados con problemas de circulación.",
                },
            },
            {
                title: {
                    en: "Peripheral vascular disease risk",
                    es: "Riesgo de enfermedad vascular periférica",
                },
                description: {
                    en: "Diabetes, smoking history, high blood pressure, and cholesterol can increase vascular risk.",
                    es: "Diabetes, historial de fumar, presión alta y colesterol pueden aumentar el riesgo vascular.",
                },
            },
            {
                title: {
                    en: "Circulation assessment",
                    es: "Evaluación de circulación",
                },
                description: {
                    en: "The study helps assess blood flow to the lower extremities.",
                    es: "El estudio ayuda a evaluar el flujo de sangre hacia las extremidades inferiores.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Vascular testing",
                    es: "Prueba vascular",
                },
                description: {
                    en: "Testing focuses on blood flow through the arteries in the legs.",
                    es: "La prueba se enfoca en el flujo de sangre por las arterias de las piernas.",
                },
            },
            {
                title: {
                    en: "Non-surgical evaluation",
                    es: "Evaluación no quirúrgica",
                },
                description: {
                    en: "This is a diagnostic study used to support care planning.",
                    es: "Es un estudio diagnóstico utilizado para apoyar la planificación del cuidado.",
                },
            },
            {
                title: {
                    en: "Care recommendations",
                    es: "Recomendaciones de cuidado",
                },
                description: {
                    en: "Results may guide treatment, prevention, or additional evaluation.",
                    es: "Los resultados pueden guiar tratamiento, prevención o evaluación adicional.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Why would I need a leg arterial study?",
                    es: "¿Por qué necesitaría un estudio arterial de las piernas?",
                },
                answer: {
                    en: "It may be recommended to evaluate blood flow in the leg arteries, especially when there is leg pain with walking or vascular risk factors.",
                    es: "Puede recomendarse para evaluar el flujo de sangre en las arterias de las piernas, especialmente si hay dolor al caminar o factores de riesgo vascular.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "lower extremity arterial study Hialeah",
                "leg circulation test Miami",
                "peripheral vascular disease testing Hialeah",
            ],
            es: [
                "estudio arterial de piernas Hialeah",
                "prueba de circulación en piernas Miami",
                "prueba enfermedad vascular periférica Hialeah",
            ],
        },
        href: {
            en: "/services/lower-extremity-arterial-studies/",
            es: "/es/services/estudios-arteriales-extremidades-inferiores/",
        },
        seo: {
            title: {
                en: "Lower Extremity Arterial Studies in Hialeah, FL",
                es: "Estudios Arteriales de Piernas en Hialeah, FL",
            },
            description: {
                en: "Lower extremity arterial studies in Hialeah to evaluate leg circulation and possible peripheral vascular disease.",
                es: "Estudios arteriales de extremidades inferiores en Hialeah para evaluar circulación en las piernas y posible enfermedad vascular periférica.",
            },
        },
        featured: true,
        priority: 6,
    },
    {
        id: "lower-extremity-venous-studies",
        slug: {
            en: "lower-extremity-venous-studies",
            es: "estudios-venosos-extremidades-inferiores",
        },
        icon: HeartDisease,
        title: {
            en: "Lower Extremity Venous Studies",
            es: "Estudios Venosos de Extremidades Inferiores",
        },
        shortTitle: {
            en: "Lower Extremity Venous Studies",
            es: "Estudios Venosos",
        },
        description: {
            en: "Vascular studies used to evaluate venous circulation in the legs, including concerns related to swelling or vein function.",
            es: "Estudios vasculares utilizados para evaluar la circulación venosa en las piernas, incluyendo preocupaciones relacionadas con hinchazón o función venosa.",
        },
        shortDescription: {
            en: "Leg vein studies for swelling and circulation concerns.",
            es: "Estudios de venas de las piernas para hinchazón y circulación.",
        },
        overview: {
            en: "Lower extremity venous studies help evaluate blood flow through the leg veins. They may be used when patients have swelling, discomfort, or other circulation-related concerns.",
            es: "Los estudios venosos de extremidades inferiores ayudan a evaluar el flujo de sangre por las venas de las piernas. Pueden usarse cuando hay hinchazón, molestia u otras preocupaciones de circulación.",
        },
        detailImages: imageSets.lowerExtremityVenous,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Leg swelling",
                    es: "Hinchazón en las piernas",
                },
                description: {
                    en: "Swelling in the legs or ankles may require vascular evaluation.",
                    es: "La hinchazón en piernas o tobillos puede requerir evaluación vascular.",
                },
            },
            {
                title: {
                    en: "Vein circulation concerns",
                    es: "Preocupaciones de circulación venosa",
                },
                description: {
                    en: "Venous studies help evaluate how blood moves through the veins of the legs.",
                    es: "Los estudios venosos ayudan a evaluar cómo se mueve la sangre por las venas de las piernas.",
                },
            },
            {
                title: {
                    en: "Follow-up care",
                    es: "Cuidado de seguimiento",
                },
                description: {
                    en: "Results may help guide treatment planning or additional evaluation.",
                    es: "Los resultados pueden ayudar a guiar planificación de tratamiento o evaluación adicional.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Ultrasound-based vascular study",
                    es: "Estudio vascular por ultrasonido",
                },
                description: {
                    en: "A technologist uses ultrasound imaging to evaluate the veins in the legs.",
                    es: "Un tecnólogo utiliza imágenes por ultrasonido para evaluar las venas de las piernas.",
                },
            },
            {
                title: {
                    en: "Focused leg vein assessment",
                    es: "Evaluación enfocada de venas",
                },
                description: {
                    en: "The study focuses on venous blood flow and related findings.",
                    es: "El estudio se enfoca en el flujo sanguíneo venoso y hallazgos relacionados.",
                },
            },
            {
                title: {
                    en: "Provider review",
                    es: "Revisión médica",
                },
                description: {
                    en: "The provider reviews results and discusses appropriate next steps.",
                    es: "El proveedor revisa los resultados y conversa sobre próximos pasos apropiados.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "What symptoms may lead to a venous study?",
                    es: "¿Qué síntomas pueden llevar a un estudio venoso?",
                },
                answer: {
                    en: "Leg swelling, discomfort, heaviness, or circulation concerns may lead a provider to recommend a venous study.",
                    es: "Hinchazón, molestia, pesadez o preocupaciones de circulación en las piernas pueden llevar al proveedor a recomendar un estudio venoso.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "lower extremity venous study Hialeah",
                "leg vein ultrasound Miami",
                "leg swelling vascular test Hialeah",
            ],
            es: [
                "estudio venoso de piernas Hialeah",
                "ultrasonido de venas Miami",
                "prueba vascular para hinchazón de piernas Hialeah",
            ],
        },
        href: {
            en: "/services/lower-extremity-venous-studies/",
            es: "/es/services/estudios-venosos-extremidades-inferiores/",
        },
        seo: {
            title: {
                en: "Lower Extremity Venous Studies in Hialeah, FL",
                es: "Estudios Venosos de Piernas en Hialeah, FL",
            },
            description: {
                en: "Lower extremity venous studies in Hialeah to evaluate leg vein circulation, swelling, and vascular concerns.",
                es: "Estudios venosos de extremidades inferiores en Hialeah para evaluar circulación venosa, hinchazón y preocupaciones vasculares.",
            },
        },
        priority: 7,
    },
    {
        id: "cardiovascular-risk-assessment",
        slug: {
            en: "cardiovascular-risk-assessment",
            es: "evaluacion-riesgo-cardiovascular",
        },
        icon: PreventiveCardiology,
        title: {
            en: "Cardiovascular Risk Assessment",
            es: "Evaluación de Riesgo Cardiovascular",
        },
        shortTitle: {
            en: "Risk Assessment",
            es: "Evaluación de Riesgo",
        },
        description: {
            en: "Cardiology evaluation focused on identifying risk factors and planning steps to reduce the chance of future cardiovascular problems.",
            es: "Evaluación cardiológica enfocada en identificar factores de riesgo y planificar pasos para reducir la posibilidad de problemas cardiovasculares futuros.",
        },
        shortDescription: {
            en: "Review cardiovascular risk factors and prevention needs.",
            es: "Revisión de factores de riesgo y prevención cardiovascular.",
        },
        overview: {
            en: "Cardiovascular risk assessment helps patients understand factors that may affect long-term heart and vascular health, including blood pressure, cholesterol, diabetes, family history, and lifestyle factors.",
            es: "La evaluación de riesgo cardiovascular ayuda a los pacientes a entender factores que pueden afectar la salud cardíaca y vascular a largo plazo, incluyendo presión arterial, colesterol, diabetes, antecedentes familiares y estilo de vida.",
        },
        detailImages: imageSets.cardiovascularRiskAssessment,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Family history or risk factors",
                    es: "Antecedentes familiares o factores de riesgo",
                },
                description: {
                    en: "Family history, diabetes, high blood pressure, cholesterol, and smoking history can increase risk.",
                    es: "Antecedentes familiares, diabetes, presión alta, colesterol e historial de fumar pueden aumentar el riesgo.",
                },
            },
            {
                title: {
                    en: "Prevention planning",
                    es: "Planificación preventiva",
                },
                description: {
                    en: "Risk assessment helps guide preventive strategies and follow-up care.",
                    es: "La evaluación de riesgo ayuda a guiar estrategias preventivas y seguimiento.",
                },
            },
            {
                title: {
                    en: "Ongoing monitoring",
                    es: "Monitoreo continuo",
                },
                description: {
                    en: "Patients may need periodic review to monitor changes in cardiovascular risk.",
                    es: "Los pacientes pueden necesitar revisión periódica para monitorear cambios en el riesgo cardiovascular.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Risk factor review",
                    es: "Revisión de factores de riesgo",
                },
                description: {
                    en: "The visit may include review of medical history, lifestyle factors, medications, and previous test results.",
                    es: "La visita puede incluir revisión del historial médico, estilo de vida, medicamentos y resultados previos.",
                },
            },
            {
                title: {
                    en: "Testing discussion",
                    es: "Discusión de pruebas",
                },
                description: {
                    en: "The provider may discuss whether diagnostic testing or follow-up is appropriate.",
                    es: "El proveedor puede conversar si pruebas diagnósticas o seguimiento son apropiados.",
                },
            },
            {
                title: {
                    en: "Prevention guidance",
                    es: "Orientación preventiva",
                },
                description: {
                    en: "Patients receive recommendations to help manage risk and support heart health.",
                    es: "Los pacientes reciben recomendaciones para ayudar a manejar el riesgo y apoyar la salud del corazón.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Who should consider cardiovascular risk assessment?",
                    es: "¿Quién debe considerar una evaluación de riesgo cardiovascular?",
                },
                answer: {
                    en: "Patients with high blood pressure, cholesterol, diabetes, smoking history, family history, or prevention concerns may benefit from a risk assessment.",
                    es: "Pacientes con presión alta, colesterol, diabetes, historial de fumar, antecedentes familiares o preocupaciones de prevención pueden beneficiarse de una evaluación de riesgo.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "cardiovascular risk assessment Hialeah",
                "heart disease prevention Miami",
                "preventive cardiologist Hialeah",
            ],
            es: [
                "evaluación de riesgo cardiovascular Hialeah",
                "prevención enfermedad cardíaca Miami",
                "cardiólogo preventivo Hialeah",
            ],
        },
        href: {
            en: "/services/cardiovascular-risk-assessment/",
            es: "/es/services/evaluacion-riesgo-cardiovascular/",
        },
        seo: {
            title: {
                en: "Cardiovascular Risk Assessment in Hialeah, FL",
                es: "Evaluación de Riesgo Cardiovascular en Hialeah, FL",
            },
            description: {
                en: "Cardiovascular risk assessment in Hialeah for prevention, risk factor review, and heart health planning.",
                es: "Evaluación de riesgo cardiovascular en Hialeah para prevención, revisión de factores de riesgo y planificación de salud cardíaca.",
            },
        },
        priority: 8,
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
            en: "Preventive heart care focused on reducing risk, supporting early detection, and helping patients protect long-term cardiovascular health.",
            es: "Cuidado preventivo del corazón enfocado en reducir riesgos, apoyar la detección temprana y ayudar a los pacientes a proteger su salud cardiovascular a largo plazo.",
        },
        shortDescription: {
            en: "Prevention-focused care for long-term heart health.",
            es: "Cuidado preventivo para la salud cardíaca a largo plazo.",
        },
        overview: {
            en: "Preventive cardiology helps patients understand risk factors, make informed health decisions, and monitor cardiovascular health before serious problems develop.",
            es: "La cardiología preventiva ayuda a los pacientes a entender factores de riesgo, tomar decisiones informadas y monitorear la salud cardiovascular antes de que se desarrollen problemas serios.",
        },
        detailImages: imageSets.prevention,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Prevent future heart problems",
                    es: "Prevenir problemas cardíacos futuros",
                },
                description: {
                    en: "Prevention can help patients address risk factors before they become more serious.",
                    es: "La prevención puede ayudar a los pacientes a atender factores de riesgo antes de que se vuelvan más serios.",
                },
            },
            {
                title: {
                    en: "Lifestyle and medication review",
                    es: "Revisión de estilo de vida y medicamentos",
                },
                description: {
                    en: "The provider may discuss lifestyle, medications, and monitoring needs.",
                    es: "El proveedor puede conversar sobre estilo de vida, medicamentos y necesidades de monitoreo.",
                },
            },
            {
                title: {
                    en: "Early detection",
                    es: "Detección temprana",
                },
                description: {
                    en: "Testing and follow-up may help identify concerns earlier.",
                    es: "Las pruebas y el seguimiento pueden ayudar a identificar preocupaciones más temprano.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Personalized prevention plan",
                    es: "Plan preventivo personalizado",
                },
                description: {
                    en: "The visit may include recommendations based on your health history and risk factors.",
                    es: "La visita puede incluir recomendaciones basadas en su historial de salud y factores de riesgo.",
                },
            },
            {
                title: {
                    en: "Risk factor management",
                    es: "Manejo de factores de riesgo",
                },
                description: {
                    en: "Blood pressure, cholesterol, diabetes, weight, and lifestyle may be reviewed.",
                    es: "Pueden revisarse presión arterial, colesterol, diabetes, peso y estilo de vida.",
                },
            },
            {
                title: {
                    en: "Ongoing support",
                    es: "Apoyo continuo",
                },
                description: {
                    en: "Prevention often includes ongoing monitoring and follow-up.",
                    es: "La prevención frecuentemente incluye monitoreo y seguimiento continuo.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Do I need symptoms for preventive cardiology?",
                    es: "¿Necesito síntomas para cardiología preventiva?",
                },
                answer: {
                    en: "No. Many patients seek preventive cardiology because of risk factors, family history, or the desire to protect long-term heart health.",
                    es: "No. Muchos pacientes buscan cardiología preventiva por factores de riesgo, antecedentes familiares o el deseo de proteger la salud cardíaca a largo plazo.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "preventive cardiology Hialeah",
                "heart disease prevention Miami",
                "cardiologist for prevention Miami-Dade",
            ],
            es: [
                "cardiología preventiva Hialeah",
                "prevención enfermedad cardíaca Miami",
                "cardiólogo para prevención Miami-Dade",
            ],
        },
        href: {
            en: "/services/preventive-cardiology/",
            es: "/es/services/cardiologia-preventiva/",
        },
        seo: {
            title: {
                en: "Preventive Cardiology in Hialeah, FL",
                es: "Cardiología Preventiva en Hialeah, FL",
            },
            description: {
                en: "Preventive cardiology in Hialeah focused on risk reduction, early detection, and long-term cardiovascular health.",
                es: "Cardiología preventiva en Hialeah enfocada en reducción de riesgo, detección temprana y salud cardiovascular a largo plazo.",
            },
        },
        priority: 9,
    },
    {
        id: "hypertension-management",
        slug: {
            en: "hypertension-management",
            es: "manejo-hipertension",
        },
        icon: Hypertension,
        title: {
            en: "Hypertension Management",
            es: "Manejo de Hipertensión",
        },
        shortTitle: {
            en: "Hypertension Management",
            es: "Manejo de Hipertensión",
        },
        description: {
            en: "Cardiology care for high blood pressure focused on risk reduction, monitoring, treatment planning, and long-term heart health.",
            es: "Cuidado cardiológico para presión alta enfocado en reducir riesgos, monitoreo, planificación de tratamiento y salud cardíaca a largo plazo.",
        },
        shortDescription: {
            en: "Heart-focused care for high blood pressure.",
            es: "Cuidado cardiológico para presión alta.",
        },
        overview: {
            en: "Hypertension management helps patients monitor and manage high blood pressure, reduce cardiovascular risk, and protect the heart, brain, kidneys, and blood vessels.",
            es: "El manejo de hipertensión ayuda a los pacientes a monitorear y controlar la presión alta, reducir riesgo cardiovascular y proteger el corazón, cerebro, riñones y vasos sanguíneos.",
        },
        detailImages: imageSets.hypertension,
        reasonsToSeekCare: [
            {
                title: {
                    en: "High or difficult-to-control blood pressure",
                    es: "Presión alta o difícil de controlar",
                },
                description: {
                    en: "Patients with elevated readings or changing blood pressure may need specialized review.",
                    es: "Pacientes con lecturas elevadas o cambios en la presión pueden necesitar revisión especializada.",
                },
            },
            {
                title: {
                    en: "Cardiovascular risk",
                    es: "Riesgo cardiovascular",
                },
                description: {
                    en: "High blood pressure can increase the risk of heart disease, stroke, and other complications.",
                    es: "La presión alta puede aumentar el riesgo de enfermedad cardíaca, derrame cerebral y otras complicaciones.",
                },
            },
            {
                title: {
                    en: "Medication and monitoring review",
                    es: "Revisión de medicamentos y monitoreo",
                },
                description: {
                    en: "A cardiology visit can help review medications, home readings, and follow-up needs.",
                    es: "Una visita cardiológica puede ayudar a revisar medicamentos, lecturas en casa y necesidades de seguimiento.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Blood pressure history review",
                    es: "Revisión del historial de presión",
                },
                description: {
                    en: "The provider may review readings, medications, symptoms, and risk factors.",
                    es: "El proveedor puede revisar lecturas, medicamentos, síntomas y factores de riesgo.",
                },
            },
            {
                title: {
                    en: "Risk-based planning",
                    es: "Planificación basada en riesgo",
                },
                description: {
                    en: "Care may include lifestyle guidance, medication review, testing, or monitoring recommendations.",
                    es: "El cuidado puede incluir orientación de estilo de vida, revisión de medicamentos, pruebas o recomendaciones de monitoreo.",
                },
            },
            {
                title: {
                    en: "Long-term follow-up",
                    es: "Seguimiento a largo plazo",
                },
                description: {
                    en: "Follow-up helps monitor blood pressure control and cardiovascular risk.",
                    es: "El seguimiento ayuda a monitorear el control de presión arterial y riesgo cardiovascular.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Can high blood pressure affect the heart?",
                    es: "¿La presión alta puede afectar el corazón?",
                },
                answer: {
                    en: "Yes. Over time, uncontrolled high blood pressure can increase strain on the heart and raise the risk of cardiovascular complications.",
                    es: "Sí. Con el tiempo, la presión alta no controlada puede aumentar la carga del corazón y elevar el riesgo de complicaciones cardiovasculares.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "hypertension doctor Hialeah",
                "high blood pressure cardiologist Miami",
                "blood pressure management Miami-Dade",
            ],
            es: [
                "doctor hipertensión Hialeah",
                "cardiólogo presión alta Miami",
                "manejo de presión arterial Miami-Dade",
            ],
        },
        href: {
            en: "/services/hypertension-management/",
            es: "/es/services/manejo-hipertension/",
        },
        seo: {
            title: {
                en: "Hypertension Management in Hialeah, FL",
                es: "Manejo de Hipertensión en Hialeah, FL",
            },
            description: {
                en: "Hypertension management in Hialeah focused on blood pressure control, cardiovascular risk reduction, and long-term heart health.",
                es: "Manejo de hipertensión en Hialeah enfocado en control de presión, reducción de riesgo cardiovascular y salud cardíaca a largo plazo.",
            },
        },
        featured: true,
        priority: 10,
    },
    {
        id: "heart-disease-evaluation-treatment",
        slug: {
            en: "heart-disease-evaluation-treatment",
            es: "evaluacion-tratamiento-enfermedad-cardiaca",
        },
        icon: HeartDisease,
        title: {
            en: "Heart Disease Evaluation and Treatment",
            es: "Evaluación y Tratamiento de Enfermedad Cardíaca",
        },
        shortTitle: {
            en: "Heart Disease Care",
            es: "Cuidado de Enfermedad Cardíaca",
        },
        description: {
            en: "Evaluation and ongoing management for coronary artery disease, congestive heart failure, arrhythmias, peripheral vascular disease, and other cardiovascular conditions.",
            es: "Evaluación y manejo continuo de enfermedad coronaria, insuficiencia cardíaca congestiva, arritmias, enfermedad vascular periférica y otras condiciones cardiovasculares.",
        },
        shortDescription: {
            en: "Care for ongoing cardiovascular conditions.",
            es: "Cuidado para condiciones cardiovasculares existentes.",
        },
        overview: {
            en: "Heart disease evaluation and treatment focuses on diagnosing, monitoring, and managing cardiovascular conditions with individualized care planning.",
            es: "La evaluación y tratamiento de enfermedad cardíaca se enfoca en diagnosticar, monitorear y manejar condiciones cardiovasculares con planificación individualizada.",
        },
        detailImages: imageSets.heartDisease,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Known cardiovascular condition",
                    es: "Condición cardiovascular conocida",
                },
                description: {
                    en: "Patients with known heart disease may need follow-up, monitoring, testing, or treatment planning.",
                    es: "Pacientes con enfermedad cardíaca conocida pueden necesitar seguimiento, monitoreo, pruebas o planificación de tratamiento.",
                },
            },
            {
                title: {
                    en: "Symptoms or changing health",
                    es: "Síntomas o cambios de salud",
                },
                description: {
                    en: "New or worsening symptoms should be discussed with a cardiology provider.",
                    es: "Síntomas nuevos o que empeoran deben conversarse con un proveedor de cardiología.",
                },
            },
            {
                title: {
                    en: "Long-term management",
                    es: "Manejo a largo plazo",
                },
                description: {
                    en: "Ongoing care helps monitor disease progression, medications, and prevention needs.",
                    es: "El cuidado continuo ayuda a monitorear progresión, medicamentos y necesidades de prevención.",
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
                    en: "The provider reviews diagnosis, symptoms, medications, prior testing, and current concerns.",
                    es: "El proveedor revisa diagnóstico, síntomas, medicamentos, pruebas previas y preocupaciones actuales.",
                },
            },
            {
                title: {
                    en: "Testing or monitoring",
                    es: "Pruebas o monitoreo",
                },
                description: {
                    en: "Additional testing may be recommended depending on the patient’s condition and symptoms.",
                    es: "Pruebas adicionales pueden recomendarse según la condición y síntomas del paciente.",
                },
            },
            {
                title: {
                    en: "Individualized treatment planning",
                    es: "Plan de tratamiento individualizado",
                },
                description: {
                    en: "The care plan may include medication review, lifestyle guidance, monitoring, or referral for advanced procedures when needed.",
                    es: "El plan puede incluir revisión de medicamentos, orientación de estilo de vida, monitoreo o referido para procedimientos avanzados cuando sea necesario.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "What heart conditions does the office evaluate?",
                    es: "¿Qué condiciones cardíacas evalúa la oficina?",
                },
                answer: {
                    en: "The office evaluates and manages many cardiovascular conditions, including coronary artery disease, hypertension, congestive heart failure, arrhythmias, and peripheral vascular disease.",
                    es: "La oficina evalúa y maneja muchas condiciones cardiovasculares, incluyendo enfermedad coronaria, hipertensión, insuficiencia cardíaca congestiva, arritmias y enfermedad vascular periférica.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "heart disease doctor Hialeah",
                "cardiologist for heart disease Miami",
                "coronary artery disease Hialeah",
                "heart failure cardiologist Miami",
            ],
            es: [
                "doctor enfermedad cardíaca Hialeah",
                "cardiólogo enfermedad cardíaca Miami",
                "enfermedad coronaria Hialeah",
                "cardiólogo insuficiencia cardíaca Miami",
            ],
        },
        href: {
            en: "/services/heart-disease-evaluation-treatment/",
            es: "/es/services/evaluacion-tratamiento-enfermedad-cardiaca/",
        },
        seo: {
            title: {
                en: "Heart Disease Evaluation and Treatment in Hialeah, FL",
                es: "Evaluación y Tratamiento de Enfermedad Cardíaca en Hialeah, FL",
            },
            description: {
                en: "Heart disease evaluation and treatment in Hialeah for coronary artery disease, heart failure, arrhythmias, vascular disease, and ongoing cardiovascular care.",
                es: "Evaluación y tratamiento de enfermedad cardíaca en Hialeah para enfermedad coronaria, insuficiencia cardíaca, arritmias, enfermedad vascular y cuidado cardiovascular continuo.",
            },
        },
        priority: 11,
    },
    {
        id: "pacemaker-aicd-interrogation",
        slug: {
            en: "pacemaker-aicd-interrogation",
            es: "interrogacion-marcapasos-aicd",
        },
        icon: Arrythmia,
        title: {
            en: "Pacemaker / AICD Interrogation",
            es: "Interrogación de Marcapasos / AICD",
        },
        shortTitle: {
            en: "Pacemaker / AICD Checks",
            es: "Chequeo Marcapasos / AICD",
        },
        description: {
            en: "Device interrogation for patients with pacemakers or AICDs to review device function and rhythm-related information.",
            es: "Interrogación de dispositivos para pacientes con marcapasos o AICD para revisar función del dispositivo e información relacionada con el ritmo cardíaco.",
        },
        shortDescription: {
            en: "Device checks for pacemakers and AICDs.",
            es: "Chequeos de dispositivos como marcapasos y AICD.",
        },
        overview: {
            en: "Pacemaker and AICD interrogation helps review device performance, stored rhythm information, and other device-related findings as part of ongoing cardiac care.",
            es: "La interrogación de marcapasos y AICD ayuda a revisar el funcionamiento del dispositivo, información almacenada del ritmo cardíaco y otros hallazgos como parte del cuidado cardíaco continuo.",
        },
        detailImages: imageSets.pacemakerAicd,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Device follow-up",
                    es: "Seguimiento del dispositivo",
                },
                description: {
                    en: "Patients with implanted cardiac devices need regular checks as recommended by their provider.",
                    es: "Pacientes con dispositivos cardíacos implantados necesitan chequeos regulares según recomendación médica.",
                },
            },
            {
                title: {
                    en: "Rhythm monitoring",
                    es: "Monitoreo del ritmo",
                },
                description: {
                    en: "Device data can help evaluate rhythm-related events and device performance.",
                    es: "Los datos del dispositivo pueden ayudar a evaluar eventos relacionados con el ritmo y funcionamiento del dispositivo.",
                },
            },
            {
                title: {
                    en: "Ongoing cardiac management",
                    es: "Manejo cardíaco continuo",
                },
                description: {
                    en: "Results may help guide follow-up recommendations and care planning.",
                    es: "Los resultados pueden ayudar a guiar recomendaciones de seguimiento y planificación de cuidado.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Device data review",
                    es: "Revisión de datos del dispositivo",
                },
                description: {
                    en: "The device is checked to review function and stored information.",
                    es: "El dispositivo se revisa para evaluar funcionamiento e información almacenada.",
                },
            },
            {
                title: {
                    en: "Rhythm-related findings",
                    es: "Hallazgos relacionados con ritmo",
                },
                description: {
                    en: "The provider may review rhythm events or device alerts when present.",
                    es: "El proveedor puede revisar eventos de ritmo o alertas del dispositivo si están presentes.",
                },
            },
            {
                title: {
                    en: "Follow-up planning",
                    es: "Planificación de seguimiento",
                },
                description: {
                    en: "Follow-up timing or care recommendations may be discussed.",
                    es: "Puede conversarse sobre el tiempo de seguimiento o recomendaciones de cuidado.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "What is pacemaker or AICD interrogation?",
                    es: "¿Qué es la interrogación de marcapasos o AICD?",
                },
                answer: {
                    en: "It is a device check that reviews pacemaker or AICD function and stored rhythm information.",
                    es: "Es un chequeo del dispositivo que revisa la función del marcapasos o AICD e información almacenada del ritmo cardíaco.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "pacemaker check Hialeah",
                "AICD interrogation Miami",
                "cardiac device check Miami-Dade",
            ],
            es: [
                "chequeo marcapasos Hialeah",
                "interrogación AICD Miami",
                "chequeo dispositivo cardíaco Miami-Dade",
            ],
        },
        href: {
            en: "/services/pacemaker-aicd-interrogation/",
            es: "/es/services/interrogacion-marcapasos-aicd/",
        },
        seo: {
            title: {
                en: "Pacemaker / AICD Interrogation in Hialeah, FL",
                es: "Interrogación de Marcapasos / AICD en Hialeah, FL",
            },
            description: {
                en: "Pacemaker and AICD interrogation in Hialeah for device checks, rhythm review, and ongoing cardiac care.",
                es: "Interrogación de marcapasos y AICD en Hialeah para chequeos de dispositivos, revisión de ritmo y cuidado cardíaco continuo.",
            },
        },
        priority: 12,
    },
    {
        id: "event-monitor",
        slug: {
            en: "event-monitor",
            es: "monitor-eventos-cardiacos",
        },
        icon: Arrythmia,
        title: {
            en: "Event Monitor",
            es: "Monitor de Eventos Cardíacos",
        },
        shortTitle: {
            en: "Event Monitor",
            es: "Monitor de Eventos",
        },
        description: {
            en: "Heart rhythm monitoring used to evaluate intermittent symptoms such as palpitations, skipped beats, dizziness, or possible arrhythmias.",
            es: "Monitoreo del ritmo cardíaco utilizado para evaluar síntomas intermitentes como palpitaciones, latidos saltados, mareos o posibles arritmias.",
        },
        shortDescription: {
            en: "Heart rhythm monitoring for intermittent symptoms.",
            es: "Monitoreo del ritmo cardíaco para síntomas intermitentes.",
        },
        overview: {
            en: "An event monitor helps record heart rhythm information over time, especially when symptoms do not happen during a short office visit or standard EKG.",
            es: "Un monitor de eventos ayuda a registrar información del ritmo cardíaco durante un periodo de tiempo, especialmente cuando los síntomas no ocurren durante una visita breve o EKG estándar.",
        },
        detailImages: imageSets.rhythm,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Palpitations or skipped beats",
                    es: "Palpitaciones o latidos saltados",
                },
                description: {
                    en: "Intermittent rhythm symptoms may need longer monitoring.",
                    es: "Síntomas intermitentes de ritmo pueden necesitar monitoreo más prolongado.",
                },
            },
            {
                title: {
                    en: "Dizziness or fainting concerns",
                    es: "Mareos o desmayos",
                },
                description: {
                    en: "Rhythm monitoring may help evaluate symptoms that come and go.",
                    es: "El monitoreo del ritmo puede ayudar a evaluar síntomas que aparecen y desaparecen.",
                },
            },
            {
                title: {
                    en: "Possible arrhythmia",
                    es: "Posible arritmia",
                },
                description: {
                    en: "An event monitor may help capture rhythm changes for provider review.",
                    es: "Un monitor de eventos puede ayudar a capturar cambios de ritmo para revisión médica.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Longer rhythm monitoring",
                    es: "Monitoreo de ritmo más prolongado",
                },
                description: {
                    en: "The monitor records rhythm information over a period of time.",
                    es: "El monitor registra información del ritmo durante un periodo de tiempo.",
                },
            },
            {
                title: {
                    en: "Symptom correlation",
                    es: "Correlación con síntomas",
                },
                description: {
                    en: "The goal is to help connect symptoms with rhythm findings when possible.",
                    es: "El objetivo es ayudar a conectar síntomas con hallazgos del ritmo cuando sea posible.",
                },
            },
            {
                title: {
                    en: "Result review",
                    es: "Revisión de resultados",
                },
                description: {
                    en: "The provider reviews recorded information and discusses next steps.",
                    es: "El proveedor revisa la información registrada y conversa sobre próximos pasos.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Why use an event monitor instead of only an EKG?",
                    es: "¿Por qué usar un monitor de eventos en vez de solo un EKG?",
                },
                answer: {
                    en: "An EKG records a short moment in time. An event monitor can record rhythm information over a longer period, which may help evaluate intermittent symptoms.",
                    es: "Un EKG registra un momento breve. Un monitor de eventos puede registrar información del ritmo por más tiempo, lo que puede ayudar a evaluar síntomas intermitentes.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "event monitor Hialeah",
                "heart rhythm monitor Miami",
                "palpitations monitor Hialeah",
            ],
            es: [
                "monitor de eventos Hialeah",
                "monitor ritmo cardíaco Miami",
                "monitor para palpitaciones Hialeah",
            ],
        },
        href: {
            en: "/services/event-monitor/",
            es: "/es/services/monitor-eventos-cardiacos/",
        },
        seo: {
            title: {
                en: "Event Monitor in Hialeah, FL | Heart Rhythm Monitoring",
                es: "Monitor de Eventos en Hialeah, FL | Monitoreo Cardíaco",
            },
            description: {
                en: "Event monitor services in Hialeah for palpitations, intermittent rhythm symptoms, dizziness, and possible arrhythmias.",
                es: "Monitor de eventos en Hialeah para palpitaciones, síntomas intermitentes de ritmo, mareos y posibles arritmias.",
            },
        },
        priority: 13,
    },
    {
        id: "cardiac-catheterization",
        slug: {
            en: "cardiac-catheterization",
            es: "cateterismo-cardiaco",
        },
        icon: InterventionalCardiology,
        title: {
            en: "Cardiac Catheterization",
            es: "Cateterismo Cardíaco",
        },
        shortTitle: {
            en: "Cardiac Catheterization",
            es: "Cateterismo Cardíaco",
        },
        description: {
            en: "Specialized cardiovascular procedure performed by collaborating physician Dr. Brian Valle, DO, for qualifying patients when clinically appropriate.",
            es: "Procedimiento cardiovascular especializado realizado por el médico colaborador Dr. Brian Valle, DO, para pacientes que califican cuando es clínicamente apropiado.",
        },
        shortDescription: {
            en: "Advanced procedure coordination for qualifying patients.",
            es: "Coordinación de procedimiento avanzado para pacientes que califican.",
        },
        overview: {
            en: "Cardiac catheterization is a specialized cardiovascular procedure that may be recommended for qualifying patients based on symptoms, test results, or clinical evaluation. Dr. Pazos collaborates with Dr. Brian Valle, DO, for this procedure when appropriate.",
            es: "El cateterismo cardíaco es un procedimiento cardiovascular especializado que puede recomendarse para pacientes que califican según síntomas, resultados o evaluación clínica. El Dr. Pazos colabora con el Dr. Brian Valle, DO, para este procedimiento cuando corresponde.",
        },
        detailImages: imageSets.cardiacCatheterization,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Abnormal cardiac testing",
                    es: "Pruebas cardíacas anormales",
                },
                description: {
                    en: "Certain test results may lead to discussion of advanced evaluation.",
                    es: "Ciertos resultados de pruebas pueden llevar a discutir evaluación avanzada.",
                },
            },
            {
                title: {
                    en: "Possible coronary artery disease",
                    es: "Posible enfermedad coronaria",
                },
                description: {
                    en: "Cardiac catheterization may be considered when coronary artery disease needs further evaluation.",
                    es: "El cateterismo puede considerarse cuando se necesita evaluar más la enfermedad coronaria.",
                },
            },
            {
                title: {
                    en: "Procedure coordination",
                    es: "Coordinación del procedimiento",
                },
                description: {
                    en: "The care team helps coordinate next steps for qualifying patients.",
                    es: "El equipo ayuda a coordinar próximos pasos para pacientes que califican.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Clinical review first",
                    es: "Primero revisión clínica",
                },
                description: {
                    en: "The provider reviews symptoms, history, and test results before discussing whether the procedure may be appropriate.",
                    es: "El proveedor revisa síntomas, historial y resultados antes de discutir si el procedimiento puede ser apropiado.",
                },
            },
            {
                title: {
                    en: "Collaborative procedure care",
                    es: "Cuidado colaborativo del procedimiento",
                },
                description: {
                    en: "For qualifying patients, the procedure is performed by collaborating physician Dr. Brian Valle, DO.",
                    es: "Para pacientes que califican, el procedimiento es realizado por el médico colaborador Dr. Brian Valle, DO.",
                },
            },
            {
                title: {
                    en: "Follow-up planning",
                    es: "Planificación de seguimiento",
                },
                description: {
                    en: "The care team helps guide follow-up and ongoing cardiovascular management.",
                    es: "El equipo ayuda a guiar seguimiento y manejo cardiovascular continuo.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "Does every patient with chest pain need cardiac catheterization?",
                    es: "¿Todo paciente con dolor en el pecho necesita cateterismo?",
                },
                answer: {
                    en: "No. Cardiac catheterization is only considered when clinically appropriate after evaluation and testing.",
                    es: "No. El cateterismo cardíaco solo se considera cuando es clínicamente apropiado después de evaluación y pruebas.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "cardiac catheterization Hialeah",
                "cardiac cath Miami",
                "interventional cardiology Hialeah",
            ],
            es: [
                "cateterismo cardíaco Hialeah",
                "cardiac cath Miami",
                "cardiología intervencionista Hialeah",
            ],
        },
        href: {
            en: "/services/cardiac-catheterization/",
            es: "/es/services/cateterismo-cardiaco/",
        },
        seo: {
            title: {
                en: "Cardiac Catheterization Coordination in Hialeah, FL",
                es: "Coordinación de Cateterismo Cardíaco en Hialeah, FL",
            },
            description: {
                en: "Cardiac catheterization coordination in Hialeah for qualifying patients through collaborative cardiovascular care.",
                es: "Coordinación de cateterismo cardíaco en Hialeah para pacientes que califican mediante cuidado cardiovascular colaborativo.",
            },
        },
        priority: 14,
    },
    {
        id: "transesophageal-echocardiogram",
        slug: {
            en: "transesophageal-echocardiogram",
            es: "ecocardiograma-transesofagico",
        },
        icon: InterventionalCardiology,
        title: {
            en: "Transesophageal Echocardiogram",
            es: "Ecocardiograma Transesofágico",
        },
        shortTitle: {
            en: "TEE",
            es: "TEE",
        },
        description: {
            en: "Specialized echocardiogram procedure performed by collaborating physician Dr. Brian Valle, DO, for qualifying patients when clinically appropriate.",
            es: "Procedimiento especializado de ecocardiograma realizado por el médico colaborador Dr. Brian Valle, DO, para pacientes que califican cuando es clínicamente apropiado.",
        },
        shortDescription: {
            en: "Advanced echocardiogram coordination for qualifying patients.",
            es: "Coordinación de ecocardiograma avanzado para pacientes que califican.",
        },
        overview: {
            en: "A transesophageal echocardiogram, or TEE, is a specialized cardiac imaging procedure that may be recommended when detailed heart images are needed. Dr. Pazos collaborates with Dr. Brian Valle, DO, for this procedure when appropriate.",
            es: "Un ecocardiograma transesofágico, o TEE, es un procedimiento especializado de imágenes cardíacas que puede recomendarse cuando se necesitan imágenes detalladas del corazón. El Dr. Pazos colabora con el Dr. Brian Valle, DO, para este procedimiento cuando corresponde.",
        },
        detailImages: imageSets.transesophagealEchocardiogram,
        reasonsToSeekCare: [
            {
                title: {
                    en: "Need for detailed cardiac imaging",
                    es: "Necesidad de imágenes cardíacas detalladas",
                },
                description: {
                    en: "TEE may be considered when more detailed heart imaging is needed after evaluation.",
                    es: "TEE puede considerarse cuando se necesitan imágenes más detalladas del corazón después de una evaluación.",
                },
            },
            {
                title: {
                    en: "Valve or structural concerns",
                    es: "Preocupaciones de válvulas o estructura",
                },
                description: {
                    en: "The procedure may help evaluate certain valve or structural heart concerns.",
                    es: "El procedimiento puede ayudar a evaluar ciertas preocupaciones de válvulas o estructura del corazón.",
                },
            },
            {
                title: {
                    en: "Collaborative procedure planning",
                    es: "Planificación colaborativa del procedimiento",
                },
                description: {
                    en: "The care team helps coordinate this specialized procedure for qualifying patients.",
                    es: "El equipo ayuda a coordinar este procedimiento especializado para pacientes que califican.",
                },
            },
        ],
        whatToExpect: [
            {
                title: {
                    en: "Evaluation before procedure",
                    es: "Evaluación antes del procedimiento",
                },
                description: {
                    en: "The provider reviews symptoms, history, and test results before discussing whether TEE is appropriate.",
                    es: "El proveedor revisa síntomas, historial y resultados antes de discutir si TEE es apropiado.",
                },
            },
            {
                title: {
                    en: "Specialized cardiac imaging",
                    es: "Imágenes cardíacas especializadas",
                },
                description: {
                    en: "TEE is used when more detailed imaging is clinically needed.",
                    es: "TEE se utiliza cuando se necesitan imágenes más detalladas clínicamente.",
                },
            },
            {
                title: {
                    en: "Procedure coordination",
                    es: "Coordinación del procedimiento",
                },
                description: {
                    en: "For qualifying patients, the procedure is performed by collaborating physician Dr. Brian Valle, DO.",
                    es: "Para pacientes que califican, el procedimiento es realizado por el médico colaborador Dr. Brian Valle, DO.",
                },
            },
        ],
        faqs: [
            {
                question: {
                    en: "What does TEE stand for?",
                    es: "¿Qué significa TEE?",
                },
                answer: {
                    en: "TEE stands for Transesophageal Echocardiogram, a specialized heart imaging procedure used when detailed cardiac images are needed.",
                    es: "TEE significa ecocardiograma transesofágico, un procedimiento especializado de imágenes del corazón usado cuando se necesitan imágenes cardíacas detalladas.",
                },
            },
            appointmentFaq,
        ],
        keywords: {
            en: [
                "transesophageal echocardiogram Hialeah",
                "TEE cardiology Miami",
                "advanced echocardiogram Miami-Dade",
            ],
            es: [
                "ecocardiograma transesofágico Hialeah",
                "TEE cardiología Miami",
                "ecocardiograma avanzado Miami-Dade",
            ],
        },
        href: {
            en: "/services/transesophageal-echocardiogram/",
            es: "/es/services/ecocardiograma-transesofagico/",
        },
        seo: {
            title: {
                en: "Transesophageal Echocardiogram Coordination in Hialeah, FL",
                es: "Coordinación de Ecocardiograma Transesofágico en Hialeah, FL",
            },
            description: {
                en: "Transesophageal echocardiogram coordination in Hialeah for qualifying patients through collaborative cardiovascular care.",
                es: "Coordinación de ecocardiograma transesofágico en Hialeah para pacientes que califican mediante cuidado cardiovascular colaborativo.",
            },
        },
        priority: 15,
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