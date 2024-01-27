const { createPost, findAllPost } = require("./service");

exports.createPost = async (req, res) => {
    try {
        const createBody = {
            title: req.body.title,
            content: req.body.content,
            userId: req.body.userId
        }
        const data = await createPost(createBody);
        res.send(data);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.getAllPost = async (req, res) => {
    try {
        const data = await findAllPost(req.query.search);
        res.send(data);
    } catch (error) {
        console.log(error);
        throw error;
    }
}