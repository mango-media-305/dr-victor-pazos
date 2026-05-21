import type { LanguageCode } from "../site/siteConfig";
import { contactInfo } from "../site/contact";

export interface DoctorProfileLink {
    label: string;
    href: string;
}

export interface DoctorProfileHighlight {
    value: string;
    label: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
}

export interface DoctorProfileCredential {
    label: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
    verificationNote?: Record<LanguageCode, string>;
    needsClientApproval?: boolean;
}

export interface DoctorEducationItem {
    label: Record<LanguageCode, string>;
    institution: string;
    year?: string;
    verificationNote?: Record<LanguageCode, string>;
    needsClientApproval?: boolean;
}

export interface DoctorAffiliation {
    name: string;
    verificationNote?: Record<LanguageCode, string>;
    needsClientApproval?: boolean;
}

export interface DoctorNpi {
    individual: string;
    organization?: string;
    note: Record<LanguageCode, string>;
}

export interface DoctorContentReview {
    reviewedBy: string;
    lastUpdated: Record<LanguageCode, string>;
    approvalRequired: boolean;
    note: Record<LanguageCode, string>;
}

export interface DoctorProfile {
    id: string;
    name: string;
    displayName: string;
    legalPracticeName: string;

    title: Record<LanguageCode, string>;
    specialty: Record<LanguageCode, string>;
    shortBio: Record<LanguageCode, string>;
    biography: Record<LanguageCode, string[]>;

    experience: {
        yearsDisplay: string;
        label: Record<LanguageCode, string>;
        note: Record<LanguageCode, string>;
    };

    highlights: DoctorProfileHighlight[];
    credentials: DoctorProfileCredential[];
    education: DoctorEducationItem[];
    hospitalAffiliations: DoctorAffiliation[];

    languages: Record<LanguageCode, string[]>;
    serviceAreas: string[];

    location: {
        label: Record<LanguageCode, string>;
        address: string;
        city: string;
        state: string;
        zip: string;
        display: string;
    };

    npi: DoctorNpi;

    externalProfiles: DoctorProfileLink[];

    medicalDisclaimer: Record<LanguageCode, string>;

    contentReview: DoctorContentReview;

    seo: {
        title: Record<LanguageCode, string>;
        description: Record<LanguageCode, string>;
        keywords: Record<LanguageCode, string[]>;
    };
}

