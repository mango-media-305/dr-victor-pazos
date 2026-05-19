// src/scripts/theme.ts

export type Theme = "light" | "dark";

const storageKey = "victor-pazos-theme";

function getStoredTheme(): Theme | null {
    if (typeof localStorage === "undefined") return null;

    const storedTheme = localStorage.getItem(storageKey);

    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }

    return null;
}

function getPreferredTheme(): Theme {
    const storedTheme = getStoredTheme();

    if (storedTheme) {
        return storedTheme;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";
}

function applyTheme(theme: Theme) {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
}

function updateThemeToggle(theme: Theme) {
    const toggles = document.querySelectorAll<HTMLElement>("[data-theme-toggle]");
    const labels = document.querySelectorAll<HTMLElement>("[data-theme-label]");

    toggles.forEach((toggle) => {
        toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
        toggle.dataset.themeState = theme;
    });

    labels.forEach((label) => {
        label.textContent = theme === "dark" ? "Dark" : "Light";
    });
}

export function setTheme(theme: Theme) {
    localStorage.setItem(storageKey, theme);
    applyTheme(theme);
    updateThemeToggle(theme);
}

export function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";

    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
}

export function initTheme() {
    const theme = getPreferredTheme();

    applyTheme(theme);
    updateThemeToggle(theme);

    window.addEventListener("storage", (event) => {
        if (event.key !== storageKey) return;

        const newTheme = event.newValue;

        if (newTheme === "light" || newTheme === "dark") {
            applyTheme(newTheme);
            updateThemeToggle(newTheme);
        }
    });

    document.addEventListener("click", (event) => {
        const target = event.target as HTMLElement | null;
        const toggle = target?.closest("[data-theme-toggle]");

        if (!toggle) return;

        toggleTheme();
    });
}

declare global {
    interface Window {
        initVictorPazosTheme?: () => void;
        toggleVictorPazosTheme?: () => void;
        setVictorPazosTheme?: (theme: Theme) => void;
    }
}

window.initVictorPazosTheme = initTheme;
window.toggleVictorPazosTheme = toggleTheme;
window.setVictorPazosTheme = setTheme;

initTheme();