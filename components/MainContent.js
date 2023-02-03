import UserInfo from "./MainContent/UserInfo";
import Feed from "./MainContent/Feed";
import styles from "../styles/MainContent.module.css";
export default function MainContent(props) {
	return (
		<main className={styles.mainContent}>
			<div className={styles.container}>
				<UserInfo email={props.email} user={props.user} />
				<Feed email={props.email} />
			</div>
		</main>
	);
}