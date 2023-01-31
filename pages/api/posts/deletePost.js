// 🎯 GET ALL POSTS FROM SPECIFIC EMAIL

import connectMongo from "../../../lib/connectMongo";
import Post from "../../../models/postsModel";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next'.NextApiResponse)} res
 */

export default async function deletePost(req, res) {
	const { method } = req;
	await connectMongo();

	switch (method) {
		case "POST":
			try {
				const { postId, email } = req.query.body;
				const posts = await Post.deleteOne({ _id: postId, email: email }).exec();
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