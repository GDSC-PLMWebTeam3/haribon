import { useEffect, useState } from "react";
import useFetchPosts from "../hooks/useFetchPosts";
import Image from "next/image";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import styles from "../styles/MainContent/Feed/Posts.module.css";
import Comment from "./Comment";
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
	const [showComments, setShowComments] = useState(true);
	const id = post.id;
	const postDate = post.date.split("T")[0];
	const postTime = post.date.split("T")[1].slice(0, 5);
	return (
		<article className={styles.postContainer}>
			<div className={styles.post}>
				<div className={styles.postHeading}>
					<div className={styles.user}>
						<div className={styles.imageContainer}>
							<Image
								src={"/user-img.jpg"}
								alt=""
								width={612}
								height={362}
							/>
						</div>
						<div>
							<h1>
								{post.anonymous ? "Anon" : post.email.split("@")[0]}
							</h1>
							<p className={styles.date}>{postDate} @ {postTime}</p>
						</div>
					</div>
					{
						sessionEmail == post.email &&
						<button onClick={deletePost}>
							<Image
								className={styles.imgDelete}
								src={"/icon-delete.png"}
								alt="Delete"
								width={512}
								height={512}
							/>
						</button>
					}
				</div>
				<p className={styles.content}>{post.post}</p>
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
					<button onClick={() => setShowComments(!showComments)}>
						<Image
							src={"/icon-comment.png"}
							alt=""
							width={512}
							height={512}
						/>
					</button>
				</div>
				{
					showComments &&
					post.comments.map(comment => {
						return (
							<div key={nanoid()}>
								<Comment
									sessionEmail={sessionEmail}
									email={comment.email}
									anonymous={comment.anonymous}
									comment={comment.comment}
									date={comment.date}
								/>
								<AddComment key={nanoid()} postId={post._id} />
							</div>
						);
					})}
			</div>
		</article >
	);
}

function AddComment(props) {
	const [comment, setComment] = useState({
		comment: "",
		anonymous: false
	});
	console.log(comment);
	function handleCommentChange(event) {
		const { name, type, checked, value } = event.target;
		setComment(prevState => {
			return {
				...prevState,
				[name]: type == "checkbox" ? checked : value
			};
		});
	}
	return (
		<>
			<form className={styles.commentForm}>
				<div className={styles.addComment}>
					<textarea
						name="comment"
						title="Comment"
						value={comment.comment}
						onChange={handleCommentChange}
					/>
					<button>
						<Image
							src={"/icon-send.png"}
							alt=""
							width={512}
							height={512}
							title={"Send Comment"}
						/>
					</button>
				</div>
				<label htmlFor="commentAnonymous">
					<input
						type="checkbox"
						name="anonymous"
						id="anonymous"
						value={comment.anonymous}
						onChange={handleCommentChange}
					/>
					Comment anonymously
				</label>
			</form>
		</>
	);
}