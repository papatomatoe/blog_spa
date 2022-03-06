import React from "react";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Main from "./components/Main";
import PostList from "./components/PostList";
import Section from "./components/Section";

const App = () => {
	return (
		<>
			<Header />
			<Main title="Posts page">
				<Section className="posts" title="Recent posts">
					{/* <p className="posts__loader">Loading...</p> */}
					{/* <p className="posts__error">Something went wrong...</p> */}
					<PostList />
				</Section>
				<Section className="add-post" title="Add Post">
					<form className="add-post__form">
						<label className="add-post__field">
							<span className="add-post__label">Post Title: </span>
							<input
								className="add-post__input"
								type="text"
								name="postTitle"
								placeholder="add title..."
							/>
						</label>
						<label className="add-post__field">
							<span className="add-post__label">Content: </span>
							<textarea
								className="add-post__content"
								name="postContent"
								placeholder="add post content..."
							></textarea>
						</label>
						<button className="add-post__button" type="submit" disabled>
							Add post
						</button>
					</form>
					{/* <div className="add-post__error">
    <p>Something went wrong...</p>
    <p>Please, try again later.</p>
  </div> */}
				</Section>
			</Main>
			<Footer />
		</>
	);
};

export default App;
