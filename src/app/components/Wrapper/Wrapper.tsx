export const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="relative flex min-h-screen max-w-full w-full flex-col items-center justify-center bg-background">
            {children}
        </main>
    );
};
