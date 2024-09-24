type PickCSSProperty<
	P extends keyof React.CSSProperties,
	V = React.CSSProperties[P],
> = Extract<React.CSSProperties[P], V>;
