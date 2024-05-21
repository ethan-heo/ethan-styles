declare const createBEMSelector: ({ block, element, modifier, }: {
    block: string | string[];
    element?: string | string[] | undefined;
    modifier?: string | string[] | undefined;
}) => string;
export default createBEMSelector;
