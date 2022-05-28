import React from "react";
import PostList from "../../components/PostList";
import Section from "../../components/Section";
import { usePosts } from "../../queries/usePosts";
const PostsPage = () => {
	const { data: posts, isError, isLoading } = usePosts();
	if (isError) return <p>Error</p>;
	if (isLoading) return <p>Loading...</p>;
	return (
		<Section title="Recent posts">
			<PostList posts={posts} isMarkFirstPost={true} />
		</Section>
	);
};

export default PostsPage;
