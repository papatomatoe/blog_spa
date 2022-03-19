import React from "react";

const FormInput = (props) => {
	const getField = (type, placeholder, value, handler) => {
		switch (type) {
			case "input":
				return (
					<input
						className="add-post__input"
						type="text"
						name="postTitle"
						placeholder={placeholder}
						value={value}
						onChange={handler}
					/>
				);
			case "textarea":
				return (
					<textarea
						className="add-post__content"
						name="postContent"
						placeholder={placeholder}
						value={value}
						onChange={handler}
					/>
				);
		}
	};

	return (
		<label className="add-post__field">
			<span className="add-post__label">{props.title}: </span>
			{getField(props.type, props.placeholder, props.value, props.handler)}
		</label>
	);
};

export default FormInput;
