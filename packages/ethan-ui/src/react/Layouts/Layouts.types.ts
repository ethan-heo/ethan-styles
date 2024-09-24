export type LayoutColumnNumber =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12;

export type LayoutColumns =
	| `col-${"m" | "t"}-${LayoutColumnNumber}`
	| `col-${LayoutColumnNumber}`;

export type LayoutProps<Tag extends React.ElementType, Prop = {}> = {
	as?: Tag;
	column?: LayoutColumns | LayoutColumns[];
} & AliasingComponentAttributes<Tag> &
	Prop;

export type AliasingProps<Tag extends React.ElementType> = {
	as?: Tag;
} & AliasingComponentAttributes<Tag>;

type AliasingComponentAttributes<Tag extends React.ElementType> =
	React.ComponentPropsWithoutRef<Tag>;
