// 🎯 GET ALL POSTS FROM SPECIFIC EMAIL

import connectMongo from "../../../lib/connectMongo";
import Post from "../../../models/postsModel";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next'.NextApiResponse)} res
 */

export default async function getUserPost(req, res) {
	const { method } = req;
	const email = req.query.email;
	await connectMongo();

	switch (method) {
		case "GET":
			try {
				const posts = await Post.find({ email: email }).sort({ date: -1 }).exec();
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