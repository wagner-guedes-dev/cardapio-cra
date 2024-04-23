import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Container from './pages/Container'
import CentralPedidos from './pages/CentralPedidos'
import SpaceIce from './pages/SpaceIce'


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Container/> }/>
                <Route path='/admin' element={ <CentralPedidos/> }/>
                <Route path='space-ice' element={ <SpaceIce/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;