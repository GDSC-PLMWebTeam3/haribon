import '../styles/globals.css';
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<>
			<Head>
				<meta name="description" content="Share ideas, safe space, and connect with your fellow PLM Haribons!" />
				<title>Haribon</title>
				<link rel="shortcut icon" href="/bare-logo.png" type="image/x-icon" />
			</Head>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
}