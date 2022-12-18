import styled from "styled-components";

export const Container = styled.footer`
    padding: 30px;
    /* margin: 10px; */
    background-color: ${(props) => props.theme.colors.yellow};

    .container{

        color: ${({ theme }) => theme.colors.gray600};

        .image{
            width: 30px;
            height: 30px;
            margin-top: 20px;
        }
    }
`