import React from "react";
import { marked } from "marked";
import Image from "../Image";
import styles from "./PostList.module.css";

import mob from "../../images/mob.jpg";
import desk from "../../images/desk.jpg";

const PostList = ({ posts }) => {
	if (!posts && !posts?.length) return <p>No posts</p>;

	const renderData = (date) => {
		const dataObject = new Date(date);

		return new Intl.DateTimeFormat("ru-RU").format(dataObject);
	};

	return (
		<ul className={styles.posts__list}>
			{posts.map(({ id, title, epigraph, date, image }) => (
				<li key={id} className={styles.posts__item}>
					<h3 className={styles.posts__title}>{title}</h3>
					<div className={styles.posts__wrapper}>
						<Image
							className={styles.image}
							alt={title}
							desktopImage={image || desk}
							mobileImage={image || mob}
						/>
						<div
							className={styles.posts__content}
							dangerouslySetInnerHTML={{ __html: marked.parse(epigraph) }}
						/>
					</div>
					<time className={styles.posts__date} dateTime={date}>
						{renderData(date)}
					</time>
				</li>
			))}
		</ul>
	);
};

export default PostList;
