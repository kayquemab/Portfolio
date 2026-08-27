export default function SecaoPadrao({ children, className = "" }) {
    return (
        <section
            className={`
        relative flex min-h-[100svh] w-full flex-col items-center justify-start
        overflow-x-hidden border-t border-white/[0.07] px-4 pb-24 pt-20 text-center
        sm:px-6 sm:pb-24 sm:pt-24
        md:px-10 md:pb-28 md:pt-28
        lg:px-16 lg:pb-32 lg:pt-32
        xl:px-24
        2xl:px-32
        ${className}
      `}
        >
            {children}
        </section>
    );
}
