// 🎯 CREATE POST
// 🎯 GET ALL POSTS

import connectMongo from "../../../lib/connectMongo";
import Post from "../../../models/postsModel";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next'.NextApiResponse)} res
 */

export default async function getAllPost(req, res) {
	const { method } = req;
	await connectMongo();

	switch (method) {
		case "GET":
			try {
				const posts = await Post.find({}).sort({ date: -1 }).exec();
				res.status(200).json({
					success: true,
					data: posts
				});
			} catch (error) {
				res.status(400).json({ success: false, error: 400 });
			}
			break;

		case "POST":
			try {
				const post = await Post.create({ ...req.body });
				res.status(200).json({
					success: true,
					data: post
				});
			} catch (error) {
				res.status(400).json({ success: false, error: 400 });
			}
			break;

		case "DELETE":
			try {
				const { postId, email } = req.body;
				const posts = await Post.findOneAndDelete({ _id: postId, email: email }).exec();
				res.status(200).json({
					success: true,
					data: posts
				});
			} catch (error) {
				res.status(400).json({ success: false, error: 400 });
			}
			break;

		default:
			res.status(400).json({ success: false });
			break;
	}
}