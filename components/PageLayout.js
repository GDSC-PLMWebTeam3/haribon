import React, { Children } from "react";
import Image from "next/image";
import navStyles from "../styles/PageLayout.module.css";
import { signOut, getSession } from "next-auth/react";

export default function PageLayout(props) {
	return (
		<>
			<Header email={props.email} />
			{props.children}
			<BottomNavigation />
		</>
	);
}

function Header(props) {
	return (
		<header className={navStyles.header}>
			<form className={navStyles.logoAndSearch}>
				<Image
					src="/bare-logo.png"
					alt="Haribon"
					width={200}
					height={200}
				/>
				<input type="text" name="search" className={navStyles.search} />
			</form>
			<div className={navStyles.navigations}>
				<Image src="/icon-home.png" alt="Home" width={48} height={48} />
				<Image src="/icon-messages.png" alt="Messages" width={48} height={48} />
				<Image src="/icon-friends.png" alt="Friends" width={48} height={48} />
				<Image src="/icon-bell.png" alt="Notifications" width={48} height={48} />
			</div>
			<div className={navStyles.userMenu}>
				<p className={navStyles.email}>{props.email}</p>
				<Image
					src={"/user.png"}
					alt={"Menu"}
					width={512}
					height={512}
				/>
				<div className={navStyles.dropdown}>
					<a onClick={() => signOut()}>Sign Out</a>
				</div>
			</div>
		</header>
	);
}

function BottomNavigation() {
	return (
		<nav className={navStyles.bottomNavigation}>
			<img src="/icon-home.png" alt="Home" />
			<img src="/icon-messages.png" alt="Messages" />
			<img src="/icon-friends.png" alt="Friends" />
			<img src="/icon-bell.png" alt="Home" />
		</nav>
	);
}