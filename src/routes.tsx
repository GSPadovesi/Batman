import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/Main'
import  PersonagensPage  from './pages/Main/Personagens'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<PersonagensPage />} />
      </Route>
    </Routes>
  )
}
