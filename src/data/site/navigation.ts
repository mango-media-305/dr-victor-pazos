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
            es: "/es/sobre-el-doctor/",
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
            es: "/es/servicios/",
        },
        description: {
            en: "Explore cardiology and interventional cardiology services for patients in Hialeah and Miami-Dade.",
            es: "Explore servicios de cardiología y cardiología intervencionista para pacientes en Hialeah y Miami-Dade.",
        },
        children: [
            {
                label: {
                    en: "Cardiology Consultation",
                    es: "Consulta Cardiológica",
                },
                href: {
                    en: "/services/cardiology-consultation/",
                    es: "/es/servicios/consulta-cardiologica/",
                },
            },
            {
                label: {
                    en: "Interventional Cardiology",
                    es: "Cardiología Intervencionista",
                },
                href: {
                    en: "/services/interventional-cardiology/",
                    es: "/es/servicios/cardiologia-intervencionista/",
                },
            },
            {
                label: {
                    en: "Chest Pain Evaluation",
                    es: "Evaluación de Dolor en el Pecho",
                },
                href: {
                    en: "/services/chest-pain-evaluation/",
                    es: "/es/servicios/evaluacion-dolor-pecho/",
                },
            },
            {
                label: {
                    en: "High Blood Pressure Care",
                    es: "Cuidado de Presión Alta",
                },
                href: {
                    en: "/services/hypertension/",
                    es: "/es/servicios/presion-alta/",
                },
            },
            {
                label: {
                    en: "EKG / ECG Testing",
                    es: "Prueba EKG / ECG",
                },
                href: {
                    en: "/services/ekg-ecg-testing/",
                    es: "/es/servicios/prueba-ekg-ecg/",
                },
            },
            {
                label: {
                    en: "Stress Test",
                    es: "Prueba de Esfuerzo",
                },
                href: {
                    en: "/services/stress-test/",
                    es: "/es/servicios/prueba-de-esfuerzo/",
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
            es: "/es/ubicaciones/",
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
            es: "/es/informacion-para-pacientes/",
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
            es: "/es/contacto/",
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
                es: "/es/sobre-el-doctor/",
            },
        },
        {
            label: {
                en: "Services",
                es: "Servicios",
            },
            href: {
                en: "/services/",
                es: "/es/servicios/",
            },
        },
        {
            label: {
                en: "Locations",
                es: "Ubicaciones",
            },
            href: {
                en: "/locations/",
                es: "/es/ubicaciones/",
            },
        },
        {
            label: {
                en: "Patient Info",
                es: "Información para Pacientes",
            },
            href: {
                en: "/patient-info/",
                es: "/es/informacion-para-pacientes/",
            },
        },
        {
            label: {
                en: "Contact",
                es: "Contacto",
            },
            href: {
                en: "/contact/",
                es: "/es/contacto/",
            },
        },
    ],

    services: [
        {
            label: {
                en: "Cardiology Consultation",
                es: "Consulta Cardiológica",
            },
            href: {
                en: "/services/cardiology-consultation/",
                es: "/es/servicios/consulta-cardiologica/",
            },
        },
        {
            label: {
                en: "Interventional Cardiology",
                es: "Cardiología Intervencionista",
            },
            href: {
                en: "/services/interventional-cardiology/",
                es: "/es/servicios/cardiologia-intervencionista/",
            },
        },
        {
            label: {
                en: "Chest Pain Evaluation",
                es: "Evaluación de Dolor en el Pecho",
            },
            href: {
                en: "/services/chest-pain-evaluation/",
                es: "/es/servicios/evaluacion-dolor-pecho/",
            },
        },
        {
            label: {
                en: "High Blood Pressure Care",
                es: "Cuidado de Presión Alta",
            },
            href: {
                en: "/services/hypertension/",
                es: "/es/servicios/presion-alta/",
            },
        },
        {
            label: {
                en: "EKG / ECG Testing",
                es: "Prueba EKG / ECG",
            },
            href: {
                en: "/services/ekg-ecg-testing/",
                es: "/es/servicios/prueba-ekg-ecg/",
            },
        },
        {
            label: {
                en: "Stress Test",
                es: "Prueba de Esfuerzo",
            },
            href: {
                en: "/services/stress-test/",
                es: "/es/servicios/prueba-de-esfuerzo/",
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
                es: "/es/politica-de-privacidad/",
            },
        },
        {
            label: {
                en: "Medical Disclaimer",
                es: "Aviso Médico",
            },
            href: {
                en: "/medical-disclaimer/",
                es: "/es/aviso-medico/",
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
            es: "/es/contacto/#appointment-form",
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