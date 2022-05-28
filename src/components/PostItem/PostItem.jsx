import React from "react";
import cn from "classnames";
import { marked } from "marked";
import Image from "../Image";
import styles from "./PostItem.module.css";

const PostItem = ({
	title,
	desktopImage,
	mobileImage,
	epigraph,
	date,
	isMarked = false,
}) => {
	const renderDate = (date) => {
		const dataObject = new Date(date);

		return new Intl.DateTimeFormat("ru-RU").format(dataObject);
	};

	return (
		<>
			<h3
				className={cn(styles.posts__title, {
					[styles.posts__title__marked]: isMarked,
				})}
			>
				{title}
			</h3>
			<div className={styles.posts__wrapper}>
				<Image
					className={styles.image}
					alt={title}
					desktopImage={desktopImage}
					mobileImage={mobileImage}
				/>
				<div
					className={styles.posts__content}
					dangerouslySetInnerHTML={{ __html: marked.parse(epigraph) }}
				/>
			</div>
			<time className={styles.posts__date} dateTime={date}>
				{renderDate(date)}
			</time>
		</>
	);
};

export default PostItem;
