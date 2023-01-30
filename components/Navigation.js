import React from "react";
import navStyles from "../styles/Navigation.module.css";
export default function Navigation(props) {
	return (
		<nav className={navStyles.navbar}>
			<div className={navStyles.logoAndSearch}>
				<img src="/bare-logo.png" alt="Haribon" />
				<label htmlFor="search" className={navStyles.search}>
					<input type="text" name="search" id="search" />
				</label>
			</div>
			<div className={navStyles.navigations}>
				<img src="/icon-home.png" alt="Home" />
				<img src="/icon-messages.png" alt="Messages" />
				<img src="/icon-friends.png" alt="Friends" />
				<img src="/icon-home.png" alt="Home" />
			</div>
			<div className={navStyles.userMenu}>{props.user}</div>
		</nav>
	);
}