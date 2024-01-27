const { mongooseClient } = require("../connection");

const userSchema = new mongooseClient.Schema({
    name: String,
    email: String
})

exports.UserModel = mongooseClient.model("users", userSchema);
