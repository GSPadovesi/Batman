import { Container } from './styles'
import git from '../../assets/logo-git.png'
import link from '../../assets/logo-linkedin.png'


export function Footer(){
   



    return(
        <Container>
            <>
                <div className='container'>
                    <p>
                        Copyright&#169; site de fã sem nenhuma posse ou autoridade sobre todos os personagens da DC <br /> 
                        A DC tem direito a todos personagens usados nesse site -  Desenvolvido apenas para estudos sem fins lucrativos - apenas para fins educativos 
                    </p>
                    <p>
                        <a href="https://github.com/GabrielSantanaP"> <img className='image' src={git} alt="GitHub" /> </a>
                        <a href="https://www.linkedin.com/in/gabriel-santana-padovesi-59b1041b7/"><img className='image' src={link} alt="Linkedin" /></a>
                    </p>
                </div>
               
            </>
        </Container>
    )
}