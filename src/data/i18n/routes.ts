// src/data/i18n/routes.ts

import { defaultLanguage, type LanguageCode } from "./language";

export type RouteKey =
    | "home"
    | "about"
    | "services"
    | "locations"
    | "patientInfo"
    | "contact"
    | "privacyPolicy"
    | "medicalDisclaimer"
    | "cardiologyConsultation"
    | "interventionalCardiology"
    | "chestPainEvaluation"
    | "anginaTreatment"
    | "coronaryArteryDisease"
    | "heartDiseaseManagement"
    | "hypertension"
    | "heartFailure"
    | "arrhythmiaAtrialFibrillation"
    | "heartMurmur"
    | "ekgEcgTesting"
    | "echocardiogram"
    | "stressTest"
    | "cardiacCatheterization"
    | "preventiveCardiology";

export const routes: Record<RouteKey, Record<LanguageCode, string>> = {
    home: {
        en: "/",
        es: "/es/",
    },

    about: {
        en: "/about/",
        es: "/es/sobre-el-doctor/",
    },

    services: {
        en: "/services/",
        es: "/es/servicios/",
    },

    locations: {
        en: "/locations/",
        es: "/es/ubicaciones/",
    },

    patientInfo: {
        en: "/patient-info/",
        es: "/es/informacion-para-pacientes/",
    },

    contact: {
        en: "/contact/",
        es: "/es/contacto/",
    },

    privacyPolicy: {
        en: "/privacy-policy/",
        es: "/es/politica-de-privacidad/",
    },

    medicalDisclaimer: {
        en: "/medical-disclaimer/",
        es: "/es/aviso-medico/",
    },

    cardiologyConsultation: {
        en: "/services/cardiology-consultation/",
        es: "/es/servicios/consulta-cardiologica/",
    },

    interventionalCardiology: {
        en: "/services/interventional-cardiology/",
        es: "/es/servicios/cardiologia-intervencionista/",
    },

    chestPainEvaluation: {
        en: "/services/chest-pain-evaluation/",
        es: "/es/servicios/evaluacion-dolor-pecho/",
    },

    anginaTreatment: {
        en: "/services/angina-treatment/",
        es: "/es/servicios/tratamiento-de-angina/",
    },

    coronaryArteryDisease: {
        en: "/services/coronary-artery-disease/",
        es: "/es/servicios/enfermedad-de-las-arterias-coronarias/",
    },

    heartDiseaseManagement: {
        en: "/services/heart-disease-management/",
        es: "/es/servicios/manejo-de-enfermedades-del-corazon/",
    },

    hypertension: {
        en: "/services/hypertension/",
        es: "/es/servicios/presion-alta/",
    },

    heartFailure: {
        en: "/services/heart-failure/",
        es: "/es/servicios/insuficiencia-cardiaca/",
    },

    arrhythmiaAtrialFibrillation: {
        en: "/services/arrhythmia-atrial-fibrillation/",
        es: "/es/servicios/arritmia-fibrilacion-auricular/",
    },

    heartMurmur: {
        en: "/services/heart-murmur/",
        es: "/es/servicios/soplo-cardiaco/",
    },

    ekgEcgTesting: {
        en: "/services/ekg-ecg-testing/",
        es: "/es/servicios/prueba-ekg-ecg/",
    },

    echocardiogram: {
        en: "/services/echocardiogram/",
        es: "/es/servicios/ecocardiograma/",
    },

    stressTest: {
        en: "/services/stress-test/",
        es: "/es/servicios/prueba-de-esfuerzo/",
    },

    cardiacCatheterization: {
        en: "/services/cardiac-catheterization/",
        es: "/es/servicios/cateterismo-cardiaco/",
    },

    preventiveCardiology: {
        en: "/services/preventive-cardiology/",
        es: "/es/servicios/cardiologia-preventiva/",
    },
};

export function getRoute(routeKey: RouteKey, language: LanguageCode): string {
    return routes[routeKey][language];
}

export function getAlternateRoute(
    routeKey: RouteKey,
    currentLanguage: LanguageCode,
): string {
    const alternateLanguage: LanguageCode =
        currentLanguage === defaultLanguage ? "es" : defaultLanguage;

    return routes[routeKey][alternateLanguage];
}

export function getRouteKeyByPath(pathname: string): RouteKey | undefined {
    const normalizedPath = normalizePath(pathname);

    return Object.entries(routes).find(([, localizedRoutes]) =>
        Object.values(localizedRoutes).some(
            (routePath) => normalizePath(routePath) === normalizedPath,
        ),
    )?.[0] as RouteKey | undefined;
}

export function getTranslatedPath(
    pathname: string,
    targetLanguage: LanguageCode,
): string {
    const routeKey = getRouteKeyByPath(pathname);

    if (!routeKey) {
        return targetLanguage === defaultLanguage ? "/" : "/es/";
    }

    return routes[routeKey][targetLanguage];
}

export function normalizePath(pathname: string): string {
    if (!pathname) return "/";

    const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

    if (cleanPath === "/") return "/";

    return cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;
}