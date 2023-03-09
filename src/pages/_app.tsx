import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from "@/styles";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Homepage</title>

                <meta
                    name="description"
                    content="A simple template project to work with NextJS, React, TypeScript and Styled-Components"
                />
            </Head>

            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
