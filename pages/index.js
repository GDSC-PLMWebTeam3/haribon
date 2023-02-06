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
				<Image
					src="/logo.png"
					alt="Haribon"
					width={1125}
					height={270}
					priority
				/>
				<p>
					Share ideas, safe space, and connect with your fellow
					<span> PLM HARIBONS.</span>
				</p>
			</section>
			<section className={loginStyles.loginSection}>
				<form method="post" action="/api/auth/signin/email">
					<input name="csrfToken" type="hidden" defaultValue={csrfToken} />
					<label htmlFor="username">
						{/* PLM Email */}
						<input
							type="email"
							name="email"
							id="email"
							value={formData.email}
							onChange={handleInputChange}
							autoComplete="true"
							placeholder="PLM Email"
							title="PLM Email"
						/>
					</label>
					{/* <button type="submit" disabled={!formData.email.endsWith("@plm.edu.ph")}>Login</button> */}
					<button type="submit">Login</button>
				</form>
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