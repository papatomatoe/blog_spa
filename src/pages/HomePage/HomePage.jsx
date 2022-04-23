import React, { useEffect } from "react";
import Section from "../../components/Section";
import PostList from "../../components/PostList";
import Image from "../../components/Image";
import Button from "../../components/Button";
import styles from "./HomePage.module.css";
import authorMob from "../../images/author-mob.jpg";
import authorDesk from "../../images/author-desk.jpg";

import { getAuthorInfo } from "../../api/authorInfo";
const HomePage = () => {
	useEffect(() => {
		getAuthorInfo();
	}, []);
	return (
		<>
			<Section className={styles.aboutSection} title="Hello my name is Author">
				<div className={styles.wrapper}>
					<Image
						className={styles.authorImage}
						alt="Author"
						desktopImage={authorDesk}
						mobileImage={authorMob}
					/>
					<div className={styles.authorText}>
						<p className={styles.textItem}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit aperiam in corporis aspernatur molestias saepe ipsam
							pariatur maiores, aliquam illum odio distinctio, sunt voluptatibus
							amet, unde repellat voluptatum dolores dignissimos?
						</p>
						<p className={styles.textItem}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit aperiam in corporis aspernatur molestias saepe ipsam
							pariatur maiores, aliquam illum odio distinctio, sunt voluptatibus
							amet, unde repellat voluptatum dolores dignissimos?
						</p>
						<p className={styles.textItem}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit aperiam in corporis aspernatur molestias saepe ipsam
							pariatur maiores.
						</p>
					</div>
				</div>
			</Section>
			<Section title="Posts">
				<PostList />
				<Button type="link" to="/posts" className={styles.toPosts}>
					Link
				</Button>
			</Section>
		</>
	);
};

export default HomePage;
