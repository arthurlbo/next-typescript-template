import "./globals.css";

export const metadata = {
    title: "arthurlbo | Next TypeScript Template",
    description: "A simple Next template using Next, Typescript, Tailwind, Cypress and other tools!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
