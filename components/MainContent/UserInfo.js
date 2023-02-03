import Image from "next/image";
import styles from "../../styles/MainContent/UserInfo.module.css";
export default function UserInfo(props) {
	return (
		<section className={styles.userInfo}>
			<div className={styles.imageContainer}>
				<Image
					src={"/user-img.jpg"}
					alt=""
					width={612 / 2}
					height={362 / 2}
				/>
			</div>
			<div className={styles.userNames}>
				<h1>{props.user}</h1>
				{/* <h2>{props.email}</h2> */}
			</div>
			<p className={styles.bio}>
				Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Reiciendis, consequuntur?
				Eaque laborum dolores debitis dolore.
			</p>
			<div className={styles.accountStats}>
				<table>
					<thead></thead>
					<tbody>
						<tr>
							<th>Followers</th>
							<td>3.6k</td>
						</tr>
						<tr>
							<th>Following</th>
							<td>500</td>
						</tr>
						<tr>
							<th>Engagements</th>
							<td>10k</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}