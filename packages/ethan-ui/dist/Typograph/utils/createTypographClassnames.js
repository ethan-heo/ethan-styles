import createBEMSelector from "../../utils/createBEMSelector";
import { TYPOGRAPH_BLOCK, TYPOGRAPH_MODIFIER_COLOR, TYPOGRAPH_MODIFIER_STYLE, } from "../constants";
const createTypographClassnames = (component, { variant = "default", ...styles }, ...classNames) => {
    const block = createBEMSelector({
        block: [TYPOGRAPH_BLOCK],
        element: component,
    });
    const createVariant = () => createBEMSelector({
        block: TYPOGRAPH_BLOCK,
        modifier: [TYPOGRAPH_MODIFIER_COLOR, variant],
    });
    const createStyles = () => {
        let result = [];
        for (const [name, value] of Object.entries(styles)) {
            if (!value) {
                continue;
            }
            result.push(createBEMSelector({
                block: TYPOGRAPH_BLOCK,
                modifier: [TYPOGRAPH_MODIFIER_STYLE, name],
            }));
        }
        return result.join(" ");
    };
    return [block, createVariant(), createStyles(), ...classNames]
        .filter(Boolean)
        .join(" ");
};
export default createTypographClassnames;
