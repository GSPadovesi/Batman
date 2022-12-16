import { Container } from './styles'
import { Sidebar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'
import logo from '../../assets/bat.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logo} alt="Logo do Batman" />
        <Outlet />
      </section>
    </Container>
  )
}
