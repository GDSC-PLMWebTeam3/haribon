// 🎯 LIKE POST

import connectMongo from "../../../../lib/connectMongo";
import Post from "../../../../models/postsModel";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next'.NextApiResponse)} res
 */

export default async function likePost(req, res) {
	const { method } = req;
	await connectMongo();
	// TODO: Dislike if user already likes the post.
	switch (method) {
		case "POST":
			try {
				const { postId, userEmail } = req.body;
				const post = await Post.findOneAndUpdate({ _id: postId }, { $push: { likes: userEmail } }).exec();

				res.status(200).json({
					success: true,
					data: post
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