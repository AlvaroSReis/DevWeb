import { useState, useEffect } from "react";
import { query8 } from "../../services/Connection";
import '../../styles/tabela.css';
import '../../styles/pergunta.css';
import Button from '@mui/material/Button'

export function Pergunta8() {
    const [dados, setDados] = useState([{}]);
    const [mostrarResultados, setMostrar] = useState(false);
    const [textoBotao, setTexto] = useState('Mostrar Resultados')

    useEffect( () => {
        const fetchData = async () => {
            try {
                let data = await query8();
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
                <h3>8. Quais são os trinta municípios que ocorreu o maior número de emissões de carteira de trabalho? </h3>
                <Button size="small" variant="contained" color="primary"
                onClick={handleMostarResultados}>{textoBotao}</Button>
            </div>
            { mostrarResultados &&
            <table className="table">
                <thead>
                    <tr>
                        <th>Municípios</th>
                        <th>Número de Solicitantes</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nomemunicipioorgao}</td>
                            <td>{item.numeroemissões}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
        </div>
    )
}
