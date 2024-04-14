import getType from "./getType.mjs";

export const validateTokenObj = (obj) => {
	return !["$type", "$value"].some((key) => getType(obj[key]) === "undefined");
};

export const validateTokenValue = (value) => {
	if (Array.isArray(value)) {
		return value.some((obj) => validateTokenObj(obj));
	} else {
		return validateTokenObj(value);
	}
};
