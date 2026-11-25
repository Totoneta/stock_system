import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/base'
import HomePage from './pages/homepage/homepage'
import ProductsPage from './pages/productspage/productspage'

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/productos' element={<ProductsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}


