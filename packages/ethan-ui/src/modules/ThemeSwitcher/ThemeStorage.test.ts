import { expect, it } from "vitest";
import ThemeStorage from "./ThemeStorage";

it(`초기 상태에서는 시스템 테마를 가져온다`, () => {
	const storage = new ThemeStorage();
	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
		? "dark"
		: "light";

	expect(storage.getThemeType()).toBe(systemTheme);
});
it(`setThemeType 메서드를 사용하면 localStorage에 테마를 저장한다`, () => {
	const storage = new ThemeStorage();

	storage.setThemeType("light");

	const localStorageTheme = window.localStorage.getItem("theme");

	expect(storage.getThemeType()).toBe(localStorageTheme);
});
it(`생성자에 테마를 정의하면 스토리지에 저장함과 동시에 테마를 설정한다`, () => {
	const storage = new ThemeStorage("light");
	const localStorageTheme = window.localStorage.getItem("theme");

	expect(storage.getThemeType()).toBe(localStorageTheme);
});
