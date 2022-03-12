import React from "react";
import FormInput from "../FormInput";

const AddPostForm = () => {
	return (
		<form className="add-post__form">
			<FormInput type="input" title="Post Title" placeholder="add title..." />

			<FormInput
				type="textarea"
				title="Content"
				placeholder="add post content..."
			/>
			<button className="add-post__button" type="submit" disabled>
				Add post
			</button>
		</form>
	);
};

export default AddPostForm;
