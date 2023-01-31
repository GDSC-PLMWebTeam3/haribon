import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	anonymous: {
		type: Boolean,
		required: true,
	},
	post: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	cpuTime: {
		type: Number,
		required: true
	},
	likes: [String]
});

const Post = models.Post || model('Post', postSchema);

export default Post;