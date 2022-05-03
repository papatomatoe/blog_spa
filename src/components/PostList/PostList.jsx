import React from "react";
import Image from "../Image";
import styles from "./PostList.module.css";

import mob from "../../images/mob.jpg";
import desk from "../../images/desk.jpg";

const PostList = ({ posts }) => {
	if (!posts && !posts?.length) return <p>No posts</p>;
	return (
		<ul className={styles.posts__list}>
			{posts.map(({ id, title, content, date, image }) => (
				<li key={id} className={styles.posts__item}>
					<h3 className={styles.posts__title}>{title}</h3>
					<div className={styles.posts__wrapper}>
						<Image
							className={styles.image}
							alt={title}
							desktopImage={image || desk}
							mobileImage={image || mob}
						/>
						<p className={styles.posts__content}>{content}</p>
					</div>
					<time className={styles.posts__date} dateTime={date}>
						{date}
					</time>
				</li>
			))}
		</ul>
	);
};

export default PostList;
