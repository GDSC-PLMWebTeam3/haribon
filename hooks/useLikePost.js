export default async function useLikePost(id, email) {
	const res = await fetch("/api/posts/like/likePost", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ postId: id, email: email })
	});
	const data = await res.json();
	return data;
}