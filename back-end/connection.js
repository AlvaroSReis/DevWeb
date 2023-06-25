//const {Client} = require('pg')
const { Pool } = require('pg')
/*
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "postgres",
    schema: 'public'
})
*/
const client = new Pool({
    host: "devweb.crnmq06dvith.us-east-1.rds.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "12345678",
    database: "postgres",
    schema: "previdencia_social"
})

module.exports = client