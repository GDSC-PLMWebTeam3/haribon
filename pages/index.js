import Head from 'next/head';
import Image from 'next/image';
import loginStyles from '../styles/Login.module.css';
import Link from 'next/link';
import React from "react";
import { getCsrfToken, getSession } from "next-auth/react";

export default function Home({ csrfToken }) {
	const [formData, setFormData] = React.useState({
		email: "",
	});

	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: value
			};
		});
	}

	return (
		<main className={loginStyles.loginPage}>
			<section className={loginStyles.logoSection}>
				<img src="/full-logo.png" alt="Haribon" />
				<p>
					Share ideas, safe space, and connect with your fellow
					<span> PLM HARIBONS.</span>
				</p>
			</section>
			<section className={loginStyles.loginSection}>
				<form method="post" action="/api/auth/signin/email">
					<input name="csrfToken" type="hidden" defaultValue={csrfToken} />
					<label htmlFor="username">
						PLM Email
						<input
							type="email"
							name="email"
							id="email"
							value={formData.email}
							onChange={handleInputChange}
							autoComplete="true"
						/>
					</label>
					<button type="submit">Login</button>
				</form>
			</section>
		</main>
	);
}

export async function getServerSideProps(context) {
	const csrfToken = await getCsrfToken(context);
	const session = await getSession(context);
	console.log(session);
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