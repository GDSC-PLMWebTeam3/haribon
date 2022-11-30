import React from "react";
import navStyles from "../styles/Navigation.module.css";
export default function Navigation() {
	return (
		<nav>
			<div>
				<img src="/bare-logo.png" alt="Haribon" />
				<label htmlFor="search" className={navStyles.search}>
					<input type="text" name="search" id="search" />
				</label>
			</div>
			<div>
				<img src="/icon-home.png" alt="Home" />
				<img src="/icon-messages.png" alt="Messages" />
				<img src="/icon-friends.png" alt="Friends" />
				<img src="/icon-home.png" alt="Home" />
			</div>
			<div>Hi, Username!</div>
		</nav>
	);
}