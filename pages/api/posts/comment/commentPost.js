// 🎯 COMMENT ON A POST

import connectMongo from "../../../../lib/connectMongo";
import Post from "../../../../models/postsModel";
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next'.NextApiResponse)} res
 */

export default async function commentPost(req, res) {
	const { method } = req;
	await connectMongo();
	switch (method) {
		case "PUT":
			try {
				const { postId, anonymous, email, comment } = req.body;
				const post = await Post.findOneAndUpdate(
					{ _id: postId },
					{ $push: { comments: { email, anonymous, comment } } }
				).exec();
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