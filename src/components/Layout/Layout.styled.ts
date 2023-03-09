import styled from "styled-components";
import { theme } from "@/styles";

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-height: 100vh;
    width: full;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.black};
`;
