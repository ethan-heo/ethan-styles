type Platform = "mobile-portrait" | "mobile-landscape" | "tablet" | "desktop";

type PickCSSProperty<
	P extends keyof React.CSSProperties,
	V = React.CSSProperties[P],
> = Extract<React.CSSProperties[P], V>;
