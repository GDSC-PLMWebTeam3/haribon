import styles from "../styles/MainContent/Feed/Comment.module.css";
import Image from "next/image";
export default function Comment(props) {
	const commentDate = props.date.split("T")[0];
	const commentTime = props.date.split("T")[1].slice(0, 5);
	return (
		<section className={styles.comment}>
			<div className={styles.commentHeading}>
				<div>
					<h2>{props.email.split("@")[0]}</h2>
					<p className={styles.date}>{commentDate} @ {commentTime}</p>
				</div>
				{
					props.sessionEmail == props.email &&
					<button>
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
			<p className={styles.content}>Comment</p>
		</section>
	);
}