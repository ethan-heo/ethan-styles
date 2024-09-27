import { expect, it } from "vitest";
import ThemeSwitcher from "./ThemeSwitcher";

it(`body에 테마 클래스가 적용되는지 확인`, () => {
	new ThemeSwitcher({ themeType: "light" });

	expect(document.body.classList.value === "theme--light").toBeTruthy();
});

it(`테마 클래스가 변경되는지 확인`, () => {
	const themeSwitcher = new ThemeSwitcher({ themeType: "light" });

	expect(document.body.classList.value === "theme--light").toBeTruthy();

	themeSwitcher.change("dark");

	expect(document.body.classList.value === "theme--dark").toBeTruthy();
});
