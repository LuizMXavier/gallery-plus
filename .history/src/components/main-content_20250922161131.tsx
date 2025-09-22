
interface MainContentProps extends React.ComponentProps<"main">{}

export default function MainContent({
    children,
    className,
    ...props
}: MainContentProps) {
    function cx(arg0: string, className: string | undefined): string | undefined {
        throw new Error("Function not implemented.");
    }

    return (
        <main className={cx("mt-20 pb-20", className)} {...props}>
            {children}
        </main>
    )
}