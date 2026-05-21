import { siteConfig } from "../site/siteConfig";
import { contactInfo } from "../site/contact";
import { doctorProfile } from "../doctor/doctorProfile";
import type { CardiologyService } from "../services/cardiologyServices";

type SchemaObject = Record<string, unknown>;

const siteUrl = siteConfig.domain.replace(/\/$/, "");

const absoluteUrl = (path = "/") => {
    if (path.startsWith("http://") || path.startsWith("https://")) {
        return path;
    }

    return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

export const schemaIds = {
    website: `${siteUrl}/#website`,
    organization: `${siteUrl}/#organization`,
    physician: `${siteUrl}/#physician`,
    medicalPractice: `${siteUrl}/#medical-practice`,
    place: `${siteUrl}/#place`,
};

export const getPostalAddressSchema = (): SchemaObject => ({
    "@type": "PostalAddress",
    streetAddress: `${contactInfo.address.street}, ${contactInfo.address.suite}`,
    addressLocality: contactInfo.address.city,
    addressRegion: contactInfo.address.state,
    postalCode: contactInfo.address.zip,
    addressCountry: contactInfo.address.country,
});

export const getWebsiteSchema = (): SchemaObject => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": schemaIds.website,
    name: siteConfig.name,
    url: siteUrl,
    inLanguage: ["en-US", "es-US"],
    publisher: {
        "@id": schemaIds.organization,
    },
});

export const getOrganizationSchema = (): SchemaObject => ({
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": schemaIds.organization,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteUrl,
    telephone: contactInfo.phone.raw,
    email: contactInfo.email.label,
    address: getPostalAddressSchema(),
    areaServed: [
        contactInfo.serviceArea.primaryCity,
        contactInfo.serviceArea.county,
        ...contactInfo.serviceArea.nearbyAreas,
    ],
    sameAs: doctorProfile.externalProfiles.map((profile) => profile.href),
});

export const getPhysicianSchema = (): SchemaObject => ({
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": schemaIds.physician,
    name: doctorProfile.displayName,
    url: siteUrl,
    image: absoluteUrl("/images/doctor/victor-pazos-md.webp"),
    telephone: contactInfo.phone.raw,
    email: contactInfo.email.label,
    address: getPostalAddressSchema(),
    medicalSpecialty: "Cardiovascular",
    knowsLanguage: ["English", "Spanish"],
    worksFor: {
        "@id": schemaIds.organization,
    },
    memberOf: {
        "@id": schemaIds.organization,
    },
    areaServed: doctorProfile.serviceAreas,
    sameAs: doctorProfile.externalProfiles.map((profile) => profile.href),
});

export const getMedicalPracticeSchema = (): SchemaObject => ({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": schemaIds.medicalPractice,
    name: siteConfig.name,
    url: siteUrl,
    telephone: contactInfo.phone.raw,
    email: contactInfo.email.label,
    address: getPostalAddressSchema(),
    image: absoluteUrl(siteConfig.seo.defaultImage),
    medicalSpecialty: "Cardiovascular",
    priceRange: "$$",
    availableLanguage: ["English", "Spanish"],
    founder: {
        "@id": schemaIds.physician,
    },
    employee: {
        "@id": schemaIds.physician,
    },
    areaServed: [
        contactInfo.serviceArea.primaryCity,
        contactInfo.serviceArea.county,
        ...contactInfo.serviceArea.nearbyAreas,
    ],
    hasMap: contactInfo.map.googleMapsUrl,
});

export const getWebPageSchema = ({
    title,
    description,
    path,
    language = "en-US",
}: {
    title: string;
    description: string;
    path: string;
    language?: string;
}): SchemaObject => ({
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: language,
    isPartOf: {
        "@id": schemaIds.website,
    },
    about: {
        "@id": schemaIds.physician,
    },
    primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.seo.defaultImage),
    },
});

export const getServiceSchema = ({
    service,
    language = "en",
}: {
    service: CardiologyService;
    language?: "en" | "es";
}): SchemaObject => ({
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${absoluteUrl(service.href[language])}#service`,
    name: service.title[language],
    description: service.description[language],
    url: absoluteUrl(service.href[language]),
    medicalSpecialty: "Cardiovascular",
    provider: {
        "@id": schemaIds.physician,
    },
    areaServed: doctorProfile.serviceAreas,
});

export const getBreadcrumbSchema = (
    items: {
        name: string;
        href: string;
    }[],
): SchemaObject => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.href),
    })),
});

export const getFaqSchema = (
    faqs: {
        question: string;
        answer: string;
    }[],
): SchemaObject => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
});

export const getGlobalSchema = (): SchemaObject[] => [
    getWebsiteSchema(),
    getOrganizationSchema(),
    getPhysicianSchema(),
    getMedicalPracticeSchema(),
];