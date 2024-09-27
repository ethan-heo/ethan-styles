import ThemeStorage from "./ThemeStorage";
import { ThemeSwitchOption, ThemeType } from "./ThemeSwitcher.types";

class ThemeSwitcher {
	#el: HTMLElement;
	#storage: ThemeStorage;

	constructor(options?: ThemeSwitchOption) {
		this.#storage = new ThemeStorage(options?.themeType);
		this.#el = options?.el ?? document.body;

		this.#el.classList.add(
			this.transformThemeType(this.#storage.getThemeType()),
		);
	}

	public change(themeType: ThemeType) {
		this.#el.classList.remove(
			this.transformThemeType(this.#storage.getThemeType()),
		);
		this.#el.classList.add(this.transformThemeType(themeType));

		this.#storage.setThemeType(themeType);
	}

	private transformThemeType(themeType: ThemeType) {
		return `theme--${themeType}`;
	}
}

export default ThemeSwitcher;
