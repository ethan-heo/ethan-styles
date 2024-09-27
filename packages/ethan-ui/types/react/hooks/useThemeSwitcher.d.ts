import { ThemeType } from "../../modules/ThemeSwitcher/ThemeSwitcher.types";
declare function useThemeSwitcher(themeType?: ThemeType): {
    change: (themeType: ThemeType) => void;
};
export default useThemeSwitcher;
