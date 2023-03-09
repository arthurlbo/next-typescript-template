import styled from "styled-components";
import { theme } from "../../styles";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${theme.colors.white};
    font-weight: ${theme.font.weigths.semiBold};
    text-align: center;

    p:last-child {
        margin-top: 20px;
    }

    a {
        display: inline-block;
        color: ${theme.colors.white};
        text-decoration: underline;
        text-underline-offset: 2px;
        transition: transform 0.2s ease-in-out 0s;

        &:hover {
            transform: translateY(-3px);
        }
    }
`;
