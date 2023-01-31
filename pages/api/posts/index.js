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
				const posts = await Post.find({}).sort({ cpuTime: 'descending' }).exec();
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
				const date = new Date();
				const dd = String(date.getDate()).padStart(2, '0');
				const mm = String(date.getMonth() + 1).padStart(2, '0');
				const yyyy = date.getFullYear();
				const time = date.getTime();
				const hh = date.getHours();
				const min = date.getMinutes();

				const post = await Post.create({
					...req.body,
					date: `${yyyy}/${mm}/${dd}`,
					time: `${hh}:${min}`,
					cpuTime: time,
					likes: 0
				});

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