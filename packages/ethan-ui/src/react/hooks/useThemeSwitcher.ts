import { useRef } from "react";
import { ThemeType } from "../../modules/ThemeSwitcher/ThemeSwitcher.types";
import ThemeSwitcher from "../../modules/ThemeSwitcher";

function useThemeSwitcher(themeType: ThemeType = "light") {
	const themeSwitcher = useRef(new ThemeSwitcher({ themeType })).current;

	return {
		change: (themeType: ThemeType) => {
			themeSwitcher.change(themeType);
		},
	};
}

export default useThemeSwitcher;
