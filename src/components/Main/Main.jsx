import React from "react";

import styles from "./Main.module.css";

const Main = ({ title, children }) => {
	return (
		<main className={styles.content}>
			<h1 className="visually-hidden">{title}</h1>
			{children}
		</main>
	);
};

export default Main;
