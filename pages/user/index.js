import Navigation from "../../components/Navigation";
import { signOut, getSession } from "next-auth/react";
export default function Home(props) {
	return (
		<>
			<Navigation user={props.user}></Navigation>
			<button onClick={() => signOut()}>Sign Out</button>
		</>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);
	const user = session.user.email;
	return {
		props: { user }
	};
}