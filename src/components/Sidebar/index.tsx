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
                            <NavLink to="/" >
                                <BatLogo />
                                <span>Personagens</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="viloes">
                                <EspantalhoLogo />
                                <span>Vilões</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="historias">
                                <HqsLogo />
                                <span>Historias</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="contatos">
                                <ContatosLogo />
                                <span>Contatos</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </>
    )
}

