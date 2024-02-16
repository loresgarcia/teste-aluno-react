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

          {/* <Route path="/" element={<Inicio/>}/>
          <Route path="/sobremim" element={<SobreMim/>}/> */}
        </Route>

        {/* 

          Na rota "/", a estrutura a ser renderizado é: 

          <PaginaPadrao>
            <Inicio/>
          </PaginaPadrao>

          Na rota "/sobremim", a estrutura a ser renderizado é: 

          <PaginaPadrao>
            <SobreMim/>
          </PaginaPadrao>
        
        
        */}
        <Route path="posts/:id/*" element={<Post/>}/>
        <Route path="*" element={<NaoEncontrado/>}/>

      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default AppRoutes
