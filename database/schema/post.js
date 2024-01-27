const { mongooseClient } = require("../connection");

const postSchema = new mongooseClient.Schema({
    title: String,
    content: String,
    userId: [
        { 
            type: mongooseClient.Schema.Types.ObjectId,
            ref: 'users'
        }
    ]
})

exports.PostModel = mongooseClient.model("post", postSchema);
