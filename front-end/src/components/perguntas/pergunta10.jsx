import { useState, useEffect } from "react";
import { query10 } from "../../services/Connection";
import '../../styles/tabela.css';
import '../../styles/pergunta.css';
import Button from '@mui/material/Button'

export function Pergunta10() {
    const [dados, setDados] = useState([{}]);
    const [mostrarResultados, setMostrar] = useState(false);
    const [textoBotao, setTexto] = useState('Mostrar Resultados')

    useEffect( () => {
        const fetchData = async () => {
            try {
                let data = await query10();
                setDados(JSON.parse(data));
            } catch(error) {
                console.error(error);
            }
        };
        
        fetchData();
    }, [])

    useEffect(()=> {}, [dados])

    const handleMostarResultados = () => {
        setMostrar(!mostrarResultados);
        setTexto(mostrarResultados? 'Mostrar Resultados' : 'Ocultar Resultados')
    };


    return(
        <div className="pergunta-container">
            <div className="pergunta">
                <h3>10. Quantos protocolos foram emitidos em cada estado?</h3>
                <Button size="small" variant="contained" color="primary"
                onClick={handleMostarResultados}>{textoBotao}</Button>
            </div>
            { mostrarResultados &&
            <table className="table">
                <thead>
                    <tr>
                        <th>Estado</th>
                        <th>Número de Protocolos</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            <td>{item.siglauforgao}</td>
                            <td>{item.numeroprotocolos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
        </div>
    )
}
