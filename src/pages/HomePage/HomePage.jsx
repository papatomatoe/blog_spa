import React from "react";
import { marked } from "marked";
import Section from "../../components/Section";
import PostList from "../../components/PostList";
import Image from "../../components/Image";
import Button from "../../components/Button";
import styles from "./HomePage.module.css";
import { useAuthorInfo } from "../../queries/useAuthorInfo";
import { usePosts } from "../../queries/usePosts";

const HomePage = () => {
	const {
		isLoading: isLoadingAuthorInfo,
		isError: isErrorAuthorInfo,
		data: authorInfo,
	} = useAuthorInfo();
	const {
		isLoading: isLoadingPosts,
		isError: isErrorPosts,
		data: posts,
	} = usePosts();

	if (isLoadingAuthorInfo || isLoadingPosts) return <p>Loading...</p>;
	if (isErrorAuthorInfo || isErrorPosts) return <p>Error</p>;

	const authorDescriptionHTML = marked.parse(authorInfo.description);

	return (
		<>
			{authorInfo && (
				<Section className={styles.aboutSection} title={authorInfo.title}>
					<div className={styles.wrapper}>
						<Image
							className={styles.authorImage}
							alt="Author"
							desktopImage={authorInfo.desktopImage}
							mobileImage={authorInfo.mobileImage}
						/>
						<div className={styles.authorText}>
							<div
								className={styles.textItem}
								dangerouslySetInnerHTML={{
									__html: authorDescriptionHTML,
								}}
							/>
						</div>
					</div>
				</Section>
			)}
			<Section title="Posts">
				<PostList posts={posts} />
				<Button type="link" to="/posts" className={styles.toPosts}>
					Link
				</Button>
			</Section>
		</>
	);
};

export default HomePage;
