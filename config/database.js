
const Sequelize = require('sequelize');

//Criando a conexão com o banco de dados de acordo com a configuração do config.json
module.exports = new Sequelize('posts', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});