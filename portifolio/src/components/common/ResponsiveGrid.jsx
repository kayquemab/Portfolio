export default function ResponsiveGrid({ children, className = "" }) {
    return (
        <div
            className={`grid w-full max-w-7xl grid-cols-1 items-start gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 ${className}`}
        >
            {children}
        </div>
    );
}