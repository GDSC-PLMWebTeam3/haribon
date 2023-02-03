import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Error.module.css";
export default function ErrorPage(res) {
	const router = useRouter();
	const error = router.query.error;
	let code;
	let message;
	if (error == "AccessDenied") {
		code = 401;
		message = "Access Denied.";
	} else if (error == "Configuration") {
		code = 500;
		message = "Internal Server Error.";
	} else if (error == "Verification") {
		code = 498;
		message = "The sign in link is no longer valid.";
	} else {
		code = 404;
		message = "Bad Request.";
	}

	return (
		<div className={styles.container}>
			<Image
				src={"/bare-logo.png"}
				width={200}
				height={200}
			/>
			<div className={styles.error}>
				<h1>{code}</h1>
				<h2>{message}</h2>
			</div>
			<button onClick={() => router.replace("/")}>Go home</button>
		</div>
	);
}