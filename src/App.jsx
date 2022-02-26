import React from "react";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
	return (
		<>
			<Header />
			<Main title="Posts page">
				<section className="posts">
					<h2 className="posts__heading">Recent posts</h2>
					{/* <p className="posts__loader">Loading...</p> */}
					{/* <p className="posts__error">Something went wrong...</p> */}
					<ul className="posts__list">
						<li className="posts__item">
							<h3 className="posts__title">Title</h3>
							<p className="posts__content">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
								porro quibusdam repellendus commodi recusandae vitae officia.
								Iste ad deserunt cum ducimus quibusdam eveniet natus deleniti
								exercitationem dignissimos reprehenderit? Voluptates, eum!
							</p>
							<time className="posts__date" dateTime="12.01.21">
								12.01.21
							</time>
						</li>
					</ul>
				</section>
				<section className="add-post">
					<h2 className="add-post__title">Add Post</h2>
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
				</section>
			</Main>
			<Footer />
		</>
	);
};

export default App;
