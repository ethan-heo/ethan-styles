export type HTMLTokenType = "Text" | "OpenTag" | "CloseTag";
export type HTMLToken = {
    type: HTMLTokenType;
    contents: string;
    attributes?: Record<string, string>;
};
declare const parseHTML: (html: string) => HTMLToken[];
export default parseHTML;
