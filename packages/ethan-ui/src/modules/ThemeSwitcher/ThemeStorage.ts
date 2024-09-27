import { ThemeType } from "./ThemeSwitcher.types";

class ThemeStorage {
	#themeType: ThemeType;
	#STORAGE_THEME_KEY = "theme";

	constructor(themeType?: ThemeType) {
		this.#themeType = themeType ?? this.read();
	}

	public getThemeType() {
		return this.#themeType;
	}

	public setThemeType(themeType: ThemeType) {
		this.write(themeType);
	}

	private write(themeType: ThemeType) {
		localStorage.setItem(this.#STORAGE_THEME_KEY, themeType);
		this.#themeType = themeType;
	}

	private read(): ThemeType {
		return this.readStorageTheme() || this.readSystemTheme();
	}

	private readStorageTheme() {
		return localStorage.getItem(this.#STORAGE_THEME_KEY) as ThemeType;
	}

	private readSystemTheme(): Extract<ThemeType, "dark" | "light"> {
		if (window.matchMedia("(prefers-color-scheme: dark)")) {
			return "dark";
		} else {
			return "light";
		}
	}
}

export default ThemeStorage;
