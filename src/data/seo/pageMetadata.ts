// src/data/seo/pageMetadata.ts

import type { LanguageCode } from "../site/siteConfig";

export interface PageMetadata {
    title: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
    canonical: Record<LanguageCode, string>;
}

export const homeMetadata: PageMetadata = {
    title: {
        en: "Cardiologist in Hialeah, FL | Victor Pazos, MD",
        es: "Cardiólogo en Hialeah, FL | Victor Pazos, MD",
    },
    description: {
        en: "Looking for a cardiologist in Hialeah, FL? Victor Pazos, MD provides cardiology and interventional cardiology care for patients across Miami-Dade.",
        es: "¿Busca un cardiólogo en Hialeah, FL? Victor Pazos, MD ofrece atención en cardiología y cardiología intervencionista para pacientes de Miami-Dade.",
    },
    canonical: {
        en: "/",
        es: "/es/",
    },
};

export const aboutMetadata: PageMetadata = {
    title: {
        en: "About Victor Pazos, MD | Cardiologist in Hialeah, FL",
        es: "Sobre Victor Pazos, MD | Cardiólogo en Hialeah, FL",
    },
    description: {
        en: "Learn about Victor Pazos, MD, a cardiologist in Hialeah serving Miami-Dade patients with cardiovascular evaluation, bilingual care, and heart-health guidance.",
        es: "Conozca a Victor Pazos, MD, cardiólogo en Hialeah que atiende pacientes de Miami-Dade con evaluación cardiovascular, atención bilingüe y orientación cardíaca.",
    },
    canonical: {
        en: "/about/",
        es: "/es/sobre-nosotros/",
    },
};

export const servicesIndexMetadata: PageMetadata = {
    title: {
        en: "Cardiology Services in Hialeah, FL | Victor Pazos, MD",
        es: "Servicios de Cardiología en Hialeah, FL | Victor Pazos, MD",
    },
    description: {
        en: "Explore cardiology services in Hialeah, including chest pain evaluation, hypertension care, EKG testing, arrhythmia evaluation, and heart disease management.",
        es: "Explore servicios de cardiología en Hialeah, incluyendo evaluación de dolor en el pecho, hipertensión, EKG, arritmias y manejo de enfermedades del corazón.",
    },
    canonical: {
        en: "/services/",
        es: " /es/services/",
    },
};

export const locationsIndexMetadata: PageMetadata = {
    title: {
        en: "Cardiologist Serving Miami-Dade | Hialeah Office",
        es: "Cardiólogo sirviendo Miami-Dade | Oficina en Hialeah",
    },
    description: {
        en: "Victor Pazos, MD serves cardiology patients from Hialeah, Miami, Miami Lakes, Doral, Hialeah Gardens, Miami Gardens, and nearby Miami-Dade communities.",
        es: "Victor Pazos, MD atiende pacientes de cardiología de Hialeah, Miami, Miami Lakes, Doral, Hialeah Gardens, Miami Gardens y comunidades cercanas de Miami-Dade.",
    },
    canonical: {
        en: "/locations/",
        es: " /es/locations/",
    },
};

export const contactMetadata: PageMetadata = {
    title: {
        en: "Contact Victor Pazos, MD | Cardiology Office in Hialeah",
        es: "Contactar a Victor Pazos, MD | Oficina de Cardiología en Hialeah",
    },
    description: {
        en: "Contact the Hialeah cardiology office of Victor Pazos, MD to request an appointment, call the office, or get directions.",
        es: "Contacte la oficina de cardiología en Hialeah de Victor Pazos, MD para solicitar una cita, llamar o ver direcciones.",
    },
    canonical: {
        en: "/contact/",
        es: "/es/contacto/",
    },
};