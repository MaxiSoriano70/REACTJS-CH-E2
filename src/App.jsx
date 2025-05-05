import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ServiciosPage from './pages/ServiciosPage'
import DetalleProducto from './components/DetalleProducto'
import FooterVet from './components/FooterVet'
import TipsPage from './pages/TipsPage'

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/servicios' element={<ServiciosPage/>}/>
                <Route path='/producto/:id' element={<DetalleProducto />} />
                <Route path='/tips' element={<TipsPage />} />
            </Routes>
            <FooterVet/>
        </>
    )
}

export default App