export const doctorProfile: DoctorProfile = {
    id: "victor-pazos-md",
    name: "Victor Pazos",
    displayName: "Victor Pazos, MD",
    legalPracticeName: "Victor Pazos, MD. PA.",

    title: {
        en: "Cardiologist in Hialeah, FL",
        es: "Cardiólogo en Hialeah, FL",
    },

    specialty: {
        en: "Cardiology & Interventional Cardiology",
        es: "Cardiología y Cardiología Intervencionista",
    },

    shortBio: {
        en: "Victor Pazos, MD is a cardiologist serving patients from his Hialeah office with a focus on cardiovascular evaluation, heart-related symptoms, risk management, and ongoing patient care.",
        es: "Victor Pazos, MD es un cardiólogo que atiende pacientes desde su oficina en Hialeah, con enfoque en evaluación cardiovascular, síntomas relacionados con el corazón, manejo de riesgos y cuidado continuo.",
    },

    biography: {
        en: [
            "Victor Pazos, MD is a cardiologist based in Hialeah, Florida, serving patients from Miami-Dade County and surrounding South Florida communities.",
            "His clinical focus includes cardiology and interventional cardiology, with care centered on evaluating heart-related symptoms, identifying cardiovascular risk factors, and supporting patients with ongoing heart conditions.",
            "Patients often seek cardiology care when they need answers about chest discomfort, shortness of breath, palpitations, high blood pressure, abnormal cardiac testing, or long-term cardiovascular concerns.",
            "Dr. Pazos’ approach emphasizes careful evaluation, practical guidance, and clear communication so patients and families can better understand their heart health and treatment options.",
            "The practice provides care in English and Spanish, helping Miami’s bilingual community communicate confidently during important heart-health conversations.",
        ],
        es: [
            "Victor Pazos, MD es un cardiólogo ubicado en Hialeah, Florida, que atiende pacientes de Miami-Dade County y comunidades cercanas del sur de Florida.",
            "Su enfoque clínico incluye cardiología y cardiología intervencionista, con atención centrada en evaluar síntomas relacionados con el corazón, identificar factores de riesgo cardiovascular y apoyar a pacientes con condiciones cardíacas continuas.",
            "Los pacientes suelen buscar atención cardiológica cuando necesitan respuestas sobre dolor o molestia en el pecho, falta de aire, palpitaciones, presión alta, resultados cardíacos anormales o preocupaciones cardiovasculares a largo plazo.",
            "El enfoque de Dr. Pazos enfatiza evaluación cuidadosa, orientación práctica y comunicación clara para que pacientes y familiares puedan entender mejor su salud cardíaca y sus opciones de tratamiento.",
            "La práctica ofrece atención en inglés y español, ayudando a la comunidad bilingüe de Miami a comunicarse con confianza durante conversaciones importantes sobre la salud del corazón.",
        ],
    },

    experience: {
        yearsDisplay: "35+",
        label: {
            en: "Years of medical experience",
            es: "Años de experiencia médica",
        },
        note: {
            en: "Public physician profiles list Dr. Pazos as having more than 35 years of medical experience. Use 35+ unless the doctor approves a more specific number.",
            es: "Perfiles médicos públicos indican que Dr. Pazos cuenta con más de 35 años de experiencia médica. Use 35+ salvo que el doctor apruebe una cifra más específica.",
        },
    },

    highlights: [
        {
            value: "35+",
            label: {
                en: "Years of medical experience",
                es: "Años de experiencia médica",
            },
            description: {
                en: "A long-standing medical career supporting patients with cardiovascular concerns and heart-health decisions.",
                es: "Una trayectoria médica apoyando a pacientes con preocupaciones cardiovasculares y decisiones sobre la salud del corazón.",
            },
        },
        {
            value: "EN / ES",
            label: {
                en: "English & Spanish care",
                es: "Atención en inglés y español",
            },
            description: {
                en: "Bilingual care that helps patients and families discuss symptoms, testing, and treatment options clearly.",
                es: "Atención bilingüe que ayuda a pacientes y familiares a conversar con claridad sobre síntomas, pruebas y opciones de tratamiento.",
            },
        },
        {
            value: "Hialeah",
            label: {
                en: "Miami-Dade location",
                es: "Ubicación en Miami-Dade",
            },
            description: {
                en: "A local office serving patients from Hialeah, Miami, Miami Lakes, Doral, and nearby communities.",
                es: "Una oficina local sirviendo pacientes de Hialeah, Miami, Miami Lakes, Doral y comunidades cercanas.",
            },
        },
        {
            value: "MD",
            label: {
                en: "Physician-led evaluation",
                es: "Evaluación dirigida por médico",
            },
            description: {
                en: "Heart-health evaluation and treatment planning guided by Victor Pazos, MD.",
                es: "Evaluación de salud cardíaca y planificación de tratamiento guiada por Victor Pazos, MD.",
            },
        },
    ],

    credentials: [
        {
            label: {
                en: "Cardiology Specialist",
                es: "Especialista en Cardiología",
            },
            description: {
                en: "Clinical care focused on evaluating heart symptoms, cardiovascular risk, and ongoing heart conditions.",
                es: "Atención clínica enfocada en evaluar síntomas cardíacos, riesgo cardiovascular y condiciones del corazón continuas.",
            },
        },
        {
            label: {
                en: "Interventional Cardiology Focus",
                es: "Enfoque en Cardiología Intervencionista",
            },
            description: {
                en: "Specialized cardiovascular care for patients who may need advanced heart and vascular evaluation.",
                es: "Atención cardiovascular especializada para pacientes que pueden necesitar evaluación avanzada del corazón y los vasos sanguíneos.",
            },
            verificationNote: {
                en: "Public profiles identify Dr. Pazos as an interventional cardiologist. Confirm final wording with the doctor before launch.",
                es: "Perfiles públicos identifican a Dr. Pazos como cardiólogo intervencionista. Confirmar el texto final con el doctor antes del lanzamiento.",
            },
            needsClientApproval: false,
        },
        {
            label: {
                en: "South Florida Patient Care",
                es: "Atención a pacientes del sur de Florida",
            },
            description: {
                en: "Serving patients across Hialeah, Miami, Miami Lakes, Doral, and surrounding Miami-Dade communities.",
                es: "Sirviendo pacientes de Hialeah, Miami, Miami Lakes, Doral y comunidades cercanas de Miami-Dade.",
            },
        },
        {
            label: {
                en: "Board Certification Information",
                es: "Información de certificación médica",
            },
            description: {
                en: "Board certification details should be displayed only after the doctor confirms the exact current certification status and preferred wording.",
                es: "Los detalles de certificación médica deben mostrarse solo después de que el doctor confirme el estado actual exacto y el texto preferido.",
            },
            verificationNote: {
                en: "Keep this item as an internal placeholder until directly confirmed by the doctor/client.",
                es: "Mantener este elemento como referencia interna hasta confirmación directa del doctor/cliente.",
            },
            needsClientApproval: false,
        },
    ],

    education: [
        {
            label: {
                en: "Medical School",
                es: "Escuela de Medicina",
            },
            institution:
                "University Havana School of Medicine / Universidad de Ciencias Médicas de La Habana",
            year: "1986",
            verificationNote: {
                en: "Listed on public physician profiles; confirm exact institution formatting with the doctor before launch.",
                es: "Listado en perfiles médicos públicos; confirmar el formato exacto de la institución con el doctor antes del lanzamiento.",
            },
            needsClientApproval: false,
        },
        {
            label: {
                en: "Residency / Training",
                es: "Residencia / Entrenamiento",
            },
            institution: "Mount Sinai School of Medicine / Cabrini Medical Center",
            verificationNote: {
                en: "Listed on some public provider profiles; confirm before displaying prominently.",
                es: "Listado en algunos perfiles públicos; confirmar antes de mostrarlo de forma destacada.",
            },
            needsClientApproval: false,
        },
    ],

    hospitalAffiliations: [
        {
            name: "Hialeah Hospital",
            verificationNote: {
                en: "Listed on public provider profiles; confirm current affiliation before launch.",
                es: "Listado en perfiles públicos; confirmar afiliación actual antes del lanzamiento.",
            },
            needsClientApproval: false,
        },
        {
            name: "Palmetto General Hospital",
            verificationNote: {
                en: "Listed on public provider profiles; confirm current affiliation before launch.",
                es: "Listado en perfiles públicos; confirmar afiliación actual antes del lanzamiento.",
            },
            needsClientApproval: false,
        },
        {
            name: "Larkin Community Hospital Palm Springs Campus",
            verificationNote: {
                en: "Listed on some public provider profiles; confirm current affiliation before launch.",
                es: "Listado en algunos perfiles públicos; confirmar afiliación actual antes del lanzamiento.",
            },
            needsClientApproval: false,
        },
    ],

    languages: {
        en: ["English", "Spanish"],
        es: ["Inglés", "Español"],
    },

    serviceAreas: [
        "Hialeah",
        "Miami",
        "Miami Lakes",
        "Doral",
        "Hialeah Gardens",
        "Medley",
        "Miami Springs",
        "Westchester",
        "Kendall",
        "Miami-Dade County",
    ],

    location: {
        label: {
            en: "Hialeah Office",
            es: "Oficina en Hialeah",
        },
        address: contactInfo.address.full,
        city: contactInfo.address.city,
        state: contactInfo.address.state,
        zip: contactInfo.address.zip,
        display: contactInfo.address.display,
    },

    npi: {
        individual: "1215990437",
        organization: "1922061159",
        note: {
            en: "NPI information is included for transparency and should be confirmed with the practice before launch.",
            es: "La información de NPI se incluye por transparencia y debe confirmarse con la práctica antes del lanzamiento.",
        },
    },

    externalProfiles: [
        {
            label: "U.S. News Doctor Profile",
            href: "https://health.usnews.com/doctors/victor-pazos-314378",
        },
        {
            label: "Healthgrades Doctor Profile",
            href: "https://www.healthgrades.com/physician/dr-victor-pazos-yf7gm",
        },
        {
            label: "Healthline FindCare Profile",
            href: "https://care.healthline.com/find-care/provider/dr-victor-pazos-1215990437",
        },
        {
            label: "Florida Department of Health Practitioner Profile",
            href: "https://mqa-internet.doh.state.fl.us/MQASearchServices/HealthCareProviders/Details?LicInd=78136&ProCde=1501",
        },
    ],

    medicalDisclaimer: {
        en: "The information on this website is for general educational purposes only and does not replace medical advice, diagnosis, or treatment from a qualified healthcare professional. If you are experiencing a medical emergency, call 911 immediately.",
        es: "La información en este sitio web es solo para fines educativos generales y no reemplaza el consejo, diagnóstico o tratamiento médico de un profesional de salud calificado. Si está experimentando una emergencia médica, llame al 911 de inmediato.",
    },

    contentReview: {
        reviewedBy: "Victor Pazos, MD",
        lastUpdated: {
            en: "May 2026",
            es: "Mayo 2026",
        },
        approvalRequired: true,
        note: {
            en: "Display the medical content review note only after the doctor/client approves the final content.",
            es: "Mostrar la nota de revisión médica solo después de que el doctor/cliente apruebe el contenido final.",
        },
    },

    seo: {
        title: {
            en: "Victor Pazos, MD | Cardiologist in Hialeah, FL",
            es: "Victor Pazos, MD | Cardiólogo en Hialeah, FL",
        },
        description: {
            en: "Learn about Victor Pazos, MD, a cardiologist in Hialeah, FL serving patients across Miami-Dade with cardiovascular evaluation, heart-health guidance, and bilingual care.",
            es: "Conozca a Victor Pazos, MD, cardiólogo en Hialeah, FL que atiende pacientes de Miami-Dade con evaluación cardiovascular, orientación para la salud del corazón y atención bilingüe.",
        },
        keywords: {
            en: [
                "Victor Pazos MD",
                "cardiologist in Hialeah",
                "cardiologist in Miami",
                "heart doctor Hialeah",
                "interventional cardiologist Miami",
                "cardiology Miami-Dade",
                "Spanish speaking cardiologist Miami",
                "cardiovascular evaluation Hialeah",
                "heart specialist Miami-Dade",
            ],
            es: [
                "Victor Pazos MD",
                "cardiólogo en Hialeah",
                "cardiólogo en Miami",
                "doctor del corazón Hialeah",
                "cardiólogo intervencionista Miami",
                "cardiología Miami-Dade",
                "cardiólogo que habla español Miami",
                "evaluación cardiovascular Hialeah",
                "especialista del corazón Miami-Dade",
            ],
        },
    },
};

export const getDoctorProfile = () => doctorProfile;

export const getDoctorProfileSeo = (language: LanguageCode) => {
    return {
        title: doctorProfile.seo.title[language],
        description: doctorProfile.seo.description[language],
        keywords: doctorProfile.seo.keywords[language],
    };
};

export const getDoctorProfileHighlights = () => doctorProfile.highlights;

export const getDoctorProfileCredentials = () => doctorProfile.credentials;

export const getDoctorEducation = () => doctorProfile.education;

export const getDoctorHospitalAffiliations = () =>
    doctorProfile.hospitalAffiliations;

export const getDoctorExternalProfiles = () => doctorProfile.externalProfiles;

export const getDoctorMedicalDisclaimer = (language: LanguageCode) =>
    doctorProfile.medicalDisclaimer[language];

export const getDoctorContentReview = () => doctorProfile.contentReview;