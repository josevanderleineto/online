import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";
import './paginaPadrao.css';

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />

            <Outlet />
        </main>
    )
}