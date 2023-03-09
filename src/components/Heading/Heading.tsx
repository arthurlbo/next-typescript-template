import { Container } from "./Heading.styled";

export const Heading = () => {
    return (
        <Container>
            <h1>Hello World 🥳</h1>

            <p>
                Get started by editing <code>pages/index.tsx</code>
            </p>

            <p>
                Made with 💜 by{" "}
                <a href="https://www.github.com/arthurlbo" target="_blank" rel="noreferrer">
                    Arthur Lobo
                </a>
            </p>
        </Container>
    );
};
