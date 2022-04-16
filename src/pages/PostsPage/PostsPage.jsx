import React from "react";
import PostList from "../../components/PostList";
import Section from "../../components/Section";

const PostsPage = () => {
	return (
		<>
			<Section title="Recent posts">
				{/* <p className="posts__loader">Loading...</p> */}
				{/* <p className="posts__error">Something went wrong...</p> */}
				<PostList />
			</Section>
		</>
	);
};

export default PostsPage;
