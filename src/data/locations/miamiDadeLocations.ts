// src/data/locations/miamiDadeLocations.ts

import type { LanguageCode } from "../site/siteConfig";
import { contactInfo } from "../site/contact";

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
                en: "Cardiologist Serving Miami, FL | Victor Pazos, MD",
                es: "Cardiólogo sirviendo a Miami, FL | Victor Pazos, MD",
            },
            description: {
                en: "Victor Pazos, MD. PA. serves Miami patients looking for cardiology and interventional cardiology care near Miami-Dade.",
                es: "Victor Pazos, MD. PA. atiende pacientes de Miami que buscan atención en cardiología y cardiología intervencionista cerca de Miami-Dade.",
            },
            keywords: {
                en: [
                    "cardiologist in Miami",
                    "heart doctor Miami",
                    "Miami cardiology",
                    "interventional cardiologist Miami",
                    "cardiology Miami-Dade",
                ],
                es: [
                    "cardiólogo en Miami",
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