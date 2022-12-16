import styled from "styled-components";

export const TitlePage = styled.h1`
    color: ${(props) => props.theme.colors.yellow};
    font-size: 2rem;
    margin: 2rem 0;

    text-transform: uppercase;
    font-weight: 700;

    &::before {
        content: '';
        background: ${({ theme }) => theme.colors.white};
        width: 42px;
        height: 5px;
        flex-shrink: 0;
        border-radius: 4px;
    }

    @media(max-width: 720px) {
        font-size: ${({ theme }) => theme.fontSize['3xl']};
        justify-content: center;

        &::before {
            display: none;
        }
    }

`