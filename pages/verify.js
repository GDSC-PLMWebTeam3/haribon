import Image from 'next/image';
import { useRouter } from "next/router";
import styles from '../styles/Login.module.css';
import React from "react";
import { getCsrfToken, getSession } from "next-auth/react";

export default function Home({ csrfToken }) {
	const router = useRouter();

	function returnBtn() {
		router.replace("/");
	}

	return (
		<main className={styles.loginPage}>
			<section className={styles.logoSection}>
				<Image
					src="/logo.png"
					alt="Haribon"
					width={1125}
					height={270}
				/>
				<p>
					A sign in link has been sent to your
					PLM Email Address. Check the spam or
					junk folder if necessary.
				</p>
				<button
					className={styles.returnBtn}
					onClick={returnBtn}
				>
					Go home
				</button>
			</section>
		</main>
	);
}

export async function getServerSideProps(context) {
	const csrfToken = await getCsrfToken(context);
	const session = await getSession(context);
	if (session) {
		return {
			props: { session, csrfToken },
			redirect: {
				permanent: false,
				destination: "/user"
			}
		};
	}
	return {
		props: { csrfToken },
	};
}