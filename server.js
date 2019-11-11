//Importar os módulos utilizando o require
const express = require('express');
const bodyParser = require('body-parser');
const User = require('./src/models/User')
const Post = require('./src/models/Post')
//Routes
const routes = require('./src/routes');

//Arquivo do banco
const db = require('./src/models/database');

//Teste de Conexao 
db.authenticate()
    .then(() => console.log("Conectado ao banco..."))
    .catch(err => console.log("Error: ", err));


//Cria as tabelas

/* User.sync({ force: true });
Post.sync({ force: true }); */


//Iniciando o App
const app = express();
app.use(express.json())

//Body Parser
app.use(routes);
app.use(bodyParser.urlencoded({ extended: false }));

//Rotas
app.use('/list', require('./src/routes'));
app.get('/', (req, res) => { res.send("INDEX!"); });

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}...`));

