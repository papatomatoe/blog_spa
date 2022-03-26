import React from "react";

import styles from "./Main.module.css";

const Main = (props) => {
	return (
		<main className={styles.content}>
			<h1 className="visually-hidden">{props.title}</h1>
			{props.children}
		</main>
	);
};

export default Main;
