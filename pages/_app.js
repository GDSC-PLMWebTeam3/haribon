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
				<title>Haribon</title>
			</Head>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
}