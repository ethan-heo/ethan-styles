import Button from "./Button/Button.custom";
declare const els: {
    Button: typeof Button;
};
type CustomElements = keyof typeof els;
declare function defineCustomElements(element: CustomElements): void;
export default defineCustomElements;
