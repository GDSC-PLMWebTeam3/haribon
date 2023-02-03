import { useEffect, useState } from "react";
import useFetchPosts from "../../../hooks/useFetchPosts";
import styles from "../../../styles/MainContent/Feed/Posts.module.css";
import Image from "next/image";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
export default function Posts(props) {


	if (props.posts == "Loading" || !props.posts) {
		return <p>Loading...</p>;
	}
	return (
		<section className={styles.allPostsContainer}>
			{props.posts.map((post) => {
				return (
					<Post
						key={nanoid()}
						post={post}
						sessionEmail={props.email}
						likePost={() => props.likePost(post._id)}
						unlikePost={() => props.unlikePost(post._id)}
						deletePost={() => props.deletePost(post._id)}
					/>
				);
			})}
		</section>
	);
}

function Post({
	post,
	sessionEmail,
	likePost,
	unlikePost,
	deletePost
}) {
	const router = useRouter();
	const id = post.id;

	return (
		<article className={styles.postContainer}>
			<div className={styles.imageContainer}>
				<Image
					src={"/user-img.jpg"}
					alt=""
					width={612 / 2}
					height={362 / 2}
				/>
			</div>
			<div className={styles.post}>
				<div className={styles.postHeading}>
					<h1>
						{post.anonymous ? "Anon" : post.email.split("@")[0]}
					</h1>
					{
						sessionEmail == post.email &&
						<button onClick={deletePost}>
							<Image
								src={"/icon-delete.png"}
								alt="Delete"
								width={512}
								height={512}
							/>
						</button>
					}
				</div>
				<p>{post.post}</p>
				<div className={styles.buttons}>
					{post.likes.includes(sessionEmail) ?
						<button onClick={unlikePost}>
							<Image
								src={"/icon-heart-colored.png"}
								alt=""
								width={512}
								height={512}
							/>
						</button> :
						<button onClick={likePost}>
							<Image
								src={"/icon-heart-outline.png"}
								alt=""
								width={512}
								height={512}
							/>
						</button>
					}
					<button>
						<Image
							src={"/icon-comment.png"}
							alt=""
							width={512}
							height={512}
						/>
					</button>
				</div>
			</div>
		</article >
	);
}