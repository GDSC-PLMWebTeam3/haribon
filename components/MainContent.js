import UserInfo from "./UserInfo";
import Feed from "./Feed";
import styles from "../styles/MainContent.module.css";
import Trending from "./Trending";
export default function MainContent(props) {
	return (
		<main className={styles.mainContent}>
			<div className={styles.container}>
				<div className={styles.info}>
					<UserInfo email={props.email} user={props.user} />
				</div>
				<div className={styles.feed}>
					<Feed email={props.email} />
				</div>
				<div className={styles.trend}>
					<Trending />
				</div>
			</div>
		</main>
	);
}