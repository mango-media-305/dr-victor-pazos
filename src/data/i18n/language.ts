// src/data/i18n/languages.ts

export const defaultLanguage = "en" as const;

export const languages = {
    en: {
        code: "en",
        locale: "en-US",
        name: "English",
        shortName: "EN",
        direction: "ltr",
        pathPrefix: "",
    },
    es: {
        code: "es",
        locale: "es-US",
        name: "Español",
        shortName: "ES",
        direction: "ltr",
        pathPrefix: "/es",
    },
} as const;

export type LanguageCode = keyof typeof languages;

export const languageCodes = Object.keys(languages) as LanguageCode[];

export const languageLabels = {
    en: languages.en.name,
    es: languages.es.name,
} as const;

export const languageShortLabels = {
    en: languages.en.shortName,
    es: languages.es.shortName,
} as const;

export function isValidLanguage(language: string | undefined): language is LanguageCode {
    if (!language) return false;

    return languageCodes.includes(language as LanguageCode);
}

export function getLanguageFromUrl(pathname: string): LanguageCode {
    const segments = pathname.split("/").filter(Boolean);
    const firstSegment = segments[0];

    if (isValidLanguage(firstSegment)) {
        return firstSegment;
    }

    return defaultLanguage;
}

export function getLanguagePrefix(language: LanguageCode): string {
    return languages[language].pathPrefix;
}

export function removeLanguagePrefix(pathname: string): string {
    const segments = pathname.split("/").filter(Boolean);
    const firstSegment = segments[0];

    if (isValidLanguage(firstSegment)) {
        const cleanPath = `/${segments.slice(1).join("/")}`;

        return cleanPath === "/" ? "/" : `${cleanPath}/`.replace(/\/+/g, "/");
    }

    return pathname;
}

export function localizedPath(path: string, language: LanguageCode): string {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const cleanPath = removeLanguagePrefix(normalizedPath);
    const prefix = getLanguagePrefix(language);

    if (language === defaultLanguage) {
        return cleanPath;
    }

    if (cleanPath === "/") {
        return `${prefix}/`;
    }

    return `${prefix}${cleanPath}`.replace(/\/+/g, "/");
}

export function getAlternateLanguage(language: LanguageCode): LanguageCode {
    return language === "en" ? "es" : "en";
}

export function getAlternateLanguagePath(pathname: string): string {
    const currentLanguage = getLanguageFromUrl(pathname);
    const alternateLanguage = getAlternateLanguage(currentLanguage);
    const cleanPath = removeLanguagePrefix(pathname);

    return localizedPath(cleanPath, alternateLanguage);
}