import React from "react";

type PlatformColumn = `col-${"mp" | "ml" | "tp" | "tl" | "d"}-${number}`;

type ResponsiveColumn = `col-${number}`;

interface WithGridLayoutProps {
	column?: PlatformColumn | ResponsiveColumn;
	className?: string;
}

const withGridLayout = <P extends object>(
	Component: React.ComponentType<P>,
) => {
	const WithGridLayout = ({
		column,
		className,
		...props
	}: P & WithGridLayoutProps) => {
		const _className = [column ?? "col-1", className].filter(Boolean).join(" ");

		/**
		 * Component의 Prop 타입이 object로 정의되어 있는 상태에서 className을 추가하니 타입이 불일치하는 상태가 발생
		 * 정확한 타입을 지정하면 되지만 그럴 경우 외부에서 className이 필수적으로 사용해야 하는 상황이 발생.
		 * 일단 any로 처리
		 */
		return <Component {...(props as any)} className={_className} />;
	};

	WithGridLayout.displayName = "WithGridLayout";

	return WithGridLayout;
};

export default withGridLayout;
