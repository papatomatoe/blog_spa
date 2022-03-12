import React from "react";

const FormInput = (props) => {
	const getField = (type, placeholder) => {
		switch (type) {
			case "input":
				return (
					<input
						className="add-post__input"
						type="text"
						name="postTitle"
						placeholder={placeholder}
					/>
				);
			case "textarea":
				return (
					<textarea
						className="add-post__content"
						name="postContent"
						placeholder={placeholder}
					/>
				);
		}
	};

	return (
		<label className="add-post__field">
			<span className="add-post__label">{props.title}: </span>
			{getField(props.type, props.placeholder)}
		</label>
	);
};

export default FormInput;
