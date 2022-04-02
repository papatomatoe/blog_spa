import React from "react";
import styles from "./PostList.module.css";

import mob from "../../images/mob.jpg";
import desk from "../../images/desk.jpg";
import { useAppContext } from "../../context";

const POSTS = [
	{
		id: "1",
		title: "Title 1",
		image:
			"https://images.unsplash.com/photo-1648288582532-7ca072ae2ee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro quibusdam repellendus commodi recusandae vitae officia. Iste ad deserunt cum ducimus quibusdam eveniet natus deleniti exercitationem dignissimos reprehenderit? Voluptates, eum!",
		date: "12.01.21",
	},
	{
		id: "2",
		title: "Title 2",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro quibusdam repellendus commodi recusandae vitae officia. Iste ad deserunt cum ducimus quibusdam eveniet natus deleniti exercitationem dignissimos reprehenderit? Voluptates, eum!",
		date: "12.01.21",
	},
	{
		id: "3",
		title: "Title 3",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro quibusdam repellendus commodi recusandae vitae officia. Iste ad deserunt cum ducimus quibusdam eveniet natus deleniti exercitationem dignissimos reprehenderit? Voluptates, eum!",
		date: "12.01.21",
	},
];

const PostList = () => {
	const { contextTitle } = useAppContext();
	return (
		<ul className={styles.posts__list}>
			{POSTS.map(({ id, title, content, date, image }) => (
				<li key={id} className={styles.posts__item}>
					<h3 className={styles.posts__title}>{contextTitle || title}</h3>
					<div className={styles.posts__wrapper}>
						<picture>
							<source media="(min-width: 768px)" srcSet={image || desk} />
							<img className={styles.image} src={image || mob} alt="alt text" />
						</picture>
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
