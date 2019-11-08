const Sequelize = require('sequelize');
const db = require('../../config/database');

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
    }
});
/* 
User.sync({ force: true });
User.create({
    firstName: "José",
    lastName: "Silva",
    age: '18',
    email: 'ze@meuemail.com'
});
*/
module.exports = User;