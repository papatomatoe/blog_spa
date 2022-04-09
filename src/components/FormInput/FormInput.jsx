import React from "react";

import styles from "./FormInput.module.css";

const FormInput = ({ title, type, placeholder, value, handler }) => {
	const getField = (type, placeholder, value, handler) => {
		switch (type) {
			case "input":
				return (
					<input
						className={styles.addPost__input}
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
						className={styles.addPost__content}
						name="postContent"
						placeholder={placeholder}
						value={value}
						onChange={handler}
					/>
				);
		}
	};

	return (
		<label className={styles.addPost__field}>
			<span className={styles.addPost__label}>{title}: </span>
			{getField(type, placeholder, value, handler)}
		</label>
	);
};

export default FormInput;
