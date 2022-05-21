import React from "react";
import { marked } from "marked";
import Image from "../Image";
import styles from "./AuthorInfo.module.css";

const AuthorInfo = ({ title, desktopImage, mobileImage, description }) => {
	return (
		<div className={styles.wrapper}>
			<Image
				className={styles.image}
				alt={title}
				desktopImage={desktopImage}
				mobileImage={mobileImage}
			/>
			<div
				className={styles.description}
				dangerouslySetInnerHTML={{ __html: marked(description) }}
			/>
		</div>
	);
};

export default AuthorInfo;
