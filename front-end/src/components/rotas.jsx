import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import MapaUsuarios from "./mapaUsuarios";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/mapaUsuarios" Component={MapaUsuarios} />
            </Routes>
        </BrowserRouter>
    )
}