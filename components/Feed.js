import Image from "next/image";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import styles from "../styles/MainContent/Feed.module.css";
import useFetchPosts from "../hooks/useFetchPosts";
import { useState, useEffect } from "react";
import useLikePost from "../hooks/useLikePost";
import useUnlikePost from "../hooks/useUnlikePost";
export default function Feed(props) {
	const [posts, setPosts] = useState("Loading");

	async function getPosts() {
		setPosts(await useFetchPosts("/api/posts"));
	}

	async function likePost(id) {
		const res = await useLikePost(id, props.email);
		getPosts();
	}

	async function unlikePost(id) {
		const res = await useUnlikePost(id, props.email);
		getPosts();
	}

	async function createPost(post, anonymous) {
		const res = await fetch("/api/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: props.email,
				anonymous: anonymous,
				post: post,
			})
		});
		getPosts();
	}

	async function deletePost(id) {
		const res = await fetch("/api/posts", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				postId: id,
				email: props.email,
			})
		});
		getPosts();
	}

	async function commentPost(id, comment, anonymous) {
		const res = await fetch("/api/posts/comment/commentPost", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				postId: id,
				email: props.email,
				comment: comment,
				anonymous: anonymous
			})
		});
		getPosts();
	}

	useEffect(() => {
		getPosts();
	}, []);


	return (
		<section className={styles.feed}>
			<CreatePost createPost={createPost} />
			<Posts
				email={props.email}
				posts={posts}
				likePost={likePost}
				unlikePost={unlikePost}
				deletePost={deletePost}
			/>
		</section>
	);
}


