import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Container from './pages/Container'
import CentralPedidos from './pages/CentralPedidos'


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Container/> }/>
                <Route path='/admin' element={ <CentralPedidos/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;