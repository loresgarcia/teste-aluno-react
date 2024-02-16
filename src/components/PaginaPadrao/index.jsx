import Banner from '../../components/Banner';
import {Outlet} from 'react-router-dom'
import { Menu } from '../Menu';
import Rodape from '../Rodape';
import ScrollToTop from '../ScrollToTop';
export default function PaginaPadrao({children}){
    return (
        <main>
            <ScrollToTop/>
            <Menu/>
            <Banner/>
            <Outlet/>
            {children}
        </main>
    )
}