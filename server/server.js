const express = require('express')
const connection = require('./connection')
const app = express()
const cors = require('cors')

app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/',(req, res) => {
    res.json("Rodando")
})

app.get('/query1', (req,res)=> {
    connection.query(`SELECT NomeOrgao, 
    COUNT(*) AS NumeroProtocolos 
    FROM Dados GROUP BY NomeOrgao;`,
    (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    connection.end;
});

app.get('/query2', (req,res)=> {
    connection.query(`SELECT NomeMunicipioOrgao, 
    COUNT(*) AS NumeroProtocolos
    FROM Dados
    GROUP BY NomeMunicipioOrgao;`,
    (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    connection.end;
});

app.get('/query3', (req,res)=> {
    connection.query(`SELECT EstadoCivil, 
    COUNT(*) AS NumeroSolicitantes
    FROM Dados
    GROUP BY EstadoCivil
    ORDER BY NumeroSolicitantes DESC
    LIMIT 1; `,
    (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    connection.end;
});

app.get('/query4', (req,res)=> {
    connection.query(`SELECT CASE
     WHEN DataNascimento >= 20060101 THEN '0-17'
     WHEN DataNascimento >= 19960101 THEN '18-25'
     WHEN DataNascimento >= 19860101 THEN '26-35'
     WHEN DataNascimento >= 19760101 THEN '36-45'
     WHEN DataNascimento >= 19660101 THEN '46-55'
     ELSE '56+' END AS FaixaEtaria,
     COUNT(*) AS NumeroSolicitantes
    FROM Dados
    GROUP BY FaixaEtaria
    ORDER BY NumeroSolicitantes DESC;`,
    (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    connection.end;
});

app.get('/query5', (req,res)=> {
    connection.query(`SELECT Sexo, 
    COUNT(*) AS NumeroSolicitantes
    FROM Dados
    GROUP BY Sexo; 
    `,
    (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    connection.end;
});

app.get('/query6', (req,res)=> {
    connection.query(`SELECT NivelEscolaridade, 
    COUNT(*) AS NumeroSolicitantes
    FROM Dados
    GROUP BY NivelEscolaridade
    ORDER BY NumeroSolicitantes DESC
    LIMIT 1;`,
    (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    connection.end;
});

app.get('/query7', (req,res)=> {
    connection.query(`SELECT RacaCor, 
    COUNT(*) AS NumeroSolicitantes
    FROM Dados
    GROUP BY RacaCor
    ORDER BY NumeroSolicitantes DESC
    LIMIT 1; 
    `,
    (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    connection.end;
});

app.get('/query8', (req,res)=> {
    connection.query(`SELECT NomeMunicipioOrgao, 
    COUNT(*) AS NumeroEmissões
    FROM Dados
    WHERE TipoProtocolo = '1ª Via'
    GROUP BY NomeMunicipioOrgao
    ORDER BY NumeroEmissões DESC
    LIMIT 1;`,
    (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    connection.end;
});

app.get('/query9', (req,res)=> {
    connection.query(`SELECT DescricaoNacionalidade, 
    COUNT(*) AS NumeroSolicitantes
    FROM Dados
    GROUP BY DescricaoNacionalidade
    ORDER BY NumeroSolicitantes DESC
    LIMIT 1;`,
    (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    connection.end;
});

app.get('/query10', (req,res)=> {
    connection.query(`SELECT SiglaUFOrgao, 
    COUNT(*) AS NumeroProtocolos
    FROM Dados
    GROUP BY SiglaUFOrgao;`,
    (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    connection.end;
});



app.listen(9000, ()=>{console.log("Rodando")})

connection.connect()