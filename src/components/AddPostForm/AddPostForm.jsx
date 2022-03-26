import React, { useState } from "react";
import FormInput from "../FormInput";

import styles from "./AddPostForm.module.css";

const AddPostForm = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const titleChangeHandler = (e) => setTitle(e.target.value);

	const contentChangeHandler = (e) => setContent(e.target.value);

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("submit event", title, content);
		setTitle("");
		setContent("");
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<FormInput
				type="input"
				title="Post Title"
				placeholder="add title..."
				value={title}
				handler={titleChangeHandler}
			/>

			<FormInput
				type="textarea"
				title="Content"
				placeholder="add post content..."
				value={content}
				handler={contentChangeHandler}
			/>

			<button
				className={styles.button}
				type="submit"
				disabled={!title || !content}
			>
				Add post
			</button>
		</form>
	);
};

export default AddPostForm;
