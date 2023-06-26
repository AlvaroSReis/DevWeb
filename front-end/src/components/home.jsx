import { Pergunta1 } from './perguntas/pergunta1';
import { Pergunta2 } from './perguntas/pergunta2';
import { Pergunta3 } from './perguntas/pergunta3';
import { Pergunta4 } from './perguntas/pergunta4';
import { Pergunta5 } from './perguntas/pergunta5';
import { Pergunta6 } from './perguntas/pergunta6';
import { Pergunta7 } from './perguntas/pergunta7';
import { Pergunta8 } from './perguntas/pergunta8';
import { Pergunta9 } from './perguntas/pergunta9';
import { Pergunta10 } from './perguntas/pergunta10';

export default function Home() {
    return(
        <div style={{marginTop: '100px'}}>
            <div>
                <p>
                    Essa página apresenta informações da  
                    Carteira de Trabalho e Previdência Social (CTPS) física,
                    que é o documento obrigatório para toda pessoa que venha a prestar 
                    algum tipo de serviço, seja na indústria, no comércio, 
                    na agricultura, na pecuária ou mesmo de natureza doméstica.
                </p>
            </div>
            <Pergunta1/>
            <Pergunta2/>
            <Pergunta3/>
            <Pergunta4/>
            <Pergunta5/>
            <Pergunta6/>
            <Pergunta7/>
            <Pergunta8/>
            <Pergunta9/>
            <Pergunta10/>
        </div>
    )
}
