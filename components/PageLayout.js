import React, { Children, useState } from "react";
import Image from "next/image";
import navStyles from "../styles/PageLayout.module.css";
import { signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function PageLayout(props) {
	const route = useRouter().route;
	return (
		<>
			<Header email={props.email} route={route} />
			{props.children}
			<BottomNavigation route={route} />
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
				<input type="text" name="search" className={navStyles.search} title={"Search"} />
			</form>
			<div className={navStyles.navigations}>
				<Link href="/user">
					<Image
						className={
							props.route == "/user" ?
								navStyles.currentRoute :
								""
						}
						src="/icon-home.png"
						alt="Home"
						width={48}
						height={48}
					/>
				</Link>
				<Link href="/user/trending">
					<Image
						className={
							props.route == "/user/trending" ?
								navStyles.currentRoute :
								""
						}
						src="/icon-trending.png"
						alt="Trending" width={48}
						height={48}
					/>
				</Link>
				<Image src="/icon-friends.png" alt="Friends" width={48} height={48} />
				<Image src="/icon-bell.png" alt="Notifications" width={48} height={48} />
			</div>
			<div className={navStyles.userMenu}>
				<p className={navStyles.email}>{props.email}</p>
				<Image
					src={"/menu.png"}
					alt={"Menu"}
					width={512}
					height={512}
				/>
				<div className={navStyles.dropdown}>
					<Link href="" className={navStyles.dropdownEmail}>{props.email}</Link>
					<Link href="" onClick={() => signOut()}>Sign Out</Link>
				</div>
			</div>
		</header>
	);
}

function BottomNavigation({ route }) {
	return (
		<nav className={navStyles.bottomNavigation}>
			<Link href="/user">
				<Image
					className={
						route == "/user" ?
							navStyles.currentRoute :
							""
					}
					src="/icon-home.png"
					alt="Home"
					width={48}
					height={48}
				/>
			</Link>
			<Link href="/user/trending">
				<Image
					className={
						route == "/user/trending" ?
							navStyles.currentRoute :
							""
					}
					src="/icon-trending.png"
					alt="Trending" width={48}
					height={48}
				/>
			</Link>
			<Image
				className={
					route == "/user/friends" ?
						navStyles.currentRoute :
						""
				}
				src="/icon-friends.png"
				alt="Friends"
				width={48}
				height={48}
			/>
			<Image
				className={
					route == "/user/notifications" ?
						navStyles.currentRoute :
						""
				}
				src="/icon-bell.png"
				alt="Notifications"
				width={48}
				height={48}
			/>
		</nav>
	);
}