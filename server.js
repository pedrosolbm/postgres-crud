//Importar os módulos utilizando o require
const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

//***************************************** */

//Obtendo acesso ao express através de const app para executar funções express 

//INICIANDO O APP
const app = express();

//***************************************** */

//Usando as função de Parser
//O Middleware que lida com os dados codificados retornam para o objeto bodyParser.urlencoded (codificado por URL)
//extended = false é uma opção de configuração que informa ao analisador para usar a codificação clássica
//bodyParser.json traduz as informações HTTP para JSON

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//***************************************** */

//Bloco de conexão sequelize com o PostGreSQL

const sequelize = new Sequelize('posts', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});

//***************************************** */

//Definição da tabela posts do banco posts

/* 
const Post = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
}); */

//função para criar posts. Está comentado porque senão fará uma inclusão a cada execução do programa

/* Post.create({
    title: "nodeJS",
    content: "Teste criação do node"
}); */

//***************************************** */

//Definição da tabela users do banco posts

/* const User = sequelize.define('users', {
    firstName: {
        type: Sequelize.STRING,
        required: true,
    },
    lastName: {
        type: Sequelize.STRING,
        required: true,
    },
    age: {
        type: Sequelize.INTEGER,
        required: true,
    },
    email: {
        type: Sequelize.STRING,
        required: true,
    }

}); */

//função para criar users. Está comentado porque senão fará uma inclusão a cada execução do programa

/* User.create({
    firstName: "José",
    lastName: "Silva",
    age: '18',
    email: 'ze@meuemail.com'
}); */

//***************************************** */

//DEFINIÇÃO DAS FUNÇÕES DE CONTROLE

//LISTAGEM GERAL E POR ID (users)
app.get('/list/users', async(req, res) => {
    const user = await User.findAll({ include: [{ all: true }] });

    return res.json(user);
});

app.get('/list/users/:id', async(req, res) => {
    const user = await User.findByPk(req.params.id);

    return res.json(user);
});

//***************************************** */


//LISTAGEM GERAL E POR ID (posts)
app.get('/list/posts', async(req, res) => {
    const post = await Post.findAll({});

    return res.json(post);
});

app.get('/list/posts/:id', async(req, res) => {
    const post = await Post.findByPk(req.params.id);

    return res.json(post);
});

//***************************************** */

//FUNÇÃO DE CRIAÇÃO DE REGISTROS (posts e users)
app.post('/register/post', async(req, res) => {
    const post = await Post.create(req.body);

    return res.json(post);
});

app.post('/register/user', async(req, res) => {
    const user = await User.create(req.body);

    return res.json(user);
});

//***************************************** */

//FUNÇÃO DE ALTERAÇÃO DE REGISTROS, POR ID (posts e users)
app.put('/update/user/:id', async(req, res) => {
    const user = await User.findByPk(req.params.id);

    await user.update(req.body);

    return res.json(user);
});

app.put('/update/post/:id', async(req, res) => {
    const post = await Post.findByPk(req.params.id);

    await post.update(req.body);

    return res.json(post);
});

//***************************************** */


//FUNÇÃO DE EXCLUSÃO DE REGISTROS, POR ID (posts e users)
app.delete('/delete/user/:id', async(req, res) => {
    const user = await User.findByPk(req.params.id);

    await user.destroy();

    return res.send();
});

app.delete('/delete/post/:id', async(req, res) => {
    const post = await Post.findByPk(req.params.id);

    await post.destroy();

    return res.send();
});

//***************************************** */


//funções para sincronizar e criar as tabelas posts e users no banco, force:true serve para ter certeza que a tabela será gerada
//Está comentado porque senão fará uma inclusão a cada execução do programa
//Post.sync({ force: true });
//User.sync({ force: true });


//colocar a aplicação para escutar a porta 3001 do navegador
app.listen(3001);