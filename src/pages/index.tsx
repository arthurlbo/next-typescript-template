import type { NextPage } from "next";
import Head from "next/head";

import { Layout, Heading } from "@/components";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Homepage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout.Content>
                <Heading />
            </Layout.Content>
        </>
    );
};

export default Home;
