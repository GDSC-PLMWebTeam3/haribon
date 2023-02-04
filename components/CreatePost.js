import styles from "../styles/MainContent/Feed/CreatePost.module.css";
import Image from "next/image";
import { useState } from "react";

export default function CreatePost(props) {
	const [post, setPost] = useState({
		content: "",
		anonymous: false
	});
	function handlePostChange(event) {
		const { value, type, name, checked } = event.target;
		setPost(prevState => {
			return {
				...prevState,
				[name]: type == "checkbox" ? checked : value
			};
		});
	}

	function handlePost(event) {
		event.preventDefault();
		props.createPost(post.content, post.anonymous);
		setPost({ content: "", anonymous: false });
	}
	return (
		<section className={styles.createPost}>
			{/* <div className={styles.imageContainer}>
				<Image
					src={"/user-img.jpg"}
					alt=""
					width={612 / 2}
					height={362 / 2}
				/>
			</div> */}
			<form onSubmit={handlePost} >
				<label htmlFor="anonymous" className={styles.anonymous}>
					<input
						type="checkbox"
						name="anonymous"
						id="anonymous"
						checked={post.anonymous}
						onChange={handlePostChange}
					/>
					Post anonymously
				</label>
				<textarea
					title="Create a post"
					name="content"
					id="content"
					placeholder="What's up?"
					value={post.content}
					onChange={handlePostChange}
				/>
				<div className={styles.buttons}>
					<label htmlFor="addPhoto">
						<Image
							src={"/icon-add-photo.png"}
							alt="Add Photo"
							width={108}
							height={108}
							title={"Add Photo"}
						/>
						<input type="file" name="addPhoto" id="addPhoto" hidden />
					</label>
					<button className={styles.btnPost}>Post</button>
				</div>
			</form>
		</section>
	);
}
