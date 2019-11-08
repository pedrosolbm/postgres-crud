const Sequelize = require('sequelize');
const db = require('../../config/database');

const UserPost = db.define('user_post', {
    userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('./User'),
            key: 'id'
        }
    },
    postID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('./Post'),
            key: 'id'
        }
    }
});

// UserPost.sync({ force: true });
/* UserPost.create({
    userID: 1,
    postID: 1
}); */
 
module.exports = UserPost;