import { NavLink } from "react-router-dom";
import { Container } from './styles'
import { ReactComponent as BatLogo } from '../../assets/batman.svg';
import { ReactComponent as EspantalhoLogo } from '../../assets/espantalho.svg';
import { ReactComponent as HqsLogo } from '../../assets/hqs.svg';
import { ReactComponent as ContatosLogo } from '../../assets/contact.svg';

export function Sidebar() {
    return (
        <>
            <Container>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className='active'>
                                <BatLogo />
                                <span>Personagens</span>
                            </NavLink>
                        </li>
                        <li>
                            <a href="#">
                                <EspantalhoLogo />
                                <span>Vilões</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <HqsLogo />
                                <span>Arcos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <ContatosLogo />
                                <span>Contatos</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </>
    )
}

