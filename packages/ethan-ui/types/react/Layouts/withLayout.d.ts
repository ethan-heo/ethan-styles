import { LayoutColumns } from "./Layouts.types";
type WithLayoutProps = {
    column?: LayoutColumns | LayoutColumns[];
    className?: string;
};
declare const withLayout: <P>(WrappedComponent: React.FC<P>) => ({ column, className, ...props }: P & WithLayoutProps) => import("react/jsx-runtime").JSX.Element;
export default withLayout;
