import { Schema, model, models } from "mongoose";

const commentSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	anonymous: {
		type: Boolean,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
});

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
		type: Date,
		default: Date.now
	},
	likes: [String],
	comments: [commentSchema]
});

const Post = models.Post || model('Post', postSchema);

export default Post;