// src/data/site/contact.ts

export const contactInfo = {
    practiceName: "Victor Pazos, MD. PA.",

    phone: {
        label: "(305) 835-0551",
        href: "tel:+13058350551",
        raw: "+13058350551",
    },

    email: {
        label: "johndoe@testing.com",
        href: "mailto:johndoe@testing.com",
    },

    address: {
        street: "7100 W 20th Avenue",
        suite: "Suite G166",
        city: "Hialeah",
        state: "FL",
        zip: "33016",
        country: "US",
        full: "7100 W 20th Avenue Suite G166, Hialeah, FL 33016",
        display: "7100 W 20th Avenue, Suite G166, Hialeah, FL 33016",
    },

    map: {
        googleMapsUrl:
            "https://www.google.com/maps/search/?api=1&query=7100%20W%2020th%20Avenue%20Suite%20G166%2C%20Hialeah%2C%20FL%2033016",
        directionsLabel: {
            en: "Get Directions",
            es: "Cómo llegar",
        },
        embedUrl:
            "https://www.google.com/maps?q=7100%20W%2020th%20Avenue%20Suite%20G166%2C%20Hialeah%2C%20FL%2033016&output=embed",
    },

    hours: {
        note: {
            en: "Office hours will be updated soon. Please call the office to confirm availability.",
            es: "El horario de atención será actualizado pronto. Por favor llame a la oficina para confirmar disponibilidad.",
        },
        weekly: [
            {
                day: {
                    en: "Monday",
                    es: "Lunes",
                },
                hours: {
                    en: "Call for availability",
                    es: "Llamar para confirmar",
                },
            },
            {
                day: {
                    en: "Tuesday",
                    es: "Martes",
                },
                hours: {
                    en: "Call for availability",
                    es: "Llamar para confirmar",
                },
            },
            {
                day: {
                    en: "Wednesday",
                    es: "Miércoles",
                },
                hours: {
                    en: "Call for availability",
                    es: "Llamar para confirmar",
                },
            },
            {
                day: {
                    en: "Thursday",
                    es: "Jueves",
                },
                hours: {
                    en: "Call for availability",
                    es: "Llamar para confirmar",
                },
            },
            {
                day: {
                    en: "Friday",
                    es: "Viernes",
                },
                hours: {
                    en: "Call for availability",
                    es: "Llamar para confirmar",
                },
            },
        ],
    },

    appointment: {
        priority: ["phone", "email", "form"],

        primaryCta: {
            en: "Call to Schedule",
            es: "Llamar para cita",
        },

        secondaryCta: {
            en: "Email the Office",
            es: "Enviar email",
        },

        formCta: {
            en: "Request an Appointment",
            es: "Solicitar una cita",
        },

        disclaimer: {
            en: "This form is for appointment requests only. If you are experiencing a medical emergency, call 911 immediately.",
            es: "Este formulario es solo para solicitudes de cita. Si está experimentando una emergencia médica, llame al 911 de inmediato.",
        },
    },

    languages: {
        en: "English",
        es: "Spanish",
        display: {
            en: "English & Spanish",
            es: "Inglés y español",
        },
    },

    serviceArea: {
        county: "Miami-Dade County",
        primaryCity: "Hialeah",
        nearbyAreas: [
            "Miami",
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
    },
} as const;

export type ContactInfo = typeof contactInfo;