import { ThemeSwitchOption, ThemeType } from "./ThemeSwitcher.types";
declare class ThemeSwitcher {
    #private;
    constructor(options?: ThemeSwitchOption);
    change(themeType: ThemeType): void;
    private transformThemeType;
}
export default ThemeSwitcher;
