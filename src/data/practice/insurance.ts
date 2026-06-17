// src/data/practice/insurance.ts

import type { LanguageCode } from "../site/siteConfig";

export interface InsurancePlan {
    id: string;
    name: string;
    logoSrc?: string;
    logoAlt?: string;
    href?: string;
    note?: Record<LanguageCode, string>;
    isFeatured?: boolean;
}

export interface InsuranceGroup {
    id: string;
    title: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
    plans: InsurancePlan[];
}

export const insuranceGroups: InsuranceGroup[] = [
    {
        id: "medicare",
        title: {
            en: "Medicare Plans Accepted",
            es: "Planes Medicare aceptados",
        },
        description: {
            en: "The office accepts Traditional Medicare as well as many Medicare Advantage plans.",
            es: "La oficina acepta Medicare tradicional y muchos planes Medicare Advantage.",
        },
        plans: [
            {
                id: "traditional-medicare",
                name: "Traditional Medicare",
                logoSrc: "/images/insurance/medicare.webp",
                logoAlt: "Medicare logo",
                isFeatured: true,
            },
            {
                id: "aetna-medicare",
                name: "Aetna Medicare",
                logoSrc: "/images/insurance/aetna.webp",
                logoAlt: "Aetna logo",
                isFeatured: true,
            },
            {
                id: "preferred-care-partners",
                name: "Preferred Care Partners",
                logoSrc: "/images/insurance/preferred-care-partners.webp",
                logoAlt: "Preferred Care Partners logo",
            },
            {
                id: "preferred-network",
                name: "Preferred Network",
                logoSrc: "/images/insurance/preferred-network.webp",
                logoAlt: "Preferred Network logo",
            },
            {
                id: "humana-medicare",
                name: "Humana Medicare",
                logoSrc: "/images/insurance/humana.webp",
                logoAlt: "Humana logo",
                isFeatured: true,
            },
            {
                id: "careplus",
                name: "CarePlus",
                logoSrc: "/images/insurance/careplus.webp",
                logoAlt: "CarePlus logo",
                isFeatured: true,
            },
            {
                id: "simply-healthcare",
                name: "Simply Healthcare",
                logoSrc: "/images/insurance/simply-healthcare.webp",
                logoAlt: "Simply Healthcare logo",
            },
            {
                id: "doctors-healthcare-plans",
                name: "Doctors HealthCare Plans",
                logoSrc: "/images/insurance/doctors-healthcare-plans.webp",
                logoAlt: "Doctors HealthCare Plans logo",
            },
            {
                id: "solis-health-plans",
                name: "Solis Health Plans",
                logoSrc: "/images/insurance/solis-health-plans.webp",
                logoAlt: "Solis Health Plans logo",
            },
            {
                id: "healthsun-health-plans",
                name: "HealthSun Health Plans",
                logoSrc: "/images/insurance/healthsun.webp",
                logoAlt: "HealthSun Health Plans logo",
            },
            {
                id: "molina-medicare",
                name: "Molina Medicare",
                logoSrc: "/images/insurance/molina-healthcare.webp",
                logoAlt: "Molina Healthcare logo",
            },
            {
                id: "wellcare",
                name: "Wellcare",
                logoSrc: "/images/insurance/wellcare.webp",
                logoAlt: "Wellcare logo",
            },
        ],
    },
    {
        id: "medicaid",
        title: {
            en: "Medicaid Plans Accepted",
            es: "Planes Medicaid aceptados",
        },
        description: {
            en: "The office currently accepts the following Medicaid plans.",
            es: "La oficina actualmente acepta los siguientes planes Medicaid.",
        },
        plans: [
            {
                id: "aetna-better-health",
                name: "Aetna Better Health",
                logoSrc: "/images/insurance/aetna-better-health.webp",
                logoAlt: "Aetna Better Health logo",
                isFeatured: true,
            },
            {
                id: "molina-healthcare",
                name: "Molina Healthcare",
                logoSrc: "/images/insurance/molina-healthcare.webp",
                logoAlt: "Molina Healthcare logo",
                isFeatured: true,
            },
            {
                id: "sunshine-health",
                name: "Sunshine Health",
                logoSrc: "/images/insurance/sunshine-health.webp",
                logoAlt: "Sunshine Health logo",
                isFeatured: true,
            },
        ],
    },
    {
        id: "commercial",
        title: {
            en: "Commercial Insurance Plans Accepted",
            es: "Planes comerciales aceptados",
        },
        description: {
            en: "The office accepts many commercial insurance plans.",
            es: "La oficina acepta muchos planes comerciales.",
        },
        plans: [
            {
                id: "unitedhealthcare",
                name: "UnitedHealthcare",
                logoSrc: "/images/insurance/unitedhealthcare.webp",
                logoAlt: "UnitedHealthcare logo",
                isFeatured: true,
            },
            {
                id: "molina-commercial",
                name: "Molina Healthcare",
                logoSrc: "/images/insurance/molina-healthcare.webp",
                logoAlt: "Molina Healthcare logo",
            },
            {
                id: "oscar-health",
                name: "Oscar Health",
                logoSrc: "/images/insurance/oscar-health.webp",
                logoAlt: "Oscar Health logo",
            },
            {
                id: "ambetter",
                name: "Ambetter",
                logoSrc: "/images/insurance/ambetter.webp",
                logoAlt: "Ambetter logo",
            },
            {
                id: "blue-cross-blue-shield-ppo",
                name: "Blue Cross Blue Shield",
                logoSrc: "/images/insurance/blue-cross-blue-shield.webp",
                logoAlt: "Blue Cross Blue Shield logo",
                note: {
                    en: "PPO plans only",
                    es: "Solo planes PPO",
                },
                isFeatured: true,
            },
            {
                id: "humana-commercial",
                name: "Humana",
                logoSrc: "/images/insurance/humana.webp",
                logoAlt: "Humana logo",
            },
            {
                id: "anthem",
                name: "Anthem",
                logoSrc: "/images/insurance/anthem.webp",
                logoAlt: "Anthem logo",
            },
        ],
    },
];

export const insuranceDisclaimer = {
    en: "This list is not all-inclusive. Please contact the office to verify your benefits and coverage options before scheduling your visit.",
    es: "Esta lista no incluye todos los planes. Por favor contacte la oficina para verificar sus beneficios y opciones de cobertura antes de programar su visita.",
};

export const insuranceCta = {
    en: {
        title: "Need help verifying your insurance?",
        description:
            "Call the office and our staff will help verify your benefits and coverage options.",
        buttonLabel: "Call to Verify Insurance",
    },
    es: {
        title: "¿Necesita ayuda verificando su seguro?",
        description:
            "Llame a la oficina y nuestro personal le ayudará a verificar sus beneficios y opciones de cobertura.",
        buttonLabel: "Llamar para verificar seguro",
    },
};