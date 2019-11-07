//Importar os módulos utilizando o require
const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const requireDir = require('require-dir');
const path = require('path');

//Arquivo do banco
const db = require('./config/database');
const routes = require('./src/routes');

//Teste de Conexao 
db.authenticate()
    .then(()=> console.log("Conectado ao banco..."))
    .catch(err => console.log("Error: ",err));

//INICIANDO O APP
const app = express();
app.use(express.json())
/* Middleware */

//Body Parser
app.use(routes);
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res)=>{res.send("INDEX!");});

//Rotas

app.use('/list', require('./src/routes'));
/* app.use('/register', require('./src/routes'));
app.use('/update', require('./src/routes'));
app.use('/delete', require('./src/routes'));  */

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}...`));

