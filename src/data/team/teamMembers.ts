import type { LanguageCode } from "../site/siteConfig";

export type TeamDepartmentId =
    | "clinical-leadership"
    | "patient-services"
    | "diagnostic-services";

export type TeamMemberSchemaType =
    | "Physician"
    | "Person";

export interface LocalizedTeamContent {
    en: string;
    es: string;
}

export interface TeamMemberImage {
    src: string;
    alt: LocalizedTeamContent;
    position?: string;
}

export interface TeamMember {
    id: string;
    name: string;
    credentials?: string;
    displayName: string;
    role: LocalizedTeamContent;
    department: TeamDepartmentId;
    image: TeamMemberImage;
    shortBio: LocalizedTeamContent;
    biography: Record<LanguageCode, string[]>;
    schemaType: TeamMemberSchemaType;
    featured: boolean;
    priority: number;
}

export interface TeamDepartment {
    id: TeamDepartmentId;
    label: LocalizedTeamContent;
    title: LocalizedTeamContent;
    description: LocalizedTeamContent;
    priority: number;
}

export const teamPageContent = {
    introduction: {
        en: "At Cardiovascular and Interventional Center of South Florida, our experienced and compassionate team provides exceptional cardiovascular care. We work together to ensure every patient receives personalized attention, timely service, and high-quality medical care.",
        es: "En Cardiovascular and Interventional Center of South Florida, nuestro equipo experimentado y compasivo ofrece atención cardiovascular de alta calidad. Trabajamos juntos para asegurar que cada paciente reciba atención personalizada, servicio oportuno y cuidado médico de excelencia.",
    },

    collaborativeCare: {
        title: {
            en: "Collaborative cardiovascular care",
            es: "Atención cardiovascular colaborativa",
        },
        description: {
            en: "Dr. Victor Pazos works closely with Nurse Practitioner Dayami Rodriguez, ARNP, and collaborating physician Brian Valle, DO. Together with the clinical, administrative, and diagnostic teams, they coordinate patient care from the initial appointment through testing, treatment planning, procedures, and follow-up.",
            es: "El Dr. Victor Pazos trabaja estrechamente con la enfermera practicante Dayami Rodriguez, ARNP, y el médico colaborador Brian Valle, DO. Junto con los equipos clínico, administrativo y diagnóstico, coordinan la atención del paciente desde la cita inicial hasta las pruebas, la planificación del tratamiento, los procedimientos y el seguimiento.",
        },
    },

    commitment: {
        title: {
            en: "Our commitment to patients",
            es: "Nuestro compromiso con los pacientes",
        },
        description: {
            en: "Our team is dedicated to delivering compassionate, personalized cardiovascular care in a professional and welcoming environment. We strive to provide exceptional service, advanced diagnostic testing, clear communication, and individualized treatment plans focused on achieving the best possible outcomes.",
            es: "Nuestro equipo está dedicado a ofrecer atención cardiovascular compasiva y personalizada en un ambiente profesional y acogedor. Nos esforzamos por proporcionar un servicio excepcional, pruebas diagnósticas avanzadas, comunicación clara y planes de tratamiento individualizados enfocados en lograr los mejores resultados posibles.",
        },
    },
} as const;

export const teamDepartments: TeamDepartment[] = [
    {
        id: "clinical-leadership",
        label: {
            en: "Clinical leadership",
            es: "Liderazgo clínico",
        },
        title: {
            en: "Physicians and advanced clinical care",
            es: "Médicos y atención clínica avanzada",
        },
        description: {
            en: "Our clinical leadership team evaluates cardiovascular concerns, develops individualized care plans, educates patients, and coordinates advanced cardiac procedures when appropriate.",
            es: "Nuestro equipo de liderazgo clínico evalúa las necesidades cardiovasculares, desarrolla planes de atención individualizados, educa a los pacientes y coordina procedimientos cardíacos avanzados cuando son apropiados.",
        },
        priority: 1,
    },
    {
        id: "patient-services",
        label: {
            en: "Patient services",
            es: "Servicios al paciente",
        },
        title: {
            en: "Supporting every step of the patient experience",
            es: "Apoyando cada etapa de la experiencia del paciente",
        },
        description: {
            en: "Our administrative and clinical support professionals help patients with scheduling, registration, referrals, insurance authorizations, documentation, and the coordination of their visits.",
            es: "Nuestros profesionales administrativos y de apoyo clínico ayudan a los pacientes con citas, registro, referidos, autorizaciones de seguro, documentación y coordinación de sus visitas.",
        },
        priority: 2,
    },
    {
        id: "diagnostic-services",
        label: {
            en: "Diagnostic services team",
            es: "Equipo de servicios diagnósticos",
        },
        title: {
            en: "Advanced cardiovascular diagnostic testing",
            es: "Pruebas diagnósticas cardiovasculares avanzadas",
        },
        description: {
            en: "Our diagnostic technologists perform specialized cardiovascular studies that help the clinical team assess heart and vascular health and make informed care decisions.",
            es: "Nuestros tecnólogos diagnósticos realizan estudios cardiovasculares especializados que ayudan al equipo clínico a evaluar la salud del corazón y los vasos sanguíneos y tomar decisiones informadas.",
        },
        priority: 3,
    },
];

