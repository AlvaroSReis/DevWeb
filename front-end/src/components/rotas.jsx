import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'
import Home from "./home";
import MapaUsuarios from "./mapaUsuarios";
import '../styles/intro.css';

export default function Rotas() {

    const [logado, setLogado] = useState(false)

useEffect( () => {
    const logado = localStorage.getItem('email') !== null
    setLogado(logado)
}, []);

    return (
        <>
            {logado &&
                <div>
                    <Routes>
                        <Route path="/" exact Component={Home} />
                        <Route path="/mapaUsuarios" Component={MapaUsuarios} />
                    </Routes>
                </div>
            }
            {!logado &&
                  <div className='intro-container'>
                    <div className="intro">
                  <h3>
                      <strong>Atenção:</strong> Para acessar o portal é necessario realizar login.
                  </h3>
                  </div>
              </div>
            }
        </>
    )
}