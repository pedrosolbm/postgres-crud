const Sequelize = require('sequelize');
const db = require('./database');
const Post = require('./Post')
const User = db.define('users', {
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
    },
});

/* User.create({
    firstName: "José",
    lastName: "Silva",
    age: '18',
    email: 'ze@meuemail.com'
}); */
User.hasMany(Post);
Post.belongsTo(User);

module.exports = User;