export type LayoutColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type LayoutProps<Tag extends React.ElementType, Prop = {}> = {
	as?: Tag;
	column?: LayoutColumn;
} & AliasingComponentAttributes<Tag> &
	Prop;

type AliasingComponentAttributes<Tag extends React.ElementType> =
	React.ComponentPropsWithoutRef<Tag>;
