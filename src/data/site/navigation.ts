// src/data/site/navigation.ts

export type LanguageCode = "en" | "es";

export type NavigationItem = {
    label: Record<LanguageCode, string>;
    href: Record<LanguageCode, string>;
    description?: Record<LanguageCode, string>;
    children?: NavigationItem[];
};

export const mainNavigation: NavigationItem[] = [
    {
        label: {
            en: "Home",
            es: "Inicio",
        },
        href: {
            en: "/",
            es: "/es/",
        },
    },
    {
        label: {
            en: "About",
            es: "Sobre el Doctor",
        },
        href: {
            en: "/about/",
            es: "/es/about/",
        },
        description: {
            en: "Learn about Dr. Victor Pazos, his medical experience, credentials, and approach to cardiology care.",
            es: "Conozca al Dr. Victor Pazos, su experiencia médica, credenciales y enfoque en el cuidado cardiológico.",
        },
    },
    {
        label: {
            en: "Services",
            es: "Servicios",
        },
        href: {
            en: "/services/",
            es: "/es/services/",
        },
        description: {
            en: "Explore cardiology and interventional cardiology services for patients in Hialeah and Miami-Dade.",
            es: "Explore servicios de cardiología y cardiología intervencionista para pacientes en Hialeah y Miami-Dade.",
        },
        children: [
            {
                label: {
                    en: "Cardiology Consultations",
                    es: "Consultas de Cardiología",
                },
                href: {
                    en: "/services/comprehensive-cardiology-consultations/",
                    es: "/es/services/consultas-cardiologia-integral/",
                },
            },
            {
                label: {
                    en: "Echocardiograms",
                    es: "Ecocardiogramas",
                },
                href: {
                    en: "/services/echocardiograms/",
                    es: "/es/services/ecocardiogramas/",
                },
            },
            {
                label: {
                    en: "Nuclear Stress Testing",
                    es: "Prueba de Esfuerzo Nuclear",
                },
                href: {
                    en: "/services/nuclear-stress-testing/",
                    es: "/es/services/prueba-esfuerzo-nuclear/",
                },
            },
            {
                label: {
                    en: "Carotid Ultrasound",
                    es: "Ultrasonido de Carótidas",
                },
                href: {
                    en: "/services/carotid-ultrasound-studies/",
                    es: "/es/services/ultrasonido-carotidas/",
                },
            },
            {
                label: {
                    en: "Hypertension Management",
                    es: "Manejo de Hipertensión",
                },
                href: {
                    en: "/services/hypertension-management/",
                    es: "/es/services/manejo-hipertension/",
                },
            },
            {
                label: {
                    en: "Heart Disease Care",
                    es: "Cuidado de Enfermedad Cardíaca",
                },
                href: {
                    en: "/services/heart-disease-evaluation-treatment/",
                    es: "/es/services/evaluacion-tratamiento-enfermedad-cardiaca/",
                },
            },
        ],
    },
    {
        label: {
            en: "Locations",
            es: "Ubicaciones",
        },
        href: {
            en: "/locations/",
            es: "/es/locations/",
        },
        description: {
            en: "Find cardiology care for patients across Hialeah, Miami, and Miami-Dade County.",
            es: "Encuentre atención cardiológica para pacientes en Hialeah, Miami y Miami-Dade County.",
        },
    },
    {
        label: {
            en: "Patient Info",
            es: "Información para Pacientes",
        },
        href: {
            en: "/patient-info/",
            es: "/es/patient-info/",
        },
        description: {
            en: "Helpful information for new and returning patients before scheduling an appointment.",
            es: "Información útil para pacientes nuevos y recurrentes antes de programar una cita.",
        },
    },
    {
        label: {
            en: "Contact",
            es: "Contacto",
        },
        href: {
            en: "/contact/",
            es: "/es/contact/",
        },
    },
];

