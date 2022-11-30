import Head from 'next/head';
import Image from 'next/image';
import loginStyles from '../styles/Login.module.css';
import Link from 'next/link';

export default function Home() {
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
						<input type="text" name="username" id="username" />
					</label>
					<label htmlFor="password">
						Password
						<input type="password" name="password" id="password" />
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
