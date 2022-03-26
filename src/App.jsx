import React from "react";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Main from "./components/Main";
import PostList from "./components/PostList";
import Section from "./components/Section";
import AddPostForm from "./components/AddPostForm";

import "./styles/main.sass";

import styles from "./App.module.css";

const App = () => {
	return (
		<>
			<Header />
			<Main title="Posts page">
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
			</Main>
			<Footer />
		</>
	);
};

export default App;
