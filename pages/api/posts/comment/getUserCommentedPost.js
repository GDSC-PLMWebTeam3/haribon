// 🎯 GET USER COMMENTS

import connectMongo from "../../../../lib/connectMongo";
import Post from "../../../../models/postsModel";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next'.NextApiResponse)} res
 */

export default async function getUserCommentedPost(req, res) {
	const { method } = req;
	await connectMongo();
	switch (method) {
		case "GET":
			try {
				const { email } = req.query;
				const posts = await Post.find({ "comments.email": email }).sort({ "comments.date": -1 }).exec();
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