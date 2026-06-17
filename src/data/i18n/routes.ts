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
    | "medicalDisclaimer";

export const routes: Record<RouteKey, Record<LanguageCode, string>> = {
    home: {
        en: "/",
        es: "/es/",
    },

    about: {
        en: "/about/",
        es: "/es/about/",
    },

    services: {
        en: "/services/",
        es: "/es/services/",
    },

    locations: {
        en: "/locations/",
        es: "/es/locations/",
    },

    patientInfo: {
        en: "/patient-info/",
        es: "/es/patient-info/",
    },

    contact: {
        en: "/contact/",
        es: "/es/contact/",
    },

    privacyPolicy: {
        en: "/privacy-policy/",
        es: "/es/privacy-policy/",
    },

    medicalDisclaimer: {
        en: "/medical-disclaimer/",
        es: "/es/medical-disclaimer/",
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