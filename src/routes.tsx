import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import  PersonagensPage  from './pages/Main/Personagens'
import VilaoPage from './pages/Main/Viloes'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<PersonagensPage />} />
        <Route path='viloes' element={<VilaoPage />} />
        <Route path='historias' element={[]} />
        <Route path='contatos' element={[]} />
      </Route>
    </Routes>
  )
}
