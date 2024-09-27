import { ThemeType } from "./ThemeSwitcher.types";
declare class ThemeStorage {
    #private;
    constructor(themeType?: ThemeType);
    getThemeType(): ThemeType;
    setThemeType(themeType: ThemeType): void;
    private write;
    private read;
    private readStorageTheme;
    private readSystemTheme;
}
export default ThemeStorage;
