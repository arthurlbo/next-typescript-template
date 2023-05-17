export const Hello = () => {
    return (
        <div className="flex flex-col gap-2 text-center text-xl font-medium text-zinc-200">
            <h1 className="text-3xl">Hello World 🥳</h1>

            <p>
                Get started by editing <code className="font-mono text-sm font-bold">src/app/page.tsx</code>
            </p>

            <p className="mt-5">
                Made with 🤍 by{" "}
                <a
                    className="inline-block underline underline-offset-[2px] transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:text-purple-400"
                    href="https://www.github.com/arthurlbo"
                    target="_blank"
                    rel="noreferrer"
                >
                    Arthur Lobo
                </a>
            </p>
        </div>
    );
};
