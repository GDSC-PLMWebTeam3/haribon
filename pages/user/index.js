import Image from "next/image";
import PageLayout from "../../components/PageLayout";
import { signOut, getSession } from "next-auth/react";
import MainContent from "../../components/MainContent";
import { useRouter } from "next/router";
export default function Home(props) {
	const user = props.email.split("@")[0];
	return (
		<>
			<PageLayout email={props.email}>
				<MainContent
					email={props.email}
					user={user}
				/>
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