const Sequelize = require('sequelize');
const db = require('../../config/database');

const Post = db.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});
/* 
Post.sync({ force: true });
Post.create({
    title: "nodeJS",
    content: "Teste criação do node"
});
*/
module.exports = Post;