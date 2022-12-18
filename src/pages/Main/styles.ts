import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  margin-top: 0rem;

  section{

    img{
      color: ${(props) => props.theme.colors.yellow};
      width: 400px;
    }
  }
`
