const Sequelize = require ('sequelize');
const User = require('../models/User');

module.exports={
    async index(req, res){
        const user = await User.findAll();
        return res.json(user);
    },

    async search(req, res) {
        const user = await User.findByPk(req.params.id);
        return res.json(user);
    },

    async create(req, res){
        const user = await User.create(req.body);
        return res.json(user);
    },
    async update(req, res){
        const user = await User.findByPk(req.params.id);
        await user.update(req.body);
        return res.json(user);
    },
    async destroy(req, res) {
        const user = await User.findByPk(req.params.id);
        await user.destroy();
        return res.send();
    }
};
