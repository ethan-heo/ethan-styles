import { LayoutColumns } from "./Layouts.types";

type WithLayoutProps = {
	column?: LayoutColumns | LayoutColumns[];
	className?: string;
};

const withLayout =
	<P,>(WrappedComponent: React.FC<P>) =>
	({ column, className, ...props }: P & WithLayoutProps) => {
		const columnClassName = Array.isArray(column) ? column.join(" ") : column;

		return (
			<WrappedComponent
				{...(props as P)}
				className={[columnClassName, className].join(" ")}
			/>
		);
	};

export default withLayout;
