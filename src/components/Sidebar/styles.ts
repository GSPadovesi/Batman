import styled from 'styled-components';

export const navBar = styled.nav`
background-color: ${(props) => props.theme.colors.yellow};
    padding: 2rem 0;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    top: 0;
    width: 100vw;

    nav{
        flex: 1;
        /* gap: 105rem; */
    }
    
    li{
        display: inline-block;
        margin: 0 1rem;

        a{
            width: fit-content;
            position: relative;
            padding-left: 1.875rem;
            padding-right: 1.875rem;

            display: flex;
            align-items: center;
            gap: 2rem;

            svg {
                fill: ${({ theme }) => theme.colors.white};
                width: 4rem;
                height: 4rem;
                transition: fill 0.3s;
            }

            span {
                font-size: 1rem;
                font-weight: 500;
                transition: color 0.3s;
                color: ${(props) => props.theme.colors.white};
                fill: ${({ theme }) => theme.colors.white};


            }
          &.active {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: ${({ theme }) => theme.colors.gray800};
            width: 5px;
            height: calc(100% + 10px);

            border-radius: 0 5px 5px 0;
          }

          svg {
            fill: ${({ theme }) => theme.colors.yellow};
          }

          span {
            color: ${({ theme }) => theme.colors.black};
          }
        }
    }
}

@media(max-width: 940px){
    /* position: fixed; */
    span{
        display: none;
    }
}

@media (max-width: 720px){
    position: fixed;
    left: 0;
    right: 0;
    z-index: 999;

    height: 8rem;
    width: 100%;
    overflow-y: auto;

    nav{
        height: 100%;
        width: 100%;

        ul{
            flex-direction: row;
            align-items: center;
        }

        li{
            a{
                flex-direction: column;
                padding: 0rem;
            }

        span{
            display: none;
        }

    }
}
}
`;