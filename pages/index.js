import Head from 'next/head';
import Image from 'next/image';
import loginStyles from '../styles/Login.module.css';
import Link from 'next/link';
import React from "react";

export default function Home() {
	const [formData, setFormData] = React.useState({
		username: "",
		password: ""
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
				<form action="">
					<label htmlFor="username">
						Username
						<input
							type="text"
							name="username"
							id="username"
							value={formData.username}
							onChange={handleInputChange}
							autoComplete="true"
						/>
					</label>
					<label htmlFor="password">
						Password
						<input
							type="password"
							name="password"
							id="password"
							value={formData.password}
							onChange={handleInputChange}
							autoComplete="true"
						/>
					</label>
					<button type="submit">Login</button>
					<Link href={"#"}>Forgot Password?</Link>
				</form>
				<div className={loginStyles.register}>
					<button>Register</button>
				</div>
			</section>
		</main>
	);
}
