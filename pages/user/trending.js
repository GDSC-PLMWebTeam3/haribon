import PageLayout from "../../components/PageLayout";
import Trending from "../../components/Trending";
import { signOut, getSession } from "next-auth/react";
import styles from "../../styles/TrendingPage.module.css";
export default function trending(props) {
	return (
		<>
			<PageLayout email={props.email}>
				<main className={styles.main}>
					<section className={styles.container}>
						<Trending />
					</section>
				</main>
			</PageLayout>
		</>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);
	const email = session.user.email;
	return {
		props: { email }
	};
}