export const teamMembers: TeamMember[] = [
    {
        id: "victor-pazos-md",
        name: "Victor Pazos",
        credentials: "MD",
        displayName: "Victor Pazos, MD",
        role: {
            en: "Cardiologist & Medical Director",
            es: "Cardiólogo y Director Médico",
        },
        department: "clinical-leadership",
        image: {
            src: "/images/doctor/victor-pazos-md.webp",
            alt: {
                en: "Victor Pazos, MD, Cardiologist and Medical Director",
                es: "Victor Pazos, MD, Cardiólogo y Director Médico",
            },
            position: "center",
        },
        shortBio: {
            en: "Dr. Victor Pazos provides comprehensive cardiovascular care focused on prevention, diagnosis, personalized treatment, patient education, and long-term heart health.",
            es: "El Dr. Victor Pazos ofrece atención cardiovascular integral enfocada en prevención, diagnóstico, tratamiento personalizado, educación del paciente y salud cardíaca a largo plazo.",
        },
        biography: {
            en: [
                "Dr. Victor Pazos is a highly respected cardiologist dedicated to providing comprehensive cardiovascular care to patients throughout South Florida. With extensive experience in the prevention, diagnosis, and treatment of heart and vascular diseases, he is committed to delivering personalized, evidence-based care focused on improving patient outcomes and quality of life.",
                "As Medical Director of Cardiovascular and Interventional Center of South Florida, Dr. Pazos combines advanced diagnostic technology with compassionate patient care. His approach emphasizes prevention, early detection, patient education, and individualized treatment plans designed around each patient’s healthcare needs.",
                "Dr. Pazos provides comprehensive cardiovascular evaluations and manages conditions including coronary artery disease, hypertension, congestive heart failure, arrhythmias, peripheral vascular disease, and other cardiovascular concerns.",
                "He uses advanced non-invasive diagnostic testing to assess cardiovascular health, clarify symptoms, identify risk factors, and develop appropriate treatment strategies.",
            ],
            es: [
                "El Dr. Victor Pazos es un cardiólogo altamente respetado dedicado a ofrecer atención cardiovascular integral a pacientes de todo el sur de Florida. Con amplia experiencia en la prevención, diagnóstico y tratamiento de enfermedades del corazón y los vasos sanguíneos, está comprometido con ofrecer atención personalizada y basada en evidencia enfocada en mejorar los resultados y la calidad de vida del paciente.",
                "Como Director Médico de Cardiovascular and Interventional Center of South Florida, el Dr. Pazos combina tecnología diagnóstica avanzada con atención compasiva. Su enfoque enfatiza la prevención, detección temprana, educación del paciente y planes de tratamiento individualizados diseñados según las necesidades de cada persona.",
                "El Dr. Pazos ofrece evaluaciones cardiovasculares integrales y maneja condiciones como enfermedad de las arterias coronarias, hipertensión, insuficiencia cardíaca congestiva, arritmias, enfermedad vascular periférica y otras condiciones cardiovasculares.",
                "Utiliza pruebas diagnósticas no invasivas avanzadas para evaluar la salud cardiovascular, aclarar síntomas, identificar factores de riesgo y desarrollar estrategias de tratamiento apropiadas.",
            ],
        },
        schemaType: "Physician",
        featured: true,
        priority: 1,
    },
    {
        id: "dayami-rodriguez-arnp",
        name: "Dayami Rodriguez",
        credentials: "ARNP",
        displayName: "Dayami Rodriguez, ARNP",
        role: {
            en: "Nurse Practitioner",
            es: "Enfermera Practicante",
        },
        department: "clinical-leadership",
        image: {
            src: "/images/team/dayami-rodriguez-arnp.webp",
            alt: {
                en: "Dayami Rodriguez, ARNP, Nurse Practitioner",
                es: "Dayami Rodriguez, ARNP, Enfermera Practicante",
            },
            position: "center",
        },
        shortBio: {
            en: "Dayami Rodriguez, ARNP works closely with Dr. Pazos to provide cardiovascular evaluations, treatment support, patient education, and ongoing condition management.",
            es: "Dayami Rodriguez, ARNP trabaja estrechamente con el Dr. Pazos para ofrecer evaluaciones cardiovasculares, apoyo en el tratamiento, educación del paciente y manejo continuo de condiciones.",
        },
        biography: {
            en: [
                "Dayami Rodriguez is an experienced Advanced Registered Nurse Practitioner who works closely with Dr. Pazos to provide comprehensive patient care.",
                "She assists with cardiovascular evaluations, treatment planning, patient education, follow-up care, and the ongoing management of cardiovascular conditions.",
            ],
            es: [
                "Dayami Rodriguez es una enfermera practicante registrada avanzada con experiencia que trabaja estrechamente con el Dr. Pazos para ofrecer atención integral al paciente.",
                "Ella colabora con evaluaciones cardiovasculares, planificación del tratamiento, educación del paciente, seguimiento y manejo continuo de condiciones cardiovasculares.",
            ],
        },
        schemaType: "Person",
        featured: true,
        priority: 2,
    },
    {
        id: "brian-valle-do",
        name: "Brian Valle",
        credentials: "DO",
        displayName: "Brian Valle, DO",
        role: {
            en: "Interventional Cardiologist",
            es: "Cardiólogo Intervencionista",
        },
        department: "clinical-leadership",
        image: {
            src: "/images/team/brian-valle-do.webp",
            alt: {
                en: "Brian Valle, DO, Interventional Cardiologist",
                es: "Brian Valle, DO, Cardiólogo Intervencionista",
            },
            position: "center",
        },
        shortBio: {
            en: "Brian Valle, DO collaborates with the practice to perform specialized cardiovascular procedures for qualifying patients, including Cardiac Catheterizations and Transesophageal Echocardiograms.",
            es: "Brian Valle, DO colabora con la práctica para realizar procedimientos cardiovasculares especializados a pacientes que califican, incluyendo cateterismos cardíacos y ecocardiogramas transesofágicos.",
        },
        biography: {
            en: [
                "Dr. Brian Valle collaborates with the practice to perform specialized cardiovascular procedures for Dr. Pazos’ patients.",
                "These procedures include Cardiac Catheterizations, also known as Cardiac Cath, and Transesophageal Echocardiograms, also known as TEE, for qualifying patients who require advanced diagnostic or interventional cardiac care.",
            ],
            es: [
                "El Dr. Brian Valle colabora con la práctica para realizar procedimientos cardiovasculares especializados a los pacientes del Dr. Pazos.",
                "Estos procedimientos incluyen cateterismos cardíacos, también conocidos como Cardiac Cath, y ecocardiogramas transesofágicos, también conocidos como TEE, para pacientes que califican y necesitan atención cardíaca diagnóstica o intervencionista avanzada.",
            ],
        },
        schemaType: "Physician",
        featured: true,
        priority: 3,
    },
    {
        id: "maray-garcia",
        name: "Maray Garcia",
        displayName: "Maray Garcia",
        role: {
            en: "Administrator & Office Manager",
            es: "Administradora y Gerente de Oficina",
        },
        department: "patient-services",
        image: {
            src: "/images/team/maray-garcia.webp",
            alt: {
                en: "Maray Garcia, Administrator and Office Manager",
                es: "Maray Garcia, Administradora y Gerente de Oficina",
            },
            position: "center",
        },
        shortBio: {
            en: "Maray Garcia oversees daily practice operations, supports patients and staff, and helps ensure an organized, efficient, and welcoming office experience.",
            es: "Maray Garcia supervisa las operaciones diarias de la práctica, apoya a pacientes y personal y ayuda a mantener una experiencia organizada, eficiente y acogedora.",
        },
        biography: {
            en: [
                "Maray Garcia oversees the daily operations of the practice, ensuring efficient patient care, administrative excellence, and a welcoming experience for every patient.",
                "With extensive healthcare administration experience, she coordinates office operations and provides support to patients, physicians, and staff.",
            ],
            es: [
                "Maray Garcia supervisa las operaciones diarias de la práctica, asegurando atención eficiente, excelencia administrativa y una experiencia acogedora para cada paciente.",
                "Con amplia experiencia en administración de servicios de salud, coordina las operaciones de la oficina y apoya a pacientes, médicos y personal.",
            ],
        },
        schemaType: "Person",
        featured: false,
        priority: 4,
    },
    {
        id: "ernesto-pazos",
        name: "Ernesto Pazos",
        displayName: "Ernesto Pazos",
        role: {
            en: "Procedure Authorization & Referral Coordinator",
            es: "Coordinador de Autorizaciones de Procedimientos y Referidos",
        },
        department: "patient-services",
        image: {
            src: "/images/team/ernesto-pazos.webp",
            alt: {
                en: "Ernesto Pazos, Procedure Authorization and Referral Coordinator",
                es: "Ernesto Pazos, Coordinador de Autorizaciones de Procedimientos y Referidos",
            },
            position: "center",
        },
        shortBio: {
            en: "Ernesto Pazos coordinates procedure scheduling, insurance authorizations, referrals, and communication needed to help patients move smoothly from consultation through treatment.",
            es: "Ernesto Pazos coordina citas de procedimientos, autorizaciones de seguro, referidos y la comunicación necesaria para ayudar al paciente desde la consulta hasta el tratamiento.",
        },
        biography: {
            en: [
                "Ernesto Pazos manages procedure scheduling, insurance authorizations, and patient referrals.",
                "He works diligently to coordinate care and help ensure a smooth process from the initial consultation through testing, procedures, and treatment.",
            ],
            es: [
                "Ernesto Pazos maneja la programación de procedimientos, las autorizaciones de seguro y los referidos de pacientes.",
                "Trabaja diligentemente para coordinar la atención y ayudar a asegurar un proceso fluido desde la consulta inicial hasta las pruebas, procedimientos y tratamiento.",
            ],
        },
        schemaType: "Person",
        featured: false,
        priority: 5,
    },
    {
        id: "claudia-figueroa",
        name: "Claudia Figueroa",
        displayName: "Claudia Figueroa",
        role: {
            en: "Medical Assistant",
            es: "Asistente Médica",
        },
        department: "patient-services",
        image: {
            src: "/images/team/claudia-figueroa.webp",
            alt: {
                en: "Claudia Figueroa, Medical Assistant",
                es: "Claudia Figueroa, Asistente Médica",
            },
            position: "center",
        },
        shortBio: {
            en: "Claudia Figueroa provides clinical support, assists with patient care and medical documentation, and helps visits proceed efficiently and comfortably.",
            es: "Claudia Figueroa ofrece apoyo clínico, ayuda con la atención y documentación médica y contribuye a que cada visita sea eficiente y cómoda.",
        },
        biography: {
            en: [
                "Claudia Figueroa provides clinical support to patients and physicians.",
                "She assists with patient care, medical documentation, visit preparation, and the day-to-day clinical tasks that help each appointment run efficiently and comfortably.",
            ],
            es: [
                "Claudia Figueroa ofrece apoyo clínico a pacientes y médicos.",
                "Ayuda con la atención al paciente, documentación médica, preparación de visitas y tareas clínicas diarias que contribuyen a que cada cita sea eficiente y cómoda.",
            ],
        },
        schemaType: "Person",
        featured: false,
        priority: 6,
    },
    {
        id: "melisa-fabregas",
        name: "Melisa Fabregas",
        displayName: "Melisa Fabregas",
        role: {
            en: "Front Desk Coordinator",
            es: "Coordinadora de Recepción",
        },
        department: "patient-services",
        image: {
            src: "/images/team/melisa-fabregas.webp",
            alt: {
                en: "Melisa Fabregas, Front Desk Coordinator",
                es: "Melisa Fabregas, Coordinadora de Recepción",
            },
            position: "center",
        },
        shortBio: {
            en: "Melisa Fabregas assists patients with appointment scheduling, registration, office communication, and friendly professional support from their first contact.",
            es: "Melisa Fabregas ayuda a los pacientes con citas, registro, comunicación con la oficina y atención profesional y amable desde el primer contacto.",
        },
        biography: {
            en: [
                "Melisa Fabregas is often the first point of contact for patients visiting or calling the practice.",
                "She assists with appointment scheduling, patient registration, office communication, and friendly professional customer service designed to make every visit as seamless as possible.",
            ],
            es: [
                "Melisa Fabregas es frecuentemente el primer punto de contacto para los pacientes que visitan o llaman a la práctica.",
                "Ayuda con la programación de citas, registro del paciente, comunicación con la oficina y servicio profesional y amable para hacer que cada visita sea lo más sencilla posible.",
            ],
        },
        schemaType: "Person",
        featured: false,
        priority: 7,
    },
    {
        id: "aleli-perez",
        name: "Aleli Perez",
        displayName: "Aleli Perez",
        role: {
            en: "Nuclear Medicine Technologist",
            es: "Tecnóloga en Medicina Nuclear",
        },
        department: "diagnostic-services",
        image: {
            src: "/images/team/aleli-perez.webp",
            alt: {
                en: "Aleli Perez, Nuclear Medicine Technologist",
                es: "Aleli Perez, Tecnóloga en Medicina Nuclear",
            },
            position: "center",
        },
        shortBio: {
            en: "Aleli Perez performs Nuclear Stress Testing and nuclear cardiology diagnostic procedures that support detailed cardiovascular health assessments.",
            es: "Aleli Perez realiza pruebas de esfuerzo nuclear y procedimientos diagnósticos de cardiología nuclear que apoyan evaluaciones cardiovasculares detalladas.",
        },
        biography: {
            en: [
                "Aleli Perez performs Nuclear Stress Testing and other nuclear cardiology diagnostic procedures.",
                "Her work helps provide accurate and detailed information that the clinical team can use when assessing cardiovascular health and determining appropriate next steps.",
            ],
            es: [
                "Aleli Perez realiza pruebas de esfuerzo nuclear y otros procedimientos diagnósticos de cardiología nuclear.",
                "Su trabajo ayuda a proporcionar información precisa y detallada que el equipo clínico puede utilizar al evaluar la salud cardiovascular y determinar los próximos pasos apropiados.",
            ],
        },
        schemaType: "Person",
        featured: false,
        priority: 8,
    },
    {
        id: "rafael-valdespino",
        name: "Rafael Valdespino",
        displayName: "Rafael Valdespino",
        role: {
            en: "Ultrasound Technologist",
            es: "Tecnólogo de Ultrasonido",
        },
        department: "diagnostic-services",
        image: {
            src: "/images/team/rafael-valdespino.webp",
            alt: {
                en: "Rafael Valdespino, Cardiovascular Ultrasound Technologist",
                es: "Rafael Valdespino, Tecnólogo de Ultrasonido Cardiovascular",
            },
            position: "center",
        },
        shortBio: {
            en: "Rafael Valdespino performs cardiovascular ultrasound imaging, including echocardiograms, carotid studies, abdominal aorta studies, and lower-extremity vascular ultrasounds.",
            es: "Rafael Valdespino realiza imágenes de ultrasonido cardiovascular, incluyendo ecocardiogramas, estudios de carótidas, aorta abdominal y ultrasonidos vasculares de extremidades inferiores.",
        },
        biography: {
            en: [
                "Rafael Valdespino specializes in cardiovascular ultrasound imaging.",
                "He performs Echocardiograms, Carotid Ultrasounds, Abdominal Aorta Studies, and Lower Extremity Vascular Ultrasounds, delivering high-quality diagnostic imaging that supports cardiovascular evaluation and patient care.",
            ],
            es: [
                "Rafael Valdespino se especializa en imágenes de ultrasonido cardiovascular.",
                "Realiza ecocardiogramas, ultrasonidos de carótidas, estudios de la aorta abdominal y ultrasonidos vasculares de las extremidades inferiores, proporcionando imágenes diagnósticas de alta calidad que apoyan la evaluación cardiovascular y la atención del paciente.",
            ],
        },
        schemaType: "Person",
        featured: false,
        priority: 9,
    },
];

export const sortedTeamMembers = [...teamMembers].sort(
    (a, b) => a.priority - b.priority,
);

export const featuredTeamMembers =
    sortedTeamMembers.filter(
        (member) => member.featured,
    );

export const getTeamDepartment = (
    departmentId: TeamDepartmentId,
) =>
    teamDepartments.find(
        (department) =>
            department.id === departmentId,
    );

export const getTeamMembersByDepartment = (
    departmentId: TeamDepartmentId,
) =>
    sortedTeamMembers.filter(
        (member) =>
            member.department === departmentId,
    );

export const getTeamMemberById = (
    memberId: string,
) =>
    sortedTeamMembers.find(
        (member) => member.id === memberId,
    );