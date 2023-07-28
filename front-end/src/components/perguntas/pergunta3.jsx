import { useState, useEffect } from "react";
import { query3 } from "../../services/Connection";
import '../../styles/tabela.css';
import '../../styles/pergunta.css';
import Button from '@mui/material/Button'

export function Pergunta3() {
    const [dados, setDados] = useState([{}]);
    const [mostrarResultados, setMostrar] = useState(false);
    const [textoBotao, setTexto] = useState('Mostrar Resultados')

    useEffect( () => {
        const fetchData = async () => {
            try {
                let data = await query3();
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
                <h3>3. Qual é o estado civil predominante entre os solicitantes?</h3>
                <Button size="small" variant="contained" color="primary"
                onClick={handleMostarResultados}>{textoBotao}</Button>
            </div>
            { mostrarResultados &&
            <table className="table">
                <thead>
                    <tr>
                        <th>Estado Civil</th>
                        <th>Número de Solicitantes</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            <td>{item.estadocivil}</td>
                            <td>{item.numerosolicitantes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
        </div>
    )
}
