import React from "react";
import PostList from "../../components/PostList";
import Section from "../../components/Section";
import AddPostForm from "../../components/AddPostForm";

import styles from "./PostsPage.module.css";

const PostsPage = () => {
	return (
		<>
			<Section title="Recent posts">
				{/* <p className="posts__loader">Loading...</p> */}
				{/* <p className="posts__error">Something went wrong...</p> */}
				<PostList />
			</Section>
			<Section className={styles.addPost} title="Add Post">
				<AddPostForm />
				{/* <div className="add-post__error">
<p>Something went wrong...</p>
<p>Please, try again later.</p>
</div> */}
			</Section>
		</>
	);
};

export default PostsPage;
