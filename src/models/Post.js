const Sequelize = require('sequelize');
const db = require('./database');

const Post = db.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});

/* Post.create({
    title: "nodeJS",
    content: "Teste criação do node"
});
 */
module.exports = Post;