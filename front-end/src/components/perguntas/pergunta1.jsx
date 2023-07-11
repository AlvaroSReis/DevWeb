import { useState, useEffect } from "react";
import { query1 } from "../../services/Connection";
import '../../styles/tabela.css';
import '../../styles/pergunta.css';

export function Pergunta1() {
    const [dados, setDados] = useState([{}]);
    const [mostrarResultados, setMostrar] = useState(false);
    const [textoBotao, setTexto] = useState('Mostrar Resultados')

    useEffect( () => {
        const fetchData = async () => {
            try {
                let data = await query1();
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
        //console.log(mostrarResultados);
        setTexto(mostrarResultados? 'Mostrar Resultados' : 'Ocultar Resultados')
    };

    return(
        <div className="pergunta-container">
            <div className="pergunta">
                <h3>1. Quais são os trinta órgãos com o maior número total de protocolos emitidos? </h3>
                <button onClick={handleMostarResultados}>{textoBotao}</button>
            </div>
            { mostrarResultados &&
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome Orgão</th>
                        <th>Número de Solicitantes</th>
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