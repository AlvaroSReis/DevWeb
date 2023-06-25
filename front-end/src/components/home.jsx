import { useEffect, useState } from "react";
import { query3, query4, query5, query6,
     query7, query8, query9, query10} from "../services/Connection";
import '../styles/tabela.css';
//import Button from '@material-ui/core/Button';


export default function Home() {
    const [dados3, setDados3] = useState([{}]);
    const [dados4, setDados4] = useState([{}]);
    const [dados5, setDados5] = useState([{}]);
    const [dados6, setDados6] = useState([{}]);
    const [dados7, setDados7] = useState([{}]);
    const [dados8, setDados8] = useState([{}]);
    const [dados9, setDados9] = useState([{}]);
    const [dados10, setDados10] = useState([{}]);

    useEffect( () => {
        const fetchData = async () => {
            try {
                let data = await query3();
                setDados3(JSON.parse(data));
                data = await query4();
                setDados4(JSON.parse(data));
                data = await query5();
                setDados5(JSON.parse(data));
                data = await query6();
                setDados6(JSON.parse(data));
                data = await query7();
                setDados7(JSON.parse(data));
                data = await query8();
                setDados8(JSON.parse(data));
                data = await query9();
                setDados9(JSON.parse(data));
                data = await query10();
                setDados10(JSON.parse(data));
            } catch(error) {
                console.error(error);
            }
        };

        fetchData();
    }, [])

    useEffect( () => {
        //console.log(dados)
    }, [dados3, dados4, dados5, dados6, dados7, dados8, dados9, dados10]);

    return(
        <div style={{marginTop: '80px'}}>
            <h1>3. Qual é o estado civil predominante entre os solicitantes?</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Estado Civil</th>
                        <th>Número de Solicitantes</th>
                    </tr>
                </thead>
                <tbody>
                    {dados3.map((item, index) => (
                        <tr key={index}>
                            <td>{item.estadocivil}</td>
                            <td>{item.numerosolicitantes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>4. Quais são as faixas etárias mais comuns entre os solicitantes?</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Faixa Etária</th>
                        <th>Número de Solicitantes</th>
                    </tr>
                </thead>
                <tbody>
                    {dados4.map((item, index) => (
                        <tr key={index}>
                            <td>{item.faixaetaria}</td>
                            <td>{item.numerosolicitantes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>5. Qual é a proporção de homens e mulheres que solicitaram protocolos?</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sexo</th>
                        <th>Número de Solicitantes</th>
                    </tr>
                </thead>
                <tbody>
                    {dados5.map((item, index) => (
                        <tr key={index}>
                            <td>{item.sexo}</td>
                            <td>{item.numerosolicitantes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>
                6. Qual é o nível de escolaridade mais comum entre os solicitantes? 
            </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nível de Escolaridade</th>
                        <th>Número de Solicitantes</th>
                    </tr>
                </thead>
                <tbody>
                    {dados6.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nivelescolaridade}</td>
                            <td>{item.numerosolicitantes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>7. Qual é a raça/cor predominante entre os solicitantes?</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Raça/Cor</th>
                        <th>Número de Solicitantes</th>
                    </tr>
                </thead>
                <tbody>
                    {dados7.map((item, index) => (
                        <tr key={index}>
                            <td>{item.racacor}</td>
                            <td>{item.numerosolicitantes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>8. Em quais municípios ocorreu o maior número de emissões de carteira de trabalho? </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Município</th>
                        <th>Número de Emissões</th>
                    </tr>
                </thead>
                <tbody>
                    {dados8.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nomemunicipioorgao}</td>
                            <td>{item.numeroemissões}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>9. Qual é a nacionalidade mais comum entre os solicitantes? </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nacionalidade</th>
                        <th>Número de Solicitantes</th>
                    </tr>
                </thead>
                <tbody>
                    {dados9.map((item, index) => (
                        <tr key={index}>
                            <td>{item.descricaonacionalidade}</td>
                            <td>{item.numerosolicitantes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>10. Quantos protocolos foram emitidos em cada estado?</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Estado</th>
                        <th>Número de Protocolos</th>
                    </tr>
                </thead>
                <tbody>
                    {dados10.map((item, index) => (
                        <tr key={index}>
                            <td>{item.siglauforgao}</td>
                            <td>{item.numeroprotocolos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
