const express = require('express');
const connection = require('./connection');
const app = express();
const cors = require('cors');
const port = 8080;


connection.on('error', (err) => {
    //Detecção de erro na coneção com o banco de dados.
    //console.error('Error occurred:', err);
});

app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Verificação se o back esta funcionando via navegador.

app.get('/', (req, res) => {
  res.json("Rodando");
});


// Querys ao banco de dados para obter dados.

function executeQuery(query, res) {
    connection.query(query, (err, result) => {
      if (err) {
        if (err.code === 'ECONNRESET') {
          console.error('ECONNRESET error:', err);
          res.status(500).send('Internal Server Error');
        } else {
          res.status(500).send('Error executing query');
        }
        res.send('Error executing query');
      } else {
        res.send(result);
      }
    });
  }

app.get('/query1', (req,res)=> {
    executeQuery(`SELECT NomeOrgao, COUNT(*) AS NumeroProtocolos
    FROM previdencia_social.Dados
    GROUP BY NomeOrgao
    ORDER BY NumeroProtocolos DESC
    LIMIT 30;`,res);
});

app.get('/query2', (req,res)=> {
  executeQuery(`SELECT NomeMunicipioOrgao, COUNT(*) AS NumeroProtocolos
    FROM previdencia_social.Dados
    GROUP BY NomeMunicipioOrgao
    ORDER BY NumeroProtocolos DESC
    LIMIT 30;`,res);
});

app.get('/query3', (req, res) => {
  executeQuery(`SELECT EstadoCivil, COUNT(*) AS NumeroSolicitantes
    FROM previdencia_social.Dados
    GROUP BY EstadoCivil
    ORDER BY NumeroSolicitantes DESC
    LIMIT 1;`, res);
});

app.get('/query4', (req, res) => {
  executeQuery(`SELECT CASE
    WHEN DataNascimento >= 20060101 THEN '0-17'
    WHEN DataNascimento >= 19960101 THEN '18-25'
    WHEN DataNascimento >= 19860101 THEN '26-35'
    WHEN DataNascimento >= 19760101 THEN '36-45'
    WHEN DataNascimento >= 19660101 THEN '46-55'
    ELSE '56+' END AS FaixaEtaria,
    COUNT(*) AS NumeroSolicitantes
    FROM previdencia_social.Dados
    GROUP BY FaixaEtaria
    ORDER BY NumeroSolicitantes DESC
    LIMIT 1;`, res);
});

app.get('/query5', (req, res) => {
  executeQuery(`SELECT Sexo, COUNT(*) AS NumeroSolicitantes
    FROM previdencia_social.Dados
    GROUP BY Sexo;`, res);
});

app.get('/query6', (req, res) => {
  executeQuery(`SELECT NivelEscolaridade, COUNT(*) AS NumeroSolicitantes
    FROM previdencia_social.Dados
    GROUP BY NivelEscolaridade
    ORDER BY NumeroSolicitantes DESC
    LIMIT 1;`, res);
});

app.get('/query7', (req, res) => {
  executeQuery(`SELECT RacaCor, COUNT(*) AS NumeroSolicitantes
    FROM previdencia_social.Dados
    GROUP BY RacaCor
    ORDER BY NumeroSolicitantes DESC
    LIMIT 1;`, res);
});

app.get('/query8', (req, res) => {
  executeQuery(`SELECT NomeMunicipioOrgao, COUNT(*) AS NumeroEmissões
    FROM previdencia_social.Dados
    WHERE TipoProtocolo = '1ª Via'
    GROUP BY NomeMunicipioOrgao
    ORDER BY NumeroEmissões DESC
    LIMIT 30;`, res);
});

app.get('/query9', (req, res) => {
  executeQuery(`SELECT DescricaoNacionalidade, COUNT(*) AS NumeroSolicitantes
    FROM previdencia_social.Dados
    WHERE DescricaoNacionalidade IS NOT NULL
    GROUP BY DescricaoNacionalidade 
    ORDER BY NumeroSolicitantes 
    DESC LIMIT 5;`, res);
});

app.get('/query10', (req, res) => {
  executeQuery(`SELECT SiglaUFOrgao, COUNT(*) AS NumeroProtocolos
    FROM previdencia_social.Dados
    GROUP BY SiglaUFOrgao
    ORDER BY NumeroProtocolos DESC
    LIMIT 30;`, res);
});

// Armazenar email do usuario junto com latitude e longitude
app.post('/geolocate', (req, res)=> {
  const user = req.body;
  let insertQuery = `SELECT EXISTS(SELECT 1 FROM previdencia_social.usuarios WHERE email='${user.email}');`
  connection.query(insertQuery, (err, result) => {
    if(result.rows[0].exists == true){
      connection.query(`UPDATE previdencia_social.usuarios SET latitude = ${user.latitude}, 
      longitude = ${user.longitude}, nome = '${user.nome}' WHERE email = '${user.email}';`)
      res.send('Update sucessful')
    }else{
      connection.query(`INSERT INTO previdencia_social.usuarios(email, latitude, longitude, nome) 
      VALUES('${user.email}', '${user.latitude}', '${user.longitude}', '${user.nome}');`)
      res.send('Insertion sucessful')
    }
  })
})


// Obter latitude e longitude de todos os usuários.
app.get('/latitudeLongitude', (req, res) => {
  executeQuery(`SELECT *
    FROM previdencia_social.usuarios;`, res);
});

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
  //app.keepAliveTimeout = (60 * 1000) + 1000;
  //app.headersTimeout = (60 * 1000) + 2000;
});

connection.connect();