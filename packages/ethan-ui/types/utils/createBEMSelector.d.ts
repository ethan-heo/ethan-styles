declare const createBEMSelector: ({ block, element, modifier, }: {
    block: string | string[];
    element?: string | string[];
    modifier?: string | string[];
}) => string;
export default createBEMSelector;