export const footerNavigation = {
    practice: [
        {
            label: {
                en: "About Dr. Pazos",
                es: "Sobre el Dr. Pazos",
            },
            href: {
                en: "/about/",
                es: "/es/about/",
            },
        },
        {
            label: {
                en: "Services",
                es: "Servicios",
            },
            href: {
                en: "/services/",
                es: "/es/services/",
            },
        },
        {
            label: {
                en: "Locations",
                es: "Ubicaciones",
            },
            href: {
                en: "/locations/",
                es: "/es/locations/",
            },
        },
        {
            label: {
                en: "Patient Info",
                es: "Información para Pacientes",
            },
            href: {
                en: "/patient-info/",
                es: "/es/patient-info/",
            },
        },
        {
            label: {
                en: "Contact",
                es: "Contacto",
            },
            href: {
                en: "/contact/",
                es: "/es/contact/",
            },
        },
    ],

    services: [
        {
            label: {
                en: "Cardiology Consultations",
                es: "Consultas de Cardiología",
            },
            href: {
                en: "/services/comprehensive-cardiology-consultations/",
                es: "/es/services/consultas-cardiologia-integral/",
            },
        },
        {
            label: {
                en: "Echocardiograms",
                es: "Ecocardiogramas",
            },
            href: {
                en: "/services/echocardiograms/",
                es: "/es/services/ecocardiogramas/",
            },
        },
        {
            label: {
                en: "Nuclear Stress Testing",
                es: "Prueba de Esfuerzo Nuclear",
            },
            href: {
                en: "/services/nuclear-stress-testing/",
                es: "/es/services/prueba-esfuerzo-nuclear/",
            },
        },
        {
            label: {
                en: "Carotid Ultrasound",
                es: "Ultrasonido de Carótidas",
            },
            href: {
                en: "/services/carotid-ultrasound-studies/",
                es: "/es/services/ultrasonido-carotidas/",
            },
        },
        {
            label: {
                en: "Hypertension Management",
                es: "Manejo de Hipertensión",
            },
            href: {
                en: "/services/hypertension-management/",
                es: "/es/services/manejo-hipertension/",
            },
        },
        {
            label: {
                en: "Heart Disease Care",
                es: "Cuidado de Enfermedad Cardíaca",
            },
            href: {
                en: "/services/heart-disease-evaluation-treatment/",
                es: "/es/services/evaluacion-tratamiento-enfermedad-cardiaca/",
            },
        },
    ],

    legal: [
        {
            label: {
                en: "Privacy Policy",
                es: "Política de Privacidad",
            },
            href: {
                en: "/privacy-policy/",
                es: "/es/privacy-policy/",
            },
        },
        {
            label: {
                en: "Medical Disclaimer",
                es: "Aviso Médico",
            },
            href: {
                en: "/medical-disclaimer/",
                es: "/es/medical-disclaimer/",
            },
        },
    ],
} as const;

export const ctaNavigation = {
    call: {
        label: {
            en: "Call Now",
            es: "Llamar ahora",
        },
        shortLabel: {
            en: "Call",
            es: "Llamar",
        },
    },

    email: {
        label: {
            en: "Email the Office",
            es: "Enviar email",
        },
        shortLabel: {
            en: "Email",
            es: "Email",
        },
    },

    appointment: {
        label: {
            en: "Request Appointment",
            es: "Solicitar cita",
        },
        shortLabel: {
            en: "Appointment",
            es: "Cita",
        },
        href: {
            en: "/contact/#appointment-form",
            es: "/es/contact/#appointment-form",
        },
    },

    directions: {
        label: {
            en: "Get Directions",
            es: "Cómo llegar",
        },
        shortLabel: {
            en: "Directions",
            es: "Llegar",
        },
    },
} as const;

export const languageSwitcher = {
    label: {
        en: "Language",
        es: "Idioma",
    },
    options: [
        {
            code: "en",
            label: "English",
            shortLabel: "EN",
        },
        {
            code: "es",
            label: "Español",
            shortLabel: "ES",
        },
    ],
} as const;

export const mobileNavigationLabels = {
    openMenu: {
        en: "Open menu",
        es: "Abrir menú",
    },
    closeMenu: {
        en: "Close menu",
        es: "Cerrar menú",
    },
    menu: {
        en: "Menu",
        es: "Menú",
    },
} as const;