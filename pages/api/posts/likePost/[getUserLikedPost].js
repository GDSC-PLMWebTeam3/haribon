// 🎯 LIKED POST BY A USER

import connectMongo from "../../../../lib/connectMongo";
import Post from "../../../../models/postsModel";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next'.NextApiResponse)} res
 */

export default async function likePost(req, res) {
	const { method } = req;
	const userEmail = req.query.getUserLikedPost;
	await connectMongo();
	switch (method) {
		case "GET":
			try {
				const posts = await Post.find({ likes: userEmail }).sort({ cpuTime: 'descending' }).exec();
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