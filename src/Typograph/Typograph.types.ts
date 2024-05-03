export interface TypographCommonProps {
	strong?: boolean;
	italic?: boolean;
	underline?: boolean;
	del?: boolean;
	mark?: boolean;
	variant?:
		| "priamry"
		| "secondary"
		| "accent"
		| "success"
		| "warning"
		| "error"
		| "default";
}
