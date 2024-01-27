const { mongooseClient } = require("../database/connection");
const { PostModel } = require("../database/schema/post");
const { UserModel } = require("../database/schema/user")
const { ObjectId } = mongooseClient.Types;

/**
 * This function is used to create a post 
 * If the user trying to create the post is not existing in the DB then it will throw an error
 * @param {Object} createBody 
 * @returns 
 */
exports.createPost = async (createBody) => {
   const isUserExist = await UserModel.findById(new ObjectId(createBody.userId)).lean();
   if (!isUserExist) {
        throw 'User not exist';
   }
   return await PostModel.create(createBody);
}

// This function is used to fetch all the post list (Including the search functionality)
exports.findAllPost = async (search) => {
    search = new RegExp(search, 'i');
    const data = await PostModel.find({
        $or: [
            { title: search },
            { content: search },
            {
                userId: {
                    $in: await UserModel.findOne({ name: search }).distinct('_id')
                }
            }
        ]
    }).populate('userId', 'name email').lean();
    return data;
}