import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SobreMim from "./pages/SobreMim"
import Inicio from "./pages/Inicio/index"
import {Menu} from './components/Menu'
import Rodape from './components/Rodape'
import PaginaPadrao from './components/PaginaPadrao'
import Post from './components/Post'
import NaoEncontrado from './pages/NaoEncontrado'


function AppRoutes() {

  return (
    <BrowserRouter>
       
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>
        </Route>
        <Route path="posts/:id/*" element={<Post/>}/>
        <Route path="*" element={<NaoEncontrado/>}/>

      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes
