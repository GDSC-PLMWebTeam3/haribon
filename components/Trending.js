import styles from "../styles/MainContent/Trending.module.css";
import trends from "./trendingData";
import { nanoid } from "nanoid";
export default function Trending() {
	return (
		<section className={styles.container}>
			<h1>Trending Topics</h1>
			<div className={styles.trends}>
				{
					trends.map((trend, index) => {
						return (
							<Trend key={nanoid()} number={index + 1} text={trend} />
						);
					})
				}
			</div>
		</section>
	);
}

function Trend(props) {
	return (
		<table className={styles.trendContainer}>
			<thead></thead>
			<tbody>
				<tr>
					<th>{props.number}</th>
					<td>#{props.text}</td>
				</tr>
			</tbody>
		</table>
	);
}
