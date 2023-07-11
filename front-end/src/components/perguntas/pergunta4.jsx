import { useState, useEffect } from "react";
import { query4 } from "../../services/Connection";
import '../../styles/tabela.css';
import '../../styles/pergunta.css';

export function Pergunta4() {
    const [dados, setDados] = useState([{}]);
    const [mostrarResultados, setMostrar] = useState(false);
    const [textoBotao, setTexto] = useState('Mostrar Resultados')

    useEffect( () => {
        const fetchData = async () => {
            try {
                let data = await query4();
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
                <h3>4. Qual é a faixa etária mais comum entre os solicitantes?</h3>
                <button onClick={handleMostarResultados}>{textoBotao}</button>
            </div>
            { mostrarResultados &&
            <table className="table">
                <thead>
                    <tr>
                        <th>Faixa Etária</th>
                        <th>Número de Solicitantes</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            <td>{item.faixaetaria}</td>
                            <td>{item.numerosolicitantes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
        </div>
    )
}
