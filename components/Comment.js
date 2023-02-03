import styles from "../styles/MainContent/Feed/Comment.module.css";
import Image from "next/image";
export default function Comment(props) {
	const time = new Date(props.date);
	const date = time.toDateString();
	const hour = time.getHours();
	const min = time.getMinutes();
	return (
		<section className={styles.comment}>
			<div className={styles.commentHeading}>
				<div>
					<h2>{
						props.anonymous ? "Anon" :
							props.email.split("@")[0]
					}</h2>
					<p className={styles.date}>{date} @ {hour}:{min}</p>
				</div>
				{
					props.sessionEmail == props.email &&
					<button onClick={props.deleteComment}>
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
			<p className={styles.content}>{props.comment}</p>
		</section>
	);
}