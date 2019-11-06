/* Importar os módulos utilizando o require */
const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

/* Obtendo acesso ao express através da const app para execuar funções*/
app = express(); //Iniciando o APP

/* 
Usando as funções de Parser
O middleware que lida com os dados codificados retornam para o objeto bodyParser
extended = false é uma opção de configuração que informa
bodyParser.json traduz as informações HTTP para JSON
*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Bloco de conexão sequelize com o postgreSQL */
const sequelize = new Sequelize
    ('posts', 'postgres', 'postgres', { // 'banco', 'usuario', 'senha'
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    });

/* Definição da tabela 'posts' do banco posts */
const Post = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});

/*
Função para criar posts. Está comentado porque senão
fará uma inclusão a cada execução do programa
*/

/* Post.create({
    title: "nodeJS",
    content: "Teste de criação do Node"
}); */

const User = sequelize.define('users', {
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
});

/* User.create({
    firstName: "José",
    lastName: "Silva",
    age: '18',
    email: "seuZe@meuemail.com"
});
 */

/* Post.sync({ force: true });
User.sync({ force: true });
 */

app.get('/list/users', async (req, res) => {
    const user = await User.findAll({ include: [{ all: true }] });

    return res.json(user);
})

app.get('/list/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);

    return res.json(user)
});

app.get('/list/posts', async (req, res) => {
    const post = await Post.findAll({});

    return res.json(post);

});

app.get('/list/posts/:id', async(req, res)=>{
    const post = await Post.findByPk(req.params.id);

    return res.json(post);
});

app.post('/register/post', async(req, res)=>{
    const post = await Post.create(req.body);

    return res.json(post);
});

app.post('/register/user', async(req, res) =>{
    const user = await User.create(req.body);

    return res.json(user);
});

app.put('/update/user/:id', async(req, res)=>{
    const user = await User.findByPk(req.params.id);

    await user.update(req.body);

    return res.json(user);
});

app.put('/update/post/:id', async(req, res)=>{
    const post = await Post.findByPk(req.params.id);

    await post.update(req.body);

    return res.json(post);
});

app.delete('/delete/user/:id', async(req, res)=>{
    const user = await User.findByPk(req.params.id);

    await user.destroy();

    return res.send();
});


app.delete('/delete/post/:id', async(req, res)=>{
    const post = await Post.findByPk(req.params.id);
    
    await post.destroy();

    return res.send();
});

app.listen(3001);

/* TRANSFORMAR ESSE ARQUIVO EM PADRÃO MVC MONGOOSE VALE 2 */