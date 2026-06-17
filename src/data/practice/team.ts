import type { LanguageCode } from "../site/siteConfig";

export interface TeamMember {
    id: string;
    name: string;
    role: Record<LanguageCode, string>;
    group: "provider" | "administration" | "clinical" | "diagnostic";
    bio: Record<LanguageCode, string>;
    priority: number;
}

export const teamMembers: TeamMember[] = [
    {
        id: "victor-pazos-md",
        name: "Dr. Victor Pazos, MD",
        role: {
            en: "Cardiologist & Medical Director",
            es: "Cardiólogo y Director Médico",
        },
        group: "provider",
        bio: {
            en: "Dr. Victor Pazos is a highly respected cardiologist dedicated to providing comprehensive cardiovascular care to patients throughout South Florida. His approach emphasizes prevention, early detection, patient education, and individualized treatment plans.",
            es: "El Dr. Victor Pazos es un cardiólogo dedicado a brindar cuidado cardiovascular integral a pacientes del sur de Florida. Su enfoque enfatiza la prevención, la detección temprana, la educación del paciente y planes de tratamiento individualizados.",
        },
        priority: 1,
    },
    {
        id: "dayami-rodriguez-arnp",
        name: "Dayami Rodriguez, ARNP",
        role: {
            en: "Nurse Practitioner",
            es: "Enfermera Practicante",
        },
        group: "provider",
        bio: {
            en: "Dayami Rodriguez works closely with Dr. Pazos to provide comprehensive patient care, including evaluations, treatment planning, patient education, and ongoing management of cardiovascular conditions.",
            es: "Dayami Rodriguez trabaja junto al Dr. Pazos para brindar cuidado integral al paciente, incluyendo evaluaciones, planificación de tratamiento, educación del paciente y manejo continuo de condiciones cardiovasculares.",
        },
        priority: 2,
    },
    {
        id: "brian-valle-do",
        name: "Brian Valle, DO",
        role: {
            en: "Interventional Cardiologist",
            es: "Cardiólogo Intervencionista",
        },
        group: "provider",
        bio: {
            en: "Dr. Brian Valle collaborates with the practice to perform specialized cardiovascular procedures for qualifying patients, including Cardiac Catheterizations and Transesophageal Echocardiograms.",
            es: "El Dr. Brian Valle colabora con la práctica realizando procedimientos cardiovasculares especializados para pacientes que califican, incluyendo cateterismos cardíacos y ecocardiogramas transesofágicos.",
        },
        priority: 3,
    },
];