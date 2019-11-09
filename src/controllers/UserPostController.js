const UserPost = require('../models/User_Post');

module.exports = {
    async index(req, res) {
        const user_post = await UserPost.findAll();
        return res.json(user_post);
    },
    async search(req, res) {
        const user_post = await UserPost.findByPk(req.params.id);
        return res.json(user_post)
    },
    async create(req, res) {
        const user_post = await UserPost.create(req.body)
        return res.json(user_post);
    },
    async update(req, res) {
        const user_post = await UserPost.findByPk(req.params.id);
        await user_post.update(req.body);
        return res.json(user_post);
    },
    async destroy(req, res) {
        const user_post = await UserPost.findByPk(req.params.id);
        await user_post.destroy()
        return res.send();
    }
};