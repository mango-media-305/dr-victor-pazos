// src/data/site/contact.ts

export const contactInfo = {
    practiceName: "Cardiovascular and Interventional Center of South Florida",

    phone: {
        label: "(305) 835-0551",
        href: "tel:+13058350551",
        raw: "+13058350551",
    },

    email: {
        label: "admin@victorpazosmd.com",
        href: "mailto:admin@victorpazosmd.com",
    },

    address: {
        street: "7100 W 20th Ave",
        suite: "Suite G-166",
        building: "Palmetto Medical Plaza",
        city: "Hialeah",
        state: "FL",
        zip: "33016",
        country: "US",
        full: "7100 W 20th Ave, Suite G-166, Palmetto Medical Plaza, Hialeah, FL 33016",
        display: "7100 W 20th Ave, Suite G-166, Palmetto Medical Plaza, Hialeah, FL 33016",
    },

    fax: {
        label: "(305) 696-7704",
        href: "fax:+13056967704",
        raw: "+13056967704",
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
            en: "Office hours are Monday through Thursday from 8:00 AM to 4:00 PM and Friday from 7:30 AM to 1:00 PM.",
            es: "El horario de oficina es de lunes a jueves de 8:00 AM a 4:00 PM y viernes de 7:30 AM a 1:00 PM.",
        },
        weekly: [
            {
                day: { en: "Monday", es: "Lunes" },
                hours: { en: "8:00 AM – 4:00 PM", es: "8:00 AM – 4:00 PM" },
            },
            {
                day: { en: "Tuesday", es: "Martes" },
                hours: { en: "8:00 AM – 4:00 PM", es: "8:00 AM – 4:00 PM" },
            },
            {
                day: { en: "Wednesday", es: "Miércoles" },
                hours: { en: "8:00 AM – 4:00 PM", es: "8:00 AM – 4:00 PM" },
            },
            {
                day: { en: "Thursday", es: "Jueves" },
                hours: { en: "8:00 AM – 4:00 PM", es: "8:00 AM – 4:00 PM" },
            },
            {
                day: { en: "Friday", es: "Viernes" },
                hours: { en: "7:30 AM – 1:00 PM", es: "7:30 AM – 1:00 PM" },
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